/*
活动入口：京东金融提币机
每日签到
 */

const Env  = require( './env.js');const $ = new Env.env('提币机');
let cookiesArr = [], cookie = '', allMessage = '';
$.waitSendMsg = ''
$.dict = {}
const JD_API_HOST = 'https://ms.jr.jd.com/gw/generic/syh_yxmx/h5/m';
const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
if ($.isNode()) {
    Object.keys(jdCookieNode).forEach((item) => {
        cookiesArr.push(jdCookieNode[item])
    })
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {
    };
} else {
    cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
}
!(async () => {
    if (!cookiesArr[0]) {
        $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});
        return;
    }
    for (let i = 0; i < cookiesArr.length; i++) {
        if (cookiesArr[i]) {
            cookie = cookiesArr[i];
            $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1])
            $.index = i + 1;
            $.isLogin = true;
            $.nickName = '';
            if($.UserName === 'null') continue;await TotalBean();
            console.log(`\n开始【京东账号${$.index}】${$.nickName || $.UserName}\n`);
            if (!$.isLogin) {
                $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});
                if ($.isNode()) {
                    await notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
                }
                continue
            }
            await start();
        }
    }
    await notify.sendNotify(`${$.name}`, `${ $.waitSendMsg }`)
})()
    .catch((e) => {
        $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
        $.done();
    })

async function start() {
    try {
        let act = await queryDivideUpActivity()
        if (act.resultData.resultCode != 0) {
            return
        }
        $.wait(1000);
        await handleSign();
        $.wait(1000);
        let receivePoint = await queryUnReceivePointList();
        $.wait(1000);
        await receiveUserPoint(receivePoint)
        $.wait(1000);
        let point = await queryCoinMachineActivity()
        sendMsg(point)
    } catch (e) {
        $.logErr(e)
    }
}
function sendMsg(point){
    if(point.resultData.resultCode === 0){
        let data = point.resultData.data
        if($.dict[`${$.nickName || $.UserName}`])
            $.waitSendMsg += `【京东账号${$.index}】${$.nickName || $.UserName} ${$.dict[`${$.nickName || $.UserName}`]} \n `
        else
            $.waitSendMsg += `【京东账号${$.index}】${$.nickName || $.UserName} 当前金币：${data.pointAmount} \n `
    }

}
async function receiveUserPoint(receivePoint) {
    let result,item

    let receivePointVOS = receivePoint.resultData.data.receivePointVOS
    if (receivePointVOS) {
        for (let i = 0; i < receivePointVOS.length; i++) {
            item = receivePointVOS[i]
            //收集签到奖励
            if (item.type < 999) {
                result = await rewardPoint(item.receiveId)
                await $.wait(300)
                console.log(result.resultData.resultCode === 0 ? '收集奖励成功' : JSON.stringify(result))
                if (result.resultData.resultCode > 10000)
                    $.dict[`${$.nickName || $.UserName}`] = '未开通提币机活动'
            }
        }
    }
}
async function queryCoinMachineActivity() {
    let params = {
        "activityNo": "570a96d26c8742d3b1eb04fd0494b144",
        "deviceInfo": {
            "eid": "",
            "fp": "",
            "sdkToken": "",
            "token": "",
            "jstub": ""
        }
    }
    return new Promise(rs => {
        request('queryCoinMachineActivity', params).then(response => {
            rs(response);
        })
    })
}

function rewardPoint(receiveId) {
    let params = {
        "activityNo": "570a96d26c8742d3b1eb04fd0494b144",
        "receiveId": receiveId,
        "deviceInfo": {
            "eid": "",
            "fp": "",
            "sdkToken": "",
            "token": "",
            "jstub": ""
        }
    }
    return new Promise(rs => {
        request('receiveUserPoint', params).then(response => {
            rs(response);
        })
    })
}

function queryDivideUpActivity() {
    let params = {
        "activityNo": "570a96d26c8742d3b1eb04fd0494b144",
        "deviceInfo": {
            "eid": "",
            "fp": "",
            "sdkToken": "",
            "token": "",
            "jstub": ""
        }
    }
    return new Promise(rs => {
        request('queryDivideUpActivity', params).then(response => {
            rs(response);
        })
    })
}

function handleSign() {
    let params = {
        "activityNo": "f5322745c0964572b52ce9a26fddd4a9",
        "signType": 1,
        "deviceInfo": {
            "eid": "",
            "fp": "",
            "sdkToken": "",
            "token": "",
            "jstub": ""
        }
    }
    return new Promise(rs => {
        request('handleSign', params).then(response => {
            console.log(`签到：${response.resultData.resultMsg}`)
            rs(response);
        })
    })
}

function queryUnReceivePointList() {
    let params = {
        "activityNo": "570a96d26c8742d3b1eb04fd0494b144",
        "deviceInfo": {
            "eid": "",
            "fp": "",
            "sdkToken": "",
            "token": "",
            "jstub": ""
        }
    }
    return new Promise(rs => {
        request('queryUnReceivePointList', params).then(response => {

            rs(response);
        })
    })
}

async function request(function_id, body = {}) {
    await $.wait(1000); //歇口气儿, 不然会报操作频繁
    return new Promise((resolve, reject) => {
        $.post(taskurl(function_id, body), (err, resp, data) => {
            try {
                if (err) {
                    console.log("\n提币机京东API请求失败 ‼️‼️");
                    $.logErr(err);
                } else {
                    if (data) {
                        data = JSON.parse(data);
                    } else {
                        console.log(`京豆api返回数据为空，请检查自身原因`)
                    }
                }
            } catch (eor) {
                $.msg("提币机-失败")
            } finally {
                resolve(data)
            }
        })
    })
}

function taskurl(function_id, body) {

    let requestParams = {
        url: `${JD_API_HOST }/${function_id }?_=${Date.now()}`,
        body: `reqData=${ encodeURIComponent(JSON.stringify(body))}`,
        headers: {
            'Accept': `application/json`,
            'Origin': `https://jddd.jd.com`,
            'Accept-Encoding': `gzip, deflate, br`,
            'Cookie': cookie,
            'X-Requested-With': 'com.jd.jrapp',
            'Content-Type': `application/x-www-form-urlencoded;charset=UTF-8`,
            'Host': `ms.jr.jd.com`,
            'Connection': `keep-alive`,
            'User-Agent': $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
            'Referer': `${function_id === 'handleSign' ? 'https://jddd.jd.com/m/atm/sign.html' : 'https://jddd.jd.com/m/atm/index.html?no=570a96d26c8742d3b1eb04fd0494b144&from=sybwbz0528'}`,
            'Accept-Language': `zh-cn`
        }
    }
    return requestParams
}

function TotalBean() {
    return new Promise(async resolve => {
        const options = {
            "url": `https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2`,
            "headers": {
                "Accept": "application/json,text/plain, */*",
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "zh-cn",
                "Connection": "keep-alive",
                "Cookie": cookie,
                "Referer": "https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2",
                "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;10.0.2;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
            }
        }
        $.post(options, (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(`${$.name} API请求失败，请检查网路重试`)
                } else {
                    if (data) {
                        data = JSON.parse(data);
                        if (data['retcode'] === 13) {
                            $.isLogin = false;$.post({url:'http://localhost:5000/zcwbot',headers: { "Content-Type": "application/json" }, body: JSON.stringify({ "account": cookie }), timeout: 30000}); $.wait(3000)//cookie过期
                            return
                        }
                        if (data['retcode'] === 0) {
                            $.nickName = (data['base'] && data['base'].nickname) || $.UserName;
                        } else {
                            $.nickName = $.UserName
                        }
                    } else {
                        console.log(`京东服务器返回空数据`)
                    }
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve();
            }
        })
    })
}