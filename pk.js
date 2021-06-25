window.__require = function t(e, o, i) {
	function n(a, s) {
		if (!o[a]) {
			if (!e[a]) {
				var c = a.split("/");
				if (c = c[c.length - 1], !e[c]) {
					var l = "function" == typeof __require && __require;
					if (!s && l) return l(c, !0);
					if (r) return r(c, !0);
					throw new Error("Cannot find module '" + a + "'")
				}
				a = c
			}
			var u = o[a] = {
				exports: {}
			};
			e[a][0].call(u.exports,
			function(t) {
				return n(e[a][1][t] || t)
			},
			u, u.exports, t, e, o, i)
		}
		return o[a].exports
	}
	for (var r = "function" == typeof __require && __require,
	a = 0; a < i.length; a++) n(i[a]);
	return n
} ({
	ActivityCtrl: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "0dad6Srz31ASY5kLUFsgTQz", "ActivityCtrl");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		},
		a = this && this.__awaiter ||
		function(t, e, o, i) {
			return new(o || (o = Promise))(function(n, r) {
				function a(t) {
					try {
						c(i.next(t))
					} catch(e) {
						r(e)
					}
				}
				function s(t) {
					try {
						c(i.
						throw (t))
					} catch(e) {
						r(e)
					}
				}
				function c(t) {
					var e;
					t.done ? n(t.value) : (e = t.value, e instanceof o ? e: new o(function(t) {
						t(e)
					})).then(a, s)
				}
				c((i = i.apply(t, e || [])).next())
			})
		},
		s = this && this.__generator ||
		function(t, e) {
			var o, i, n, r, a = {
				label: 0,
				sent: function() {
					if (1 & n[0]) throw n[1];
					return n[1]
				},
				trys: [],
				ops: []
			};
			return r = {
				next: s(0),
				throw: s(1),
				return: s(2)
			},
			"function" == typeof Symbol && (r[Symbol.iterator] = function() {
				return this
			}),
			r;
			function s(t) {
				return function(e) {
					return c([t, e])
				}
			}
			function c(r) {
				if (o) throw new TypeError("Generator is already executing.");
				for (; a;) try {
					if (o = 1, i && (n = 2 & r[0] ? i.
					return: r[0] ? i.
					throw || ((n = i.
					return) && n.call(i), 0) : i.next) && !(n = n.call(i, r[1])).done) return n;
					switch (i = 0, n && (r = [2 & r[0], n.value]), r[0]) {
					case 0:
					case 1:
						n = r;
						break;
					case 4:
						return a.label++,
						{
							value: r[1],
							done: !1
						};
					case 5:
						a.label++,
						i = r[1],
						r = [0];
						continue;
					case 7:
						r = a.ops.pop(),
						a.trys.pop();
						continue;
					default:
						if (! (n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === r[0] || 2 === r[0])) {
							a = 0;
							continue
						}
						if (3 === r[0] && (!n || r[1] > n[0] && r[1] < n[3])) {
							a.label = r[1];
							break
						}
						if (6 === r[0] && a.label < n[1]) {
							a.label = n[1],
							n = r;
							break
						}
						if (n && a.label < n[2]) {
							a.label = n[2],
							a.ops.push(r);
							break
						}
						n[2] && a.ops.pop(),
						a.trys.pop();
						continue
					}
					r = e.call(t, a)
				} catch(s) {
					r = [6, s],
					i = 0
				} finally {
					o = n = 0
				}
				if (5 & r[0]) throw r[1];
				return {
					value: r[0] ? r[1] : void 0,
					done: !0
				}
			}
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.activityCtrl = void 0;
		var c = t("../Define/StaticData"),
		l = t("../Framework/Utils/Singleton"),
		u = t("../Network/Net"),
		p = t("../Platforms/Platform"),
		h = cc._decorator,
		d = h.ccclass,
		f = (h.property,
		function(t) {
			function e() {
				return null !== t && t.apply(this, arguments) || this
			}
			return n(e, t),
			e.prototype.initialize = function() {
				return a(this, void 0, void 0,
				function() {
					var t;
					return s(this,
					function(e) {
						switch (e.label) {
						case 0:
							return t = this,
							[4, u.Net.getActivityInfo()];
						case 1:
							return t.activity = e.sent(),
							p.
						default.shareImg = "https:" + this.activity.shareImage,
							p.
						default.title = this.activity.title,
							p.
						default.content = this.activity.shareDetail,
							p.
						default.keyEndTime = this.activity.endTime.toString(),
							p.
						default.activityId = this.activity.id,
							p.
						default.shareTitle = this.activity.shareTitle,
							p.
						default.flag = this.activity.flag,
							c.StaticData.startTime = new Date(this.activity.startTime),
							c.StaticData.endTime = new Date(this.activity.endTime),
							[2]
						}
					})
				})
			},
			r([d], e)
		} (l.Singleton()));
		o.
	default = f,
		o.activityCtrl = f.inst,
		cc._RF.pop()
	},
	{
		"../Define/StaticData": "StaticData",
		"../Framework/Utils/Singleton": "Singleton",
		"../Network/Net": "Net",
		"../Platforms/Platform": "Platform"
	}],
	Announcement: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "8600fcp9uZCI7Ci6oHJ/r9Z", "Announcement");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../../Define/StaticData"),
		s = t("../../Framework/UIBase"),
		c = cc._decorator,
		l = c.ccclass,
		u = c.property,
		p = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.labTime = null,
				e
			}
			return n(e, t),
			e.prototype.onLoad = function() {
				var t = new Date(a.StaticData.endTime.getTime());
				t.setDate(a.StaticData.endTime.getDate() + 1);
				var e = t.getMonth() + 1 + "\u6708" + t.getDate() + "\u65e5";
				this.labTime.string = "\u9884\u8ba1" + e + "9\u70b9\u53ef\u9886\u53d6\u5956\u52b1"
			},
			r([u(cc.Label)], e.prototype, "labTime", void 0),
			r([l], e)
		} (s.
	default);
		o.
	default = p,
		cc._RF.pop()
	},
	{
		"../../Define/StaticData": "StaticData",
		"../../Framework/UIBase": "UIBase"
	}],
	AwardRank: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "e3201xDtUdH8KETLDjcDdCL", "AwardRank");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		},
		a = this && this.__awaiter ||
		function(t, e, o, i) {
			return new(o || (o = Promise))(function(n, r) {
				function a(t) {
					try {
						c(i.next(t))
					} catch(e) {
						r(e)
					}
				}
				function s(t) {
					try {
						c(i.
						throw (t))
					} catch(e) {
						r(e)
					}
				}
				function c(t) {
					var e;
					t.done ? n(t.value) : (e = t.value, e instanceof o ? e: new o(function(t) {
						t(e)
					})).then(a, s)
				}
				c((i = i.apply(t, e || [])).next())
			})
		},
		s = this && this.__generator ||
		function(t, e) {
			var o, i, n, r, a = {
				label: 0,
				sent: function() {
					if (1 & n[0]) throw n[1];
					return n[1]
				},
				trys: [],
				ops: []
			};
			return r = {
				next: s(0),
				throw: s(1),
				return: s(2)
			},
			"function" == typeof Symbol && (r[Symbol.iterator] = function() {
				return this
			}),
			r;
			function s(t) {
				return function(e) {
					return c([t, e])
				}
			}
			function c(r) {
				if (o) throw new TypeError("Generator is already executing.");
				for (; a;) try {
					if (o = 1, i && (n = 2 & r[0] ? i.
					return: r[0] ? i.
					throw || ((n = i.
					return) && n.call(i), 0) : i.next) && !(n = n.call(i, r[1])).done) return n;
					switch (i = 0, n && (r = [2 & r[0], n.value]), r[0]) {
					case 0:
					case 1:
						n = r;
						break;
					case 4:
						return a.label++,
						{
							value: r[1],
							done: !1
						};
					case 5:
						a.label++,
						i = r[1],
						r = [0];
						continue;
					case 7:
						r = a.ops.pop(),
						a.trys.pop();
						continue;
					default:
						if (! (n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === r[0] || 2 === r[0])) {
							a = 0;
							continue
						}
						if (3 === r[0] && (!n || r[1] > n[0] && r[1] < n[3])) {
							a.label = r[1];
							break
						}
						if (6 === r[0] && a.label < n[1]) {
							a.label = n[1],
							n = r;
							break
						}
						if (n && a.label < n[2]) {
							a.label = n[2],
							a.ops.push(r);
							break
						}
						n[2] && a.ops.pop(),
						a.trys.pop();
						continue
					}
					r = e.call(t, a)
				} catch(s) {
					r = [6, s],
					i = 0
				} finally {
					o = n = 0
				}
				if (5 & r[0]) throw r[1];
				return {
					value: r[0] ? r[1] : void 0,
					done: !0
				}
			}
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = t("../../Controller/WorldRankCtrl"),
		l = t("../../Define/Define"),
		u = t("../../Define/StaticData"),
		p = t("../../Framework/UI/ScrollViewOptimizer"),
		h = t("../../Framework/UIBase"),
		d = t("../../Model/UserModel"),
		f = t("./Rank/WorldRankItem"),
		_ = cc._decorator,
		y = _.ccclass,
		v = _.property,
		m = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.labAwardTime = null,
				e.awardRank = null,
				e.userInfo = null,
				e
			}
			return n(e, t),
			e.prototype.onLoad = function() {
				var t = new Date(u.StaticData.endTime.getTime());
				t.setDate(u.StaticData.endTime.getDate() + 1);
				var e = t.getMonth() + 1 + "\u6708" + t.getDate() + "\u65e5" + t.getHours() + "\u65f6" + t.getMinutes() + "\u5206" + t.getSeconds() + "\u79d2";
				this.labAwardTime.string = "\u8d5b\u5b63\u5956\u52b1\u5df2\u53d1\u653e\uff0c" + e + "\u5f00\u542f\u65b0\u8d5b\u5b63"
			},
			e.prototype.onOpen = function() {
				this.initialize()
			},
			e.prototype.initialize = function() {
				return a(this, void 0, void 0,
				function() {
					return s(this,
					function(t) {
						switch (t.label) {
						case 0:
							return [4, c.worldRankCtrl.initialize()];
						case 1:
							return t.sent(),
							c.worldRankCtrl.changeState(l.WorldRankState.award),
							this.awardRank.setData(c.worldRankCtrl.rankInfos, this.onRankItemUpdate.bind(this)),
							this.updatePlayerMes(),
							[2]
						}
					})
				})
			},
			e.prototype.onRankItemUpdate = function(t, e, o) {
				e.getComponent(f.
			default).onItemRefresh(t, o)
			},
			e.prototype.updatePlayerMes = function() {
				var t, e = d.userModel.rankNum;
				"\u672a\u4e0a\u699c" != e ? (t = Number(e) - 1, this.userInfo.onItemRefresh(t, c.worldRankCtrl.getDataByIndex(t))) : this.userInfo.updateSelfInfo(d.userModel.userInfo.imgUrl, d.userModel.userInfo.getNickName(), d.userModel.userInfo.rankNum)
			},
			r([v(cc.Label)], e.prototype, "labAwardTime", void 0),
			r([v(p.
		default)], e.prototype, "awardRank", void 0),
			r([v(f.
		default)], e.prototype, "userInfo", void 0),
			r([y], e)
		} (h.
	default);
		o.
	default = m,
		cc._RF.pop()
	},
	{
		"../../Controller/WorldRankCtrl": "WorldRankCtrl",
		"../../Define/Define": "Define",
		"../../Define/StaticData": "StaticData",
		"../../Framework/UI/ScrollViewOptimizer": "ScrollViewOptimizer",
		"../../Framework/UIBase": "UIBase",
		"../../Model/UserModel": "UserModel",
		"./Rank/WorldRankItem": "WorldRankItem"
	}],
	BannerItem: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "8ee86o2dpxBUI4WhHgmaxEL", "BannerItem");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../../../Define/Define"),
		s = t("../../../Define/EventId"),
		c = t("../../../Framework/Event/EventMgr"),
		l = t("../../../Platforms/BurierdPoint"),
		u = t("../../../Platforms/Platform"),
		p = cc._decorator,
		h = p.ccclass,
		d = p.property,
		f = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.sprItem = null,
				e.url = null,
				e
			}
			return n(e, t),
			e.prototype.init = function(t, e) {
				this.bannerData = t,
				this.url = e,
				c.EVENT.emit(s.EventId.ON_UPDATE_SPRITE_URL, this.sprItem, t.adImgUrl)
			},
			e.prototype.onClickImg = function() {
				u.
			default.openUrl(this.url),
				l.buriedPoint.sendEvent(a.TaEventName.btnClick, "banner\u5e7f\u544a\u70b9\u51fb", a.TaView.main)
			},
			r([d(cc.Sprite)], e.prototype, "sprItem", void 0),
			r([h], e)
		} (cc.Component);
		o.
	default = f,
		cc._RF.pop()
	},
	{
		"../../../Define/Define": "Define",
		"../../../Define/EventId": "EventId",
		"../../../Framework/Event/EventMgr": "EventMgr",
		"../../../Platforms/BurierdPoint": "BurierdPoint",
		"../../../Platforms/Platform": "Platform"
	}],
	BattleCtrl: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "8b119yt9UpHaohM21sCMEBM", "BattleCtrl");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		},
		a = this && this.__awaiter ||
		function(t, e, o, i) {
			return new(o || (o = Promise))(function(n, r) {
				function a(t) {
					try {
						c(i.next(t))
					} catch(e) {
						r(e)
					}
				}
				function s(t) {
					try {
						c(i.
						throw (t))
					} catch(e) {
						r(e)
					}
				}
				function c(t) {
					var e;
					t.done ? n(t.value) : (e = t.value, e instanceof o ? e: new o(function(t) {
						t(e)
					})).then(a, s)
				}
				c((i = i.apply(t, e || [])).next())
			})
		},
		s = this && this.__generator ||
		function(t, e) {
			var o, i, n, r, a = {
				label: 0,
				sent: function() {
					if (1 & n[0]) throw n[1];
					return n[1]
				},
				trys: [],
				ops: []
			};
			return r = {
				next: s(0),
				throw: s(1),
				return: s(2)
			},
			"function" == typeof Symbol && (r[Symbol.iterator] = function() {
				return this
			}),
			r;
			function s(t) {
				return function(e) {
					return c([t, e])
				}
			}
			function c(r) {
				if (o) throw new TypeError("Generator is already executing.");
				for (; a;) try {
					if (o = 1, i && (n = 2 & r[0] ? i.
					return: r[0] ? i.
					throw || ((n = i.
					return) && n.call(i), 0) : i.next) && !(n = n.call(i, r[1])).done) return n;
					switch (i = 0, n && (r = [2 & r[0], n.value]), r[0]) {
					case 0:
					case 1:
						n = r;
						break;
					case 4:
						return a.label++,
						{
							value: r[1],
							done: !1
						};
					case 5:
						a.label++,
						i = r[1],
						r = [0];
						continue;
					case 7:
						r = a.ops.pop(),
						a.trys.pop();
						continue;
					default:
						if (! (n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === r[0] || 2 === r[0])) {
							a = 0;
							continue
						}
						if (3 === r[0] && (!n || r[1] > n[0] && r[1] < n[3])) {
							a.label = r[1];
							break
						}
						if (6 === r[0] && a.label < n[1]) {
							a.label = n[1],
							n = r;
							break
						}
						if (n && a.label < n[2]) {
							a.label = n[2],
							a.ops.push(r);
							break
						}
						n[2] && a.ops.pop(),
						a.trys.pop();
						continue
					}
					r = e.call(t, a)
				} catch(s) {
					r = [6, s],
					i = 0
				} finally {
					o = n = 0
				}
				if (5 & r[0]) throw r[1];
				return {
					value: r[0] ? r[1] : void 0,
					done: !0
				}
			}
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.battleCtrl = void 0;
		var c = t("../Define/Define"),
		l = t("../Define/EventId"),
		u = t("../Define/StaticData"),
		p = t("../Define/UIDefs"),
		h = t("../Framework/Event/EventMgr"),
		d = t("../Framework/UI/UIFacade"),
		f = t("../Framework/UI/UIMgr"),
		_ = t("../Framework/Utils/LogUtil"),
		y = t("../Framework/Utils/Singleton"),
		v = t("../Model/FriendRankData"),
		m = t("../Model/PkDataModel"),
		g = t("../Model/UserModel"),
		b = t("../Network/Net"),
		w = t("../Platforms/BurierdPoint"),
		I = cc._decorator,
		T = I.ccclass,
		P = (I.property,
		function(t) {
			function e() {
				return null !== t && t.apply(this, arguments) || this
			}
			return n(e, t),
			e.prototype.normalPk = function(t) {
				return a(this, void 0, void 0,
				function() {
					var e, o;
					return s(this,
					function(i) {
						switch (i.label) {
						case 0:
							return [4, this.requestPk(t)];
						case 1:
							return (e = i.sent()) ? ((o = new m.
						default).init(e.pkResult, !1), f.
						default.inst.close(p.UIType.FriendRank), h.EVENT.emit(l.EventId.ON_START_BATTLE), f.
						default.inst.open(p.UIType.Battle, o), [2]) : [2]
						}
					})
				})
			},
			e.prototype.distantPk = function(t) {
				f.
			default.inst.open(p.UIType.Invitation, t)
			},
			e.prototype.passivePk = function(t) {
				f.
			default.inst.open(p.UIType.PassivePk, t)
			},
			e.prototype.initiaPk = function() {},
			e.prototype.requestPk = function(t) {
				return a(this, void 0, Promise,
				function() {
					var e;
					return s(this,
					function(o) {
						switch (o.label) {
						case 0:
							return w.buriedPoint.sendEvent(c.TaEventName.pageShow, "\u53d1\u8d77PK", c.TaView.main, u.StaticData.qdSouce, u.StaticData.source),
							[4, b.Net.launchBattle(g.userModel.getLkePin(), t.friendPin, t.relation)];
						case 1:
							return (e = o.sent()).state != c.PKState.success ? (_.LogUtil.logError(e.msg), null != e.msg && d.UIFacade.flyTxtCenter(e.msg), [2, null]) : [2, e]
						}
					})
				})
			},
			e.prototype.requestPkByPin = function(t) {
				return a(this, void 0, void 0,
				function() {
					var e, o, i, n, r;
					return s(this,
					function(a) {
						switch (a.label) {
						case 0:
							return [4, b.Net.jdFriendship(t)];
						case 1:
							return e = a.sent(),
							o = e ? c.Relation.close: c.Relation.distant,
							t == g.userModel.getLkePin() ? [2] : (w.buriedPoint.sendEvent(c.TaEventName.pageShow, "\u53d1\u8d77PK", c.TaView.main, u.StaticData.qdSouce, u.StaticData.source), [4, b.Net.launchBattle(t, g.userModel.getLkePin(), o, u.StaticData.ActivityID, !0)]);
						case 2:
							return (i = a.sent()).state == c.PKState.fail ? (_.LogUtil.logError(i.msg), null != i.msg && d.UIFacade.flyTxtCenter(i.msg), [2]) : e ? ((r = new m.
						default).init(i.pkResult, !0), h.EVENT.emit(l.EventId.ON_START_BATTLE), f.
						default.inst.open(p.UIType.Battle, r), [3, 5]) : [3, 3];
						case 3:
							return [4, b.Net.getMyRankInfoByPin(t)];
						case 4:
							n = a.sent(),
							(r = new v.FriendRankData).friendPin = t,
							r.relation = o,
							r.wxImage = n.imgUrl,
							r.jdNickname = n.nickName,
							this.passivePk(r),
							a.label = 5;
						case 5:
							return [2]
						}
					})
				})
			},
			e.prototype.jumpBattle = function() {
				f.
			default.inst.close(p.UIType.FriendRank),
				h.EVENT.emit(l.EventId.ON_START_BATTLE)
			},
			r([T], e)
		} (y.Singleton()));
		o.
	default = P,
		o.battleCtrl = P.inst,
		cc._RF.pop()
	},
	{
		"../Define/Define": "Define",
		"../Define/EventId": "EventId",
		"../Define/StaticData": "StaticData",
		"../Define/UIDefs": "UIDefs",
		"../Framework/Event/EventMgr": "EventMgr",
		"../Framework/UI/UIFacade": "UIFacade",
		"../Framework/UI/UIMgr": "UIMgr",
		"../Framework/Utils/LogUtil": "LogUtil",
		"../Framework/Utils/Singleton": "Singleton",
		"../Model/FriendRankData": "FriendRankData",
		"../Model/PkDataModel": "PkDataModel",
		"../Model/UserModel": "UserModel",
		"../Network/Net": "Net",
		"../Platforms/BurierdPoint": "BurierdPoint"
	}],
	BattleItemMes: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "ceb6aDEPHRJnp/Q/HvpgZwj", "BattleItemMes");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../../../Define/EventId"),
		s = t("../../../Framework/Event/EventMgr"),
		c = cc._decorator,
		l = c.ccclass,
		u = c.property,
		p = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.lab_Name = null,
				e.spr_Avatra = null,
				e
			}
			return n(e, t),
			e.prototype.init = function(t) {
				this.lab_Name.string = t.name,
				s.EVENT.emit(a.EventId.ON_UPDATE_SPRITE_AVATAR, this.spr_Avatra, t.avaterUrl)
			},
			r([u(cc.Label)], e.prototype, "lab_Name", void 0),
			r([u(cc.Sprite)], e.prototype, "spr_Avatra", void 0),
			r([l], e)
		} (cc.Component);
		o.
	default = p,
		cc._RF.pop()
	},
	{
		"../../../Define/EventId": "EventId",
		"../../../Framework/Event/EventMgr": "EventMgr"
	}],
	BattleResult: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "06e57MLVDdPUYZHwlCLTrTI", "BattleResult");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		},
		a = this && this.__awaiter ||
		function(t, e, o, i) {
			return new(o || (o = Promise))(function(n, r) {
				function a(t) {
					try {
						c(i.next(t))
					} catch(e) {
						r(e)
					}
				}
				function s(t) {
					try {
						c(i.
						throw (t))
					} catch(e) {
						r(e)
					}
				}
				function c(t) {
					var e;
					t.done ? n(t.value) : (e = t.value, e instanceof o ? e: new o(function(t) {
						t(e)
					})).then(a, s)
				}
				c((i = i.apply(t, e || [])).next())
			})
		},
		s = this && this.__generator ||
		function(t, e) {
			var o, i, n, r, a = {
				label: 0,
				sent: function() {
					if (1 & n[0]) throw n[1];
					return n[1]
				},
				trys: [],
				ops: []
			};
			return r = {
				next: s(0),
				throw: s(1),
				return: s(2)
			},
			"function" == typeof Symbol && (r[Symbol.iterator] = function() {
				return this
			}),
			r;
			function s(t) {
				return function(e) {
					return c([t, e])
				}
			}
			function c(r) {
				if (o) throw new TypeError("Generator is already executing.");
				for (; a;) try {
					if (o = 1, i && (n = 2 & r[0] ? i.
					return: r[0] ? i.
					throw || ((n = i.
					return) && n.call(i), 0) : i.next) && !(n = n.call(i, r[1])).done) return n;
					switch (i = 0, n && (r = [2 & r[0], n.value]), r[0]) {
					case 0:
					case 1:
						n = r;
						break;
					case 4:
						return a.label++,
						{
							value: r[1],
							done: !1
						};
					case 5:
						a.label++,
						i = r[1],
						r = [0];
						continue;
					case 7:
						r = a.ops.pop(),
						a.trys.pop();
						continue;
					default:
						if (! (n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === r[0] || 2 === r[0])) {
							a = 0;
							continue
						}
						if (3 === r[0] && (!n || r[1] > n[0] && r[1] < n[3])) {
							a.label = r[1];
							break
						}
						if (6 === r[0] && a.label < n[1]) {
							a.label = n[1],
							n = r;
							break
						}
						if (n && a.label < n[2]) {
							a.label = n[2],
							a.ops.push(r);
							break
						}
						n[2] && a.ops.pop(),
						a.trys.pop();
						continue
					}
					r = e.call(t, a)
				} catch(s) {
					r = [6, s],
					i = 0
				} finally {
					o = n = 0
				}
				if (5 & r[0]) throw r[1];
				return {
					value: r[0] ? r[1] : void 0,
					done: !0
				}
			}
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = t("../../../Controller/TreasureCtrl"),
		l = t("../../../Define/Define"),
		u = t("../../../Define/EventId"),
		p = t("../../../Framework/Event/EventMgr"),
		h = t("../../../Framework/UIBase"),
		d = t("../../../Framework/Utils/Utils"),
		f = t("../../../Model/UserModel"),
		_ = t("../../../Platforms/BurierdPoint"),
		y = t("../Tool/SwitchNode"),
		v = t("../Treasure/TreasureScrollView"),
		m = t("./OverTreasureItem"),
		g = cc._decorator,
		b = g.ccclass,
		w = g.property,
		I = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.treasureView = null,
				e.resTitle = null,
				e.btns = null,
				e
			}
			return n(e, t),
			e.prototype.onLoad = function() {
				p.EVENT.on(u.EventId.GAMEOVER_TREASURE_UPDATE, this.selectCurTreasure, this)
			},
			e.prototype.onDestroy = function() {
				p.EVENT.off(u.EventId.GAMEOVER_TREASURE_UPDATE, this.selectCurTreasure, this)
			},
			e.prototype.onOpen = function(t, e) {
				this.pkRes = e.pkRes,
				this.updateMes()
			},
			e.prototype.selectCurTreasure = function(t) {
				this.curItem = t;
				var e = f.userModel.winNum >= t.data.wins && t.data.received != l.TreasureState.received ? 1 : 0;
				this.btns.setCurNode(e)
			},
			e.prototype.updateMes = function() {
				return a(this, void 0, void 0,
				function() {
					return s(this,
					function() {
						return this.resTitle.setCurNode(d.
					default.getIndexByEnum(l.PKRes, this.pkRes)),
						this.updateTreasureInfo(),
						this.sendPKRes(),
						[2]
					})
				})
			},
			e.prototype.sendPKRes = function() {
				var t;
				switch (this.pkRes) {
				case l.PKRes.win:
					t = "\u80dc\u5229";
					break;
				case l.PKRes.fail:
					t = "\u5931\u8d25";
					break;
				case l.PKRes.deuce:
					t = "\u5e73\u5c40"
				}
				_.buriedPoint.sendEvent(l.TaEventName.pageShow, "\u5b8c\u6210pk", l.TaView.pkEnd, t)
			},
			e.prototype.updateTreasureInfo = function() {
				return a(this, void 0, void 0,
				function() {
					return s(this,
					function() {
						return this.treasureView.setData(c.treasureCtrl.treasureDatas, this.onTreasureItemUpdate.bind(this)),
						this.treasureView.scrollToMid(c.treasureCtrl.showLevel),
						[2]
					})
				})
			},
			e.prototype.onTreasureItemUpdate = function(t, e, o) {
				e.getComponent(m.
			default).onItemUpdate(t, o)
			},
			e.prototype.closePanel = function() {
				this.close(),
				p.EVENT.emit(u.EventId.ON_START_BATTLE, !1),
				c.treasureCtrl.updateReceiveData(),
				_.buriedPoint.sendEvent(l.TaEventName.btnClick, "\u7ee7\u7eedPK", l.TaView.pkEnd),
				p.EVENT.emit(u.EventId.ON_FRIENDRANK)
			},
			e.prototype.onOpenClick = function() {
				c.treasureCtrl.treasureItemClick(this.curItem.data) && (this.curItem.bgNode.setCurImg(l.TreasureState.received), this.curItem.data.received = 1)
			},
			r([w(v.
		default)], e.prototype, "treasureView", void 0),
			r([w(y.
		default)], e.prototype, "resTitle", void 0),
			r([w(y.
		default)], e.prototype, "btns", void 0),
			r([b], e)
		} (h.
	default);
		o.
	default = I,
		cc._RF.pop()
	},
	{
		"../../../Controller/TreasureCtrl": "TreasureCtrl",
		"../../../Define/Define": "Define",
		"../../../Define/EventId": "EventId",
		"../../../Framework/Event/EventMgr": "EventMgr",
		"../../../Framework/UIBase": "UIBase",
		"../../../Framework/Utils/Utils": "Utils",
		"../../../Model/UserModel": "UserModel",
		"../../../Platforms/BurierdPoint": "BurierdPoint",
		"../Tool/SwitchNode": "SwitchNode",
		"../Treasure/TreasureScrollView": "TreasureScrollView",
		"./OverTreasureItem": "OverTreasureItem"
	}],
	Battle: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "45f03qd2mlGFqjZ2Krsmz65", "Battle");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../../../Controller/TreasureCtrl"),
		s = t("../../../Define/Define"),
		c = t("../../../Define/EventId"),
		l = t("../../../Define/StaticData"),
		u = t("../../../Define/UIDefs"),
		p = t("../../../Framework/Event/EventMgr"),
		h = t("../../../Framework/UI/UIMgr"),
		d = t("../../../Framework/UIBase"),
		f = t("../../../Framework/Utils/Utils"),
		_ = t("../../../Model/UserModel"),
		y = t("../../../Platforms/BurierdPoint"),
		v = cc._decorator,
		m = v.ccclass,
		g = v.property,
		b = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.hongfang = null,
				e.lanfang = null,
				e.aniBattle = null,
				e.lblRedName = null,
				e.lblRedNum = null,
				e.spRedDog = null,
				e.spRedNum = null,
				e.lblBlueName = null,
				e.lblBlueNum = null,
				e.spBlueDog = null,
				e.spBuleNum = null,
				e
			}
			return n(e, t),
			e.prototype.onLoad = function() {
				p.EVENT.on(c.EventId.ON_JUMP_BATTLEANIM, this.onJumpClick, this),
				this.aniBattle.on(cc.Animation.EventType.FINISHED, this.playNumberEffect, this)
			},
			e.prototype.onOpen = function(e, o) {
				y.buriedPoint.sendEvent(s.TaEventName.pageShow, "\u8fdb\u5165PK", s.TaView.pkView),
				t.prototype.onOpen.call(this, e, o),
				this.pkRes = o.pkRes,
				this.data = o.overItems,
				l.StaticData.LOCAL_Test && console.log(this.data),
				this.spRedNum.node.active = !0,
				this.spBuleNum.node.active = !0,
				this.lblRedNum.node.active = !1,
				this.lblBlueNum.node.active = !1,
				this.lblRedName.string = this.data[0].name,
				this.lblRedNum.string = this.data[0].grade + "",
				this.lblBlueName.string = this.data[1].name,
				this.lblBlueNum.string = this.data[1].grade + "",
				this.PlayStartEffect(),
				this.emitBattleMes()
			},
			e.prototype.PlayStartEffect = function() {
				this.spRedDog.setAnimation(0, "red_dog1", !1),
				this.spRedDog.addAnimation(0, "red_dog2", !0),
				this.spBlueDog.setAnimation(0, "blue_dog1", !1),
				this.spBlueDog.addAnimation(0, "blue_dog2", !0),
				this.aniBattle.play("battle")
			},
			e.prototype.playNumberEffect = function() {
				var t = this;
				this.spRedNum.setAnimation(0, "animation", !0),
				this.spBuleNum.setAnimation(0, "animation", !0),
				this.scheduleOnce(function() {
					t.spRedNum.node.active = !1,
					t.spBuleNum.node.active = !1,
					t.lblRedNum.node.active = !0,
					t.lblBlueNum.node.active = !0
				},
				2),
				this.scheduleOnce(this.playNomalEndEvent.bind(this), 3)
			},
			e.prototype.HideStartEffect = function() {
				this.startEffect.destroy(),
				this.playRes(),
				p.EVENT.emit(c.EventId.ON_PLAYE_BATTLEANIM, !0, this)
			},
			e.prototype.playRes = function() {
				switch (this.pkRes) {
				case s.PKRes.win:
					this.playResEffect("Effects/hongfangS", this.resFinishEvent.bind(this), this.hongfang);
					break;
				case s.PKRes.fail:
					this.playResEffect("Effects/lanfangS", this.resFinishEvent.bind(this), this.lanfang);
					break;
				case s.PKRes.deuce:
					this.playDeuceAnim()
				}
			},
			e.prototype.playResEffect = function(t, e, o) {
				var i = this;
				void 0 === o && (o = this.node),
				this.loadRes(t, cc.Prefab, null,
				function(t, n) {
					t ? cc.error("effect Fail") : (i.resEffect && i.resEffect.destroy(), i.resEffect = cc.instantiate(n), i.resEffect.setParent(o), i.resEffect.position = cc.Vec3.ZERO, i.resEffect.getComponent(cc.Animation).once("finished", e, i))
				})
			},
			e.prototype.playDeuceAnim = function() {
				this.playResEffect("Effects/hongfangS", this.playShuangEndEvent.bind(this), this.hongfang)
			},
			e.prototype.randomForRes = function() {
				this.pkRes = f.
			default.getRanByEnum(s.PKRes)
			},
			e.prototype.resFinishEvent = function() {
				this.hideAnim(this.resEffect, this.playNomalEndEvent.bind(this))
			},
			e.prototype.playNomalEndEvent = function() {
				this.close(),
				this.resEffect && this.resEffect.destroy(),
				this.OpenOverView()
			},
			e.prototype.playShuangEndEvent = function() {
				var t = this;
				this.hideAnim(this.resEffect,
				function() {
					t.playResEffect("Effects/lanfangS", t.resFinishEvent.bind(t), t.lanfang)
				})
			},
			e.prototype.emitBattleMes = function() {
				_.userModel.updateAllNetMes(),
				a.treasureCtrl.updateCurData(),
				p.EVENT.emit(c.EventId.ON_UPDATE_BATTLEINFO, this.data[0], this.data[1])
			},
			e.prototype.onJumpClick = function() {
				this.startEffect && this.startEffect.destroy(),
				this.resEffect && this.resEffect.destroy(),
				this.close(),
				this.OpenOverView()
			},
			e.prototype.hideAnim = function(t, e) {
				cc.tween(t).to(1, {
					opacity: 0
				}).call(function() {
					e && e()
				}).start()
			},
			e.prototype.OpenOverView = function() {
				this._para.isGuide ? h.
			default.inst.open(u.UIType.GuideGameOver, this._para) : h.
			default.inst.open(u.UIType.BattleResult, this._para)
			},
			r([g(cc.Node)], e.prototype, "hongfang", void 0),
			r([g(cc.Node)], e.prototype, "lanfang", void 0),
			r([g({
				displayName: "\u6218\u6597\u52a8\u753b",
				type: cc.Animation
			})], e.prototype, "aniBattle", void 0),
			r([g({
				displayName: "\u7ea2\u65b9\u73a9\u5bb6\u540d\u5b57",
				type: cc.Label
			})], e.prototype, "lblRedName", void 0),
			r([g({
				displayName: "\u7ea2\u65b9\u73a9\u5bb6\u4eac\u4eab\u503c",
				type: cc.Label
			})], e.prototype, "lblRedNum", void 0),
			r([g({
				displayName: "spine\u52a8\u753b(\u7ea2\u72d7)",
				type: sp.Skeleton
			})], e.prototype, "spRedDog", void 0),
			r([g({
				displayName: "spine\u52a8\u753b(\u7ea2\u65b9\u6587\u5b57)",
				type: sp.Skeleton
			})], e.prototype, "spRedNum", void 0),
			r([g({
				displayName: "\u84dd\u65b9\u73a9\u5bb6\u540d\u5b57",
				type: cc.Label
			})], e.prototype, "lblBlueName", void 0),
			r([g({
				displayName: "\u84dd\u65b9\u73a9\u5bb6\u4eac\u4eab\u503c",
				type: cc.Label
			})], e.prototype, "lblBlueNum", void 0),
			r([g({
				displayName: "spine\u52a8\u753b(\u84dd\u72d7)",
				type: sp.Skeleton
			})], e.prototype, "spBlueDog", void 0),
			r([g({
				displayName: "spine\u52a8\u753b(\u84dd\u65b9\u6587\u5b57)",
				type: sp.Skeleton
			})], e.prototype, "spBuleNum", void 0),
			r([m], e)
		} (d.
	default);
		o.
	default = b,
		cc._RF.pop()
	},
	{
		"../../../Controller/TreasureCtrl": "TreasureCtrl",
		"../../../Define/Define": "Define",
		"../../../Define/EventId": "EventId",
		"../../../Define/StaticData": "StaticData",
		"../../../Define/UIDefs": "UIDefs",
		"../../../Framework/Event/EventMgr": "EventMgr",
		"../../../Framework/UI/UIMgr": "UIMgr",
		"../../../Framework/UIBase": "UIBase",
		"../../../Framework/Utils/Utils": "Utils",
		"../../../Model/UserModel": "UserModel",
		"../../../Platforms/BurierdPoint": "BurierdPoint"
	}],
	Bootstrap: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "8cd6alGYuhCLKFZeKRcKhd1", "Bootstrap");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		},
		a = this && this.__awaiter ||
		function(t, e, o, i) {
			return new(o || (o = Promise))(function(n, r) {
				function a(t) {
					try {
						c(i.next(t))
					} catch(e) {
						r(e)
					}
				}
				function s(t) {
					try {
						c(i.
						throw (t))
					} catch(e) {
						r(e)
					}
				}
				function c(t) {
					var e;
					t.done ? n(t.value) : (e = t.value, e instanceof o ? e: new o(function(t) {
						t(e)
					})).then(a, s)
				}
				c((i = i.apply(t, e || [])).next())
			})
		},
		s = this && this.__generator ||
		function(t, e) {
			var o, i, n, r, a = {
				label: 0,
				sent: function() {
					if (1 & n[0]) throw n[1];
					return n[1]
				},
				trys: [],
				ops: []
			};
			return r = {
				next: s(0),
				throw: s(1),
				return: s(2)
			},
			"function" == typeof Symbol && (r[Symbol.iterator] = function() {
				return this
			}),
			r;
			function s(t) {
				return function(e) {
					return c([t, e])
				}
			}
			function c(r) {
				if (o) throw new TypeError("Generator is already executing.");
				for (; a;) try {
					if (o = 1, i && (n = 2 & r[0] ? i.
					return: r[0] ? i.
					throw || ((n = i.
					return) && n.call(i), 0) : i.next) && !(n = n.call(i, r[1])).done) return n;
					switch (i = 0, n && (r = [2 & r[0], n.value]), r[0]) {
					case 0:
					case 1:
						n = r;
						break;
					case 4:
						return a.label++,
						{
							value: r[1],
							done: !1
						};
					case 5:
						a.label++,
						i = r[1],
						r = [0];
						continue;
					case 7:
						r = a.ops.pop(),
						a.trys.pop();
						continue;
					default:
						if (! (n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === r[0] || 2 === r[0])) {
							a = 0;
							continue
						}
						if (3 === r[0] && (!n || r[1] > n[0] && r[1] < n[3])) {
							a.label = r[1];
							break
						}
						if (6 === r[0] && a.label < n[1]) {
							a.label = n[1],
							n = r;
							break
						}
						if (n && a.label < n[2]) {
							a.label = n[2],
							a.ops.push(r);
							break
						}
						n[2] && a.ops.pop(),
						a.trys.pop();
						continue
					}
					r = e.call(t, a)
				} catch(s) {
					r = [6, s],
					i = 0
				} finally {
					o = n = 0
				}
				if (5 & r[0]) throw r[1];
				return {
					value: r[0] ? r[1] : void 0,
					done: !0
				}
			}
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = t("../../Framework/Scene/SceneBase"),
		l = t("../../Framework/Scene/SceneMgr"),
		u = t("../../Framework/Res/ResUtil"),
		p = t("../../Framework/UI/FlyTxtPool"),
		h = t("../../Controller/TableMgr"),
		d = t("../../Framework/Audio/RTAudioSoureMgr"),
		f = t("../../Define/SceneDef"),
		_ = t("../../Controller/TreasureCtrl"),
		y = t("../../Model/UserModel"),
		v = t("../../Controller/ActivityCtrl"),
		m = t("../../Platforms/Platform"),
		g = t("../../Framework/UI/UIMgr"),
		b = t("../../Define/UIDefs"),
		w = cc._decorator,
		I = w.ccclass,
		T = w.property,
		P = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.uiRoot = null,
				e
			}
			return n(e, t),
			e.prototype.onLoad = function() {
				return a(this, void 0, void 0,
				function() {
					return s(this,
					function() {
						return [2]
					})
				})
			},
			e.prototype.start = function() {
				return a(this, void 0, void 0,
				function() {
					var t;
					return s(this,
					function(e) {
						switch (e.label) {
						case 0:
							return [4, this.initFramework()];
						case 1:
							return e.sent(),
							m.
						default.urlUpdate(),
							m.
						default.delatSource(),
							m.
						default.loginState ? (this.initActivityMes(), [4, this.initData()]) : (g.
						default.inst.open(b.UIType.Lack, {
								title: "\u6e38\u620f\u516c\u544a",
								des: "\u201c\u4eac\u4eab\u503c\u7684\u6c5f\u6e56\u7b49\u4f60\u592a\u4e45\u4e86\uff0c\u5feb\u4e0a\u7ebf\u4e0e\u5404\u4f4d\u9ad8\u624b\u6311\u6218\u5427\u201d",
								isClose: !1,
								index: 2
							}), [2]);
						case 2:
							return e.sent(),
							[4, y.userModel.CheckRiskState()];
						case 3:
							return t = e.sent(),
							[4, y.userModel.updateGradeMes()];
						case 4:
							return e.sent(),
							t ? l.SCENE.loadScene(f.SceneType.Main) : this.jumpRiskState(),
							[2]
						}
					})
				})
			},
			e.prototype.initActivityMes = function() {
				return a(this, void 0, void 0,
				function() {
					return s(this,
					function(t) {
						switch (t.label) {
						case 0:
							return [4, v.activityCtrl.initialize()];
						case 1:
							return t.sent(),
							m.
						default.initialize(cc.sys.isMobile),
							[2]
						}
					})
				})
			},
			e.prototype.initFramework = function() {
				return a(this, void 0, void 0,
				function() {
					var t, e;
					return s(this,
					function(o) {
						switch (o.label) {
						case 0:
							return t = u.ResUtil.instantiate(this.uiRoot),
							cc.director.getScene().addChild(t),
							e = g.
						default.inst.winSize,
							t.position = cc.v3(e.width / 2, e.height / 2, 0),
							cc.game.addPersistRootNode(t),
							p.FlyTxtPool.init(),
							[4, h.TABLE.loadTableRes()];
						case 1:
							return o.sent(),
							d.
						default.inst.init(),
							[2]
						}
					})
				})
			},
			e.prototype.initData = function() {
				return a(this, void 0, void 0,
				function() {
					return s(this,
					function() {
						return y.userModel.updateAllNetMes(!0),
						_.treasureCtrl.initialize(),
						[2]
					})
				})
			},
			e.prototype.jumpRiskState = function() {
				g.
			default.inst.open(b.UIType.Lack, {
					title: "\u6e38\u620f\u516c\u544a",
					des: "\u6d3b\u52a8\u592a\u706b\u7206\u4e86\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",
					isClose: !1,
					index: 0
				}),
				m.
			default.JumpCicle()
			},
			r([T(cc.Prefab)], e.prototype, "uiRoot", void 0),
			r([I], e)
		} (c.
	default);
		o.
	default = P,
		cc._RF.pop()
	},
	{
		"../../Controller/ActivityCtrl": "ActivityCtrl",
		"../../Controller/TableMgr": "TableMgr",
		"../../Controller/TreasureCtrl": "TreasureCtrl",
		"../../Define/SceneDef": "SceneDef",
		"../../Define/UIDefs": "UIDefs",
		"../../Framework/Audio/RTAudioSoureMgr": "RTAudioSoureMgr",
		"../../Framework/Res/ResUtil": "ResUtil",
		"../../Framework/Scene/SceneBase": "SceneBase",
		"../../Framework/Scene/SceneMgr": "SceneMgr",
		"../../Framework/UI/FlyTxtPool": "FlyTxtPool",
		"../../Framework/UI/UIMgr": "UIMgr",
		"../../Model/UserModel": "UserModel",
		"../../Platforms/Platform": "Platform"
	}],
	BurierdPoint: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "37d50AD8OFEYaOmfDJJJnVy", "BurierdPoint");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.buriedPoint = void 0;
		var a = t("../Define/Define"),
		s = t("../Define/StaticData"),
		c = t("../Framework/Utils/Singleton"),
		l = t("../Model/UserModel"),
		u = cc._decorator,
		p = u.ccclass,
		h = (u.property,
		function(t) {
			function e() {
				return null !== t && t.apply(this, arguments) || this
			}
			return n(e, t),
			e.prototype.init = function() {
				var t = {
					appId: s.StaticData.GAMEEVE == a.GameEve.online ? s.StaticData.TA_APPID: s.StaticData.TESTAPPID,
					serverUrl: s.StaticData.TA_SERVERURL,
					autoTrack: {
						appShow: !0,
						appHide: !0
					}
				};
				this.ta = new ThinkingAnalyticsAPI(t),
				this.ta.init();
				var e = l.userModel.getLkePin();
				console.log("pin:" + e),
				this.ta.login(e)
			},
			e.prototype.sendEvent = function(t, e, o, i, n, r) {
				void 0 === n && (n = ""),
				void 0 === r && (r = ""),
				this.ta || this.init(),
				i || (i = ""),
				this.ta.track(t, {
					Sname: e,
					page: o,
					val: i,
					val2: n,
					val3: r
				}),
				console.log("eventName:" + t + ":  " + i)
			},
			r([p], e)
		} (c.Singleton()));
		o.
	default = h,
		o.buriedPoint = h.inst,
		cc._RF.pop()
	},
	{
		"../Define/Define": "Define",
		"../Define/StaticData": "StaticData",
		"../Framework/Utils/Singleton": "Singleton",
		"../Model/UserModel": "UserModel"
	}],
	ButtonClickLimiter: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "eb6fcOMRKVIRq2ZVI1TloAM", "ButtonClickLimiter");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
		s = a.ccclass,
		c = a.property,
		l = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.clickCD = .5,
				e
			}
			return n(e, t),
			e.prototype.onLoad = function() {
				var t = this,
				e = this.getComponent(cc.Button);
				e && (this.clickEvents = e.clickEvents, this.node.on("click",
				function() {
					e.clickEvents = [],
					t.scheduleOnce(function() {
						e.clickEvents = t.clickEvents
					},
					t.clickCD)
				},
				this))
			},
			r([c], e.prototype, "clickCD", void 0),
			r([s], e)
		} (cc.Component);
		o.
	default = l,
		cc._RF.pop()
	},
	{}],
	ButtonSafe: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "62159/3haJEK4rHW41DShcU", "ButtonSafe");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
		s = a.ccclass,
		c = a.property,
		l = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.isLockBtn = !1,
				e.time = .06,
				e
			}
			return n(e, t),
			e.prototype.start = function() {
				var t = this;
				t.time = .06,
				t.button = t.getComponent(cc.Button),
				t.mSize = new cc.Vec2(t.node.width, t.node.height),
				t.button && t.button.node.on("click",
				function() {
					t.button.enabled = !1,
					t.isLockBtn || (t.node.width = 0, t.node.height = 0),
					t.isStarTime = !0
				},
				this)
			},
			e.prototype.update = function(t) {
				this.isStarTime && (this.time -= t, this.time <= 0 && (this.button.enabled = !0, this.node.width = this.mSize.x, this.node.height = this.mSize.y, this.isStarTime = !1, this.time = .06))
			},
			r([c({
				displayName: "\u662f\u5426\u662f\u672a\u89e3\u9501\u6309\u94ae(\u672a\u5f00\u653e\u6309\u94ae\u4e0d\u9700\u8981\u7f29\u5c0fSize)"
			})], e.prototype, "isLockBtn", void 0),
			r([s], e)
		} (cc.Component);
		o.
	default = l,
		cc._RF.pop()
	},
	{}],
	CommonToast: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "c2ba2y6ZDtG7ZP9ddIgV9aw", "CommonToast");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
		s = a.ccclass,
		c = a.property,
		l = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.item = null,
				e._isOpening = !1,
				e._runTime = 0,
				e._tipList = [],
				e.openTime = 0,
				e.minOpenTime = 3,
				e.maxOpenTime = 17,
				e.isOpeningCount = !1,
				e.showingNext = !1,
				e.nowItem = null,
				e.lastItem = null,
				e.label = null,
				e
			}
			return n(e, t),
			Object.defineProperty(e.prototype, "isOpening", {
				get: function() {
					return this._isOpening
				},
				enumerable: !1,
				configurable: !0
			}),
			e.prototype.showTips = function(t) {
				try {
					if (this.freshWidth(t), this._tipList.push(t), 1 == this._tipList.length && 0 == this._isOpening) this.showingNext = !0,
					this.item.width = 40 * t.length + 20,
					this._showNext();
					else {
						if (this._tipList.length > 2) for (var e = {},
						o = 0; o < this._tipList.length; o++) if (e[this._tipList[o]] || this.label && this._tipList[o] == this.label.string) {
							if (this._tipList.splice(o, 1), this._tipList.length <= 2) break;
							o--
						} else e[this._tipList[o]] = 1;
						this._tipList.length > 0 && 0 == this._isOpening && 0 == this.isOpeningCount && 0 == this.showingNext && (this.showingNext = !0, this._showNext())
					}
				} catch(i) {
					this.node && (this.node.active = !1),
					cc.log("ShowTips", i)
				}
			},
			e.prototype.freshWidth = function(t) {
				this.item.width = 40 * t.length + 20
			},
			e.prototype._showNext = function() {
				this.nowItem ? (cc.log("tip\u5b58\u5728"), this.showingNext = !1) : (this.nowItem = cc.instantiate(this.item), this.nowItem.parent = this.node, this.nowItem.active = !0, this._showOneTip(this._tipList[0]) && (this._tipList.shift(), this.openTime = 0), this.showingNext = !1)
			},
			e.prototype._showOneTip = function(t) {
				if (cc.log("ShowOneTip"), this._isOpening) return cc.log("\u4e0d\u80fd\u540c\u65f6\u6253\u5f00\u591a\u4e2a\u63d0\u793a"),
				!1;
				if (!this.nowItem) return cc.log("\u5f53\u524dtip\u5df2\u9500\u6bc1"),
				!1;
				this.isOpeningCount = !0,
				this._isOpening = !0;
				var e = this.nowItem.getChildByName("Label");
				if (e) {
					var o = e.getComponent(cc.Label);
					o ? (this.label = o, o.string = t, o.getComponent(cc.Label)._updateRenderData = !0) : cc.log("tip   \u627e\u4e0d\u5230label")
				} else cc.log("tip   \u627e\u4e0d\u5230 node   label");
				return this.nowItem.opacity = 0,
				this.nowItem.runAction(cc.spawn(cc.moveBy(.15, cc.v2(0, 60)), cc.fadeIn(.2))),
				!0
			},
			e.prototype._removeTips = function() {
				this.lastItem && (this.lastItem.stopAllActions(), this.lastItem.removeFromParent()),
				this.lastItem = this.nowItem,
				this.nowItem = null,
				this.lastItem && (this._tipList.length > 0 ? this.lastItem.runAction(cc.sequence(cc.spawn(cc.moveBy(.25, cc.v2(0, 80)), cc.sequence(cc.delayTime(.1), cc.fadeOut(.15).easing(cc.easeQuadraticActionIn()))), cc.removeSelf(!0))) : this.lastItem.runAction(cc.sequence(cc.spawn(cc.moveBy(.25, cc.v2(0, 80)), cc.fadeOut(.25)), cc.removeSelf(!0)))),
				this._isOpening = !1,
				this._tipList.length > 0 && (this.showingNext = !0, this._showNext())
			},
			e.prototype.update = function(t) {
				if (this._runTime += t, !(this._runTime < 1)) {
					this._runTime = 0;
					try {
						if (this._isOpening && this.isOpeningCount) {
							if (this.openTime++, this.openTime > this.maxOpenTime) return this.isOpeningCount = !1,
							void this._removeTips();
							if (this._tipList.length > 0 && this.openTime > this.minOpenTime) return this.isOpeningCount = !1,
							void this._removeTips()
						}
					} catch(e) {
						this.node && (this.node.active = !1),
						cc.log("ShowTips", e)
					}
				}
			},
			r([c(cc.Node)], e.prototype, "item", void 0),
			r([s], e)
		} (cc.Component);
		o.
	default = l,
		cc._RF.pop()
	},
	{}],
	ComponetBase: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "e96cebPc8BMbrFONsvMjb/z", "ComponetBase");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
		s = a.ccclass,
		c = (a.property,
		function(t) {
			function e() {
				return null !== t && t.apply(this, arguments) || this
			}
			return n(e, t),
			e.prototype.isLive = function() {
				return !! (this && this.node && this.node.isValid && this.isValid)
			},
			e.prototype.getName = function() {
				return this.isLive() ? this.name: "destroy"
			},
			r([s], e)
		} (cc.Component));
		o.
	default = c,
		cc._RF.pop()
	},
	{}],
	ConfirmView: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "4bd0cWxOm5HY4Z53vlUCbph", "ConfirmView");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../UIBase"),
		s = t("../../Define/EventId"),
		c = t("../Event/EventMgr"),
		l = cc._decorator,
		u = l.ccclass,
		p = l.property,
		h = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.lblContent = null,
				e.confirmTxt = null,
				e.cancelTxt = null,
				e
			}
			return n(e, t),
			e.prototype.start = function() {
				this.renderView(this._para.content, this._para.confirmBtnTxt, this._para.cancelBtnTxt)
			},
			e.prototype.renderView = function(t) {
				this.lblContent.string = t
			},
			e.prototype.onBtnCloseClick = function() {
				this.close(),
				c.EVENT.emit(s.EventId.EVENT_CONFIRM, !1)
			},
			e.prototype.onClickButton1 = function() {
				this.close(),
				c.EVENT.emit(s.EventId.EVENT_CONFIRM, !1)
			},
			e.prototype.onClickButton2 = function() {
				this.close(),
				c.EVENT.emit(s.EventId.EVENT_CONFIRM, !0)
			},
			r([p(cc.Label)], e.prototype, "lblContent", void 0),
			r([p(cc.Label)], e.prototype, "confirmTxt", void 0),
			r([p(cc.Label)], e.prototype, "cancelTxt", void 0),
			r([u], e)
		} (a.
	default);
		o.
	default = h,
		cc._RF.pop()
	},
	{
		"../../Define/EventId": "EventId",
		"../Event/EventMgr": "EventMgr",
		"../UIBase": "UIBase"
	}],
	Define: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "9d4e4ZPBHxBDr1UOayG7XXC", "Define"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.QdSouce = o.FXSource = o.BusinessId = o.SeasonState = o.ActivityState = o.TaView = o.TaEventName = o.WorldRankState = o.Relation = o.PkStatus = o.TreasureState = o.PassivePkState = o.PKState = o.ScrollType = o.AwardType = o.PKRes = o.GameEve = void 0,
		function(t) {
			t[t.test = 0] = "test",
			t[t.online = 1] = "online"
		} (o.GameEve || (o.GameEve = {})),
		function(t) {
			t.fail = "0",
			t.win = "1",
			t.deuce = "2"
		} (o.PKRes || (o.PKRes = {})),
		function(t) {
			t.JING_BEAN = "JING_BEAN",
			t.COUPON = "COUPON"
		} (o.AwardType || (o.AwardType = {})),
		function(t) {
			t[t.horizontal = 0] = "horizontal",
			t[t.vertical = 1] = "vertical"
		} (o.ScrollType || (o.ScrollType = {})),
		function(t) {
			t.success = "1",
			t.wait = "2",
			t.fail = "3"
		} (o.PKState || (o.PKState = {})),
		function(t) {
			t.success = "1",
			t.fail = "2"
		} (o.PassivePkState || (o.PassivePkState = {})),
		function(t) {
			t[t.unreceived = 0] = "unreceived",
			t[t.received = 1] = "received",
			t[t.friendLess = 2] = "friendLess"
		} (o.TreasureState || (o.TreasureState = {})),
		function(t) {
			t[t.none = 0] = "none",
			t[t.initiaPk = 1] = "initiaPk",
			t[t.normalPk = 2] = "normalPk",
			t[t.fail = 3] = "fail",
			t[t.win = 4] = "win",
			t[t.duce = 5] = "duce",
			t[t.passivePk = 7] = "passivePk"
		} (o.PkStatus || (o.PkStatus = {})),
		function(t) {
			t[t.distant = 1] = "distant",
			t[t.close = 2] = "close"
		} (o.Relation || (o.Relation = {})),
		function(t) {
			t[t.normal = 0] = "normal",
			t[t.award = 1] = "award"
		} (o.WorldRankState || (o.WorldRankState = {})),
		function(t) {
			t.btnClick = "JXZbtn_click",
			t.pageShow = "JXZpage_show",
			t.login = "JXZlogin",
			t.regist = "JXZregist"
		} (o.TaEventName || (o.TaEventName = {})),
		function(t) {
			t.main = "\u4e3b\u754c\u9762",
			t.friend = "\u597d\u53cb\u5217\u8868",
			t.popUp = "\u5f39\u7a97",
			t.pkEnd = "PK\u7ed3\u675f\u754c\u9762",
			t.rank = "\u6392\u884c\u699c",
			t.pkView = "PK\u754c\u9762",
			t.load = "\u52a0\u8f7d\u9875"
		} (o.TaView || (o.TaView = {})),
		function(t) {
			t[t.overdue = 0] = "overdue",
			t[t.valid = 1] = "valid"
		} (o.ActivityState || (o.ActivityState = {})),
		function(t) {
			t[t.aheadAward = 0] = "aheadAward",
			t[t.run = 1] = "run",
			t[t.afterAward = 2] = "afterAward"
		} (o.SeasonState || (o.SeasonState = {})),
		function(t) {
			t[t.mes = 107] = "mes",
			t[t.popUp = 108] = "popUp"
		} (o.BusinessId || (o.BusinessId = {})),
		function(t) {
			t.initiative = "",
			t.command = "jkl",
			t.qr = "ewm",
			t.appShare = "appshare",
			t.wxShare = "wxshare",
			t.inform = "push"
		} (o.FXSource || (o.FXSource = {})),
		function(t) {
			t.app = "app",
			t.out = "out"
		} (o.QdSouce || (o.QdSouce = {})),
		cc._RF.pop()
	},
	{}],
	EventId: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "11b6fpZP7FGr7WF79E8hZzj", "EventId"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.EventId = void 0,
		o.EventId = {
			ON_UI_OPEN_FAIL: "EventId.ON_UI_OPEN_FAIL",
			CHANGE_SCENE: "EventId.CHANGE_SCENE",
			EVENT_CONFIRM: "EventId.EVENT_CONFIRM",
			ON_ORIENTATION_CHANGE: "EventId.ON_ORIENTATION_CHANGE",
			ON_UI_OPEN: "EventId.EVENT_ON_UI_OPEN",
			ON_UI_CLOSE: "EventId.EVENT_ON_UI_CLOSE",
			ON_UPDATE_LOADING_PROGRESS: "EventId.ON_UPDATE_LOADING_PROGRESS",
			ON_UPDATE_LOADING_TTP: "EventId.ON_UPDATE_LOADING_TTP",
			ON_UPDATE_USERINFO: "EventId.ON_UPDATE_USERINFO",
			ON_UPDATE_USERINFO_PKTIME: "EventId.ON_UPDATE_USERINFO_PKTIME",
			ON_UPDATE_USERINOF_AVATAR: "EventId.ON_UPDATE_USERINFO_AVATAR",
			ON_UPDATE_SPRITE_URL: "EventId.ON_UPDATE_SPRITE_URL",
			ON_UPDATE_SPRITE_AVATAR: "EventId.ON_UPDATE_SPRITE_AVATAR",
			ON_UPDATE_SPRITE: "EventId.ON_UPDATE_SPRITE",
			ON_LOCK_SCROLL: "EventId.ON_LOCK_SCROLL",
			ON_UPDATE_PKRES: "EventId.ON_UPDATE_PKRES",
			ON_START_BATTLE: "EventId.ON_START_BATTLE",
			ON_PAGEVIEW_INDEX_CHANGED: "EventId.ON_PAGEVIEW_INDEX_CHANGED",
			ON_TREASURE_SELECT: "EventId.ON_TREASURE_SELECT",
			ON_RANKAWARD_GIVE: "EventID.ON_RANKAWARD_GIVE",
			ON_RANKSTATE_CHANGE: "EventID.ON_RANKSTATE_CHANGE",
			ON_JUMP_BATTLEANIM: "EventID.ON_JUMP_BATTLEANIM",
			ON_UPDATE_BATTLEINFO: "EventID.ON_UPDATE_BATTLEINFO",
			ON_PLAYE_BATTLEANIM: "EventID.ON_PLAYE_BATTLEANIM",
			ON_PLAYTITLE_ANIM: "EventID.ON_PLAYTITLE_ANIM",
			ON_MAINSCROLL_TOP: "EventID.ON_MAINSCROLL_TOP",
			ON_UPDATE_RANKAWARD: "EventID.ON_UPDATE_RANKAWARD",
			ON_UPDATE_TREASURETIP: "EventID.ON_UPDATE_TREASURETIP",
			ON_CLICK_FRIEND_PK: "ON_CLICK_FRIEND_PK",
			GAMEOVER_TREASURE_UPDATE: "GAMEOVER_TREASURE_UPDATE",
			ON_FRIENDRANK: "ON_FRIENDRANK",
			ON_UPDATE_ALLPKTIME: "ON_UPDATE_ALLPKTIME"
		},
		cc._RF.pop()
	},
	{}],
	EventMgr: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "0b580U6y3NDDoFSQ+d5eIuN", "EventMgr");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		});
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.EVENT = void 0;
		var r = function(t) {
			function e() {
				return t.call(this) || this
			}
			return n(e, t),
			Object.defineProperty(e, "inst", {
				get: function() {
					return e._inst || (e._inst = new e)
				},
				enumerable: !1,
				configurable: !0
			}),
			e
		} (t("./EventObject").EventObject);
		o.EVENT = r.inst,
		cc._RF.pop()
	},
	{
		"./EventObject": "EventObject"
	}],
	EventObject: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "14ee7hO/SlNf5Mlf/0SarrA", "EventObject");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__spreadArrays ||
		function() {
			for (var t = 0,
			e = 0,
			o = arguments.length; e < o; e++) t += arguments[e].length;
			var i = Array(t),
			n = 0;
			for (e = 0; e < o; e++) for (var r = arguments[e], a = 0, s = r.length; a < s; a++, n++) i[n] = r[a];
			return i
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.EventObject = void 0;
		var a = t("../Utils/Utils"),
		s = function() {
			this.name = ""
		},
		c = function(t) {
			function e() {
				var e = t.call(this) || this;
				return e._eventList = {},
				e
			}
			return n(e, t),
			e.prototype.on = function(e, o, i, n) {
				for (var c = [], l = 4; l < arguments.length; l++) c[l - 4] = arguments[l];
				if ( - 1 != this.findEvent(e, o, i)) return o;
				void 0 === this._eventList[e] && (this._eventList[e] = []);
				var u = new s;
				if (i instanceof cc.Component) {
					var p = i;
					if (!a.
				default.isComponentLive(p)) return void cc.error("component is not live!");
					u.name = p.node.name
				}
				return u.type = e,
				u.callback = o,
				u.target = i,
				u.useCapture = n,
				u.args = c,
				u.realCallback = function() {
					for (var t, e, o = [], i = 0; i < arguments.length; i++) o[i] = arguments[i];
					var n = u.target;
					try {
						var s = u.args && u.args.filter(function(t) {
							return null != t
						}) || [],
						c = o && o.filter(function(t) {
							return null != t
						}) || [],
						l = s.concat(c);
						if (u.callback && n) if (n instanceof cc.Component) {
							var p = n;
							a.
						default.isComponentLive(p) && (t = u.callback).call.apply(t, r([n], l))
						} else(e = u.callback).call.apply(e, r([n], l));
						else u.callback && u.callback.apply(u, l)
					} catch(h) {
						cc.error("EVENT.on callback faild!" + h)
					}
				},
				this._eventList[e].push(u),
				t.prototype.on ? t.prototype.on.call(this, e, u.realCallback, i) : cc.error("\u65b0\u5f15\u64ce\u7248\u672c EventTarget \u6ca1on\u51fd\u6570"),
				i && i.__eventTargets && i.__eventTargets.push(this),
				o
			},
			e.prototype.off = function(e, o, i) {
				if (!o) return delete this._eventList[e],
				void t.prototype.off.call(this, e, void 0, void 0);
				var n = this.findEvent(e, o, i);
				if ( - 1 != n) {
					var r = this._eventList[e];
					t.prototype.off.call(this, e, r[n].realCallback, i),
					r.splice(n, 1),
					r.length <= 0 && delete this._eventList[e]
				}
			},
			e.prototype.targetOff = function(e) {
				if (e && this._eventList && !(Object.keys(this._eventList).length <= 0)) {
					for (var o = Object.keys(this._eventList), i = o.length - 1; i >= 0; --i) {
						var n = o[i],
						r = this._eventList[n];
						if (r && 0 != r.length) {
							for (var a = r.length - 1; a >= 0; --a) r[a].target == e && r.splice(a, 1);
							r.length <= 0 && delete this._eventList[n]
						}
					}
					t.prototype.targetOff.call(this, e)
				}
			},
			e.prototype.findEvent = function(t, e, o) {
				var i = this._eventList[t];
				if (!i || 0 == i.length) return - 1;
				for (var n = 0; n < i.length; n++) if (i[n].callback === e && i[n].target == o) return n;
				return - 1
			},
			e
		} (cc.EventTarget);
		o.EventObject = c,
		cc._RF.pop()
	},
	{
		"../Utils/Utils": "Utils"
	}],
	FlyTxtPool: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "d1eb456XFxEWqxsx1npcyVp", "FlyTxtPool"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.FlyTxtPool = void 0;
		var i = t("../Res/NodePool"),
		n = t("./FlyTxt"),
		r = t("../../Define/UIDefs"),
		a = t("./UIMgr"),
		s = function() {
			function t() {}
			return t.init = function(t) {
				var e = this;
				void 0 === t && (t = 10),
				this._flyTxtPool || (this._flyTxtPool = new i.NodePool, this._flyTxtPool.setWaterMark(t), this._flyTxtPool.init("UIPrefab/Common/FlyTxt",
				function() {
					e._flyPoolReady = !0,
					e._flyNextTxt()
				}))
			},
			t.flyTxt = function(t, e, o) {
				this._flyList.push({
					txt: t,
					pos: e,
					color: o
				}),
				this._flyTxtPool || this.init(),
				this._flyPoolReady && this._flyNextTxt()
			},
			t._flyNextTxt = function() {
				var t = this;
				if (this._flyList.length > 0 && this._currentShowCount < this._maxShowCount) {
					var e = this._flyList.shift(),
					o = this._flyTxtPool.getNode();
					if (o) {
						this._currentShowCount++;
						var i = o.getComponent(n.
					default);
						i.setTxt(e.txt, e.color);
						var s = a.
					default.inst.getLayer(r.LayerType.Tip);
						s.addChild(o),
						o.setPosition(s.convertToNodeSpaceAR(e.pos)),
						o.once(n.
					default.EVNENT_ON_FLY_ANI_COMPLETE,
						function() {
							t._currentShowCount--,
							t._flyTxtPool.freeNode(o),
							t._flyNextTxt()
						}),
						i.playFlyAni()
					}
				}
			},
			t._flyList = [],
			t._flyPoolReady = !1,
			t._maxShowCount = 3,
			t._currentShowCount = 0,
			t
		} ();
		o.FlyTxtPool = s,
		cc._RF.pop()
	},
	{
		"../../Define/UIDefs": "UIDefs",
		"../Res/NodePool": "NodePool",
		"./FlyTxt": "FlyTxt",
		"./UIMgr": "UIMgr"
	}],
	FlyTxt: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "9e3772aotlL5qHiXIwuk7TB", "FlyTxt");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
		s = a.ccclass,
		c = a.property,
		l = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.lblTxt = null,
				e.flyAni = null,
				e
			}
			var o;
			return n(e, t),
			o = e,
			e.prototype.setTxt = function(t, e) {
				this.lblTxt.string = t,
				this.lblTxt.node.color = e
			},
			e.prototype.playFlyAni = function() {
				var t = this;
				this.flyAni.play(void 0, 0),
				this.flyAni.once("finished",
				function() {
					t.node.emit(o.EVNENT_ON_FLY_ANI_COMPLETE)
				},
				this)
			},
			e.EVNENT_ON_FLY_ANI_COMPLETE = "FlyTxt.EVNENT_ON_FLY_ANI_COMPLETE",
			r([c(cc.Label)], e.prototype, "lblTxt", void 0),
			r([c(cc.Animation)], e.prototype, "flyAni", void 0),
			o = r([s], e)
		} (cc.Component);
		o.
	default = l,
		cc._RF.pop()
	},
	{}],
	FriendRankCtrl: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "3b20cp5FfRDirj8idHWTY1F", "FriendRankCtrl");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		},
		a = this && this.__awaiter ||
		function(t, e, o, i) {
			return new(o || (o = Promise))(function(n, r) {
				function a(t) {
					try {
						c(i.next(t))
					} catch(e) {
						r(e)
					}
				}
				function s(t) {
					try {
						c(i.
						throw (t))
					} catch(e) {
						r(e)
					}
				}
				function c(t) {
					var e;
					t.done ? n(t.value) : (e = t.value, e instanceof o ? e: new o(function(t) {
						t(e)
					})).then(a, s)
				}
				c((i = i.apply(t, e || [])).next())
			})
		},
		s = this && this.__generator ||
		function(t, e) {
			var o, i, n, r, a = {
				label: 0,
				sent: function() {
					if (1 & n[0]) throw n[1];
					return n[1]
				},
				trys: [],
				ops: []
			};
			return r = {
				next: s(0),
				throw: s(1),
				return: s(2)
			},
			"function" == typeof Symbol && (r[Symbol.iterator] = function() {
				return this
			}),
			r;
			function s(t) {
				return function(e) {
					return c([t, e])
				}
			}
			function c(r) {
				if (o) throw new TypeError("Generator is already executing.");
				for (; a;) try {
					if (o = 1, i && (n = 2 & r[0] ? i.
					return: r[0] ? i.
					throw || ((n = i.
					return) && n.call(i), 0) : i.next) && !(n = n.call(i, r[1])).done) return n;
					switch (i = 0, n && (r = [2 & r[0], n.value]), r[0]) {
					case 0:
					case 1:
						n = r;
						break;
					case 4:
						return a.label++,
						{
							value: r[1],
							done: !1
						};
					case 5:
						a.label++,
						i = r[1],
						r = [0];
						continue;
					case 7:
						r = a.ops.pop(),
						a.trys.pop();
						continue;
					default:
						if (! (n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === r[0] || 2 === r[0])) {
							a = 0;
							continue
						}
						if (3 === r[0] && (!n || r[1] > n[0] && r[1] < n[3])) {
							a.label = r[1];
							break
						}
						if (6 === r[0] && a.label < n[1]) {
							a.label = n[1],
							n = r;
							break
						}
						if (n && a.label < n[2]) {
							a.label = n[2],
							a.ops.push(r);
							break
						}
						n[2] && a.ops.pop(),
						a.trys.pop();
						continue
					}
					r = e.call(t, a)
				} catch(s) {
					r = [6, s],
					i = 0
				} finally {
					o = n = 0
				}
				if (5 & r[0]) throw r[1];
				return {
					value: r[0] ? r[1] : void 0,
					done: !0
				}
			}
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.friendRankCtrl = void 0;
		var c = t("../Define/Define"),
		l = t("../Define/StaticData"),
		u = t("../Framework/Utils/Singleton"),
		p = t("../Model/FriendRankData"),
		h = t("../Network/Net"),
		d = t("../Platforms/BurierdPoint"),
		f = t("./BattleCtrl"),
		_ = cc._decorator,
		y = _.ccclass,
		v = (_.property,
		function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.passgengerPageDatas = new Map,
				e.passgengerDatas = [],
				e
			}
			return n(e, t),
			e.prototype.initialize = function(t, e) {
				return void 0 === t && (t = 1),
				void 0 === e && (e = 10),
				a(this, void 0, void 0,
				function() {
					var o, i, n, r;
					return s(this,
					function(a) {
						switch (a.label) {
						case 0:
							return this.passgengerPageDatas.has(t) ? [3, 2] : [4, h.Net.getUserFriendsPage(l.StaticData.ActivityID, t, e)];
						case 1:
							if (! (o = a.sent()) || o.length < 1) return [2];
							for (i = [], n = 0; n < o.length; n++)(r = new p.FriendRankData).init(o[n]),
							i[n] = r;
							this.passgengerPageDatas.set(t, i),
							this.passgengerDatas = this.passgengerDatas.concat(i),
							a.label = 2;
						case 2:
							return [2]
						}
					})
				})
			},
			e.prototype.sendPk = function(t) {
				switch (t.pkStatus) {
				case c.PkStatus.normalPk:
					d.buriedPoint.sendEvent(c.TaEventName.btnClick, "\u53d1\u8d77pk\u6309\u94ae\u70b9\u51fb", c.TaView.friend),
					2 == t.relation ? f.battleCtrl.normalPk(t) : f.battleCtrl.distantPk(t);
					break;
				case c.PkStatus.passivePk:
					f.battleCtrl.passivePk(t),
					d.buriedPoint.sendEvent(c.TaEventName.btnClick, "\u63a5\u53d7pk\u6309\u94ae\u70b9\u51fb", c.TaView.friend);
					break;
				case c.PkStatus.initiaPk:
					f.battleCtrl.initiaPk(t)
				}
			},
			r([y], e)
		} (u.Singleton()));
		o.
	default = v,
		o.friendRankCtrl = v.inst,
		cc._RF.pop()
	},
	{
		"../Define/Define": "Define",
		"../Define/StaticData": "StaticData",
		"../Framework/Utils/Singleton": "Singleton",
		"../Model/FriendRankData": "FriendRankData",
		"../Network/Net": "Net",
		"../Platforms/BurierdPoint": "BurierdPoint",
		"./BattleCtrl": "BattleCtrl"
	}],
	FriendRankData: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "6a600madH9HqZOs9Dv/BIpu", "FriendRankData");
		var i = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.FriendRankData = void 0;
		var n = cc._decorator,
		r = n.ccclass,
		a = (n.property,
		function() {
			function t() {}
			return t.prototype.init = function(t) {
				this.friendData = t,
				this.jdNickname = t.jdNickname,
				this.jdImage = t.jdImage,
				this.winNum = t.winNum,
				this.channelStr = t.channelStr,
				this.friendNickname = t.friendNickname,
				this.createTime = t.createTime,
				this.friendPin = t.friendPin,
				this.wxNickname = t.wxNickname,
				this.channel = t.channel,
				this.wxImage = t.wxImage,
				this.friendMaskPin = t.friendMaskPin,
				this.pkStatus = t.pkStatus,
				this.relation = t.relation
			},
			Object.defineProperty(t.prototype, "avatarUrl", {
				get: function() {
					return this.jdImage
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(t.prototype, "nickName", {
				get: function() {
					return this.jdNickname
				},
				enumerable: !1,
				configurable: !0
			}),
			i([r], t)
		} ());
		o.FriendRankData = a,
		cc._RF.pop()
	},
	{}],
	FriendRankItem: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "12b1duWMJpOOLb3NM2obxC9", "FriendRankItem");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../../../Controller/FriendRankCtrl"),
		s = t("../../../Define/Define"),
		c = t("../../../Define/EventId"),
		l = t("../../../Define/UIDefs"),
		u = t("../../../Framework/Event/EventMgr"),
		p = t("../../../Framework/UI/ListItem"),
		h = t("../../../Framework/UI/UIMgr"),
		d = t("../../../Model/UserModel"),
		f = t("../Tool/SwitchImg"),
		_ = t("../Tool/SwitchNode"),
		y = cc._decorator,
		v = y.ccclass,
		m = y.property,
		g = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.sprPk = [],
				e.labName = null,
				e.tipNode = null,
				e.labWinNum = null,
				e.distantTip = null,
				e.btnPk = null,
				e.pkResTip = null,
				e.pkTip = null,
				e.sprAvatar = null,
				e.bgNode = null,
				e.timeNode = null,
				e
			}
			return n(e, t),
			e.prototype.onItemRefresh = function(t, e) {
				this.passengerData = e,
				this.labName.string = e.nickName,
				this.labWinNum.string = e.winNum.toString(),
				this.distantTip.active = 1 == e.relation,
				u.EVENT.emit(c.EventId.ON_UPDATE_SPRITE_AVATAR, this.sprAvatar, e.avatarUrl),
				this.updateResByState()
			},
			e.prototype.updateResByState = function() {
				var t = "";
				this.pkState = this.passengerData.pkStatus;
				var e = this.passengerData,
				o = !1;
				switch (this.tipNode.active = !0, e.pkStatus) {
				case s.PkStatus.win:
					this.bgIndex = 0,
					o = !0;
					break;
				case s.PkStatus.fail:
					this.bgIndex = 1,
					o = !0;
					break;
				case s.PkStatus.duce:
					this.bgIndex = 2,
					o = !0;
					break;
				case s.PkStatus.initiaPk:
					this.btnPk.setCurImg(0);
					break;
				case s.PkStatus.passivePk:
					this.btnPk.setCurImg(1),
					this.isTimeOut = d.userModel.userInfo.passiveNum <= 0,
					this.isTimeOut && (t = "\u5411\u4f60\u53d1\u8d77\u4e86\u6311\u6218\uff0c\u5feb\u6765\u6bd4\u8bd5\u5427"),
					this.tipNode.active = !1;
					break;
				case s.PkStatus.normalPk:
					this.btnPk.setCurImg(2),
					this.isTimeOut = d.userModel.userInfo.leftLunchPkNum <= 0
				}
				this.isFinish = o,
				this.pkTip.string = t,
				this.updateTipByRes()
			},
			e.prototype.updateTipByRes = function() {
				this.timeNode.active = !this.isFinish && this.passengerData.pkStatus == s.PkStatus.normalPk && this.isTimeOut,
				this.btnPk.node.active = !(this.isFinish || !this.isFinish && this.passengerData.pkStatus == s.PkStatus.normalPk && this.isTimeOut),
				this.isFinish && this.pkResTip.setCurNode(this.bgIndex),
				this.pkResTip.node.active = this.isFinish,
				this.bgNode.children[0].active = this.isFinish,
				this.bgNode.children[1].active = !this.isFinish
			},
			e.prototype.onChallengeClick = function() {
				this.isTimeOut && this.passengerData.pkStatus == s.PkStatus.passivePk ? h.
			default.inst.open(l.UIType.Lack, {
					title: "\u6b21\u6570\u4e0a\u9650",
					des: "\u201c\u4eca\u65e5\u63a5\u53d7PK\u6b21\u6570\u5df2\u8fbe\u5230\u4e0a\u9650\u201d",
					isClose: !0,
					index: 1
				}) : a.friendRankCtrl.sendPk(this.passengerData)
			},
			e.prototype.searchPassiveTime = function() {},
			r([m({
				type: [cc.SpriteFrame]
			})], e.prototype, "sprPk", void 0),
			r([m(cc.Label)], e.prototype, "labName", void 0),
			r([m(cc.Node)], e.prototype, "tipNode", void 0),
			r([m(cc.Label)], e.prototype, "labWinNum", void 0),
			r([m(cc.Node)], e.prototype, "distantTip", void 0),
			r([m(f.
		default)], e.prototype, "btnPk", void 0),
			r([m(_.
		default)], e.prototype, "pkResTip", void 0),
			r([m(cc.Label)], e.prototype, "pkTip", void 0),
			r([m(cc.Sprite)], e.prototype, "sprAvatar", void 0),
			r([m(cc.Node)], e.prototype, "bgNode", void 0),
			r([m(cc.Node)], e.prototype, "timeNode", void 0),
			r([v], e)
		} (p.
	default);
		o.
	default = g,
		cc._RF.pop()
	},
	{
		"../../../Controller/FriendRankCtrl": "FriendRankCtrl",
		"../../../Define/Define": "Define",
		"../../../Define/EventId": "EventId",
		"../../../Define/UIDefs": "UIDefs",
		"../../../Framework/Event/EventMgr": "EventMgr",
		"../../../Framework/UI/ListItem": "ListItem",
		"../../../Framework/UI/UIMgr": "UIMgr",
		"../../../Model/UserModel": "UserModel",
		"../Tool/SwitchImg": "SwitchImg",
		"../Tool/SwitchNode": "SwitchNode"
	}],
	FriendRank: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "3622bHXSMBB1YX28Cj61sPW", "FriendRank");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		},
		a = this && this.__awaiter ||
		function(t, e, o, i) {
			return new(o || (o = Promise))(function(n, r) {
				function a(t) {
					try {
						c(i.next(t))
					} catch(e) {
						r(e)
					}
				}
				function s(t) {
					try {
						c(i.
						throw (t))
					} catch(e) {
						r(e)
					}
				}
				function c(t) {
					var e;
					t.done ? n(t.value) : (e = t.value, e instanceof o ? e: new o(function(t) {
						t(e)
					})).then(a, s)
				}
				c((i = i.apply(t, e || [])).next())
			})
		},
		s = this && this.__generator ||
		function(t, e) {
			var o, i, n, r, a = {
				label: 0,
				sent: function() {
					if (1 & n[0]) throw n[1];
					return n[1]
				},
				trys: [],
				ops: []
			};
			return r = {
				next: s(0),
				throw: s(1),
				return: s(2)
			},
			"function" == typeof Symbol && (r[Symbol.iterator] = function() {
				return this
			}),
			r;
			function s(t) {
				return function(e) {
					return c([t, e])
				}
			}
			function c(r) {
				if (o) throw new TypeError("Generator is already executing.");
				for (; a;) try {
					if (o = 1, i && (n = 2 & r[0] ? i.
					return: r[0] ? i.
					throw || ((n = i.
					return) && n.call(i), 0) : i.next) && !(n = n.call(i, r[1])).done) return n;
					switch (i = 0, n && (r = [2 & r[0], n.value]), r[0]) {
					case 0:
					case 1:
						n = r;
						break;
					case 4:
						return a.label++,
						{
							value: r[1],
							done: !1
						};
					case 5:
						a.label++,
						i = r[1],
						r = [0];
						continue;
					case 7:
						r = a.ops.pop(),
						a.trys.pop();
						continue;
					default:
						if (! (n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === r[0] || 2 === r[0])) {
							a = 0;
							continue
						}
						if (3 === r[0] && (!n || r[1] > n[0] && r[1] < n[3])) {
							a.label = r[1];
							break
						}
						if (6 === r[0] && a.label < n[1]) {
							a.label = n[1],
							n = r;
							break
						}
						if (n && a.label < n[2]) {
							a.label = n[2],
							a.ops.push(r);
							break
						}
						n[2] && a.ops.pop(),
						a.trys.pop();
						continue
					}
					r = e.call(t, a)
				} catch(s) {
					r = [6, s],
					i = 0
				} finally {
					o = n = 0
				}
				if (5 & r[0]) throw r[1];
				return {
					value: r[0] ? r[1] : void 0,
					done: !0
				}
			}
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = t("../../../Controller/FriendRankCtrl"),
		l = t("../../../Define/Define"),
		u = t("../../../Define/UIDefs"),
		p = t("../../../Framework/UI/List"),
		h = t("../../../Framework/UI/UIMgr"),
		d = t("../../../Framework/UIBase"),
		f = t("../../../Model/UserModel"),
		_ = t("../../../Network/Net"),
		y = t("../../../Platforms/BurierdPoint"),
		v = t("../../../Platforms/Platform"),
		m = t("./FriendRankItem"),
		g = cc._decorator,
		b = g.ccclass,
		w = g.property,
		I = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.friendRank = null,
				e.labPassivePkTime = null,
				e.labPkTime = null,
				e.pageSize = 10,
				e.content = null,
				e.view = null,
				e._isScrollFlag = !1,
				e._pageIndex = -1,
				e._lastScrollY = 0,
				e
			}
			return n(e, t),
			e.prototype.onLoad = function() {
				this.friendRank.node.on("scroll-to-bottom", this._toBottom, this)
			},
			e.prototype.onOpen = function() {
				this._pageIndex = 1,
				c.friendRankCtrl.passgengerPageDatas.clear(),
				c.friendRankCtrl.passgengerDatas = [],
				this.labPkTime.string = f.userModel.userInfo.leftLunchPkNum.toString(),
				this.labPassivePkTime.string = f.userModel.userInfo.passiveNum.toString(),
				this.initialize()
			},
			e.prototype.initialize = function() {
				return a(this, void 0, void 0,
				function() {
					return s(this,
					function(t) {
						switch (t.label) {
						case 0:
							return [4, c.friendRankCtrl.initialize(this._pageIndex, this.pageSize)];
						case 1:
							return t.sent(),
							c.friendRankCtrl.passgengerPageDatas.has(this._pageIndex) ? this.friendRank.numItems = c.friendRankCtrl.passgengerDatas.length: this._pageIndex--,
							[2]
						}
					})
				})
			},
			e.prototype._toTop = function() {
				return a(this, void 0, void 0,
				function() {
					return s(this,
					function(t) {
						switch (t.label) {
						case 0:
							return this._isScrollFlag ? [3, 2] : (this._isScrollFlag = !0, this._pageIndex > 1 && this._pageIndex--, [4, this.initialize()]);
						case 1:
							return t.sent(),
							this._isScrollFlag = !1,
							console.log("\u4e0a\u5212\u7ffb\u9875"),
							[3, 3];
						case 2:
							console.log("\u4f60\u7ffb\u7684\u592a\u5feb\u4e86"),
							t.label = 3;
						case 3:
							return [2]
						}
					})
				})
			},
			e.prototype._toBottom = function() {
				return a(this, void 0, void 0,
				function() {
					return s(this,
					function(t) {
						switch (t.label) {
						case 0:
							return this._isScrollFlag ? [3, 2] : (this._isScrollFlag = !0, this._pageIndex++, [4, this.initialize()]);
						case 1:
							return t.sent(),
							this._isScrollFlag = !1,
							console.log("\u4e0b\u5212\u7ffb\u9875"),
							[3, 3];
						case 2:
							console.log("\u4f60\u7ffb\u7684\u592a\u5feb\u4e86"),
							t.label = 3;
						case 3:
							return [2]
						}
					})
				})
			},
			e.prototype.onRankItemUpdate = function(t, e) {
				var o = c.friendRankCtrl.passgengerDatas[e];
				t.getComponent(m.
			default).onItemRefresh(e, o)
			},
			e.prototype.close = function() {
				t.prototype.close.call(this),
				y.buriedPoint.sendEvent(l.TaEventName.btnClick, "\u5173\u95ed\u5f39\u7a97", l.TaView.popUp, "\u597d\u53cb\u88c2\u53d8")
			},
			e.prototype.onCircleClick = function() {
				y.buriedPoint.sendEvent(l.TaEventName.btnClick, "\u53bb\u770b\u770b", l.TaView.friend),
				v.
			default.urlType == v.UrlType.JDApp ? v.
			default.JumpCicle():
				h.
			default.inst.open(u.UIType.Lack, {
					title: "\u6e38\u620f\u516c\u544a",
					des: "\u201c\u8bf7\u5728\u4eac\u4e1c\u5ba2\u6237\u7aef\u53c2\u4e0e\u6d3b\u52a8\u201d",
					isClose: !0,
					index: 3,
					btnState: !0
				})
			},
			e.prototype.onTest = function() {
				return a(this, void 0, void 0,
				function() {
					return s(this,
					function(t) {
						switch (t.label) {
						case 0:
							return [4, _.Net.sendBoxReward(1)];
						case 1:
							return t.sent(),
							[2]
						}
					})
				})
			},
			r([w(p.
		default)], e.prototype, "friendRank", void 0),
			r([w(cc.Label)], e.prototype, "labPassivePkTime", void 0),
			r([w(cc.Label)], e.prototype, "labPkTime", void 0),
			r([w({
				displayName: "\u4e00\u9875\u6570\u636e\u957f\u5ea6",
				tooltip: "\u9ed8\u8ba410\u6761",
				type: Number
			})], e.prototype, "pageSize", void 0),
			r([w(cc.Node)], e.prototype, "content", void 0),
			r([w(cc.Node)], e.prototype, "view", void 0),
			r([b], e)
		} (d.
	default);
		o.
	default = I,
		cc._RF.pop()
	},
	{
		"../../../Controller/FriendRankCtrl": "FriendRankCtrl",
		"../../../Define/Define": "Define",
		"../../../Define/UIDefs": "UIDefs",
		"../../../Framework/UI/List": "List",
		"../../../Framework/UI/UIMgr": "UIMgr",
		"../../../Framework/UIBase": "UIBase",
		"../../../Model/UserModel": "UserModel",
		"../../../Network/Net": "Net",
		"../../../Platforms/BurierdPoint": "BurierdPoint",
		"../../../Platforms/Platform": "Platform",
		"./FriendRankItem": "FriendRankItem"
	}],
	GameCtrl: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "ca0eaaBCs9P96OYPZd+NM+t", "GameCtrl");
		var i = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var n = cc._decorator,
		r = n.ccclass,
		a = (n.property,
		function() {
			function t() {}
			return t.prototype.start = function() {},
			t.prototype.update = function() {},
			i([r], t)
		} ());
		o.
	default = a,
		cc._RF.pop()
	},
	{}],
	GameDef: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "9851duzH+1F3KOrEjNv5x0g", "GameDef"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		cc._RF.pop()
	},
	{}],
	GameModel: [function(t, e, o) {
		"use strict";
		var i;
		cc._RF.push(e, "bc2e2iqrvxI7Zz5sJ9IvtUA", "GameModel"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.gameMode = o.GameStatus = void 0,
		function(t) {
			t[t.Loading = 0] = "Loading",
			t[t.Start = 1] = "Start",
			t[t.Pause = 2] = "Pause",
			t[t.Stop = 3] = "Stop"
		} (i = o.GameStatus || (o.GameStatus = {}));
		var n = function() {
			function t() {
				this._gameStatus = i.Loading
			}
			return Object.defineProperty(t, "inst", {
				get: function() {
					return this._inst || (this._inst = new t),
					this._inst
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(t.prototype, "gameStatus", {
				get: function() {
					return this._gameStatus
				},
				set: function(t) {
					this._gameStatus != t && (this._gameStatus = t)
				},
				enumerable: !1,
				configurable: !0
			}),
			t._inst = null,
			t
		} ();
		o.gameMode = n.inst,
		cc._RF.pop()
	},
	{}],
	GameOverCtrl: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "674efVXby5HPpKjkNt8sP4f", "GameOverCtrl");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
		s = a.ccclass,
		c = (a.property,
		function(t) {
			function e() {
				return null !== t && t.apply(this, arguments) || this
			}
			return n(e, t),
			e.prototype.start = function() {},
			e.prototype.update = function() {},
			r([s], e)
		} (cc.Component));
		o.
	default = c,
		cc._RF.pop()
	},
	{}],
	GameOver: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "b8acaVbnaVDOYUV6TDrhpbS", "GameOver");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		},
		a = this && this.__awaiter ||
		function(t, e, o, i) {
			return new(o || (o = Promise))(function(n, r) {
				function a(t) {
					try {
						c(i.next(t))
					} catch(e) {
						r(e)
					}
				}
				function s(t) {
					try {
						c(i.
						throw (t))
					} catch(e) {
						r(e)
					}
				}
				function c(t) {
					var e;
					t.done ? n(t.value) : (e = t.value, e instanceof o ? e: new o(function(t) {
						t(e)
					})).then(a, s)
				}
				c((i = i.apply(t, e || [])).next())
			})
		},
		s = this && this.__generator ||
		function(t, e) {
			var o, i, n, r, a = {
				label: 0,
				sent: function() {
					if (1 & n[0]) throw n[1];
					return n[1]
				},
				trys: [],
				ops: []
			};
			return r = {
				next: s(0),
				throw: s(1),
				return: s(2)
			},
			"function" == typeof Symbol && (r[Symbol.iterator] = function() {
				return this
			}),
			r;
			function s(t) {
				return function(e) {
					return c([t, e])
				}
			}
			function c(r) {
				if (o) throw new TypeError("Generator is already executing.");
				for (; a;) try {
					if (o = 1, i && (n = 2 & r[0] ? i.
					return: r[0] ? i.
					throw || ((n = i.
					return) && n.call(i), 0) : i.next) && !(n = n.call(i, r[1])).done) return n;
					switch (i = 0, n && (r = [2 & r[0], n.value]), r[0]) {
					case 0:
					case 1:
						n = r;
						break;
					case 4:
						return a.label++,
						{
							value: r[1],
							done: !1
						};
					case 5:
						a.label++,
						i = r[1],
						r = [0];
						continue;
					case 7:
						r = a.ops.pop(),
						a.trys.pop();
						continue;
					default:
						if (! (n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === r[0] || 2 === r[0])) {
							a = 0;
							continue
						}
						if (3 === r[0] && (!n || r[1] > n[0] && r[1] < n[3])) {
							a.label = r[1];
							break
						}
						if (6 === r[0] && a.label < n[1]) {
							a.label = n[1],
							n = r;
							break
						}
						if (n && a.label < n[2]) {
							a.label = n[2],
							a.ops.push(r);
							break
						}
						n[2] && a.ops.pop(),
						a.trys.pop();
						continue
					}
					r = e.call(t, a)
				} catch(s) {
					r = [6, s],
					i = 0
				} finally {
					o = n = 0
				}
				if (5 & r[0]) throw r[1];
				return {
					value: r[0] ? r[1] : void 0,
					done: !0
				}
			}
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = t("../../../Controller/TreasureCtrl"),
		l = t("../../../Define/Define"),
		u = t("../../../Define/EventId"),
		p = t("../../../Define/StaticData"),
		h = t("../../../Framework/Event/EventMgr"),
		d = t("../../../Framework/UIBase"),
		f = t("../../../Framework/Utils/Utils"),
		_ = t("../../../Platforms/BurierdPoint"),
		y = t("../../../Platforms/Platform"),
		v = t("../Tool/SwitchNode"),
		m = t("./OverItem"),
		g = t("./OverTreasureItem"),
		b = cc._decorator,
		w = b.ccclass,
		I = b.property,
		T = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.overItemDatas = [],
				e.overItems = [],
				e.treasures = [],
				e.progress = null,
				e.progressTip = null,
				e.resTip = null,
				e.failTip = null,
				e
			}
			return n(e, t),
			e.prototype.onLoad = function() {
				this.tipResetPosX = this.progressTip.position.x
			},
			e.prototype.onContineClick = function() {
				this.close(),
				h.EVENT.emit(u.EventId.ON_START_BATTLE, !1),
				c.treasureCtrl.updateReceiveData(),
				_.buriedPoint.sendEvent(l.TaEventName.btnClick, "\u7ee7\u7eedPK", l.TaView.pkEnd)
			},
			e.prototype.onOpen = function(t, e) {
				this.pkRes = e.pkRes,
				this.overItemDatas = e.overItems,
				this.updateMes()
			},
			e.prototype.updateMes = function() {
				return a(this, void 0, void 0,
				function() {
					return s(this,
					function() {
						return this.updatePlayerInfo(),
						this.updateTreasureInfo(),
						f.
					default.getIndexByEnum(l.PKRes, this.pkRes),
						this.resTip.setCurNode(f.
					default.getIndexByEnum(l.PKRes, this.pkRes)),
						this.sendPKRes(),
						[2]
					})
				})
			},
			e.prototype.sendPKRes = function() {
				var t;
				switch (this.pkRes) {
				case l.PKRes.win:
					t = "\u80dc\u5229";
					break;
				case l.PKRes.fail:
					t = "\u5931\u8d25";
					break;
				case l.PKRes.deuce:
					t = "\u5e73\u5c40"
				}
				_.buriedPoint.sendEvent(l.TaEventName.pageShow, "\u5b8c\u6210pk", l.TaView.pkEnd, t)
			},
			e.prototype.updatePlayerInfo = function() {
				this.failTip.active = this.pkRes == l.PKRes.fail;
				var t = f.
			default.getIndexByEnum(l.PKRes, this.pkRes),
				e = [];
				e[1] = this.pkRes == l.PKRes.fail ? 1 : 0,
				e[0] = t;
				for (var o = 0; o < this.overItemDatas.length; o++) {
					var i = this.overItems[o];
					i && i.initlize(this.overItemDatas[o], e[o])
				}
			},
			e.prototype.updateTreasureInfo = function() {
				for (var t = c.treasureCtrl.getCurThreeData(), e = 0; e < t.length; e++) {
					var o = this.treasures[e];
					o && o.onItemUpdate(t[e], 1 == e)
				}
				var i = c.treasureCtrl.updateProgress();
				this.updateAmount(i),
				c.treasureCtrl.updateFriendNum()
			},
			e.prototype.updateAmount = function(t) {
				this.progress.progress = t,
				this.progressTip.active = t > 0,
				this.progressTip.x = this.tipResetPosX - (1 - t) * this.progress.node.width
			},
			e.prototype.jump = function() {
				y.
			default.openUrl(p.StaticData.PLUS_URL)
			},
			r([I({
				type: [m.
			default]
			})], e.prototype, "overItems", void 0),
			r([I({
				type: [g.
			default]
			})], e.prototype, "treasures", void 0),
			r([I(cc.ProgressBar)], e.prototype, "progress", void 0),
			r([I(cc.Node)], e.prototype, "progressTip", void 0),
			r([I(v.
		default)], e.prototype, "resTip", void 0),
			r([I(cc.Node)], e.prototype, "failTip", void 0),
			r([w], e)
		} (d.
	default);
		o.
	default = T,
		cc._RF.pop()
	},
	{
		"../../../Controller/TreasureCtrl": "TreasureCtrl",
		"../../../Define/Define": "Define",
		"../../../Define/EventId": "EventId",
		"../../../Define/StaticData": "StaticData",
		"../../../Framework/Event/EventMgr": "EventMgr",
		"../../../Framework/UIBase": "UIBase",
		"../../../Framework/Utils/Utils": "Utils",
		"../../../Platforms/BurierdPoint": "BurierdPoint",
		"../../../Platforms/Platform": "Platform",
		"../Tool/SwitchNode": "SwitchNode",
		"./OverItem": "OverItem",
		"./OverTreasureItem": "OverTreasureItem"
	}],
	GameView: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "ad7ec2gi1xK55vPn6QcXjVj", "GameView");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../../Framework/Scene/SceneBase"),
		s = cc._decorator,
		c = s.ccclass,
		l = (s.property,
		function(t) {
			function e() {
				return null !== t && t.apply(this, arguments) || this
			}
			return n(e, t),
			r([c], e)
		} (a.
	default));
		o.
	default = l,
		cc._RF.pop()
	},
	{
		"../../Framework/Scene/SceneBase": "SceneBase"
	}],
	GetRewards: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "e02c7+sE9lHNLoBbcLDKEUk", "GetRewards");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		},
		a = this && this.__awaiter ||
		function(t, e, o, i) {
			return new(o || (o = Promise))(function(n, r) {
				function a(t) {
					try {
						c(i.next(t))
					} catch(e) {
						r(e)
					}
				}
				function s(t) {
					try {
						c(i.
						throw (t))
					} catch(e) {
						r(e)
					}
				}
				function c(t) {
					var e;
					t.done ? n(t.value) : (e = t.value, e instanceof o ? e: new o(function(t) {
						t(e)
					})).then(a, s)
				}
				c((i = i.apply(t, e || [])).next())
			})
		},
		s = this && this.__generator ||
		function(t, e) {
			var o, i, n, r, a = {
				label: 0,
				sent: function() {
					if (1 & n[0]) throw n[1];
					return n[1]
				},
				trys: [],
				ops: []
			};
			return r = {
				next: s(0),
				throw: s(1),
				return: s(2)
			},
			"function" == typeof Symbol && (r[Symbol.iterator] = function() {
				return this
			}),
			r;
			function s(t) {
				return function(e) {
					return c([t, e])
				}
			}
			function c(r) {
				if (o) throw new TypeError("Generator is already executing.");
				for (; a;) try {
					if (o = 1, i && (n = 2 & r[0] ? i.
					return: r[0] ? i.
					throw || ((n = i.
					return) && n.call(i), 0) : i.next) && !(n = n.call(i, r[1])).done) return n;
					switch (i = 0, n && (r = [2 & r[0], n.value]), r[0]) {
					case 0:
					case 1:
						n = r;
						break;
					case 4:
						return a.label++,
						{
							value: r[1],
							done: !1
						};
					case 5:
						a.label++,
						i = r[1],
						r = [0];
						continue;
					case 7:
						r = a.ops.pop(),
						a.trys.pop();
						continue;
					default:
						if (! (n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === r[0] || 2 === r[0])) {
							a = 0;
							continue
						}
						if (3 === r[0] && (!n || r[1] > n[0] && r[1] < n[3])) {
							a.label = r[1];
							break
						}
						if (6 === r[0] && a.label < n[1]) {
							a.label = n[1],
							n = r;
							break
						}
						if (n && a.label < n[2]) {
							a.label = n[2],
							a.ops.push(r);
							break
						}
						n[2] && a.ops.pop(),
						a.trys.pop();
						continue
					}
					r = e.call(t, a)
				} catch(s) {
					r = [6, s],
					i = 0
				} finally {
					o = n = 0
				}
				if (5 & r[0]) throw r[1];
				return {
					value: r[0] ? r[1] : void 0,
					done: !0
				}
			}
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = t("../../Controller/RecommendCtrl"),
		l = t("../../Define/Define"),
		u = t("../../Define/StaticData"),
		p = t("../../Define/UIDefs"),
		h = t("../../Framework/UI/ScrollViewOptimizer"),
		d = t("../../Framework/UI/UIMgr"),
		f = t("../../Framework/UIBase"),
		_ = t("./Recommend/WoodItem"),
		y = t("./SingleAwardItem"),
		v = cc._decorator,
		m = v.ccclass,
		g = v.property,
		b = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.awards = [],
				e.adView = null,
				e
			}
			return n(e, t),
			e.prototype.start = function() {
				d.
			default.inst.isUIOpen(p.UIType.OpenBox) && d.
			default.inst.close(p.UIType.OpenBox)
			},
			e.prototype.onOpen = function(t, e) {
				this.treasureData = e,
				this.updatePanelShow()
			},
			e.prototype.updatePanelShow = function() {
				if (this.treasureData) for (var t = this.treasureData.rewards,
				e = 0; e < this.awards.length; e++) {
					var o = t[e];
					this.awards[e].init(o)
				}
			},
			e.prototype.updateAdShow = function() {
				return a(this, void 0, void 0,
				function() {
					var t;
					return s(this,
					function(e) {
						switch (e.label) {
						case 0:
							return [4, c.recommendCtrl.getFlowInfo(u.StaticData.woodIndex, l.BusinessId.popUp)];
						case 1:
							return t = e.sent(),
							this.adView.setData(t.feedData, this.onWoodItemUpdate),
							u.StaticData.woodIndex++,
							[2]
						}
					})
				})
			},
			e.prototype.onWoodItemUpdate = function(t, e, o) {
				e.getComponent(_.
			default).onItemRefresh(t, o)
			},
			e.prototype.onLoadScorll = function() {
				this.updateAdShow()
			},
			r([g({
				type: [y.
			default]
			})], e.prototype, "awards", void 0),
			r([g(h.
		default)], e.prototype, "adView", void 0),
			r([m], e)
		} (f.
	default);
		o.
	default = b,
		cc._RF.pop()
	},
	{
		"../../Controller/RecommendCtrl": "RecommendCtrl",
		"../../Define/Define": "Define",
		"../../Define/StaticData": "StaticData",
		"../../Define/UIDefs": "UIDefs",
		"../../Framework/UI/ScrollViewOptimizer": "ScrollViewOptimizer",
		"../../Framework/UI/UIMgr": "UIMgr",
		"../../Framework/UIBase": "UIBase",
		"./Recommend/WoodItem": "WoodItem",
		"./SingleAwardItem": "SingleAwardItem"
	}],
	GetReward: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "eb66067BdtCMppmIo4Miz1T", "GetReward");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../../../Framework/UIBase"),
		s = t("../SingleAwardItem"),
		c = cc._decorator,
		l = c.ccclass,
		u = c.property,
		p = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.labAward = null,
				e.awards = [],
				e
			}
			return n(e, t),
			e.prototype.onOpen = function(t, e) {
				this.rewards = e.data.rewards,
				this.isReceive = e.isReceive,
				this.updatePanelShow()
			},
			e.prototype.updatePanelShow = function() {
				for (var t = 0; t < this.awards.length; t++) {
					var e = this.rewards[t];
					this.awards[t].init(e, !0)
				}
			},
			r([u(cc.Label)], e.prototype, "labAward", void 0),
			r([u({
				type: [s.
			default]
			})], e.prototype, "awards", void 0),
			r([l], e)
		} (a.
	default);
		o.
	default = p,
		cc._RF.pop()
	},
	{
		"../../../Framework/UIBase": "UIBase",
		"../SingleAwardItem": "SingleAwardItem"
	}],
	GradeRule: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "c40118M1S5HEJ/l//q28ZAc", "GradeRule");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../../Define/Define"),
		s = t("../../Define/StaticData"),
		c = t("../../Define/UIDefs"),
		l = t("../../Framework/UI/UIMgr"),
		u = t("../../Framework/UIBase"),
		p = t("../../Platforms/BurierdPoint"),
		h = t("../../Platforms/Platform"),
		d = cc._decorator,
		f = d.ccclass,
		_ = (d.property,
		function(t) {
			function e() {
				return null !== t && t.apply(this, arguments) || this
			}
			return n(e, t),
			e.prototype.onLevelUpClick = function() {
				if (h.
			default.urlType != h.UrlType.JDApp) return l.
			default.inst.open(c.UIType.Lack, {
					title: "\u6e38\u620f\u516c\u544a",
					des: "\u201c\u8bf7\u5728\u4eac\u4e1c\u5ba2\u6237\u7aef\u53c2\u4e0e\u6d3b\u52a8\u201d",
					isClose: !0,
					index: 3,
					btnState: !0
				}),
				!1;
				h.
			default.openUrl(s.StaticData.PLUS_URL),
				p.buriedPoint.sendEvent(a.TaEventName.btnClick, "\u63d0\u5347\u4eac\u4eab\u503c", a.TaView.main)
			},
			r([f], e)
		} (u.
	default));
		o.
	default = _,
		cc._RF.pop()
	},
	{
		"../../Define/Define": "Define",
		"../../Define/StaticData": "StaticData",
		"../../Define/UIDefs": "UIDefs",
		"../../Framework/UI/UIMgr": "UIMgr",
		"../../Framework/UIBase": "UIBase",
		"../../Platforms/BurierdPoint": "BurierdPoint",
		"../../Platforms/Platform": "Platform"
	}],
	GuideAbility: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "d773bqDIZ9J9oWlN9dgIoNm", "GuideAbility");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
		s = a.ccclass,
		c = a.property,
		l = function() {
			function t() {
				this.target = null,
				this.name = ""
			}
			return r([c({
				type: cc.Node,
				displayName: "\u8282\u70b9"
			})], t.prototype, "target", void 0),
			r([c({
				displayName: "\u914d\u7f6e\u540d"
			})], t.prototype, "name", void 0),
			r([s("GuideItem")], t)
		} (),
		u = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.guideItems = [],
				e
			}
			return n(e, t),
			e.prototype.getGuideItem = function(t) {
				for (var e = 0; e < this.guideItems.length; ++e) if (this.guideItems[e].name == t) return this.guideItems[e].target;
				return null
			},
			r([c({
				type: [l],
				displayName: "\u5f15\u5bfc\u8282\u70b9"
			})], e.prototype, "guideItems", void 0),
			r([s], e)
		} (cc.Component);
		o.
	default = u,
		cc._RF.pop()
	},
	{}],
	GuideEvent: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "dda8aQ+c0hPE4qHRddhNnOh", "GuideEvent");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a, s = t("../Event/EventMgr"),
		c = t("../../Define/EventId"),
		l = cc._decorator,
		u = l.ccclass,
		p = l.property; (function(t) {
			t[t.open = 0] = "open",
			t[t.close = 1] = "close"
		})(a || (a = {}));
		var h = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.params = "",
				e.sendChance = a.open,
				e
			}
			return n(e, t),
			e.prototype.onLoad = function() {
				this.sendChance == a.open && s.
			default.inst.emit(c.EventId.ON_GUIDE_NEXT_TRIGGER, this.params)
			},
			e.prototype.onDestroy = function() {
				this.sendChance == a.close && s.
			default.inst.emit(c.EventId.ON_GUIDE_NEXT_TRIGGER, this.params)
			},
			r([p({
				displayName: "\u6d3e\u53d1\u4e8b\u4ef6"
			})], e.prototype, "params", void 0),
			r([p({
				type: cc.Enum(a),
				displayName: "\u6d3e\u53d1\u65f6\u673a"
			})], e.prototype, "sendChance", void 0),
			r([u], e)
		} (cc.Component);
		o.
	default = h,
		cc._RF.pop()
	},
	{
		"../../Define/EventId": "EventId",
		"../Event/EventMgr": "EventMgr"
	}],
	GuideGameOver: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "df6b3/ic6RIdLk9zjZn2jD8", "GuideGameOver");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../../../Define/Define"),
		s = t("../../../Define/EventId"),
		c = t("../../../Framework/Event/EventMgr"),
		l = t("../../../Framework/UIBase"),
		u = t("../../../Framework/Utils/Utils"),
		p = t("../../../Platforms/BurierdPoint"),
		h = t("../GameOver/OverItem"),
		d = t("../Tool/SwitchNode"),
		f = cc._decorator,
		_ = f.ccclass,
		y = f.property,
		v = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.overItemDatas = [],
				e.overItems = [],
				e.resTip = null,
				e
			}
			return n(e, t),
			e.prototype.onContinueClick = function() {
				this.close(),
				c.EVENT.emit(s.EventId.ON_START_BATTLE, !1),
				p.buriedPoint.sendEvent(a.TaEventName.pageShow, "\u7ee7\u7eedPK", a.TaView.pkEnd)
			},
			e.prototype.onOpen = function(t, e) {
				this.pkRes = e.pkRes,
				this.overItemDatas = e.overItems,
				this.updateMes()
			},
			e.prototype.updateMes = function() {
				this.updatePlayerInfo(),
				this.resTip.setCurNode(u.
			default.getIndexByEnum(a.PKRes, this.pkRes))
			},
			e.prototype.sendPKRes = function() {
				var t;
				switch (this.pkRes) {
				case a.PKRes.win:
					t = "\u80dc\u5229";
					break;
				case a.PKRes.fail:
					t = "\u5931\u8d25";
					break;
				case a.PKRes.deuce:
					t = "\u5e73\u5c40"
				}
				p.buriedPoint.sendEvent(a.TaEventName.pageShow, "\u5b8c\u6210pk", a.TaView.pkEnd, t)
			},
			e.prototype.updatePlayerInfo = function() {
				var t = u.
			default.getIndexByEnum(a.PKRes, this.pkRes),
				e = this.overItems[0];
				e && e.initlize(this.overItemDatas[0], t)
			},
			r([y({
				type: [h.
			default]
			})], e.prototype, "overItems", void 0),
			r([y(d.
		default)], e.prototype, "resTip", void 0),
			r([_], e)
		} (l.
	default);
		o.
	default = v,
		cc._RF.pop()
	},
	{
		"../../../Define/Define": "Define",
		"../../../Define/EventId": "EventId",
		"../../../Framework/Event/EventMgr": "EventMgr",
		"../../../Framework/UIBase": "UIBase",
		"../../../Framework/Utils/Utils": "Utils",
		"../../../Platforms/BurierdPoint": "BurierdPoint",
		"../GameOver/OverItem": "OverItem",
		"../Tool/SwitchNode": "SwitchNode"
	}],
	Guide: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "b8ce0Hjp5FNWYh31pLSv7hD", "Guide");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../../../Define/EventId"),
		s = t("../../../Define/UIDefs"),
		c = t("../../../Framework/Event/EventMgr"),
		l = t("../../../Framework/UI/UIMgr"),
		u = t("../../../Framework/UIBase"),
		p = t("../../../Model/PkDataModel"),
		h = t("../../../Model/UserModel"),
		d = cc._decorator,
		f = d.ccclass,
		_ = (d.property,
		function(t) {
			function e() {
				return null !== t && t.apply(this, arguments) || this
			}
			return n(e, t),
			e.prototype.onReceiveClick = function() {
				this.close(),
				c.EVENT.emit(a.EventId.ON_START_BATTLE);
				var t = new p.
			default,
				e = {
					pkStatus: 1,
					fromScore: h.userModel.userInfo.grade,
					toScore: 0,
					fromPin: h.userModel.getLkePin(),
					toPin: "",
					fromNk: h.userModel.userInfo.getNickName(),
					toNk: "\u6765\u81ea\u5916\u661f\u7684JOY",
					fromImgUrl: h.userModel.userInfo.imgUrl,
					toImgUrl: "",
					fromWinNum: h.userModel.winNum,
					toWinNum: 0
				};
				t.init(e, !1, !0),
				l.
			default.inst.open(s.UIType.Battle, t)
			},
			r([f], e)
		} (u.
	default));
		o.
	default = _,
		cc._RF.pop()
	},
	{
		"../../../Define/EventId": "EventId",
		"../../../Define/UIDefs": "UIDefs",
		"../../../Framework/Event/EventMgr": "EventMgr",
		"../../../Framework/UI/UIMgr": "UIMgr",
		"../../../Framework/UIBase": "UIBase",
		"../../../Model/PkDataModel": "PkDataModel",
		"../../../Model/UserModel": "UserModel"
	}],
	Handler: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "bb19cbiRV9AtbVU8Xzku9i+", "Handler"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.Handler = void 0;
		var i = function() {
			function t(t, e, o, i) {
				void 0 === t && (t = null),
				void 0 === e && (e = null),
				void 0 === o && (o = null),
				void 0 === i && (i = !1),
				this.once = !1,
				this._id = 0,
				this.setTo(t, e, o, i)
			}
			return t.prototype.setTo = function(e, o, i, n) {
				return void 0 === n && (n = !1),
				this._id = t._gid++,
				this.caller = e,
				this.method = o,
				this.args = i,
				this.once = n,
				this
			},
			t.prototype.run = function() {
				if (null == this.method) return null;
				var t = this._id,
				e = this.method.apply(this.caller, this.args);
				return this._id === t && this.once && this.recover(),
				e
			},
			t.prototype.runWith = function(t) {
				if (null == this.method) return null;
				var e = this._id;
				if (null == t) var o = this.method.apply(this.caller, this.args);
				else o = this.args || t.unshift ? this.args ? this.method.apply(this.caller, this.args.concat(t)) : this.method.apply(this.caller, t) : this.method.call(this.caller, t);
				return this._id === e && this.once && this.recover(),
				o
			},
			t.prototype.clear = function() {
				return this.caller = null,
				this.method = null,
				this.args = null,
				this
			},
			t.prototype.recover = function() {
				this._id > 0 && (this._id = 0, t._pool.push(this.clear()))
			},
			t.create = function(e, o, i, n) {
				return void 0 === i && (i = null),
				void 0 === n && (n = !0),
				t._pool.length ? t._pool.pop().setTo(e, o, i, n) : new t(e, o, i, n)
			},
			t._pool = [],
			t._gid = 1,
			t
		} ();
		o.Handler = i,
		cc._RF.pop()
	},
	{}],
	HashMap: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "c5683xzu09P04/rmW8wbPze", "HashMap"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var i = function() {
			function t(t) {
				this._data = {},
				t && (this._data = t)
			}
			return t.prototype.get = function(t) {
				return this._data[t] || []
			},
			t.prototype.add = function(t, e) {
				this._data[t] || (this._data[t] = []),
				this._data[t].push(e)
			},
			t.prototype.set = function(t, e) {
				this._data[t] = e
			},
			Object.defineProperty(t.prototype, "keys", {
				get: function() {
					return Object.keys(this._data)
				},
				enumerable: !1,
				configurable: !0
			}),
			t.prototype.del = function(t) {
				delete this._data[t]
			},
			t.prototype.clear = function() {
				this._data = {}
			},
			t
		} ();
		o.
	default = i,
		cc._RF.pop()
	},
	{}],
	HttpRequest: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "49b29pyN75LeJmjTJ+3L0nc", "HttpRequest"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.HttpRequest = void 0;
		var i = t("../../Network/NetApi"),
		n = function() {
			function t() {}
			return Object.defineProperty(t, "sBaseURL", {
				get: function() {
					return ""
				},
				enumerable: !1,
				configurable: !0
			}),
			t.setServerUrl = function(t) {
				this._serverUrl = t
			},
			t.get = function(t, e, o, i) {
				return void 0 === o && (o = {
					"Content-Type": "application/json"
				}),
				void 0 === i && (i = 5),
				this._doHttp(this._combURL(t, e), {},
				o, "GET", i)
			},
			t.post = function(t, e, o, i, n) {
				return void 0 === i && (i = {
					"Content-Type": "application/json"
				}),
				void 0 === n && (n = 5),
				this._doHttp(t, e, i, "POST", n)
			},
			t._doHttp = function(t, e, o, i) {
				var n = this;
				return t = this.sBaseURL + t,
				new Promise(function(r, a) {
					var s = new XMLHttpRequest;
					if (s.responseType = "text", s.onreadystatechange = function() {
						if (4 === s.readyState && s.status >= 200 && s.status < 300) {
							var t = {};
							try {
								t = t = JSON.parse(s.responseText)
							} catch(e) {
								cc.error(e)
							}
							n._removeXhrEvent(s),
							r(t)
						}
					},
					s.ontimeout = function() {
						cc.warn(t + ", request ontimeout"),
						n._removeXhrEvent(s),
						a()
					},
					s.onerror = function() {
						cc.warn(t + ", request onerror"),
						n._removeXhrEvent(s),
						a()
					},
					s.onabort = function() {
						cc.warn(t + ", request onabort"),
						n._removeXhrEvent(s),
						a()
					},
					cc.log("HttpMgr, doHttp url=" + t + ", method=" + i), s.open(i, t, !0), o && n._setHttpHeaders(s, o), e && "object" == typeof e) {
						var c = JSON.stringify(e);
						s.send(c)
					} else s.send()
				})
			},
			t._combURL = function(t, e) {
				return t += this._isNew(t) ? "&": "?",
				Object.keys(e).forEach(function(o) {
					t += o + "=" + e[o] + "&"
				}),
				t.slice(0, t.length - 1)
			},
			t._combData = function(t) {
				var e = "";
				return Object.keys(t).forEach(function(o) {
					e += o + "=" + t[o] + "&"
				}),
				e.slice(0, e.length - 1)
			},
			t._removeXhrEvent = function(t) {
				t.ontimeout = null,
				t.onerror = null,
				t.onabort = null,
				t.onreadystatechange = null
			},
			t._setHttpHeaders = function(t, e) {
				for (var o in e) t.setRequestHeader(o, e[o])
			},
			t._isNew = function(t) {
				return - 1 != t.indexOf(i.NetApi.Apis.launchBattle) || -1 != t.indexOf(i.NetApi.Apis.receiveBattle)
			},
			t
		} ();
		o.HttpRequest = n,
		cc._RF.pop()
	},
	{
		"../../Network/NetApi": "NetApi"
	}],
	ICallbackOwner: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "0ed0fxZQntJ4I9INCD5TJIf", "ICallbackOwner"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		cc._RF.pop()
	},
	{}],
	Invitation: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "378eaR6O3tG6o9av1bMQFAs", "Invitation");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		},
		a = this && this.__awaiter ||
		function(t, e, o, i) {
			return new(o || (o = Promise))(function(n, r) {
				function a(t) {
					try {
						c(i.next(t))
					} catch(e) {
						r(e)
					}
				}
				function s(t) {
					try {
						c(i.
						throw (t))
					} catch(e) {
						r(e)
					}
				}
				function c(t) {
					var e;
					t.done ? n(t.value) : (e = t.value, e instanceof o ? e: new o(function(t) {
						t(e)
					})).then(a, s)
				}
				c((i = i.apply(t, e || [])).next())
			})
		},
		s = this && this.__generator ||
		function(t, e) {
			var o, i, n, r, a = {
				label: 0,
				sent: function() {
					if (1 & n[0]) throw n[1];
					return n[1]
				},
				trys: [],
				ops: []
			};
			return r = {
				next: s(0),
				throw: s(1),
				return: s(2)
			},
			"function" == typeof Symbol && (r[Symbol.iterator] = function() {
				return this
			}),
			r;
			function s(t) {
				return function(e) {
					return c([t, e])
				}
			}
			function c(r) {
				if (o) throw new TypeError("Generator is already executing.");
				for (; a;) try {
					if (o = 1, i && (n = 2 & r[0] ? i.
					return: r[0] ? i.
					throw || ((n = i.
					return) && n.call(i), 0) : i.next) && !(n = n.call(i, r[1])).done) return n;
					switch (i = 0, n && (r = [2 & r[0], n.value]), r[0]) {
					case 0:
					case 1:
						n = r;
						break;
					case 4:
						return a.label++,
						{
							value: r[1],
							done: !1
						};
					case 5:
						a.label++,
						i = r[1],
						r = [0];
						continue;
					case 7:
						r = a.ops.pop(),
						a.trys.pop();
						continue;
					default:
						if (! (n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === r[0] || 2 === r[0])) {
							a = 0;
							continue
						}
						if (3 === r[0] && (!n || r[1] > n[0] && r[1] < n[3])) {
							a.label = r[1];
							break
						}
						if (6 === r[0] && a.label < n[1]) {
							a.label = n[1],
							n = r;
							break
						}
						if (n && a.label < n[2]) {
							a.label = n[2],
							a.ops.push(r);
							break
						}
						n[2] && a.ops.pop(),
						a.trys.pop();
						continue
					}
					r = e.call(t, a)
				} catch(s) {
					r = [6, s],
					i = 0
				} finally {
					o = n = 0
				}
				if (5 & r[0]) throw r[1];
				return {
					value: r[0] ? r[1] : void 0,
					done: !0
				}
			}
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = t("../../../Controller/BattleCtrl"),
		l = t("../../../Define/Define"),
		u = t("../../../Define/EventId"),
		p = t("../../../Define/StaticData"),
		h = t("../../../Define/UIDefs"),
		d = t("../../../Framework/Event/EventMgr"),
		f = t("../../../Framework/UI/UIMgr"),
		_ = t("../../../Framework/UIBase"),
		y = t("../../../Platforms/BurierdPoint"),
		v = t("../../../Platforms/Platform"),
		m = cc._decorator,
		g = m.ccclass,
		b = m.property,
		w = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.labName = null,
				e.sprAvatar = null,
				e.jdBtns = null,
				e.wxTips = null,
				e.wxTips1 = null,
				e
			}
			return n(e, t),
			e.prototype.onLoad = function() {
				v.
			default.urlType == v.UrlType.WeiXin && (this.jdBtns.active = !1, this.wxTips.active = !0, this.wxTips1.active = !1)
			},
			e.prototype.onOpen = function(t, e) {
				this.friendData = e,
				this.updateMes(),
				this.invitatePk()
			},
			e.prototype.updateMes = function() {
				this.labName.string = this.friendData.nickName,
				d.EVENT.emit(u.EventId.ON_UPDATE_SPRITE_AVATAR, this.sprAvatar, this.friendData.avatarUrl)
			},
			e.prototype.invitatePk = function() {
				return a(this, void 0, void 0,
				function() {
					return s(this,
					function() {
						return c.battleCtrl.requestPk(this.friendData),
						[2]
					})
				})
			},
			e.prototype.onQrpkClick = function() {
				this.checkGameState() && (f.
			default.inst.open(h.UIType.QRShare), console.log("\u626b\u7801\u5206\u4eab"), y.buriedPoint.sendEvent(l.TaEventName.btnClick, "\u626b\u4e00\u626bPK", l.TaView.main))
			},
			e.prototype.onWxpkClick = function() {
				this.checkGameState() && (console.log("\u4eac\u53e3\u4ee4\u5206\u4eab"), v.
			default.commandShare(), y.buriedPoint.sendEvent(l.TaEventName.btnClick, "\u4eac\u53e3\u4ee4PK", l.TaView.main))
			},
			e.prototype.checkGameState = function(t) {
				if (void 0 === t && (t = !0), v.
			default.urlType != v.UrlType.JDApp && t) return f.
			default.inst.open(h.UIType.Lack, {
					title: "\u6e38\u620f\u516c\u544a",
					des: "\u201c\u8bf7\u5728\u4eac\u4e1c\u5ba2\u6237\u7aef\u53c2\u4e0e\u6d3b\u52a8\u201d",
					isClose: !0,
					index: 3,
					btnState: !0
				}),
				!1;
				if (p.StaticData.LIMIT_USER) return f.
			default.inst.open(h.UIType.Lack, {
					title: "\u4eac\u4eab\u503c\u4e0d\u8db3",
					des: "\u201c\u60a8\u7684\u4eac\u4eab\u503c\u4e0d\u8db3200 \u8fd8\u5dee\u4e00\u70b9\u54e6",
					isClose: !0,
					index: 0,
					btnState: !0
				}),
				!1;
				switch (v.
			default.flag) {
				case l.SeasonState.aheadAward:
					return f.
				default.inst.open(h.UIType.Announcement),
					!1;
				case l.SeasonState.afterAward:
					return f.
				default.inst.open(h.UIType.Lack, {
						title: "\u6e38\u620f\u516c\u544a",
						des: "\u8d5b\u5b63\u5df2\u7ed3\u675f\uff0c\u8bf7\u67e5\u770b\u6392\u884c\u699c",
						isClose: !0,
						index: 1
					}),
					!1
				}
				return ! 0
			},
			r([b(cc.Label)], e.prototype, "labName", void 0),
			r([b(cc.Sprite)], e.prototype, "sprAvatar", void 0),
			r([b(cc.Node)], e.prototype, "jdBtns", void 0),
			r([b(cc.Node)], e.prototype, "wxTips", void 0),
			r([b(cc.Node)], e.prototype, "wxTips1", void 0),
			r([g], e)
		} (_.
	default);
		o.
	default = w,
		cc._RF.pop()
	},
	{
		"../../../Controller/BattleCtrl": "BattleCtrl",
		"../../../Define/Define": "Define",
		"../../../Define/EventId": "EventId",
		"../../../Define/StaticData": "StaticData",
		"../../../Define/UIDefs": "UIDefs",
		"../../../Framework/Event/EventMgr": "EventMgr",
		"../../../Framework/UI/UIMgr": "UIMgr",
		"../../../Framework/UIBase": "UIBase",
		"../../../Platforms/BurierdPoint": "BurierdPoint",
		"../../../Platforms/Platform": "Platform"
	}],
	Lack: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "b62f1xe93dL+q9MIuk17dte", "Lack");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../../Define/Define"),
		s = t("../../Define/StaticData"),
		c = t("../../Framework/UIBase"),
		l = t("../../Framework/Utils/Utils"),
		u = t("../../Platforms/BurierdPoint"),
		p = t("../../Platforms/Platform"),
		h = t("./Tool/SwitchImg"),
		d = t("./Tool/SwitchNode"),
		f = cc._decorator,
		_ = f.ccclass,
		y = f.property,
		v = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.labTitle = null,
				e.labDes = null,
				e.sprBtn = null,
				e.sprIcon = null,
				e.isClose = !1,
				e
			}
			return n(e, t),
			e.prototype.onOpen = function(t, e) {
				this.isClose = e.isClose,
				this.index = e.index,
				this.labTitle.string = e.title,
				this.labDes.string = e.des,
				this.sprBtn.node.active = e.btnState,
				this.closeNode.active = this.isClose,
				this.sprBtn.setCurNode(e.index),
				this.updateBtnState()
			},
			e.prototype.updateBtnState = function() {
				switch (this.index) {
				case 0:
				case 1:
					this.sprIcon.setCurImg(this.index);
					break;
				case 2:
					this.sprIcon.setCurImg(0),
					this.closeNode.active = !1,
					this.sprBtn.node.active = !0;
					break;
				case 3:
					this.sprIcon.setCurImg(0),
					this.closeNode.active = !0,
					this.sprBtn.node.active = !1;
					break;
				case 4:
					this.sprIcon.setCurImg(1),
					this.closeNode.active = !0,
					this.sprBtn.node.active = !0
				}
			},
			e.prototype.onClick = function() {
				var t, e = {};
				switch (this.index) {
				case 0:
					p.
				default.openUrl(s.StaticData.PLUS_URL),
					u.buriedPoint.sendEvent(a.TaEventName.btnClick, "\u63d0\u5347\u4eac\u4eab\u503c", a.TaView.main);
					break;
				case 1:
					this.close();
					break;
				case 2:
					null != p.
				default.urlParam && null != p.
				default.urlParam.fxsource && (e.fxsource = p.
				default.urlParam.fxsource),
					t = l.
				default._combURL(p.
				default.gameUrl, e),
					location.replace(t);
					break;
				case 3:
					break;
				case 4:
					p.
				default.commandShare()
				}
			},
			r([y(cc.Label)], e.prototype, "labTitle", void 0),
			r([y(cc.Label)], e.prototype, "labDes", void 0),
			r([y(d.
		default)], e.prototype, "sprBtn", void 0),
			r([y(cc.Node)], e.prototype, "closeNode", void 0),
			r([y(h.
		default)], e.prototype, "sprIcon", void 0),
			r([_], e)
		} (c.
	default);
		o.
	default = v,
		cc._RF.pop()
	},
	{
		"../../Define/Define": "Define",
		"../../Define/StaticData": "StaticData",
		"../../Framework/UIBase": "UIBase",
		"../../Framework/Utils/Utils": "Utils",
		"../../Platforms/BurierdPoint": "BurierdPoint",
		"../../Platforms/Platform": "Platform",
		"./Tool/SwitchImg": "SwitchImg",
		"./Tool/SwitchNode": "SwitchNode"
	}],
	ListItem: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "37280OrbmJFWZ2ur8SNYSKQ", "ListItem");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a, s = cc._decorator,
		c = s.ccclass,
		l = s.property,
		u = s.disallowMultiple,
		p = s.menu,
		h = s.executionOrder; (function(t) {
			t[t.NONE = 0] = "NONE",
			t[t.TOGGLE = 1] = "TOGGLE",
			t[t.SWITCH = 2] = "SWITCH"
		})(a || (a = {}));
		var d = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.icon = null,
				e.title = null,
				e.selectedMode = a.NONE,
				e.selectedFlag = null,
				e.selectedSpriteFrame = null,
				e._unselectedSpriteFrame = null,
				e.adaptiveSize = !1,
				e._selected = !1,
				e._eventReg = !1,
				e
			}
			return n(e, t),
			Object.defineProperty(e.prototype, "selected", {
				get: function() {
					return this._selected
				},
				set: function(t) {
					if (this._selected = t, this.selectedFlag) switch (this.selectedMode) {
					case a.TOGGLE:
						this.selectedFlag.active = t;
						break;
					case a.SWITCH:
						var e = this.selectedFlag.getComponent(cc.Sprite);
						e && (e.spriteFrame = t ? this.selectedSpriteFrame: this._unselectedSpriteFrame)
					}
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "btnCom", {
				get: function() {
					return this._btnCom || (this._btnCom = this.node.getComponent(cc.Button)),
					this._btnCom
				},
				enumerable: !1,
				configurable: !0
			}),
			e.prototype.onLoad = function() {
				if (this.selectedMode == a.SWITCH) {
					var t = this.selectedFlag.getComponent(cc.Sprite);
					this._unselectedSpriteFrame = t.spriteFrame
				}
			},
			e.prototype.onDestroy = function() {
				this.node.off(cc.Node.EventType.SIZE_CHANGED, this._onSizeChange, this)
			},
			e.prototype._registerEvent = function() {
				this._eventReg || (this.btnCom && this.list.selectedMode > 0 && this.btnCom.clickEvents.unshift(this.createEvt(this, "onClickThis")), this.adaptiveSize && this.node.on(cc.Node.EventType.SIZE_CHANGED, this._onSizeChange, this), this._eventReg = !0)
			},
			e.prototype._onSizeChange = function() {
				this.list._onItemAdaptive(this.node)
			},
			e.prototype.createEvt = function(t, e, o) {
				if (void 0 === o && (o = null), t.isValid) {
					t.comName = t.comName || t.name.match(/\<(.*?)\>/g).pop().replace(/\<|>/g, "");
					var i = new cc.Component.EventHandler;
					return i.target = o || t.node,
					i.component = t.comName,
					i.handler = e,
					i
				}
			},
			e.prototype.showAni = function(t, e, o) {
				var i, n = this;
				switch (t) {
				case 0:
					i = cc.tween(n.node).to(.2, {
						scale: .7
					}).by(.3, {
						y: 2 * n.node.height
					});
					break;
				case 1:
					i = cc.tween(n.node).to(.2, {
						scale: .7
					}).by(.3, {
						x: 2 * n.node.width
					});
					break;
				case 2:
					i = cc.tween(n.node).to(.2, {
						scale: .7
					}).by(.3, {
						y: -2 * n.node.height
					});
					break;
				case 3:
					i = cc.tween(n.node).to(.2, {
						scale: .7
					}).by(.3, {
						x: -2 * n.node.width
					});
					break;
				default:
					i = cc.tween(n.node).to(.3, {
						scale: .1
					})
				} (e || o) && i.call(function() {
					if (o) {
						n.list._delSingleItem(n.node);
						for (var t = n.list.displayData.length - 1; t >= 0; t--) if (n.list.displayData[t].id == n.listId) {
							n.list.displayData.splice(t, 1);
							break
						}
					}
					e()
				}),
				i.start()
			},
			e.prototype.onClickThis = function() {
				this.list.selectedId = this.listId
			},
			r([l({
				type: cc.Sprite,
				tooltip: !1
			})], e.prototype, "icon", void 0),
			r([l({
				type: cc.Node,
				tooltip: !1
			})], e.prototype, "title", void 0),
			r([l({
				type: cc.Enum(a),
				tooltip: !1
			})], e.prototype, "selectedMode", void 0),
			r([l({
				type: cc.Node,
				tooltip: !1,
				visible: function() {
					return this.selectedMode > a.NONE
				}
			})], e.prototype, "selectedFlag", void 0),
			r([l({
				type: cc.SpriteFrame,
				tooltip: !1,
				visible: function() {
					return this.selectedMode == a.SWITCH
				}
			})], e.prototype, "selectedSpriteFrame", void 0),
			r([l({
				tooltip: !1
			})], e.prototype, "adaptiveSize", void 0),
			r([c, u(), p("\u81ea\u5b9a\u4e49\u7ec4\u4ef6/List Item"), h( - 5001)], e)
		} (cc.Component);
		o.
	default = d,
		cc._RF.pop()
	},
	{}],
	ListViewOptimizer: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "32d9e6Poj1Ak48G6b7J8+v0", "ListViewOptimizer");
		var i, n, r = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		a = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		function(t) {
			t[t.Top = 0] = "Top",
			t[t.Center = 1] = "Center",
			t[t.Bottom = 2] = "Bottom"
		} (n || (n = {}));
		var s = cc._decorator,
		c = s.ccclass,
		l = s.property,
		u = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.itemTemplate = null,
				e.arrow = null,
				e.spacing = 0,
				e.initNum = 1,
				e.initIdx = 1,
				e.cacheNum = 2,
				e.initType = n.Top,
				e.data = [],
				e.rowNum = 0,
				e.isVertical = !0,
				e.itemNum = 0,
				e.canUpdateFrame = !0,
				e.items = [],
				e.topIdx = 0,
				e.downIdx = 0,
				e.isInit = !1,
				e.lastContentPos = 0,
				e.isRefresh = !1,
				e.arrowNode = null,
				e.nodeDesc = "listview",
				e.itemsPos = [],
				e.jumpFinished = !1,
				e
			}
			return r(e, t),
			Object.defineProperty(e.prototype, "scrollView", {
				get: function() {
					return this.listview
				},
				enumerable: !1,
				configurable: !0
			}),
			e.prototype.onLoad = function() {
				this.listview = this.node.getComponent(cc.ScrollView),
				this.content = this.listview.content,
				this.content.on(cc.Node.EventType.POSITION_CHANGED, this._updateContentView.bind(this)),
				this.isVertical = this.listview.vertical,
				this.itemNum = this.initNum + this.cacheNum,
				this.isVertical || (this.content.anchorX = 0, this.content.anchorY = .5, this.content.x = -this.listview.node.width / 2, this.content.y = 0)
			},
			e.prototype.setData = function(t, e, o) {
				void 0 === o && (o = !1);
				var i = this.items.length - t.length;
				i > 0 && this.items.splice(t.length, i),
				this.isRefresh = this.items.length > 0,
				this.isInit = !1,
				this.canUpdateFrame = !0,
				this.itemNum = Math.min(t.length, this.initNum + this.cacheNum),
				this.isInit = this.initialize(t, e, 0 == this.items.length || o),
				this._createArrow()
			},
			e.prototype._createArrow = function() {
				var t = this.listview.content.width,
				e = this.listview.node.width,
				o = -90;
				if (this.isVertical && (t = this.listview.content.height, e = this.listview.node.height, o = 0), this.arrowNode = this.listview.node.getChildByName("_arrow_"), !(!this.arrow || t <= e || this.arrowNode)) {
					this.arrowNode = cc.instantiate(this.arrow),
					this.arrowNode.parent = this.listview.node,
					this.arrowNode.angle = o,
					this.arrowNode.name = "_arrow_";
					var i = cc.v2(this.listview.node.width - this.arrowNode.height / 2 - 20, 0);
					this.isVertical && (i = cc.v2(0, -this.listview.node.height / 2 + this.arrowNode.height / 2 + 20)),
					this.arrowNode.setPosition(i)
				}
			},
			e.prototype.setArrowPosition = function(t) {
				this.arrowNode && this.arrowNode.setPosition(t)
			},
			e.prototype.hideArrow = function() {
				this.arrowNode && (this.arrowNode.active = !1)
			},
			e.prototype.showArrow = function() {
				this.arrowNode && (this.arrowNode.active = !0)
			},
			e.prototype.initialize = function(t, e, o) {
				if (! (e && t && 0 !== t.length && this.itemTemplate && this.listview)) return t && 0 === t.length && this.content.removeAllChildren(),
				cc.log("\u521d\u59cb\u5316\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u6240\u6709\u5fc5\u8981\u53c2\u6570"),
				!1;
				var i = Math.min(this.initIdx + this.itemNum - 1, t.length);
				if (!this.isRefresh && this.initIdx > i) return cc.log("\u521d\u59cb\u5316\u4f4d\u7f6e\u9519\u8bef " + this.initIdx),
				!1;
				this.data = t,
				this.rowNum = t.length,
				this.itemUpdateFunc = e,
				this.content.removeAllChildren(),
				this.content.getComponent(cc.Layout) && this.content.removeComponent(cc.Layout);
				var n = 0,
				r = 0,
				a = this.initIdx;
				this.initIdx + this.itemNum > this.data.length && (this.initIdx = this.data.length - this.itemNum + 1);
				var s = this.initIdx,
				c = i;
				this.isRefresh && (c = Math.min(this.downIdx + 1, this.rowNum), s = (c = Math.max(this.itemNum, c)) - this.itemNum + 1),
				this.itemsPos = [];
				var l = 1;
				this.isVertical && (l = -1);
				for (var u = 0; u < t.length; u++) {
					var p = this.items[r];
					p || (this.items.length < this.itemNum ? (p = cc.instantiate(this.itemTemplate), this.items.push(p)) : p = this.items[this.items.length - 1]),
					this.itemUpdateFunc(u, p, this.data[u]);
					var h = this.isVertical ? p.height: p.width;
					if (n += h + this.spacing, this.itemsPos.push(l * (n - h)), Number(u) + 1 >= s && Number(u) + 1 <= c) {
						this.content.addChild(p);
						var d = 0,
						f = 0;
						this.isVertical ? (f = h / 2 - n, d = this.spacing + p.width / 2 - this.content.width / 2) : (d = n - h / 2, f = this.spacing + p.height / 2 - this.content.height / 2),
						p.x = d,
						p.y = f,
						r++
					}
				}
				return this.itemUpdateFunc(c - 1, this.items[this.items.length - 1], this.data[c - 1]),
				n += this.spacing,
				this.topIdx = s - 1,
				this.downIdx = c - 1,
				this.isVertical ? this.content.height = n: this.content.width = n,
				o && this.jumpTo(a - 1),
				!0
			},
			e.prototype.getPositionInView = function(t) {
				var e = t.parent.convertToWorldSpaceAR(t.position);
				return this.listview.node.convertToNodeSpaceAR(e)
			},
			e.prototype.getItem = function(t) {
				for (var e = this.content.childrenCount,
				o = 0; o < e; ++o) {
					var i = this.content.children[o],
					n = i.getPosition();
					if (n = i.parent.convertToWorldSpaceAR(n), n = cc.director.getScene().convertToNodeSpaceAR(n), cc.rect(n.x - i.width / 2, n.y - i.height / 2, i.width, i.height).contains(t)) return i
				}
				return null
			},
			e.prototype.getItemsHeight = function() {
				for (var t = 0,
				e = 0; e < this.items.length; e++) {
					var o = this.items[e],
					i = this.isVertical ? o.height: o.width;
					t += i += this.spacing
				}
				return t
			},
			e.prototype.getItemsLength = function(t) {
				for (var e = 0,
				o = 0; o < t; o++) {
					var i = this.items[o],
					n = this.isVertical ? i.height: i.width;
					e += n += this.spacing
				}
				var r = this.items[t - 1];
				return e - (this.isVertical ? r.height: r.width) / 2 - this.spacing
			},
			e.prototype._updateContentView = function(t) {
				if (this.isInit && this.canUpdateFrame) {
					var e = this.content.x;
					this.isVertical && (e = this.content.y),
					this.canUpdateFrame = !1;
					var o = e > this.lastContentPos;
					this.isVertical && (o = e <= this.lastContentPos);
					for (var i = this.getItemsHeight(), n = i / 2, r = 0; r < this.items.length; r++) {
						var a = this.items[r],
						s = this.getPositionInView(a);
						if (o) {
							if (this.isVertical && s.y < -n && (t || this.topIdx - 1 >= 0) || !this.isVertical && s.x > n && (t || this.topIdx - 1 >= 0)) {
								this.topIdx--;
								var c = this.topIdx,
								l = 0;
								this.topIdx < 0 && (c = this.rowNum - 1, this.topIdx = 0, l = -1),
								this.downIdx = this.topIdx + this.items.length - 1 + l;
								var u = this.isVertical ? a.height: a.width;
								this.itemUpdateFunc(c, a, this.data[c]);
								var p = a.width,
								h = -1,
								d = "x";
								this.isVertical && (p = a.height, h = 1, d = "y"),
								a[d] = a[d] + h * (i + (p - u) / 2)
							}
						} else(this.isVertical && s.y > n && (t || this.downIdx + 1 <= this.rowNum - 1) || !this.isVertical && s.x < -n && (t || this.downIdx + 1 <= this.rowNum - 1)) && (this.downIdx++, c = this.downIdx, l = 0, this.downIdx > this.rowNum - 1 && (this.downIdx = this.rowNum - 1, c = 0, l = 1), this.topIdx = this.downIdx - this.items.length + 1 + l, u = this.isVertical ? a.height: a.width, this.itemUpdateFunc(c, a, this.data[c]), p = a.width, h = 1, d = "x", this.isVertical && (p = a.height, h = -1, d = "y"), a[d] = a[d] + h * (i + (p - u) / 2))
					}
					this.lastContentPos = this.isVertical ? this.listview.content.y: this.listview.content.x,
					this.canUpdateFrame = !0,
					this.showArrow(),
					(this.isVertical && this.lastContentPos + this.listview.node.height / 2 >= this.listview.content.height || !this.isVertical && Math.abs(this.lastContentPos) - this.listview.node.width / 2 >= this.listview.content.width) && this.hideArrow()
				}
			},
			e.prototype.scrollTo = function(t, e) {
				void 0 === e && (e = .1);
				var o = this.itemsPos[t],
				i = 0,
				n = 0;
				this.isVertical ? n = Math.abs(o) : i = o,
				this.listview.scrollToOffset(cc.v2(i, n), e)
			},
			e.prototype._getDownIdxs = function(t) {
				var e = this.listview.node.width;
				this.isVertical && (e = this.listview.node.height);
				for (var o = 0,
				i = 0,
				n = 1; n <= t + 1; n++) {
					var r = Math.abs(this.itemsPos[n]);
					i += 1 == n ? (r - o - this.spacing) / 2 + this.spacing: r - o
				}
				if (i < e / 2) return Math.min(this.data.length - 1, this.itemNum - 1);
				o = Math.abs(this.itemsPos[t]);
				var a = 0,
				s = 0;
				for (n = t + 1; n < this.itemsPos.length; n++) if (s++, r = Math.abs(this.itemsPos[n]), a += 1 == s ? (r - o - this.spacing) / 2 + this.spacing: r - o, o = r, a >= e / 2) return n - 1;
				return this.data.length - 1
			},
			e.prototype.jumpTo = function(t) {
				var e = this;
				if (this.jumpFinished = !1, this.listview.stopAutoScroll(), this.canUpdateFrame = !1, this.initType == n.Bottom) this.downIdx = Math.min(t, this.data.length - 1),
				(o = this.downIdx - this.items.length + 1) < 0 && (this.downIdx += Math.abs(o), o = 0),
				this.topIdx = o;
				else if (this.initType == n.Center) {
					var o;
					this.downIdx = this._getDownIdxs(t),
					(o = this.downIdx - this.items.length + 1) < 0 && (this.downIdx += Math.abs(o), o = 0),
					this.topIdx = o
				} else this.initType == n.Top && (this.downIdx = Math.min(t + this.items.length - 1, this.data.length - 1), this.topIdx = this.downIdx - this.items.length + 1);
				for (var i = 0; i < this.downIdx - this.topIdx + 1; i++) {
					var r = this.items[i],
					a = this.topIdx + i;
					this.itemUpdateFunc(a, r, this.data[a]);
					var s = r.getContentSize(),
					c = "x",
					l = s.width / 2;
					this.isVertical && (c = "y", l = -s.height / 2),
					r[c] = this.itemsPos[a] + l
				}
				var u = 0,
				p = 0,
				h = this.itemsPos[this.topIdx];
				if (this.isVertical) {
					p = Math.abs(h);
					var d = this.listview.node.height,
					f = Math.max(this.listview.content.height, d) - d / 2;
					if (this.initType == n.Bottom) if (0 == this.topIdx) p = this.listview.node.height / 2;
					else {
						var _ = this.getItemsHeight();
						p = p + _ - this.listview.node.height / 2
					} else this.initType == n.Center ? (_ = this.getItemsLength(t - this.topIdx + 1), p += _, p = Math.max(p, this.listview.node.height / 2)) : this.initType == n.Top && (p = this.itemsPos[t] + this.listview.node.height / 2);
					p = Math.min(f, p)
				} else {
					u = h;
					var y = this.listview.node.width,
					v = -(Math.max(this.listview.content.width, y) - y / 2);
					this.initType == n.Bottom ? 0 == this.topIdx ? u = this.listview.node.width / 2 : (_ = this.getItemsHeight(), u = u + _ - this.listview.node.width / 2) : this.initType == n.Center ? (_ = this.getItemsLength(t - this.topIdx + 1), u += _, u = Math.max(u, this.listview.node.width / 2)) : this.initType == n.Top && (u = this.itemsPos[t] + this.listview.node.width / 2),
					u = Math.max(v, -u)
				}
				this.scheduleOnce(function() {
					e.listview.setContentPosition(cc.v2(u, p)),
					e.canUpdateFrame = !0,
					e.jumpFinished = !0
				})
			},
			e.prototype.jumpToTop = function() {
				this.jumpTo(0)
			},
			e.prototype.jumpToBottom = function() {
				this.jumpTo(this.rowNum - 1)
			},
			e.prototype.isJumpFinished = function() {
				return this.jumpFinished
			},
			a([l(cc.Prefab)], e.prototype, "itemTemplate", void 0),
			a([l(cc.Prefab)], e.prototype, "arrow", void 0),
			a([l], e.prototype, "spacing", void 0),
			a([l], e.prototype, "initNum", void 0),
			a([l], e.prototype, "initIdx", void 0),
			a([l], e.prototype, "cacheNum", void 0),
			a([l({
				type: cc.Enum(n)
			})], e.prototype, "initType", void 0),
			a([c], e)
		} (cc.Component);
		o.
	default = u,
		cc._RF.pop()
	},
	{}],
	List: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "beac5tHp2ZGgrKcHARF3gId", "List");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a, s, c, l = cc._decorator,
		u = l.ccclass,
		p = l.property,
		h = l.disallowMultiple,
		d = l.menu,
		f = l.executionOrder,
		_ = l.requireComponent,
		y = t("./ListItem"); (function(t) {
			t[t.NODE = 1] = "NODE",
			t[t.PREFAB = 2] = "PREFAB"
		})(a || (a = {})),
		function(t) {
			t[t.NORMAL = 1] = "NORMAL",
			t[t.ADHERING = 2] = "ADHERING",
			t[t.PAGE = 3] = "PAGE"
		} (s || (s = {})),
		function(t) {
			t[t.NONE = 0] = "NONE",
			t[t.SINGLE = 1] = "SINGLE",
			t[t.MULT = 2] = "MULT"
		} (c || (c = {}));
		var v = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.templateType = a.NODE,
				e.tmpNode = null,
				e.tmpPrefab = null,
				e._slideMode = s.NORMAL,
				e.pageDistance = .3,
				e.pageChangeEvent = new cc.Component.EventHandler,
				e._virtual = !0,
				e.cyclic = !1,
				e.lackCenter = !1,
				e.lackSlide = !1,
				e._updateRate = 0,
				e.frameByFrameRenderNum = 0,
				e.renderEvent = new cc.Component.EventHandler,
				e.selectedMode = c.NONE,
				e.repeatEventSingle = !1,
				e.selectedEvent = new cc.Component.EventHandler,
				e._selectedId = -1,
				e._forceUpdate = !1,
				e._updateDone = !0,
				e._numItems = 0,
				e._inited = !1,
				e._needUpdateWidget = !1,
				e._aniDelRuning = !1,
				e._doneAfterUpdate = !1,
				e.adhering = !1,
				e._adheringBarrier = !1,
				e.curPageNum = 0,
				e
			}
			return n(e, t),
			Object.defineProperty(e.prototype, "slideMode", {
				get: function() {
					return this._slideMode
				},
				set: function(t) {
					this._slideMode = t
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "virtual", {
				get: function() {
					return this._virtual
				},
				set: function(t) {
					null != t && (this._virtual = t),
					0 != this._numItems && this._onScrolling()
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "updateRate", {
				get: function() {
					return this._updateRate
				},
				set: function(t) {
					t >= 0 && t <= 6 && (this._updateRate = t)
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "selectedId", {
				get: function() {
					return this._selectedId
				},
				set: function(t) {
					var e, o = this;
					switch (o.selectedMode) {
					case c.SINGLE:
						if (!o.repeatEventSingle && t == o._selectedId) return;
						e = o.getItemByListId(t);
						var i = void 0;
						if (o._selectedId >= 0 ? o._lastSelectedId = o._selectedId: o._lastSelectedId = null, o._selectedId = t, e && ((i = e.getComponent(y.
					default)).selected = !0), o._lastSelectedId >= 0 && o._lastSelectedId != o._selectedId) {
							var n = o.getItemByListId(o._lastSelectedId);
							n && (n.getComponent(y.
						default).selected = !1)
						}
						o.selectedEvent && cc.Component.EventHandler.emitEvents([o.selectedEvent], e, t % this._actualNumItems, null == o._lastSelectedId ? null: o._lastSelectedId % this._actualNumItems);
						break;
					case c.MULT:
						if (! (e = o.getItemByListId(t))) return;
						i = e.getComponent(y.
					default),
						o._selectedId >= 0 && (o._lastSelectedId = o._selectedId),
						o._selectedId = t;
						var r = !i.selected;
						i.selected = r;
						var a = o.multSelected.indexOf(t);
						r && a < 0 ? o.multSelected.push(t) : !r && a >= 0 && o.multSelected.splice(a, 1),
						o.selectedEvent && cc.Component.EventHandler.emitEvents([o.selectedEvent], e, t % this._actualNumItems, null == o._lastSelectedId ? null: o._lastSelectedId % this._actualNumItems, r)
					}
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "numItems", {
				get: function() {
					return this._actualNumItems
				},
				set: function(t) {
					var e = this;
					if (e.checkInited(!1)) if (null == t || t < 0) cc.error("numItems set the wrong::", t);
					else if (e._actualNumItems = e._numItems = t, e._forceUpdate = !0, e._virtual) e._resizeContent(),
					e.cyclic && (e._numItems = e._cyclicNum * e._numItems),
					e._onScrolling(),
					e.frameByFrameRenderNum || e.slideMode != s.PAGE || (e.curPageNum = e.nearestListId);
					else {
						e.cyclic && (e._resizeContent(), e._numItems = e._cyclicNum * e._numItems);
						var o = e.content.getComponent(cc.Layout);
						if (o && (o.enabled = !0), e._delRedundantItem(), e.firstListId = 0, e.frameByFrameRenderNum > 0) {
							for (var i = e.frameByFrameRenderNum > e._numItems ? e._numItems: e.frameByFrameRenderNum, n = 0; n < i; n++) e._createOrUpdateItem2(n);
							e.frameByFrameRenderNum < e._numItems && (e._updateCounter = e.frameByFrameRenderNum, e._updateDone = !1)
						} else {
							for (n = 0; n < e._numItems; n++) e._createOrUpdateItem2(n);
							e.displayItemNum = e._numItems
						}
					}
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "scrollView", {
				get: function() {
					return this._scrollView
				},
				enumerable: !1,
				configurable: !0
			}),
			e.prototype.onLoad = function() {
				this._init()
			},
			e.prototype.onDestroy = function() {
				var t = this;
				cc.isValid(t._itemTmp) && t._itemTmp.destroy(),
				cc.isValid(t.tmpNode) && t.tmpNode.destroy(),
				t._pool && t._pool.clear()
			},
			e.prototype.onEnable = function() {
				this._registerEvent(),
				this._init(),
				this._aniDelRuning && (this._aniDelRuning = !1, this._aniDelItem && (this._aniDelBeforePos && (this._aniDelItem.position = this._aniDelBeforePos, delete this._aniDelBeforePos), this._aniDelBeforeScale && (this._aniDelItem.scale = this._aniDelBeforeScale, delete this._aniDelBeforeScale), delete this._aniDelItem), this._aniDelCB && (this._aniDelCB(), delete this._aniDelCB))
			},
			e.prototype.onDisable = function() {
				this._unregisterEvent()
			},
			e.prototype._registerEvent = function() {
				var t = this;
				t.node.on(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, !0),
				t.node.on("touch-up", t._onTouchUp, t),
				t.node.on(cc.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, !0),
				t.node.on("scroll-began", t._onScrollBegan, t, !0),
				t.node.on("scroll-ended", t._onScrollEnded, t, !0),
				t.node.on("scrolling", t._onScrolling, t, !0),
				t.node.on(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t)
			},
			e.prototype._unregisterEvent = function() {
				var t = this;
				t.node.off(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, !0),
				t.node.off("touch-up", t._onTouchUp, t),
				t.node.off(cc.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, !0),
				t.node.off("scroll-began", t._onScrollBegan, t, !0),
				t.node.off("scroll-ended", t._onScrollEnded, t, !0),
				t.node.off("scrolling", t._onScrolling, t, !0),
				t.node.off(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t)
			},
			e.prototype._init = function() {
				var t = this;
				if (!t._inited) if (t._scrollView = t.node.getComponent(cc.ScrollView), t.content = t._scrollView.content, t.content) {
					switch (t._layout = t.content.getComponent(cc.Layout), t._align = t._layout.type, t._resizeMode = t._layout.resizeMode, t._startAxis = t._layout.startAxis, t._topGap = t._layout.paddingTop, t._rightGap = t._layout.paddingRight, t._bottomGap = t._layout.paddingBottom, t._leftGap = t._layout.paddingLeft, t._columnGap = t._layout.spacingX, t._lineGap = t._layout.spacingY, t._colLineNum, t._verticalDir = t._layout.verticalDirection, t._horizontalDir = t._layout.horizontalDirection, t.setTemplateItem(cc.instantiate(t.templateType == a.PREFAB ? t.tmpPrefab: t.tmpNode)), t._slideMode != s.ADHERING && t._slideMode != s.PAGE || (t._scrollView.inertia = !1, t._scrollView._onMouseWheel = function() {}), t.virtual || (t.lackCenter = !1), t._lastDisplayData = [], t.displayData = [], t._pool = new cc.NodePool, t._forceUpdate = !1, t._updateCounter = 0, t._updateDone = !0, t.curPageNum = 0, t.cyclic && (t._scrollView._processAutoScrolling = this._processAutoScrolling.bind(t), t._scrollView._startBounceBackIfNeeded = function() {
						return ! 1
					}), t._align) {
					case cc.Layout.Type.HORIZONTAL:
						switch (t._horizontalDir) {
						case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
							t._alignCalcType = 1;
							break;
						case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
							t._alignCalcType = 2
						}
						break;
					case cc.Layout.Type.VERTICAL:
						switch (t._verticalDir) {
						case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
							t._alignCalcType = 3;
							break;
						case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
							t._alignCalcType = 4
						}
						break;
					case cc.Layout.Type.GRID:
						switch (t._startAxis) {
						case cc.Layout.AxisDirection.HORIZONTAL:
							switch (t._verticalDir) {
							case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
								t._alignCalcType = 3;
								break;
							case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
								t._alignCalcType = 4
							}
							break;
						case cc.Layout.AxisDirection.VERTICAL:
							switch (t._horizontalDir) {
							case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
								t._alignCalcType = 1;
								break;
							case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
								t._alignCalcType = 2
							}
						}
					}
					t.content.removeAllChildren(),
					t._inited = !0
				} else cc.error(t.node.name + "'s cc.ScrollView unset content!")
			},
			e.prototype._processAutoScrolling = function(t) {
				this._scrollView._autoScrollAccumulatedTime += 1 * t;
				var e = Math.min(1, this._scrollView._autoScrollAccumulatedTime / this._scrollView._autoScrollTotalTime);
				if (this._scrollView._autoScrollAttenuate) {
					var o = e - 1;
					e = o * o * o * o * o + 1
				}
				var i = this._scrollView._autoScrollStartPosition.add(this._scrollView._autoScrollTargetDelta.mul(e)),
				n = this._scrollView.getScrollEndedEventTiming(),
				r = Math.abs(e - 1) <= n;
				Math.abs(e - 1) <= this._scrollView.getScrollEndedEventTiming() && !this._scrollView._isScrollEndedWithThresholdEventFired && (this._scrollView._dispatchEvent("scroll-ended-with-threshold"), this._scrollView._isScrollEndedWithThresholdEventFired = !0),
				r && (this._scrollView._autoScrolling = !1);
				var a = i.sub(this._scrollView.getContentPosition());
				this._scrollView._moveContent(this._scrollView._clampDelta(a), r),
				this._scrollView._dispatchEvent("scrolling"),
				this._scrollView._autoScrolling || (this._scrollView._isBouncing = !1, this._scrollView._scrolling = !1, this._scrollView._dispatchEvent("scroll-ended"))
			},
			e.prototype.setTemplateItem = function(t) {
				if (t) {
					var e = this;
					e._itemTmp = t,
					e._resizeMode == cc.Layout.ResizeMode.CHILDREN ? e._itemSize = e._layout.cellSize: e._itemSize = cc.size(t.width, t.height);
					var o = t.getComponent(y.
				default),
					i = !1;
					switch (o || (i = !0), i && (e.selectedMode = c.NONE), (o = t.getComponent(cc.Widget)) && o.enabled && (e._needUpdateWidget = !0), e.selectedMode == c.MULT && (e.multSelected = []), e._align) {
					case cc.Layout.Type.HORIZONTAL:
						e._colLineNum = 1,
						e._sizeType = !1;
						break;
					case cc.Layout.Type.VERTICAL:
						e._colLineNum = 1,
						e._sizeType = !0;
						break;
					case cc.Layout.Type.GRID:
						switch (e._startAxis) {
						case cc.Layout.AxisDirection.HORIZONTAL:
							var n = e.content.width - e._leftGap - e._rightGap;
							e._colLineNum = Math.floor((n + e._columnGap) / (e._itemSize.width + e._columnGap)),
							e._sizeType = !0;
							break;
						case cc.Layout.AxisDirection.VERTICAL:
							var r = e.content.height - e._topGap - e._bottomGap;
							e._colLineNum = Math.floor((r + e._lineGap) / (e._itemSize.height + e._lineGap)),
							e._sizeType = !1
						}
					}
				}
			},
			e.prototype.checkInited = function(t) {
				return void 0 === t && (t = !0),
				!!this._inited || (t && cc.error("List initialization not completed!"), !1)
			},
			e.prototype._resizeContent = function() {
				var t, e = this;
				switch (e._align) {
				case cc.Layout.Type.HORIZONTAL:
					if (e._customSize) {
						var o = e._getFixedSize(null);
						t = e._leftGap + o.val + e._itemSize.width * (e._numItems - o.count) + e._columnGap * (e._numItems - 1) + e._rightGap
					} else t = e._leftGap + e._itemSize.width * e._numItems + e._columnGap * (e._numItems - 1) + e._rightGap;
					break;
				case cc.Layout.Type.VERTICAL:
					e._customSize ? (o = e._getFixedSize(null), t = e._topGap + o.val + e._itemSize.height * (e._numItems - o.count) + e._lineGap * (e._numItems - 1) + e._bottomGap) : t = e._topGap + e._itemSize.height * e._numItems + e._lineGap * (e._numItems - 1) + e._bottomGap;
					break;
				case cc.Layout.Type.GRID:
					switch (e.lackCenter && (e.lackCenter = !1), e._startAxis) {
					case cc.Layout.AxisDirection.HORIZONTAL:
						var i = Math.ceil(e._numItems / e._colLineNum);
						t = e._topGap + e._itemSize.height * i + e._lineGap * (i - 1) + e._bottomGap;
						break;
					case cc.Layout.AxisDirection.VERTICAL:
						var n = Math.ceil(e._numItems / e._colLineNum);
						t = e._leftGap + e._itemSize.width * n + e._columnGap * (n - 1) + e._rightGap
					}
				}
				var r = e.content.getComponent(cc.Layout);
				if (r && (r.enabled = !1), e._allItemSize = t, e._allItemSizeNoEdge = e._allItemSize - (e._sizeType ? e._topGap + e._bottomGap: e._leftGap + e._rightGap), e.cyclic) {
					var a = e._sizeType ? e.node.height: e.node.width;
					e._cyclicPos1 = 0,
					a -= e._cyclicPos1,
					e._cyclicNum = Math.ceil(a / e._allItemSizeNoEdge) + 1;
					var s = e._sizeType ? e._lineGap: e._columnGap;
					e._cyclicPos2 = e._cyclicPos1 + e._allItemSizeNoEdge + s,
					e._cyclicAllItemSize = e._allItemSize + e._allItemSizeNoEdge * (e._cyclicNum - 1) + s * (e._cyclicNum - 1),
					e._cycilcAllItemSizeNoEdge = e._allItemSizeNoEdge * e._cyclicNum,
					e._cycilcAllItemSizeNoEdge += s * (e._cyclicNum - 1)
				}
				e._lack = !e.cyclic && e._allItemSize < (e._sizeType ? e.node.height: e.node.width);
				var c = e._lack && e.lackCenter || !e.lackSlide ? .1 : 0,
				l = e._lack ? (e._sizeType ? e.node.height: e.node.width) - c: e.cyclic ? e._cyclicAllItemSize: e._allItemSize;
				l < 0 && (l = 0),
				e._sizeType ? e.content.height = l: e.content.width = l
			},
			e.prototype._onScrolling = function(t) {
				if (void 0 === t && (t = null), null == this.frameCount && (this.frameCount = this._updateRate), !this._forceUpdate && t && "scroll-ended" != t.type && this.frameCount > 0) this.frameCount--;
				else if (this.frameCount = this._updateRate, !this._aniDelRuning) {
					if (this.cyclic) {
						var e = this.content.getPosition();
						e = this._sizeType ? e.y: e.x;
						var o = this._allItemSizeNoEdge + (this._sizeType ? this._lineGap: this._columnGap),
						i = this._sizeType ? cc.v2(0, o) : cc.v2(o, 0);
						switch (this._alignCalcType) {
						case 1:
							e > -this._cyclicPos1 ? (this.content.x = -this._cyclicPos2, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(i))) : e < -this._cyclicPos2 && (this.content.x = -this._cyclicPos1, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(i)));
							break;
						case 2:
							e < this._cyclicPos1 ? (this.content.x = this._cyclicPos2, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(i))) : e > this._cyclicPos2 && (this.content.x = this._cyclicPos1, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(i)));
							break;
						case 3:
							e < this._cyclicPos1 ? (this.content.y = this._cyclicPos2, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(i))) : e > this._cyclicPos2 && (this.content.y = this._cyclicPos1, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(i)));
							break;
						case 4:
							e > -this._cyclicPos1 ? (this.content.y = -this._cyclicPos2, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(i))) : e < -this._cyclicPos2 && (this.content.y = -this._cyclicPos1, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(i)))
						}
					}
					var n, r, a, s;
					if (this._calcViewPos(), this._sizeType ? (n = this.viewTop, a = this.viewBottom) : (r = this.viewRight, s = this.viewLeft), this._virtual) {
						this.displayData = [];
						var c = void 0,
						l = 0,
						u = this._numItems - 1;
						if (this._customSize) for (var p = !1; l <= u && !p; l++) switch (c = this._calcItemPos(l), this._align) {
						case cc.Layout.Type.HORIZONTAL:
							c.right >= s && c.left <= r ? this.displayData.push(c) : 0 != l && this.displayData.length > 0 && (p = !0);
							break;
						case cc.Layout.Type.VERTICAL:
							c.bottom <= n && c.top >= a ? this.displayData.push(c) : 0 != l && this.displayData.length > 0 && (p = !0);
							break;
						case cc.Layout.Type.GRID:
							switch (this._startAxis) {
							case cc.Layout.AxisDirection.HORIZONTAL:
								c.bottom <= n && c.top >= a ? this.displayData.push(c) : 0 != l && this.displayData.length > 0 && (p = !0);
								break;
							case cc.Layout.AxisDirection.VERTICAL:
								c.right >= s && c.left <= r ? this.displayData.push(c) : 0 != l && this.displayData.length > 0 && (p = !0)
							}
						} else {
							var h = this._itemSize.width + this._columnGap,
							d = this._itemSize.height + this._lineGap;
							switch (this._alignCalcType) {
							case 1:
								l = (s - this._leftGap) / h,
								u = (r - this._leftGap) / h;
								break;
							case 2:
								l = ( - r - this._rightGap) / h,
								u = ( - s - this._rightGap) / h;
								break;
							case 3:
								l = ( - n - this._topGap) / d,
								u = ( - a - this._topGap) / d;
								break;
							case 4:
								l = (a - this._bottomGap) / d,
								u = (n - this._bottomGap) / d
							}
							for (l = Math.floor(l) * this._colLineNum, u = Math.ceil(u) * this._colLineNum, l < 0 && (l = 0), --u >= this._numItems && (u = this._numItems - 1); l <= u; l++) this.displayData.push(this._calcItemPos(l))
						}
						if (this._delRedundantItem(), this.displayData.length <= 0 || !this._numItems) return void(this._lastDisplayData = []);
						this.firstListId = this.displayData[0].id,
						this.displayItemNum = this.displayData.length;
						var f = this._lastDisplayData.length,
						_ = this.displayItemNum != f;
						if (_ && (this.frameByFrameRenderNum > 0 && this._lastDisplayData.sort(function(t, e) {
							return t - e
						}), _ = this.firstListId != this._lastDisplayData[0] || this.displayData[this.displayItemNum - 1].id != this._lastDisplayData[f - 1]), this._forceUpdate || _) if (this.frameByFrameRenderNum > 0) this._numItems > 0 ? (this._updateDone ? this._updateCounter = 0 : this._doneAfterUpdate = !0, this._updateDone = !1) : (this._updateCounter = 0, this._updateDone = !0);
						else {
							this._lastDisplayData = [];
							for (var y = 0; y < this.displayItemNum; y++) this._createOrUpdateItem(this.displayData[y]);
							this._forceUpdate = !1
						}
						this._calcNearestItem()
					}
				}
			},
			e.prototype._calcViewPos = function() {
				var t = this.content.getPosition();
				switch (this._alignCalcType) {
				case 1:
					this.elasticLeft = t.x > 0 ? t.x: 0,
					this.viewLeft = (t.x < 0 ? -t.x: 0) - this.elasticLeft,
					this.viewRight = this.viewLeft + this.node.width,
					this.elasticRight = this.viewRight > this.content.width ? Math.abs(this.viewRight - this.content.width) : 0,
					this.viewRight += this.elasticRight;
					break;
				case 2:
					this.elasticRight = t.x < 0 ? -t.x: 0,
					this.viewRight = (t.x > 0 ? -t.x: 0) + this.elasticRight,
					this.viewLeft = this.viewRight - this.node.width,
					this.elasticLeft = this.viewLeft < -this.content.width ? Math.abs(this.viewLeft + this.content.width) : 0,
					this.viewLeft -= this.elasticLeft;
					break;
				case 3:
					this.elasticTop = t.y < 0 ? Math.abs(t.y) : 0,
					this.viewTop = (t.y > 0 ? -t.y: 0) + this.elasticTop,
					this.viewBottom = this.viewTop - this.node.height,
					this.elasticBottom = this.viewBottom < -this.content.height ? Math.abs(this.viewBottom + this.content.height) : 0,
					this.viewBottom += this.elasticBottom;
					break;
				case 4:
					this.elasticBottom = t.y > 0 ? Math.abs(t.y) : 0,
					this.viewBottom = (t.y < 0 ? -t.y: 0) - this.elasticBottom,
					this.viewTop = this.viewBottom + this.node.height,
					this.elasticTop = this.viewTop > this.content.height ? Math.abs(this.viewTop - this.content.height) : 0,
					this.viewTop -= this.elasticTop
				}
			},
			e.prototype._calcItemPos = function(t) {
				var e, o, i, n, r, a, s, c;
				switch (this._align) {
				case cc.Layout.Type.HORIZONTAL:
					switch (this._horizontalDir) {
					case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
						if (this._customSize) {
							var l = this._getFixedSize(t);
							r = this._leftGap + (this._itemSize.width + this._columnGap) * (t - l.count) + (l.val + this._columnGap * l.count),
							e = (u = this._customSize[t]) > 0 ? u: this._itemSize.width
						} else r = this._leftGap + (this._itemSize.width + this._columnGap) * t,
						e = this._itemSize.width;
						return this.lackCenter && (r -= this._leftGap, r += this.content.width / 2 - this._allItemSizeNoEdge / 2),
						{
							id: t,
							left: r,
							right: a = r + e,
							x: r + this._itemTmp.anchorX * e,
							y: this._itemTmp.y
						};
					case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
						return this._customSize ? (l = this._getFixedSize(t), a = -this._rightGap - (this._itemSize.width + this._columnGap) * (t - l.count) - (l.val + this._columnGap * l.count), e = (u = this._customSize[t]) > 0 ? u: this._itemSize.width) : (a = -this._rightGap - (this._itemSize.width + this._columnGap) * t, e = this._itemSize.width),
						this.lackCenter && (a += this._rightGap, a -= this.content.width / 2 - this._allItemSizeNoEdge / 2),
						{
							id: t,
							right: a,
							left: r = a - e,
							x: r + this._itemTmp.anchorX * e,
							y: this._itemTmp.y
						}
					}
					break;
				case cc.Layout.Type.VERTICAL:
					switch (this._verticalDir) {
					case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
						return this._customSize ? (l = this._getFixedSize(t), i = -this._topGap - (this._itemSize.height + this._lineGap) * (t - l.count) - (l.val + this._lineGap * l.count), o = (u = this._customSize[t]) > 0 ? u: this._itemSize.height) : (i = -this._topGap - (this._itemSize.height + this._lineGap) * t, o = this._itemSize.height),
						this.lackCenter && (i += this._topGap, i -= this.content.height / 2 - this._allItemSizeNoEdge / 2),
						{
							id: t,
							top: i,
							bottom: n = i - o,
							x: this._itemTmp.x,
							y: n + this._itemTmp.anchorY * o
						};
					case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
						var u;
						if (this._customSize) l = this._getFixedSize(t),
						n = this._bottomGap + (this._itemSize.height + this._lineGap) * (t - l.count) + (l.val + this._lineGap * l.count),
						o = (u = this._customSize[t]) > 0 ? u: this._itemSize.height;
						else n = this._bottomGap + (this._itemSize.height + this._lineGap) * t,
						o = this._itemSize.height;
						return this.lackCenter && (n -= this._bottomGap, n += this.content.height / 2 - this._allItemSizeNoEdge / 2),
						{
							id: t,
							top: i = n + o,
							bottom: n,
							x: this._itemTmp.x,
							y: n + this._itemTmp.anchorY * o
						}
					}
				case cc.Layout.Type.GRID:
					var p = Math.floor(t / this._colLineNum);
					switch (this._startAxis) {
					case cc.Layout.AxisDirection.HORIZONTAL:
						switch (this._verticalDir) {
						case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
							c = (n = (i = -this._topGap - (this._itemSize.height + this._lineGap) * p) - this._itemSize.height) + this._itemTmp.anchorY * this._itemSize.height;
							break;
						case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
							i = (n = this._bottomGap + (this._itemSize.height + this._lineGap) * p) + this._itemSize.height,
							c = n + this._itemTmp.anchorY * this._itemSize.height
						}
						switch (s = this._leftGap + t % this._colLineNum * (this._itemSize.width + this._columnGap), this._horizontalDir) {
						case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
							s += this._itemTmp.anchorX * this._itemSize.width,
							s -= this.content.anchorX * this.content.width;
							break;
						case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
							s += (1 - this._itemTmp.anchorX) * this._itemSize.width,
							s -= (1 - this.content.anchorX) * this.content.width,
							s *= -1
						}
						return {
							id: t,
							top: i,
							bottom: n,
							x: s,
							y: c
						};
					case cc.Layout.AxisDirection.VERTICAL:
						switch (this._horizontalDir) {
						case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
							a = (r = this._leftGap + (this._itemSize.width + this._columnGap) * p) + this._itemSize.width,
							s = r + this._itemTmp.anchorX * this._itemSize.width,
							s -= this.content.anchorX * this.content.width;
							break;
						case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
							s = (r = (a = -this._rightGap - (this._itemSize.width + this._columnGap) * p) - this._itemSize.width) + this._itemTmp.anchorX * this._itemSize.width,
							s += (1 - this.content.anchorX) * this.content.width
						}
						switch (c = -this._topGap - t % this._colLineNum * (this._itemSize.height + this._lineGap), this._verticalDir) {
						case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
							c -= (1 - this._itemTmp.anchorY) * this._itemSize.height,
							c += (1 - this.content.anchorY) * this.content.height;
							break;
						case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
							c -= this._itemTmp.anchorY * this._itemSize.height,
							c += this.content.anchorY * this.content.height,
							c *= -1
						}
						return {
							id: t,
							left: r,
							right: a,
							x: s,
							y: c
						}
					}
				}
			},
			e.prototype._calcExistItemPos = function(t) {
				var e = this.getItemByListId(t);
				if (!e) return null;
				var o = {
					id: t,
					x: e.x,
					y: e.y
				};
				return this._sizeType ? (o.top = e.y + e.height * (1 - e.anchorY), o.bottom = e.y - e.height * e.anchorY) : (o.left = e.x - e.width * e.anchorX, o.right = e.x + e.width * (1 - e.anchorX)),
				o
			},
			e.prototype.getItemPos = function(t) {
				return this._virtual ? this._calcItemPos(t) : this.frameByFrameRenderNum ? this._calcItemPos(t) : this._calcExistItemPos(t)
			},
			e.prototype._getFixedSize = function(t) {
				if (!this._customSize) return null;
				null == t && (t = this._numItems);
				var e = 0,
				o = 0;
				for (var i in this._customSize) parseInt(i) < t && (e += this._customSize[i], o++);
				return {
					val: e,
					count: o
				}
			},
			e.prototype._onScrollBegan = function() {
				this._beganPos = this._sizeType ? this.viewTop: this.viewLeft
			},
			e.prototype._onScrollEnded = function() {
				var t = this;
				if (t.curScrollIsTouch = !1, null != t.scrollToListId) {
					var e = t.getItemByListId(t.scrollToListId);
					t.scrollToListId = null,
					e && cc.tween(e).to(.1, {
						scale: 1.06
					}).to(.1, {
						scale: 1
					}).start()
				}
				t._onScrolling(),
				t._slideMode != s.ADHERING || t.adhering ? t._slideMode == s.PAGE && (null != t._beganPos && t.curScrollIsTouch ? this._pageAdhere() : t.adhere()) : t.adhere()
			},
			e.prototype._onTouchStart = function(t, e) {
				if (!this._scrollView._hasNestedViewGroup(t, e) && (this.curScrollIsTouch = !0, t.eventPhase !== cc.Event.AT_TARGET || t.target !== this.node)) {
					for (var o = t.target; null == o._listId && o.parent;) o = o.parent;
					this._scrollItem = null != o._listId ? o: t.target
				}
			},
			e.prototype._onTouchUp = function() {
				var t = this;
				t._scrollPos = null,
				t._slideMode == s.ADHERING ? (this.adhering && (this._adheringBarrier = !0), t.adhere()) : t._slideMode == s.PAGE && (null != t._beganPos ? this._pageAdhere() : t.adhere()),
				this._scrollItem = null
			},
			e.prototype._onTouchCancelled = function(t, e) {
				var o = this;
				o._scrollView._hasNestedViewGroup(t, e) || t.simulate || (o._scrollPos = null, o._slideMode == s.ADHERING ? (o.adhering && (o._adheringBarrier = !0), o.adhere()) : o._slideMode == s.PAGE && (null != o._beganPos ? o._pageAdhere() : o.adhere()), this._scrollItem = null)
			},
			e.prototype._onSizeChanged = function() {
				this.checkInited(!1) && this._onScrolling()
			},
			e.prototype._onItemAdaptive = function(t) {
				if (!this._sizeType && t.width != this._itemSize.width || this._sizeType && t.height != this._itemSize.height) {
					this._customSize || (this._customSize = {});
					var e = this._sizeType ? t.height: t.width;
					this._customSize[t._listId] != e && (this._customSize[t._listId] = e, this._resizeContent(), this.updateAll(), null != this._scrollToListId && (this._scrollPos = null, this.unschedule(this._scrollToSo), this.scrollTo(this._scrollToListId, Math.max(0, this._scrollToEndTime - (new Date).getTime() / 1e3))))
				}
			},
			e.prototype._pageAdhere = function() {
				var t = this;
				if (t.cyclic || !(t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0)) {
					var e = t._sizeType ? t.viewTop: t.viewLeft,
					o = (t._sizeType ? t.node.height: t.node.width) * t.pageDistance;
					if (Math.abs(t._beganPos - e) > o) switch (t._alignCalcType) {
					case 1:
					case 4:
						t._beganPos > e ? t.prePage(.5) : t.nextPage(.5);
						break;
					case 2:
					case 3:
						t._beganPos < e ? t.prePage(.5) : t.nextPage(.5)
					} else t.elasticTop <= 0 && t.elasticRight <= 0 && t.elasticBottom <= 0 && t.elasticLeft <= 0 && t.adhere();
					t._beganPos = null
				}
			},
			e.prototype.adhere = function() {
				var t = this;
				if (t.checkInited() && !(t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0)) {
					t.adhering = !0,
					t._calcNearestItem();
					var e = (t._sizeType ? t._topGap: t._leftGap) / (t._sizeType ? t.node.height: t.node.width);
					t.scrollTo(t.nearestListId, .7, e)
				}
			},
			e.prototype.update = function() {
				if (! (this.frameByFrameRenderNum <= 0 || this._updateDone)) if (this._virtual) {
					for (var t = this._updateCounter + this.frameByFrameRenderNum > this.displayItemNum ? this.displayItemNum: this._updateCounter + this.frameByFrameRenderNum, e = this._updateCounter; e < t; e++) {
						var o = this.displayData[e];
						o && this._createOrUpdateItem(o)
					}
					this._updateCounter >= this.displayItemNum - 1 ? this._doneAfterUpdate ? (this._updateCounter = 0, this._updateDone = !1, this._doneAfterUpdate = !1) : (this._updateDone = !0, this._delRedundantItem(), this._forceUpdate = !1, this._calcNearestItem(), this.slideMode == s.PAGE && (this.curPageNum = this.nearestListId)) : this._updateCounter += this.frameByFrameRenderNum
				} else if (this._updateCounter < this._numItems) {
					for (t = this._updateCounter + this.frameByFrameRenderNum > this._numItems ? this._numItems: this._updateCounter + this.frameByFrameRenderNum, e = this._updateCounter; e < t; e++) this._createOrUpdateItem2(e);
					this._updateCounter += this.frameByFrameRenderNum
				} else this._updateDone = !0,
				this._calcNearestItem(),
				this.slideMode == s.PAGE && (this.curPageNum = this.nearestListId)
			},
			e.prototype._createOrUpdateItem = function(t) {
				var e = this.getItemByListId(t.id);
				if (e) this._forceUpdate && this.renderEvent && (e.setPosition(cc.v2(t.x, t.y)), this._resetItemSize(e), this.renderEvent && cc.Component.EventHandler.emitEvents([this.renderEvent], e, t.id % this._actualNumItems));
				else {
					var o = this._pool.size() > 0;
					if (e = o ? this._pool.get() : cc.instantiate(this._itemTmp), o && cc.isValid(e) || (e = cc.instantiate(this._itemTmp), o = !1), e._listId != t.id && (e._listId = t.id, e.setContentSize(this._itemSize)), e.setPosition(cc.v2(t.x, t.y)), this._resetItemSize(e), this.content.addChild(e), o && this._needUpdateWidget) {
						var i = e.getComponent(cc.Widget);
						i && i.updateAlignment()
					}
					e.setSiblingIndex(this.content.childrenCount - 1);
					var n = e.getComponent(y.
				default);
					e.listItem = n,
					n && (n.listId = t.id, n.list = this, n._registerEvent()),
					this.renderEvent && cc.Component.EventHandler.emitEvents([this.renderEvent], e, t.id % this._actualNumItems)
				}
				this._resetItemSize(e),
				this._updateListItem(e.listItem),
				this._lastDisplayData.indexOf(t.id) < 0 && this._lastDisplayData.push(t.id)
			},
			e.prototype._createOrUpdateItem2 = function(t) {
				var e, o = this.content.children[t];
				o ? this._forceUpdate && this.renderEvent && (o._listId = t, e && (e.listId = t), this.renderEvent && cc.Component.EventHandler.emitEvents([this.renderEvent], o, t % this._actualNumItems)) : ((o = cc.instantiate(this._itemTmp))._listId = t, this.content.addChild(o), e = o.getComponent(y.
			default), o.listItem = e, e && (e.listId = t, e.list = this, e._registerEvent()), this.renderEvent && cc.Component.EventHandler.emitEvents([this.renderEvent], o, t % this._actualNumItems)),
				this._updateListItem(e),
				this._lastDisplayData.indexOf(t) < 0 && this._lastDisplayData.push(t)
			},
			e.prototype._updateListItem = function(t) {
				if (t && this.selectedMode > c.NONE) {
					var e = t.node;
					switch (this.selectedMode) {
					case c.SINGLE:
						t.selected = this.selectedId == e._listId;
						break;
					case c.MULT:
						t.selected = this.multSelected.indexOf(e._listId) >= 0
					}
				}
			},
			e.prototype._resetItemSize = function() {},
			e.prototype._updateItemPos = function(t) {
				var e = isNaN(t) ? t: this.getItemByListId(t),
				o = this.getItemPos(e._listId);
				e.setPosition(o.x, o.y)
			},
			e.prototype.setMultSelected = function(t, e) {
				var o = this;
				if (o.checkInited()) {
					if (Array.isArray(t) || (t = [t]), null == e) o.multSelected = t;
					else {
						var i = void 0,
						n = void 0;
						if (e) for (var r = t.length - 1; r >= 0; r--) i = t[r],
						(n = o.multSelected.indexOf(i)) < 0 && o.multSelected.push(i);
						else for (r = t.length - 1; r >= 0; r--) i = t[r],
						(n = o.multSelected.indexOf(i)) >= 0 && o.multSelected.splice(n, 1)
					}
					o._forceUpdate = !0,
					o._onScrolling()
				}
			},
			e.prototype.getMultSelected = function() {
				return this.multSelected
			},
			e.prototype.hasMultSelected = function(t) {
				return this.multSelected && this.multSelected.indexOf(t) >= 0
			},
			e.prototype.updateItem = function(t) {
				if (this.checkInited()) {
					Array.isArray(t) || (t = [t]);
					for (var e = 0,
					o = t.length; e < o; e++) {
						var i = t[e],
						n = this.getItemByListId(i);
						n && cc.Component.EventHandler.emitEvents([this.renderEvent], n, i % this._actualNumItems)
					}
				}
			},
			e.prototype.updateAll = function() {
				this.checkInited() && (this.numItems = this.numItems)
			},
			e.prototype.getItemByListId = function(t) {
				if (this.content) for (var e = this.content.childrenCount - 1; e >= 0; e--) {
					var o = this.content.children[e];
					if (o._listId == t) return o
				}
			},
			e.prototype._getOutsideItem = function() {
				for (var t, e = [], o = this.content.childrenCount - 1; o >= 0; o--) t = this.content.children[o],
				this.displayData.find(function(e) {
					return e.id == t._listId
				}) || e.push(t);
				return e
			},
			e.prototype._delRedundantItem = function() {
				if (this._virtual) for (var t = this._getOutsideItem(), e = t.length - 1; e >= 0; e--) {
					var o = t[e];
					if (!this._scrollItem || o._listId != this._scrollItem._listId) {
						o.isCached = !0,
						this._pool.put(o);
						for (var i = this._lastDisplayData.length - 1; i >= 0; i--) if (this._lastDisplayData[i] == o._listId) {
							this._lastDisplayData.splice(i, 1);
							break
						}
					}
				} else for (; this.content.childrenCount > this._numItems;) this._delSingleItem(this.content.children[this.content.childrenCount - 1])
			},
			e.prototype._delSingleItem = function(t) {
				t.removeFromParent(),
				t.destroy && t.destroy(),
				t = null
			},
			e.prototype.aniDelItem = function(t, e, o) {
				var i = this;
				if (!i.checkInited() || i.cyclic || !i._virtual) return cc.error("This function is not allowed to be called!");
				if (!e) return cc.error("CallFunc are not allowed to be NULL, You need to delete the corresponding index in the data array in the CallFunc!");
				if (i._aniDelRuning) return cc.warn("Please wait for the current deletion to finish!");
				var n, r = i.getItemByListId(t);
				if (r) {
					n = r.getComponent(y.
				default),
					i._aniDelRuning = !0,
					i._aniDelCB = e,
					i._aniDelItem = r,
					i._aniDelBeforePos = r.position,
					i._aniDelBeforeScale = r.scale;
					var a = i.displayData[i.displayData.length - 1].id,
					s = n.selected;
					n.showAni(o,
					function() {
						var o, n, l;
						if (a < i._numItems - 2 && (o = a + 1), null != o) {
							var u = i._calcItemPos(o);
							i.displayData.push(u),
							i._virtual ? i._createOrUpdateItem(u) : i._createOrUpdateItem2(o)
						} else i._numItems--;
						if (i.selectedMode == c.SINGLE) s ? i._selectedId = -1 : i._selectedId - 1 >= 0 && i._selectedId--;
						else if (i.selectedMode == c.MULT && i.multSelected.length) {
							var p = i.multSelected.indexOf(t);
							p >= 0 && i.multSelected.splice(p, 1);
							for (var h = i.multSelected.length - 1; h >= 0; h--)(_ = i.multSelected[h]) >= t && i.multSelected[h]--
						}
						if (i._customSize) {
							i._customSize[t] && delete i._customSize[t];
							var d = {},
							f = void 0;
							for (var _ in i._customSize) {
								f = i._customSize[_];
								var y = parseInt(_);
								d[y - (y >= t ? 1 : 0)] = f
							}
							i._customSize = d
						}
						for (h = null != o ? o: a; h >= t + 1; h--) if (r = i.getItemByListId(h)) {
							var v = i._calcItemPos(h - 1);
							n = cc.tween(r).to(.2333, {
								position: cc.v2(v.x, v.y)
							}),
							h <= t + 1 && (l = !0, n.call(function() {
								i._aniDelRuning = !1,
								e(t),
								delete i._aniDelCB
							})),
							n.start()
						}
						l || (i._aniDelRuning = !1, e(t), i._aniDelCB = null)
					},
					!0)
				} else e(t)
			},
			e.prototype.scrollTo = function(t, e, o, i) {
				void 0 === e && (e = .5),
				void 0 === o && (o = null),
				void 0 === i && (i = !1);
				var n = this;
				if (n.checkInited(!1)) {
					null == e ? e = .5 : e < 0 && (e = 0),
					t < 0 ? t = 0 : t >= n._numItems && (t = n._numItems - 1),
					!n._virtual && n._layout && n._layout.enabled && n._layout.updateLayout();
					var r, a, s = n.getItemPos(t);
					if (!s) return ! 1;
					switch (n._alignCalcType) {
					case 1:
						r = s.left,
						r -= null != o ? n.node.width * o: n._leftGap,
						s = cc.v2(r, 0);
						break;
					case 2:
						r = s.right - n.node.width,
						r += null != o ? n.node.width * o: n._rightGap,
						s = cc.v2(r + n.content.width, 0);
						break;
					case 3:
						a = s.top,
						a += null != o ? n.node.height * o: n._topGap,
						s = cc.v2(0, -a);
						break;
					case 4:
						a = s.bottom + n.node.height,
						a -= null != o ? n.node.height * o: n._bottomGap,
						s = cc.v2(0, -a + n.content.height)
					}
					var c = n.content.getPosition();
					c = Math.abs(n._sizeType ? c.y: c.x);
					var l = n._sizeType ? s.y: s.x;
					Math.abs((null != n._scrollPos ? n._scrollPos: c) - l) > .5 && (n._scrollView.scrollToOffset(s, e), n._scrollToListId = t, n._scrollToEndTime = (new Date).getTime() / 1e3 + e, n._scrollToSo = n.scheduleOnce(function() {
						if (n._adheringBarrier || (n.adhering = n._adheringBarrier = !1), n._scrollPos = n._scrollToListId = n._scrollToEndTime = n._scrollToSo = null, i) {
							var e = n.getItemByListId(t);
							e && cc.tween(e).to(.1, {
								scale: 1.05
							}).to(.1, {
								scale: 1
							}).start()
						}
					},
					e + .1), e <= 0 && n._onScrolling())
				}
			},
			e.prototype._calcNearestItem = function() {
				var t, e, o, i, n, r, a = this;
				a.nearestListId = null,
				a._virtual && a._calcViewPos(),
				o = a.viewTop,
				i = a.viewRight,
				n = a.viewBottom,
				r = a.viewLeft;
				for (var s = !1,
				c = 0; c < a.content.childrenCount && !s; c += a._colLineNum) if (t = a._virtual ? a.displayData[c] : a._calcExistItemPos(c)) switch (e = a._sizeType ? (t.top + t.bottom) / 2 : e = (t.left + t.right) / 2, a._alignCalcType) {
				case 1:
					t.right >= r && (a.nearestListId = t.id, r > e && (a.nearestListId += a._colLineNum), s = !0);
					break;
				case 2:
					t.left <= i && (a.nearestListId = t.id, i < e && (a.nearestListId += a._colLineNum), s = !0);
					break;
				case 3:
					t.bottom <= o && (a.nearestListId = t.id, o < e && (a.nearestListId += a._colLineNum), s = !0);
					break;
				case 4:
					t.top >= n && (a.nearestListId = t.id, n > e && (a.nearestListId += a._colLineNum), s = !0)
				}
				if ((t = a._virtual ? a.displayData[a.displayItemNum - 1] : a._calcExistItemPos(a._numItems - 1)) && t.id == a._numItems - 1) switch (e = a._sizeType ? (t.top + t.bottom) / 2 : e = (t.left + t.right) / 2, a._alignCalcType) {
				case 1:
					i > e && (a.nearestListId = t.id);
					break;
				case 2:
					r < e && (a.nearestListId = t.id);
					break;
				case 3:
					n < e && (a.nearestListId = t.id);
					break;
				case 4:
					o > e && (a.nearestListId = t.id)
				}
			},
			e.prototype.prePage = function(t) {
				void 0 === t && (t = .5),
				this.checkInited() && this.skipPage(this.curPageNum - 1, t)
			},
			e.prototype.nextPage = function(t) {
				void 0 === t && (t = .5),
				this.checkInited() && this.skipPage(this.curPageNum + 1, t)
			},
			e.prototype.skipPage = function(t, e) {
				var o = this;
				if (o.checkInited()) return o._slideMode != s.PAGE ? cc.error("This function is not allowed to be called, Must SlideMode = PAGE!") : void(t < 0 || t >= o._numItems || o.curPageNum != t && (o.curPageNum = t, o.pageChangeEvent && cc.Component.EventHandler.emitEvents([o.pageChangeEvent], t), o.scrollTo(t, e)))
			},
			e.prototype.calcCustomSize = function(t) {
				var e = this;
				if (e.checkInited()) {
					if (!e._itemTmp) return cc.error("Unset template item!");
					if (!e.renderEvent) return cc.error("Unset Render-Event!");
					e._customSize = {};
					var o = cc.instantiate(e._itemTmp);
					e.content.addChild(o);
					for (var i = 0; i < t; i++) cc.Component.EventHandler.emitEvents([e.renderEvent], o, i),
					o.height == e._itemSize.height && o.width == e._itemSize.width || (e._customSize[i] = e._sizeType ? o.height: o.width);
					return Object.keys(e._customSize).length || (e._customSize = null),
					o.removeFromParent(),
					o.destroy && o.destroy(),
					e._customSize
				}
			},
			r([p({
				type: cc.Enum(a),
				tooltip: !1
			})], e.prototype, "templateType", void 0),
			r([p({
				type: cc.Node,
				tooltip: !1,
				visible: function() {
					return this.templateType == a.NODE
				}
			})], e.prototype, "tmpNode", void 0),
			r([p({
				type: cc.Prefab,
				tooltip: !1,
				visible: function() {
					return this.templateType == a.PREFAB
				}
			})], e.prototype, "tmpPrefab", void 0),
			r([p()], e.prototype, "_slideMode", void 0),
			r([p({
				type: cc.Enum(s),
				tooltip: !1
			})], e.prototype, "slideMode", null),
			r([p({
				type: cc.Float,
				range: [0, 1, .1],
				tooltip: !1,
				slide: !0,
				visible: function() {
					return this._slideMode == s.PAGE
				}
			})], e.prototype, "pageDistance", void 0),
			r([p({
				type: cc.Component.EventHandler,
				tooltip: !1,
				visible: function() {
					return this._slideMode == s.PAGE
				}
			})], e.prototype, "pageChangeEvent", void 0),
			r([p()], e.prototype, "_virtual", void 0),
			r([p({
				type: cc.Boolean,
				tooltip: !1
			})], e.prototype, "virtual", null),
			r([p({
				tooltip: !1,
				visible: function() {
					var t = this.slideMode == s.NORMAL;
					return t || (this.cyclic = !1),
					t
				}
			})], e.prototype, "cyclic", void 0),
			r([p({
				tooltip: !1,
				visible: function() {
					return this.virtual
				}
			})], e.prototype, "lackCenter", void 0),
			r([p({
				tooltip: !1,
				visible: function() {
					var t = this.virtual && !this.lackCenter;
					return t || (this.lackSlide = !1),
					t
				}
			})], e.prototype, "lackSlide", void 0),
			r([p({
				type: cc.Integer
			})], e.prototype, "_updateRate", void 0),
			r([p({
				type: cc.Integer,
				range: [0, 6, 1],
				tooltip: !1,
				slide: !0
			})], e.prototype, "updateRate", null),
			r([p({
				type: cc.Integer,
				range: [0, 12, 1],
				tooltip: !1,
				slide: !0
			})], e.prototype, "frameByFrameRenderNum", void 0),
			r([p({
				type: cc.Component.EventHandler,
				tooltip: !1
			})], e.prototype, "renderEvent", void 0),
			r([p({
				type: cc.Enum(c),
				tooltip: !1
			})], e.prototype, "selectedMode", void 0),
			r([p({
				tooltip: !1,
				visible: function() {
					return this.selectedMode == c.SINGLE
				}
			})], e.prototype, "repeatEventSingle", void 0),
			r([p({
				type: cc.Component.EventHandler,
				tooltip: !1,
				visible: function() {
					return this.selectedMode > c.NONE
				}
			})], e.prototype, "selectedEvent", void 0),
			r([p({
				serializable: !1
			})], e.prototype, "_numItems", void 0),
			r([u, h(), d("\u81ea\u5b9a\u4e49\u7ec4\u4ef6/List"), _(cc.ScrollView), f( - 5e3)], e)
		} (cc.Component);
		o.
	default = v,
		cc._RF.pop()
	},
	{
		"./ListItem": "ListItem"
	}],
	Loading: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "8c62cWP5CFDwppIpQKdoJV4", "Loading");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../../Define/EventId"),
		s = t("../../Framework/Event/EventMgr"),
		c = cc._decorator,
		l = c.ccclass,
		u = c.property,
		p = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.progress = null,
				e.labProgress = null,
				e
			}
			return n(e, t),
			e.prototype.onLoad = function() {},
			e.prototype.start = function() {},
			e.prototype.onEnable = function() {
				s.EVENT.on(a.EventId.ON_UPDATE_LOADING_TTP, this.onUpdateTip, this),
				s.EVENT.on(a.EventId.ON_UPDATE_LOADING_PROGRESS, this.onUpdateProgress, this)
			},
			e.prototype.onDisable = function() {
				s.EVENT.off(a.EventId.ON_UPDATE_LOADING_TTP, this.onUpdateTip, this),
				s.EVENT.off(a.EventId.ON_UPDATE_LOADING_PROGRESS, this.onUpdateProgress, this)
			},
			e.prototype.onUpdateTip = function() {},
			e.prototype.onUpdateProgress = function(t, e) {
				var o = t / e;
				this.progress.progress = o,
				this.labProgress.string = Math.round(100 * o) + "%"
			},
			r([u(cc.ProgressBar)], e.prototype, "progress", void 0),
			r([u(cc.Label)], e.prototype, "labProgress", void 0),
			r([l], e)
		} (cc.Component);
		o.
	default = p,
		cc._RF.pop()
	},
	{
		"../../Define/EventId": "EventId",
		"../../Framework/Event/EventMgr": "EventMgr"
	}],
	LocalKey: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "c1ba8+5yQRAmrGXr1KLNCy9", "LocalKey"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.LocalKey = void 0;
		var i = function() {
			function t() {}
			return t.SoundVolum = "LocalKey.SoundVolum",
			t.TestLocalAccount = "LocalKey.TestLocalAccount",
			t.GuideStep = "LocalKey.GuideStep",
			t.AudioVolumeMusic = "LocalKey.AudioVolumeMusic",
			t.AudioVolumeMusicMute = "LocalKey.AudioVolumeMute",
			t.AudioVolumeEffect = "LocalKey.AudioVolumeEffect",
			t.AudioVolumeEffectMute = "LocalKey.AudioVolumeEffectMute",
			t
		} ();
		o.LocalKey = i,
		cc._RF.pop()
	},
	{}],
	LocalStorageMgr: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "04b82MsYBBMHqMcStr1U61V", "LocalStorageMgr"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.LocalStorageMgr = void 0;
		var i = function() {
			function t() {}
			return t.setHashID = function(e) {
				t.hashID = e,
				t.setItem("hashID", e, !0)
			},
			t.getHashID = function() {
				return t.getItem("hashID", !0)
			},
			t.setItem = function(e, o, i) {
				void 0 === i && (i = !1),
				i ? cc.sys.localStorage.setItem(e, o) : cc.sys.localStorage.setItem(t.hashID + "_" + e, o)
			},
			t.getItem = function(e, o) {
				return void 0 === o && (o = !1),
				o ? cc.sys.localStorage.getItem(e) : cc.sys.localStorage.getItem(t.hashID + "_" + e)
			},
			t.removeItem = function(e, o) {
				void 0 === o && (o = !1),
				o ? cc.sys.localStorage.removeItem(e) : cc.sys.localStorage.removeItem(t.hashID + "_" + e)
			},
			t.clearAll = function() {
				cc.sys.localStorage.clear()
			},
			t
		} ();
		o.LocalStorageMgr = i,
		cc._RF.pop()
	},
	{}],
	LockScroll: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "ec13aBagy9C1ry9OextoOve", "LockScroll");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../Define/EventId"),
		s = t("../Framework/Event/EventMgr"),
		c = cc._decorator,
		l = c.ccclass,
		u = (c.property,
		function(t) {
			function e() {
				return null !== t && t.apply(this, arguments) || this
			}
			return n(e, t),
			e.prototype.onLoad = function() {
				this.node.on(cc.Node.EventType.TOUCH_START, this.EmitLockScroll.bind(this), this),
				this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.EmitUnLockScroll.bind(this), this),
				this.node.on(cc.Node.EventType.TOUCH_END, this.EmitUnLockScroll.bind(this), this)
			},
			e.prototype.EmitLockScroll = function() {
				s.EVENT.emit(a.EventId.ON_LOCK_SCROLL, !0)
			},
			e.prototype.EmitUnLockScroll = function() {},
			r([l], e)
		} (cc.Component));
		o.
	default = u,
		cc._RF.pop()
	},
	{
		"../Define/EventId": "EventId",
		"../Framework/Event/EventMgr": "EventMgr"
	}],
	LogUtil: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "ecccd1uvWBKsaPUKosdi9y1", "LogUtil"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.LogUtil = void 0;
		var i = t("../../Define/StaticData"),
		n = function() {
			function t() {}
			return t.logInfo = function(t) {
				for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
				i.StaticData.LOG_OPEN && ("string" == typeof t ? (t = "%c" + t, cc.log(t, "color:#0f0;")) : cc.log(t, e))
			},
			t.logWarn = function(t) {
				for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
				i.StaticData.LOG_OPEN && ("string" == typeof t ? (t = "%c" + t, cc.log(t, "color:#FFD700;")) : cc.log(t, e))
			},
			t.logError = function(t) {
				for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
				i.StaticData.LOG_OPEN && ("string" == typeof t ? (t = "%c" + t, cc.log(t, "color:#FF3030;")) : cc.log(t, e))
			},
			t
		} ();
		o.LogUtil = n,
		cc._RF.pop()
	},
	{
		"../../Define/StaticData": "StaticData"
	}],
	MD5: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "b4b35+TNQVGqItiIosa/WeB", "MD5"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var i = function() {
			function t() {
				this.hexcase = 0,
				this.b64pad = ""
			}
			return t.prototype.hex_md5 = function(t) {
				return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(t)))
			},
			t.prototype.b64_md5 = function(t) {
				return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(t)))
			},
			t.prototype.any_md5 = function(t, e) {
				return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(t)), e)
			},
			t.prototype.hex_hmac_md5 = function(t, e) {
				return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)))
			},
			t.prototype.b64_hmac_md5 = function(t, e) {
				return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)))
			},
			t.prototype.any_hmac_md5 = function(t, e, o) {
				return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)), o)
			},
			t.prototype.md5_vm_test = function() {
				return "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc").toLowerCase()
			},
			t.prototype.rstr_md5 = function(t) {
				return this.binl2rstr(this.binl_md5(this.rstr2binl(t), 8 * t.length))
			},
			t.prototype.rstr_hmac_md5 = function(t, e) {
				var o = this.rstr2binl(t);
				o.length > 16 && (o = this.binl_md5(o, 8 * t.length));
				for (var i = Array(16), n = Array(16), r = 0; r < 16; r++) i[r] = 909522486 ^ o[r],
				n[r] = 1549556828 ^ o[r];
				var a = this.binl_md5(i.concat(this.rstr2binl(e)), 512 + 8 * e.length);
				return this.binl2rstr(this.binl_md5(n.concat(a), 640))
			},
			t.prototype.rstr2hex = function(t) {
				try {
					this.hexcase
				} catch(r) {
					this.hexcase = 0
				}
				for (var e, o = this.hexcase ? "0123456789ABCDEF": "0123456789abcdef", i = "", n = 0; n < t.length; n++) e = t.charCodeAt(n),
				i += o.charAt(e >>> 4 & 15) + o.charAt(15 & e);
				return i
			},
			t.prototype.rstr2b64 = function(t) {
				try {
					this.b64pad
				} catch(a) {
					this.b64pad = ""
				}
				for (var e = "",
				o = t.length,
				i = 0; i < o; i += 3) for (var n = t.charCodeAt(i) << 16 | (i + 1 < o ? t.charCodeAt(i + 1) << 8 : 0) | (i + 2 < o ? t.charCodeAt(i + 2) : 0), r = 0; r < 4; r++) 8 * i + 6 * r > 8 * t.length ? e += this.b64pad: e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n >>> 6 * (3 - r) & 63);
				return e
			},
			t.prototype.rstr2any = function(t, e) {
				var o, i, n, r, a, s = e.length,
				c = Array(Math.ceil(t.length / 2));
				for (o = 0; o < c.length; o++) c[o] = t.charCodeAt(2 * o) << 8 | t.charCodeAt(2 * o + 1);
				var l = Math.ceil(8 * t.length / (Math.log(e.length) / Math.log(2))),
				u = Array(l);
				for (i = 0; i < l; i++) {
					for (a = Array(), r = 0, o = 0; o < c.length; o++) r = (r << 16) + c[o],
					r -= (n = Math.floor(r / s)) * s,
					(a.length > 0 || n > 0) && (a[a.length] = n);
					u[i] = r,
					c = a
				}
				var p = "";
				for (o = u.length - 1; o >= 0; o--) p += e.charAt(u[o]);
				return p
			},
			t.prototype.str2rstr_utf8 = function(t) {
				for (var e, o, i = "",
				n = -1; ++n < t.length;) e = t.charCodeAt(n),
				o = n + 1 < t.length ? t.charCodeAt(n + 1) : 0,
				55296 <= e && e <= 56319 && 56320 <= o && o <= 57343 && (e = 65536 + ((1023 & e) << 10) + (1023 & o), n++),
				e <= 127 ? i += String.fromCharCode(e) : e <= 2047 ? i += String.fromCharCode(192 | e >>> 6 & 31, 128 | 63 & e) : e <= 65535 ? i += String.fromCharCode(224 | e >>> 12 & 15, 128 | e >>> 6 & 63, 128 | 63 & e) : e <= 2097151 && (i += String.fromCharCode(240 | e >>> 18 & 7, 128 | e >>> 12 & 63, 128 | e >>> 6 & 63, 128 | 63 & e));
				return i
			},
			t.prototype.str2rstr_utf16le = function(t) {
				for (var e = "",
				o = 0; o < t.length; o++) e += String.fromCharCode(255 & t.charCodeAt(o), t.charCodeAt(o) >>> 8 & 255);
				return e
			},
			t.prototype.str2rstr_utf16be = function(t) {
				for (var e = "",
				o = 0; o < t.length; o++) e += String.fromCharCode(t.charCodeAt(o) >>> 8 & 255, 255 & t.charCodeAt(o));
				return e
			},
			t.prototype.rstr2binl = function(t) {
				for (var e = Array(t.length >> 2), o = 0; o < e.length; o++) e[o] = 0;
				for (o = 0; o < 8 * t.length; o += 8) e[o >> 5] |= (255 & t.charCodeAt(o / 8)) << o % 32;
				return e
			},
			t.prototype.binl2rstr = function(t) {
				for (var e = "",
				o = 0; o < 32 * t.length; o += 8) e += String.fromCharCode(t[o >> 5] >>> o % 32 & 255);
				return e
			},
			t.prototype.binl_md5 = function(t, e) {
				t[e >> 5] |= 128 << e % 32,
				t[14 + (e + 64 >>> 9 << 4)] = e;
				for (var o = 1732584193,
				i = -271733879,
				n = -1732584194,
				r = 271733878,
				a = 0; a < t.length; a += 16) {
					var s = o,
					c = i,
					l = n,
					u = r;
					o = this.md5_ff(o, i, n, r, t[a + 0], 7, -680876936),
					r = this.md5_ff(r, o, i, n, t[a + 1], 12, -389564586),
					n = this.md5_ff(n, r, o, i, t[a + 2], 17, 606105819),
					i = this.md5_ff(i, n, r, o, t[a + 3], 22, -1044525330),
					o = this.md5_ff(o, i, n, r, t[a + 4], 7, -176418897),
					r = this.md5_ff(r, o, i, n, t[a + 5], 12, 1200080426),
					n = this.md5_ff(n, r, o, i, t[a + 6], 17, -1473231341),
					i = this.md5_ff(i, n, r, o, t[a + 7], 22, -45705983),
					o = this.md5_ff(o, i, n, r, t[a + 8], 7, 1770035416),
					r = this.md5_ff(r, o, i, n, t[a + 9], 12, -1958414417),
					n = this.md5_ff(n, r, o, i, t[a + 10], 17, -42063),
					i = this.md5_ff(i, n, r, o, t[a + 11], 22, -1990404162),
					o = this.md5_ff(o, i, n, r, t[a + 12], 7, 1804603682),
					r = this.md5_ff(r, o, i, n, t[a + 13], 12, -40341101),
					n = this.md5_ff(n, r, o, i, t[a + 14], 17, -1502002290),
					i = this.md5_ff(i, n, r, o, t[a + 15], 22, 1236535329),
					o = this.md5_gg(o, i, n, r, t[a + 1], 5, -165796510),
					r = this.md5_gg(r, o, i, n, t[a + 6], 9, -1069501632),
					n = this.md5_gg(n, r, o, i, t[a + 11], 14, 643717713),
					i = this.md5_gg(i, n, r, o, t[a + 0], 20, -373897302),
					o = this.md5_gg(o, i, n, r, t[a + 5], 5, -701558691),
					r = this.md5_gg(r, o, i, n, t[a + 10], 9, 38016083),
					n = this.md5_gg(n, r, o, i, t[a + 15], 14, -660478335),
					i = this.md5_gg(i, n, r, o, t[a + 4], 20, -405537848),
					o = this.md5_gg(o, i, n, r, t[a + 9], 5, 568446438),
					r = this.md5_gg(r, o, i, n, t[a + 14], 9, -1019803690),
					n = this.md5_gg(n, r, o, i, t[a + 3], 14, -187363961),
					i = this.md5_gg(i, n, r, o, t[a + 8], 20, 1163531501),
					o = this.md5_gg(o, i, n, r, t[a + 13], 5, -1444681467),
					r = this.md5_gg(r, o, i, n, t[a + 2], 9, -51403784),
					n = this.md5_gg(n, r, o, i, t[a + 7], 14, 1735328473),
					i = this.md5_gg(i, n, r, o, t[a + 12], 20, -1926607734),
					o = this.md5_hh(o, i, n, r, t[a + 5], 4, -378558),
					r = this.md5_hh(r, o, i, n, t[a + 8], 11, -2022574463),
					n = this.md5_hh(n, r, o, i, t[a + 11], 16, 1839030562),
					i = this.md5_hh(i, n, r, o, t[a + 14], 23, -35309556),
					o = this.md5_hh(o, i, n, r, t[a + 1], 4, -1530992060),
					r = this.md5_hh(r, o, i, n, t[a + 4], 11, 1272893353),
					n = this.md5_hh(n, r, o, i, t[a + 7], 16, -155497632),
					i = this.md5_hh(i, n, r, o, t[a + 10], 23, -1094730640),
					o = this.md5_hh(o, i, n, r, t[a + 13], 4, 681279174),
					r = this.md5_hh(r, o, i, n, t[a + 0], 11, -358537222),
					n = this.md5_hh(n, r, o, i, t[a + 3], 16, -722521979),
					i = this.md5_hh(i, n, r, o, t[a + 6], 23, 76029189),
					o = this.md5_hh(o, i, n, r, t[a + 9], 4, -640364487),
					r = this.md5_hh(r, o, i, n, t[a + 12], 11, -421815835),
					n = this.md5_hh(n, r, o, i, t[a + 15], 16, 530742520),
					i = this.md5_hh(i, n, r, o, t[a + 2], 23, -995338651),
					o = this.md5_ii(o, i, n, r, t[a + 0], 6, -198630844),
					r = this.md5_ii(r, o, i, n, t[a + 7], 10, 1126891415),
					n = this.md5_ii(n, r, o, i, t[a + 14], 15, -1416354905),
					i = this.md5_ii(i, n, r, o, t[a + 5], 21, -57434055),
					o = this.md5_ii(o, i, n, r, t[a + 12], 6, 1700485571),
					r = this.md5_ii(r, o, i, n, t[a + 3], 10, -1894986606),
					n = this.md5_ii(n, r, o, i, t[a + 10], 15, -1051523),
					i = this.md5_ii(i, n, r, o, t[a + 1], 21, -2054922799),
					o = this.md5_ii(o, i, n, r, t[a + 8], 6, 1873313359),
					r = this.md5_ii(r, o, i, n, t[a + 15], 10, -30611744),
					n = this.md5_ii(n, r, o, i, t[a + 6], 15, -1560198380),
					i = this.md5_ii(i, n, r, o, t[a + 13], 21, 1309151649),
					o = this.md5_ii(o, i, n, r, t[a + 4], 6, -145523070),
					r = this.md5_ii(r, o, i, n, t[a + 11], 10, -1120210379),
					n = this.md5_ii(n, r, o, i, t[a + 2], 15, 718787259),
					i = this.md5_ii(i, n, r, o, t[a + 9], 21, -343485551),
					o = this.safe_add(o, s),
					i = this.safe_add(i, c),
					n = this.safe_add(n, l),
					r = this.safe_add(r, u)
				}
				return [o, i, n, r]
			},
			t.prototype.md5_cmn = function(t, e, o, i, n, r) {
				return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(e, t), this.safe_add(i, r)), n), o)
			},
			t.prototype.md5_ff = function(t, e, o, i, n, r, a) {
				return this.md5_cmn(e & o | ~e & i, t, e, n, r, a)
			},
			t.prototype.md5_gg = function(t, e, o, i, n, r, a) {
				return this.md5_cmn(e & i | o & ~i, t, e, n, r, a)
			},
			t.prototype.md5_hh = function(t, e, o, i, n, r, a) {
				return this.md5_cmn(e ^ o ^ i, t, e, n, r, a)
			},
			t.prototype.md5_ii = function(t, e, o, i, n, r, a) {
				return this.md5_cmn(o ^ (e | ~i), t, e, n, r, a)
			},
			t.prototype.safe_add = function(t, e) {
				var o = (65535 & t) + (65535 & e);
				return (t >> 16) + (e >> 16) + (o >> 16) << 16 | 65535 & o
			},
			t.prototype.bit_rol = function(t, e) {
				return t << e | t >>> 32 - e
			},
			t
		} ();
		o.
	default = i,
		cc._RF.pop()
	},
	{}],
	MainModel: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "85bc7aQjG5PtbRkzsgb5Eff", "MainModel");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
		s = a.ccclass,
		c = (a.property,
		function(t) {
			function e() {
				return null !== t && t.apply(this, arguments) || this
			}
			return n(e, t),
			e.prototype.start = function() {},
			e.prototype.update = function() {},
			r([s], e)
		} (cc.Component));
		o.
	default = c,
		cc._RF.pop()
	},
	{}],
	MainScrollFit: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "6f71425so9GfqjXgG1X8Tw9", "MainScrollFit");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../../../Define/EventId"),
		s = t("../../../Define/StaticData"),
		c = t("../../../Framework/Event/EventMgr"),
		l = t("../../../Framework/UI/UIMgr"),
		u = cc._decorator,
		p = u.ccclass,
		h = u.property,
		d = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.viewNode = null,
				e.pageView = null,
				e.isLock = !1,
				e
			}
			return n(e, t),
			e.prototype.onLoad = function() {
				this.pageView = this.node.getComponent(cc.PageView),
				this.fitScreen(),
				this.pageIndex = 0
			},
			e.prototype.fitScreen = function() {
				var t = this.pageView.getPages(),
				e = l.
			default.inst.getCanvasSize(),
				o = e.width / e.height;
				if (console.log("rate:" + o), !(o >= s.StaticData.sizeRate)) {
					for (var i = 0; i < t.length; i++) t[i].setContentSize(e);
					this.fitSize(e),
					this.pageView.scrollToTop(.1)
				}
			},
			e.prototype.fitSize = function(t) {
				this.node.setContentSize(t),
				this.viewNode.setContentSize(t)
			},
			e.prototype.scrollBegan = function() {
				this.pageIndex = this.pageView.getCurrentPageIndex()
			},
			e.prototype.scrollEnd = function() {
				var t = this.pageView.getCurrentPageIndex();
				t != this.pageIndex && 0 == t && c.EVENT.emit(a.EventId.ON_PLAYTITLE_ANIM),
				this.pageIndex = t
			},
			r([h(cc.Node)], e.prototype, "viewNode", void 0),
			r([p], e)
		} (cc.Component);
		o.
	default = d,
		cc._RF.pop()
	},
	{
		"../../../Define/EventId": "EventId",
		"../../../Define/StaticData": "StaticData",
		"../../../Framework/Event/EventMgr": "EventMgr",
		"../../../Framework/UI/UIMgr": "UIMgr"
	}],
	Main: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "66067uvIQxACIqNoYtJVKYw", "Main");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		},
		a = this && this.__awaiter ||
		function(t, e, o, i) {
			return new(o || (o = Promise))(function(n, r) {
				function a(t) {
					try {
						c(i.next(t))
					} catch(e) {
						r(e)
					}
				}
				function s(t) {
					try {
						c(i.
						throw (t))
					} catch(e) {
						r(e)
					}
				}
				function c(t) {
					var e;
					t.done ? n(t.value) : (e = t.value, e instanceof o ? e: new o(function(t) {
						t(e)
					})).then(a, s)
				}
				c((i = i.apply(t, e || [])).next())
			})
		},
		s = this && this.__generator ||
		function(t, e) {
			var o, i, n, r, a = {
				label: 0,
				sent: function() {
					if (1 & n[0]) throw n[1];
					return n[1]
				},
				trys: [],
				ops: []
			};
			return r = {
				next: s(0),
				throw: s(1),
				return: s(2)
			},
			"function" == typeof Symbol && (r[Symbol.iterator] = function() {
				return this
			}),
			r;
			function s(t) {
				return function(e) {
					return c([t, e])
				}
			}
			function c(r) {
				if (o) throw new TypeError("Generator is already executing.");
				for (; a;) try {
					if (o = 1, i && (n = 2 & r[0] ? i.
					return: r[0] ? i.
					throw || ((n = i.
					return) && n.call(i), 0) : i.next) && !(n = n.call(i, r[1])).done) return n;
					switch (i = 0, n && (r = [2 & r[0], n.value]), r[0]) {
					case 0:
					case 1:
						n = r;
						break;
					case 4:
						return a.label++,
						{
							value: r[1],
							done: !1
						};
					case 5:
						a.label++,
						i = r[1],
						r = [0];
						continue;
					case 7:
						r = a.ops.pop(),
						a.trys.pop();
						continue;
					default:
						if (! (n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === r[0] || 2 === r[0])) {
							a = 0;
							continue
						}
						if (3 === r[0] && (!n || r[1] > n[0] && r[1] < n[3])) {
							a.label = r[1];
							break
						}
						if (6 === r[0] && a.label < n[1]) {
							a.label = n[1],
							n = r;
							break
						}
						if (n && a.label < n[2]) {
							a.label = n[2],
							a.ops.push(r);
							break
						}
						n[2] && a.ops.pop(),
						a.trys.pop();
						continue
					}
					r = e.call(t, a)
				} catch(s) {
					r = [6, s],
					i = 0
				} finally {
					o = n = 0
				}
				if (5 & r[0]) throw r[1];
				return {
					value: r[0] ? r[1] : void 0,
					done: !0
				}
			}
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = t("../../Controller/BattleCtrl"),
		l = t("../../Controller/RecommendCtrl"),
		u = t("../../Controller/TreasureCtrl"),
		p = t("../../Define/Define"),
		h = t("../../Define/EventId"),
		d = t("../../Define/StaticData"),
		f = t("../../Define/UIDefs"),
		_ = t("../../Framework/Event/EventMgr"),
		y = t("../../Framework/Res/ResLoader"),
		v = t("../../Framework/Scene/SceneBase"),
		m = t("../../Framework/UI/UIMgr"),
		g = t("../../Model/UserModel"),
		b = t("../../Platforms/BurierdPoint"),
		w = t("../../Platforms/Platform"),
		I = t("../UI/Main/BattleItemMes"),
		T = cc._decorator,
		P = T.ccclass,
		S = T.property,
		R = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.sprAvatar = null,
				e.labGrade = null,
				e.labWinNum = null,
				e.labWorldRank = null,
				e.pageViewMain = null,
				e.mainCharacter = null,
				e.mainBtnNode = null,
				e.menuNode = null,
				e.nodeBattleRed = null,
				e.jumpNode = null,
				e.titleAnim = null,
				e.nodeDog = null,
				e.spDog = null,
				e.titleNode = null,
				e.handNode = null,
				e.handNode2 = null,
				e.nodeBattleBlue = null,
				e.labTime = null,
				e.sprActivity = null,
				e.gameAnim = null,
				e.defaultAvatar = null,
				e.activityUrl = null,
				e
			}
			return n(e, t),
			e.prototype.onLoad = function() {
				_.EVENT.on(h.EventId.ON_UPDATE_USERINFO, this.onUpdateTopMes, this),
				_.EVENT.on(h.EventId.ON_UPDATE_SPRITE_URL, this.onUpdateSprByUrl, this),
				_.EVENT.on(h.EventId.ON_UPDATE_SPRITE_AVATAR, this.onUpdateAvatarByUrl, this),
				_.EVENT.on(h.EventId.ON_UPDATE_SPRITE, this.onUpdateSpr, this),
				_.EVENT.on(h.EventId.ON_START_BATTLE, this.ChangeBattleScene, this),
				_.EVENT.on(h.EventId.ON_PLAYE_BATTLEANIM, this.playBattleAnim, this),
				_.EVENT.on(h.EventId.ON_PLAYTITLE_ANIM, this.playTitleAnim, this),
				_.EVENT.on(h.EventId.ON_MAINSCROLL_TOP, this.scrollTop, this),
				_.EVENT.on(h.EventId.ON_UPDATE_TREASURETIP, this.updateTreasureTip, this),
				_.EVENT.on(h.EventId.ON_CLICK_FRIEND_PK, this.playDogSpine, this),
				_.EVENT.on(h.EventId.ON_UPDATE_ALLPKTIME, this.updateAllPkTime, this)
			},
			e.prototype.start = function() {
				this.initData(),
				this.requestFriend(),
				this.updateTreasureTip(u.treasureCtrl.isUnReceived),
				this.updateAllPkTime()
			},
			e.prototype.initTime = function() {
				var t = d.StaticData.startTime.getFullYear() + "\u5e74" + (d.StaticData.startTime.getMonth() + 1) + "\u6708" + d.StaticData.startTime.getDate() + "\u65e5",
				e = d.StaticData.endTime.getFullYear() + "\u5e74" + (d.StaticData.endTime.getMonth() + 1) + "\u6708" + d.StaticData.endTime.getDate() + "\u65e5";
				this.labTime.string = t + "\u2014\u2014" + e
			},
			e.prototype.initData = function() {
				this.onUpdateTopMes(g.userModel.userInfo, !0)
			},
			e.prototype.requestFriend = function() {
				return a(this, void 0, void 0,
				function() {
					var t, e;
					return s(this,
					function(o) {
						switch (o.label) {
						case 0:
							switch (t = w.
						default.urlParam, e = d.StaticData.isFirst, w.
						default.flag) {
							case p.SeasonState.aheadAward:
								return [3, 1];
							case p.SeasonState.run:
								return [3, 2];
							case p.SeasonState.afterAward:
								return [3, 9]
							}
							return [3, 10];
						case 1:
							return m.
						default.inst.open(f.UIType.Announcement),
							[3, 10];
						case 2:
							return e ? t && t.friendPin ? [3, 3] : (m.
						default.inst.open(f.UIType.Guide), [3, 5]) : [3, 6];
						case 3:
							return [4, c.battleCtrl.requestPkByPin(t.friendPin)];
						case 4:
							o.sent(),
							o.label = 5;
						case 5:
							return [3, 8];
						case 6:
							return t && t.friendPin ? [4, c.battleCtrl.requestPkByPin(t.friendPin)] : [3, 8];
						case 7:
							o.sent(),
							o.label = 8;
						case 8:
							return [3, 10];
						case 9:
							return m.
						default.inst.open(f.UIType.AwardRank),
							[3, 10];
						case 10:
							return [2]
						}
					})
				})
			},
			e.prototype.onUpdateTopMes = function(t, e) {
				void 0 === e && (e = !1),
				this.labGrade.string = t.getGradeNum(),
				this.labWinNum.string = t.getwinNum(),
				this.labWorldRank.string = t.getRankNum(),
				e && _.EVENT.emit(h.EventId.ON_UPDATE_SPRITE_AVATAR, this.sprAvatar, t.imgUrl)
			},
			e.prototype.onUpdateSpr = function(t, e) {
				t.spriteFrame = e
			},
			e.prototype.onUpdateSprByUrl = function(t, e, o) {
				void 0 === o && (o = null),
				!e || e.length <= 0 ? t.spriteFrame = o: y.resLoader.loadRemoteRes(e,
				function(e, i) {
					e ? t.spriteFrame = o: _.EVENT.emit(h.EventId.ON_UPDATE_SPRITE, t, new cc.SpriteFrame(i))
				})
			},
			e.prototype.onUpdateAvatarByUrl = function(t, e) {
				this.onUpdateSprByUrl(t, e, this.defaultAvatar)
			},
			e.prototype.onGradeRuleClick = function() {
				m.
			default.inst.open(f.UIType.GradeRule),
				b.buriedPoint.sendEvent(p.TaEventName.btnClick, "\u4eac\u4eab\u503c\u5206\u6570", p.TaView.main)
			},
			e.prototype.onRuleClick = function() {
				m.
			default.inst.open(f.UIType.Rule),
				b.buriedPoint.sendEvent(p.TaEventName.btnClick, "\u89c4\u5219", p.TaView.main)
			},
			e.prototype.onJumpClick = function() {
				_.EVENT.emit(h.EventId.ON_JUMP_BATTLEANIM)
			},
			e.prototype.updateBattleMes = function(t, e) {
				this.nodeBattleRed.init(t),
				this.nodeBattleBlue.init(e)
			},
			e.prototype.ChangeBattleScene = function(t) {
				void 0 === t && (t = !0),
				this.nodeBattleBlue.node.active = this.nodeBattleRed.node.active = !1,
				this.mainBtnNode.active = !t,
				this.mainCharacter && (this.mainCharacter.active = !t),
				this.menuNode.active = !t,
				this.jumpNode.active = t,
				this.titleNode.active = !t
			},
			e.prototype.onActivityClick = function() {
				console.log("\u5206\u4eab\u6d3b\u52a8"),
				w.
			default.openUrl(w.
			default.adUrl),
				b.buriedPoint.sendEvent(p.TaEventName.btnClick, "banner\u5e7f\u544a\u70b9\u51fb", p.TaView.main)
			},
			e.prototype.requestActivity = function() {
				return a(this, void 0, void 0,
				function() {
					var t;
					return s(this,
					function(e) {
						switch (e.label) {
						case 0:
							return [4, l.recommendCtrl.getActivityData()];
						case 1:
							return t = e.sent(),
							w.
						default.adUrl = t.appUrl ? t.appUrl: t.h5Url,
							_.EVENT.emit(h.EventId.ON_UPDATE_SPRITE_URL, this.sprActivity, t.adImgUrl),
							[2]
						}
					})
				})
			},
			e.prototype.playBattleAnim = function(t) {
				void 0 === t && (t = !0),
				t ? this.gameAnim.play("close") : this.gameAnim.setCurrentTime(0, "close")
			},
			e.prototype.playTitleAnim = function() {
				this.titleAnim
			},
			e.prototype.scrollTop = function() {
				this.pageViewMain.stopAutoScroll(),
				this.pageViewMain.setCurrentPageIndex(0)
			},
			e.prototype.updateTreasureTip = function(t) {
				this.handNode.active = t,
				this.handNode2.active = t
			},
			e.prototype.playDogSpine = function() {
				this.spDog.setAnimation(1, "2", !1),
				this.spDog.addAnimation(1, "1", !0)
			},
			e.prototype.updateAllPkTime = function(t) {
				void 0 === t && (t = 1e3)
			},
			r([S(cc.Sprite)], e.prototype, "sprAvatar", void 0),
			r([S(cc.Label)], e.prototype, "labGrade", void 0),
			r([S(cc.Label)], e.prototype, "labWinNum", void 0),
			r([S(cc.Label)], e.prototype, "labWorldRank", void 0),
			r([S(cc.PageView)], e.prototype, "pageViewMain", void 0),
			r([S(cc.Node)], e.prototype, "mainCharacter", void 0),
			r([S(cc.Node)], e.prototype, "mainBtnNode", void 0),
			r([S(cc.Node)], e.prototype, "menuNode", void 0),
			r([S(I.
		default)], e.prototype, "nodeBattleRed", void 0),
			r([S(cc.Node)], e.prototype, "jumpNode", void 0),
			r([S(sp.Skeleton)], e.prototype, "titleAnim", void 0),
			r([S({
				displayName: "\u8d85\u4eba\u72d7\u7684\u8282\u70b9",
				type: cc.Node
			})], e.prototype, "nodeDog", void 0),
			r([S({
				displayName: "\u8d85\u4eba\u72d7\u7684spine\u52a8\u753b",
				type: sp.Skeleton
			})], e.prototype, "spDog", void 0),
			r([S(cc.Node)], e.prototype, "titleNode", void 0),
			r([S(cc.Node)], e.prototype, "handNode", void 0),
			r([S(cc.Node)], e.prototype, "handNode2", void 0),
			r([S(I.
		default)], e.prototype, "nodeBattleBlue", void 0),
			r([S(cc.Label)], e.prototype, "labTime", void 0),
			r([S(cc.Sprite)], e.prototype, "sprActivity", void 0),
			r([S(cc.Animation)], e.prototype, "gameAnim", void 0),
			r([S(cc.SpriteFrame)], e.prototype, "defaultAvatar", void 0),
			r([P], e)
		} (v.
	default);
		o.
	default = R,
		cc._RF.pop()
	},
	{
		"../../Controller/BattleCtrl": "BattleCtrl",
		"../../Controller/RecommendCtrl": "RecommendCtrl",
		"../../Controller/TreasureCtrl": "TreasureCtrl",
		"../../Define/Define": "Define",
		"../../Define/EventId": "EventId",
		"../../Define/StaticData": "StaticData",
		"../../Define/UIDefs": "UIDefs",
		"../../Framework/Event/EventMgr": "EventMgr",
		"../../Framework/Res/ResLoader": "ResLoader",
		"../../Framework/Scene/SceneBase": "SceneBase",
		"../../Framework/UI/UIMgr": "UIMgr",
		"../../Model/UserModel": "UserModel",
		"../../Platforms/BurierdPoint": "BurierdPoint",
		"../../Platforms/Platform": "Platform",
		"../UI/Main/BattleItemMes": "BattleItemMes"
	}],
	Menu: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "46ef8lya9RBwKwf0V5qlxKq", "Menu");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../../../Define/Define"),
		s = t("../../../Define/EventId"),
		c = t("../../../Define/StaticData"),
		l = t("../../../Define/UIDefs"),
		u = t("../../../Framework/Event/EventMgr"),
		p = t("../../../Framework/UI/UIMgr"),
		h = t("../../../Model/UserModel"),
		d = t("../../../Platforms/BurierdPoint"),
		f = t("../../../Platforms/Platform"),
		_ = cc._decorator,
		y = _.ccclass,
		v = _.property,
		m = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.labPkTime = null,
				e.wxBtns = null,
				e.jdBtns = null,
				e
			}
			return n(e, t),
			e.prototype.onLoad = function() {
				switch (u.EVENT.on(s.EventId.ON_UPDATE_USERINFO, this.updatePkTime.bind(this), this), u.EVENT.on(s.EventId.ON_FRIENDRANK, this.onFriendpkClick.bind(this), this), f.
			default.urlType) {
				case f.UrlType.WeiXin:
					this.wxBtns.active = !0,
					this.jdBtns.active = !1;
					break;
				case f.UrlType.JDApp:
					this.wxBtns.active = !1,
					this.jdBtns.active = !0
				}
			},
			e.prototype.onEnable = function() {
				this.updatePkTime(h.userModel.userInfo)
			},
			e.prototype.onQrpkClick = function() {
				this.checkGameState() && (p.
			default.inst.open(l.UIType.QRShare), console.log("\u626b\u7801\u5206\u4eab"), d.buriedPoint.sendEvent(a.TaEventName.btnClick, "\u626b\u4e00\u626bPK", a.TaView.main))
			},
			e.prototype.onFriendpkClick = function() {
				this.checkGameState(!1) && (p.
			default.inst.open(l.UIType.FriendRank), u.EVENT.emit(s.EventId.ON_CLICK_FRIEND_PK), d.buriedPoint.sendEvent(a.TaEventName.btnClick, "\u597d\u53cbPK", a.TaView.main))
			},
			e.prototype.onRankClick = function() {
				p.
			default.inst.open(l.UIType.WorldRank),
				d.buriedPoint.sendEvent(a.TaEventName.btnClick, "\u6392\u884c\u699c", a.TaView.main)
			},
			e.prototype.onWxpkClick = function() {
				this.checkGameState() && (console.log("\u4eac\u53e3\u4ee4\u5206\u4eab"), f.
			default.commandShare(), d.buriedPoint.sendEvent(a.TaEventName.btnClick, "\u4eac\u53e3\u4ee4PK", a.TaView.main))
			},
			e.prototype.onTreasureClick = function() {
				p.
			default.inst.open(l.UIType.Treasure),
				d.buriedPoint.sendEvent(a.TaEventName.btnClick, "\u9886\u5956\u52b1\u5b9d\u7bb1", a.TaView.main)
			},
			e.prototype.updatePkTime = function(t) {
				var e = t.leftLunchPkNum;
				if (0 == e);
				else if (!e) return void(e = 0);
				this.labPkTime.string = e.toString(),
				d.buriedPoint.sendEvent(a.TaEventName.pageShow, "\u5269\u4f59PK\u6b21\u6570", a.TaView.friend, e.toString())
			},
			e.prototype.checkGameState = function(t) {
				if (void 0 === t && (t = !0), f.
			default.urlType != f.UrlType.JDApp && t) return p.
			default.inst.open(l.UIType.Lack, {
					title: "\u6e38\u620f\u516c\u544a",
					des: "\u201c\u8bf7\u5728\u4eac\u4e1c\u5ba2\u6237\u7aef\u53c2\u4e0e\u6d3b\u52a8\u201d",
					isClose: !0,
					index: 3,
					btnState: !0
				}),
				!1;
				if (c.StaticData.LIMIT_USER) return p.
			default.inst.open(l.UIType.Lack, {
					title: "\u4eac\u4eab\u503c\u4e0d\u8db3",
					des: "\u201c\u60a8\u7684\u4eac\u4eab\u503c\u4e0d\u8db3200 \u8fd8\u5dee\u4e00\u70b9\u54e6",
					isClose: !0,
					index: 0,
					btnState: !0
				}),
				!1;
				switch (f.
			default.flag) {
				case a.SeasonState.aheadAward:
					return p.
				default.inst.open(l.UIType.Announcement),
					!1;
				case a.SeasonState.afterAward:
					return p.
				default.inst.open(l.UIType.Lack, {
						title: "\u6e38\u620f\u516c\u544a",
						des: "\u8d5b\u5b63\u5df2\u7ed3\u675f\uff0c\u8bf7\u67e5\u770b\u6392\u884c\u699c",
						isClose: !0,
						index: 1
					}),
					!1
				}
				return ! 0
			},
			r([v(cc.Label)], e.prototype, "labPkTime", void 0),
			r([v(cc.Node)], e.prototype, "wxBtns", void 0),
			r([v(cc.Node)], e.prototype, "jdBtns", void 0),
			r([y], e)
		} (cc.Component);
		o.
	default = m,
		cc._RF.pop()
	},
	{
		"../../../Define/Define": "Define",
		"../../../Define/EventId": "EventId",
		"../../../Define/StaticData": "StaticData",
		"../../../Define/UIDefs": "UIDefs",
		"../../../Framework/Event/EventMgr": "EventMgr",
		"../../../Framework/UI/UIMgr": "UIMgr",
		"../../../Model/UserModel": "UserModel",
		"../../../Platforms/BurierdPoint": "BurierdPoint",
		"../../../Platforms/Platform": "Platform"
	}],
	MeshPolygonSprite: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "67afc4rFktEb6lNkHHYixu1", "MeshPolygonSprite");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = cc.gfx,
		s = cc._decorator,
		c = s.ccclass,
		l = s.property,
		u = s.executeInEditMode,
		p = s.requireComponent,
		h = s.menu,
		d = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e._offset = cc.v2(0, 0),
				e._spriteFrame = null,
				e._vertexes = [cc.v2(0, 0), cc.v2(0, 100), cc.v2(100, 100), cc.v2(100, 0)],
				e.renderer = null,
				e.mesh = null,
				e._meshCache = {},
				e
			}
			return n(e, t),
			Object.defineProperty(e.prototype, "offset", {
				get: function() {
					return this._offset
				},
				set: function(t) {
					this._offset = t,
					this._updateMesh(),
					this._applyVertexes()
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "spriteFrame", {
				get: function() {
					return this._spriteFrame
				},
				set: function(t) {
					this._spriteFrame = t,
					this._refreshAll()
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "vertexes", {
				get: function() {
					return this._vertexes
				},
				set: function(t) {
					this._vertexes = t,
					this._updateMesh(),
					this._applyVertexes()
				},
				enumerable: !1,
				configurable: !0
			}),
			e.prototype.onLoad = function() {
				this._meshCache = {};
				var t = this.node.getComponent(cc.MeshRenderer) || this.node.addComponent(cc.MeshRenderer);
				t.mesh = null,
				this.renderer = t;
				var e = cc.Material.getBuiltinMaterial("unlit");
				t.setMaterial(0, e)
			},
			e.prototype.onEnable = function() {
				this._refreshAll()
			},
			e.prototype._refreshAll = function() {
				this._updateMesh(),
				this._applySpriteFrame(),
				this._applyVertexes()
			},
			e.prototype._updateMesh = function() {
				var t = this._meshCache[this.vertexes.length];
				t || ((t = new cc.Mesh).init(new a.VertexFormat([{
					name: a.ATTR_POSITION,
					type: a.ATTR_TYPE_FLOAT32,
					num: 2
				},
				{
					name: a.ATTR_UV0,
					type: a.ATTR_TYPE_FLOAT32,
					num: 2
				}]), this.vertexes.length, !0), this._meshCache[this.vertexes.length] = t),
				cc.log(t.nativeUrl),
				this.mesh = t
			},
			e.prototype._lerp = function(t, e, o) {
				return t + o * (e - t)
			},
			e.prototype._applyVertexes = function() {
				var t = this.mesh;
				if (t.setVertices(a.ATTR_POSITION, this.vertexes), this._calculateUV(), this.vertexes.length >= 3) {
					var e = [],
					o = this.vertexes.map(function(t) {
						return {
							x: t.x,
							y: t.y
						}
					}),
					i = new poly2tri.SweepContext(o, {
						cloneArrays: !0
					});
					try {
						i.triangulate(),
						i.getTriangles().forEach(function(t) {
							t.getPoints().forEach(function(t) {
								var i = o.indexOf(t);
								e.push(i)
							})
						})
					} catch(n) {
						cc.error("poly2tri error", n)
					}
					0 === e.length && (cc.log("\u8ba1\u7b97\u9876\u70b9\u7d22\u5f15 \u5931\u8d25"), e.push.apply(e, this.vertexes.map(function(t, e) {
						return e
					}))),
					t.setIndices(e),
					this.renderer.mesh = t
				}
			},
			e.prototype._calculateUV = function() {
				var t = this.mesh;
				if (this.spriteFrame) {
					for (var e = this.spriteFrame.uv,
					o = this.spriteFrame.getTexture(), i = e[0], n = e[6], r = e[3], s = e[5], c = [], l = 0, u = this.vertexes; l < u.length; l++) {
						var p = u[l],
						h = this._lerp(i, n, (p.x + o.width / 2 + this.offset.x) / o.width),
						d = this._lerp(r, s, (p.y + o.height / 2 - this.offset.y) / o.height);
						c.push(cc.v2(h, d))
					}
					t.setVertices(a.ATTR_UV0, c)
				}
			},
			e.prototype._applySpriteFrame = function() {
				if (this.spriteFrame) {
					var t = this.renderer.getMaterial(0),
					e = this.spriteFrame.getTexture();
					t.define("USE_DIFFUSE_TEXTURE", !0),
					t.setProperty("diffuseTexture", e)
				}
			},
			r([l], e.prototype, "_offset", void 0),
			r([l({
				type: cc.Vec2,
				tooltip: "\u4f4d\u7f6e\u504f\u79fb\u91cf"
			})], e.prototype, "offset", null),
			r([l], e.prototype, "_spriteFrame", void 0),
			r([l({
				type: cc.SpriteFrame,
				tooltip: "\u7cbe\u7075\u7684\u7cbe\u7075\u5e27"
			})], e.prototype, "spriteFrame", null),
			r([l], e.prototype, "_vertexes", void 0),
			r([l({
				type: cc.Vec2,
				tooltip: "\u9876\u70b9\u5750\u6807"
			})], e.prototype, "vertexes", null),
			r([c, u, p(cc.MeshRenderer), h("ui-extensions/MeshPolygonSprite")], e)
		} (cc.Component);
		o.
	default = d,
		cc._RF.pop()
	},
	{}],
	NetApi: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "eecd0Kfz/dH0pM81zOsu0zq", "NetApi"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.NetApi = void 0;
		var i = function() {
			function t() {}
			return t.Apis = {
				getUserFriends: "getUserFriends",
				getUserFriendsPage: "getUserFriendsPage",
				getUserPkInfo: "getUserPkInfo",
				getMyLeastInfo: "getMyLeastInfo",
				launchBattle: "launchBattle",
				receiveBattle: "receiveBattle",
				jdFriendship: "jdFriendship",
				getActivityInfo: "getActivityInfo",
				sendBoxReward: "sendBoxReward",
				getBoxRewardInfo: "getBoxRewardInfo",
				getRankInfo: "getRankInfo",
				getMyRankInfo: "getMyRankInfo",
				getFriendRankInfo: "getFriendRankInfo",
				getRankRewardInfo: "getRankRewardInfo",
				getBanner: "getBannerInfo",
				getScore: "getScore",
				checkRisk: "checkRisk",
				firstVerify: "firstVerify",
				getFlowInfo: "getFlowInfo"
			},
			t
		} ();
		o.NetApi = i,
		cc._RF.pop()
	},
	{}],
	NetBase: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "4d631oOBs9EAZqAZp6Bl5yj", "NetBase");
		var i = this && this.__awaiter ||
		function(t, e, o, i) {
			return new(o || (o = Promise))(function(n, r) {
				function a(t) {
					try {
						c(i.next(t))
					} catch(e) {
						r(e)
					}
				}
				function s(t) {
					try {
						c(i.
						throw (t))
					} catch(e) {
						r(e)
					}
				}
				function c(t) {
					var e;
					t.done ? n(t.value) : (e = t.value, e instanceof o ? e: new o(function(t) {
						t(e)
					})).then(a, s)
				}
				c((i = i.apply(t, e || [])).next())
			})
		},
		n = this && this.__generator ||
		function(t, e) {
			var o, i, n, r, a = {
				label: 0,
				sent: function() {
					if (1 & n[0]) throw n[1];
					return n[1]
				},
				trys: [],
				ops: []
			};
			return r = {
				next: s(0),
				throw: s(1),
				return: s(2)
			},
			"function" == typeof Symbol && (r[Symbol.iterator] = function() {
				return this
			}),
			r;
			function s(t) {
				return function(e) {
					return c([t, e])
				}
			}
			function c(r) {
				if (o) throw new TypeError("Generator is already executing.");
				for (; a;) try {
					if (o = 1, i && (n = 2 & r[0] ? i.
					return: r[0] ? i.
					throw || ((n = i.
					return) && n.call(i), 0) : i.next) && !(n = n.call(i, r[1])).done) return n;
					switch (i = 0, n && (r = [2 & r[0], n.value]), r[0]) {
					case 0:
					case 1:
						n = r;
						break;
					case 4:
						return a.label++,
						{
							value: r[1],
							done: !1
						};
					case 5:
						a.label++,
						i = r[1],
						r = [0];
						continue;
					case 7:
						r = a.ops.pop(),
						a.trys.pop();
						continue;
					default:
						if (! (n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === r[0] || 2 === r[0])) {
							a = 0;
							continue
						}
						if (3 === r[0] && (!n || r[1] > n[0] && r[1] < n[3])) {
							a.label = r[1];
							break
						}
						if (6 === r[0] && a.label < n[1]) {
							a.label = n[1],
							n = r;
							break
						}
						if (n && a.label < n[2]) {
							a.label = n[2],
							a.ops.push(r);
							break
						}
						n[2] && a.ops.pop(),
						a.trys.pop();
						continue
					}
					r = e.call(t, a)
				} catch(s) {
					r = [6, s],
					i = 0
				} finally {
					o = n = 0
				}
				if (5 & r[0]) throw r[1];
				return {
					value: r[0] ? r[1] : void 0,
					done: !0
				}
			}
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.NetBase = void 0;
		var r = t("./NetApi"),
		a = t("../Framework/Net/HttpRequest"),
		s = t("../Framework/UI/UIFacade"),
		c = t("../Model/UserModel"),
		l = t("../Platforms/Platform"),
		u = t("../Define/StaticData"),
		p = t("../Define/Define"),
		h = window.md5,
		d = function() {
			function t() {}
			return Object.defineProperty(t, "sBaseURL", {
				get: function() {
					var t = l.
				default.getPlatType(),
					e = "",
					o = this._isNew ? "/open/api/like/jxz/": "/like/jxz/";
					if (u.StaticData.GAMEEVE == p.GameEve.test) switch (t) {
					case l.PlatformType.Like:
						e = "https://" + u.StaticData.TESTURL + o;
						break;
					default:
						e = "https://" + u.StaticData.TESTURL
					} else if (u.StaticData.GAMEEVE == p.GameEve.online) switch (t) {
					case l.PlatformType.Like:
						e = "https://" + u.StaticData.OfficalURL + o;
						break;
					default:
						e = "https://" + l.
					default.getServerAddr()
					}
					return e
				},
				enumerable: !1,
				configurable: !0
			}),
			t.get = function(t, e, o, i, n) {
				void 0 === i && (i = {
					"Content-Type": "application/x-www-form-urlencoded"
				}),
				void 0 === n && (n = 5),
				this.questUrl = t,
				t = this.sBaseURL + t;
				var r = u.StaticData.APPID,
				a = c.
			default.inst.getLkePin();
				return e.lkEPin && (a = e.lkEPin),
				o || (o = {}),
				!this._isNew && r && r.length > 0 && a && a.length > 0 && (e.appId = r, e.lkEPin = a),
				this.sendRequset("get", t, e, o, i, n)
			},
			t.post = function(t, e, o, i, n) {
				void 0 === i && (i = {
					"Content-Type": "application/x-www-form-urlencoded"
				}),
				void 0 === n && (n = 5),
				this.questUrl = t,
				t = this.sBaseURL + t;
				var a = u.StaticData.APPID,
				s = c.
			default.inst.getLkePin();
				return o || (o = {}),
				this.questUrl == r.NetApi.Apis.launchBattle && o.isFriend && (e.recipient = c.
			default.inst.getLkePin(), s = o.selfPin, o.appId = a, o.lkEPin = s),
				this.questUrl != r.NetApi.Apis.launchBattle && this.questUrl != r.NetApi.Apis.receiveBattle || (i = {
					"Content-Type": "application/json;charset=UTF-8"
				}),
				!this._isNew && a && a.length > 0 && s && s.length > 0 && (e.appId = a, e.lkEPin = s),
				this.sendRequset("post", t, e, o, i, n)
			},
			t.sendRequset = function(t, e, o, r, s, l) {
				return i(this, void 0, Promise,
				function() {
					var i, p, d, f, _, y, v, m;
					return n(this,
					function(n) {
						switch (n.label) {
						case 0:
							switch (t.toLocaleLowerCase()) {
							case "get":
								this._isNew ? (p = u.StaticData.APPID, d = u.StaticData.md5Key, f = (new Date).getTime(), _ = p + "_" + d + "__" + f, y = this._md5(_), e = e + "?appId=" + p + "&lkEPin=" + c.userModel.getLkePin() + "&sign=" + y + "&t=" + f, i = a.HttpRequest.get(e, o, s, l)) : i = a.HttpRequest.get(e, o, s, l);
								break;
							case "post":
								this._isNew ? (p = u.StaticData.APPID, d = u.StaticData.md5Key, f = (new Date).getTime(), console.log(h), _ = p + "_" + d + "_" + JSON.stringify(o) + "_" + f, y = this._md5(_), e = e + "?appId=" + p + "&lkEPin=" + (r.lkEPin ? r.lkEPin: c.userModel.getLkePin()) + "&sign=" + y + "&t=" + f, i = a.HttpRequest.post(e, o, r, s, l)) : i = a.HttpRequest.post(e, o, r, s, l);
								break;
							default:
								cc.error("unkonw  http request method!")
							}
							return [4, i];
						case 1:
							if ((v = n.sent()).errorCode && 200 != v.errorCode) throw this.onErrorCode(v.errorCode, v.errorMessage),
							v.errorCode;
							return m = void 0,
							null != v.datas ? m = v.datas: null != v.data && (m = v.data),
							[2, m]
						}
					})
				})
			},
			t.onErrorCode = function(t, e) {
				e && s.UIFacade.showToast("" + e)
			},
			Object.defineProperty(t, "_isNew", {
				get: function() {
					return this.questUrl == r.NetApi.Apis.launchBattle || this.questUrl == r.NetApi.Apis.receiveBattle
				},
				enumerable: !1,
				configurable: !0
			}),
			t._md5 = function(t) {
				for (var e = this._stringToByte(t), o = h.update(e).digest(), i = [], n = 0; n < o.length; n++) {
					var r = o[n]; (255 & r) >> 4 == 0 ? (i.push(0), i.push(r.toString(16))) : i.push(r.toString(16))
				}
				return i.join("")
			},
			t._stringToByte = function(t) {
				for (var e, o = [], i = 0; i < t.length; i++) 65280 & (e = t.charCodeAt(i)) ? (o.push(e >> 8), o.push(255 & e)) : o.push(e);
				return o
			},
			t.questUrl = null,
			t
		} ();
		o.NetBase = d,
		cc._RF.pop()
	},
	{
		"../Define/Define": "Define",
		"../Define/StaticData": "StaticData",
		"../Framework/Net/HttpRequest": "HttpRequest",
		"../Framework/UI/UIFacade": "UIFacade",
		"../Model/UserModel": "UserModel",
		"../Platforms/Platform": "Platform",
		"./NetApi": "NetApi"
	}],
	Net: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "57bcdj5sslNcpZfhRa6+PpA", "Net");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		});
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.ErrorCode = o.Net = void 0;
		var r = t("./NetApi"),
		a = t("./NetBase"),
		s = t("../Define/StaticData"),
		c = function(t) {
			function e() {
				return null !== t && t.apply(this, arguments) || this
			}
			return n(e, t),
			e.getUserFriends = function(t) {
				return void 0 === t && (t = s.StaticData.ActivityID),
				this.get(r.NetApi.Apis.getUserFriends, {
					actId: t
				},
				{})
			},
			e.getUserFriendsPage = function(t, e, o) {
				return void 0 === t && (t = s.StaticData.ActivityID),
				this.get(r.NetApi.Apis.getUserFriendsPage, {
					actId: t,
					pageNo: e,
					pageSize: o
				},
				{})
			},
			e.getUserPkInfo = function(t) {
				return void 0 === t && (t = s.StaticData.ActivityID),
				this.get(r.NetApi.Apis.getUserPkInfo, {
					actId: t
				},
				{})
			},
			e.getMyRankInfo = function(t) {
				return void 0 === t && (t = s.StaticData.ActivityID),
				this.get(r.NetApi.Apis.getMyRankInfo, {
					actId: t
				},
				{})
			},
			e.getMyLeastInfo = function(t) {
				return void 0 === t && (t = s.StaticData.ActivityID),
				this.get(r.NetApi.Apis.getMyLeastInfo, {
					actId: t
				},
				{})
			},
			e.launchBattle = function(t, e, o, i, n) {
				return void 0 === i && (i = s.StaticData.ActivityID),
				void 0 === n && (n = !1),
				this.post(r.NetApi.Apis.launchBattle, {
					actId: i,
					recipient: e,
					relation: o
				},
				{
					isFriend: n,
					selfPin: t
				})
			},
			e.receivePk = function(t, e, o) {
				return void 0 === o && (o = s.StaticData.ActivityID),
				this.post(r.NetApi.Apis.receiveBattle, {
					actId: o,
					sponsor: t
				},
				{})
			},
			e.getActivityInfo = function(t) {
				return void 0 === t && (t = s.StaticData.ActivityID),
				this.get(r.NetApi.Apis.getActivityInfo, {
					actId: t
				},
				{})
			},
			e.jdFriendship = function(t) {
				return this.get(r.NetApi.Apis.jdFriendship, {
					recipient: t
				},
				{})
			},
			e.getBanners = function(t) {
				return this.get(r.NetApi.Apis.getBanner, {
					type: t
				},
				{})
			},
			e.getBoxRewardInfo = function(t) {
				return void 0 === t && (t = s.StaticData.ActivityID),
				this.get(r.NetApi.Apis.getBoxRewardInfo, {
					actId: t
				},
				{})
			},
			e.sendBoxReward = function(t, e) {
				return void 0 === t && (t = 111),
				void 0 === e && (e = s.StaticData.ActivityID),
				this.get(r.NetApi.Apis.sendBoxReward, {
					rewardConfigId: t,
					actId: e
				},
				{})
			},
			e.getRankRewardInfo = function(t) {
				return void 0 === t && (t = s.StaticData.ActivityID),
				this.get(r.NetApi.Apis.getRankRewardInfo, {
					actId: t
				},
				{})
			},
			e.getUserPkInfoByPin = function(t, e) {
				return void 0 === e && (e = s.StaticData.ActivityID),
				this.get(r.NetApi.Apis.getUserPkInfo, {
					actId: e,
					lkEPin: t
				},
				{})
			},
			e.getMyRankInfoByPin = function(t, e) {
				return void 0 === e && (e = s.StaticData.ActivityID),
				this.get(r.NetApi.Apis.getMyRankInfo, {
					actId: e,
					lkEPin: t
				},
				{})
			},
			e.getScore = function(t) {
				return void 0 === t && (t = s.StaticData.ActivityID),
				this.get(r.NetApi.Apis.getScore, {
					actId: t
				},
				{})
			},
			e.checkRisk = function(t) {
				return void 0 === t && (t = s.StaticData.ActivityID),
				this.get(r.NetApi.Apis.checkRisk, {
					actId: t
				},
				{})
			},
			e.firstVerify = function(t) {
				return void 0 === t && (t = s.StaticData.ActivityID),
				this.get(r.NetApi.Apis.firstVerify, {
					actId: t
				},
				{})
			},
			e.getFlowInfo = function(t, e) {
				return void 0 === e && (e = s.StaticData.ActivityID),
				this.post(r.NetApi.Apis.getFlowInfo, {
					actId: e
				},
				{
					uuid: "",
					body: t
				})
			},
			e
		} (a.NetBase);
		o.Net = c,
		function(t) {
			t[t.ok = 0] = "ok",
			t[t.param_error = 1] = "param_error",
			t[t.appid_error = 2] = "appid_error",
			t[t.session_key_error = 3] = "session_key_error",
			t[t.db_not_ready = 10] = "db_not_ready",
			t[t.db_error = 11] = "db_error",
			t[t.account_no = 1001] = "account_no",
			t[t.account_passwd_error = 1002] = "account_passwd_error",
			t[t.account_exist = 1003] = "account_exist",
			t[t.account_load_error = 1010] = "account_load_error",
			t[t.api_error = 2001] = "api_error",
			t[t.api_query_error = 2002] = "api_query_error",
			t[t.api_result_error = 2003] = "api_result_error",
			t[t.rank_error = 5e3] = "rank_error",
			t[t.rank_active_not_open = 5010] = "rank_active_not_open",
			t[t.rank_active_not_exist = 5011] = "rank_active_not_exist",
			t[t.role_no = 10001] = "role_no",
			t[t.role_exist = 10004] = "role_exist",
			t[t.role_token_error = 10005] = "role_token_error",
			t[t.role_no_mail = 10006] = "role_no_mail",
			t[t.role_no_taskId = 10007] = "role_no_taskId",
			t[t.role_no_taskType = 10008] = "role_no_taskType",
			t[t.login_error = 10011] = "login_error",
			t[t.task_can_not_reward = 10031] = "task_can_not_reward",
			t[t.task_not_found = 10032] = "task_not_found"
		} (o.ErrorCode || (o.ErrorCode = {})),
		cc._RF.pop()
	},
	{
		"../Define/StaticData": "StaticData",
		"./NetApi": "NetApi",
		"./NetBase": "NetBase"
	}],
	NodePool: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "040c9gg3vJDmYzBE+Z6ypRm", "NodePool"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.NodePool = void 0;
		var i = t("./ResLoader"),
		n = function() {
			function t() {
				this._isReady = !1,
				this._createCount = 0,
				this._warterMark = 10,
				this._res = null,
				this._nodes = new Array
			}
			return t.prototype.isReady = function() {
				return this._isReady
			},
			t.prototype.init = function() {
				var t = this;
				if (this._isReady) cc.error("already inited!");
				else {
					var e = arguments[0],
					o = null;
					if (2 == arguments.length && "function" == typeof arguments[1] && (o = arguments[1]), e instanceof cc.Prefab) return this._res = e,
					this._res.addRef(),
					this._isReady = !0,
					void(o && o(null, this));
					"string" != typeof arguments[0] ? console.error("NodePool init error " + arguments[0]) : i.resLoader.loadRes(arguments[0], cc.Prefab,
					function(e, i) {
						e || (t._res = i, t._res.addRef(), t._isReady = !0),
						o && o(e, t)
					})
				}
			},
			t.prototype.prepareNode = function(t) {
				if (this.isReady) for (var e = 0; e < t; ++e) {
					var o = cc.instantiate(this._res);
					this._createCount++,
					this._nodes.push(o)
				} else cc.error("node pool not ready!")
			},
			t.prototype.getNode = function() {
				return this.isReady ? this._nodes.length > 0 ? this._nodes.pop() : (this._createCount++, cc.instantiate(this._res)) : null
			},
			t.prototype.freeNode = function(t) {
				if (!t || !cc.isValid(t)) return cc.error("[ERROR] PrefabPool: freePrefab: isValid node"),
				void this._createCount--;
				this._nodes.length > this._warterMark ? (this._createCount--, t.destroy()) : (t.removeFromParent(!0), t.cleanup(), this._nodes.push(t))
			},
			t.prototype.setWaterMark = function(t) {
				this._warterMark = t
			},
			t.prototype.isUnuse = function() {
				return this._nodes.length > this._createCount && cc.error("PrefabPool: _nodes.length > _createCount"),
				this._nodes.length == this._createCount
			},
			t.prototype.destory = function() {
				for (var t = 0,
				e = this._nodes; t < e.length; t++) e[t].destroy();
				this._createCount -= this._nodes.length,
				this._nodes.length = 0,
				this._res.decRef()
			},
			t
		} ();
		o.NodePool = n,
		cc._RF.pop()
	},
	{
		"./ResLoader": "ResLoader"
	}],
	ObjectUtils: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "51d91s9F2xI8Y2K/NEwP6RC", "ObjectUtils"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var i = function() {
			function t() {}
			return t.isEmpty = function(t) {
				return null == t
			},
			t.getProperty = function(t, e, o) {
				return t && null !== t[e] && void 0 !== t[e] ? t[e] : o
			},
			t.getPropertyByNames = function(t, e) {
				for (var o = [], i = 2; i < arguments.length; i++) o[i - 2] = arguments[i];
				for (var n = t,
				r = 0; r < o.length && n; r++) {
					var a = o[r];
					if (null === n[a] || void 0 === n[a]) break;
					if (n = n[a], r === o.length - 1 && null != n) return n
				}
				return e
			},
			t.getPropertyStringByNames = function(t, e) {
				for (var o = [], i = 2; i < arguments.length; i++) o[i - 2] = arguments[i];
				for (var n = t,
				r = e,
				a = 0; a < o.length && n; a++) {
					var s = o[a];
					if (null === n[s] || void 0 === n[s]) break;
					if (n = n[s], a === o.length - 1 && null != n) {
						var c = n;
						"string" == typeof c ? r = c: "number" == typeof c && (r = c.toString());
						break
					}
				}
				return r
			},
			t.getPropertyNumberByNames = function(t, e) {
				for (var o = [], i = 2; i < arguments.length; i++) o[i - 2] = arguments[i];
				for (var n = t,
				r = e,
				a = 0; a < o.length && n; a++) {
					var s = o[a];
					if (null === n[s] || void 0 === n[s]) break;
					if (n = n[s], a === o.length - 1 && null != n) {
						var c = n;
						"number" == typeof c ? r = c: "string" == typeof c && (r = parseInt(c));
						break
					}
				}
				return r
			},
			t.is = function(t, e) {
				var o = !1;
				return e === Function && "function" == typeof t ? o = !0 : e === Number && "number" == typeof t ? o = !0 : e === Boolean && "boolean" == typeof t ? o = !0 : e === String && "string" == typeof t ? o = !0 : "object" == typeof t && (o = t instanceof e),
				o
			},
			t.isString = function(t) {
				return "string" == typeof t
			},
			t.isNumber = function(t) {
				return "number" == typeof t
			},
			t.isFunction = function(t) {
				return "function" == typeof t
			},
			t.getClassName = function(t) {
				return null != t && t.constructor && null !== t.constructor.name && void 0 !== t.constructor.name ? t.constructor.name: ""
			},
			t
		} ();
		o.
	default = i,
		cc._RF.pop()
	},
	{}],
	OpenBox: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "a477cyrahNE4qHKikZkKvWs", "OpenBox");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../../Define/UIDefs"),
		s = t("../../Framework/UI/UIMgr"),
		c = t("../../Framework/UIBase"),
		l = cc._decorator,
		u = l.ccclass,
		p = l.property,
		h = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.spineBody = null,
				e
			}
			return n(e, t),
			e.prototype.onOpen = function(t, e) {
				this.data = e
			},
			e.prototype.start = function() {
				this.spineBody && (this.spineBody.setCompleteListener(this.onAniComplete.bind(this)), this.spineBody.setAnimation(0, "open", !1))
			},
			e.prototype.onAniComplete = function(t) {
				switch (t.animation.name) {
				case "open":
					this.close(),
					s.
				default.inst.open(a.UIType.GetRewards, this.data)
				}
			},
			r([p(sp.Skeleton)], e.prototype, "spineBody", void 0),
			r([u], e)
		} (c.
	default);
		o.
	default = h,
		cc._RF.pop()
	},
	{
		"../../Define/UIDefs": "UIDefs",
		"../../Framework/UI/UIMgr": "UIMgr",
		"../../Framework/UIBase": "UIBase"
	}],
	OverItemModel: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "9acd61Wx4NDErKDOfh3tMd0", "OverItemModel");
		var i = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.OverItemModel = void 0;
		var n = cc._decorator,
		r = n.ccclass,
		a = (n.property,
		function() {
			function t() {
				this.winNum = 5,
				this.grade = 5,
				this.avaterUrl = ""
			}
			return i([r], t)
		} ());
		o.OverItemModel = a,
		cc._RF.pop()
	},
	{}],
	OverItem: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "57315XQgQFI45b461SwAM1z", "OverItem");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../../../Define/EventId"),
		s = t("../../../Framework/Event/EventMgr"),
		c = t("../Tool/SwitchNode"),
		l = cc._decorator,
		u = l.ccclass,
		p = l.property,
		h = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.sprAvatar = null,
				e.labName = null,
				e.labWinNum = null,
				e.labGrade = null,
				e.resNode = null,
				e
			}
			return n(e, t),
			e.prototype.initlize = function(t, e) {
				this.labName && (this.labName.string = t.name),
				this.labWinNum && (this.labWinNum.string = t.winNum.toString()),
				this.labGrade && (this.labGrade.string = t.grade.toString()),
				this.resNode && this.resNode.setCurNode(e),
				s.EVENT.emit(a.EventId.ON_UPDATE_SPRITE_AVATAR, this.sprAvatar, t.avaterUrl)
			},
			r([p(cc.Sprite)], e.prototype, "sprAvatar", void 0),
			r([p(cc.Label)], e.prototype, "labName", void 0),
			r([p(cc.Label)], e.prototype, "labWinNum", void 0),
			r([p(cc.Label)], e.prototype, "labGrade", void 0),
			r([p(c.
		default)], e.prototype, "resNode", void 0),
			r([u], e)
		} (cc.Component);
		o.
	default = h,
		cc._RF.pop()
	},
	{
		"../../../Define/EventId": "EventId",
		"../../../Framework/Event/EventMgr": "EventMgr",
		"../Tool/SwitchNode": "SwitchNode"
	}],
	OverTreasureItem: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "aff0cnIN+xL2aZhx+jvott5", "OverTreasureItem");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../../../Define/Define"),
		s = t("../../../Define/EventId"),
		c = t("../../../Framework/Event/EventMgr"),
		l = t("../../../Model/UserModel"),
		u = t("../Treasure/TreasureItem"),
		p = t("../Treasure/TreasureProgress"),
		h = cc._decorator,
		d = h.ccclass,
		f = h.property,
		_ = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.treasureProgress = null,
				e.isSelect = !1,
				e
			}
			return n(e, t),
			e.prototype.onLoad = function() {
				c.EVENT.on(s.EventId.ON_TREASURE_SELECT, this.checkSelectState.bind(this), this),
				this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this),
				this.mask = cc.find("bg/mask", this.node)
			},
			e.prototype.onItemUpdate = function(t, e) {
				this.data = e,
				this.index = t,
				this.mask.active = e.wins > l.userModel.winNum,
				this.bgNode.setCurImg(e.received),
				this.labFriendNum.node.parent.active = e.received == a.TreasureState.friendLess || e.received == a.TreasureState.unreceived,
				this.labFriendNum.string = e.friendFrames.toString(),
				this.treasureProgress.init(t, e)
			},
			e.prototype.checkSelectState = function(t) {
				this.updateSelectState(this.index == t)
			},
			e.prototype.updateSelectState = function(t) {
				this.bgNode.node.scale = t ? 1 : .6,
				this.isSelect = t,
				t && c.EVENT.emit(s.EventId.GAMEOVER_TREASURE_UPDATE, this)
			},
			e.prototype.onClick = function() {},
			r([f(p.
		default)], e.prototype, "treasureProgress", void 0),
			r([d], e)
		} (u.
	default);
		o.
	default = _,
		cc._RF.pop()
	},
	{
		"../../../Define/Define": "Define",
		"../../../Define/EventId": "EventId",
		"../../../Framework/Event/EventMgr": "EventMgr",
		"../../../Model/UserModel": "UserModel",
		"../Treasure/TreasureItem": "TreasureItem",
		"../Treasure/TreasureProgress": "TreasureProgress"
	}],
	PageViewLimit: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "e8c41q6/HdNwZXowGyPTiIY", "PageViewLimit");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
		s = a.ccclass,
		c = (a.property,
		function(t) {
			function e() {
				return null !== t && t.apply(this, arguments) || this
			}
			return n(e, t),
			e.prototype.onLoad = function() {},
			e.prototype.update = function() {},
			r([s], e)
		} (cc.Component));
		o.
	default = c,
		cc._RF.pop()
	},
	{}],
	PageViewOptimizer: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "c708dNHzrNOs77i3qSrWppR", "PageViewOptimizer");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.LoopType = o.Indicator = void 0;
		var a, s, c = t("../../Define/EventId"),
		l = t("../Event/EventMgr"),
		u = t("../Utils/Utils"),
		p = t("./ListViewOptimizer"); (function(t) {
			t[t.UnShow = 0] = "UnShow",
			t[t.Show = 1] = "Show"
		})(a = o.Indicator || (o.Indicator = {})),
		function(t) {
			t[t.NotLoop = 0] = "NotLoop",
			t[t.Loop = 1] = "Loop"
		} (s = o.LoopType || (o.LoopType = {}));
		var h = cc._decorator,
		d = h.ccclass,
		f = h.property,
		_ = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.indicator = a.Show,
				e.isLoop = s.NotLoop,
				e.pageIdxBg = null,
				e.pageIdxIcon = null,
				e.indicatorBGSize = 10,
				e.indicatorSelSize = 10,
				e.indicatorSpacing = 10,
				e.startTime = 0,
				e.startPos = null,
				e.pageIdx = null,
				e.itemWidth = 0,
				e.itemHeight = 0,
				e.speed = 0,
				e.indicatorNode = null,
				e.indicators = [],
				e.arrows = null,
				e
			}
			return n(e, t),
			e.prototype.onLoad = function() {
				t.prototype.onLoad.call(this),
				this.listview.inertia = !1,
				this.listview.node.on(cc.Node.EventType.TOUCH_START, this._touchStart, this),
				this.listview.node.on(cc.Node.EventType.TOUCH_END, this._touchEnded, this),
				this.listview.node.on(cc.Node.EventType.TOUCH_CANCEL, this._touchEnded, this),
				this.content.on(cc.Node.EventType.POSITION_CHANGED, this._updateContentView.bind(this)),
				this.nodeDesc = "pageview";
				var e = cc.instantiate(this.itemTemplate);
				this.itemWidth = e.width,
				this.itemHeight = e.height,
				this.speed = 1.3 * this.itemWidth,
				e.destroy(),
				e = null
			},
			e.prototype._setPageIndex = function() {
				for (var t = 0; t < this.indicators.length; t++) {
					var e = this.indicators[t],
					o = e.getComponent(cc.Sprite);
					Number(t) + 1 == this.pageIdx ? (o.spriteFrame = this.pageIdxIcon, e.width = this.indicatorSelSize, e.height = this.indicatorSelSize) : (o.spriteFrame = this.pageIdxBg, e.width = this.indicatorBGSize, e.height = this.indicatorBGSize)
				}
			},
			e.prototype._canMove = function(t) {
				var e = t.x - this.startPos.x,
				o = this.itemWidth;
				this.isVertical && (e = t.y - this.startPos.y, o = this.itemHeight);
				var i = u.
			default.getServerTime(),
				n = Math.abs(e),
				r = (i - this.startTime) / 1e3;
				return n >= o / 2 || n > 25 && n / r >= this.speed
			},
			e.prototype._touchEnded = function(t) {
				if ((!this.isVertical || this.scrollView.vertical) && (this.isVertical || this.scrollView.horizontal)) {
					var e = t.getLocation(),
					o = this.pageIdx;
					if (!this.isVertical && this.content.x >= -this.itemWidth / 2 || this.isVertical && this.content.y <= this.itemHeight / 2) return this.isLoop == s.Loop && this._canMove(e) ? (this.pageIdx = this.data.length, this.jumpToBottom()) : this.isLoop == s.NotLoop && (this.pageIdx = 1),
					void(this.pageIdx != o && (this._setPageIndex(), l.EVENT.emit(c.EventId.ON_PAGEVIEW_INDEX_CHANGED, this.pageIdx)));
					if (!this.isVertical && this.content.x <= -this.rowNum * (this.spacing + this.itemWidth) + this.itemWidth / 2 || this.isVertical && this.content.y > this.rowNum * (this.spacing + this.itemHeight) - this.itemHeight / 2) return this.isLoop == s.Loop && this._canMove(e) ? (this.pageIdx = 1, this.jumpToTop()) : this.isLoop == s.NotLoop && (this.pageIdx = this.data.length),
					void(this.pageIdx != o && (this._setPageIndex(), l.EVENT.emit(c.EventId.ON_PAGEVIEW_INDEX_CHANGED, this.pageIdx)));
					var i = this._canMove(e),
					n = e.x - this.startPos.x,
					r = this.itemWidth;
					if (i) {
						var a = 1;
						this.isVertical && (a = -1),
						this.pageIdx = n > 0 ? this.pageIdx - a: this.pageIdx + a
					}
					this.pageIdx = Math.max(1, this.pageIdx),
					this.pageIdx = Math.min(this.data.length, this.pageIdx);
					var u = this.getItemPosition(this.pageIdx),
					p = u.x - r / 2,
					h = cc.v2(p, 0);
					this.isVertical && (p = u.y - r / 2, h = cc.v2(0, p)),
					this.listview.scrollToOffset(h, .1),
					o != this.pageIdx && (this._setPageIndex(), l.EVENT.emit(c.EventId.ON_PAGEVIEW_INDEX_CHANGED, this.pageIdx))
				}
			},
			e.prototype._touchStart = function(t) {
				this.startTime = u.
			default.getServerTime(),
				this.startPos = t.getLocation()
			},
			e.prototype.getItemPosition = function(t) {
				void 0 === t && (t = 1);
				var e = new cc.Vec2(0, 0);
				return t = Math.min(this.data.length, t),
				this.isVertical ? e.y = (this.spacing + this.itemHeight) * t - this.itemHeight / 2 : e.x = (this.spacing + this.itemWidth) * t - this.itemWidth / 2,
				e
			},
			e.prototype.setData = function(e, o, i) {
				if (void 0 === i && (i = !1), this.pageIdx = this.initIdx, t.prototype.setData.call(this, e, o, i), this.indicator == a.Show) {
					var n = this.listview.node.getChildByName("_indicator_");
					if (!n) {
						var r = (n = new cc.Node("_indicator_")).addComponent(cc.Layout);
						r.type = cc.Layout.Type.HORIZONTAL,
						r.horizontalDirection = cc.Layout.HorizontalDirection.LEFT_TO_RIGHT,
						n.height = this.indicatorBGSize,
						n.x = 0,
						n.y = -this.node.height / 2 + this.indicatorBGSize / 2 + 5,
						r.spacingX = this.indicatorSpacing,
						this.isVertical && (r.type = cc.Layout.Type.VERTICAL, r.verticalDirection = cc.Layout.VerticalDirection.TOP_TO_BOTTOM, n.width = this.indicatorBGSize, n.height = 0, n.y = 0, n.x = -this.node.width / 2 + this.indicatorBGSize / 2 + 5, r.spacingY = this.indicatorSpacing),
						this.indicatorNode = n,
						this.indicatorNode.parent = this.listview.node,
						this.indicatorNode.zIndex = -1
					}
					for (var s = this.indicators.length; s < this.rowNum; s++) { (u = new cc.Node).width = this.indicatorBGSize,
						u.height = this.indicatorBGSize,
						u.parent = this.indicatorNode;
						var c = new cc.Node;
						c.parent = u;
						var l = c.addComponent(cc.Sprite);
						this.indicators.push(c),
						l.spriteFrame = this.pageIdxBg,
						c.width = this.indicatorBGSize,
						c.height = this.indicatorBGSize,
						this.isVertical ? this.indicatorNode.height += this.indicatorSpacing + this.indicatorBGSize: this.indicatorNode.width += this.indicatorSpacing + this.indicatorBGSize
					}
					for (s = this.indicators.length; s > this.rowNum; s--) {
						var u; (u = this.indicators[s - 1]).parent.destroy(),
						this.indicators.splice(s - 1),
						this.isVertical ? this.indicatorNode.height -= this.indicatorSpacing + this.indicatorBGSize: this.indicatorNode.width -= this.indicatorSpacing + this.indicatorBGSize
					}
					this._setPageIndex()
				}
				this._createArrows()
			},
			e.prototype._createArrows = function() {
				var t = this.listview.node.getChildByName("_arrow_");
				t && t.destroy();
				var e = this.listview.content.width,
				o = this.listview.node.width;
				if (this.isVertical && (e = this.listview.content.height, o = this.listview.node.height), this.arrows = this.listview.node.getChildByName("_arrows_"), !(!this.arrow || e <= o || this.arrows)) {
					this.arrowNode = new cc.Node("_arrows_"),
					this.arrowNode.parent = this.listview.node;
					var i = cc.instantiate(this.arrow);
					i.parent = this.arrowNode;
					var n = cc.v2( - this.listview.node.width / 2 + i.height / 2 + 20, 0),
					r = -90;
					this.isVertical && (n = cc.v2(0, this.listview.node.height / 2 - i.height / 2 - 20), r = 180),
					i.angle = r,
					i.setPosition(n),
					i.name = "_leftArrow_",
					i.opacity = 1 == this.pageIdx ? 0 : 255;
					var a = cc.instantiate(this.arrow);
					a.parent = this.arrowNode,
					n = cc.v2(this.listview.node.width / 2 - a.height / 2 - 20, 0),
					r = 90,
					this.isVertical && (n = cc.v2(0, -this.listview.node.height / 2 + a.height / 2 + 20), r = 0),
					a.angle = r,
					a.setPosition(n),
					a.name = "_rightArrow_",
					a.opacity = this.pageIdx == this.data.length ? 0 : 255
				}
			},
			e.prototype.setIndicatorPostion = function(t) {
				this.indicatorNode.setPosition(t)
			},
			e.prototype.getCurrentPageIndex = function() {
				return this.pageIdx - 1
			},
			e.prototype.setCurrentPageIndex = function(e) {
				e < 0 || e > this.rowNum - 1 ? cc.log("index error! max index is " + (this.rowNum - 1) + ", param idx is " + e) : e + 1 != this.pageIdx && (this.pageIdx = e + 1, t.prototype.jumpTo.call(this, e), this._setPageIndex(), l.EVENT.emit(c.EventId.ON_PAGEVIEW_INDEX_CHANGED, this.pageIdx))
			},
			e.prototype.addPage = function(t) {
				this.data.push(t),
				this.setData(this.data, this.itemUpdateFunc)
			},
			e.prototype.insertPage = function(t, e) {
				e = Math.min(e, this.rowNum),
				e = Math.max(e, 0),
				this.data.push(t);
				var o = this.data[e];
				this.data[e] = t;
				for (var i = this.rowNum - 1; i > e; i--) this.data[i] = i == e + 1 ? o: this.data[i - 1];
				this.setData(this.data, this.itemUpdateFunc)
			},
			e.prototype.removePageAtIndex = function(t) {
				t < 0 || t > this.rowNum - 1 ? cc.log("index error! max index is " + (this.rowNum - 1) + ", param idx is " + t) : (this.data.splice(t, 1), this.setData(this.data, this.itemUpdateFunc))
			},
			e.prototype.scrollToPage = function(e, o) {
				void 0 === o && (o = .1),
				e < 0 || e > this.rowNum - 1 ? cc.log("index error! max index is " + (this.rowNum - 1) + ", param idx is " + e) : e + 1 != this.pageIdx && (this.pageIdx = e + 1, t.prototype.scrollTo.call(this, e, o), this._setPageIndex(), l.EVENT.emit(c.EventId.ON_PAGEVIEW_INDEX_CHANGED, this.pageIdx))
			},
			e.prototype.getCurPage = function() {
				var t = this.getItemPosition(this.pageIdx);
				return t = this.listview.content.convertToWorldSpaceAR(t),
				t = cc.director.getScene().convertToNodeSpaceAR(t),
				this.getItem(t)
			},
			e.prototype._updateContentView = function() {
				if (t.prototype._updateContentView.call(this, this.isLoop === s.Loop), this.arrowNode) {
					this.showArrow();
					for (var e = this.arrowNode.children,
					o = 0; o < e.length; o++) e[o].opacity = 255;
					this.pageIdx == this.data.length && (this.arrowNode.getChildByName("_rightArrow_").opacity = 0),
					1 == this.pageIdx && (this.arrowNode.getChildByName("_leftArrow_").opacity = 0)
				}
			},
			r([f({
				type: cc.Enum(a)
			})], e.prototype, "indicator", void 0),
			r([f({
				type: cc.Enum(s)
			})], e.prototype, "isLoop", void 0),
			r([f(cc.SpriteFrame)], e.prototype, "pageIdxBg", void 0),
			r([f(cc.SpriteFrame)], e.prototype, "pageIdxIcon", void 0),
			r([f], e.prototype, "indicatorBGSize", void 0),
			r([f], e.prototype, "indicatorSelSize", void 0),
			r([f], e.prototype, "indicatorSpacing", void 0),
			r([d], e)
		} (p.
	default);
		o.
	default = _,
		cc._RF.pop()
	},
	{
		"../../Define/EventId": "EventId",
		"../Event/EventMgr": "EventMgr",
		"../Utils/Utils": "Utils",
		"./ListViewOptimizer": "ListViewOptimizer"
	}],
	ParticleActvator: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "b1162EEFPxHLZ+55lAl2hJu", "ParticleActvator");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
		s = a.ccclass,
		c = (a.property,
		function(t) {
			function e() {
				return null !== t && t.apply(this, arguments) || this
			}
			return n(e, t),
			e.prototype.onLoad = function() {
				this._particle = this.node.getComponent(cc.ParticleSystem),
				this._particle || cc.error("ParticleActvator should be atttached to a cc.ParticleSystem node!")
			},
			e.prototype.onEnable = function() {
				this._particle && this._particle.resetSystem()
			},
			r([s], e)
		} (cc.Component));
		o.
	default = c,
		cc._RF.pop()
	},
	{}],
	PassivePk: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "bb6delLSbFHI4hrG303TLeB", "PassivePk");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		},
		a = this && this.__awaiter ||
		function(t, e, o, i) {
			return new(o || (o = Promise))(function(n, r) {
				function a(t) {
					try {
						c(i.next(t))
					} catch(e) {
						r(e)
					}
				}
				function s(t) {
					try {
						c(i.
						throw (t))
					} catch(e) {
						r(e)
					}
				}
				function c(t) {
					var e;
					t.done ? n(t.value) : (e = t.value, e instanceof o ? e: new o(function(t) {
						t(e)
					})).then(a, s)
				}
				c((i = i.apply(t, e || [])).next())
			})
		},
		s = this && this.__generator ||
		function(t, e) {
			var o, i, n, r, a = {
				label: 0,
				sent: function() {
					if (1 & n[0]) throw n[1];
					return n[1]
				},
				trys: [],
				ops: []
			};
			return r = {
				next: s(0),
				throw: s(1),
				return: s(2)
			},
			"function" == typeof Symbol && (r[Symbol.iterator] = function() {
				return this
			}),
			r;
			function s(t) {
				return function(e) {
					return c([t, e])
				}
			}
			function c(r) {
				if (o) throw new TypeError("Generator is already executing.");
				for (; a;) try {
					if (o = 1, i && (n = 2 & r[0] ? i.
					return: r[0] ? i.
					throw || ((n = i.
					return) && n.call(i), 0) : i.next) && !(n = n.call(i, r[1])).done) return n;
					switch (i = 0, n && (r = [2 & r[0], n.value]), r[0]) {
					case 0:
					case 1:
						n = r;
						break;
					case 4:
						return a.label++,
						{
							value: r[1],
							done: !1
						};
					case 5:
						a.label++,
						i = r[1],
						r = [0];
						continue;
					case 7:
						r = a.ops.pop(),
						a.trys.pop();
						continue;
					default:
						if (! (n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === r[0] || 2 === r[0])) {
							a = 0;
							continue
						}
						if (3 === r[0] && (!n || r[1] > n[0] && r[1] < n[3])) {
							a.label = r[1];
							break
						}
						if (6 === r[0] && a.label < n[1]) {
							a.label = n[1],
							n = r;
							break
						}
						if (n && a.label < n[2]) {
							a.label = n[2],
							a.ops.push(r);
							break
						}
						n[2] && a.ops.pop(),
						a.trys.pop();
						continue
					}
					r = e.call(t, a)
				} catch(s) {
					r = [6, s],
					i = 0
				} finally {
					o = n = 0
				}
				if (5 & r[0]) throw r[1];
				return {
					value: r[0] ? r[1] : void 0,
					done: !0
				}
			}
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = t("../../../Define/Define"),
		l = t("../../../Define/EventId"),
		u = t("../../../Define/StaticData"),
		p = t("../../../Define/UIDefs"),
		h = t("../../../Framework/Event/EventMgr"),
		d = t("../../../Framework/UI/UIFacade"),
		f = t("../../../Framework/UI/UIMgr"),
		_ = t("../../../Framework/UIBase"),
		y = t("../../../Framework/Utils/LogUtil"),
		v = t("../../../Model/PkDataModel"),
		m = t("../../../Model/UserModel"),
		g = t("../../../Network/Net"),
		b = t("../../../Platforms/BurierdPoint"),
		w = cc._decorator,
		I = w.ccclass,
		T = w.property,
		P = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.labName = null,
				e.sprAvatar = null,
				e.toggleDeal = null,
				e
			}
			return n(e, t),
			e.prototype.onOpen = function(t, e) {
				this.friendData = e,
				this.updateMes()
			},
			e.prototype.updateMes = function() {
				this.labName.string = this.friendData.nickName,
				h.EVENT.emit(l.EventId.ON_UPDATE_SPRITE_AVATAR, this.sprAvatar, this.friendData.avatarUrl)
			},
			e.prototype.onReceivePk = function() {
				this.toggleDeal.isChecked ? this.receiveFriend() : d.UIFacade.flyTxtCenter("\u8bf7\u63a5\u53d7\u534f\u8bae")
			},
			e.prototype.receiveFriend = function() {
				return a(this, void 0, void 0,
				function() {
					var t, e;
					return s(this,
					function(o) {
						switch (o.label) {
						case 0:
							return b.buriedPoint.sendEvent(c.TaEventName.pageShow, "\u63a5\u53d7PK", c.TaView.main, u.StaticData.qdSouce, u.StaticData.source),
							[4, g.Net.receivePk(this.friendData.friendPin, m.userModel.getLkePin())];
						case 1:
							return (t = o.sent()).state != c.PassivePkState.success ? (y.LogUtil.logError(t.msg), null != t.msg && d.UIFacade.flyTxtCenter(t.msg), this.close(), [2]) : (f.
						default.inst.close(p.UIType.FriendRank), this.close(), (e = new v.
						default).init(t.pkResult, !0), f.
						default.inst.open(p.UIType.Battle, e), h.EVENT.emit(l.EventId.ON_START_BATTLE), [2])
						}
					})
				})
			},
			r([T(cc.Label)], e.prototype, "labName", void 0),
			r([T(cc.Sprite)], e.prototype, "sprAvatar", void 0),
			r([T(cc.Toggle)], e.prototype, "toggleDeal", void 0),
			r([I], e)
		} (_.
	default);
		o.
	default = P,
		cc._RF.pop()
	},
	{
		"../../../Define/Define": "Define",
		"../../../Define/EventId": "EventId",
		"../../../Define/StaticData": "StaticData",
		"../../../Define/UIDefs": "UIDefs",
		"../../../Framework/Event/EventMgr": "EventMgr",
		"../../../Framework/UI/UIFacade": "UIFacade",
		"../../../Framework/UI/UIMgr": "UIMgr",
		"../../../Framework/UIBase": "UIBase",
		"../../../Framework/Utils/LogUtil": "LogUtil",
		"../../../Model/PkDataModel": "PkDataModel",
		"../../../Model/UserModel": "UserModel",
		"../../../Network/Net": "Net",
		"../../../Platforms/BurierdPoint": "BurierdPoint"
	}],
	PkDataModel: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "76edemm+B9NI4IEmouisoHA", "PkDataModel");
		var i = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var n = cc._decorator,
		r = n.ccclass,
		a = (n.property,
		function() {
			function t() {}
			return t.prototype.init = function(t, e, o) {
				void 0 === o && (o = !1),
				this.isGuide = o,
				this.overItems = [],
				e && t.pkStatus < 2 ? this.pkRes = 1 - t.pkStatus + "": this.pkRes = t.pkStatus + "";
				var i = {
					name: t.fromNk,
					winNum: t.fromWinNum,
					grade: t.fromScore,
					avaterUrl: t.fromImgUrl
				},
				n = {
					name: t.toNk,
					winNum: t.toWinNum,
					grade: t.toScore,
					avaterUrl: t.toImgUrl
				};
				this.overItems = e ? [n, i] : [i, n]
			},
			i([r], t)
		} ());
		o.
	default = a,
		cc._RF.pop()
	},
	{}],
	Platform: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "50c05GkExZDxYIwlZyo5w4d", "Platform");
		var i = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.UrlType = o.PlatformType = void 0;
		var n, r, a = t("../Define/Define"),
		s = t("../Define/StaticData"),
		c = t("../Framework/Utils/Utils"),
		l = t("../Model/UserModel"),
		u = t("./BurierdPoint"),
		p = cc._decorator,
		h = p.ccclass;
		p.property,
		function(t) {
			t[t.None = 0] = "None",
			t[t.Like = 1] = "Like"
		} (n = o.PlatformType || (o.PlatformType = {})),
		function(t) {
			t[t.H5 = 0] = "H5",
			t[t.WeiXin = 1] = "WeiXin",
			t[t.JDApp = 2] = "JDApp",
			t[t.QuickApp = 3] = "QuickApp"
		} (r = o.UrlType || (o.UrlType = {}));
		var d = function() {
			function t() {}
			var e;
			return e = t,
			t.getPlatType = function() {
				return n.Like
			},
			t.getUrlType = function() {
				return this.isAndroid ? -1 != navigator.userAgent.toLowerCase().indexOf("micromessenger") ? (console.log("wx-------------"), r.WeiXin) : r.JDApp: cc.sys.browserType == cc.sys.BROWSER_TYPE_WECHAT ? (console.log("wx-------------"), r.WeiXin) : r.JDApp
			},
			t.getServerAddr = function() {
				return "pengyougou.m.jd.com/"
			},
			t.openUrl = function(t) {
				switch (this.urlType) {
				case r.H5:
					cc.sys.openURL(t);
					break;
				case r.JDApp:
					var e = {
						des: "m",
						url: t,
						category: "jump"
					},
					o = "openApp.jdMobile://virtual?params=" + encodeURIComponent(JSON.stringify(e));
					window.location.href = o;
					break;
				case r.WeiXin:
					wx.miniProgram.navigateTo("/pages/payPlugin/index?pageUrl=" + encodeURIComponent(t));
					break;
				case r.QuickApp:
					e = {
						des: "m",
						url: t,
						category: "jump"
					},
					o = "openjdlite://virtual?params=" + encodeURIComponent(JSON.stringify(e)),
					window.location.href = o;
					break;
				default:
					cc.sys.openURL(t)
				}
			},
			t.jumpCoupon = function() {
				window.location.href = 'openApp.jdMobile://virtual?params={"category":"jump","des":"mycoupon","sourceValue":"sourceValue_test","sourceType":"sourceType_test"}'
			},
			t.JumpCicle = function() {
				window.location.href = 'openapp.jdmobile://virtual?params={"category":"jump","des":"showfriendlist","jump_source":"jxzpk"}'
			},
			t.CombineUrl = function(t, e) {
				var o = {};
				return o.friendPin = l.userModel.getLkePin(),
				o.qdsource = t,
				o.fxsource = e,
				c.
			default._combURL(this.gameUrl, o)
			},
			t.jdQR = function() {
				console.log("\u8c03\u7528\u4e00\u6b21\u626b\u7801\u5206\u4eab"),
				s.StaticData.jdEve && jdshare.sendDirectShare({
					title: this.title,
					content: this.content,
					url: this.CombineUrl(a.QdSouce.out, a.FXSource.qr),
					img: this.shareImg,
					channel: "QRCode",
					qrparam: {
						top_pic: "\u626b\u4e00\u626bPK",
						mid_pic: this.shareImg,
						slogan: "qr\u5206\u4eab",
						qr_title: this.shareTitle,
						qr_content: this.content,
						qr_direct: this.qrImg
					},
					success: function() {
						console.log("\u626b\u7801\u6210\u529f")
					},
					fail: function() {
						console.log("\u626b\u7801\u5931\u8d25")
					}
				})
			},
			t.commandShare = function() {
				s.StaticData.jdEve && (l.userModel.userInfo.getNickName(), jdshare.callSharePane({
					title: this.title,
					content: "\u4eac\u4eab\u503cPK\u6e38\u620f\u5168\u6c11\u74dc\u52065\u4ebf\u8c46\u6c60\uff0c\u8d5b\u5b63\u51a0\u519b\u53ef\u8c6a\u53d650\u4e07\u4e2a\u4eac\u8c46\uff0c\u8fd8\u7b49\u4ec0\u4e48\uff0c\u5feb\u6765\u63a5\u53d7PK\u6311\u6218\u5427",
					url: this.CombineUrl(a.QdSouce.out, a.FXSource.command),
					img: this.commandImg,
					channel: "Wxfriends,Wxmoments",
					keyparam: {
						url: this.CombineUrl(a.QdSouce.out, a.FXSource.command),
						keyEndTime: this.keyEndTime,
						keyChannel: "Wxfriends,Wxmoments",
						sourceCode: "jxzpk",
						keyImg: this.commandImg,
						keyId: this.activityId,
						keyTitle: "\u4eac\u4eab\u503cPK\u6e38\u620f\u5168\u6c11\u74dc\u52065\u4ebf\u8c46\u6c60\uff0c\u8d5b\u5b63\u51a0\u519b\u53ef\u8c6a\u53d650\u4e07\u4e2a\u4eac\u8c46\uff0c\u8fd8\u7b49\u4ec0\u4e48\uff0c\u5feb\u6765\u63a5\u53d7PK\u6311\u6218\u5427\uff01",
						keyContent: "\u597d\u53cb\u9080\u8bf7\u60a8PK\u4eac\u4eab\u503c@@@@"
					}
				}))
			},
			t.normalShare = function() {
				s.StaticData.jdEve && jdshare.callSharePane({
					title: this.title,
					content: this.content,
					url: this.CombineUrl(a.QdSouce.app, a.FXSource.appShare),
					img: this.shareImg,
					channel: "Wxfriends,Wxmoments"
				})
			},
			t.urlUpdate = function() {
				this.gameUrl = s.StaticData.GAMEEVE == a.GameEve.online ? this.officalUrl: this.url,
				s.StaticData.APPID = s.StaticData.GAMEEVE == a.GameEve.online ? s.StaticData.OFFICALAPPID: s.StaticData.TESTAPPID,
				this.urlType = this.getUrlType()
			},
			t.initialize = function(t) {
				s.StaticData.jdEve = t,
				this.isAndroid = cc.sys.os == cc.sys.OS_ANDROID,
				console.log(">>>>>>>>>>>>>>>>>>", window.location.search),
				s.StaticData.jdEve && (jdshare.setShareInfo({
					title: this.title,
					content: this.content,
					url: this.CombineUrl(a.QdSouce.app, a.FXSource.appShare),
					img: this.shareImg,
					channel: "Wxfriends,Wxmoments",
					callback: null,
					clickcallback: null,
					qrparam: null,
					keyparam: null,
					timeline_title: ""
				}), console.log(this.shareImg))
			},
			t.getLocation = function() {
				s.StaticData.jdEve
			},
			t.delatSource = function() {
				if (s.StaticData.LOCAL_Test && location.href.indexOf("lkEPin") < 0) {
					var t = s.StaticData.GAMEEVE == a.GameEve.online ? "2da769378bfccf6abc310a80d519ca92": "77b1bc6d33f9aa04254be4822c35017d8c99720cb38db47f123b17e1629d4326";
					window.history.pushState({},
					"0", location.href + "?lkEPin=" + t)
				}
				var e = window.location.search,
				o = c.
			default.AnalysisUrl(e);
				if (this.urlParam = o, !o || !o.lkEPin) return console.error("\u767b\u5f55\u5931\u8d25\uff0c\u6ca1\u6709\u83b7\u5f97\u5230pin"),
				void(s.StaticData.LOCAL_Test && (this.loginState = !0));
				if (l.userModel.init(), l.userModel.login(), u.buriedPoint.init(), this.loginState = !0, s.StaticData.isShareJoin = null == this.urlParam.friendPin ? 2 : 1, console.log(location), !s.StaticData.LOCAL_Test) {
					var i = c.
				default.AnalysisUrlShield(location.search, ["lkEPin", "friendPin", "qdsource", "fxsource"]);
					window.history.pushState({},
					"0", location.pathname + i + "&friendPin=" + o.lkEPin),
					console.log(location.href)
				}
				var n = this.urlParam;
				if (n && s.StaticData.GAMEEVE != a.GameEve.test) {
					if (this.urlType != r.WeiXin && jdshare) s.StaticData.qdSouce = a.QdSouce.app,
					s.StaticData.source = n.fxsource ? n.fxsource: a.FXSource.initiative;
					else if (this.urlType == r.WeiXin && (i = c.
				default.AnalysisUrlShield(location.search, []), window.history.pushState({},
					"0", location.pathname + i + "&qdsource=" + a.QdSouce.out + "&fxsource=" + a.FXSource.wxShare), console.log(location.href)), n.fxsource) s.StaticData.qdSouce = a.QdSouce.out,
					s.StaticData.source = n.fxsource;
					else switch (this.urlType) {
					case r.WeiXin:
						s.StaticData.qdSouce = a.QdSouce.out,
						s.StaticData.source = a.FXSource.wxShare;
						break;
					case r.JDApp:
						s.StaticData.qdSouce = a.QdSouce.out,
						s.StaticData.source = a.FXSource.initiative
					}
					console.log(location)
				}
			},
			t.initWX = function() {
				this.urlType == r.WeiXin && wx.hideShareMenu({
					menus: ["shareAppMessage", "shareTimeline"]
				})
			},
			t.saveImg = function() {
				if (s.StaticData.jdEve) {
					var t = {
						imgUrl: this.qrImg,
						callBackName: "saveCallback",
						callBackId: 5
					};
					window.JDAppUnite && window.JDAppUnite.saveImageToPhoteAlbum(JSON.stringify(t)),
					window.saveCallback = function(t) {
						0 == JSON.parse(t).code ? console.log("\u4fdd\u5b58\u6210\u529f") : console.log("\u4fdd\u5b58\u5931\u8d25")
					}
				}
			},
			t.getQrUrl = function() {
				return e.CombineUrl(a.QdSouce.out, a.FXSource.qr)
			},
			t.title = "\u4eac\u4e1c\u2f46\u7ebf",
			t.content = "\u6bcf\u2f47\u4eac\u559c\u597d\u8d27\uff0c\u90fd\u5728\u4eac\u4e1cAPP\uff01",
			t.url = "https://prodev.m.jd.com/mall/active/juiQEUNPxububF5Lriirv3LXon8/index.html",
			t.officalUrl = "https://prodev.m.jd.com/mall/active/45njQg88Vym1s2EGp9aV6cPvqecw/index.html",
			t.shareImg = "https://m.360buyimg.com/n1/s120x120_jfs/t2566/341/1119128176/23675/6356333b/568e3d86Naa36a750.jpg",
			t.commondImg = "https://m.360buyimg.com/n1/s120x120_jfs/t2566/341/1119128176/23675/6356333b/568e3d86Naa36a750.jpg",
			t.flag = a.SeasonState.run,
			t.isAndroid = !0,
			t.commandImg = "https://img30.360buyimg.com/vvipservice/jfs/t1/179210/8/4510/27193/60a1d6b5Ed52b0752/e2948f8009f4923d.jpg",
			t.loginState = !1,
			e = i([h], t)
		} ();
		o.
	default = d,
		cc._RF.pop()
	},
	{
		"../Define/Define": "Define",
		"../Define/StaticData": "StaticData",
		"../Framework/Utils/Utils": "Utils",
		"../Model/UserModel": "UserModel",
		"./BurierdPoint": "BurierdPoint"
	}],
	Prisebox: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "a5173B0azhI2bwSTZVVtMJp", "Prisebox");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../../Framework/UIBase"),
		s = cc._decorator,
		c = s.ccclass,
		l = (s.property,
		function(t) {
			function e() {
				return null !== t && t.apply(this, arguments) || this
			}
			return n(e, t),
			e.prototype.onCloseClick = function() {},
			r([c], e)
		} (a.
	default));
		o.
	default = l,
		cc._RF.pop()
	},
	{
		"../../Framework/UIBase": "UIBase"
	}],
	Priseview: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "08b5bpzLdtPTbvnZ/RW2SwG", "Priseview");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../../Framework/UIBase"),
		s = t("./SingleAwardItem"),
		c = cc._decorator,
		l = c.ccclass,
		u = c.property,
		p = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.labTitle = null,
				e.awards = [],
				e
			}
			return n(e, t),
			e.prototype.onOpen = function(t, e) {
				this.rewards = e.data.rewards,
				this.isReceive = e.isReceive,
				this.updatePanelShow()
			},
			e.prototype.updatePanelShow = function() {
				this.isReceive ? this.labTitle.string = "\u201c\u606d\u559c\uff0c\u60a8\u5df2\u7ecf\u83b7\u5f97\u5956\u52b1\u201d": this.labTitle.string = "\u201c\u52a0\u6cb9\uff0c\u60a8\u5c06\u8981\u83b7\u5f97\u4ee5\u4e0b\u5956\u52b1\u201d";
				for (var t = 0; t < this.awards.length; t++) {
					var e = this.rewards[t];
					this.awards[t].init(e)
				}
			},
			r([u(cc.Label)], e.prototype, "labTitle", void 0),
			r([u({
				type: [s.
			default]
			})], e.prototype, "awards", void 0),
			r([l], e)
		} (a.
	default);
		o.
	default = p,
		cc._RF.pop()
	},
	{
		"../../Framework/UIBase": "UIBase",
		"./SingleAwardItem": "SingleAwardItem"
	}],
	QRShare: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "49f3buzCP1F0rDAfsjdKf01", "QRShare");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../../Framework/UI/UIMgr"),
		s = t("../../Framework/UIBase"),
		c = t("../../Platforms/Platform"),
		l = cc._decorator,
		u = l.ccclass,
		p = l.property,
		h = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.camera = null,
				e.btnSave = null,
				e.btnClose = null,
				e.bg = null,
				e.mask = null,
				e
			}
			return n(e, t),
			e.prototype.onOpenAniOver = function() {
				null == c.
			default.qrImg ? (this.initParam(), this.screenShotInit()) : c.
			default.jdQR()
			},
			e.prototype.onOpenFinish = function() {
				c.
			default.isAndroid || this.close()
			},
			e.prototype.initParam = function() {
				var t = new cc.RenderTexture;
				t.initWithSize(a.
			default.inst.getCanvasSize().width / 1.5, a.
			default.inst.getCanvasSize().height / 2.5),
				this.camera.targetTexture = t,
				this.camera.alignWithScreen = !1,
				this.camera.orthoSize = 420,
				this.texture = t
			},
			e.prototype.screenShot = function() {
				this.btnClose.active = !1,
				this.btnSave.active = !1;
				var t = this.createCanvas();
				c.
			default.qrImg = t
			},
			e.prototype.screenShotInit = function() {
				c.
			default.isAndroid ? this.mask.active = !1 : (this.bg.active = !1, this.screenShot(), c.
			default.jdQR())
			},
			e.prototype.saveScreenShoot = function() {
				this.screenShot(),
				this.btnClose.active = !0,
				this.btnSave.active = !0;
				for (var t = document.createElement("a"), e = c.
			default.qrImg.split(";base64,"), o = e[0].split(":")[1], i = window.atob(e[1]), n = i.length, r = new Uint8Array(n), a = 0; a < n; ++a) r[a] = i.charCodeAt(a);
				var s = new Blob([r], {
					type: o
				});
				document.createEvent("MouseEvents").initEvent("click", !1, !1),
				t.download = "OpenFaceImage",
				t.href = URL.createObjectURL(s),
				t.click()
			},
			e.prototype.createCanvas = function() {
				var t = this.texture.width,
				e = this.texture.height;
				this._canvas ? this.clearCanvas() : (this._canvas = document.createElement("canvas"), this._canvas.width = t, this._canvas.height = e);
				var o = this._canvas.getContext("2d");
				this.camera.render();
				for (var i = this.texture.readPixels(null, 0, 0, a.
			default.inst.getCanvasSize().width / 1.5, a.
			default.inst.getCanvasSize().height / 2.5), n = 4 * t, r = 0; r < e; r++) {
					for (var s = e - 1 - r,
					c = o.createImageData(t, 1), l = s * t * 4, u = 0; u < n; u++) c.data[u] = i[l + u];
					o.putImageData(c, 0, r)
				}
				return this._canvas.toDataURL("image/jpg")
			},
			e.prototype.clearCanvas = function() {
				this._canvas.getContext("2d").clearRect(0, 0, this._canvas.width, this._canvas.height)
			},
			r([p(cc.Camera)], e.prototype, "camera", void 0),
			r([p(cc.Node)], e.prototype, "btnSave", void 0),
			r([p(cc.Node)], e.prototype, "btnClose", void 0),
			r([p(cc.Node)], e.prototype, "bg", void 0),
			r([p(cc.Node)], e.prototype, "mask", void 0),
			r([u], e)
		} (s.
	default);
		o.
	default = h,
		cc._RF.pop()
	},
	{
		"../../Framework/UI/UIMgr": "UIMgr",
		"../../Framework/UIBase": "UIBase",
		"../../Platforms/Platform": "Platform"
	}],
	QrNode: [function(t, e) {
		"use strict";
		cc._RF.push(e, "8ff51Yqv3xEO6ysDrQieiDm", "QrNode");
		var o = t("../../Platforms/Platform").
	default;
		cc.Class({
			extends:
			cc.Component,
			properties: {},
			onLoad: function() {
				this.makeQrCode(o.getQrUrl())
			},
			makeQrCode: function(t) {
				var e = new QRCode( - 1, QRErrorCorrectLevel.H);
				e.addData(t),
				e.make();
				var o = this.node.getComponent(cc.Graphics);
				o.fillColor = cc.Color.BLACK;
				for (var i = this.node.width / e.getModuleCount(), n = this.node.height / e.getModuleCount(), r = 0; r < e.getModuleCount(); r++) for (var a = 0; a < e.getModuleCount(); a++) {
					if (e.isDark(r, a)) {
						var s = Math.ceil((a + 1) * i) - Math.floor(a * i),
						c = Math.ceil((r + 1) * i) - Math.floor(r * i);
						o.rect(Math.round(a * i), Math.round(r * n), s, c),
						o.fill()
					}
					s = Math.ceil((a + 1) * i) - Math.floor(a * i)
				}
			}
		}),
		cc._RF.pop()
	},
	{
		"../../Platforms/Platform": "Platform"
	}],
	RTAudioSource: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "1378dnyNdxDrbh1Air/ErR0", "RTAudioSource");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.RTAudioSourceType = void 0;
		var a, s = t("./RTAudioSoureMgr"),
		c = cc._decorator,
		l = c.ccclass,
		u = c.property; (function(t) {
			t[t.Effect = 0] = "Effect",
			t[t.Music = 1] = "Music"
		})(a = o.RTAudioSourceType || (o.RTAudioSourceType = {}));
		var p = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.audioType = a.Effect,
				e
			}
			return n(e, t),
			e.prototype.onEnable = function() {
				t.prototype.onEnable.call(this),
				s.
			default.inst.registerAudio(this)
			},
			e.prototype.onDisable = function() {
				t.prototype.onDisable.call(this),
				s.
			default.inst.unregisterAudio(this)
			},
			r([u({
				type: cc.Enum(a)
			})], e.prototype, "audioType", void 0),
			r([l], e)
		} (cc.AudioSource);
		o.
	default = p,
		cc._RF.pop()
	},
	{
		"./RTAudioSoureMgr": "RTAudioSoureMgr"
	}],
	RTAudioSoureMgr: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "bc7132deVhPbYym2qNBl0pA", "RTAudioSoureMgr");
		var i = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var n = t("./RTAudioSource"),
		r = t("../Storage/LocalStorageMgr"),
		a = t("../../Define/LocalKey"),
		s = cc._decorator,
		c = s.ccclass,
		l = (s.property,
		function() {
			function t() {
				this._allAudios = [],
				this._audioVolum = new Map,
				this._audioSwitch = new Map
			}
			var e;
			return e = t,
			Object.defineProperty(t, "inst", {
				get: function() {
					return this._inst || (this._inst = new e),
					this._inst
				},
				enumerable: !1,
				configurable: !0
			}),
			t.prototype.init = function() {
				var t = r.LocalStorageMgr.getItem(a.LocalKey.AudioVolumeEffect, !0);
				t && this._audioVolum.set(n.RTAudioSourceType.Effect, parseInt(t));
				var e = r.LocalStorageMgr.getItem(a.LocalKey.AudioVolumeEffectMute, !0);
				e && this._audioSwitch.set(n.RTAudioSourceType.Effect, "yes" == e);
				var o = r.LocalStorageMgr.getItem(a.LocalKey.AudioVolumeMusic, !0);
				o && this._audioVolum.set(n.RTAudioSourceType.Music, parseInt(o));
				var i = r.LocalStorageMgr.getItem(a.LocalKey.AudioVolumeMusicMute, !0);
				i && this._audioSwitch.set(n.RTAudioSourceType.Music, "yes" == i)
			},
			t.prototype.registerAudio = function(t) {
				this._allAudios.push(t);
				var e = this._audioVolum.get(t.audioType);
				e && (t.volume = e);
				var o = this._audioSwitch.get(t.audioType);
				this._muteOne(t, o)
			},
			t.prototype.unregisterAudio = function(t) {
				for (var e = 0; e < this._allAudios.length; ++e) if (this._allAudios[e] == t) {
					this._allAudios.splice(e, 1);
					break
				}
			},
			t.prototype.setMusicVolume = function(t, e) {
				void 0 === e && (e = !1),
				this._setVolume(t, n.RTAudioSourceType.Music),
				this._audioVolum.set(n.RTAudioSourceType.Music, t),
				e && r.LocalStorageMgr.setItem(a.LocalKey.AudioVolumeMusic, t.toString(), !0)
			},
			t.prototype.setEffectVolume = function(t, e) {
				void 0 === e && (e = !1),
				this._setVolume(t, n.RTAudioSourceType.Effect),
				this._audioVolum.set(n.RTAudioSourceType.Effect, t),
				e && r.LocalStorageMgr.setItem(a.LocalKey.AudioVolumeEffect, t.toString(), !0)
			},
			t.prototype.muteAllMusic = function(t, e) {
				void 0 === e && (e = !1),
				this._audioSwitch.set(n.RTAudioSourceType.Music, t),
				this._mute(n.RTAudioSourceType.Music, t),
				e && r.LocalStorageMgr.setItem(a.LocalKey.AudioVolumeMusicMute, t ? "yes": "no", !0)
			},
			t.prototype.muteAllEffect = function(t, e) {
				void 0 === e && (e = !1),
				this._audioSwitch.set(n.RTAudioSourceType.Effect, t),
				this._mute(n.RTAudioSourceType.Effect, t),
				e && r.LocalStorageMgr.setItem(a.LocalKey.AudioVolumeEffectMute, t ? "yes": "no", !0)
			},
			t.prototype.isMusicMute = function() {
				return this._audioSwitch.get(n.RTAudioSourceType.Music)
			},
			t.prototype.isEffectMute = function() {
				return this._audioSwitch.get(n.RTAudioSourceType.Effect)
			},
			t.prototype._mute = function(t, e) {
				for (var o = 0; o < this._allAudios.length; ++o) {
					var i = this._allAudios[o];
					i.audioType == t && this._muteOne(i, e)
				}
			},
			t.prototype._muteOne = function(t, e) {
				t.mute = e
			},
			t.prototype._setVolume = function(t, e) {
				for (var o = 0; o < this._allAudios.length; ++o) {
					var i = this._allAudios[o];
					i.audioType == e && (i.volume = t)
				}
			},
			t._inst = null,
			e = i([c], t)
		} ());
		o.
	default = l,
		cc._RF.pop()
	},
	{
		"../../Define/LocalKey": "LocalKey",
		"../Storage/LocalStorageMgr": "LocalStorageMgr",
		"./RTAudioSource": "RTAudioSource"
	}],
	RTClickSound: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "caba7HY5jlCWLIBShSn3MVf", "RTClickSound");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("./RTAudioSoureMgr"),
		s = cc._decorator,
		c = s.ccclass,
		l = s.property,
		u = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.soundEffect = null,
				e.soundVolume = 1,
				e
			}
			return n(e, t),
			e.prototype.onEnable = function() {
				this.node.on(cc.Node.EventType.TOUCH_END, this.onTouch, this)
			},
			e.prototype.onDisable = function() {
				this.node.off(cc.Node.EventType.TOUCH_END, this.onTouch, this)
			},
			e.prototype.onTouch = function() {
				a.
			default.inst.isEffectMute() || cc.audioEngine.play(this.soundEffect, !1, this.soundVolume)
			},
			r([l(cc.AudioClip)], e.prototype, "soundEffect", void 0),
			r([l({
				slide: !0,
				min: 0,
				max: 1,
				step: .1
			})], e.prototype, "soundVolume", void 0),
			r([c], e)
		} (cc.Component);
		o.
	default = u,
		cc._RF.pop()
	},
	{
		"./RTAudioSoureMgr": "RTAudioSoureMgr"
	}],
	RTCounter: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "a027839ygVDpKYSwXWNX7Ht", "RTCounter"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.RTCounter = void 0;
		var i = function() {
			function t(t, e, o) {
				this._id = t,
				this._opts = e || {},
				this._value = 0,
				this._total = 0,
				this._averageValue = 0,
				this._accumValue = 0,
				this._accumSamples = 0,
				this._accumStart = o
			}
			return Object.defineProperty(t.prototype, "value", {
				get: function() {
					return this._value
				},
				set: function(t) {
					this._value = t
				},
				enumerable: !1,
				configurable: !0
			}),
			t.prototype._average = function(t, e) {
				if (this._opts.average) {
					this._accumValue += t,
					++this._accumSamples;
					var o = e;
					o - this._accumStart >= this._opts.average && (this._averageValue = this._accumValue / this._accumSamples, this._accumValue = 0, this._accumStart = o, this._accumSamples = 0)
				}
			},
			t.prototype.sample = function(t) {
				this._average(this._value, t)
			},
			t.prototype.human = function() {
				var t = this._opts.average ? this._averageValue: this._value;
				return Math.round(100 * t) / 100
			},
			t.prototype.alarm = function() {
				return this._opts.below && this._value < this._opts.below || this._opts.over && this._value > this._opts.over
			},
			t
		} ();
		o.RTCounter = i,
		cc._RF.pop()
	},
	{}],
	RTParticle: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "4c021JNUotHBLc+U4/PSjJt", "RTParticle"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		o.
	default = function() {
			this.pos = cc.v2(0, 0),
			this.startPos = cc.v2(0, 0),
			this.color = cc.color(0, 0, 0, 255),
			this.deltaColor = {
				r: 0,
				g: 0,
				b: 0,
				a: 255
			},
			this.size = 0,
			this.deltaSize = 0,
			this.rotation = 0,
			this.deltaRotation = 0,
			this.timeToLive = 0,
			this.totalLiveTime = 0,
			this.drawPos = cc.v2(0, 0),
			this.aspectRatio = 1,
			this.dir = cc.v2(0, 0),
			this.radialAccel = 0,
			this.tangentialAccel = 0,
			this.angle = 0,
			this.degreesPerSecond = 0,
			this.radius = 0,
			this.deltaRadius = 0,
			this.frameIndex = 0,
			this.randomSeed = 0,
			this.pos = cc.v2(0, 0),
			this.startPos = cc.v2(0, 0),
			this.color = cc.color(0, 0, 0, 255),
			this.deltaColor = {
				r: 0,
				g: 0,
				b: 0,
				a: 255
			},
			this.size = 0,
			this.deltaSize = 0,
			this.rotation = 0,
			this.deltaRotation = 0,
			this.timeToLive = 0,
			this.drawPos = cc.v2(0, 0),
			this.aspectRatio = 1,
			this.dir = cc.v2(0, 0),
			this.radialAccel = 0,
			this.tangentialAccel = 0,
			this.angle = 0,
			this.degreesPerSecond = 0,
			this.radius = 0,
			this.deltaRadius = 0,
			this.totalLiveTime = 0,
			this.frameIndex = 0,
			this.randomSeed = 0
		},
		cc._RF.pop()
	},
	{}],
	RTPerfCounter: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "b31968r36JPuogyH2DlwdDB", "RTPerfCounter");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		});
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.RTPerfCounter = void 0;
		var r = function(t) {
			function e(e, o, i) {
				var n = t.call(this, e, o, i) || this;
				return n._time = i,
				n
			}
			return n(e, t),
			e.prototype.start = function(t) {
				this._time = t
			},
			e.prototype.end = function(t) {
				this._value = t - this._time,
				this._average(this._value)
			},
			e.prototype.tick = function() {
				this.end(),
				this.start()
			},
			e.prototype.frame = function(t) {
				var e = t,
				o = e - this._time;
				this._total++,
				o > (this._opts.average || 1e3) && (this._value = 1e3 * this._total / o, this._total = 0, this._time = e, this._average(this._value))
			},
			e
		} (t("./RTCounter").RTCounter);
		o.RTPerfCounter = r,
		cc._RF.pop()
	},
	{
		"./RTCounter": "RTCounter"
	}],
	RTProfiler: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "51f33iRx7xNYr2CcAtx/9x0", "RTProfiler"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.RTProfiler = void 0;
		var i = t("./RTPerfCounter"),
		n = !1,
		r = 25,
		a = null,
		s = null,
		c = null;
		function l() {
			if (!a) {
				a = {
					frame: {
						desc: "Frame time (ms)",
						min: 0,
						max: 50,
						average: 500
					},
					fps: {
						desc: "Framerate (FPS)",
						below: 30,
						average: 500
					},
					draws: {
						desc: "Draw call"
					},
					logic: {
						desc: "Game Logic (ms)",
						min: 0,
						max: 50,
						average: 500
					},
					render: {
						desc: "Renderer (ms)",
						min: 0,
						max: 50,
						average: 500
					},
					mode: {
						desc: cc.game.renderType === cc.game.RENDER_TYPE_WEBGL ? "WebGL": "Canvas",
						min: 1
					}
				};
				var t = performance.now();
				for (var e in a) a[e]._counter = new i.RTPerfCounter(e, a[e], t)
			}
		}
		function u() {
			if (!s || !s.isValid) { (s = new cc.Node("PROFILER-NODE")).x = s.y = 10,
				s.groupIndex = cc.Node.BuiltinGroupIndex.DEBUG,
				cc.Camera._setupDebugCamera(),
				s.zIndex = Math.pow(2, 15) - 1,
				cc.game.addPersistRootNode(s);
				var t = new cc.Node("LEFT-PANEL");
				t.anchorX = t.anchorY = 0;
				var e = t.addComponent(cc.Label);
				e.fontSize = r,
				e.lineHeight = r,
				e.enableBold = !0,
				t.color = cc.Color.RED,
				t.parent = s;
				var o = new cc.Node("RIGHT-PANEL");
				o.anchorX = 1,
				o.anchorY = 0,
				o.x = 300;
				var i = o.addComponent(cc.Label);
				i.horizontalAlign = cc.Label.HorizontalAlign.RIGHT,
				i.fontSize = r,
				i.lineHeight = r,
				i.enableBold = !0,
				o.color = cc.Color.RED,
				o.parent = s,
				cc.sys.platform !== cc.sys.BAIDU_GAME_SUB && cc.sys.platform !== cc.sys.WECHAT_GAME_SUB && (e.cacheMode = cc.Label.CacheMode.CHAR, i.cacheMode = cc.Label.CacheMode.CHAR),
				c = {
					left: e,
					right: i
				}
			}
		}
		function p() {
			u();
			var t = cc.director._lastUpdate;
			a.frame._counter.start(t),
			a.logic._counter.start(t)
		}
		function h() {
			var t = performance.now();
			cc.director.isPaused() ? a.frame._counter.start(t) : a.logic._counter.end(t),
			a.render._counter.start(t)
		}
		function d() {
			var t = performance.now();
			a.render._counter.end(t),
			a.draws._counter.value = cc.renderer.drawCalls,
			a.frame._counter.end(t),
			a.fps._counter.frame(t);
			var e = "",
			o = "";
			for (var i in a) {
				var n = a[i];
				n._counter.sample(t),
				e += n.desc + "\n",
				o += n._counter.human() + "\n"
			}
			c && (c.left.string = e, c.right.string = o)
		}
		var f = function() {
			function t() {}
			return t.isShowingStats = function() {
				return n
			},
			t.hideStats = function() {
				n && (s && (s.active = !1), cc.director.off(cc.Director.EVENT_BEFORE_UPDATE, p), cc.director.off(cc.Director.EVENT_AFTER_UPDATE, h), cc.director.off(cc.Director.EVENT_AFTER_DRAW, d), n = !1)
			},
			t.showStats = function() {
				n || (l(), s && (s.active = !0), cc.director.on(cc.Director.EVENT_BEFORE_UPDATE, p), cc.director.on(cc.Director.EVENT_AFTER_UPDATE, h), cc.director.on(cc.Director.EVENT_AFTER_DRAW, d), n = !0)
			},
			t.isDisplayStats = function() {
				return this.isShowingStats()
			},
			t.setDisplayStats = function(t) {
				cc.game.renderType !== cc.game.RENDER_TYPE_CANVAS && (t ? this.showStats() : this.hideStats()),
				cc.debug.setDisplayStats(!1)
			},
			t
		} ();
		o.RTProfiler = f,
		cc._RF.pop()
	},
	{
		"./RTPerfCounter": "RTPerfCounter"
	}],
	RTSimulator: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "d1472p/t/JMy6YR5zO6jiOW", "RTSimulator"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var i = t("./RTParticle"),
		n = cc.v2(0, 0),
		r = cc.v2(),
		a = cc.v2(),
		s = cc.v2(),
		c = cc.v2(),
		l = new cc.js.Pool(function(t) {
			t.pos.set(n),
			t.startPos.set(n),
			t.color._val = 4278190080,
			t.deltaColor.r = t.deltaColor.g = t.deltaColor.b = 0,
			t.deltaColor.a = 255,
			t.size = 0,
			t.deltaSize = 0,
			t.rotation = 0,
			t.deltaRotation = 0,
			t.timeToLive = 0,
			t.drawPos.set(n),
			t.aspectRatio = 1,
			t.dir.set(n),
			t.radialAccel = 0,
			t.tangentialAccel = 0,
			t.angle = 0,
			t.degreesPerSecond = 0,
			t.radius = 0,
			t.deltaRadius = 0
		},
		1024);
		l.get = function() {
			return this._get() || new i.
		default
		};
		var u = function() {
			function t(t) {
				this.sys = t,
				this.particles = [],
				this.active = !1,
				this.readyToPlay = !0,
				this.finished = !1,
				this.elapsed = 0,
				this.emitCounter = 0,
				this._uvFilled = 0,
				this._worldRotation = 0
			}
			return t.prototype.stop = function() {
				this.active = !1,
				this.readyToPlay = !1,
				this.elapsed = this.sys.duration,
				this.emitCounter = 0
			},
			t.prototype.reset = function() {
				this.active = !0,
				this.readyToPlay = !0,
				this.elapsed = 0,
				this.emitCounter = 0,
				this.finished = !1;
				for (var t = this.particles,
				e = 0; e < t.length; ++e) l.put(t[e]);
				t.length = 0
			},
			t.prototype.emitParticle = function(t) {
				var e = this.sys,
				o = cc.misc.clampf,
				i = l.get();
				this.particles.push(i),
				e.textureAnimationModule.init(i),
				i.randomSeed = this.randomRangeInt(0, 233280),
				i.timeToLive = e.life + e.lifeVar * (Math.random() - .5) * 2;
				var n, r, a, s, c = i.totalLiveTime = i.timeToLive = Math.max(0, i.timeToLive);
				i.pos.x = e.sourcePos.x + e.posVar.x * (Math.random() - .5) * 2,
				i.pos.y = e.sourcePos.y + e.posVar.y * (Math.random() - .5) * 2;
				var u = e._startColor,
				p = e._startColorVar,
				h = e._endColor,
				d = e._endColorVar;
				i.color.r = n = o(u.r + p.r * (Math.random() - .5) * 2, 0, 255),
				i.color.g = r = o(u.g + p.g * (Math.random() - .5) * 2, 0, 255),
				i.color.b = a = o(u.b + p.b * (Math.random() - .5) * 2, 0, 255),
				i.color.a = s = o(u.a + p.a * (Math.random() - .5) * 2, 0, 255),
				i.deltaColor.r = (o(h.r + d.r * (Math.random() - .5) * 2, 0, 255) - n) / c,
				i.deltaColor.g = (o(h.g + d.g * (Math.random() - .5) * 2, 0, 255) - r) / c,
				i.deltaColor.b = (o(h.b + d.b * (Math.random() - .5) * 2, 0, 255) - a) / c,
				i.deltaColor.a = (o(h.a + d.a * (Math.random() - .5) * 2, 0, 255) - s) / c;
				var f = e.startSize + e.startSizeVar * (Math.random() - .5) * 2;
				if (f = Math.max(0, f), i.size = f, e.endSize === cc.ParticleSystem.START_SIZE_EQUAL_TO_END_SIZE) i.deltaSize = 0;
				else {
					var _ = e.endSize + e.endSizeVar * (Math.random() - .5) * 2;
					_ = Math.max(0, _),
					i.deltaSize = (_ - f) / c
				}
				var y = e.startSpin + e.startSpinVar * (Math.random() - .5) * 2,
				v = e.endSpin + e.endSpinVar * (Math.random() - .5) * 2;
				i.rotation = y,
				i.deltaRotation = (v - y) / c,
				i.startPos.x = t.x,
				i.startPos.y = t.y,
				i.aspectRatio = e._aspectRatio || 1;
				var m = cc.misc.degreesToRadians(e.angle + this._worldRotation + e.angleVar * (Math.random() - .5) * 2);
				if (e.emitterMode === cc.ParticleSystem.EmitterMode.GRAVITY) {
					var g = e.speed + e.speedVar * (Math.random() - .5) * 2;
					i.dir.x = Math.cos(m),
					i.dir.y = Math.sin(m),
					i.dir.mulSelf(g),
					i.radialAccel = e.radialAccel + e.radialAccelVar * (Math.random() - .5) * 2,
					i.tangentialAccel = e.tangentialAccel + e.tangentialAccelVar * (Math.random() - .5) * 2,
					e.rotationIsDir && (i.rotation = -cc.misc.radiansToDegrees(Math.atan2(i.dir.y, i.dir.x)))
				} else {
					var b = e.startRadius + e.startRadiusVar * (Math.random() - .5) * 2,
					w = e.endRadius + e.endRadiusVar * (Math.random() - .5) * 2;
					i.radius = b,
					i.deltaRadius = e.endRadius === cc.ParticleSystem.START_RADIUS_EQUAL_TO_END_RADIUS ? 0 : (w - b) / c,
					i.angle = m,
					i.degreesPerSecond = cc.misc.degreesToRadians(e.rotatePerS + e.rotatePerSVar * (Math.random() - .5) * 2)
				}
			},
			t.prototype.getWorldRotation = function(t) {
				for (var e = 0,
				o = t; o;) e += o.angle,
				o = o.parent;
				return e
			},
			t.prototype.updateUVs = function(t) {
				var e = this.sys._assembler;
				if (e) {
					var o = e.getBuffer();
					if (o && this.sys._renderSpriteFrame) {
						for (var i = 4 * e._vfmt._bytes / 4,
						n = o._vData,
						r = this.sys._renderSpriteFrame.uv,
						a = r[4], s = r[5], c = r[2] - r[4], l = r[3] - r[5], u = this.sys.textureAnimationModule.numTilesX, p = c / u, h = l / this.sys.textureAnimationModule.numTilesY, d = t ? 0 : this._uvFilled, f = this.particles.length, _ = d; _ < f; _++) {
							var y = this.particles[_],
							v = _ * i;
							this._updateBuffUV(n, v, y, a, s, p, h, u)
						}
						this._uvFilled = f
					}
				}
			},
			t.prototype.updatePUVs = function(t) {
				var e = this.sys._assembler;
				if (e) {
					var o = e.getBuffer();
					if (o && this.sys._renderSpriteFrame) {
						var i = 4 * e._vfmt._bytes / 4,
						n = o._vData,
						r = this.sys._renderSpriteFrame.uv,
						a = r[4],
						s = r[5],
						c = r[2] - r[4],
						l = r[3] - r[5],
						u = this.sys.textureAnimationModule.numTilesX,
						p = c / u,
						h = l / this.sys.textureAnimationModule.numTilesY,
						d = this.particles[t],
						f = t * i;
						this._updateBuffUV(n, f, d, a, s, p, h, u)
					}
				}
			},
			t.prototype._updateBuffUV = function(t, e, o, i, n, r, a, s) {
				t[e + 2] = i + o.frameIndex % s * r,
				t[e + 3] = n + Math.floor(o.frameIndex / s) * a + a,
				t[e + 7] = i + o.frameIndex % s * r + r,
				t[e + 8] = n + Math.floor(o.frameIndex / s) * a + a,
				t[e + 12] = i + o.frameIndex % s * r,
				t[e + 13] = n + Math.floor(o.frameIndex / s) * a,
				t[e + 17] = i + o.frameIndex % s * r + r,
				t[e + 18] = n + Math.floor(o.frameIndex / s) * a
			},
			t.prototype.updateParticleBuffer = function(t, e, o, i) {
				var n = o._vData,
				r = o._uintVData,
				a = e.x,
				s = e.y,
				c = t.size,
				l = c,
				u = t.aspectRatio;
				u > 1 ? l = c / u: c = l * u;
				var p = c / 2,
				h = l / 2;
				if (t.rotation) {
					var d = -p,
					f = -h,
					_ = p,
					y = h,
					v = -cc.misc.degreesToRadians(t.rotation),
					m = Math.cos(v),
					g = Math.sin(v);
					n[i] = d * m - f * g + a,
					n[i + 1] = d * g + f * m + s,
					n[i + 5] = _ * m - f * g + a,
					n[i + 6] = _ * g + f * m + s,
					n[i + 10] = d * m - y * g + a,
					n[i + 11] = d * g + y * m + s,
					n[i + 15] = _ * m - y * g + a,
					n[i + 16] = _ * g + y * m + s
				} else n[i] = a - p,
				n[i + 1] = s - h,
				n[i + 5] = a + p,
				n[i + 6] = s - h,
				n[i + 10] = a - p,
				n[i + 11] = s + h,
				n[i + 15] = a + p,
				n[i + 16] = s + h;
				r[i + 4] = t.color._val,
				r[i + 9] = t.color._val,
				r[i + 14] = t.color._val,
				r[i + 19] = t.color._val
			},
			t.prototype.step = function(t) {
				t = t > cc.director._maxParticleDeltaTime ? cc.director._maxParticleDeltaTime: t;
				var e = this.sys,
				o = e.node,
				i = this.particles,
				n = 4 * this.sys._assembler._vfmt._bytes / 4,
				u = cc.ParticleSystem.PositionType;
				if (o._updateWorldMatrix(), e.positionType === u.FREE) {
					this._worldRotation = this.getWorldRotation(o);
					var p = o._worldMatrix.m;
					r.x = p[12],
					r.y = p[13]
				} else e.positionType === u.RELATIVE ? (this._worldRotation = o.angle, r.x = o.x, r.y = o.y) : this._worldRotation = 0;
				if (this.active && e.emissionRate) {
					var h = 1 / e.emissionRate;
					for (i.length < e.totalParticles && (this.emitCounter += t); i.length < e.totalParticles && this.emitCounter > h;) this.emitParticle(r),
					this.emitCounter -= h;
					this.elapsed += t,
					-1 !== e.duration && e.duration < this.elapsed && e.stopSystem()
				}
				var d = e._assembler.getBuffer(),
				f = i.length;
				d.reset(),
				d.request(4 * f, 6 * f),
				f > this._uvFilled && this.updateUVs();
				for (var _ = 0; _ < i.length;) {
					a.x = a.y = s.x = s.y = c.x = c.y = 0;
					var y = i[_];
					if (y.timeToLive -= t, y.timeToLive > 0) {
						if (e.emitterMode === cc.ParticleSystem.EmitterMode.GRAVITY) {
							var v = c,
							m = a,
							g = s; (y.pos.x || y.pos.y) && (m.set(y.pos), m.normalizeSelf()),
							g.set(m),
							m.mulSelf(y.radialAccel);
							var b = g.x;
							g.x = -g.y,
							g.y = b,
							g.mulSelf(y.tangentialAccel),
							v.set(m),
							v.addSelf(g),
							v.addSelf(e.gravity),
							v.mulSelf(t),
							y.dir.addSelf(v),
							v.set(y.dir),
							v.mulSelf(t),
							y.pos.addSelf(v)
						} else y.angle += y.degreesPerSecond * t,
						y.radius += y.deltaRadius * t,
						y.pos.x = -Math.cos(y.angle) * y.radius,
						y.pos.y = -Math.sin(y.angle) * y.radius;
						y.color.r += y.deltaColor.r * t,
						y.color.g += y.deltaColor.g * t,
						y.color.b += y.deltaColor.b * t,
						y.color.a += y.deltaColor.a * t,
						y.size += y.deltaSize * t,
						y.size < 0 && (y.size = 0),
						y.rotation += y.deltaRotation * t;
						var w = a;
						w.set(y.pos),
						e.positionType !== u.GROUPED && w.addSelf(y.startPos);
						var I = n * _;
						this.updateParticleBuffer(y, w, d, I);
						var T = y.frameIndex;
						e.textureAnimationModule.animate(y),
						T != y.frameIndex && this.updatePUVs(_),
						++_
					} else {
						var P = i[_];
						_ !== i.length - 1 && (i[_] = i[i.length - 1]),
						l.put(P),
						i.length--
					}
				}
				e._assembler._ia._count = 6 * i.length,
				i.length > 0 ? d.uploadData() : this.active || this.readyToPlay || (this.finished = !0, e._finishedSimulation())
			},
			t.prototype.randomRange = function(t, e) {
				return Math.random() * (e - t) + t
			},
			t.prototype.randomRangeInt = function(t, e) {
				return Math.floor(this.randomRange(t, e))
			},
			t
		} ();
		o.
	default = u,
		cc._RF.pop()
	},
	{
		"./RTParticle": "RTParticle"
	}],
	RTTextureAnimation: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "89fefYOwApN3YDfRFyWd9HB", "RTTextureAnimation");
		var i = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var n = cc._decorator,
		r = n.ccclass,
		a = n.property,
		s = (n.disallowMultiple, cc.Enum({
			Grid: 0
		}), cc.Enum({
			WholeSheet: 0,
			SingleRow: 1
		}),
		function() {
			function t() {
				this.numTilesX = 0,
				this.numTilesY = 0
			}
			return t.prototype.onInit = function() {},
			t.prototype.init = function() {},
			t.prototype.animate = function(t) {
				t.frameIndex = Math.floor(t.timeToLive / t.totalLiveTime * (this.numTilesX * this.numTilesY - 1))
			},
			t.prototype.pseudoRandom = function(t) {
				return (t = (9301 * t + 49297) % 233280) / 233280
			},
			i([a()], t.prototype, "numTilesX", void 0),
			i([a()], t.prototype, "numTilesY", void 0),
			i([r("RTTextureAnimation")], t)
		} ());
		o.
	default = s,
		cc._RF.pop()
	},
	{}],
	RTTextureParticleSystem: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "013128OjPZMyIZ1icYTSvf0", "RTTextureParticleSystem");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("./RTSimulator"),
		s = t("./RTTextureAnimation"),
		c = cc._decorator,
		l = c.ccclass,
		u = c.property,
		p = c.executeInEditMode,
		h = c.disallowMultiple,
		d = c.executionOrder,
		f = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e._textureAnimationModule = new s.
			default,
				e
			}
			return n(e, t),
			Object.defineProperty(e.prototype, "textureAnimationModule", {
				get: function() {
					return this._textureAnimationModule
				},
				set: function(t) {
					this._textureAnimationModule = t,
					this._textureAnimationModule.onInit()
				},
				enumerable: !1,
				configurable: !0
			}),
			e.prototype.initProperties = function() {
				t.prototype.initProperties.call(this),
				this._custom = !0,
				this._simulator = new a.
			default(this)
			},
			r([u], e.prototype, "_textureAnimationModule", void 0),
			r([u({
				type: s.
			default,
				animatable: !1
			})], e.prototype, "textureAnimationModule", null),
			r([l, p, h, d(99)], e)
		} (cc.ParticleSystem);
		o.
	default = f,
		cc._RF.pop()
	},
	{
		"./RTSimulator": "RTSimulator",
		"./RTTextureAnimation": "RTTextureAnimation"
	}],
	RecommendCtrl: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "989eclVT05LPbDJEoDZQLGW", "RecommendCtrl");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		},
		a = this && this.__awaiter ||
		function(t, e, o, i) {
			return new(o || (o = Promise))(function(n, r) {
				function a(t) {
					try {
						c(i.next(t))
					} catch(e) {
						r(e)
					}
				}
				function s(t) {
					try {
						c(i.
						throw (t))
					} catch(e) {
						r(e)
					}
				}
				function c(t) {
					var e;
					t.done ? n(t.value) : (e = t.value, e instanceof o ? e: new o(function(t) {
						t(e)
					})).then(a, s)
				}
				c((i = i.apply(t, e || [])).next())
			})
		},
		s = this && this.__generator ||
		function(t, e) {
			var o, i, n, r, a = {
				label: 0,
				sent: function() {
					if (1 & n[0]) throw n[1];
					return n[1]
				},
				trys: [],
				ops: []
			};
			return r = {
				next: s(0),
				throw: s(1),
				return: s(2)
			},
			"function" == typeof Symbol && (r[Symbol.iterator] = function() {
				return this
			}),
			r;
			function s(t) {
				return function(e) {
					return c([t, e])
				}
			}
			function c(r) {
				if (o) throw new TypeError("Generator is already executing.");
				for (; a;) try {
					if (o = 1, i && (n = 2 & r[0] ? i.
					return: r[0] ? i.
					throw || ((n = i.
					return) && n.call(i), 0) : i.next) && !(n = n.call(i, r[1])).done) return n;
					switch (i = 0, n && (r = [2 & r[0], n.value]), r[0]) {
					case 0:
					case 1:
						n = r;
						break;
					case 4:
						return a.label++,
						{
							value: r[1],
							done: !1
						};
					case 5:
						a.label++,
						i = r[1],
						r = [0];
						continue;
					case 7:
						r = a.ops.pop(),
						a.trys.pop();
						continue;
					default:
						if (! (n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === r[0] || 2 === r[0])) {
							a = 0;
							continue
						}
						if (3 === r[0] && (!n || r[1] > n[0] && r[1] < n[3])) {
							a.label = r[1];
							break
						}
						if (6 === r[0] && a.label < n[1]) {
							a.label = n[1],
							n = r;
							break
						}
						if (n && a.label < n[2]) {
							a.label = n[2],
							a.ops.push(r);
							break
						}
						n[2] && a.ops.pop(),
						a.trys.pop();
						continue
					}
					r = e.call(t, a)
				} catch(s) {
					r = [6, s],
					i = 0
				} finally {
					o = n = 0
				}
				if (5 & r[0]) throw r[1];
				return {
					value: r[0] ? r[1] : void 0,
					done: !0
				}
			}
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.PoolBody = o.BannerData = o.recommendCtrl = void 0;
		var c = t("../Define/Define"),
		l = t("../Framework/Utils/Singleton"),
		u = t("../Network/Net"),
		p = t("../Platforms/Platform"),
		h = cc._decorator,
		d = h.ccclass,
		f = (h.property,
		function(t) {
			function e() {
				return null !== t && t.apply(this, arguments) || this
			}
			return n(e, t),
			e.prototype.initialize = function() {
				return a(this, void 0, void 0,
				function() {
					var t = this;
					return s(this,
					function(e) {
						switch (e.label) {
						case 0:
							return this.woodMap = new Map,
							this.woodTotalMap = new Map,
							this.urlType = p.
						default.getUrlType(),
							[4, u.Net.getBanners(1).then(function(e) {
								t.woodItems = e[0].banners
							})];
						case 1:
							return e.sent(),
							[2]
						}
					})
				})
			},
			e.prototype.getFlowInfo = function(t, e) {
				return a(this, void 0, void 0,
				function() {
					var o, i, n, r;
					return s(this,
					function(a) {
						switch (a.label) {
						case 0:
							return o = this.woodMap.get(e),
							i = this.woodTotalMap.get(e),
							o || (o = [], i = []),
							o[t] ? [3, 2] : (n = new y(t, e), [4, u.Net.getFlowInfo(n)]);
						case 1:
							r = a.sent(),
							o[t] = r,
							i = i.concat(r.feedData),
							this.woodMap.set(e, o),
							this.woodTotalMap.set(e, i),
							a.label = 2;
						case 2:
							return [2, o[t]]
						}
					})
				})
			},
			e.prototype.getActivityData = function() {
				return a(this, void 0, void 0,
				function() {
					var t = this;
					return s(this,
					function(e) {
						switch (e.label) {
						case 0:
							return o.recommendCtrl.woodItems ? [3, 2] : [4, u.Net.getBanners(1).then(function(e) {
								t.woodItems = e[0].banners
							})];
						case 1:
							e.sent(),
							e.label = 2;
						case 2:
							return [2, this.woodItems[0]]
						}
					})
				})
			},
			e.prototype.getCurUrl = function(t) {
				return t.appUrl
			},
			e.prototype.testForData = function() {
				this.banners = [],
				this.woodItems = [];
				for (var t = 0; t < 5; t++) this.banners[t] = new _;
				for (t = 0; t < 6; t++) this.woodItems[t] = new _
			},
			r([d], e)
		} (l.Singleton()));
		o.
	default = f,
		o.recommendCtrl = f.inst;
		var _ = function() {
			this.title = "\u540d\u79f0",
			this.adPoolId = 1,
			this.adImgUrl = "",
			this.position = 100
		};
		o.BannerData = _;
		var y = function(t, e) {
			this.pageNum = 1,
			this.pageSize = 10,
			this.businessId = c.BusinessId.mes,
			this.lid = "",
			this.productNum = 0,
			this.pageNum = t,
			this.businessId = e,
			this.pageSize = 10
		};
		o.PoolBody = y,
		cc._RF.pop()
	},
	{
		"../Define/Define": "Define",
		"../Framework/Utils/Singleton": "Singleton",
		"../Network/Net": "Net",
		"../Platforms/Platform": "Platform"
	}],
	Recommend: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "d379cnOG8FDFog3jLgKOAaj", "Recommend");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		},
		a = this && this.__awaiter ||
		function(t, e, o, i) {
			return new(o || (o = Promise))(function(n, r) {
				function a(t) {
					try {
						c(i.next(t))
					} catch(e) {
						r(e)
					}
				}
				function s(t) {
					try {
						c(i.
						throw (t))
					} catch(e) {
						r(e)
					}
				}
				function c(t) {
					var e;
					t.done ? n(t.value) : (e = t.value, e instanceof o ? e: new o(function(t) {
						t(e)
					})).then(a, s)
				}
				c((i = i.apply(t, e || [])).next())
			})
		},
		s = this && this.__generator ||
		function(t, e) {
			var o, i, n, r, a = {
				label: 0,
				sent: function() {
					if (1 & n[0]) throw n[1];
					return n[1]
				},
				trys: [],
				ops: []
			};
			return r = {
				next: s(0),
				throw: s(1),
				return: s(2)
			},
			"function" == typeof Symbol && (r[Symbol.iterator] = function() {
				return this
			}),
			r;
			function s(t) {
				return function(e) {
					return c([t, e])
				}
			}
			function c(r) {
				if (o) throw new TypeError("Generator is already executing.");
				for (; a;) try {
					if (o = 1, i && (n = 2 & r[0] ? i.
					return: r[0] ? i.
					throw || ((n = i.
					return) && n.call(i), 0) : i.next) && !(n = n.call(i, r[1])).done) return n;
					switch (i = 0, n && (r = [2 & r[0], n.value]), r[0]) {
					case 0:
					case 1:
						n = r;
						break;
					case 4:
						return a.label++,
						{
							value: r[1],
							done: !1
						};
					case 5:
						a.label++,
						i = r[1],
						r = [0];
						continue;
					case 7:
						r = a.ops.pop(),
						a.trys.pop();
						continue;
					default:
						if (! (n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === r[0] || 2 === r[0])) {
							a = 0;
							continue
						}
						if (3 === r[0] && (!n || r[1] > n[0] && r[1] < n[3])) {
							a.label = r[1];
							break
						}
						if (6 === r[0] && a.label < n[1]) {
							a.label = n[1],
							n = r;
							break
						}
						if (n && a.label < n[2]) {
							a.label = n[2],
							a.ops.push(r);
							break
						}
						n[2] && a.ops.pop(),
						a.trys.pop();
						continue
					}
					r = e.call(t, a)
				} catch(s) {
					r = [6, s],
					i = 0
				} finally {
					o = n = 0
				}
				if (5 & r[0]) throw r[1];
				return {
					value: r[0] ? r[1] : void 0,
					done: !0
				}
			}
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = t("../../../Controller/RecommendCtrl"),
		l = t("../../../Define/Define"),
		u = t("../../../Define/EventId"),
		p = t("../../../Framework/Event/EventMgr"),
		h = t("../../../Framework/UI/ScrollViewOptimizer"),
		d = t("./BannerItem"),
		f = t("./WoodItem"),
		_ = cc._decorator,
		y = _.ccclass,
		v = _.property,
		m = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.index = 0,
				e.bannerRoot = null,
				e.woodView = null,
				e.bannerPrefab = null,
				e
			}
			return n(e, t),
			e.prototype.onLoad = function() {},
			e.prototype.start = function() {
				return a(this, void 0, void 0,
				function() {
					return s(this,
					function(t) {
						switch (t.label) {
						case 0:
							return [2];
						case 1:
							return t.sent(),
							this.initBanner(),
							this.woodView.getCurView().node.on("scroll-to-bottom", this.onLoadScorll, this),
							[2]
						}
					})
				})
			},
			e.prototype.initBanner = function() {
				this.bannerRoot.removeAllPages();
				for (var t = c.recommendCtrl.banners,
				e = 0; e < t.length; e++) {
					var o = cc.instantiate(this.bannerPrefab),
					i = t[e];
					this.bannerRoot.addPage(o),
					o.getComponent(d.
				default).init(i, c.recommendCtrl.getCurUrl(i))
				}
			},
			e.prototype.getActivityData = function() {
				return c.recommendCtrl.woodItems[0]
			},
			e.prototype.initWoodItem = function() {
				return a(this, void 0, void 0,
				function() {
					var t;
					return s(this,
					function(e) {
						switch (e.label) {
						case 0:
							return [4, c.recommendCtrl.getFlowInfo(this.index, l.BusinessId.mes)];
						case 1:
							return e.sent(),
							t = c.recommendCtrl.woodTotalMap.get(l.BusinessId.mes),
							this.woodView.setData(t, this.onWoodItemUpdate),
							this.index++,
							[2]
						}
					})
				})
			},
			e.prototype.onWoodItemUpdate = function(t, e, o) {
				e.getComponent(f.
			default).onItemRefresh(t, o)
			},
			e.prototype.onScrollTop = function() {
				this.woodView.getCurView().stopAutoScroll(),
				p.EVENT.emit(u.EventId.ON_MAINSCROLL_TOP)
			},
			e.prototype.onLoadScorll = function() {
				this.initWoodItem()
			},
			r([v(cc.PageView)], e.prototype, "bannerRoot", void 0),
			r([v(h.
		default)], e.prototype, "woodView", void 0),
			r([v(cc.Prefab)], e.prototype, "bannerPrefab", void 0),
			r([y], e)
		} (cc.Component);
		o.
	default = m,
		cc._RF.pop()
	},
	{
		"../../../Controller/RecommendCtrl": "RecommendCtrl",
		"../../../Define/Define": "Define",
		"../../../Define/EventId": "EventId",
		"../../../Framework/Event/EventMgr": "EventMgr",
		"../../../Framework/UI/ScrollViewOptimizer": "ScrollViewOptimizer",
		"./BannerItem": "BannerItem",
		"./WoodItem": "WoodItem"
	}],
	ResKeeper: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "eb6467RtCVGxrVRKYRJLXOh", "ResKeeper");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("./ResLoader"),
		s = t("./ResUtil"),
		c = cc._decorator,
		l = c.ccclass,
		u = (c.property,
		function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.autoRes = [],
				e
			}
			return n(e, t),
			e.prototype.loadRes = function() {
				var t = this,
				e = s.ResUtil.parseLoadResArgs.apply(this, arguments),
				o = e.onCompleted;
				e.onCompleted = function(e, i) { ! e && t.isValid && (i.addRef(), t.autoRes.push(i)),
					o && o(e, i)
				},
				a.resLoader.loadRes(e.urls, e.type, e.onProgess, e.onCompleted)
			},
			e.prototype.onDestroy = function() {
				this.releaseAutoRes()
			},
			e.prototype.releaseAutoRes = function() {
				for (var t = 0; t < this.autoRes.length; t++) this.autoRes[t].decRef();
				this.autoRes.length = 0
			},
			e.prototype.autoReleaseRes = function(t) {
				t.addRef(),
				this.autoRes.push(t)
			},
			r([l], e)
		} (cc.Component));
		o.
	default = u,
		cc._RF.pop()
	},
	{
		"./ResLoader": "ResLoader",
		"./ResUtil": "ResUtil"
	}],
	ResLeakChecker: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "f600dz4gMZHYqt76bMY/XSX", "ResLeakChecker"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.ResLeakChecker = void 0;
		var i = function() {
			function t() {
				this.resFilter = null,
				this._checking = !1,
				this._log = new Map
			}
			return t.findCharPos = function(t, e, o) {
				for (var i = t.indexOf(e), n = i, r = 0; r < o; r++) {
					if ( - 1 == (i = t.indexOf(e, i + 1))) return n;
					n = i
				}
				return n
			},
			t.getCallStack = function(e) {
				var o = (new Error).stack,
				i = t.findCharPos(o, "\n", e);
				return i > 0 && (o = o.slice(i)),
				o
			},
			t.prototype.checkFilter = function(t) {
				return !! this._checking && (!this.resFilter || this.resFilter(t))
			},
			t.prototype.logLoad = function(e, o, i) {
				if (this.checkFilter(e)) {
					this._log.has(e) || this._log.set(e, new Map);
					var n = this._log.get(e);
					n.has(o) && console.warn("ResLeakChecker doubel same use " + e + " : " + o + ", stack " + n[o]),
					n.set(o, i || t.getCallStack(2))
				}
			},
			t.prototype.logRelease = function(t, e) {
				if (this.checkFilter(t)) if (this._log.has(t)) {
					var o = this._log.get(t);
					o.has(e) ? o.delete(e) : console.warn("ResLeakChecker use nofound " + t + " : " + e)
				} else console.warn("ResLeakChecker url nofound " + t + " : " + e)
			},
			t.prototype.startCheck = function() {
				this._checking = !0
			},
			t.prototype.stopCheck = function() {
				this._checking = !1
			},
			t.prototype.getLog = function() {
				return this._log
			},
			t.prototype.resetLog = function() {
				this._log = new Map
			},
			t.prototype.dump = function() {
				this._log.forEach(function(t, e) {
					console.log(e),
					t.forEach(function(t, e) {
						console.log(e + " : " + t)
					})
				})
			},
			t
		} ();
		o.ResLeakChecker = i,
		cc._RF.pop()
	},
	{}],
	ResLoader: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "8bc2akEtSVPcaMzwEx7+Wnb", "ResLoader"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.resLoader = void 0;
		var i = function() {
			function t() {
				this.resLeakChecker = null
			}
			return t.prototype.loadRes = function() {
				cc.resources.load.apply(cc.resources, arguments)
			},
			t.prototype.loadResDir = function() {
				cc.resources.loadDir.apply(cc.resources, arguments)
			},
			t.prototype.loadRemoteRes = function() {
				cc.assetManager.loadRemote.apply(cc.assetManager, arguments)
			},
			t.prototype.releaseArray = function(t) {
				for (var e = 0; e < t.length; ++e) this.releaseAsset(t[e])
			},
			t.prototype.releaseAsset = function(t) {
				t.decRef()
			},
			t.prototype.getResItem = function(t, e) {
				return cc.resources.get(t, e)
			},
			t
		} ();
		o.
	default = i,
		o.resLoader = new i,
		cc._RF.pop()
	},
	{}],
	ResUtil: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "48663IiBgdKzrRc7NasFFU8", "ResUtil"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.ResUtil = o.LoadResArgs = void 0;
		var i = t("./ResKeeper");
		o.LoadResArgs = function() {};
		var n = function() {
			function t() {}
			return t.parseLoadResArgs = function(t, e, o, i) {
				return void 0 === i && ("function" == typeof e ? ("function" == typeof o ? (i = o, o = e) : i = e, e = null) : "function" == typeof o && (i = o, o = null)),
				{
					urls: t,
					type: e,
					onProgess: o,
					onCompleted: i
				}
			},
			t.getResKeeper = function(e, o) {
				return e ? e.getComponent(i.
			default) || (o ? e.addComponent(i.
			default):
				t.getResKeeper(e.parent, o)) : null
			},
			t.assignWith = function(e, o, i) {
				var n = t.getResKeeper(o, i);
				return n && e ? (n.autoReleaseRes(e), e) : (console.error("AssignWith " + e + " to " + o + " faile"), null)
			},
			t.instantiate = function(e) {
				var o = cc.instantiate(e),
				i = t.getResKeeper(o, !0);
				return i ? (i.autoReleaseRes(e), o) : (console.warn("instantiate " + e + ", autoRelease faile"), o)
			},
			t
		} ();
		o.ResUtil = n,
		cc._RF.pop()
	},
	{
		"./ResKeeper": "ResKeeper"
	}],
	RoundRectMask: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "3a425GugcFOVZ21NfIjFoek", "RoundRectMask");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
		s = a.ccclass,
		c = a.property,
		l = a.executeInEditMode,
		u = a.disallowMultiple,
		p = a.requireComponent,
		h = a.menu;
		cc.macro.ENABLE_WEBGL_ANTIALIAS = !0;
		var d = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e._radius = 11,
				e.mask = null,
				e
			}
			return n(e, t),
			Object.defineProperty(e.prototype, "radius", {
				get: function() {
					return this._radius
				},
				set: function(t) {
					this._radius = t,
					this.updateMask(t)
				},
				enumerable: !1,
				configurable: !0
			}),
			e.prototype.onEnable = function() {
				this.mask = this.getComponent(cc.Mask),
				this.updateMask(this.radius)
			},
			e.prototype.updateMask = function(t) {
				var e = t >= 0 ? t: 0;
				e < 1 && (e = Math.min(this.node.width, this.node.height) * e),
				this.mask.radius = e,
				this.mask.onDraw = this.onDraw.bind(this.mask),
				this.mask._updateGraphics = this._updateGraphics.bind(this.mask),
				this.mask.type = cc.Mask.Type.RECT
			},
			e.prototype._updateGraphics = function() {
				var t = this._graphics;
				t && this.onDraw(t)
			},
			e.prototype.onDraw = function(t) {
				t.clear(!1);
				var e = this.node,
				o = e.width,
				i = e.height,
				n = -o * e.anchorX,
				r = -i * e.anchorY;
				t.roundRect(n, r, o, i, this.radius || 0),
				cc.game.renderType === cc.game.RENDER_TYPE_CANVAS ? t.stroke() : t.fill()
			},
			r([c], e.prototype, "_radius", void 0),
			r([c({
				tooltip: "\u5706\u89d2\u534a\u5f84:\n0-1\u4e4b\u95f4\u4e3a\u6700\u5c0f\u8fb9\u957f\u6bd4\u4f8b\u503c, \n>1\u4e3a\u5177\u4f53\u50cf\u7d20\u503c"
			})], e.prototype, "radius", null),
			r([s(), l(!0), u(!0), p(cc.Mask), h("Renderer Component/Mask(RoundRect)")], e)
		} (cc.Component);
		o.
	default = d,
		cc._RF.pop()
	},
	{}],
	Rule: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "6d785Tpr/BIMZvo/+U4Cacd", "Rule");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../../../Framework/UIBase"),
		s = cc._decorator,
		c = s.ccclass,
		l = (s.property,
		function(t) {
			function e() {
				return null !== t && t.apply(this, arguments) || this
			}
			return n(e, t),
			r([c], e)
		} (a.
	default));
		o.
	default = l,
		cc._RF.pop()
	},
	{
		"../../../Framework/UIBase": "UIBase"
	}],
	SceneBase: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "3e1efcHGRBDxbwOEieW6yTB", "SceneBase");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../Res/ResKeeper"),
		s = t("../../Define/SceneDef"),
		c = cc._decorator,
		l = c.ccclass,
		u = c.property,
		p = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.sceneType = s.SceneType.$Start,
				e
			}
			return n(e, t),
			r([u({
				type: cc.Enum(s.SceneType),
				displayName: "\u573a\u666f\u7c7b\u578b"
			})], e.prototype, "sceneType", void 0),
			r([l], e)
		} (a.
	default);
		o.
	default = p,
		cc._RF.pop()
	},
	{
		"../../Define/SceneDef": "SceneDef",
		"../Res/ResKeeper": "ResKeeper"
	}],
	SceneDef: [function(t, e, o) {
		"use strict";
		var i;
		cc._RF.push(e, "7e24c8vfn5L1oSlp04O4jsu", "SceneDef"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.SceneDataInfo = o.SceneType = void 0,
		function(t) {
			t[t.$Start = 0] = "$Start",
			t[t.NONE = 1] = "NONE",
			t[t.Bootstrap = 2] = "Bootstrap",
			t[t.Main = 3] = "Main",
			t[t.Game = 4] = "Game",
			t[t.Test = 5] = "Test",
			t[t.$End = 6] = "$End"
		} (i = o.SceneType || (o.SceneType = {}));
		var n = function() {
			function t(t, e, o) {
				void 0 === o && (o = []),
				this.extraloadRes = [],
				this.sceneType = t,
				this.sceneName = e,
				this.extraloadRes = o
			}
			return t.getSceneData = function(t) {
				for (var e = 0; e < this._sceneDataList.length; ++e) if (this._sceneDataList[e].sceneType == t) return this._sceneDataList[e];
				return null
			},
			t._sceneDataList = [new t(i.Bootstrap, "BootStrap"), new t(i.Main, "Main"), new t(i.Game, "Game"), new t(i.Test, "Test")],
			t
		} ();
		o.SceneDataInfo = n,
		cc._RF.pop()
	},
	{}],
	SceneMgr: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "0df942ksWpO84lCpHxevraf", "SceneMgr");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__awaiter ||
		function(t, e, o, i) {
			return new(o || (o = Promise))(function(n, r) {
				function a(t) {
					try {
						c(i.next(t))
					} catch(e) {
						r(e)
					}
				}
				function s(t) {
					try {
						c(i.
						throw (t))
					} catch(e) {
						r(e)
					}
				}
				function c(t) {
					var e;
					t.done ? n(t.value) : (e = t.value, e instanceof o ? e: new o(function(t) {
						t(e)
					})).then(a, s)
				}
				c((i = i.apply(t, e || [])).next())
			})
		},
		a = this && this.__generator ||
		function(t, e) {
			var o, i, n, r, a = {
				label: 0,
				sent: function() {
					if (1 & n[0]) throw n[1];
					return n[1]
				},
				trys: [],
				ops: []
			};
			return r = {
				next: s(0),
				throw: s(1),
				return: s(2)
			},
			"function" == typeof Symbol && (r[Symbol.iterator] = function() {
				return this
			}),
			r;
			function s(t) {
				return function(e) {
					return c([t, e])
				}
			}
			function c(r) {
				if (o) throw new TypeError("Generator is already executing.");
				for (; a;) try {
					if (o = 1, i && (n = 2 & r[0] ? i.
					return: r[0] ? i.
					throw || ((n = i.
					return) && n.call(i), 0) : i.next) && !(n = n.call(i, r[1])).done) return n;
					switch (i = 0, n && (r = [2 & r[0], n.value]), r[0]) {
					case 0:
					case 1:
						n = r;
						break;
					case 4:
						return a.label++,
						{
							value: r[1],
							done: !1
						};
					case 5:
						a.label++,
						i = r[1],
						r = [0];
						continue;
					case 7:
						r = a.ops.pop(),
						a.trys.pop();
						continue;
					default:
						if (! (n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === r[0] || 2 === r[0])) {
							a = 0;
							continue
						}
						if (3 === r[0] && (!n || r[1] > n[0] && r[1] < n[3])) {
							a.label = r[1];
							break
						}
						if (6 === r[0] && a.label < n[1]) {
							a.label = n[1],
							n = r;
							break
						}
						if (n && a.label < n[2]) {
							a.label = n[2],
							a.ops.push(r);
							break
						}
						n[2] && a.ops.pop(),
						a.trys.pop();
						continue
					}
					r = e.call(t, a)
				} catch(s) {
					r = [6, s],
					i = 0
				} finally {
					o = n = 0
				}
				if (5 & r[0]) throw r[1];
				return {
					value: r[0] ? r[1] : void 0,
					done: !0
				}
			}
		},
		s = this && this.__spreadArrays ||
		function() {
			for (var t = 0,
			e = 0,
			o = arguments.length; e < o; e++) t += arguments[e].length;
			var i = Array(t),
			n = 0;
			for (e = 0; e < o; e++) for (var r = arguments[e], a = 0, s = r.length; a < s; a++, n++) i[n] = r[a];
			return i
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.SCENE = void 0;
		var c = t("../UI/UIFacade"),
		l = t("../UI/UIMgr"),
		u = t("../../Define/UIDefs"),
		p = t("../../Define/EventId"),
		h = t("../../Define/SceneDef"),
		d = t("../Event/EventMgr"),
		f = t("../Utils/Singleton"),
		_ = cc._decorator,
		y = (_.ccclass, _.property,
		function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e._lastSceneType = h.SceneType.NONE,
				e._currentSceneType = h.SceneType.NONE,
				e._loadingSceneType = h.SceneType.NONE,
				e
			}
			return n(e, t),
			e.prototype.getLastScene = function() {
				return this._lastSceneType
			},
			e.prototype.getCurrentScene = function() {
				return this._currentSceneType
			},
			Object.defineProperty(e.prototype, "sceneParams", {
				get: function() {
					return this._sceneParams
				},
				enumerable: !1,
				configurable: !0
			}),
			e.prototype.loadScene = function(t, e) {
				void 0 === e && (e = {}),
				this._loadingSceneType != t ? this._currentSceneType != t ? (this._sceneParams = e, this._loadScene(t)) : cc.error("Scene: " + h.SceneType[t] + ", is already loaded!") : cc.error("Scene: " + h.SceneType[t] + ", is current being loading!")
			},
			e.prototype._loadScene = function(t, e) {
				void 0 === e && (e = 3),
				this._loadingSceneType = t;
				var o = h.SceneDataInfo.getSceneData(t);
				o ? this._doLoadScene(o) : cc.error("Scene not registerd, load scene faild!")
			},
			e.prototype._doLoadScene = function(t, e) {
				var o = this;
				void 0 === e && (e = 3);
				var i = this;
				cc.director.preloadScene(t.sceneName,
				function(t, e) {
					d.EVENT.emit(p.EventId.ON_UPDATE_LOADING_PROGRESS, t, e)
				},
				function(n) {
					n ? (cc.error("\u573a\u666f\u52a0\u8f7d\u5931\u8d25", n), e >= 0 ? (d.EVENT.emit(p.EventId.ON_UPDATE_LOADING_TTP, "\u7f51\u7edc\u4f3c\u4e4e\u4e0d\u592a\u597d"), setTimeout(function() {
						o._loadScene(t.sceneType, e - 1)
					},
					1e3)) : (e = 3, setTimeout(function() {
						return r(o, void 0, void 0,
						function() {
							return a(this,
							function(o) {
								switch (o.label) {
								case 0:
									return l.
								default.inst.close(u.UIType.Loading),
									[4, c.UIFacade.showConfirm("\u8bf7\u68c0\u67e5\u7f51\u7edc\u540e\u91cd\u8bd5", "\u91cd\u8bd5", "\u8fd4\u56de")];
								case 1:
									return o.sent() ? this._loadScene(t.sceneType, e - 1) : cc.error("\u7528\u6237\u9009\u62e9\u9000\u51fa\u6e38\u620f"),
									[2]
								}
							})
						})
					},
					1e3))) : cc.director.loadScene(t.sceneName,
					function(t) {
						t ? cc.error("\u573a\u666f\u5207\u6362\u5931\u8d25", t) : (l.
					default.inst.close(u.UIType.Loading), i._loadSceneEnd())
					})
				})
			},
			e.prototype._loadSceneEnd = function() {
				this._lastSceneType = this._currentSceneType,
				this._currentSceneType = this._loadingSceneType,
				this._loadingSceneType = h.SceneType.NONE,
				this.reviveWnd()
			},
			e.prototype.pushReviveWnd = function(t) {
				for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
				this._reciveInfo || (this._reciveInfo = {
					sceneType: this._currentSceneType,
					uis: []
				}),
				this._reciveInfo.uis.push({
					type: t,
					args: e
				})
			},
			e.prototype.reviveWnd = function() {
				var t;
				if (this.needReviveWnds()) {
					for (var e = this._reciveInfo.uis,
					o = e.length - 1; o >= 0; --o) {
						var i = e[o];
						i.args[0] = i.args[0] || {},
						i.args[0].isReciver = !0,
						(t = l.
					default.inst).open.apply(t, s([i.type], i.args))
					}
					this._reciveInfo = void 0
				}
			},
			e.prototype.clearReviveWnds = function() {
				this._reciveInfo = void 0
			},
			e.prototype.needReviveWnds = function() {
				return this._reciveInfo && this._reciveInfo.sceneType == this._currentSceneType
			},
			e
		} (f.Singleton()));
		o.SCENE = y.inst,
		cc._RF.pop()
	},
	{
		"../../Define/EventId": "EventId",
		"../../Define/SceneDef": "SceneDef",
		"../../Define/UIDefs": "UIDefs",
		"../Event/EventMgr": "EventMgr",
		"../UI/UIFacade": "UIFacade",
		"../UI/UIMgr": "UIMgr",
		"../Utils/Singleton": "Singleton"
	}],
	ScheduleObject: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "ff422WSJtBChJvl3J2plL1s", "ScheduleObject");
		var i = this && this.__spreadArrays ||
		function() {
			for (var t = 0,
			e = 0,
			o = arguments.length; e < o; e++) t += arguments[e].length;
			var i = Array(t),
			n = 0;
			for (e = 0; e < o; e++) for (var r = arguments[e], a = 0, s = r.length; a < s; a++, n++) i[n] = r[a];
			return i
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.ScheduleObject = void 0;
		var n = function() {},
		r = function() {
			function t() {
				this._scheduleList = new Map
			}
			return t.prototype.schedule = function(t, e, o, r, a) {
				void 0 === o && (o = 0),
				void 0 === r && (r = cc.macro.REPEAT_FOREVER),
				void 0 === a && (a = 0);
				for (var s = [], c = 5; c < arguments.length; c++) s[c - 5] = arguments[c];
				o = o || 0,
				r = isNaN(r) ? cc.macro.REPEAT_FOREVER: r,
				a = a || 0;
				var l = cc.director.getScheduler(),
				u = l.isTargetPaused(this),
				p = new n;
				p.callback = t,
				p.traget = e,
				p.interval = o,
				p.repeat = r,
				p.delay = a,
				p.args = s,
				p.realCallback = function(t) {
					var e, o = p.args && p.args.filter(function(t) {
						return null != t
					}) || [],
					n = [t].concat(o);
					try {
						p.callback && (e = p.callback).call.apply(e, i([p.traget], n))
					} catch(r) {
						cc.error("schedule call back fail")
					}
				},
				this._scheduleList.set(t, p),
				l.schedule(p.realCallback, this, p.interval, p.repeat, p.delay, u)
			},
			t.prototype.scheduleOnce = function(t, e) {
				void 0 === e && (e = 0),
				this.schedule(t, 0, 0, e)
			},
			t.prototype.unschedule = function(t) {
				if (t) {
					var e = this._scheduleList.get(t);
					e && (cc.director.getScheduler().unschedule(e.realCallback, this), this._scheduleList.delete(t))
				}
			},
			t.prototype.unscheduleAllCallbacks = function() {
				this._scheduleList.clear(),
				cc.director.getScheduler().unscheduleAllForTarget(this)
			},
			t
		} ();
		o.ScheduleObject = r,
		cc._RF.pop()
	},
	{}],
	ScrollViewOptimizer: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "b3b25WFRMhB2p7+ez3BrpHe", "ScrollViewOptimizer");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../../Define/Define"),
		s = cc._decorator,
		c = s.ccclass,
		l = s.property,
		u = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.itemTemplate = null,
				e.scrollType = a.ScrollType.vertical,
				e.spacing = 0,
				e.topSpace = 0,
				e.visibleRowCount = 5,
				e.extraCahe = 2,
				e.colCount = 1,
				e.cacheRow = 0,
				e.items = [],
				e.itemHeight = 0,
				e.itemWidth = 0,
				e.spawnCount = 0,
				e.bufferZone = 0,
				e.isInit = !1,
				e.canUpdateFrame = !0,
				e.data = [],
				e.isVertical = !1,
				e.sign = 1,
				e
			}
			return n(e, t),
			e.prototype.getCurView = function() {
				return this.scrollView
			},
			e.prototype.onLoad = function() {
				this.cacheRow = this.visibleRowCount + this.extraCahe,
				this.visibleRowCount = Math.ceil(this.visibleRowCount);
				var t = cc.instantiate(this.itemTemplate);
				this.itemHeight = t.height,
				this.itemWidth = t.width,
				this.itemMainParam = this.itemHeight,
				this.initParmByScrollType(),
				this.spawnCount = this.cacheRow * this.colCount,
				this.bufferZone = this.cacheRow * (this.itemMainParam + this.spacing) / 2,
				this.scrollView = this.node.getComponent(cc.ScrollView),
				this.content = this.scrollView.content;
				var e = this.isVertical ? this._updateContentView_vertical.bind(this) : this._updateContentView_horizontal.bind(this);
				this.content.on(cc.Node.EventType.POSITION_CHANGED, e)
			},
			e.prototype.initParmByScrollType = function() {
				this.isVertical = this.scrollType == a.ScrollType.vertical,
				this.scrollType == a.ScrollType.horizontal ? (this.sign = -1, this.itemMainParam = this.itemWidth, this.itemOtherParam = this.itemHeight) : (this.sign = 1, this.itemMainParam = this.itemHeight, this.itemOtherParam = this.itemWidth)
			},
			e.prototype.getItemPos = function(t, e) {
				return t *= this.sign,
				this.isVertical ? new cc.Vec2(e, t) : new cc.Vec2(t, e)
			},
			e.prototype.setData = function(t, e) {
				this.isInit = !1,
				this.canUpdateFrame = !0,
				this.isInit = this.initialize(t, e)
			},
			e.prototype.pushData = function() {},
			e.prototype.initialize = function(t, e, o) {
				if (void 0 === o && (o = !1), !(e && t && 0 !== t.length && this.itemTemplate && this.scrollView)) return cc.log("\u521d\u59cb\u5316\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u6240\u6709\u5fc5\u8981\u53c2\u6570"),
				t && 0 == t.length && this.content.removeAllChildren(),
				!1;
				this.data = t,
				this.itemUpdateFunc = e,
				this.totalRow = Math.ceil(t.length / this.colCount),
				o && (this.totalRow += 2),
				this.lastMainParam = 0,
				this.content.removeAllChildren(),
				this.content.getComponent(cc.Layout) && this.content.removeComponent(cc.Layout),
				this.scrollType == a.ScrollType.horizontal ? (this.content.width = this.totalRow * (this.itemWidth + this.spacing) + this.topSpace, this.content.height = this.colCount * (this.itemHeight + this.spacing) + this.spacing) : (this.content.height = this.totalRow * (this.itemHeight + this.spacing) + this.topSpace, this.content.width = this.colCount * (this.itemWidth + this.spacing) + this.spacing);
				var i = 0;
				o && (i = 1);
				for (var n = 0; n < this.spawnCount; n += this.colCount) {
					for (var r = -this.itemMainParam * (.5 + i) - this.spacing * i - this.topSpace, s = 0; s < this.colCount; s++) {
						var c = n + s,
						l = null;
						c >= this.items.length ? (l = cc.instantiate(this.itemTemplate), this.items.push(l)) : l = this.items[c],
						this.content.addChild(l);
						var u = (s + .5) * this.itemOtherParam + this.spacing * (s + 1) - (this.isVertical ? this.content.width: this.content.height) / 2;
						l.setPosition(this.getItemPos(r, u)),
						l.itemId = c,
						c >= this.data.length ? l.active = !1 : (l.active = !0, this.itemUpdateFunc(c, l, this.data[c]))
					}
					i++
				}
				return ! 0
			},
			e.prototype.getPositionInView = function(t) {
				var e = t.parent.convertToWorldSpaceAR(t.position);
				return this.scrollView.node.convertToNodeSpaceAR(e)
			},
			e.prototype.getItem = function(t) {
				for (var e = this.content.childrenCount,
				o = 0; o < e; ++o) {
					var i = this.content.children[o],
					n = i.getPosition();
					if (n = i.parent.convertToWorldSpaceAR(n), n = cc.director.getScene().convertToNodeSpaceAR(n), cc.rect(n.x - i.width / 2, n.y - i.height / 2, i.width, i.height).contains(t) && i.itemId <= this.data.length - 1) return i
				}
				return null
			},
			e.prototype._updateContentView_vertical = function() {
				if (this.isInit && this.canUpdateFrame) {
					this.canUpdateFrame = !1;
					for (var t = this.items,
					e = this.scrollView.content.y < this.lastMainParam,
					o = (this.itemHeight + this.spacing) * this.cacheRow, i = 0, n = 0; n < t.length; n += this.colCount) {
						var r = this.getPositionInView(t[n]);
						if (e) {
							if (i = t[n].y + o, r.y < -this.bufferZone && i < 0) for (var a = 0; a < this.colCount; a++) {
								t[l = a + n].y = i;
								var s = t[l].itemId - this.spawnCount;
								t[l].itemId = s,
								s >= 0 ? (t[l].active = !0, this.itemUpdateFunc(s, t[l], this.data[s])) : t[l].active = !1
							}
						} else if (i = t[n].y - o, r.y > this.bufferZone && i > -this.content.height) {
							var c = !0;
							for (a = 0; a < this.colCount; a++) {
								var l;
								t[l = a + n].y = i,
								i > -624 && (c = !1),
								s = t[l].itemId + this.spawnCount,
								t[l].itemId = s,
								s < this.data.length ? (t[l].active = !0, this.itemUpdateFunc(s, t[l], this.data[s])) : t[l].active = !1
							}
							c && cc.error("all out screen!")
						}
					}
					this.lastMainParam = this.scrollView.content.y,
					this.canUpdateFrame = !0
				}
			},
			e.prototype._updateContentView_horizontal = function() {
				if (this.isInit && this.canUpdateFrame) {
					this.canUpdateFrame = !1;
					for (var t = this.items,
					e = this.scrollView.content.x > this.lastMainParam,
					o = (this.itemMainParam + this.spacing) * this.cacheRow, i = 0, n = 0; n < t.length; n += this.colCount) {
						var r = this.getPositionInView(t[n]);
						if (e) {
							if (i = t[n].x - o, r.x > this.bufferZone && i > 0) for (var a = 0; a < this.colCount; a++) {
								t[c = a + n].x = i;
								var s = t[c].itemId - this.spawnCount;
								t[c].itemId = s,
								s >= 0 ? (t[c].active = !0, this.itemUpdateFunc(s, t[c], this.data[s])) : t[c].active = !1
							}
						} else if (i = t[n].x + o, r.x < -this.bufferZone && i < this.content.width) for (a = 0; a < this.colCount; a++) {
							var c;
							t[c = a + n].x = i,
							s = t[c].itemId + this.spawnCount,
							t[c].itemId = s,
							s < this.data.length ? (t[c].active = !0, this.itemUpdateFunc(s, t[c], this.data[s])) : t[c].active = !1
						}
					}
					this.lastMainParam = this.scrollView.content.x,
					this.canUpdateFrame = !0
				}
			},
			r([l(cc.Prefab)], e.prototype, "itemTemplate", void 0),
			r([l({
				type: cc.Enum(a.ScrollType)
			})], e.prototype, "scrollType", void 0),
			r([l], e.prototype, "spacing", void 0),
			r([l], e.prototype, "topSpace", void 0),
			r([l], e.prototype, "visibleRowCount", void 0),
			r([l], e.prototype, "extraCahe", void 0),
			r([l], e.prototype, "colCount", void 0),
			r([c], e)
		} (cc.Component);
		o.
	default = u,
		cc._RF.pop()
	},
	{
		"../../Define/Define": "Define"
	}],
	Share: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "3452csXkNxPBb2jUQqdG3o+", "Share"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.shareApi = void 0,
		o.shareApi = {
			terraceType: "",
			appShareInfo: {},
			miniShare: {},
			localActPath: null,
			jdAppid: "bc44d1eba4238241d7ab887b41fc48a2",
			mpType: "0",
			mode: "online",
			lkUrl: "",
			returnurl: "",
			addParamsToUrl: function(t, e, o) {
				var i = function(t, e) {
					"object" != typeof t && (t = {});
					var o = [];
					for (var i in t) if (t.hasOwnProperty(i) && void 0 !== t[i] && "" !== t[i]) {
						var n = e ? encodeURIComponent(t[i]) : t[i];
						o.push(i + "=" + n)
					}
					return o.join("&")
				} (e, o);
				return - 1 == (t = t || "").indexOf("?") ? t + "?" + i: t + "&" + i
			},
			init: function(t, e, o) {
				this.terraceType = t,
				this.mpType = e,
				this.mode = "0" == e ? "online": "test",
				this.lkUrl = "online" == this.mode ? "https://jdhome.m.jd.com": "https://pengyougoupre.jd.com",
				this.jdAppid = "online" == this.mode ? "dafbe42d5bff9d82298e5230eb8c3f79": "bc44d1eba4238241d7ab887b41fc48a2",
				this.returnurl = o
			},
			monitorApp: function(t) {
				var e = this;
				function o(t) {
					if (!window.appVersion) return ! 0;
					var e = window.appVersion.split(".");
					t = t.split(".");
					for (var o = Math.max(e.length, t.length); e.length < o;) e.push("0");
					for (; t.length < o;) t.push("0");
					for (var i = 0; i < o; i++) {
						var n = parseInt(e[i]),
						r = parseInt(t[i]);
						if (n > r) return ! 0;
						if (n < r) return ! 1
					}
					return ! 1
				}
				"setShare" == t ? e.setDefaultShare() : e.goShare(),
				-1 != (navigator.userAgent || "").indexOf("supportJDSHWK/1") || 1 == window._is_jdsh_wkwebview ? window.webkit.messageHandlers.JDAppUnite.postMessage({
					method: "getPhoneBasicInfo",
					params: "getAppVersionCb"
				}) : window.JDAppUnite && window.JDAppUnite.getPhoneBasicInfo("getAppVersionCb"),
				window.getAppVersionCb = function(i) {
					var n = JSON.parse(i).data;
					window.appVersion = n.appVersion,
					o("8.0.0") && ("setShare" == t ? e.setDefaultShare() : e.goShare())
				}
			},
			showAechatShare: function() {
				var t = document.createElement("div");
				t.className = "shareMask",
				window.document.body.appendChild(t);
				var e = document.createElement("img");
				e.src = "http://game-cdn.moxigame.cn/resource/download/3d267ba33f39a8d43ce0581b7e30a400.png",
				t.appendChild(e);
				var o = document.createElement("style");
				o.type = "text/css",
				o.innerHTML = ".shareMask {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background: rgba(0,0,0,0.9);\n        z-index: 9999999;\n      }\n      .shareMask img {\n        position: absolute;\n        right: 1.71875rem;\n        top: .46875rem;\n        width: 20rem;\n        z-index: auto;\n      }\n    ",
				window.document.head.appendChild(o),
				document.querySelector("body").classList.add("modal-open"),
				t.onclick = function() {
					document.querySelector("body").classList.remove("modal-open"),
					t.remove()
				}
			},
			setShareInfo: function(t) {
				var e, o, i = t.title,
				n = t.pathData,
				r = t.imageUrl,
				a = t.des,
				s = t.shareSuccess,
				c = t.shareMode;
				c = c || "goShare",
				(n = n || {}).env = this.mode,
				n.returnurl = this.returnurl,
				e = this.addParamsToUrl(location.protocol + "//" + location.hostname + location.pathname, n, !0),
				this.localActPath = e;
				var l = this.lkUrl + "/dist/taro/index.html/#/taro/pages/frame/index?returnUrl=" + encodeURIComponent(e) + "&appId=" + this.jdAppid + "&needLogin=0";
				o = "/pages/homewebview/homewebview?webviewUrl=" + encodeURIComponent(l),
				"h5" == this.terraceType ? (this.appShareInfo = {
					title: i,
					content: a,
					url: "https://m.jd.com",
					img: r,
					channel: "Wxfriends",
					callback: s,
					clickcallback: null,
					qrparam: null,
					keyparam: null,
					timeline_title: "",
					mpId: "gh_411e0cc837c9",
					mpIconUrl: r,
					mpPath: o,
					mpType: this.mpType
				},
				"h5" == this.terraceType && this.monitorApp(c)) : (this.miniShare = {
					title: i,
					path: o,
					imageUrl: r
				},
				syjsdk.setWxShare(i, o, r, this.mpType), "goShare" == c && this.showAechatShare())
			},
			goShare: function() {
				"{}" != JSON.stringify(this.appShareInfo) && jdshare.sendDirectShare(this.appShareInfo)
			},
			setDefaultShare: function() {
				jdshare.setShareInfo(this.appShareInfo)
			}
		},
		cc._RF.pop()
	},
	{}],
	SingleAwardItem: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "2edc5/vzA9LLpF8vFJelAUp", "SingleAwardItem");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../../Define/Define"),
		s = t("../../Define/UIDefs"),
		c = t("../../Framework/UI/UIMgr"),
		l = t("../../Framework/Utils/Utils"),
		u = t("../../Platforms/Platform"),
		p = t("./Tool/SwitchImg"),
		h = cc._decorator,
		d = h.ccclass,
		f = h.property,
		_ = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.labdes = null,
				e.sprIcon = null,
				e
			}
			return n(e, t),
			e.prototype.onLoad = function() {
				this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this)
			},
			e.prototype.init = function(t, e) {
				if (void 0 === e && (e = !1), t) {
					var o;
					switch (this.awardInfo = t, this.node.active = !0, t.type) {
					case a.AwardType.JING_BEAN:
						o = l.
					default.jingbeanNumChange(t.beanNum, !1),
						e && (o = "+" + o);
						break;
					case a.AwardType.COUPON:
						o = t.couponDiscount,
						e && (o += "\u5143")
					}
					this.sprIcon.setCurImg(l.
				default.getIndexByEnum(a.AwardType, t.type)),
					this.labdes.string = o
				} else this.node.active = !1
			},
			e.prototype.onClick = function() {
				this.awardInfo && this.awardInfo.type == a.AwardType.COUPON && (u.
			default.urlType == u.UrlType.WeiXin ? c.
			default.inst.open(s.UIType.Lack, {
					title: "\u6e38\u620f\u516c\u544a",
					des: "\u201c\u8bf7\u5728\u4eac\u4e1c\u5ba2\u6237\u7aef\u53c2\u4e0e\u6d3b\u52a8\u201d",
					isClose: !0,
					index: 3,
					btnState: !0
				}) : u.
			default.jumpCoupon())
			},
			r([f(cc.Label)], e.prototype, "labdes", void 0),
			r([f(p.
		default)], e.prototype, "sprIcon", void 0),
			r([d], e)
		} (cc.Component);
		o.
	default = _,
		cc._RF.pop()
	},
	{
		"../../Define/Define": "Define",
		"../../Define/UIDefs": "UIDefs",
		"../../Framework/UI/UIMgr": "UIMgr",
		"../../Framework/Utils/Utils": "Utils",
		"../../Platforms/Platform": "Platform",
		"./Tool/SwitchImg": "SwitchImg"
	}],
	SingleTouch: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "72bd3WwCOlD+5EU/c8g7SEa", "SingleTouch");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = cc._decorator.ccclass,
		s = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e._touchID = null,
				e
			}
			return n(e, t),
			e.prototype._touchStart = function(t) {
				null !== this._touchID ? t.stopPropagation() : this._touchID = t.getID()
			},
			e.prototype._touchMove = function(t) {
				this._touchID !== t.getID() && t.stopPropagation()
			},
			e.prototype._touchEnd = function(t) {
				this._touchID !== t.getID() ? t.stopPropagation() : t.simulate || (this._touchID = null)
			},
			e.prototype.onEnable = function() {
				this.node.on(cc.Node.EventType.TOUCH_START, this._touchStart, this, !0),
				this.node.on(cc.Node.EventType.TOUCH_MOVE, this._touchMove, this, !0),
				this.node.on(cc.Node.EventType.TOUCH_END, this._touchEnd, this, !0),
				this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._touchEnd, this, !0)
			},
			e.prototype.onDisable = function() {
				this.node.off(cc.Node.EventType.TOUCH_START, this._touchStart, this, !0),
				this.node.off(cc.Node.EventType.TOUCH_MOVE, this._touchMove, this, !0),
				this.node.off(cc.Node.EventType.TOUCH_END, this._touchEnd, this, !0),
				this.node.off(cc.Node.EventType.TOUCH_CANCEL, this._touchEnd, this, !0)
			},
			r([a], e)
		} (cc.Component);
		o.
	default = s,
		cc._RF.pop()
	},
	{}],
	Singleton: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "5206eq0hLtHnra87eJbW17V", "Singleton"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.Singleton = void 0,
		o.Singleton = function() {
			return function() {
				function t() {}
				return Object.defineProperty(t, "inst", {
					get: function() {
						return null == t._inst && (t._inst = new this),
						t._inst
					},
					enumerable: !1,
					configurable: !0
				}),
				t._inst = null,
				t
			} ()
		},
		cc._RF.pop()
	},
	{}],
	SoundMgr: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "f78a4uML8dGg4Y10sAe+Fjb", "SoundMgr"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.SoundMgr = void 0;
		var i = t("../../Define/LocalKey"),
		n = function() {
			function t() {}
			return t.init = function(t) {
				for (var e = 0,
				o = t.children; e < o.length; e++) {
					var n = o[e],
					r = n.getComponent(cc.AudioSource).clip;
					if (!r) throw new Error("SoundMgr  [" + n.name + "] Clip \u4e3a\u7a7a");
					this.clips[n.name] = r
				}
				var a = cc.sys.localStorage.getItem(i.LocalKey.SoundVolum);
				this._voiceDegree = a || 0 === a ? a: 10,
				cc.audioEngine.setEffectsVolume(this._voiceDegree / 10),
				cc.audioEngine.setMusicVolume(this._voiceDegree / 10),
				this.musicId = -1
			},
			t.playEffect = function(t, e) {
				if (void 0 === e && (e = !1), 0 !== this._voiceDegree) {
					var o = this.clips[t];
					cc.audioEngine.playEffect(o, e)
				}
			},
			t.playMusic = function(t, e) {
				if (void 0 === e && (e = !0), 0 !== this._voiceDegree) {
					var o = this.clips[t];
					this.musicId = cc.audioEngine.playMusic(o, e)
				}
			},
			t.stopMusic = function() {
				cc.audioEngine.stopMusic()
			},
			t.controlVoice = function(t) {
				if (t < 0 || t > 10) throw new Error("[controlVoice]\u4f20\u5165\u4e86\u4e0d\u5408\u6cd5\u7684\u53c2\u6570");
				this._voiceDegree = t,
				cc.audioEngine.setEffectsVolume(this._voiceDegree / 10),
				cc.audioEngine.setMusicVolume(this._voiceDegree / 10)
			},
			Object.defineProperty(t, "SoundDgree", {
				get: function() {
					return this._voiceDegree
				},
				enumerable: !1,
				configurable: !0
			}),
			t.getVoiceStatus = function() {
				return this._voiceDegree
			},
			t._voiceDegree = 0,
			t.clips = {},
			t.musicId = -1,
			t
		} ();
		o.SoundMgr = n,
		cc._RF.pop()
	},
	{
		"../../Define/LocalKey": "LocalKey"
	}],
	StateMachine: [function(t, e) {
		"use strict";
		var o;
		cc._RF.push(e, "c03a7UqzyBOuLDxWrOGeud4", "StateMachine"),
		function(t) { (function(t) {
				var e = function(t, e, o) {
					this.onStart = e,
					this.onStop = o,
					this.stateName = t
				};
				t.State = e;
				var o = function() {
					function t() {
						this._stateDictionary = new Map
					}
					return Object.defineProperty(t.prototype, "currentState", {
						get: function() {
							return this._currentState.stateName
						},
						set: function(t) {
							this.setState(t)
						},
						enumerable: !1,
						configurable: !0
					}),
					t.prototype.addState = function(t, o, i) {
						this._stateDictionary.set(t, new e(t, o, i))
					},
					t.prototype.setState = function(t) {
						null != this._currentState && null != this._currentState.onStop && this._currentState.onStop(),
						this._currentState = this._stateDictionary.get(t),
						null != this._currentState.onStart && this._currentState.onStart()
					},
					t
				} ();
				t.StateMachine = o
			})(t.Tools || (t.Tools = {}))
		} (o || (o = {})),
		cc._RF.pop()
	},
	{}],
	StaticData: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "123b5guC6JBjo1Cz5S4RfYo", "StaticData"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.StaticData = void 0;
		var i = t("./Define"),
		n = function() {
			function t() {}
			return Object.defineProperty(t, "md5Key", {
				get: function() {
					return t.GAMEEVE == i.GameEve.test ? "d84d6b19cb7ca7c1e5876f287e8a680b": "34e1e81ae8122ca039ec5738d33b4eee"
				},
				enumerable: !1,
				configurable: !0
			}),
			t.SCREEN_SIZE = cc.v2(750, 1334),
			t.WORLDTIP_LIMIT = 50,
			t.WORLDTIP_DELTA = 1.5,
			t.WORLDTIP_AUTOFILL = !1,
			t.LOG_OPEN = !0,
			t.jdEve = !1,
			t.TESTURL = "pengyougoupre.jd.com",
			t.OfficalURL = "pengyougou.m.jd.com",
			t.APPID = "dafbe42d5bff9d82298e5230eb8c3f79",
			t.TESTAPPID = "bc44d1eba4238241d7ab887b41fc48a2",
			t.OFFICALAPPID = "dafbe42d5bff9d82298e5230eb8c3f79",
			t.PLUS_URL = "https://huiyuan.m.jd.com?source=pk",
			t.SELECT_TREASURE_COLOR = new cc.Color(250, 207, 124),
			t.TREASURE_COLOR_ACHIEVE = new cc.Color(150, 81, 51),
			t.TREASURE_COLOR_UNACHIEVE = new cc.Color(239, 203, 133),
			t.TA_APPID = "d02597c7c27f446794b53ea66e211168",
			t.TestTA_APPID = "f3afb8baf9794c53b50fa74320ca10fb",
			t.TA_SERVERURL = "https://loggate.moxigame.cn",
			t.LIMIT_GRADE = 200,
			t.LIMIT_USER = !0,
			t.ACTIVITY_STATE = i.ActivityState.valid,
			t.LOCAL_Test = !1,
			t.GAMEEVE = i.GameEve.online,
			t.ActivityID = 9,
			t.IsFirst = !1,
			t.rankLength = 50,
			t.woodIndex = 0,
			t.sizeRate = 750 / 1334,
			t.isFirst = !1,
			t.isShareJoin = 2,
			t.source = i.FXSource.appShare,
			t.qdSouce = i.QdSouce.app,
			t
		} ();
		o.StaticData = n,
		cc._RF.pop()
	},
	{
		"./Define": "Define"
	}],
	SwitchImg: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "6e6feAa5uROLK8GD5FYMruY", "SwitchImg");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
		s = a.ccclass,
		c = a.property,
		l = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.imgs = [],
				e
			}
			return n(e, t),
			e.prototype.onLoad = function() {
				this.spr = this.node.getComponent(cc.Sprite)
			},
			e.prototype.setCurImg = function(t) {
				if (this.spr) {
					var e = this.imgs[t];
					e ? this.spr.spriteFrame = e: console.error(this.node.name + "\u8282\u70b9\u4e0a\u4e0d\u5b58\u5728\u56fe\u7247img" + t)
				}
			},
			e.prototype.setCurImgByName = function(t) {
				this.sprNames || this.selectImgName();
				var e = this.sprNames.findIndex(function(e) {
					return e == t
				});
				this.setCurImg(e)
			},
			e.prototype.selectImgName = function() {
				if (!this.sprNames) {
					this.sprNames = [];
					for (var t = 0; t < this.imgs.length; t++) this.sprNames[t] = this.imgs[t].name
				}
			},
			e.prototype.unSelectImg = function() {
				this.spr && (this.spr.spriteFrame = null)
			},
			r([c({
				type: [cc.SpriteFrame]
			})], e.prototype, "imgs", void 0),
			r([s], e)
		} (cc.Component);
		o.
	default = l,
		cc._RF.pop()
	},
	{}],
	SwitchNode: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "74ad2JcqiZB24Ria8SB6YqO", "SwitchNode");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
		s = a.ccclass,
		c = (a.property,
		function(t) {
			function e() {
				return null !== t && t.apply(this, arguments) || this
			}
			return n(e, t),
			e.prototype.onLoad = function() {
				this.children = this.node.children,
				this.init()
			},
			e.prototype.init = function() {
				this.setCurNode(0),
				this.unActiveNode()
			},
			e.prototype.setCurNode = function(t) {
				var e = this.children[t];
				e ? (this.curNode && (this.curNode.active = !1), e.active = !0, this.curNode = e) : console.error(this.node.name + "\u8282\u70b9\u4e0a\u4e0d\u5b58\u5728\u8282\u70b9" + t)
			},
			e.prototype.unActiveNode = function() {
				this.curNode && (this.curNode.active = !1)
			},
			r([s], e)
		} (cc.Component));
		o.
	default = c,
		cc._RF.pop()
	},
	{}],
	SysHook: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "4c82cq/9KtKJJAm0sDw5wDM", "SysHook"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.SysHook = void 0;
		var i = function() {
			function t() {}
			return t.setMultiTouchMax = function(t) {
				void 0 === t && (t = 1),
				cc.Node.maxTouchNum = t,
				cc.Node.touchNum = 0;
				var e = cc.Node.prototype.dispatchEvent;
				cc.Node.prototype.dispatchEvent = function(t) {
					switch (t.type) {
					case "touchstart":
						cc.Node.touchNum < cc.Node.maxTouchNum && (cc.Node.touchNum++, cc.Node.touchNum = cc.Node.touchNum > 1 ? 1 : cc.Node.touchNum, this._canTouch = !0, e.call(this, t));
						break;
					case "touchmove":
						!this._canTouch && cc.Node.touchNum < cc.Node.maxTouchNum && (this._canTouch = !0, cc.Node.touchNum++, cc.Node.touchNum = cc.Node.touchNum > 1 ? 1 : cc.Node.touchNum),
						this._canTouch && e.call(this, t);
						break;
					case "touchend":
						this._canTouch && (this._canTouch = !1, cc.Node.touchNum--, cc.Node.touchNum = cc.Node.touchNum < 0 ? 0 : cc.Node.touchNum, e.call(this, t));
						break;
					case "touchcancel":
						this._canTouch && (this._canTouch = !0, cc.Node.touchNum--, cc.Node.touchNum = cc.Node.touchNum < 0 ? 0 : cc.Node.touchNum, e.call(this, t));
						break;
					default:
						e.call(this, t)
					}
				};
				var o = cc.Node.prototype._onPostActivated;
				cc.Node.prototype._onPostActivated = function(t) { ! t && this._canTouch && (this._canTouch = !1, cc.Node.touchNum--, cc.Node.touchNum = cc.Node.touchNum < 0 ? 0 : cc.Node.touchNum),
					o.call(this, t)
				};
				var i = cc.Node.prototype._onPreDestroy;
				cc.Node.prototype._onPreDestroy = function() {
					this._canTouch && (this._canTouch = !1, cc.Node.touchNum--, cc.Node.touchNum = cc.Node.touchNum < 0 ? 0 : cc.Node.touchNum),
					i.call(this)
				}
			},
			t
		} ();
		o.SysHook = i,
		cc._RF.pop()
	},
	{}],
	TabControl: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "23aecD0apJIarg2fU8DFKfh", "TabControl");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
		s = a.ccclass,
		c = a.property,
		l = function() {
			function t() {
				this.tab = null,
				this.select = null,
				this.unselect = null
			}
			return r([c(cc.Sprite)], t.prototype, "tab", void 0),
			r([c(cc.SpriteFrame)], t.prototype, "select", void 0),
			r([c(cc.SpriteFrame)], t.prototype, "unselect", void 0),
			r([s("TabProperty")], t)
		} (),
		u = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.tabs = [],
				e.clickHandler = null,
				e.selectIdx = 0,
				e
			}
			return n(e, t),
			e.prototype.onLoad = function() {
				this.selectIdx >= 0 && this.selectIdx < this.tabs.length && this.setSelect(this.selectIdx)
			},
			e.prototype.onEnable = function() {
				for (var t = 0,
				e = this.tabs; t < e.length; t++) e[t].tab.node.on(cc.Node.EventType.TOUCH_END, this.onTabClick, this)
			},
			e.prototype.onDisable = function() {
				for (var t = 0,
				e = this.tabs; t < e.length; t++) e[t].tab.node.off(cc.Node.EventType.TOUCH_END, this.onTabClick, this)
			},
			e.prototype.start = function() {},
			e.prototype.setSelect = function(t) {
				for (var e = 0; e < this.tabs.length; ++e) if (e == t) {
					this.tabs[e].tab.spriteFrame = this.tabs[e].select;
					for (var o = 0,
					i = this.tabs; o < i.length; o++) {
						var n = i[o];
						n != this.tabs[e] && (n.tab.spriteFrame = n.unselect)
					}
					break
				}
			},
			e.prototype.getTargetIndex = function(t) {
				for (var e = 0; e < this.tabs.length; ++e) if (this.tabs[e].tab.node == t) return e;
				return - 1
			},
			e.prototype.onTabClick = function(t) {
				var e = this.getTargetIndex(t.target); - 1 != e && (this.setSelect(e), this.clickHandler && this.clickHandler.emit([e]))
			},
			r([c([l])], e.prototype, "tabs", void 0),
			r([c(cc.Component.EventHandler)], e.prototype, "clickHandler", void 0),
			r([c()], e.prototype, "selectIdx", void 0),
			r([s], e)
		} (cc.Component);
		o.
	default = u,
		cc._RF.pop()
	},
	{}],
	TableMgr: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "5b9f87+sIxAZogt3C6io4uX", "TableMgr");
		var i = this && this.__awaiter ||
		function(t, e, o, i) {
			return new(o || (o = Promise))(function(n, r) {
				function a(t) {
					try {
						c(i.next(t))
					} catch(e) {
						r(e)
					}
				}
				function s(t) {
					try {
						c(i.
						throw (t))
					} catch(e) {
						r(e)
					}
				}
				function c(t) {
					var e;
					t.done ? n(t.value) : (e = t.value, e instanceof o ? e: new o(function(t) {
						t(e)
					})).then(a, s)
				}
				c((i = i.apply(t, e || [])).next())
			})
		},
		n = this && this.__generator ||
		function(t, e) {
			var o, i, n, r, a = {
				label: 0,
				sent: function() {
					if (1 & n[0]) throw n[1];
					return n[1]
				},
				trys: [],
				ops: []
			};
			return r = {
				next: s(0),
				throw: s(1),
				return: s(2)
			},
			"function" == typeof Symbol && (r[Symbol.iterator] = function() {
				return this
			}),
			r;
			function s(t) {
				return function(e) {
					return c([t, e])
				}
			}
			function c(r) {
				if (o) throw new TypeError("Generator is already executing.");
				for (; a;) try {
					if (o = 1, i && (n = 2 & r[0] ? i.
					return: r[0] ? i.
					throw || ((n = i.
					return) && n.call(i), 0) : i.next) && !(n = n.call(i, r[1])).done) return n;
					switch (i = 0, n && (r = [2 & r[0], n.value]), r[0]) {
					case 0:
					case 1:
						n = r;
						break;
					case 4:
						return a.label++,
						{
							value: r[1],
							done: !1
						};
					case 5:
						a.label++,
						i = r[1],
						r = [0];
						continue;
					case 7:
						r = a.ops.pop(),
						a.trys.pop();
						continue;
					default:
						if (! (n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === r[0] || 2 === r[0])) {
							a = 0;
							continue
						}
						if (3 === r[0] && (!n || r[1] > n[0] && r[1] < n[3])) {
							a.label = r[1];
							break
						}
						if (6 === r[0] && a.label < n[1]) {
							a.label = n[1],
							n = r;
							break
						}
						if (n && a.label < n[2]) {
							a.label = n[2],
							a.ops.push(r);
							break
						}
						n[2] && a.ops.pop(),
						a.trys.pop();
						continue
					}
					r = e.call(t, a)
				} catch(s) {
					r = [6, s],
					i = 0
				} finally {
					o = n = 0
				}
				if (5 & r[0]) throw r[1];
				return {
					value: r[0] ? r[1] : void 0,
					done: !0
				}
			}
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.TABLE = void 0;
		var r = t("../Framework/Sys/TeMap"),
		a = t("../Framework/Res/ResLoader"),
		s = function() {
			function t() {
				this._channelName = "",
				this._all_table_list = [],
				this._isLoaded = !1,
				this._iTotalLoad = 0,
				this._iLoadNum = 0,
				this._units = new r.
			default,
				this._items = new r.
			default
			}
			return Object.defineProperty(t, "inst", {
				get: function() {
					return this._inst || (this._inst = new t),
					this._inst
				},
				enumerable: !1,
				configurable: !0
			}),
			t.prototype.setChannel = function(t) {
				this._channelName = t
			},
			t.prototype.loadTableRes = function() {
				return i(this, void 0, Promise,
				function() {
					var t = this;
					return n(this,
					function() {
						return this._isLoaded ? [2] : (this._isLoaded = !0, [2, new Promise(function(e) {
							a.resLoader.loadRes("Config/_filelist_", cc.JsonAsset,
							function(o, i) {
								t._all_table_list = i.json._files_ || [],
								t._loadTableRes(function() {
									e()
								})
							})
						})])
					})
				})
			},
			t.prototype.select_channel_file = function(t) {
				var e = t.lastIndexOf("/"),
				o = t.slice(e + 1) + "_" + this._channelName;
				return this._all_table_list.indexOf(o + ".json") >= 0 ? t.slice(0, e + 1) + o: t
			},
			t.prototype.loadTable = function(t, e) {
				t = this.select_channel_file(t);
				var o = this;
				cc.resources.load(t, cc.JsonAsset,
				function(i, n) {
					if (i) cc.error("failed to load " + t + ": " + i);
					else if (e) try {
						e(null, n)
					} catch(r) {
						cc.error("loadTable->", r + " res:" + t)
					}
					o._onInitOver()
				})
			},
			t.prototype._onInitOver = function() {
				this._iLoadNum >= this._iTotalLoad ? console.error("\u8d44\u6e90\u52a0\u8f7d\u6570\u91cf\u5bf9\u4e0d\u4e0a\u4e86\uff0c\u6ce8\u610f\u4fee\u6539") : (this._iLoadNum++, this._iLoadNum >= this._iTotalLoad && this._completeCallback && this._completeCallback())
			},
			t.prototype._loadTableRes = function(t) {
				this._completeCallback = t;
				var e = [];
				e.push(this._initUnit),
				this._iTotalLoad = e.length;
				for (var o = 0; o < e.length; o++) e[o].bind(this)()
			},
			t.prototype._initUnit = function() {
				var t = this;
				this.loadTable("Config/Unit",
				function(e, o) {
					for (var i = Object.keys(o.json), n = 0; n < i.length; ++n) {
						var r = o.json[i[n]];
						t._units.set(r.sID, r)
					}
				})
			},
			t.prototype.getUnitInfo = function(t) {
				return this._units.get(t)
			},
			t.prototype._initItems = function() {
				var t = this;
				this.loadTable("Config/Item",
				function(e, o) {
					for (var i = Object.keys(o.json), n = 0; n < i.length; n++) {
						var r = o.json[i[n]];
						t._items.set(r.sID, r)
					}
				})
			},
			t
		} ();
		o.TABLE = s.inst,
		cc._RF.pop()
	},
	{
		"../Framework/Res/ResLoader": "ResLoader",
		"../Framework/Sys/TeMap": "TeMap"
	}],
	TeMap: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "53a3dSI0wxHAoj5dHBzCwcS", "TeMap"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var i = function() {
			function t(t) {
				this._data = {},
				t && (this._data = t)
			}
			return t.prototype.has = function(t) {
				return null != t && null != t && this._data.hasOwnProperty(t.toString())
			},
			t.prototype.get = function(t) {
				return null == t || null == t ? null: this._data[t.toString()]
			},
			t.prototype.set = function(t, e) {
				this._data[t.toString()] = e
			},
			Object.defineProperty(t.prototype, "keys", {
				get: function() {
					return Object.keys(this._data)
				},
				enumerable: !1,
				configurable: !0
			}),
			t.prototype.get_keys = function() {
				return this.keys
			},
			t.prototype.del = function(t) {
				delete this._data[t.toString()]
			},
			t.prototype.rand = function() {
				var t = this.keys,
				e = t[Math.floor(Math.random() * t.length)];
				return this.get(e)
			},
			t.prototype.clear = function() {
				this._data = {}
			},
			t.prototype.getLength = function() {
				return this.keys.length
			},
			t
		} ();
		o.
	default = i,
		cc._RF.pop()
	},
	{}],
	TestView: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "17b6fwbmwZA5JeJqyMa6XWk", "TestView");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
		s = a.ccclass,
		c = a.property,
		l = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.mesNode = null,
				e
			}
			return n(e, t),
			e.prototype.update = function(t) {
				this.mesNode.eulerAngles = this.mesNode.eulerAngles.addSelf(new cc.Vec3(30 * t, 0, 0))
			},
			r([c(cc.Node)], e.prototype, "mesNode", void 0),
			r([s], e)
		} (cc.Component);
		o.
	default = l,
		cc._RF.pop()
	},
	{}],
	Test: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "5b091Eh4yZNm4ZlCmp/9lxW", "Test");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../../Define/UIDefs"),
		s = t("../../Framework/Scene/SceneBase"),
		c = t("../../Framework/UI/UIMgr"),
		l = cc._decorator,
		u = l.ccclass,
		p = (l.property,
		function(t) {
			function e() {
				return null !== t && t.apply(this, arguments) || this
			}
			return n(e, t),
			e.prototype.start = function() {},
			e.prototype.onBtnClick = function() {
				c.
			default.inst.open(a.UIType.Test)
			},
			r([u], e)
		} (s.
	default));
		o.
	default = p,
		cc._RF.pop()
	},
	{
		"../../Define/UIDefs": "UIDefs",
		"../../Framework/Scene/SceneBase": "SceneBase",
		"../../Framework/UI/UIMgr": "UIMgr"
	}],
	TreasureCtrl: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "a3491jLzSZKJKYAWVVLeZT4", "TreasureCtrl");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		},
		a = this && this.__awaiter ||
		function(t, e, o, i) {
			return new(o || (o = Promise))(function(n, r) {
				function a(t) {
					try {
						c(i.next(t))
					} catch(e) {
						r(e)
					}
				}
				function s(t) {
					try {
						c(i.
						throw (t))
					} catch(e) {
						r(e)
					}
				}
				function c(t) {
					var e;
					t.done ? n(t.value) : (e = t.value, e instanceof o ? e: new o(function(t) {
						t(e)
					})).then(a, s)
				}
				c((i = i.apply(t, e || [])).next())
			})
		},
		s = this && this.__generator ||
		function(t, e) {
			var o, i, n, r, a = {
				label: 0,
				sent: function() {
					if (1 & n[0]) throw n[1];
					return n[1]
				},
				trys: [],
				ops: []
			};
			return r = {
				next: s(0),
				throw: s(1),
				return: s(2)
			},
			"function" == typeof Symbol && (r[Symbol.iterator] = function() {
				return this
			}),
			r;
			function s(t) {
				return function(e) {
					return c([t, e])
				}
			}
			function c(r) {
				if (o) throw new TypeError("Generator is already executing.");
				for (; a;) try {
					if (o = 1, i && (n = 2 & r[0] ? i.
					return: r[0] ? i.
					throw || ((n = i.
					return) && n.call(i), 0) : i.next) && !(n = n.call(i, r[1])).done) return n;
					switch (i = 0, n && (r = [2 & r[0], n.value]), r[0]) {
					case 0:
					case 1:
						n = r;
						break;
					case 4:
						return a.label++,
						{
							value: r[1],
							done: !1
						};
					case 5:
						a.label++,
						i = r[1],
						r = [0];
						continue;
					case 7:
						r = a.ops.pop(),
						a.trys.pop();
						continue;
					default:
						if (! (n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === r[0] || 2 === r[0])) {
							a = 0;
							continue
						}
						if (3 === r[0] && (!n || r[1] > n[0] && r[1] < n[3])) {
							a.label = r[1];
							break
						}
						if (6 === r[0] && a.label < n[1]) {
							a.label = n[1],
							n = r;
							break
						}
						if (n && a.label < n[2]) {
							a.label = n[2],
							a.ops.push(r);
							break
						}
						n[2] && a.ops.pop(),
						a.trys.pop();
						continue
					}
					r = e.call(t, a)
				} catch(s) {
					r = [6, s],
					i = 0
				} finally {
					o = n = 0
				}
				if (5 & r[0]) throw r[1];
				return {
					value: r[0] ? r[1] : void 0,
					done: !0
				}
			}
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.TreasureModel = o.treasureCtrl = void 0;
		var c = t("../Define/Define"),
		l = t("../Define/EventId"),
		u = t("../Define/StaticData"),
		p = t("../Define/UIDefs"),
		h = t("../Framework/Event/EventMgr"),
		d = t("../Framework/UI/UIFacade"),
		f = t("../Framework/UI/UIMgr"),
		_ = t("../Framework/Utils/Singleton"),
		y = t("../Model/UserModel"),
		v = t("../Network/Net"),
		m = cc._decorator,
		g = m.ccclass,
		b = (m.property,
		function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.showLevel = 0,
				e.curFriends = null,
				e
			}
			return n(e, t),
			e.prototype.initialize = function() {
				return a(this, void 0, void 0,
				function() {
					return s(this,
					function(t) {
						switch (t.label) {
						case 0:
							return [4, this.updateCurData()];
						case 1:
							return t.sent(),
							this.showLevel = this.truthLevel,
							this.test(),
							[2]
						}
					})
				})
			},
			e.prototype.test = function() {
				return JSON.parse('{"errorCode":"200","errorMessage":"\u8bf7\u6c42\u6210\u529f","currentTime":1624003396347,"data":{"totalWins":44,"totalFriends":5,"awards":[{"id":245,"wins":1,"friendFrames":2,"received":0,"rewards":[{"type":"COUPON","beanPoolName":"","beanNum":null,"couponTitle":"\u6d4b\u8bd5\u5238061001","couponDiscount":1,"couponQuota":1000,"couponLimitStr":"\u9650\u8d2d [\u864e\u54e5\u4e5f\u9006\u5929008] \u5e97\u94fa\u5546\u54c1","couponBeginTime":"2021-06-10 00:00:00","couponEndTime":"2021-07-28 23:59:59"}]},{"id":246,"wins":2,"friendFrames":2,"received":1,"rewards":[{"type":"JING_BEAN","beanPoolName":"\u4eac\u4eab\u503cPK\u6d4b\u8bd5\u8c46\u6c60\u622a\u6b62\u81f310\u6708","beanNum":1,"couponTitle":"","couponDiscount":null,"couponQuota":null,"couponLimitStr":"","couponBeginTime":"","couponEndTime":""}]}]},"success":true}').data
			},
			e.prototype.updateCurData = function() {
				return a(this, void 0, void 0,
				function() {
					var t;
					return s(this,
					function(e) {
						switch (e.label) {
						case 0:
							return [4, v.Net.getBoxRewardInfo()];
						case 1:
							return t = e.sent(),
							u.StaticData.LOCAL_Test && (t = this.test()),
							y.userModel.userInfo.winNum = t.totalWins,
							y.userModel.onUpdateInfo(),
							this.curFriends = t.totalFriends,
							this.treasureDatas = t.awards,
							this.initModelMes(),
							this.findCurLevel(),
							this.updateProgress(),
							h.EVENT.emit(l.EventId.ON_UPDATE_TREASURETIP, this.isUnReceived),
							[2]
						}
					})
				})
			},
			e.prototype.updateReceiveData = function() {
				this.findCurLevel(),
				h.EVENT.emit(l.EventId.ON_UPDATE_TREASURETIP, this.isUnReceived)
			},
			e.prototype.initModelMes = function() {
				for (var t = 0,
				e = y.userModel.winNum; t < this.treasureDatas.length && t + 1 < this.treasureDatas.length;) {
					this.treasureDatas[t].nextWinNum = this.treasureDatas[t + 1].wins;
					var o = this.treasureDatas[t];
					e >= o.wins && this.curFriends < o.friendFrames && o.received == c.TreasureState.unreceived && (o.received = c.TreasureState.friendLess),
					t++
				}
			},
			e.prototype.findCurLevel = function() {
				var t = 0,
				e = y.userModel.winNum;
				for (this.isUnReceived = !1; t < this.treasureDatas.length;) {
					var o = this.treasureDatas[t];
					if (e == o.wins && this.curFriends >= o.friendFrames && (o.isLock = !1, o.received ? t++:this.isUnReceived = !0), e <= o.wins || this.curFriends < o.friendFrames) break;
					this.treasureDatas[t].isLock = !1,
					o.received || (this.isUnReceived = !0),
					t++
				}
				t = Math.min(t, this.treasureDatas.length - 1),
				this.truthLevel = t,
				this.curData = this.treasureDatas[this.truthLevel]
			},
			e.prototype.updateProgress = function() {
				var t = this.treasureDatas[this.truthLevel];
				return this.progress = y.userModel.userInfo.winNum / t.wins,
				this.progress >= 1 && (t.isLock = !1),
				this.progress
			},
			e.prototype.updateFriendNum = function() {
				return this.treasureDatas[this.truthLevel].friendFrames
			},
			e.prototype.getPersent = function() {
				return y.userModel.winNum / this.treasureDatas[this.showLevel].wins
			},
			e.prototype.getDataByLevel = function(t) {
				return t >= this.treasureDatas.length || t < 0 ? null: this.treasureDatas[t]
			},
			e.prototype.getCurThreeData = function() {
				return [this.getDataByLevel(this.truthLevel - 1), this.getDataByLevel(this.truthLevel), this.getDataByLevel(this.truthLevel + 1)]
			},
			e.prototype.getCurData = function() {
				return this.curData
			},
			e.prototype.treasureItemClick = function(t) {
				var e = !1;
				if (t.wins > y.userModel.winNum) f.
			default.inst.open(p.UIType.Priseview, {
					data: t,
					isReceive: !1
				});
				else if (t.friendFrames > this.curFriends) f.
			default.inst.open(p.UIType.Lack, {
					title: "\u597d\u53cb\u6570\u4e0d\u8db3",
					des: "\u201c\u89e3\u9501\u5b9d\u7bb1\u9700\u8981\u589e\u52a0\u597d\u53cb\u54e6!\u201d",
					isClose: !0,
					index: 4
				});
				else switch (t.received) {
				case c.TreasureState.unreceived:
					this.provideAward(t),
					e = !0,
					o.treasureCtrl.updateCurData();
					break;
				case c.TreasureState.received:
					f.
				default.inst.open(p.UIType.Priseview, {
						data: t,
						isReceive: !0
					});
					break;
				case c.TreasureState.friendLess:
					e = !1,
					f.
				default.inst.open(p.UIType.Lack, {
						title: "\u597d\u53cb\u6570\u4e0d\u8db3",
						des: "\u201c\u89e3\u9501\u5b9d\u7bb1\u9700\u8981\u589e\u52a0\u597d\u53cb\u54e6!\u201d",
						isClose: !0,
						index: 4
					})
				}
				return e
			},
			e.prototype.provideAward = function(t) {
				return a(this, void 0, void 0,
				function() {
					return s(this,
					function(e) {
						switch (e.label) {
						case 0:
							return [4, v.Net.sendBoxReward(t.id).
							catch(function() {
								d.UIFacade.showToast("\u53d1\u5956\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")
							})];
						case 1:
							return e.sent(),
							f.
						default.inst.open(p.UIType.OpenBox, {
								data: t,
								isReceive: !0
							}),
							[2]
						}
					})
				})
			},
			r([g], e)
		} (_.Singleton()));
		o.
	default = b,
		o.treasureCtrl = b.inst;
		o.TreasureModel = function(t) {
			this.id = 0,
			this.wins = 5,
			this.isArrive = !1,
			this.nextWinNum = -1,
			this.wins = t
		},
		cc._RF.pop()
	},
	{
		"../Define/Define": "Define",
		"../Define/EventId": "EventId",
		"../Define/StaticData": "StaticData",
		"../Define/UIDefs": "UIDefs",
		"../Framework/Event/EventMgr": "EventMgr",
		"../Framework/UI/UIFacade": "UIFacade",
		"../Framework/UI/UIMgr": "UIMgr",
		"../Framework/Utils/Singleton": "Singleton",
		"../Model/UserModel": "UserModel",
		"../Network/Net": "Net"
	}],
	TreasureItem: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "3ee64eKTJhDo4DVqQ4qmn+u", "TreasureItem");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../../../Controller/TreasureCtrl"),
		s = t("../../../Define/Define"),
		c = t("../../../Define/EventId"),
		l = t("../../../Framework/Event/EventMgr"),
		u = t("../../../Model/UserModel"),
		p = t("../Tool/SwitchImg"),
		h = t("./TreasureProgress"),
		d = cc._decorator,
		f = d.ccclass,
		_ = d.property,
		y = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.treasureProgress = null,
				e.bgNode = null,
				e.labFriendNum = null,
				e.isSelect = !1,
				e
			}
			return n(e, t),
			e.prototype.onLoad = function() {
				l.EVENT.on(c.EventId.ON_TREASURE_SELECT, this.checkSelectState.bind(this), this),
				this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this),
				this.mask = cc.find("bg/mask", this.node)
			},
			e.prototype.onItemUpdate = function(t, e) {
				this.data = e,
				this.index = t,
				this.mask.active = e.wins > u.userModel.winNum,
				this.bgNode.setCurImg(e.received),
				this.labFriendNum.node.parent.active = e.received == s.TreasureState.friendLess || e.received == s.TreasureState.unreceived,
				this.labFriendNum.string = e.friendFrames.toString(),
				this.treasureProgress.init(t, e)
			},
			e.prototype.checkSelectState = function(t) {
				this.updateSelectState(this.index == t)
			},
			e.prototype.updateSelectState = function(t) {
				this.bgNode.node.scale = t ? .9 : .5,
				this.isSelect = t
			},
			e.prototype.onClick = function() {
				a.treasureCtrl.treasureItemClick(this.data) && (this.bgNode.setCurImg(s.TreasureState.received), this.data.received = 1)
			},
			r([_(h.
		default)], e.prototype, "treasureProgress", void 0),
			r([_(p.
		default)], e.prototype, "bgNode", void 0),
			r([_(cc.Label)], e.prototype, "labFriendNum", void 0),
			r([f], e)
		} (cc.Component);
		o.
	default = y,
		cc._RF.pop()
	},
	{
		"../../../Controller/TreasureCtrl": "TreasureCtrl",
		"../../../Define/Define": "Define",
		"../../../Define/EventId": "EventId",
		"../../../Framework/Event/EventMgr": "EventMgr",
		"../../../Model/UserModel": "UserModel",
		"../Tool/SwitchImg": "SwitchImg",
		"./TreasureProgress": "TreasureProgress"
	}],
	TreasurePoint: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "2f2e3R4mjNHn5axwe3pufEg", "TreasurePoint");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
		s = a.ccclass,
		c = a.property,
		l = cc.color(239, 203, 133),
		u = cc.color(150, 81, 51),
		p = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.labNode = null,
				e.tipSprite = null,
				e
			}
			return n(e, t),
			e.prototype.init = function() {
				this.labNode || (this.labNode = this.node.getChildByName("num").getComponent(cc.Label), this.tipSprite = this.node.getComponent(cc.Sprite))
			},
			e.prototype.updateInfo = function(t, e) {
				this.init(),
				this.labNode.string = t.toString(),
				this.tipSprite.enabled = e,
				this.labNode.node.color = e ? u: l
			},
			r([c(cc.Label)], e.prototype, "labNode", void 0),
			r([c(cc.Sprite)], e.prototype, "tipSprite", void 0),
			r([s], e)
		} (cc.Component);
		o.
	default = p,
		cc._RF.pop()
	},
	{}],
	TreasureProgress: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "56d31h8ybVL2ZJTXI4/GZyX", "TreasureProgress");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../../../Controller/TreasureCtrl"),
		s = t("../../../Define/StaticData"),
		c = t("../../../Model/UserModel"),
		l = cc._decorator,
		u = l.ccclass,
		p = l.property,
		h = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.labNum = null,
				e.top = null,
				e.bottom = null,
				e.topRate = null,
				e.bottomRate = null,
				e.point = null,
				e.progress = null,
				e.isAchieve = !1,
				e
			}
			return n(e, t),
			e.prototype.init = function(t, e) {
				if (this.top.active = !1, this.bottom.active = !1, this.progress.node.active = !1, this.isAchieve = c.userModel.winNum >= e.wins, this.labNum.string = e.wins.toString(), this.point.enabled = this.isAchieve, this.labNum.node.color = this.isAchieve ? s.StaticData.TREASURE_COLOR_ACHIEVE: s.StaticData.TREASURE_COLOR_UNACHIEVE, 0 == t) this.top.active = !0,
				this.topRate.progress = Math.min(1, c.userModel.winNum / e.wins);
				else if (t == a.treasureCtrl.treasureDatas.length - 1 || -1 == e.nextWinNum) return this.bottom.active = !0,
				void(this.bottomRate.active = this.isAchieve);
				this.progress.node.active = !0;
				var o = Math.min(1, (c.userModel.winNum - e.wins) / (e.nextWinNum - e.wins));
				c.userModel.winNum <= e.wins && (o = 0),
				this.progress.progress = o
			},
			r([p(cc.Label)], e.prototype, "labNum", void 0),
			r([p(cc.Node)], e.prototype, "top", void 0),
			r([p(cc.Node)], e.prototype, "bottom", void 0),
			r([p(cc.ProgressBar)], e.prototype, "topRate", void 0),
			r([p(cc.Node)], e.prototype, "bottomRate", void 0),
			r([p(cc.Sprite)], e.prototype, "point", void 0),
			r([p(cc.ProgressBar)], e.prototype, "progress", void 0),
			r([u], e)
		} (cc.Component);
		o.
	default = h,
		cc._RF.pop()
	},
	{
		"../../../Controller/TreasureCtrl": "TreasureCtrl",
		"../../../Define/StaticData": "StaticData",
		"../../../Model/UserModel": "UserModel"
	}],
	TreasureScrollView: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "9eddfGHwtNO2rYO+99VI9xu", "TreasureScrollView");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../../../Define/EventId"),
		s = t("../../../Framework/Event/EventMgr"),
		c = t("../../../Framework/UI/ScrollViewOptimizer"),
		l = t("./TreasureItem"),
		u = cc._decorator,
		p = u.ccclass,
		h = (u.property,
		function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.maxNum = 0,
				e.selectIndex = 0,
				e
			}
			return n(e, t),
			e.prototype.start = function() {
				this.scrollView.node.on("scroll-ended", this.moveClosePos.bind(this), this),
				this.scrollView.node.on("scroll-began", this.scrollViewStart.bind(this), this)
			},
			e.prototype.moveClosePos = function() {
				var t = (this.scrollView.content.position.x + this.topSpace + .5 * this.itemMainParam) / ( - this.itemMainParam - this.spacing);
				t = Math.round(t) - 1,
				this.scrollToMid(t, 1)
			},
			e.prototype.initialize = function(e, o) {
				return t.prototype.initialize.call(this, e, o, !0)
			},
			e.prototype.scrollToMid = function(t, e) {
				void 0 === e && (e = .1),
				t += 1;
				var o = cc.v2( - this.itemMainParam * (.5 + t) - this.spacing * t - this.topSpace, 0);
				this.scrollView.setContentPosition(o),
				s.EVENT.emit(a.EventId.ON_TREASURE_SELECT, t - 1),
				this.acquireIndex(t - 1)
			},
			e.prototype.scrollViewStart = function() {
				this.selectNode && this.selectNode && this.selectNode.getComponent(l.
			default).updateSelectState(!1)
			},
			e.prototype.acquireIndex = function(t) {
				for (var e = -1,
				o = 0; o < this.items.length; o++) if (t == this.items[o].itemId) {
					e = o;
					break
				}
				this.selectIndex = e,
				this.selectNode = this.items[e]
			},
			r([p], e)
		} (c.
	default));
		o.
	default = h,
		cc._RF.pop()
	},
	{
		"../../../Define/EventId": "EventId",
		"../../../Framework/Event/EventMgr": "EventMgr",
		"../../../Framework/UI/ScrollViewOptimizer": "ScrollViewOptimizer",
		"./TreasureItem": "TreasureItem"
	}],
	Treasure: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "fa460PIBeJBhrMUHzPcXjMU", "Treasure");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		},
		a = this && this.__awaiter ||
		function(t, e, o, i) {
			return new(o || (o = Promise))(function(n, r) {
				function a(t) {
					try {
						c(i.next(t))
					} catch(e) {
						r(e)
					}
				}
				function s(t) {
					try {
						c(i.
						throw (t))
					} catch(e) {
						r(e)
					}
				}
				function c(t) {
					var e;
					t.done ? n(t.value) : (e = t.value, e instanceof o ? e: new o(function(t) {
						t(e)
					})).then(a, s)
				}
				c((i = i.apply(t, e || [])).next())
			})
		},
		s = this && this.__generator ||
		function(t, e) {
			var o, i, n, r, a = {
				label: 0,
				sent: function() {
					if (1 & n[0]) throw n[1];
					return n[1]
				},
				trys: [],
				ops: []
			};
			return r = {
				next: s(0),
				throw: s(1),
				return: s(2)
			},
			"function" == typeof Symbol && (r[Symbol.iterator] = function() {
				return this
			}),
			r;
			function s(t) {
				return function(e) {
					return c([t, e])
				}
			}
			function c(r) {
				if (o) throw new TypeError("Generator is already executing.");
				for (; a;) try {
					if (o = 1, i && (n = 2 & r[0] ? i.
					return: r[0] ? i.
					throw || ((n = i.
					return) && n.call(i), 0) : i.next) && !(n = n.call(i, r[1])).done) return n;
					switch (i = 0, n && (r = [2 & r[0], n.value]), r[0]) {
					case 0:
					case 1:
						n = r;
						break;
					case 4:
						return a.label++,
						{
							value: r[1],
							done: !1
						};
					case 5:
						a.label++,
						i = r[1],
						r = [0];
						continue;
					case 7:
						r = a.ops.pop(),
						a.trys.pop();
						continue;
					default:
						if (! (n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === r[0] || 2 === r[0])) {
							a = 0;
							continue
						}
						if (3 === r[0] && (!n || r[1] > n[0] && r[1] < n[3])) {
							a.label = r[1];
							break
						}
						if (6 === r[0] && a.label < n[1]) {
							a.label = n[1],
							n = r;
							break
						}
						if (n && a.label < n[2]) {
							a.label = n[2],
							a.ops.push(r);
							break
						}
						n[2] && a.ops.pop(),
						a.trys.pop();
						continue
					}
					r = e.call(t, a)
				} catch(s) {
					r = [6, s],
					i = 0
				} finally {
					o = n = 0
				}
				if (5 & r[0]) throw r[1];
				return {
					value: r[0] ? r[1] : void 0,
					done: !0
				}
			}
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = t("../../../Controller/TreasureCtrl"),
		l = t("../../../Define/Define"),
		u = t("../../../Define/EventId"),
		p = t("../../../Framework/Event/EventMgr"),
		h = t("../../../Framework/UIBase"),
		d = t("../../../Platforms/BurierdPoint"),
		f = t("./TreasureItem"),
		_ = t("./TreasureScrollView"),
		y = cc._decorator,
		v = y.ccclass,
		m = y.property,
		g = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.treasureView = null,
				e.progress = null,
				e.progressTip = null,
				e.proFriendProgress = null,
				e.lblFriendProgress = null,
				e
			}
			return n(e, t),
			e.prototype.onLoad = function() {
				this.tipResetPosX = this.progressTip.position.x,
				p.EVENT.on(u.EventId.ON_UPDATE_TREASURETIP, this.updateState, this)
			},
			e.prototype.onOpen = function() {
				this.initialize()
			},
			e.prototype.initialize = function() {
				return a(this, void 0, void 0,
				function() {
					return s(this,
					function(t) {
						switch (t.label) {
						case 0:
							return [4, c.treasureCtrl.initialize()];
						case 1:
							return t.sent(),
							this.treasureView.setData(c.treasureCtrl.treasureDatas, this.onTreasureItemUpdate.bind(this)),
							this.treasureView.scrollToMid(c.treasureCtrl.showLevel),
							this.updateState(),
							[2]
						}
					})
				})
			},
			e.prototype.onTreasureItemUpdate = function(t, e, o) {
				e.getComponent(f.
			default).onItemUpdate(t, o)
			},
			e.prototype.updateState = function() {
				var t = c.treasureCtrl.updateProgress();
				c.treasureCtrl.updateFriendNum(),
				this.updateAmount(t)
			},
			e.prototype.updateFriendProgress = function(t, e) {
				this.proFriendProgress.progress = e / t > 1 ? 1 : e / t,
				this.lblFriendProgress.string = e + "/" + t
			},
			e.prototype.updateAmount = function(t) {
				this.progress.progress = t,
				this.progressTip.active = t > 0,
				this.progressTip.x = this.tipResetPosX - (1 - t) * this.progress.node.width
			},
			e.prototype.close = function() {
				t.prototype.close.call(this),
				c.treasureCtrl.updateReceiveData(),
				d.buriedPoint.sendEvent(l.TaEventName.btnClick, "\u5173\u95ed\u5f39\u7a97", l.TaView.popUp, "\u5956\u52b1\u5f39\u7a97")
			},
			r([m(_.
		default)], e.prototype, "treasureView", void 0),
			r([m(cc.ProgressBar)], e.prototype, "progress", void 0),
			r([m(cc.Node)], e.prototype, "progressTip", void 0),
			r([m({
				displayName: "\u597d\u53cb\u8ba4\u8bc1\u8fdb\u5ea6-\u8fdb\u5ea6\u6761",
				type: cc.ProgressBar
			})], e.prototype, "proFriendProgress", void 0),
			r([m({
				displayName: "\u597d\u53cb\u8ba4\u8bc1\u8fdb\u5ea6-\u6587\u5b57",
				type: cc.Label
			})], e.prototype, "lblFriendProgress", void 0),
			r([v], e)
		} (h.
	default);
		o.
	default = g,
		cc._RF.pop()
	},
	{
		"../../../Controller/TreasureCtrl": "TreasureCtrl",
		"../../../Define/Define": "Define",
		"../../../Define/EventId": "EventId",
		"../../../Framework/Event/EventMgr": "EventMgr",
		"../../../Framework/UIBase": "UIBase",
		"../../../Platforms/BurierdPoint": "BurierdPoint",
		"./TreasureItem": "TreasureItem",
		"./TreasureScrollView": "TreasureScrollView"
	}],
	UIBase: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "e0585CZW5BBgK519LYoyYnN", "UIBase");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.UIShowTypes = void 0;
		var a, s = t("../Define/UIDefs"),
		c = t("./UI/UIMgr"),
		l = t("./Utils/Utils"),
		u = t("./Res/ResKeeper"),
		p = cc._decorator,
		h = p.ccclass,
		d = p.property; (function(t) {
			t[t.UIFullScreen = 0] = "UIFullScreen",
			t[t.UIAddition = 1] = "UIAddition",
			t[t.UISingle = 2] = "UISingle"
		})(a = o.UIShowTypes || (o.UIShowTypes = {}));
		var f = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.showType = a.UISingle,
				e.quickClose = !0,
				e.showLayer = s.LayerType.Pop,
				e.cache = !1,
				e.maskOpacity = 255,
				e._para = null,
				e.isPlayOpenAni = !1,
				e.UIid = 0,
				e
			}
			return n(e, t),
			e.prototype.close = function() {
				c.
			default.inst.close(this.uiType)
			},
			e.prototype.init = function(t, e) {
				this._para = l.
			default.clone(t),
				this.uiType = e
			},
			e.prototype.onOpen = function() {},
			e.prototype.onOpenAniOver = function() {},
			e.prototype.onOpenFinish = function() {},
			e.prototype.onClose = function() {},
			e.prototype.onTop = function(t) {
				for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o]
			},
			r([d({
				type: cc.Enum(a),
				displayName: "\u663e\u793a\u7c7b\u578b"
			})], e.prototype, "showType", void 0),
			r([d()], e.prototype, "quickClose", void 0),
			r([d({
				type: cc.Enum(s.LayerType)
			})], e.prototype, "showLayer", void 0),
			r([d()], e.prototype, "cache", void 0),
			r([d()], e.prototype, "maskOpacity", void 0),
			r([h], e)
		} (u.
	default);
		o.
	default = f,
		cc._RF.pop()
	},
	{
		"../Define/UIDefs": "UIDefs",
		"./Res/ResKeeper": "ResKeeper",
		"./UI/UIMgr": "UIMgr",
		"./Utils/Utils": "Utils"
	}],
	UICloseAnimation: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "0a83aI6odRAhpOnBMcQ6/en", "UICloseAnimation");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
		s = a.ccclass,
		c = (a.property,
		function(t) {
			function e() {
				return null !== t && t.apply(this, arguments) || this
			}
			return n(e, t),
			r([s], e)
		} (cc.Animation));
		o.
	default = c,
		cc._RF.pop()
	},
	{}],
	UIDefs: [function(t, e, o) {
		"use strict";
		var i;
		cc._RF.push(e, "cfbd74GR/NOr782467+09nO", "UIDefs"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.UIDataInfo = o.UIType = o.LayerType = void 0,
		function(t) {
			t[t.GUI = 0] = "GUI",
			t[t.Pop = 1] = "Pop",
			t[t.Tip = 2] = "Tip",
			t[t.Top = 3] = "Top"
		} (o.LayerType || (o.LayerType = {})),
		function(t) {
			t[t.$Start = 0] = "$Start",
			t[t.Confirm = 1] = "Confirm",
			t[t.ShareGuide = 2] = "ShareGuide",
			t[t.TestAccountLogin = 3] = "TestAccountLogin",
			t[t.Loading = 4] = "Loading",
			t[t.Setting = 5] = "Setting",
			t[t.Test = 6] = "Test",
			t[t.FriendRank = 7] = "FriendRank",
			t[t.Battle = 8] = "Battle",
			t[t.WorldRank = 9] = "WorldRank",
			t[t.Rule = 10] = "Rule",
			t[t.Treasure = 11] = "Treasure",
			t[t.Invitation = 12] = "Invitation",
			t[t.PassivePk = 13] = "PassivePk",
			t[t.GradeRule = 14] = "GradeRule",
			t[t.GameOver = 15] = "GameOver",
			t[t.OpenBox = 16] = "OpenBox",
			t[t.Priseview = 17] = "Priseview",
			t[t.GetRewards = 18] = "GetRewards",
			t[t.QRShare = 19] = "QRShare",
			t[t.Lack = 20] = "Lack",
			t[t.Guide = 21] = "Guide",
			t[t.GuideGameOver = 22] = "GuideGameOver",
			t[t.Announcement = 23] = "Announcement",
			t[t.AwardRank = 24] = "AwardRank",
			t[t.BattleResult = 25] = "BattleResult",
			t[t.$End = 26] = "$End"
		} (i = o.UIType || (o.UIType = {}));
		var n = function() {
			function t(t, e, o, i) {
				void 0 === o && (o = !0),
				void 0 === i && (i = !0),
				this.preventTouch = !0,
				this.uiType = t,
				this.uiPath = e,
				this.preventTouch = o,
				this.lucency = i
			}
			return Object.defineProperty(t.prototype, "fullPath", {
				get: function() {
					return "UIPrefab/" + this.uiPath
				},
				enumerable: !1,
				configurable: !0
			}),
			t.getUIData = function(t) {
				for (var e = 0; e < this._uiDataList.length; ++e) if (this._uiDataList[e].uiType == t) return this._uiDataList[e];
				return null
			},
			t._uiDataList = [new t(i.Guide, "Guide/Guide"), new t(i.Lack, "Lack"), new t(i.GuideGameOver, "Guide/GuideGameOver"), new t(i.Announcement, "Announcement"), new t(i.AwardRank, "AwardRank/AwardRank"), new t(i.TestAccountLogin, "AccountLogin"), new t(i.Loading, "Loading"), new t(i.ShareGuide, "ShareGuide"), new t(i.BattleResult, "BattleResult"), new t(i.Battle, "battle", !1), new t(i.QRShare, "QRShare", !0, !1), new t(i.Invitation, "Battle/Invitation"), new t(i.PassivePk, "Battle/PassivePk"), new t(i.Priseview, "Priseview"), new t(i.WorldRank, "WorldRank/WorldRank"), new t(i.FriendRank, "FriendRank/FriendRank"), new t(i.Rule, "Rule"), new t(i.Treasure, "Treasure/Treasure"), new t(i.GradeRule, "GradeRule"), new t(i.GameOver, "GameOver"), new t(i.Setting, "Setting"), new t(i.Confirm, "common/confirm"), new t(i.Test, "TestUI"), new t(i.OpenBox, "Openbox"), new t(i.GetRewards, "Getrewards/GetRewards")],
			t
		} ();
		o.UIDataInfo = n,
		cc._RF.pop()
	},
	{}],
	UIEffectMgr: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "649bcq5eVVD6LkHQOcLPWVa", "UIEffectMgr");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../Sys/TeMap"),
		s = t("./UIEffectType"),
		c = t("./UIEffect"),
		l = t("../Res/ResUtil"),
		u = t("../Res/NodePool"),
		p = t("../Sys/Handler"),
		h = cc._decorator,
		d = h.ccclass,
		f = h.property,
		_ = function() {
			function t() {
				this.group = null,
				this.effectTypes = []
			}
			return r([f({
				type: cc.Node,
				displayName: "\u7279\u6548\u663e\u793a\u5bb9\u5668(\u5c42\u7ea7)"
			})], t.prototype, "group", void 0),
			r([f({
				type: [cc.Enum(s.UIEffectType)],
				displayName: "\u52a0\u5165\u6b64\u5bb9\u5668\u7279\u6548\u7c7b\u578b\u5217\u8868"
			})], t.prototype, "effectTypes", void 0),
			r([d("EffectGroupType")], t)
		} (),
		y = function() {
			function t() {
				this.effectType = s.UIEffectType.None,
				this.prefab = null
			}
			return r([f({
				type: cc.Enum(s.UIEffectType),
				displayName: "\u7279\u6548\u7c7b\u578b"
			})], t.prototype, "effectType", void 0),
			r([f({
				type: cc.Prefab,
				displayName: "prefab"
			})], t.prototype, "prefab", void 0),
			r([d("EffectPrefab")], t)
		} (),
		v = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.effectPrefabs = [],
				e.effectConfigs = [],
				e._effectPrefabMap = new a.
			default,
				e._effectGroupMap = new a.
			default,
				e._effectPool = new a.
			default,
				e
			}
			var o;
			return n(e, t),
			o = e,
			Object.defineProperty(e, "inst", {
				get: function() {
					return this._inst || cc.error("Effect Manger not load yet!"),
					this._inst
				},
				enumerable: !1,
				configurable: !0
			}),
			e.prototype.onLoad = function() {
				o._inst = this;
				for (var t = 0; t < this.effectConfigs.length; ++t) for (var e = this.effectConfigs[t], i = e.effectTypes, n = 0; n < i.length; ++n) this._effectGroupMap.set(i[n], e.group);
				for (t = 0; t < this.effectPrefabs.length; ++t) {
					var r = this.effectPrefabs[t],
					a = r.prefab,
					s = new u.NodePool;
					s.init(a),
					this._effectPool.set(r.effectType, s),
					this._effectPrefabMap.set(r.effectType, a)
				}
			},
			e.prototype.addEffect = function(t, e, o, i) {
				void 0 === e && (e = !0),
				void 0 === i && (i = !0);
				var n = this.createEffect(t, e, i);
				if (!n) return cc.error("add effect fail!"),
				null;
				var r = this._effectGroupMap.get(t);
				return r && (r.addChild(n), o && n.setPosition(r.convertToNodeSpaceAR(o))),
				n.getComponent(c.
			default)
			},
			e.prototype.createEffect = function(t, e, o) {
				void 0 === e && (e = !0),
				void 0 === o && (o = !0);
				var i = null,
				n = this._effectPool.get(t);
				if (n && (i = n.getNode()), !i) {
					var r = this._effectPrefabMap.get(t);
					if (!r) return cc.error("effect prefab not found!"),
					null;
					i = l.ResUtil.instantiate(r)
				}
				if (i) {
					var a = i.getComponent(c.
				default);
					a ? (a.effectType = t, o && a.setCompleteCallback(new p.Handler(this, this.recovery, null, !0)), e && a.playAni()) : cc.error("effect script not found!")
				}
				return i
			},
			e.prototype.recovery = function(t, e) {
				e && e.parent && e.removeFromParent();
				var o = this._effectPool.get(t);
				o || (o = new u.NodePool, this._effectPool.set(t, o)),
				o.freeNode(e)
			},
			e.prototype.onDestroy = function() {
				for (var t = this._effectPool.keys,
				e = 0; e < t.length; ++e) {
					var i = this._effectPool.get(t[e]);
					i && i.destory()
				}
				this._effectPool.clear(),
				o._inst = null
			},
			e._inst = null,
			r([f({
				type: [y],
				displayName: "\u7279\u6548\u5217\u8868"
			})], e.prototype, "effectPrefabs", void 0),
			r([f({
				type: [_],
				displayName: "\u7279\u6548\u663e\u793a\u5c42\u7ea7\u914d\u7f6e"
			})], e.prototype, "effectConfigs", void 0),
			o = r([d], e)
		} (cc.Component);
		o.
	default = v,
		cc._RF.pop()
	},
	{
		"../Res/NodePool": "NodePool",
		"../Res/ResUtil": "ResUtil",
		"../Sys/Handler": "Handler",
		"../Sys/TeMap": "TeMap",
		"./UIEffect": "UIEffect",
		"./UIEffectType": "UIEffectType"
	}],
	UIEffectType: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "1da57crPXROAKu2mBh3z0Uw", "UIEffectType"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.UIEffectType = void 0,
		function(t) {
			t[t.None = 0] = "None",
			t[t.ShootStart = 1] = "ShootStart",
			t[t.HitBoos = 2] = "HitBoos",
			t[t.CardBlingOut = 3] = "CardBlingOut",
			t[t.UnitStartSKill = 4] = "UnitStartSKill",
			t[t.ComboHitEffect = 5] = "ComboHitEffect",
			t[t.PowerFlip = 6] = "PowerFlip",
			t[t.PowerFlipScreen = 7] = "PowerFlipScreen"
		} (o.UIEffectType || (o.UIEffectType = {})),
		cc._RF.pop()
	},
	{}],
	UIEffect: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "49cc1syEbFNZIzE5LScS9YR", "UIEffect");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("./UIEffectType"),
		s = cc._decorator,
		c = s.ccclass,
		l = (s.property,
		function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e._ani = null,
				e._completeCallback = null,
				e._effectType = a.UIEffectType.None,
				e
			}
			var o;
			return n(e, t),
			o = e,
			Object.defineProperty(e.prototype, "ani", {
				get: function() {
					return this._ani
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "effectType", {
				get: function() {
					return this._effectType
				},
				set: function(t) {
					this._effectType = t
				},
				enumerable: !1,
				configurable: !0
			}),
			e.prototype.onLoad = function() {
				this._ani = this.node.getComponent(cc.Animation)
			},
			e.prototype.setCompleteCallback = function(t) {
				this._completeCallback = t
			},
			e.prototype.onAniComplete = function() {
				this._completeCallback && this._completeCallback.runWith([this.effectType, this.node]),
				this.node.emit(o.EVENT_ANI_COMPLETE)
			},
			e.prototype.start = function() {
				this.playAni()
			},
			e.prototype.playAni = function() {
				this._ani && this._ani.play().wrapMode != cc.WrapMode.Loop && this._ani.once("finished", this.onAniComplete, this)
			},
			e.prototype.setPlayTime = function(t) {
				this._ani.defaultClip.speed = t / 1e3 / this._ani.defaultClip.duration
			},
			e.prototype.onEnable = function() {},
			e.prototype.onDisable = function() {
				this._ani && this._ani.off("finished", this.onAniComplete, this)
			},
			e.EVENT_ANI_COMPLETE = "UIEffect.EVENT_ANI_COMPLETE",
			o = r([c], e)
		} (cc.Component));
		o.
	default = l,
		cc._RF.pop()
	},
	{
		"./UIEffectType": "UIEffectType"
	}],
	UIFacade: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "16e3aBpWmhDeZYUzLRkyJpM", "UIFacade");
		var i = this && this.__awaiter ||
		function(t, e, o, i) {
			return new(o || (o = Promise))(function(n, r) {
				function a(t) {
					try {
						c(i.next(t))
					} catch(e) {
						r(e)
					}
				}
				function s(t) {
					try {
						c(i.
						throw (t))
					} catch(e) {
						r(e)
					}
				}
				function c(t) {
					var e;
					t.done ? n(t.value) : (e = t.value, e instanceof o ? e: new o(function(t) {
						t(e)
					})).then(a, s)
				}
				c((i = i.apply(t, e || [])).next())
			})
		},
		n = this && this.__generator ||
		function(t, e) {
			var o, i, n, r, a = {
				label: 0,
				sent: function() {
					if (1 & n[0]) throw n[1];
					return n[1]
				},
				trys: [],
				ops: []
			};
			return r = {
				next: s(0),
				throw: s(1),
				return: s(2)
			},
			"function" == typeof Symbol && (r[Symbol.iterator] = function() {
				return this
			}),
			r;
			function s(t) {
				return function(e) {
					return c([t, e])
				}
			}
			function c(r) {
				if (o) throw new TypeError("Generator is already executing.");
				for (; a;) try {
					if (o = 1, i && (n = 2 & r[0] ? i.
					return: r[0] ? i.
					throw || ((n = i.
					return) && n.call(i), 0) : i.next) && !(n = n.call(i, r[1])).done) return n;
					switch (i = 0, n && (r = [2 & r[0], n.value]), r[0]) {
					case 0:
					case 1:
						n = r;
						break;
					case 4:
						return a.label++,
						{
							value: r[1],
							done: !1
						};
					case 5:
						a.label++,
						i = r[1],
						r = [0];
						continue;
					case 7:
						r = a.ops.pop(),
						a.trys.pop();
						continue;
					default:
						if (! (n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === r[0] || 2 === r[0])) {
							a = 0;
							continue
						}
						if (3 === r[0] && (!n || r[1] > n[0] && r[1] < n[3])) {
							a.label = r[1];
							break
						}
						if (6 === r[0] && a.label < n[1]) {
							a.label = n[1],
							n = r;
							break
						}
						if (n && a.label < n[2]) {
							a.label = n[2],
							a.ops.push(r);
							break
						}
						n[2] && a.ops.pop(),
						a.trys.pop();
						continue
					}
					r = e.call(t, a)
				} catch(s) {
					r = [6, s],
					i = 0
				} finally {
					o = n = 0
				}
				if (5 & r[0]) throw r[1];
				return {
					value: r[0] ? r[1] : void 0,
					done: !0
				}
			}
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.UIFacade = void 0;
		var r = t("./UIMgr"),
		a = t("../../Define/UIDefs"),
		s = t("../../Define/EventId"),
		c = t("../Event/EventMgr"),
		l = t("./FlyTxtPool"),
		u = function() {
			function t() {}
			return t.showToast = function(t) {
				r.
			default.inst.showToast(t)
			},
			t.showConfirm = function(t, e, o) {
				return void 0 === e && (e = "\u786e\u8ba4"),
				void 0 === o && (o = "\u53d6\u6d88"),
				i(this, void 0, Promise,
				function() {
					return n(this,
					function() {
						return [2, new Promise(function(i) {
							r.
						default.inst.open(a.UIType.Confirm, {
								content: t,
								confirmBtnTxt: e,
								cancelBtnTxt: o
							}),
							c.EVENT.once(s.EventId.EVENT_CONFIRM,
							function(t) {
								i(t)
							})
						})]
					})
				})
			},
			t.showLoading = function(t) {
				r.
			default.inst.showSceneLoadUI(t)
			},
			t.hideLoading = function() {
				r.
			default.inst.hideSceneLoadUI()
			},
			t.flyTxt = function(t, e, o) {
				void 0 === o && (o = cc.Color.WHITE),
				l.FlyTxtPool.flyTxt(t, e, o)
			},
			t.flyTxtCenter = function(t, e) {
				void 0 === e && (e = cc.Color.WHITE);
				var o = r.
			default.inst.winSize,
				i = cc.v2(o.width / 2, o.height / 2);
				l.FlyTxtPool.flyTxt(t, i, e)
			},
			t
		} ();
		o.UIFacade = u,
		cc._RF.pop()
	},
	{
		"../../Define/EventId": "EventId",
		"../../Define/UIDefs": "UIDefs",
		"../Event/EventMgr": "EventMgr",
		"./FlyTxtPool": "FlyTxtPool",
		"./UIMgr": "UIMgr"
	}],
	UIMgr: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "e5f7aIPaPFCQK9zX5+7Hh5H", "UIMgr");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.eOrientation = void 0;
		var a = t("../../Define/UIDefs"),
		s = t("../UIBase"),
		c = t("./CommonToast"),
		l = t("../../Define/EventId"),
		u = t("../Res/ResLoader"),
		p = t("./UIOpenAnimation"),
		h = t("./UICloseAnimation"),
		d = t("../Res/ResUtil"),
		f = t("../Event/EventMgr"),
		_ = t("../Scene/SceneMgr"),
		y = cc._decorator,
		v = y.ccclass,
		m = y.property; (function(t) {
			t[t.Landscape = 0] = "Landscape",
			t[t.Portrait = 1] = "Portrait"
		})(o.eOrientation || (o.eOrientation = {}));
		var g = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.guiLayer = null,
				e.popLayer = null,
				e.tipLayer = null,
				e.topLayer = null,
				e.uiWaitNode = null,
				e.waitMask = null,
				e.sceneWaitNode = null,
				e.sceneWaitLbl = null,
				e.tipsNode = null,
				e.uiBack = null,
				e._tipComponnet = null,
				e.BackGroundUI = 0,
				e.isClosing = !1,
				e.isOpening = !1,
				e.UICache = {},
				e.UIStack = [],
				e.UIOpenQueue = [],
				e.uiOpenBeforeDelegate = null,
				e.uiOpenDelegate = null,
				e.uiCloseDelegate = null,
				e
			}
			var o;
			return n(e, t),
			o = e,
			Object.defineProperty(e, "inst", {
				get: function() {
					return o._inst ? o._inst: (cc.error("UIMgr not load yet!", "%s"), null)
				},
				enumerable: !1,
				configurable: !0
			}),
			e.prototype.onLoad = function() {
				this.resetWinSize(),
				o._inst = this
			},
			e.prototype.open = function(t, e, o) {
				var i = this;
				void 0 === o && (o = null);
				var n = {
					uiType: t,
					uiArgs: e,
					uiView: null
				};
				if (this.isOpening || this.isClosing) return cc.log("open <" + a.UIType[t] + "> ui action push into a queue!"),
				void this.UIOpenQueue.push(n);
				if ( - 1 == this.getUIIndex(t)) {
					n.zOrder = this.UIStack.length + 1,
					this.UIStack.push(n);
					var r = a.UIDataInfo.getUIData(t);
					r.preventTouch && (n.preventNode = this.preventTouch(n.zOrder, r.lucency)),
					this.isOpening = !0,
					this.showUIWaitAnim(),
					this.getOrCreateUI(t, o,
					function(o) {
						if (i.hideUIWaitAnim(), n.isClose || null == o) return cc.log("getOrCreateUI " + t + " faile! close state : " + n.isClose + " , uiView : " + o, "%s"),
						i.isOpening = !1,
						n.preventNode && (n.preventNode.destroy(), n.preventNode = null),
						void f.EVENT.emit(l.EventId.ON_UI_OPEN_FAIL, t);
						i.onUIOpen(t, o, n, e),
						i.isOpening = !1,
						o.onOpenFinish(),
						i.autoExecNextUI()
					},
					e)
				} else this.closeToUI(t, e)
			},
			e.prototype.closeToUI = function(t, e, o) {
				void 0 === o && (o = !0);
				var i = this.getUIIndex(t);
				if ( - 1 != i) {
					i = o ? i: i + 1;
					for (var n = this.UIStack.length - 1; n >= i; --n) {
						var r = this.UIStack.pop(),
						a = r.uiType,
						s = r.uiView;
						r.isClose = !0,
						r.preventNode && (r.preventNode.destroy(), r.preventNode = null),
						this.uiCloseDelegate && this.uiCloseDelegate(a),
						s && (s.onClose(), s.cache ? (this.UICache[a] = s, s.node.removeFromParent(!1)) : s.node.destroy())
					}
					this.updateUI(),
					this.UIOpenQueue = [],
					o && this.open(t, e)
				}
			},
			e.prototype.resetWinSize = function() {
				this._winSize = cc.view.getVisibleSize(),
				this.node.setContentSize(this._winSize)
			},
			e.prototype.getLayer = function(t) {
				var e = null;
				switch (t) {
				case a.LayerType.GUI:
					e = this.guiLayer;
					break;
				case a.LayerType.Pop:
					e = this.popLayer;
					break;
				case a.LayerType.Tip:
					e = this.tipLayer;
					break;
				case a.LayerType.Top:
					e = this.topLayer;
					break;
				default:
					cc.error("Unkonw layer type!", "%s")
				}
				return e
			},
			e.prototype.add2Layer = function(t, e) {
				if (e) {
					var o = this.getLayer(t);
					o ? o.addChild(e) : cc.error("add to layer is not found!", "%s")
				} else cc.error("node is not valid!", "%s")
			},
			e.prototype.closeAll = function(t, e) {
				void 0 === t && (t = !1),
				void 0 === e && (e = a.UIType.Loading);
				for (var o = this.UIStack.length - 1; o >= 0; --o) {
					var i = this.UIStack[o];
					i.uiType != e && (t && _.SCENE.pushReviveWnd(i.uiType, i.uiArgs), this.close(i.uiType, !1))
				}
				this.UIOpenQueue = [],
				this.isOpening = !1,
				this.isClosing = !1
			},
			e.prototype.clearCache = function() {
				for (var t in this.UICache) {
					var e = this.UICache[t];
					cc.isValid(e.node) && e.node.destroy()
				}
				this.UICache = {}
			},
			e.prototype.isTopUI = function(t) {
				return 0 != this.UIStack.length && this.UIStack[this.UIStack.length - 1].uiType == t
			},
			e.prototype.getUI = function(t) {
				for (var e = 0; e < this.UIStack.length; e++) {
					var o = this.UIStack[e];
					if (t == o.uiType) return o.uiView
				}
				return null
			},
			e.prototype.isUIOpen = function(t) {
				return null != this.getUI(t)
			},
			e.prototype.getTopUI = function() {
				return this.UIStack.length > 0 ? this.UIStack[this.UIStack.length - 1].uiView: null
			},
			e.prototype.showUIWaitAnim = function(t, e) {
				void 0 === t && (t = !0),
				void 0 === e && (e = 15),
				this.uiWaitNode && (this.uiWaitNode.active = !0),
				this.waitMask && (this.waitMask.active = !0),
				t ? this.waitMask && (this.waitMask.opacity = 30) : this.waitMask && (this.waitMask.opacity = 0)
			},
			e.prototype.hideUIWaitAnim = function() {
				this.uiWaitNode && (this.uiWaitNode.active = !1),
				this.waitMask && (this.waitMask.active = !1)
			},
			e.prototype.showSceneLoadUI = function(t) {
				this.sceneWaitNode && (this.sceneWaitNode.active = !0, this.sceneWaitLbl.string = t)
			},
			e.prototype.hideSceneLoadUI = function() {
				this.sceneWaitNode && (this.sceneWaitNode.active = !1)
			},
			e.prototype.showToast = function(t) {
				if (null != t && null != t) {
					if (!this._tipComponnet) {
						var e = cc.instantiate(this.tipsNode).getComponent(c.
					default);
						e.node.parent = this.getLayer(a.LayerType.Tip),
						e.node.name = "_tip_",
						this._tipComponnet = e
					}
					this._tipComponnet.showTips(t)
				}
			},
			Object.defineProperty(e.prototype, "winSize", {
				get: function() {
					return this._winSize
				},
				enumerable: !1,
				configurable: !0
			}),
			e.prototype.close = function(t, e) {
				var o = this;
				void 0 === e && (e = !0),
				cc.log("close ui <" + a.UIType[t] + ">");
				var i, n = this.UIStack.length;
				if (t > a.UIType.$Start && t < a.UIType.$End) if (n < 1 || this.isClosing || this.isOpening || !this.isUIOpen(t)) cc.log("<" + a.UIType[t] + "> can not be close in this period of time");
				else {
					for (var r = this.UIStack.length - 1; r >= 0; r--) {
						var s = this.UIStack[r];
						if (s.uiType === t) {
							i = s,
							this.UIStack.splice(r, 1);
							break
						}
					}
					if (void 0 !== i) {
						this.isClosing = !0;
						var c = i.uiType,
						p = i.uiView;
						if (i.isClose = !0, i.preventNode && (i.preventNode.destroy(), i.preventNode = null), null != p) {
							var d = this.UIStack[n - 2];
							this.updateUI();
							var _ = function() {
								d && d.uiView && o.isTopUI(d.uiType) ? (d.uiView.node.active = !0, d.uiView.onTop(c, p.onClose())) : p.onClose(),
								o.uiCloseDelegate && o.uiCloseDelegate(c),
								p.cache ? (o.UICache[c] = p, p.node.removeFromParent(!1), cc.log("uiView removeFromParent " + i.uiType)) : (p.node.destroy(), u.resLoader.releaseAsset(p.__prefab__), cc.log("uiView destroy <" + a.UIType[i.uiType] + ">")),
								o.isClosing = !1,
								o.autoExecNextUI(),
								f.EVENT.emit(l.EventId.ON_UI_CLOSE, t)
							},
							y = p.node.getComponent(h.
						default);
							e && y ? (p.isPlayOpenAni = !0, y.play().wrapMode == cc.WrapMode.Loop && cc.error("UI close animation should be a loop animation!", "%s"), y.on("finished",
							function() {
								_()
							},
							this, !1)) : _()
						} else this.isClosing = !1
					}
				} else cc.error("unknown ui type to close!", "%s")
			},
			e.prototype.getOpenUICount = function() {
				return this.UIStack.length
			},
			e.prototype.replace = function(t, e) {
				this.close(this.UIStack[this.UIStack.length - 1].uiType),
				this.open(t, e)
			},
			e.prototype.getUIIndex = function(t) {
				for (var e = 0; e < this.UIStack.length; e++) if (t == this.UIStack[e].uiType) return e;
				return - 1
			},
			e.prototype.preventTouch = function(t, e) {
				void 0 === e && (e = !0);
				var o = d.ResUtil.instantiate(this.uiBack);
				return o.name = "preventTouch",
				o.setContentSize(new cc.Size(this.winSize.width, 2 * this.winSize.height)),
				o.on(cc.Node.EventType.TOUCH_START,
				function(t) {
					t.stopPropagation()
				},
				o),
				this.getLayer(a.LayerType.Pop).addChild(o, t),
				o.getComponent(cc.Sprite).enabled = e,
				o
			},
			e.prototype.autoExecNextUI = function() {
				if (this.UIOpenQueue.length > 0) {
					var t = this.UIOpenQueue[0];
					this.UIOpenQueue.splice(0, 1),
					this.open(t.uiType, t.uiArgs)
				}
			},
			e.prototype.updateUI = function() {
				for (var t = 0,
				e = this.UIStack.length - 1; e >= 0; --e) {
					var o = this.UIStack[e].uiView.showType;
					if (this.UIStack[e].uiView.node.active = !0, s.UIShowTypes.UIFullScreen == o) break;
					if (s.UIShowTypes.UISingle == o) {
						for (var i = 0; i < this.BackGroundUI; ++i) this.UIStack[i] && (this.UIStack[i].uiView.node.active = !0);
						t = this.BackGroundUI;
						break
					}
				}
				for (var n = t; n < e; ++n) this.UIStack[n].uiView.node.active = !1
			},
			e.prototype.getOrCreateUI = function(t, e, i, n) {
				var r = this.UICache[t];
				if (r) i(r);
				else {
					var c = a.UIDataInfo.getUIData(t);
					if (!c || !c.fullPath) return cc.log("getOrCreateUI " + t + " faile, prefab conf not found!"),
					void i(null);
					var l = c.fullPath;
					u.resLoader.loadRes(l, e,
					function(e, a) {
						if (e) {
							cc.log("getOrCreateUI loadRes " + t + " faile, path: " + l),
							i(null);
							try {
								cc.error(e)
							} catch(y) {}
						} else {
							var c = cc.instantiate(a);
							if (null == c) return cc.log("getOrCreateUI instantiate " + t + " faile, path: " + l),
							i(null),
							void u.resLoader.releaseAsset(a);
							if (null == (r = c.getComponent(s.
						default))) return cc.log("getOrCreateUI getComponent " + t + " faile, path: " + l),
							c.destroy(),
							i(null),
							void u.resLoader.releaseAsset(a);
							var p = o.inst.getCanvasSize();
							r.node.width = p.width,
							r.node.height = p.height,
							r.__prefab__ = a,
							a.addRef(),
							r.init(n, t),
							i(r)
						}
					})
				}
			},
			e.prototype.getCanvasSize = function() {
				return new cc.Size(this.node.width, this.node.height)
			},
			e.prototype.onUIOpen = function(t, e, o, i) {
				var n = this;
				if (null != e) {
					if (o.uiView = e, e.node.active = !0, e.node.zIndex = o.zOrder || this.UIStack.length, o.preventNode && (o.preventNode.opacity = e.maskOpacity), e.quickClose) {
						var r = e.node.getChildByName("background");
						r || ((r = new cc.Node).name = "background", r.setContentSize(cc.winSize), e.node.addChild(r, -1)),
						r.targetOff(cc.Node.EventType.TOUCH_START),
						r.on(cc.Node.EventType.TOUCH_END,
						function(e) {
							e.stopPropagation(),
							cc.log("touch close <" + a.UIType[t] + ">"),
							n.close(t)
						},
						r)
					}
					this.add2Layer(e.showLayer, e.node),
					this.updateUI();
					var s = 0;
					this.UIStack.length > 1 && (s = this.UIStack[this.UIStack.length - 2].uiType),
					this.uiOpenBeforeDelegate && this.uiOpenBeforeDelegate(t, s),
					e.onOpen(s, i);
					var c = function() {
						e.isPlayOpenAni = !1,
						e.onOpenAniOver(),
						n.uiOpenDelegate && n.uiOpenDelegate(t, s),
						f.EVENT.emit(l.EventId.ON_UI_OPEN, t)
					},
					u = e.node.getComponent(p.
				default);
					u ? (e.isPlayOpenAni = !0, u.play().wrapMode == cc.WrapMode.Loop && cc.error("UI open animation should not be a loop animation!"), u.once("finished",
					function() {
						c()
					},
					this)) : c()
				}
			},
			e.prototype.getOpenQueueCount = function() {
				return this.UIOpenQueue.length
			},
			r([m(cc.Node)], e.prototype, "guiLayer", void 0),
			r([m(cc.Node)], e.prototype, "popLayer", void 0),
			r([m(cc.Node)], e.prototype, "tipLayer", void 0),
			r([m(cc.Node)], e.prototype, "topLayer", void 0),
			r([m(cc.Node)], e.prototype, "uiWaitNode", void 0),
			r([m(cc.Node)], e.prototype, "waitMask", void 0),
			r([m(cc.Node)], e.prototype, "sceneWaitNode", void 0),
			r([m(cc.Label)], e.prototype, "sceneWaitLbl", void 0),
			r([m(cc.Prefab)], e.prototype, "tipsNode", void 0),
			r([m(cc.Prefab)], e.prototype, "uiBack", void 0),
			o = r([v], e)
		} (cc.Component);
		o.
	default = g,
		cc._RF.pop()
	},
	{
		"../../Define/EventId": "EventId",
		"../../Define/UIDefs": "UIDefs",
		"../Event/EventMgr": "EventMgr",
		"../Res/ResLoader": "ResLoader",
		"../Res/ResUtil": "ResUtil",
		"../Scene/SceneMgr": "SceneMgr",
		"../UIBase": "UIBase",
		"./CommonToast": "CommonToast",
		"./UICloseAnimation": "UICloseAnimation",
		"./UIOpenAnimation": "UIOpenAnimation"
	}],
	UIOpenAnimation: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "2f4fe0wTRVJ/6kG1ktMX+6i", "UIOpenAnimation");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
		s = a.ccclass,
		c = (a.property,
		function(t) {
			function e() {
				return null !== t && t.apply(this, arguments) || this
			}
			return n(e, t),
			r([s], e)
		} (cc.Animation));
		o.
	default = c,
		cc._RF.pop()
	},
	{}],
	UserModel: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "1e0caSx7BFMtrnw+8/CYayp", "UserModel");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		},
		a = this && this.__awaiter ||
		function(t, e, o, i) {
			return new(o || (o = Promise))(function(n, r) {
				function a(t) {
					try {
						c(i.next(t))
					} catch(e) {
						r(e)
					}
				}
				function s(t) {
					try {
						c(i.
						throw (t))
					} catch(e) {
						r(e)
					}
				}
				function c(t) {
					var e;
					t.done ? n(t.value) : (e = t.value, e instanceof o ? e: new o(function(t) {
						t(e)
					})).then(a, s)
				}
				c((i = i.apply(t, e || [])).next())
			})
		},
		s = this && this.__generator ||
		function(t, e) {
			var o, i, n, r, a = {
				label: 0,
				sent: function() {
					if (1 & n[0]) throw n[1];
					return n[1]
				},
				trys: [],
				ops: []
			};
			return r = {
				next: s(0),
				throw: s(1),
				return: s(2)
			},
			"function" == typeof Symbol && (r[Symbol.iterator] = function() {
				return this
			}),
			r;
			function s(t) {
				return function(e) {
					return c([t, e])
				}
			}
			function c(r) {
				if (o) throw new TypeError("Generator is already executing.");
				for (; a;) try {
					if (o = 1, i && (n = 2 & r[0] ? i.
					return: r[0] ? i.
					throw || ((n = i.
					return) && n.call(i), 0) : i.next) && !(n = n.call(i, r[1])).done) return n;
					switch (i = 0, n && (r = [2 & r[0], n.value]), r[0]) {
					case 0:
					case 1:
						n = r;
						break;
					case 4:
						return a.label++,
						{
							value: r[1],
							done: !1
						};
					case 5:
						a.label++,
						i = r[1],
						r = [0];
						continue;
					case 7:
						r = a.ops.pop(),
						a.trys.pop();
						continue;
					default:
						if (! (n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === r[0] || 2 === r[0])) {
							a = 0;
							continue
						}
						if (3 === r[0] && (!n || r[1] > n[0] && r[1] < n[3])) {
							a.label = r[1];
							break
						}
						if (6 === r[0] && a.label < n[1]) {
							a.label = n[1],
							n = r;
							break
						}
						if (n && a.label < n[2]) {
							a.label = n[2],
							a.ops.push(r);
							break
						}
						n[2] && a.ops.pop(),
						a.trys.pop();
						continue
					}
					r = e.call(t, a)
				} catch(s) {
					r = [6, s],
					i = 0
				} finally {
					o = n = 0
				}
				if (5 & r[0]) throw r[1];
				return {
					value: r[0] ? r[1] : void 0,
					done: !0
				}
			}
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.UserData = o.userModel = void 0;
		var c = t("../Define/Define"),
		l = t("../Define/EventId"),
		u = t("../Define/StaticData"),
		p = t("../Define/UIDefs"),
		h = t("../Framework/Event/EventMgr"),
		d = t("../Framework/UI/UIMgr"),
		f = t("../Framework/Utils/Singleton"),
		_ = t("../Network/Net"),
		y = t("../Platforms/BurierdPoint"),
		v = t("../Platforms/Platform"),
		m = cc._decorator,
		g = m.ccclass,
		b = (m.property,
		function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.loginState = !1,
				e
			}
			return n(e, t),
			Object.defineProperty(e.prototype, "userInfo", {
				get: function() {
					return this._userInfo
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "winNum", {
				get: function() {
					return this.userInfo.winNum
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "rankNum", {
				get: function() {
					return this.userInfo.getRankNum()
				},
				enumerable: !1,
				configurable: !0
			}),
			e.prototype.init = function() {
				this.exchangeUserData()
			},
			e.prototype.updateAllNetMes = function(t) {
				return void 0 === t && (t = !1),
				a(this, void 0, void 0,
				function() {
					var e, o;
					return s(this,
					function(i) {
						switch (i.label) {
						case 0:
							return [4, _.Net.getUserPkInfo()];
						case 1:
							return e = i.sent(),
							[4, _.Net.getMyRankInfo()];
						case 2:
							return o = i.sent(),
							e ? (this.userInfo.updateInfo(o), this.userInfo.updatePkInfo(e), h.EVENT.emit(l.EventId.ON_UPDATE_USERINFO, this.userInfo, t), [2]) : [2]
						}
					})
				})
			},
			e.prototype.updateGradeMes = function() {
				return a(this, void 0, void 0,
				function() {
					var t;
					return s(this,
					function(e) {
						switch (e.label) {
						case 0:
							return [4, _.Net.getScore()];
						case 1:
							return t = e.sent(),
							this.userInfo.grade = t,
							o.userModel.CheckGradeState(),
							[2]
						}
					})
				})
			},
			e.prototype.updatePkMes = function() {
				return a(this, void 0, void 0,
				function() {
					var t;
					return s(this,
					function(e) {
						switch (e.label) {
						case 0:
							return [4, _.Net.getUserPkInfo()];
						case 1:
							return (t = e.sent()) ? (this.userInfo.updatePkInfo(t), h.EVENT.emit(l.EventId.ON_UPDATE_USERINFO, this.userInfo), [2]) : [2]
						}
					})
				})
			},
			e.prototype.onUpdateInfo = function() {
				h.EVENT.emit(l.EventId.ON_UPDATE_USERINFO, this.userInfo)
			},
			e.prototype.getLkePin = function() {
				return this.userInfo.pin
			},
			e.prototype.exchangeUserData = function() {
				this._userInfo = new w;
				var t = v.
			default.urlParam;
				t && t.lkEPin ? (console.log(">>>>>>>>>>>>>>>>>>", t.lkEPin), this._userInfo.pin = t.lkEPin) : console.error("\u767b\u5f55\u5931\u8d25\uff0c\u6ca1\u6709\u83b7\u5f97\u5230pin")
			},
			e.prototype.updateRankInfo = function(t) {
				t && (this.updateAllNetMes(), this.rewards = t.rewards, this.rewards && this.rewards.length > 0 && (this.jingBeanNum = this.rewards[0].beanNum))
			},
			e.prototype.CheckRiskState = function() {
				return a(this, void 0, void 0,
				function() {
					return s(this,
					function(t) {
						switch (t.label) {
						case 0:
							return [4, _.Net.checkRisk()];
						case 1:
							return t.sent() ? [2, !0] : [2, !1]
						}
					})
				})
			},
			e.prototype.CheckGradeState = function() {
				u.StaticData.LIMIT_USER = this.userInfo.grade <= u.StaticData.LIMIT_GRADE
			},
			e.prototype.login = function() {
				return a(this, void 0, void 0,
				function() {
					return s(this,
					function() {
						return _.Net.firstVerify().then(function(t) {
							var e = t;
							u.StaticData.isFirst = e,
							e ? (y.buriedPoint.sendEvent(c.TaEventName.regist, "\u6ce8\u518c", c.TaView.load, u.StaticData.isShareJoin.toString(), u.StaticData.qdSouce, u.StaticData.source), y.buriedPoint.sendEvent(c.TaEventName.login, "\u767b\u5f55", c.TaView.load, u.StaticData.isShareJoin.toString(), u.StaticData.qdSouce, u.StaticData.source)) : y.buriedPoint.sendEvent(c.TaEventName.login, "\u767b\u5f55", c.TaView.load, u.StaticData.isShareJoin.toString(), u.StaticData.qdSouce, u.StaticData.source)
						},
						function() {
							d.
						default.inst.open(p.UIType.Lack, {
								title: "\u6e38\u620f\u516c\u544a",
								des: "\u6d3b\u52a8\u592a\u706b\u7206\u4e86\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",
								isClose: !1,
								index: 0
							})
						}),
						[2]
					})
				})
			},
			r([g], e)
		} (f.Singleton()));
		o.
	default = b,
		o.userModel = b.inst;
		var w = function() {
			function t() {
				this.pin = "77b1bc6d33f9aa04254be4822c35017d8c99720cb38db47f123b17e1629d4326",
				this.grade = null,
				this.winNum = null,
				this.rankNum = null,
				this.leftLunchPkNum = 25,
				this.passiveNum = 2,
				this.nickName = "https://storage.360buyimg.com/i.imageUpload/31383336383836353637365f7031363138343733303535313039_mid.jpg"
			}
			return t.prototype.updateInfo = function(t) {
				this.nickName = t.nickName,
				this.imgUrl = t.imgUrl,
				this.rankNum = t.rankNum
			},
			t.prototype.updatePkInfo = function(t) {
				this.nickName = t.nickName,
				this.imgUrl = t.imgUrl,
				this.winNum = t.winNum,
				this.passiveNum = t.leftAcceptPkNum,
				this.leftLunchPkNum = t.leftLunchPkNum,
				this.upNum = t.upNum
			},
			t.prototype.getGradeNum = function() {
				var t = "\u672a\u77e5";
				return null != this.grade && (t = this.grade.toString()),
				t
			},
			t.prototype.getRankNum = function() {
				var t = "\u672a\u4e0a\u699c";
				return null != this.rankNum && this.rankNum < u.StaticData.rankLength && (t = this.rankNum.toString()),
				t
			},
			t.prototype.getwinNum = function() {
				var t = "\u672a\u77e5";
				return null != this.winNum && (t = this.winNum.toString()),
				t
			},
			t.prototype.getNickName = function() {
				return this.nickName && "" != this.nickName ? this.nickName: "\u672a\u77e5\u6635\u79f0"
			},
			t
		} ();
		o.UserData = w,
		cc._RF.pop()
	},
	{
		"../Define/Define": "Define",
		"../Define/EventId": "EventId",
		"../Define/StaticData": "StaticData",
		"../Define/UIDefs": "UIDefs",
		"../Framework/Event/EventMgr": "EventMgr",
		"../Framework/UI/UIMgr": "UIMgr",
		"../Framework/Utils/Singleton": "Singleton",
		"../Network/Net": "Net",
		"../Platforms/BurierdPoint": "BurierdPoint",
		"../Platforms/Platform": "Platform"
	}],
	Utils: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "6917a72WWFM9ZEwVneeYPE1", "Utils"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var i = t("../../Define/UIDefs"),
		n = function() {
			function t() {}
			return t.verifyNode = function(t) {
				return null != t && t.isValid
			},
			t.verifyComponent = function(t) {
				return null != t && !!t.isValid && !!t.node && !!t.node.isValid
			},
			t.isComponentLive = function(t) {
				return !! (t && t.node && t.node.isValid && t.isValid)
			},
			t.getUrlParams = function(t) {
				var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"),
				o = window.location.search.substr(1).match(e);
				return null != o ? decodeURIComponent(o[2]) : null
			},
			t.containsPointPolygon = function(t, e, o) {
				for (var i = t,
				n = t.length,
				r = n - 2,
				a = !1,
				s = 0; s < n; s += 2) {
					var c = i[s + 1],
					l = i[r + 1];
					if (c < o && l >= o || l < o && c >= o) {
						var u = i[s];
						u + (o - c) / (l - c) * (i[r] - u) < e && (a = !a)
					}
					r = s
				}
				return a
			},
			t.getBoundingBoxAMPolygon = function(t, e, o) {
				var i, n = e.findSlot(o);
				if (n) {
					var r = n.getAttachment();
					if (r && r instanceof sp.spine.BoundingBoxAttachment) {
						var a = r;
						i = sp.spine.Utils.newFloatArray(a.worldVerticesLength),
						a.computeWorldVertices(n, 0, a.worldVerticesLength, i, 0, 2);
						for (var s = i.length,
						c = 0; c < s; c += 2) {
							var l = t.convertToWorldSpaceAR(new cc.Vec2(i[c], i[c + 1]));
							i[c] = l.x,
							i[c + 1] = l.y
						}
					}
				}
				return i
			},
			t.stopSpineAtFrame = function(t, e, o) {
				if (t && e && t.findAnimation(e)) {
					t.paused = !1;
					var i = t.setAnimation(0, e, !1);
					i && (t.timeScale = 0, i.trackTime = o)
				}
			},
			t.deepCopy = function(t) {
				for (var e = {},
				o = 0,
				i = Object.keys(t); o < i.length; o++) {
					var n = i[o];
					e[n] = "object" == typeof t[n] ? this.deepCopy(t[n]) : t[n]
				}
				return e
			},
			t.formatDate = function(t, e) {
				var o = new Date(t),
				i = {
					"M+": o.getMonth() + 1,
					"d+": o.getDate(),
					"h+": o.getHours(),
					"m+": o.getMinutes(),
					"s+": o.getSeconds(),
					"q+": Math.floor((o.getMonth() + 3) / 3),
					S: o.getMilliseconds()
				};
				for (var n in /(y+)/.test(e) && (e = e.replace(RegExp.$1, (o.getFullYear() + "").substr(4 - RegExp.$1.length))), i) new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? i[n] : ("00" + i[n]).substr(("" + i[n]).length)));
				return e
			},
			t.getFormatTime = function(t) {
				if (t > 0) return (t = ((new Date).getTime() - t) / 1e3) < 0 ? "\u521a\u521a": t >= 0 && t < 60 ? Math.floor(t) + "\u79d2\u524d": t < 3600 ? Math.floor(t / 60) + "\u5206\u949f\u524d": t < 86400 ? Math.floor(t / 60 / 60) + "\u5c0f\u65f6\u524d": t < 31536e3 ? Math.floor(t / 60 / 60 / 24) + "\u5929\u524d": Math.floor(t / 60 / 60 / 24 / 365) + "\u5e74\u524d"
			},
			t.getFormatTimeCur = function(t) {
				if (t > 0) return (t = ((new Date).getTime() - t) / 1e3) < 3600 ? "\u521a\u521a": t < 86400 ? Math.floor(t / 60 / 60) + "\u5c0f\u65f6\u524d": t < 31536e3 ? Math.floor(t / 60 / 60 / 24) + "\u5929\u524d": Math.floor(t / 60 / 60 / 24 / 365) + "\u5e74\u524d"
			},
			t.overAddArr = function(t) {
				if (!t || t.length <= 0) return [];
				for (var e = [], o = 0; o < t.length; o++) e[o] = 0 == o ? t[o] : e[o - 1] + t[o];
				return e
			},
			t.getRandomIndex = function(t, e) {
				var o = 0;
				if (t <= e[0]) return 0;
				if (t >= e[e.length - 1]) return e.length - 1;
				for (var i = 0; i < e.length; i++) if (t <= e[i]) o = i;
				else {
					if (t > e[i] && t <= e[i + 1]) {
						o = i + 1;
						break
					}
					if (t > e[i] && t <= e[i + 1]) {
						o = i + 1;
						break
					}
				}
				return o
			},
			t.getRandWeightIndex = function(t) {
				var e = (t = this.overAddArr(t))[t.length - 1],
				o = Math.random() * e;
				return this.getRandomIndex(o, t)
			},
			t.getRanInter = function(t, e) {
				var o = t + Math.random() * (e - t);
				return Math.floor(o)
			},
			t.formatCNY = function(t, e) {
				var o, i = [{
					value: 1,
					symbol: ""
				},
				{
					value: 1e3,
					symbol: "K"
				},
				{
					value: 1e6,
					symbol: "M"
				},
				{
					value: 1e9,
					symbol: "G"
				},
				{
					value: 1e12,
					symbol: "T"
				},
				{
					value: 1e15,
					symbol: "P"
				},
				{
					value: 1e18,
					symbol: "E"
				},
				{
					value: 1e21,
					symbol: "Z"
				},
				{
					value: 1e24,
					symbol: "Y"
				}];
				for (o = i.length - 1; o > 0 && !(t >= i[o].value); o--);
				return (t / i[o].value).toFixed(e).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + i[o].symbol
			},
			t.initServerTime = function(t) {
				this._initServerTime = t,
				this._initLocalTime = Date.now()
			},
			t.getServerTime = function() {
				return this._initServerTime + (Date.now() - this._initLocalTime)
			},
			t.clone = function(t) {
				var e;
				if ("object" == typeof t) if (null === t) e = null;
				else if (t instanceof Array) {
					e = [];
					for (var o = 0,
					i = t.length; o < i; o++) e.push(this.clone(t[o]))
				} else for (var n in e = {},
				t) e[n] = this.clone(t[n]);
				else e = t;
				return e
			},
			t.getViewType = function(t) {
				for (var e = i.UIType.$Start + 1; e < i.UIType.$End; ++e) if (i.UIType[e] == t) return e
			},
			t.createMatrix = function(t, e, o) {
				void 0 === o && (o = 0);
				for (var i = new Array,
				n = 0; n < t; ++n) {
					i[n] = new Array;
					for (var r = 0; r < e; ++r) i[n][r] = o
				}
				return i
			},
			t.map2Obj = function(t) {
				var e = Object.create(null);
				return t.forEach(function(t, o) {
					e[o] = t
				}),
				e
			},
			t.obj2map = function(t) {
				for (var e = new Map,
				o = 0,
				i = Object.keys(t); o < i.length; o++) {
					var n = i[o];
					e.set(n, t[n])
				}
				return e
			},
			t.arab2char = function(t) {
				var e = ["\u96f6", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d", "\u4e03", "\u516b", "\u4e5d"],
				o = ["", "\u5341", "\u767e", "\u5343", "\u4e07"],
				i = function(t) {
					for (var i = t.toString().split("").reverse(), n = "", r = 0; r < i.length; r++) n = (0 == r && 0 == i[r] ? "": r > 0 && 0 == i[r] && 0 == i[r - 1] ? "": e[i[r]] + (0 == i[r] ? o[0] : o[r])) + n;
					return n
				},
				n = Math.floor(t / 1e4),
				r = t % 1e4,
				a = "";
				return r.toString().length < 4 && (a = "0" + r),
				n ? i(n) + "\u4e07" + i(a) : i(t)
			},
			t.updatePolygonCollider = function(t, e) {
				var o = t.points,
				i = t.world.points;
				i.length = o.length;
				for (var n = cc.v2(), r = 1e6, a = 1e6, s = -1e6, c = -1e6, l = 0, u = o.length; l < u; l++) {
					i[l] || (i[l] = cc.v2()),
					n.x = o[l].x + e.x,
					n.y = o[l].y + e.y;
					var p = n.x,
					h = n.y;
					i[l].x = p,
					i[l].y = h,
					p > s && (s = p),
					p < r && (r = p),
					h > c && (c = h),
					h < a && (a = h)
				}
			},
			t.limitWorldNum = function(t, e) {
				return void 0 === e && (e = 15),
				t ? (t.length > e && (t = t.slice(0, e), t += "..."), t) : ""
			},
			t.getRanByEnum = function(t) {
				var e = Object.keys(t);
				return t[e[this.getRanInter(0, e.length)]]
			},
			t.getIndexByEnum = function(t, e) {
				for (var o = Object.keys(t), i = 0; i < o.length; i++) if (t[o[i]] == e) return i;
				return - 1
			},
			t.getColor = function() {
				return cc.Color.RED
			},
			t.getColorHex = function() {
				return ""
			},
			t.jingbeanNumChange = function(t, e) {
				if (void 0 === e && (e = !0), !t) return "0";
				var o = t.toString();
				return t >= 1e4 ? o = (t / 1e4 > Math.floor(t / 1e4) ? (t / 1e4).toFixed(1) : t / 1e4) + "w": t >= 1e3 && (o = (t / 1e3 > Math.floor(t / 1e3) ? (t / 1e3).toFixed(1) : t / 1e3) + "k"),
				e && (o += "\u4eac\u8c46"),
				o
			},
			t.AnalysisUrl = function(t) {
				if (!t || t.length < 0) return null;
				for (var e = "{",
				o = (t = t.substring(1)).split("&"), i = 0; i < o.length; i++) {
					var n = o[i],
					r = n.indexOf("=");
					e += '"' + n.substring(0, r) + '":"' + n.substring(r + 1) + '"',
					i != o.length - 1 && (e += ",")
				}
				return e += "}",
				JSON.parse(e)
			},
			t.AnalysisUrlShield = function(t, e) {
				if (!t || t.length < 0) return null;
				for (var o = "?",
				i = (t = t.substring(1)).split("&"), n = 0; n < i.length; n++) {
					var r = i[n],
					a = r.indexOf("=");
					e.indexOf(r.substring(0, a)) < 0 && "" != r && (o += "&" + i[n])
				}
				return o
			},
			t._combURL = function(t, e) {
				return t += "?",
				Object.keys(e).forEach(function(o) {
					t += o + "=" + e[o] + "&"
				}),
				t.slice(0, t.length - 1)
			},
			t._initServerTime = 0,
			t._initLocalTime = 0,
			t
		} ();
		o.
	default = n,
		cc._RF.pop()
	},
	{
		"../../Define/UIDefs": "UIDefs"
	}],
	WoodItem: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "4cbee4lnWBPmYiEphzhq2Ff", "WoodItem");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../../../Define/Define"),
		s = t("../../../Define/EventId"),
		c = t("../../../Framework/Event/EventMgr"),
		l = t("../../../Framework/Utils/Utils"),
		u = t("../../../Platforms/BurierdPoint"),
		p = t("../../../Platforms/Platform"),
		h = cc._decorator,
		d = h.ccclass,
		f = h.property,
		_ = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.sprItem = null,
				e.labTitle = null,
				e.labPrice = null,
				e.url = null,
				e
			}
			return n(e, t),
			e.prototype.onItemRefresh = function(t, e) {
				var o = e.feedDataDetail;
				this.woodData = o,
				this.url = "https://item.m.jd.com/product/" + o.skuId + ".html",
				c.EVENT.emit(s.EventId.ON_UPDATE_SPRITE_URL, this.sprItem, "https://img1.360buyimg.com/n1/s400x400_" + o.imageUrl),
				this.labTitle && (this.labTitle.string = l.
			default.limitWorldNum(o.title, 20)),
				this.labPrice && (this.labPrice.string = o.priceInfo.jdPrice.toString())
			},
			e.prototype.onClickUrl = function() {
				p.
			default.openUrl(this.url),
				u.buriedPoint.sendEvent(a.TaEventName.btnClick, "\u5546\u54c1\u70b9\u51fb", a.TaView.main, this.woodData.skuId.toString())
			},
			r([f(cc.Sprite)], e.prototype, "sprItem", void 0),
			r([f(cc.Label)], e.prototype, "labTitle", void 0),
			r([f(cc.Label)], e.prototype, "labPrice", void 0),
			r([d], e)
		} (cc.Component);
		o.
	default = _,
		cc._RF.pop()
	},
	{
		"../../../Define/Define": "Define",
		"../../../Define/EventId": "EventId",
		"../../../Framework/Event/EventMgr": "EventMgr",
		"../../../Framework/Utils/Utils": "Utils",
		"../../../Platforms/BurierdPoint": "BurierdPoint",
		"../../../Platforms/Platform": "Platform"
	}],
	WorldRankCtrl: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "8a22c5xCxJOI4i2K+M2myGP", "WorldRankCtrl");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		},
		a = this && this.__awaiter ||
		function(t, e, o, i) {
			return new(o || (o = Promise))(function(n, r) {
				function a(t) {
					try {
						c(i.next(t))
					} catch(e) {
						r(e)
					}
				}
				function s(t) {
					try {
						c(i.
						throw (t))
					} catch(e) {
						r(e)
					}
				}
				function c(t) {
					var e;
					t.done ? n(t.value) : (e = t.value, e instanceof o ? e: new o(function(t) {
						t(e)
					})).then(a, s)
				}
				c((i = i.apply(t, e || [])).next())
			})
		},
		s = this && this.__generator ||
		function(t, e) {
			var o, i, n, r, a = {
				label: 0,
				sent: function() {
					if (1 & n[0]) throw n[1];
					return n[1]
				},
				trys: [],
				ops: []
			};
			return r = {
				next: s(0),
				throw: s(1),
				return: s(2)
			},
			"function" == typeof Symbol && (r[Symbol.iterator] = function() {
				return this
			}),
			r;
			function s(t) {
				return function(e) {
					return c([t, e])
				}
			}
			function c(r) {
				if (o) throw new TypeError("Generator is already executing.");
				for (; a;) try {
					if (o = 1, i && (n = 2 & r[0] ? i.
					return: r[0] ? i.
					throw || ((n = i.
					return) && n.call(i), 0) : i.next) && !(n = n.call(i, r[1])).done) return n;
					switch (i = 0, n && (r = [2 & r[0], n.value]), r[0]) {
					case 0:
					case 1:
						n = r;
						break;
					case 4:
						return a.label++,
						{
							value: r[1],
							done: !1
						};
					case 5:
						a.label++,
						i = r[1],
						r = [0];
						continue;
					case 7:
						r = a.ops.pop(),
						a.trys.pop();
						continue;
					default:
						if (! (n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === r[0] || 2 === r[0])) {
							a = 0;
							continue
						}
						if (3 === r[0] && (!n || r[1] > n[0] && r[1] < n[3])) {
							a.label = r[1];
							break
						}
						if (6 === r[0] && a.label < n[1]) {
							a.label = n[1],
							n = r;
							break
						}
						if (n && a.label < n[2]) {
							a.label = n[2],
							a.ops.push(r);
							break
						}
						n[2] && a.ops.pop(),
						a.trys.pop();
						continue
					}
					r = e.call(t, a)
				} catch(s) {
					r = [6, s],
					i = 0
				} finally {
					o = n = 0
				}
				if (5 & r[0]) throw r[1];
				return {
					value: r[0] ? r[1] : void 0,
					done: !0
				}
			}
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.worldRankCtrl = void 0;
		var c = t("../Define/Define"),
		l = t("../Define/EventId"),
		u = t("../Framework/Event/EventMgr"),
		p = t("../Framework/Utils/Singleton"),
		h = t("../Model/UserModel"),
		d = t("../Network/Net"),
		f = t("../Platforms/BurierdPoint"),
		_ = cc._decorator,
		y = _.ccclass,
		v = (_.property,
		function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.isAfterAward = !1,
				e
			}
			return n(e, t),
			e.prototype.initialize = function() {
				return a(this, void 0, void 0,
				function() {
					var t;
					return s(this,
					function(e) {
						switch (e.label) {
						case 0:
							return [4, d.Net.getRankRewardInfo()];
						case 1:
							return t = e.sent(),
							h.userModel.updateRankInfo(t.myInfo),
							this.rankInfos = t.rankInfos,
							this.dealRankInfo(),
							this.rankState = c.WorldRankState.normal,
							this.isAfterAward = t.hasOpen,
							[2]
						}
					})
				})
			},
			e.prototype.dealRankInfo = function() {
				for (var t = 0; t < this.rankInfos.length; t++) {
					var e = this.rankInfos[t],
					o = e.rewardInfo.rewards;
					e.awardNum = o ? o[0].beanNum: 0
				}
			},
			e.prototype.changeState = function(t) {
				this.rankState = null != t ? t: 1 - this.rankState;
				var e = this.rankState == c.WorldRankState.normal ? "\u8d5b\u5b63\u6392\u884c": "\u8d5b\u5b63\u5956\u52b1";
				f.buriedPoint.sendEvent(c.TaEventName.pageShow, "\u6392\u884c\u699c\u66dd\u5149", c.TaView.rank, e),
				u.EVENT.emit(l.EventId.ON_RANKSTATE_CHANGE, this.rankState, this.isAfterAward)
			},
			e.prototype.TestAward = function() {
				this.isAfterAward = !0,
				u.EVENT.emit(l.EventId.ON_RANKAWARD_GIVE, this.isAfterAward)
			},
			e.prototype.getDataByIndex = function(t) {
				return this.rankInfos[t]
			},
			r([y], e)
		} (p.Singleton()));
		o.
	default = v,
		o.worldRankCtrl = v.inst,
		cc._RF.pop()
	},
	{
		"../Define/Define": "Define",
		"../Define/EventId": "EventId",
		"../Framework/Event/EventMgr": "EventMgr",
		"../Framework/Utils/Singleton": "Singleton",
		"../Model/UserModel": "UserModel",
		"../Network/Net": "Net",
		"../Platforms/BurierdPoint": "BurierdPoint"
	}],
	WorldRankItem: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "cdd9fXvj7VOF4M/KqWc9hzV", "WorldRankItem");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../../../Controller/WorldRankCtrl"),
		s = t("../../../Define/Define"),
		c = t("../../../Define/EventId"),
		l = t("../../../Define/StaticData"),
		u = t("../../../Framework/Event/EventMgr"),
		p = t("../../../Framework/Utils/Utils"),
		h = t("../../../Model/UserModel"),
		d = t("../Tool/SwitchImg"),
		f = t("../Tool/SwitchNode"),
		_ = cc._decorator,
		y = _.ccclass,
		v = _.property,
		m = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.sprBg = null,
				e.sprTipBg = null,
				e.sprAvatar = null,
				e.labName = null,
				e.labRankNum = null,
				e.awardNode = null,
				e.labAwardNum = null,
				e.index = -1,
				e.isAfterAward = !1,
				e
			}
			return n(e, t),
			e.prototype.onLoad = function() {
				u.EVENT.on(c.EventId.ON_RANKAWARD_GIVE, this.updateRankAwardState.bind(this), this),
				u.EVENT.on(c.EventId.ON_RANKSTATE_CHANGE, this.updateRankState.bind(this), this)
			},
			e.prototype.onItemRefresh = function(t, e) {
				e && (this.data = e, this.index = t, this.labName.string = p.
			default.limitWorldNum(e.nickName), this.labRankNum.string = (e.rankNum + 1).toString(), this.rankState = a.worldRankCtrl.rankState, this.updateItemBg(), this.updateRankTipBg(), this.updateRankAwardState(a.worldRankCtrl.isAfterAward), u.EVENT.emit(c.EventId.ON_UPDATE_SPRITE_AVATAR, this.sprAvatar, e.imgUrl), this.labAwardNum.string = a.worldRankCtrl.rankState == s.WorldRankState.normal ? this.data.winNum.toString() : p.
			default.jingbeanNumChange(this.data.awardNum), this.awardNode.setCurNode(this.rankState))
			},
			e.prototype.updateRankTipBg = function() {
				var t = this.index;
				t = Math.min(t, 3),
				this.sprTipBg.setCurNode(t)
			},
			e.prototype.updateItemBg = function() {
				var t = this.index;
				if (t = Math.min(t, 3), this.index == h.userModel.userInfo.rankNum - 1 && (u.EVENT.emit(c.EventId.ON_UPDATE_RANKAWARD, this.data.rewardInfo.rewards[0].beanNum), this.index > 2)) switch (this.rankState) {
				case s.WorldRankState.normal:
					t = 4;
					break;
				case s.WorldRankState.award:
					this.isAfterAward && (t = 4)
				}
				this.sprBg.setCurImg(t)
			},
			e.prototype.updateRankState = function(t, e) {
				if (void 0 === e && (e = !1), !(this.index < 0 || this.index > l.StaticData.rankLength) && this.rankState != t && this.node.active) {
					switch (this.rankState = t, this.updateItemBg(), t) {
					case s.WorldRankState.normal:
						this.awardNode.setCurNode(0),
						this.sprAvatar.node.active = !0,
						this.labName.node.active = !0;
						break;
					case s.WorldRankState.award:
						this.awardNode.setCurNode(1),
						this.updateRankAwardState(e)
					}
					this.labAwardNum.string = a.worldRankCtrl.rankState == s.WorldRankState.normal ? this.data.winNum.toString() : p.
				default.jingbeanNumChange(this.data.awardNum)
				}
			},
			e.prototype.updateRankAwardState = function(t) {
				this.index < 0 || this.index > l.StaticData.rankLength || (this.isAfterAward = t, this.updateItemBg())
			},
			e.prototype.updateSelfInfo = function(t, e, o) {
				this.index = 51,
				this.updateItemBg(),
				this.updateRankTipBg(),
				u.EVENT.emit(c.EventId.ON_UPDATE_SPRITE_URL, this.sprAvatar, t),
				this.labName.string = e,
				this.labRankNum.string = o ? o.toString() : "?"
			},
			r([v(d.
		default)], e.prototype, "sprBg", void 0),
			r([v(f.
		default)], e.prototype, "sprTipBg", void 0),
			r([v(cc.Sprite)], e.prototype, "sprAvatar", void 0),
			r([v(cc.Label)], e.prototype, "labName", void 0),
			r([v(cc.Label)], e.prototype, "labRankNum", void 0),
			r([v(f.
		default)], e.prototype, "awardNode", void 0),
			r([v(cc.Label)], e.prototype, "labAwardNum", void 0),
			r([y], e)
		} (cc.Component);
		o.
	default = m,
		cc._RF.pop()
	},
	{
		"../../../Controller/WorldRankCtrl": "WorldRankCtrl",
		"../../../Define/Define": "Define",
		"../../../Define/EventId": "EventId",
		"../../../Define/StaticData": "StaticData",
		"../../../Framework/Event/EventMgr": "EventMgr",
		"../../../Framework/Utils/Utils": "Utils",
		"../../../Model/UserModel": "UserModel",
		"../Tool/SwitchImg": "SwitchImg",
		"../Tool/SwitchNode": "SwitchNode"
	}],
	WorldRank: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "f301b3HZatGfKH1XOO33tOi", "WorldRank");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		},
		a = this && this.__awaiter ||
		function(t, e, o, i) {
			return new(o || (o = Promise))(function(n, r) {
				function a(t) {
					try {
						c(i.next(t))
					} catch(e) {
						r(e)
					}
				}
				function s(t) {
					try {
						c(i.
						throw (t))
					} catch(e) {
						r(e)
					}
				}
				function c(t) {
					var e;
					t.done ? n(t.value) : (e = t.value, e instanceof o ? e: new o(function(t) {
						t(e)
					})).then(a, s)
				}
				c((i = i.apply(t, e || [])).next())
			})
		},
		s = this && this.__generator ||
		function(t, e) {
			var o, i, n, r, a = {
				label: 0,
				sent: function() {
					if (1 & n[0]) throw n[1];
					return n[1]
				},
				trys: [],
				ops: []
			};
			return r = {
				next: s(0),
				throw: s(1),
				return: s(2)
			},
			"function" == typeof Symbol && (r[Symbol.iterator] = function() {
				return this
			}),
			r;
			function s(t) {
				return function(e) {
					return c([t, e])
				}
			}
			function c(r) {
				if (o) throw new TypeError("Generator is already executing.");
				for (; a;) try {
					if (o = 1, i && (n = 2 & r[0] ? i.
					return: r[0] ? i.
					throw || ((n = i.
					return) && n.call(i), 0) : i.next) && !(n = n.call(i, r[1])).done) return n;
					switch (i = 0, n && (r = [2 & r[0], n.value]), r[0]) {
					case 0:
					case 1:
						n = r;
						break;
					case 4:
						return a.label++,
						{
							value: r[1],
							done: !1
						};
					case 5:
						a.label++,
						i = r[1],
						r = [0];
						continue;
					case 7:
						r = a.ops.pop(),
						a.trys.pop();
						continue;
					default:
						if (! (n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === r[0] || 2 === r[0])) {
							a = 0;
							continue
						}
						if (3 === r[0] && (!n || r[1] > n[0] && r[1] < n[3])) {
							a.label = r[1];
							break
						}
						if (6 === r[0] && a.label < n[1]) {
							a.label = n[1],
							n = r;
							break
						}
						if (n && a.label < n[2]) {
							a.label = n[2],
							a.ops.push(r);
							break
						}
						n[2] && a.ops.pop(),
						a.trys.pop();
						continue
					}
					r = e.call(t, a)
				} catch(s) {
					r = [6, s],
					i = 0
				} finally {
					o = n = 0
				}
				if (5 & r[0]) throw r[1];
				return {
					value: r[0] ? r[1] : void 0,
					done: !0
				}
			}
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = t("../../../Controller/WorldRankCtrl"),
		l = t("../../../Define/Define"),
		u = t("../../../Define/EventId"),
		p = t("../../../Framework/Event/EventMgr"),
		h = t("../../../Framework/UI/ScrollViewOptimizer"),
		d = t("../../../Framework/UIBase"),
		f = t("../../../Model/UserModel"),
		_ = t("../../../Platforms/BurierdPoint"),
		y = t("../Tool/SwitchNode"),
		v = t("./WorldRankItem"),
		m = cc._decorator,
		g = m.ccclass,
		b = m.property,
		w = new cc.Color(245, 80, 80),
		I = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.worldRank = null,
				e.labRank = null,
				e.labWinNum = null,
				e.labAwardNum = null,
				e.titleNode = null,
				e.awardNode = null,
				e.labTitles = [],
				e
			}
			return n(e, t),
			e.prototype.onLoad = function() {
				p.EVENT.on(u.EventId.ON_UPDATE_RANKAWARD, this.updateAwardNum, this),
				this.labRank.string = f.userModel.userInfo.getRankNum(),
				this.labWinNum.string = f.userModel.userInfo.getwinNum()
			},
			e.prototype.onOpen = function() {
				this.SetRankState(l.WorldRankState.normal),
				this.labAwardNum.string = "0",
				this.initialize()
			},
			e.prototype.updateAwardNum = function(t) {
				this.labAwardNum.string = t.toString()
			},
			e.prototype.initialize = function() {
				return a(this, void 0, void 0,
				function() {
					return s(this,
					function(t) {
						switch (t.label) {
						case 0:
							return [4, f.userModel.updatePkMes()];
						case 1:
							return t.sent(),
							this.labRank.string = f.userModel.userInfo.getRankNum(),
							this.labWinNum.string = f.userModel.userInfo.getwinNum(),
							[4, c.worldRankCtrl.initialize()];
						case 2:
							return t.sent(),
							this.worldRank.setData(c.worldRankCtrl.rankInfos, this.onRankItemUpdate.bind(this)),
							[2]
						}
					})
				})
			},
			e.prototype.onRankItemUpdate = function(t, e, o) {
				e.getComponent(v.
			default).onItemRefresh(t, o)
			},
			e.prototype.ChangeRankState = function(t, e) {
				c.worldRankCtrl.rankState = Number(e),
				this.updateTitleColor(e),
				this.worldRank.getCurView().stopAutoScroll(),
				this.worldRank.getCurView().scrollToTop(.5),
				c.worldRankCtrl.changeState(c.worldRankCtrl.rankState),
				this.titleNode.setCurNode(c.worldRankCtrl.rankState),
				this.awardNode.setCurNode(c.worldRankCtrl.rankState)
			},
			e.prototype.SetRankState = function(t) {
				c.worldRankCtrl.changeState(t),
				this.titleNode.setCurNode(c.worldRankCtrl.rankState),
				this.awardNode.setCurNode(c.worldRankCtrl.rankState)
			},
			e.prototype.TestOnReward = function() {
				c.worldRankCtrl.TestAward()
			},
			e.prototype.close = function() {
				t.prototype.close.call(this),
				_.buriedPoint.sendEvent(l.TaEventName.btnClick, "\u5173\u95ed\u5f39\u7a97", l.TaView.popUp, "\u6392\u884c\u699c")
			},
			e.prototype.updateTitleColor = function(t) {
				this.labTitles[1 - t].node.color = w,
				this.labTitles[t].node.color = cc.Color.WHITE
			},
			r([b(h.
		default)], e.prototype, "worldRank", void 0),
			r([b(cc.Label)], e.prototype, "labRank", void 0),
			r([b(cc.Label)], e.prototype, "labWinNum", void 0),
			r([b(cc.Label)], e.prototype, "labAwardNum", void 0),
			r([b(y.
		default)], e.prototype, "titleNode", void 0),
			r([b(y.
		default)], e.prototype, "awardNode", void 0),
			r([b({
				type: [cc.Label]
			})], e.prototype, "labTitles", void 0),
			r([g], e)
		} (d.
	default);
		o.
	default = I,
		cc._RF.pop()
	},
	{
		"../../../Controller/WorldRankCtrl": "WorldRankCtrl",
		"../../../Define/Define": "Define",
		"../../../Define/EventId": "EventId",
		"../../../Framework/Event/EventMgr": "EventMgr",
		"../../../Framework/UI/ScrollViewOptimizer": "ScrollViewOptimizer",
		"../../../Framework/UIBase": "UIBase",
		"../../../Model/UserModel": "UserModel",
		"../../../Platforms/BurierdPoint": "BurierdPoint",
		"../Tool/SwitchNode": "SwitchNode",
		"./WorldRankItem": "WorldRankItem"
	}],
	WorldTipCtrl: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "e5eb6+edt1B3ay3jcBVsQc+", "WorldTipCtrl");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__awaiter ||
		function(t, e, o, i) {
			return new(o || (o = Promise))(function(n, r) {
				function a(t) {
					try {
						c(i.next(t))
					} catch(e) {
						r(e)
					}
				}
				function s(t) {
					try {
						c(i.
						throw (t))
					} catch(e) {
						r(e)
					}
				}
				function c(t) {
					var e;
					t.done ? n(t.value) : (e = t.value, e instanceof o ? e: new o(function(t) {
						t(e)
					})).then(a, s)
				}
				c((i = i.apply(t, e || [])).next())
			})
		},
		a = this && this.__generator ||
		function(t, e) {
			var o, i, n, r, a = {
				label: 0,
				sent: function() {
					if (1 & n[0]) throw n[1];
					return n[1]
				},
				trys: [],
				ops: []
			};
			return r = {
				next: s(0),
				throw: s(1),
				return: s(2)
			},
			"function" == typeof Symbol && (r[Symbol.iterator] = function() {
				return this
			}),
			r;
			function s(t) {
				return function(e) {
					return c([t, e])
				}
			}
			function c(r) {
				if (o) throw new TypeError("Generator is already executing.");
				for (; a;) try {
					if (o = 1, i && (n = 2 & r[0] ? i.
					return: r[0] ? i.
					throw || ((n = i.
					return) && n.call(i), 0) : i.next) && !(n = n.call(i, r[1])).done) return n;
					switch (i = 0, n && (r = [2 & r[0], n.value]), r[0]) {
					case 0:
					case 1:
						n = r;
						break;
					case 4:
						return a.label++,
						{
							value: r[1],
							done: !1
						};
					case 5:
						a.label++,
						i = r[1],
						r = [0];
						continue;
					case 7:
						r = a.ops.pop(),
						a.trys.pop();
						continue;
					default:
						if (! (n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === r[0] || 2 === r[0])) {
							a = 0;
							continue
						}
						if (3 === r[0] && (!n || r[1] > n[0] && r[1] < n[3])) {
							a.label = r[1];
							break
						}
						if (6 === r[0] && a.label < n[1]) {
							a.label = n[1],
							n = r;
							break
						}
						if (n && a.label < n[2]) {
							a.label = n[2],
							a.ops.push(r);
							break
						}
						n[2] && a.ops.pop(),
						a.trys.pop();
						continue
					}
					r = e.call(t, a)
				} catch(s) {
					r = [6, s],
					i = 0
				} finally {
					o = n = 0
				}
				if (5 & r[0]) throw r[1];
				return {
					value: r[0] ? r[1] : void 0,
					done: !0
				}
			}
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.worldTipCtrl = o.WorldTipCtrl = o.WorldTipModel = void 0;
		var s = t("../Define/StaticData"),
		c = t("../Framework/Utils/Singleton"),
		l = t("../Framework/Utils/Utils"),
		u = t("../Network/Net"),
		p = cc._decorator,
		h = (p.ccclass, p.property,
		function() {});
		o.WorldTipModel = h;
		var d = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.isRequest = !1,
				e
			}
			return n(e, t),
			e.prototype.initialize = function() {
				return r(this, void 0, void 0,
				function() {
					var t;
					return a(this,
					function(e) {
						switch (e.label) {
						case 0:
							return this.index = 0,
							this.worldTipQueue = [],
							t = this,
							[4, u.Net.getMyLeastInfo()];
						case 1:
							return t.worldTipQueue = e.sent(),
							[2]
						}
					})
				})
			},
			e.prototype.update = function() {},
			e.prototype.requestTipMes = function() {
				return r(this, void 0, void 0,
				function() {
					var t, e;
					return a(this,
					function(o) {
						switch (o.label) {
						case 0:
							return [4, u.Net.getMyLeastInfo()];
						case 1:
							return t = o.sent(),
							s.StaticData.WORLDTIP_AUTOFILL ? (e = s.StaticData.WORLDTIP_LIMIT - t.length - 1, this.worldTipQueue = t.concat(this.worldTipQueue.slice(0, e))) : t.length > 0 && (this.worldTipQueue = t),
							[2]
						}
					})
				})
			},
			e.prototype.getShowMes = function() {
				return this.curTipModel = this.getShowModel(),
				this.analysisTipMes(this.curTipModel)
			},
			e.prototype.analysisTipMes = function(t) {
				return t ? [t.content, l.
			default.getFormatTime(t.ts)]:
				null
			},
			e.prototype.getShowModel = function() {
				var t = this;
				return++this.index < this.worldTipQueue.length - 1 ? this.worldTipQueue[this.index] : (this.isRequest || (this.isRequest = !0, setTimeout(function() {
					t.requestTipMes(),
					t.isRequest = !1
				},
				6e5)), this.index > this.worldTipQueue.length - 1 && (this.index = 0), this.worldTipQueue[this.index])
			},
			e.prototype.updateTipMes = function(t, e) {
				var o = this,
				i = this.getShowMes();
				i ? t.init(i, e) : setTimeout(function() {
					o.updateTipMes(t, e)
				},
				6e5)
			},
			e
		} (c.Singleton());
		o.WorldTipCtrl = d,
		o.worldTipCtrl = d.inst,
		cc._RF.pop()
	},
	{
		"../Define/StaticData": "StaticData",
		"../Framework/Utils/Singleton": "Singleton",
		"../Framework/Utils/Utils": "Utils",
		"../Network/Net": "Net"
	}],
	WorldTipItem: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "433efHPdWtIjpfK9ep0DPTP", "WorldTipItem");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../../../Define/StaticData"),
		s = cc._decorator,
		c = s.ccclass,
		l = s.property,
		u = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.labTip = null,
				e.labTime = null,
				e.anim = null,
				e
			}
			return n(e, t),
			e.prototype.onLoad = function() {
				this.resetPos = this.node.position,
				this.anim = this.node.getComponent(cc.Animation)
			},
			e.prototype.init = function(t, e) {
				this.anim.play("labRotateShow"),
				this.node.position = this.resetPos,
				this.worldTip = e,
				this.labTip.string = t[0],
				this.labTime.string = t[1],
				this.scheduleOnce(this.playTipHide, a.StaticData.WORLDTIP_DELTA)
			},
			e.prototype.playTipHide = function() {
				this.anim.play("labRotateHide")
			},
			e.prototype.animExchangeEvent = function() {
				this.worldTip.exchangeTip()
			},
			r([l(cc.RichText)], e.prototype, "labTip", void 0),
			r([l(cc.Label)], e.prototype, "labTime", void 0),
			r([c], e)
		} (cc.Component);
		o.
	default = u,
		cc._RF.pop()
	},
	{
		"../../../Define/StaticData": "StaticData"
	}],
	WorldTipModel: [function(t, e) {
		"use strict";
		cc._RF.push(e, "f02dbaf+kVKzZZY5LN1USul", "WorldTipModel");
		var o = cc._decorator;
		o.ccclass,
		o.property,
		cc._RF.pop()
	},
	{}],
	WorldTipView: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "3f095RYm9VG6aZgcTKns5KJ", "WorldTipView");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		},
		a = this && this.__awaiter ||
		function(t, e, o, i) {
			return new(o || (o = Promise))(function(n, r) {
				function a(t) {
					try {
						c(i.next(t))
					} catch(e) {
						r(e)
					}
				}
				function s(t) {
					try {
						c(i.
						throw (t))
					} catch(e) {
						r(e)
					}
				}
				function c(t) {
					var e;
					t.done ? n(t.value) : (e = t.value, e instanceof o ? e: new o(function(t) {
						t(e)
					})).then(a, s)
				}
				c((i = i.apply(t, e || [])).next())
			})
		},
		s = this && this.__generator ||
		function(t, e) {
			var o, i, n, r, a = {
				label: 0,
				sent: function() {
					if (1 & n[0]) throw n[1];
					return n[1]
				},
				trys: [],
				ops: []
			};
			return r = {
				next: s(0),
				throw: s(1),
				return: s(2)
			},
			"function" == typeof Symbol && (r[Symbol.iterator] = function() {
				return this
			}),
			r;
			function s(t) {
				return function(e) {
					return c([t, e])
				}
			}
			function c(r) {
				if (o) throw new TypeError("Generator is already executing.");
				for (; a;) try {
					if (o = 1, i && (n = 2 & r[0] ? i.
					return: r[0] ? i.
					throw || ((n = i.
					return) && n.call(i), 0) : i.next) && !(n = n.call(i, r[1])).done) return n;
					switch (i = 0, n && (r = [2 & r[0], n.value]), r[0]) {
					case 0:
					case 1:
						n = r;
						break;
					case 4:
						return a.label++,
						{
							value: r[1],
							done: !1
						};
					case 5:
						a.label++,
						i = r[1],
						r = [0];
						continue;
					case 7:
						r = a.ops.pop(),
						a.trys.pop();
						continue;
					default:
						if (! (n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === r[0] || 2 === r[0])) {
							a = 0;
							continue
						}
						if (3 === r[0] && (!n || r[1] > n[0] && r[1] < n[3])) {
							a.label = r[1];
							break
						}
						if (6 === r[0] && a.label < n[1]) {
							a.label = n[1],
							n = r;
							break
						}
						if (n && a.label < n[2]) {
							a.label = n[2],
							a.ops.push(r);
							break
						}
						n[2] && a.ops.pop(),
						a.trys.pop();
						continue
					}
					r = e.call(t, a)
				} catch(s) {
					r = [6, s],
					i = 0
				} finally {
					o = n = 0
				}
				if (5 & r[0]) throw r[1];
				return {
					value: r[0] ? r[1] : void 0,
					done: !0
				}
			}
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = t("../../../Controller/WorldTipCtrl"),
		l = t("./WorldTipItem"),
		u = cc._decorator,
		p = u.ccclass,
		h = u.property,
		d = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.tips = [],
				e
			}
			return n(e, t),
			e.prototype.start = function() {
				return a(this, void 0, void 0,
				function() {
					return s(this,
					function(t) {
						switch (t.label) {
						case 0:
							return [4, c.worldTipCtrl.initialize()];
						case 1:
							return t.sent(),
							this.initialize(),
							[2]
						}
					})
				})
			},
			e.prototype.onDestroy = function() {
				this.unscheduleAllCallbacks()
			},
			e.prototype.initialize = function() {
				this.index = 0,
				c.worldTipCtrl.updateTipMes(this.tips[this.index], this)
			},
			e.prototype.exchangeTip = function() {
				this.index = (this.index + 1) % 2,
				c.worldTipCtrl.updateTipMes(this.tips[this.index], this)
			},
			r([h({
				type: [l.
			default]
			})], e.prototype, "tips", void 0),
			r([p], e)
		} (cc.Component);
		o.
	default = d,
		cc._RF.pop()
	},
	{
		"../../../Controller/WorldTipCtrl": "WorldTipCtrl",
		"./WorldTipItem": "WorldTipItem"
	}],
	Wrapper: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "1ffa6kcKxBJeIlJCGwN2ab1", "Wrapper"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var i = function() {
			this.repeatCur = 0
		},
		n = function() {
			function t() {}
			return t.callFunc = function(t, e, o) {
				return cc.callFunc(function(o) {
					try {
						e ? t && t.call(e, o) : t && t(o)
					} catch(i) {
						console.error(i)
					}
				},
				null, o)
			},
			t.scheduleFunction = function(t, e, o, n, r) {
				var a = this;
				if (t && t.isLive() && e) {
					var s = new i;
					s.target = t,
					s.name = t.getName(),
					s.cb = e,
					s.repeat = n,
					s.tempCb = function(e) {
						try {
							s.cb && s.target.isLive() && s.cb.call(s.target, e),
							s.repeat !== cc.macro.REPEAT_FOREVER && (++s.repeatCur, s.repeatCur >= s.repeat && a.unscheduleFunction(s.cb))
						} catch(c) {
							var i = t.getError(c, "scheduleFunction");
							i.customInfo = "interval?: " + o + ", repeat?: " + n + ", delay?: " + r,
							console.error(i)
						}
					},
					t.schedule(s.tempCb, o, n, r),
					this._scheduleList.push(s)
				} else console.error()
			},
			t.unscheduleFunction = function(t) {
				for (var e = 0; e < this._scheduleList.length; e++) {
					var o = this._scheduleList[e];
					if (o.cb == t) return o.target.isLive() && o.target.unschedule(o.tempCb),
					void this._scheduleList.splice(e, 1)
				}
			},
			t._scheduleList = [],
			t
		} ();
		o.
	default = n,
		cc._RF.pop()
	},
	{}],
	i18nLabel: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "036d842BjxEIa9PYFUJdeZ+", "i18nLabel");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.i18nLabel = void 0;
		var a = t("./i18nMgr"),
		s = cc._decorator,
		c = s.ccclass,
		l = s.property,
		u = s.executeInEditMode,
		p = s.disallowMultiple,
		h = s.requireComponent,
		d = s.menu,
		f = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.i18n_string = "",
				e.i18n_params = [],
				e
			}
			return n(e, t),
			e.prototype.start = function() {
				a.i18nMgr.addOrDelLabel(this, !0),
				this._resetValue()
			},
			Object.defineProperty(e.prototype, "lanID", {
				get: function() {
					return this.i18n_string
				},
				set: function(t) {
					this.i18n_string = t,
					this.setEndValue()
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, "params", {
				get: function() {
					return this.i18n_params
				},
				set: function(t) {
					this.i18n_params = t,
					this.setEndValue()
				},
				enumerable: !1,
				configurable: !0
			}),
			e.prototype.init = function(t, e) {
				this.i18n_string = t,
				this.i18n_params = e,
				this.setEndValue()
			},
			e.prototype.setEndValue = function() {
				var t = this.getComponent(cc.Label);
				cc.isValid(t) && (t.string = a.i18nMgr.getLan(this.i18n_string, this.i18n_params))
			},
			e.prototype._resetValue = function() {
				this.lanID = this.i18n_string
			},
			e.prototype.onDestroy = function() {
				a.i18nMgr.addOrDelLabel(this, !1)
			},
			r([l({
				visible: !1
			})], e.prototype, "i18n_string", void 0),
			r([l({
				visible: !1
			})], e.prototype, "i18n_params", void 0),
			r([l({
				type: cc.String
			})], e.prototype, "lanID", null),
			r([l({
				type: [cc.String]
			})], e.prototype, "params", null),
			r([c, u, h(cc.Label), p, d("\u591a\u8bed\u8a00/i18nLabel")], e)
		} (cc.Component);
		o.i18nLabel = f,
		cc._RF.pop()
	},
	{
		"./i18nMgr": "i18nMgr"
	}],
	i18nMgr: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "1195b1f9m9Oq7CT+UZ9DGic", "i18nMgr"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.i18nMgr = void 0;
		var i = function() {
			function t() {}
			return t.checkInit = function() {
				this.language || this.setLanguage("ZH")
			},
			t.setLanguage = function(t) {
				this.language !== t && (this.language = t, this.reloadLabel(), this.reloadSprite())
			},
			t.addOrDelLabel = function(t, e) {
				if (e) this.labelArr.push(t);
				else {
					var o = this.labelArr.indexOf(t); - 1 !== o && this.labelArr.splice(o, 1)
				}
			},
			t.getLan = function(t, e) {
				if (this.checkInit(), !e || e.length <= 0) {
					var o = this.labelData[t];
					if (o) return o.sText;
					cc.warn(t + " lan not found!")
				}
				var i = this.labelData[t] || t;
				if (i.sText && (i = i.sText), e) for (var n = 0; n < e.length; n++) {
					var r = new RegExp("#" + n, "g");
					i = i.replace(r, e[n])
				}
				return i
			},
			t.addOrDelSprite = function(t, e) {
				if (e) this.spriteArr.push(t);
				else {
					var o = this.spriteArr.indexOf(t); - 1 !== o && this.spriteArr.splice(o, 1)
				}
			},
			t.reloadLabel = function() {
				var t = this,
				e = "Config/" + this.language;
				cc.resources.load(e,
				function(e, o) {
					e ? (console.error(e), t.labelData = {}) : t.labelData = o.json;
					for (var i = 0,
					n = t.labelArr; i < n.length; i++) n[i]._resetValue()
				})
			},
			t.reloadSprite = function() {
				for (var t = 0,
				e = this.spriteArr; t < e.length; t++) e[t]._resetValue()
			},
			t.language = "",
			t.labelArr = [],
			t.labelData = {},
			t.spriteArr = [],
			t
		} ();
		o.i18nMgr = i,
		cc._RF.pop()
	},
	{}],
	i18nSprite: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "c7c24R00kxAda0J0T28JffC", "i18nSprite");
		var i, n = this && this.__extends || (i = function(t, e) {
			return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array &&
			function(t, e) {
				t.__proto__ = e
			} ||
			function(t, e) {
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			})(t, e)
		},
		function(t, e) {
			function o() {
				this.constructor = t
			}
			i(t, e),
			t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
		}),
		r = this && this.__decorate ||
		function(t, e, o, i) {
			var n, r = arguments.length,
			a = r < 3 ? e: null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
			else for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
			return r > 3 && a && Object.defineProperty(e, o, a),
			a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		o.i18nSprite = void 0;
		var a = t("../Res/ResKeeper"),
		s = t("./i18nMgr"),
		c = cc._decorator,
		l = c.ccclass,
		u = c.property,
		p = c.executeInEditMode,
		h = c.disallowMultiple,
		d = c.requireComponent,
		f = c.menu,
		_ = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.i18n_string = "",
				e
			}
			return n(e, t),
			e.prototype.start = function() {
				s.i18nMgr.addOrDelSprite(this, !0),
				this._resetValue()
			},
			Object.defineProperty(e.prototype, "lanPic", {
				get: function() {
					return this.i18n_string
				},
				set: function(t) {
					this.i18n_string = t;
					var e = this.getComponent(cc.Sprite);
					if (cc.isValid(e) && (s.i18nMgr.checkInit(), t)) {
						var o = "i18n/sprite/" + s.i18nMgr.language + "/" + t;
						this.loadRes(o, cc.SpriteFrame,
						function(t, i) {
							t ? cc.error("i18n load :" + o + " fail!") : cc.isValid(e) && (e.spriteFrame = i)
						})
					}
				},
				enumerable: !1,
				configurable: !0
			}),
			e.prototype._resetValue = function() {
				this.lanPic = this.i18n_string
			},
			e.prototype.onDestroy = function() {
				t.prototype.onDestroy.call(this),
				s.i18nMgr.addOrDelSprite(this, !1)
			},
			r([u({
				visible: !1
			})], e.prototype, "i18n_string", void 0),
			r([u({
				type: cc.String
			})], e.prototype, "lanPic", null),
			r([l, p, d(cc.Sprite), h, f("\u591a\u8bed\u8a00/i18nSprite")], e)
		} (a.
	default);
		o.i18nSprite = _,
		cc._RF.pop()
	},
	{
		"../Res/ResKeeper": "ResKeeper",
		"./i18nMgr": "i18nMgr"
	}],
	interface: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "38b260lEulLhL/BMiJkpaEC", "interface"),
		Object.defineProperty(o, "__esModule", {
			value: !0
		}),
		cc._RF.pop()
	},
	{}],
	use_reversed_rotateBy: [function(t, e) {
		"use strict";
		cc._RF.push(e, "ae983KMQNxHtoMDxcyNRaU9", "use_reversed_rotateBy"),
		cc.RotateBy._reverse = !0,
		cc._RF.pop()
	},
	{}]
},
{},
["ButtonSafe", "ActivityCtrl", "BattleCtrl", "FriendRankCtrl", "GameCtrl", "GameOverCtrl", "RecommendCtrl", "TableMgr", "TreasureCtrl", "WorldRankCtrl", "WorldTipCtrl", "Define", "EventId", "GameDef", "LocalKey", "SceneDef", "StaticData", "UIDefs", "LockScroll", "ParticleActvator", "RTParticle", "RTSimulator", "RTTextureAnimation", "RTTextureParticleSystem", "RTAudioSource", "RTAudioSoureMgr", "RTClickSound", "SoundMgr", "UIEffect", "UIEffectMgr", "UIEffectType", "EventMgr", "EventObject", "HttpRequest", "RTCounter", "RTPerfCounter", "RTProfiler", "NodePool", "ResKeeper", "ResLeakChecker", "ResLoader", "ResUtil", "SceneBase", "SceneMgr", "LocalStorageMgr", "ComponetBase", "Handler", "HashMap", "ICallbackOwner", "ScheduleObject", "SysHook", "TeMap", "StateMachine", "ButtonClickLimiter", "CommonToast", "ConfirmView", "FlyTxt", "FlyTxtPool", "GuideAbility", "GuideEvent", "List", "ListItem", "ListViewOptimizer", "MeshPolygonSprite", "PageViewLimit", "PageViewOptimizer", "RoundRectMask", "ScrollViewOptimizer", "SingleTouch", "TabControl", "UICloseAnimation", "UIFacade", "UIMgr", "UIOpenAnimation", "UIBase", "LogUtil", "MD5", "ObjectUtils", "Share", "Singleton", "Utils", "Wrapper", "i18nLabel", "i18nMgr", "i18nSprite", "FriendRankData", "GameModel", "MainModel", "OverItemModel", "PkDataModel", "UserModel", "WorldTipModel", "Net", "NetApi", "NetBase", "BurierdPoint", "Platform", "interface", "QRShare", "QrNode", "Bootstrap", "GameView", "Main", "Test", "Announcement", "AwardRank", "Battle", "Invitation", "PassivePk", "BattleResult", "GameOver", "OverItem", "OverTreasureItem", "GetRewards", "GradeRule", "Guide", "GuideGameOver", "Lack", "Loading", "BattleItemMes", "MainScrollFit", "Menu", "Rule", "OpenBox", "Prisebox", "Priseview", "FriendRank", "FriendRankItem", "WorldRank", "WorldRankItem", "BannerItem", "Recommend", "WoodItem", "SingleAwardItem", "SwitchImg", "SwitchNode", "GetReward", "Treasure", "TreasureItem", "TreasurePoint", "TreasureProgress", "TreasureScrollView", "TestView", "WorldTipItem", "WorldTipView", "use_reversed_rotateBy"]);