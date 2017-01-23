if (typeof (Worker) == "undefined") {
    alert("对不起~系统检测到您使用的是IE内核浏览器，且IE版本低于9，本页面不支持IE9以下版本的IE内核浏览器，请更换浏览器或者切换到极速模式！")
}
var OldSleep = 0;
var ShowQ = 1;
var NowTime;
setInterval(function () { try { if (Audio_.currentTime > 0) { NowTime = Audio_.currentTime; } } catch (ee) { } }, 500);
function ShowC() {
    if (Audio_.currentTime == null) return;
    if (OldSleep == parseFloat(Audio_.currentTime.toFixed(2))) return;
    if ($.inArray(parseFloat(Audio_.currentTime.toFixed(2)), SleepList) > 0) {
        OldSleep = parseFloat(Audio_.currentTime.toFixed(2));
        C();
    }
}
//setInterval("ShowC();", 1);
var NOldTime = 0;
function C() {
    if (ShowQ == 0) {
        return;
    }
    if (BPM == 10) {
        return;
    }
    if (Audio_.paused) {
        return;
    }
    if (Audio_.currentTime == NOldTime && !Audio_.paused) {
        return;
    }
    //$("#audio").css("box-shadow", "0 0 10px rgba(255, 255, 255, 0.5)");
    //$("#audio").css("-webkit-box-shadow", "0 0 10px rgba(255, 255, 255, 0.5)");
    //$("#audio").css("-moz-box-shadow", "0 0 10px rgba(255, 255, 255, 0.5)");
    NOldTime = Audio_.currentTime;
    var oBody = document.querySelector("body");
    var oA = document.createElement("div");
    oA.setAttribute("class", "c");
    oA.style.width = 0;
    oA.style.left = random(50, window.screen.availWidth - 250) + "px";
    oA.style.top = random(50, window.screen.availHeight - 250) + "px";
    oA.style.height = 0;
    oBody.appendChild(oA);
    setTimeout(function () { D(oA); }, 1);
    setTimeout(function () { oA.parentNode.removeChild(oA); }, 1500);
    //setTimeout(function () {
    //    $("#audio").css("box-shadow", "");
    //    $("#audio").css("-webkit-box-shadow", "");
    //    $("#audio").css("-moz-box-shadow", "");
    //}, 200);
}
function D(o) {
    o.style.height = "150px";
    o.style.width = "150px";
    o.style.left = (Number(o.style.left.replace('px', '')) - 75) + "px";
    o.style.top = (Number(o.style.top.replace('px', '')) - 75) + "px";
    o.style.opacity = 0;
}
$(window).blur(function () {
    ShowQ = 0;
});
$(window).focus(function () {
    ShowQ = 1;
});
function random(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}
$.fn.extend({ mousewheel: function (Func) { return this.each(function () { var _self = this; _self.D = 0; if ($.browser.msie || $.browser.safari) { _self.onmousewheel = function () { _self.D = event.wheelDelta; event.returnValue = false; Func && Func.call(_self); }; } else { _self.addEventListener("DOMMouseScroll", function (e) { _self.D = e.detail > 0 ? -1 : 1; e.preventDefault(); Func && Func.call(_self); }, false); } }); } }); $.fn.extend({
    jscroll: function (j) {
        return this.each(function () {
            j = j || {}
            j.Bar = j.Bar || {}; j.Btn = j.Btn || {}; j.Bar.Bg = j.Bar.Bg || {}; j.Bar.Bd = j.Bar.Bd || {}; j.Btn.uBg = j.Btn.uBg || {}; j.Btn.dBg = j.Btn.dBg || {}; var jun = { W: "15px", BgUrl: "", Bg: "#efefef", Bar: { Pos: "up", Bd: { Out: "#b5b5b5", Hover: "#ccc" }, Bg: { Out: "#fff", Hover: "#fff", Focus: "orange" } }, Btn: { btn: true, uBg: { Out: "#ccc", Hover: "#fff", Focus: "orange" }, dBg: { Out: "#ccc", Hover: "#fff", Focus: "orange" } }, Fn: function () { } }
            j.W = j.W || jun.W; j.BgUrl = j.BgUrl || jun.BgUrl; j.Bg = j.Bg || jun.Bg; j.Bar.Pos = j.Bar.Pos || jun.Bar.Pos; j.Bar.Bd.Out = j.Bar.Bd.Out || jun.Bar.Bd.Out; j.Bar.Bd.Hover = j.Bar.Bd.Hover || jun.Bar.Bd.Hover; j.Bar.Bg.Out = j.Bar.Bg.Out || jun.Bar.Bg.Out; j.Bar.Bg.Hover = j.Bar.Bg.Hover || jun.Bar.Bg.Hover; j.Bar.Bg.Focus = j.Bar.Bg.Focus || jun.Bar.Bg.Focus; j.Btn.btn = j.Btn.btn != undefined ? j.Btn.btn : jun.Btn.btn; j.Btn.uBg.Out = j.Btn.uBg.Out || jun.Btn.uBg.Out; j.Btn.uBg.Hover = j.Btn.uBg.Hover || jun.Btn.uBg.Hover; j.Btn.uBg.Focus = j.Btn.uBg.Focus || jun.Btn.uBg.Focus; j.Btn.dBg.Out = j.Btn.dBg.Out || jun.Btn.dBg.Out; j.Btn.dBg.Hover = j.Btn.dBg.Hover || jun.Btn.dBg.Hover; j.Btn.dBg.Focus = j.Btn.dBg.Focus || jun.Btn.dBg.Focus; j.Fn = j.Fn || jun.Fn; var _self = this; var Stime, Sp = 0, Isup = 0; $(_self).css({ overflow: "hidden", position: "relative", padding: "0px" }); var dw = $(_self).width(), dh = $(_self).height() - 1; var sw = j.W ? parseInt(j.W) : 21; var sl = dw - sw
            var bw = j.Btn.btn == true ? sw : 0; if ($(_self).children(".jscroll-c").height() == null) { $(_self).wrapInner("<div class='jscroll-c' style='top:0px;z-index:9999;zoom:1;position:relative'></div>"); $(_self).children(".jscroll-c").prepend("<div style='height:0px;overflow:hidden'></div>"); $(_self).append("<div class='jscroll-e' unselectable='on' style=' height:100%;top:0px;right:0;-moz-user-select:none;position:absolute;overflow:hidden;z-index:10000;'><div class='jscroll-u' style='position:absolute;top:0px;width:100%;left:0;background:blue;overflow:hidden'></div><div class='jscroll-h'  unselectable='on' style='background:green;position:absolute;left:0;-moz-user-select:none;border:1px solid'></div><div class='jscroll-d' style='position:absolute;bottom:0px;width:100%;left:0;background:blue;overflow:hidden'></div></div>"); }
            var jscrollc = $(_self).children(".jscroll-c"); var jscrolle = $(_self).children(".jscroll-e"); var jscrollh = jscrolle.children(".jscroll-h"); var jscrollu = jscrolle.children(".jscroll-u"); var jscrolld = jscrolle.children(".jscroll-d"); if ($.browser.msie) { document.execCommand("BackgroundImageCache", false, true); }
            jscrollc.css({ "padding-right": sw }); jscrolle.css({ width: sw, background: j.Bg, "background-image": j.BgUrl }); jscrollh.css({ top: bw, background: j.Bar.Bg.Out, "background-image": j.BgUrl, "border-color": j.Bar.Bd.Out, width: sw - 2 }); jscrollu.css({ height: bw, background: j.Btn.uBg.Out, "background-image": j.BgUrl }); jscrolld.css({ height: bw, background: j.Btn.dBg.Out, "background-image": j.BgUrl }); jscrollh.hover(function () { if (Isup == 0) $(this).css({ background: j.Bar.Bg.Hover, "background-image": j.BgUrl, "border-color": j.Bar.Bd.Hover }) }, function () { if (Isup == 0) $(this).css({ background: j.Bar.Bg.Out, "background-image": j.BgUrl, "border-color": j.Bar.Bd.Out }) })
            jscrollu.hover(function () { if (Isup == 0) $(this).css({ background: j.Btn.uBg.Hover, "background-image": j.BgUrl }) }, function () { if (Isup == 0) $(this).css({ background: j.Btn.uBg.Out, "background-image": j.BgUrl }) })
            jscrolld.hover(function () { if (Isup == 0) $(this).css({ background: j.Btn.dBg.Hover, "background-image": j.BgUrl }) }, function () { if (Isup == 0) $(this).css({ background: j.Btn.dBg.Out, "background-image": j.BgUrl }) })
            var sch = jscrollc.height(); var sh = (dh - 2 * bw) * dh / sch
            if (sh < 10) { sh = 10 }
            var wh = sh / 6
            var curT = 0, allowS = false; jscrollh.height(sh); if (sch <= dh) { jscrollc.css({ padding: 0 }); jscrolle.css({ display: "none" }) } else { allowS = true; }
            if (j.Bar.Pos != "up") { curT = dh - sh - bw; setT(); }
            jscrollh.bind("mousedown", function (e) {
                j['Fn'] && j['Fn'].call(_self); Isup = 1; jscrollh.css({ background: j.Bar.Bg.Focus, "background-image": j.BgUrl })
                var pageY = e.pageY, t = parseInt($(this).css("top")); $(document).mousemove(function (e2) { curT = t + e2.pageY - pageY; setT(); }); $(document).mouseup(function () {
                    Isup = 0; jscrollh.css({ background: j.Bar.Bg.Out, "background-image": j.BgUrl, "border-color": j.Bar.Bd.Out })
                    $(document).unbind();
                }); return false;
            }); jscrollu.bind("mousedown", function (e) {
                j['Fn'] && j['Fn'].call(_self); Isup = 1; jscrollu.css({ background: j.Btn.uBg.Focus, "background-image": j.BgUrl })
                _self.timeSetT("u"); $(document).mouseup(function () {
                    Isup = 0; jscrollu.css({ background: j.Btn.uBg.Out, "background-image": j.BgUrl })
                    $(document).unbind(); clearTimeout(Stime); Sp = 0;
                }); return false;
            }); jscrolld.bind("mousedown", function (e) {
                j['Fn'] && j['Fn'].call(_self); Isup = 1; jscrolld.css({ background: j.Btn.dBg.Focus, "background-image": j.BgUrl })
                _self.timeSetT("d"); $(document).mouseup(function () {
                    Isup = 0; jscrolld.css({ background: j.Btn.dBg.Out, "background-image": j.BgUrl })
                    $(document).unbind(); clearTimeout(Stime); Sp = 0;
                }); return false;
            }); _self.timeSetT = function (d) {
                var self = this; if (d == "u") { curT -= wh; } else { curT += wh; }
                setT(); Sp += 2; var t = 500 - Sp * 50; if (t <= 0) { t = 0 }; Stime = setTimeout(function () { self.timeSetT(d); }, t);
            }
            jscrolle.bind("mousedown", function (e) { j['Fn'] && j['Fn'].call(_self); curT = curT + e.pageY - jscrollh.offset().top - sh / 2; asetT(); return false; }); function asetT() {
                if (curT < bw) { curT = bw; }
                if (curT > dh - sh - bw) { curT = dh - sh - bw; }
                jscrollh.stop().animate({ top: curT }, 100); var scT = -((curT - bw) * sch / (dh - 2 * bw)); jscrollc.stop().animate({ top: scT }, 1000);
            }; function setT() {
                if (curT < bw) { curT = bw; }
                if (curT > dh - sh - bw) { curT = dh - sh - bw; }
                jscrollh.css({ top: curT }); var scT = -((curT - bw) * sch / (dh - 2 * bw)); jscrollc.css({ top: scT });
            }; $(_self).mousewheel(function () { if (allowS != true) return; j['Fn'] && j['Fn'].call(_self); if (this.D > 0) { curT -= wh; } else { curT += wh; }; setT(); })
        });
    }
});
!function (a) { "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery) }(function (a) { function b(b) { var g = b || window.event, h = i.call(arguments, 1), j = 0, l = 0, m = 0, n = 0, o = 0, p = 0; if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) { if (1 === g.deltaMode) { var q = a.data(this, "mousewheel-line-height"); j *= q, m *= q, l *= q } else if (2 === g.deltaMode) { var r = a.data(this, "mousewheel-page-height"); j *= r, m *= r, l *= r } if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) { var s = this.getBoundingClientRect(); o = b.clientX - s.left, p = b.clientY - s.top } return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h) } } function c() { f = null } function d(a, b) { return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0 } var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], i = Array.prototype.slice; if (a.event.fixHooks) for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks; var k = a.event.special.mousewheel = { version: "3.1.12", setup: function () { if (this.addEventListener) for (var c = h.length; c;) this.addEventListener(h[--c], b, !1); else this.onmousewheel = b; a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this)) }, teardown: function () { if (this.removeEventListener) for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1); else this.onmousewheel = null; a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height") }, getLineHeight: function (b) { var c = a(b), d = c["offsetParent" in a.fn ? "offsetParent" : "parent"](); return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16 }, getPageHeight: function (b) { return a(b).height() }, settings: { adjustOldDeltas: !0, normalizeOffset: !0 } }; a.fn.extend({ mousewheel: function (a) { return a ? this.bind("mousewheel", a) : this.trigger("mousewheel") }, unmousewheel: function (a) { return this.unbind("mousewheel", a) } }) });
var First = 0;
var ID = 0;
var Audio_ = new Audio();
var Set;
var ErrorTime = 0;
var Stop = 0;
var AutoLrc;
var OldTime = 0;
var LrcHeight = 0;
var LrcJunp = 0;
var GoID = 0;
var YLrc;
var Temp_Set;
var ZhongWenLrc;
var LuoMaYinLrc;
var LrcStatus = 0;
var MusicID;
var BPM = 10;
var Musictype = 0;
var Playtype = 0;
var c = 0;
var SleepList;
var CsetInterval;
var HighListen = 1;
var FirstOpen = 1;
var IEUrl;
var JsonList = new Array();
var Loading = false;
var NowPage = 1;
var IsAllData = false;
if (window.location.host.indexOf("xiaozhan.") > 0) c = 1;
function ShowLrcToP() {
    switch (LrcStatus) {
        case 0:
            $("#lrcBox").html(YLrc);
            break;
        case 1:
            $("#lrcBox").html(ZhongWenLrc);
            break;
        case 2:
            $("#lrcBox").html(LuoMaYinLrc);
            break;
    }
}
function ShowHideLrc() {
    if ($("#ShowLrc").html() == "关闭歌词") {
        $("#ShowLrc").html("打开歌词");
        $("#WLrcBox").css("opacity", "0");
        setTimeout(function () { $("#WLrcBox").css("display", "none"); }, 300);
    }
    else {
        $("#WLrcBox").css("display", "");
        $("#ShowLrc").html("关闭歌词");
        setTimeout(function () { $("#WLrcBox").css("opacity", "1"); }, 1);
    }
}
function PlayStatus() {
    if (Playtype == 0) {
        $("#FM_PlayStatus").attr("title", "单曲循环").removeClass().addClass("Icon_repOne");
        Audio_.loop = true;
        Playtype = 1;
        var ID = Math.random().toString().replace('0.', '');
        $("body").append("<div id='" + ID + "' style='position: fixed;top: 50%;height: 50px;color: #fff;font-size: 28px;opacity: 0.7;left: -500px;transition: left 0.5s; moz-transition: left 0.5s;-webkit-transition: left 0.5s;-o-transition: left 0.5s;'>单曲循环</div>");
        $("#" + ID).css("margin-left", "-" + $("#" + ID).width() / 2 + "px");
        setTimeout(function () { $("#" + ID).css("left", "50%"); }, 1);
        setTimeout(function () { $("#" + ID).css("left", "250%"); setTimeout(function () { $("#" + ID).remove(); }, 1000); }, 1000);
    }
    else if (Playtype == 1) {
        $("#FM_PlayStatus").attr("title", "专题循环(同一部动漫中随机播放)").removeClass().addClass("Icon_order");
        Audio_.loop = false;
        Playtype = 2;
        var ID = Math.random().toString().replace('0.', '');
        $("body").append("<div id='" + ID + "' style='position: fixed;top: 50%;height: 50px;color: #fff;font-size: 28px;opacity: 0.7;left: -500px;transition: left 0.5s; moz-transition: left 0.5s;-webkit-transition: left 0.5s;-o-transition: left 0.5s;'>专题循环(同一部动漫中随机播放)</div>");
        $("#" + ID).css("margin-left", "-" + $("#" + ID).width() / 2 + "px");
        setTimeout(function () { $("#" + ID).css("left", "50%"); }, 1);
        setTimeout(function () { $("#" + ID).css("left", "250%"); setTimeout(function () { $("#" + ID).remove(); }, 1000); }, 2000);
    }
    else {
        $("#FM_PlayStatus").attr("title", "全站随机播放").removeClass().addClass("Icon_Random");
        Audio_.loop = false;
        Playtype = 0;
        var ID = Math.random().toString().replace('0.', '');
        $("body").append("<div id='" + ID + "' style='position: fixed;top: 50%;height: 50px;color: #fff;font-size: 28px;opacity: 0.7;left: -500px;transition: left 0.5s; moz-transition: left 0.5s;-webkit-transition: left 0.5s;-o-transition: left 0.5s;'>全站随机播放</div>");
        $("#" + ID).css("margin-left", "-" + $("#" + ID).width() / 2 + "px");
        setTimeout(function () { $("#" + ID).css("left", "50%"); }, 1);
        setTimeout(function () { $("#" + ID).css("left", "250%"); setTimeout(function () { $("#" + ID).remove(); }, 1000); }, 1000);
    }
}
function random(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}
var UrlStatus = 0;
var UrlStatusData = ["(￣3￣)", "（￣▽￣）", "(⌒▽⌒)", "（￣▽￣）", "(=・ω・=)", "(｀・ω・´)", "(〜￣△￣)〜", "(･∀･)", "(°∀°)ﾉ", "(￣3￣)", "╮(￣▽￣)╭", "( ´_ゝ｀)", "←_←", "→_→", "(;¬_¬)", "(\"▔□▔)/", "(ﾟДﾟ≡ﾟдﾟ)!?", "Σ(ﾟдﾟ;)", "Σ( ￣□￣||)", "(´；ω；`)", "（/TДT)/", "(^・ω・^)", "(｡･ω･｡)", "(●￣(ｴ)￣●)", "ε=ε=(ノ≧∇≦)ノ", "(´･_･`)", "(-_-#)", "（￣へ￣）", "(￣ε(#￣) Σ", "ヽ(`Д´)ﾉ", "(╯°口°)╯(┴—┴", "（#-_-)┯━┯", "_(:3」∠)_"];
function Url() {
    var state = {};
    window.history.pushState(state, document.title, '?' + MusicID + "&" + UrlStatusData[random(0, UrlStatusData.length - 1)]);
}
//setInterval("Url();", 3000);
function MusicStatus() {
    if ($("#MusicType").html() == "播放歌曲:全站歌曲") {
        $("#MusicType").html("播放歌曲:推荐歌曲");
        Musictype = 1;
    }
    else {
        $("#MusicType").html("播放歌曲:全站歌曲");
        Musictype = 0;
    }
}
function ITop() {
    $.ajax({
        type: "POST",
        url: "/API/MusicTop",
        data: { id: MusicID },
        dataType: "text",
        success: function (data) {
            alert("推荐成功!");
        },
		
		error: function (data) {
		    alert("数据提交失败");
	    },
		
		timeout: function (data) {
		    alert("请求超时");
	    }
    });
}
function getArgs() {
    var args = {};
    var match = null;
    var search = decodeURIComponent(location.search.substring(1));
    return search;
}
if (getArgs() != null && getArgs() != "") {
    GoID = getArgs();
}
function load(img) {
    $("#imageloading").html("<div class='cube1'></div><div class='cube2'></div>");
    $("#imageloading").css("opacity", "1");
    $("#backstretch_img").css("opacity", "0");
    clearInterval(LoadingSet);
    LoadingSet = setInterval("Loading_Img()", 10);
    if (First == 0) {
        First = 1;
        $.backstretch(img);
        Stop = 0;
    }
    else {
        //var t = setTimeout("$.backstretch('" + img + "';Stop = 0;)", 2000);
        var t = setTimeout(function () { $.backstretch(img); Stop = 0; }, 1000);
    }
    Stop = 0;
}
var LoadingSet;
function Loading_Img() {
    if ($("#backstretch_img").css("opacity") == "0.5") {
        $("#imageloading").css("opacity", "0");
        clearInterval(LoadingSet);
        setTimeout(function () { $("#imageloading").html(""); }, 1000);
    }
    else {
        clearInterval(LoadingSet);
        LoadingSet = setInterval("Loading_Img()", 10);
    }
}
function Lrc() {
    lrcMove(timeAll(), Audio_.currentTime);
    clearInterval(AutoLrc);
    AutoLrc = setInterval("Lrc()", 500);
}
function timeAll() {
    if (Audio_.currentTime != 0) {
        return Audio_.duration;
    } else {
        return 0;
    }
}
function LoadMusic() {
    Audio_.pause();
    Audio_.src = "";
    ErrorTime = 0;
    $(".FM_Right_Info").removeClass("FM_Playing");
    if (Loading) return;
    clearInterval(onerrorSet);
    if (Playtype != 2) {
        $("#backstretch_img").css("opacity", "0");
    }
    UrlStatus = 0;
    BPM = 10;
    //if ($("#qh").html() == "切换中...") return;
    //$("#qh").html("切换中...");
    if (Stop == 1) return;
    Stop = 1;
    $.ajax({
        type: "POST",
        url: "/API/Music",
        data: { id: ID, t: Math.random(), goid: GoID, Playtype: Playtype, c: c, t: Musictype },
        dataType: "json",
        success: function (data) {
            ErrorTime = 0;
            if (window.localStorage.List && GoID == 0 && Playtype == 0) {
                JsonList = JSON.parse(window.localStorage.List);
                for (var i = JsonList.length - 1; i >= 0; i--) {
                    if (i >= JsonList.length - 11) {
                        if (data["MusicID"] == JsonList[i]["MusicID"]) {
                            Loading = false;
                            LoadMusic();
                            return;
                        }
                    }
                }
            }
            var Temp_Json = new Object();
            var A320 = 'null';
            var A128 = 'null';
            var AHigh = 'null';
            var reg = new RegExp("<a.+?</a>", "g");
            var cc = data["name"].match(reg);
            for (var i = 0; i < cc.length; i++) {
                if (cc[i].indexOf("320Kbps") >= 0) A320 = cc[i].substring(cc[i].indexOf("<a href='") + 9, cc[i].indexOf("' "));
                if (cc[i].indexOf("128Kbps") >= 0) A128 = cc[i].substring(cc[i].indexOf("<a href='") + 9, cc[i].indexOf("' "));
                if (cc[i].indexOf("无损") >= 0) AHigh = cc[i].substring(cc[i].indexOf("<a href='") + 9, cc[i].indexOf("' "));
            }
            Temp_Json.A320 = A320;
            Temp_Json.A128 = A128;
            Temp_Json.AHigh = AHigh;
            Temp_Json.MusicID = data["MusicID"];
            Temp_Json.id = data["id"];
            Temp_Json.bg = data["bg"];
            Temp_Json.title = data["title"];
            Temp_Json.name = data["name"];
            JsonList.push(Temp_Json);
            console.log("当前播放歌曲>>" + data["name"].toString().substring(0, data["name"].toString().indexOf('<span')));
            $("#FM_List").prepend("<div class='FM_List_Data' data-MusicID='" + data["MusicID"] + "' data-AnimeID='" + data["id"] + "'><div class='FM_DownLoad'><span onclick=\"$(this).parent().css('left','-400px');\">×</span><a href='" + data["bg"] + "?attname=' target='_blank'  onclick=\"$(this).parent().css('left','-400px');\">背景图</a>" + (A128 != 'null' ? "<a href='" + A128 + "?attname=' target='_blank'  onclick=\"$(this).parent().css('left','-400px');\">128Kbps音质</a>" : "") + (A320 != 'null' ? "<a href='" + A320 + "?attname=' target='_blank'  onclick=\"$(this).parent().css('left','-400px');\">320Kbps音质</a>" : "") + (AHigh != 'null' ? "<a href='" + AHigh + "' target='_blank'  onclick=\"$(this).parent().css('left','-400px');\">无损音质</a>" : "") + "</div><div class='FM_List_Image' style='background-image: url(http://i3.hereacg.com/" + data["id"] + "/logo/slogo.jpg?imageView2/1/w/100/h/70);'></div><div class='FM_List_Info'><span style='font-size:16px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;display: block;' title='" + data["title"] + "'>" + data["title"] + "</span><div style='font-size:12px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;' title='" + data["name"].toString().substring(0, data["name"].toString().indexOf('<span')) + "'>" + data["name"].toString().substring(0, data["name"].toString().indexOf('<span')) + "</div><a class='Icon_DownLoad' title='下载' onclick=\"$(this).parent().parent().find('.FM_DownLoad').css('left','0px');\"></a></div></div>");
            $(".FM_List_Data:gt(0)").css("margin-top", "1px");
            $("#FM_List").jscroll({ W: "0px" });
            for (var i = 0; i < JsonList.length - 1; i++) {
                if (JsonList[i].MusicID == data["MusicID"]) {
                    JsonList.splice(i, 1);
                }
            }
            if (JsonList.length > 50) {
                JsonList.splice(0, 1);
            }
            window.localStorage.List = JSON.stringify(JsonList);
            var Temp_Number = 0;
            $(".FM_List_Data").each(function () {
                if (Temp_Number == 0) {
                    Temp_Number = 1;
                }
                else {
                    if ($(this).attr("data-MusicID") == data["MusicID"]) {
                        $(this).remove();
                    }
                }
            });
            $(".FM_List_Image").click(function () {
                GoID = $(this).parent().attr("data-MusicID");
                if (GoID == MusicID) {
                    GoID = 0;
                    return;
                }
                LoadMusic();
            });
            $(".FM_List_Data").dblclick(function () {
                GoID = $(this).attr("data-MusicID");
                if (GoID == MusicID) {
                    GoID = 0;
                    return;
                }
                LoadMusic();
            });
            Loading = false;
            GoID = 0;
            ID = data["id"];
			Slogo = data["slogo"];
            if (Playtype != 2) {
                load(data["bg"]);
                $("#FM_Info>img").css("opacity", "0");
                $("#FM_Info>img").attr("src", Slogo + "?imageView2/1/w/275/h/127/format/png");
            }
            else { Stop = 0; }
            document.title = data["title"] + " - 音乐FM2.0 - HereACG";
            $("#FM_Info>h3").html("<a href='javascript:void(0);' target='_blank'>" + data["title"] + "</a>");
            $("#FM_Info>h3").unbind();
            $("#FM_Info>h3").click(function () {
                $("#FM_Serach>input").val(data["title"]);
                SearchTime = 4;
                SearchTo();
            });
            if (data["top"] == "1") {
                $("#FM_Info>h5").html("<span style='color:red' title='推荐曲目'>[荐!]" + data["name"].toString().substring(0, data["name"].toString().indexOf('<span')) + "</span>");
            }
            else {
                $("#FM_Info>h5").html(data["name"].toString().substring(0, data["name"].toString().indexOf('<span')));
            }
            NowTime = 0;
            Audio_.src = data["highurl"];
            //IEUrl = ((data["highurl"].substring(data["highurl"].indexOf("&JJPath=") + 8, data["highurl"].lenght)).indexOf("http://")>-1 ?"" : "http://i2.hereacg.com/") + data["highurl"].substring(data["highurl"].indexOf("&JJPath=") + 8, data["highurl"].lenght);
            IEUrl = data["highurl"];
            //Audio_.src = IEUrl;
            Audio_.play();
            //clearInterval(Temp_Set);
            //Temp_Set = setInterval(function () { try { Audio_.volume = Audio_.volume + 0.1; if (Audio_.volume == 1) clearInterval(Temp_Set); } catch (e) { Audio_.volume = 1; clearInterval(Temp_Set); } }, 50);
            $("#FM_Info>img").css("opacity", "1");
            $("#Button_Play").removeClass("Icon_Play").addClass("Icon_Pause");
            //}
            lrcBox.style.marginTop = 0;
            MusicID = data["MusicID"];
            var state = {};
            window.history.pushState(state, document.title, '?' + MusicID);
            $(".FM_Right_Info").each(function () {
                if ($(this).attr("data-MusicID") == MusicID) {
                    $(this).addClass("FM_Playing");
                    return;
                }
            });
            //YLrc = data["Lrc"];
            //ZhongWenLrc = data["ZhongWenLrc"];
            //LuoMaYinLrc = data["LuoMaYinLrc"];
            //if (YLrc == "" || YLrc == null) YLrc = "<p>没有歌词文件,<a href='/addlrc/?id=" + data["MusicID"] + "' target='_blank'>点此上传</a></p>";
            //if((YLrc=="" || YLrc==null)&&LrcStatus==0){ 
            //    lrcBox.style.marginTop = LrcHeight;
            //}
            //if (LuoMaYinLrc == "" || LuoMaYinLrc == null) LuoMaYinLrc = "<p>没有歌词文件,<a href='/addlrc/?id=" + data["MusicID"] + "' target='_blank'>点此上传</a></p>";
            //if ((LuoMaYinLrc == "" || LuoMaYinLrc == null) && LrcStatus == 1) {
            //    lrcBox.style.marginTop = LrcHeight;
            //}
            //if (ZhongWenLrc == "" || ZhongWenLrc == null) ZhongWenLrc = "<p>没有歌词文件,<a href='/addlrc/?id=" + data["MusicID"] + "' target='_blank'>点此上传</a></p>";
            //if ((ZhongWenLrc == "" || ZhongWenLrc == null) && LrcStatus == 2) {
            //    lrcBox.style.marginTop = LrcHeight;
            //}
            //ShowLrcToP();
            $("#lrcBox").css("margin-top", LrcHeight + "px");
            $("#qh").html("换一首");
            //if(data["sleep"]!="" && data["sleep"]!=null)
            //{
            //    BPM = data["sleep"];
            //    clearInterval(CsetInterval);
            //    CsetInterval= setInterval("C();", data["sleep"]);
            //}
            if (data["sleeplist"] != null) {
                SleepList = data["sleeplist"];
            }
        },
        catch: function () {
            //Loading = false;
            //console.log("加载时出错,重新加载");
            //LoadMusic();
        }
    });
}
var First2 = 0;
var UrlStatus = 0;
function AotoLoad() {
    if (Audio_.ended && !Loading) {
        LoadMusic();
    }
    if (Audio_.networkState == 3 && Audio_.src != document.location.href) {
        if (UrlStatus > 0) {
            console.log("歌曲播放出现错误,加载下一首>>" + MusicID);
            LoadMusic();
        }
        else {
            try { NowTime = Audio_.currentTime; } catch (e) { }
            Audio_.src = IEUrl;
            console.log("歌曲播放出现错误,加载备用资源>>" + MusicID + ">>" + IEUrl);
            $("#Button_Play").removeClass("Icon_Play").addClass("Icon_Pause");
            Audio_.play();
            var Set = setInterval(function () { try { Audio_.currentTime = NowTime; clearInterval(Set); } catch (e) { } }, 100);
            UrlStatus = 1;
        }
    }
    if ((Audio_.networkState == 2 || Audio_.networkState == 0) && Audio_.currentTime == 0 && !Loading) {
        ErrorTime++;
        //return;
    }
    if (OldTime > 20) {
        Stop = 0;
    }
    if (Audio_.currentTime == OldTime && !Audio_.paused) {
        ErrorTime++;
        //return;
    }
    if (ErrorTime > 20) {
        if (UrlStatus > 0) {
            ErrorTime = 0;
            LoadMusic();
        }
        else {
            ErrorTime = 0;
            UrlStatus = 1;
            Audio_.src = IEUrl;
            var Set = setInterval(function () { try { Audio_.currentTime = NowTime; clearInterval(Set); } catch (e) { } }, 100);
        }
    }
    if (Audio_.currentTime - OldTime > 5 || OldTime - Audio_.currentTime < 5) {
        LrcJunp = 1;
    }
    OldTime = Audio_.currentTime;
}
LoadMusic();
clearInterval(Set);
Set = setInterval(function () {
    //alert(1);
    AotoLoad();
}, 1000);
var onerrorSet;
window.onload = function () {
    Audio_.onerror = function () {
        try {
            if (Audio_.src != document.location.href) {
                try { NowTime = Audio_.currentTime; } catch (e) { }
                Audio_.src = IEUrl;
                console.log("歌曲播放出现错误,加载备用资源>>" + MusicID + ">>" + IEUrl);
                $("#Button_Play").removeClass("Icon_Play").addClass("Icon_Pause");
                Audio_.play();
                clearInterval(onerrorSet);
                onerrorSet = setInterval(function () { try { Audio_.currentTime = NowTime; clearInterval(onerrorSet); } catch (e) { } }, 100);
            }
        }
        catch (ee) { }
    }
}
function lrcMove(timeall, currenttime) {
    //歌曲总时间 timeall
    //当前时间 currenttime
    var domList = $("#lrcBox p"),
         timer,
         index,
         s,
         m = parseInt(lrcBox.style.marginTop.split("-")[1]) || 0;
    //alert(domList.length);
    if (domList.length < 5) return;
    for (var i = 0; i < domList.length; i++) {
        //如果当前时间等于遍历的歌词的时间
        var dataTimeLine = parseInt(domList[i].attributes["data-timeLine"].nodeValue);
        if (dataTimeLine > 0 && dataTimeLine == parseInt(currenttime)) {
            index = i;
            if (s != i) {
                s = i;
                for (var j = 0; j < domList.length; j++) {
                    domList[j].style.color = "rgb(162,162,162)";
                }
                if (index > 0) {
                    domList[index].style.color = "#fff";
                }
                while (true) {
                    m += 1;
                    if (m >= index * 30 && LrcJunp == 0) {
                        break;
                    } else {
                        LrcHeight = $("#WLrcBox").height() / 2;
                        //lrcBox.style.marginTop = "-" + (m) + "px";
                        lrcBox.style.marginTop = -((parseInt(domList[i].attributes["data-line"].nodeValue) * 31) - parseInt(LrcHeight)) + "px";
                        LrcJunp = 0;
                    }
                }
                //timer = setInterval(function () {
                //        m += 5;
                //        if (m >= index * 30) {
                //            clearInterval(timer);
                //        } else {
                //            lrcBox.style.marginTop = "-" + (m - LrcHeight) + "px";
                //        }
                //}, 1);
            }
        }
    }
}
LrcHeight = $("#WLrcBox").height() / 2;
clearInterval(AutoLrc);
//AutoLrc = setInterval(Lrc(), 500);
setInterval(function () {
    if ($("#Button_Play").attr("class") == "Icon_Pause" && Stop != 1 && !Loading && Audio_ && Audio_.duration - Audio_.currentTime > 1) {
        Audio_.play();
    }
}, 1000);