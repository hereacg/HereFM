function MoveFM() {

    if ($("#FM_Left").css("left") == "0px") {

        $("#FM_Left").css("left", $(window).width() - $("#FM_Left").width() + "px");

        $("#Button_LeftOrRigth").css("left", "20px");

        $("#Button_LeftOrRigth").removeClass("Icon_Right");

        $("#Button_LeftOrRigth").addClass("Icon_Left");

        $("#FM_Right").css("left", "0px");

        $("#FM_Button>img").css("margin", "83px 0 0 -305px");

        $("#Button_Play").css("margin-left", "65px");

        window.localStorage.Right = 1;

    }

    else {

        $("#FM_Right").css("left", "335px");

        $("#FM_Left").css("left", "0px");

        $("#Button_LeftOrRigth").css("left", $("#FM_Left").width() - $("#Button_LeftOrRigth").width() - 20 + "px");

        $("#Button_LeftOrRigth").removeClass("Icon_Left");

        $("#Button_LeftOrRigth").addClass("Icon_Right");

        $("#FM_Button>img").css("margin", "83px 0 0 22px");

        $("#Button_Play").css("margin-left", "10px");

        window.localStorage.Right = 2;

    }

    try {

        if ($("#FM_Left").css("left") != "0px") {

            $("#Top").css("right", "25px");

            try {

                if ($(window).width() > 1366) {

                    $("#FM_Header").css("right", $(window).width() - $(".FM_Right_Info:eq(2)")[0].offsetLeft - $(".FM_Right_Info:eq(2)").width() - 335 + "px")

                }

                else {

                    $("#FM_Header").css("right", $(window).width() - $(".FM_Right_Info:eq(1)")[0].offsetLeft - $(".FM_Right_Info:eq(2)").width() - 335 + "px")

                }

            }

            catch (e) { }

        }

        else {

            $("#Top").css("right", $("#FM_Right").width() + 290);

            $("#FM_Header").css("right", $("#FM_Right").width() + 110)

        }

    }

    catch (e) { }

}

var SetShowBuffer;

function ShowBuffer() {

    try {

        MaxTime = Audio_.duration;

        var NowTime = 0;

        try { NowTime = Audio_.buffered.end(0); }

        catch (e) { NowTime = Audio_.duration; }

        var NowPlayTime = Math.round(Audio_.currentTime);

        var Temp = (Math.floor(NowPlayTime / 60).toString() + ":" + ((NowPlayTime - Math.floor(NowPlayTime / 60) * 60) < 10 ? "0" : "") + Math.floor(NowPlayTime - Math.floor(NowPlayTime / 60) * 60).toString()).toString().replace("010", "10");

        if (Temp.indexOf("NaN") >= 0) Temp = "0:00";

        $("#FM_Time>span:eq(0)").html(Temp);

        Temp = (Math.floor(MaxTime / 60).toString() + ":" + ((MaxTime - Math.floor(MaxTime / 60) * 60) < 10 ? "0" : "") + Math.round(MaxTime - Math.floor(MaxTime / 60) * 60).toString()).toString().replace("010", "10");

        if (Temp.indexOf("NaN") >= 0) Temp = "0:00";

        $("#FM_Time>span:eq(1)").html(Temp);

        $("#FM_Progress>div:eq(0)").css("width", ((NowTime / MaxTime * 100)).toString() + "%");

        $("#FM_Progress>div:eq(1)").css("width", ((Audio_.currentTime / MaxTime * 100)).toString() + "%");

        clearInterval(SetShowBuffer);

        SetShowBuffer = setInterval(function () { ShowBuffer(); }, 100);

    }

    catch (e) { }

}

clearInterval(SetShowBuffer);

SetShowBuffer = setInterval(function () { ShowBuffer(); }, 100);

//setInterval(function () { $("body").css("height", ($(window).height())); $("#FM_List").height($(window).height() - 480); $("#FM_Right").css("width", ($(window).width()) - 335 + "px"); }, 500);



$("body").css("height", ($(window).height())); $("#FM_List").height($(window).height() - 480); $("#FM_Right").css("width", ($(window).width()) - 335 + "px");

function PlayOrPause() {

    if (Audio_.paused) {

        $("#Button_Play").removeClass("Icon_Play").addClass("Icon_Pause");

        Audio_.play();

        //clearInterval(Temp_Set);

        //Temp_Set = setInterval(function () { try { Audio_.volume = Audio_.volume + 0.1; if (Audio_.volume == 1) clearInterval(Temp_Set); } catch (e) { Audio_.volume = 1; clearInterval(Temp_Set); } }, 50);

    }

    else {

        $("#Button_Play").removeClass("Icon_Pause").addClass("Icon_Play");

        Audio_.pause();

        //clearInterval(Temp_Set);

        //Temp_Set = setInterval(function () { try { Audio_.volume = Audio_.volume - 0.1; if (Audio_.volume == 0) { clearInterval(Temp_Set); Audio_.pause(); } } catch (e) { Audio_.volume = 0; clearInterval(Temp_Set); Audio_.pause(); } }, 50);

    }

}





$(document).ready(function () {

    if (window.localStorage.Volume) {

        Old_Volume = window.localStorage.Volume;

        Audio_.volume = window.localStorage.Volume;

    }

    setTimeout(function () {

        $("#FM_List").jscroll({ W: "0px" });

        if (window.localStorage.Right == 1) { MoveFM() }

        if (window.localStorage.RightList == 1) {

            $('#FM_Right_List').css('right', "-100%");

            $("#FM_Button>img").attr("src", "/images/iconfont-yousuojin.png");

        }

    }, 1);

});



$("#FM_Right").css("margin-top", "60px").css("height", $(window).height() - 60 + "px")

$("#FM_Right").css("width", ($(window).width()) - 335 + "px");

$("#FM_Progress>div:eq(1)").css("background-color", "#fff").css("opacity", "0.8");

$("#Button_LeftOrRigth").click(function () { MoveFM(); });

$("#Button_Play").click(function () { PlayOrPause(); });

$("#Button_Back").click(function () { LoadMusic(); });

$("#Button_LeftOrRigth").css("left", $("#FM_Left").width() - $("#Button_LeftOrRigth").width() - 20 + "px");



window.onresize = function () {

    $("body").css("height", ($(window).height()));

    $("#FM_List").height($(window).height() - 480);

    if ($("#FM_Left").css("left") != "0px") { $("#FM_Left").css("left", $(window).width() - $("#FM_Left").width() + "px"); }

    $("#FM_Right").css("width", ($(window).width()) - 335 + "px");

    $("#FM_Right").css("margin-top", "60px").css("height", $(window).height() - 60 + "px");

    try {

        if ($("#FM_Left").css("left") == "0px") {

            $("#Top").css("right", "25px");

            try {

                if ($(window).width() > 1366) {

                    $("#FM_Header").css("right", $(window).width() - $(".FM_Right_Info:eq(2)")[0].offsetLeft - $(".FM_Right_Info:eq(2)").width() - 335 + "px")

                }

                else {

                    $("#FM_Header").css("right", $(window).width() - $(".FM_Right_Info:eq(1)")[0].offsetLeft - $(".FM_Right_Info:eq(2)").width() - 335 + "px")

                }

            }

            catch (e) { }

        }

        else {

            $("#Top").css("right", $("#FM_Right").width() + 290);

            $("#FM_Header").css("right", $("#FM_Right").width() + 110)

        }

    }

    catch (e) { }

}



if (window.localStorage.List) {

    JsonList = JSON.parse(window.localStorage.List);

    for (var i = 0; i < JsonList.length; i++) {

        $("#FM_List").prepend("<div class='FM_List_Data' data-MusicID='" + JsonList[i]["MusicID"] + "' data-AnimeID='" + JsonList[i]["id"] + "'><div class='FM_DownLoad'><span onclick=\"$(this).parent().css('left','-110%');\">×</span><a href='" + JsonList[i]["bg"] + "?attname=' target='_blank'  onclick=\"$(this).parent().css('left','-110%');\">[背景图]</a>" + (JsonList[i].A128 != 'null' ? "<a href='" + JsonList[i].A128 + "?attname=' target='_blank'  onclick=\"$(this).parent().css('left','-110%');\">128Kbps音质</a>" : "") + (JsonList[i].A320 != 'null' ? "<a href='" + JsonList[i].A320 + "?attname=' target='_blank'  onclick=\"$(this).parent().css('left','-110%');\">320Kbps音质</a>" : "") + (JsonList[i].AHigh != 'null' ? "<a href='" + JsonList[i].AHigh + "?attname=' target='_blank'  onclick=\"$(this).parent().css('left','-110%');\">无损音质</a>" : "") + "</div><div class='FM_List_Image' style='background-image: url(http://i3.hereacg.com/" + JsonList[i]["id"] + "/logo/slogo.jpg?imageView2/1/w/100/h/70);'></div><div class='FM_List_Info'><span style='font-size:16px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;display: block;' title='" + JsonList[i]["title"] + "'>" + JsonList[i]["title"] + "</span><div style='font-size:12px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;' title='" + JsonList[i]["name"].toString().substring(0, JsonList[i]["name"].toString().indexOf('<span')) + "'>" + JsonList[i]["name"].toString().substring(0, JsonList[i]["name"].toString().indexOf('<span')) + "</div><a class='Icon_DownLoad' title='下载' onclick=\"$(this).parent().parent().find('.FM_DownLoad').css('left','0px');\"></div></div>");

        $("#FM_List").jscroll({ W: "0px" });

    }

    $(".FM_List_Image").click(function () {

        GoID = $(this).parent().attr("data-MusicID");

        if (GoID == MusicID) {

            GoID = 0;

            return;

        }

        LoadMusic();

    });

}



$('#FM_List').mousewheel(function (event, delta, deltaX, deltaY) {

    if (delta == 1 && parseInt($(".FM_List_Data:eq(0)").css("margin-top").replace("px", "")) < 0) {

        $(".FM_List_Data:gt(0)").css("margin-top", "1px");

        $(".FM_List_Data:eq(0)").css("margin-top", parseInt($(".FM_List_Data:eq(0)").css("margin-top").replace("px", "")) + 77 + "px");

    }

    else if (delta == -1 && parseInt($(".FM_List_Data:eq(0)").css("margin-top").replace("px", "")) > -77 * ($(".FM_List_Data").length - 3)) {

        $(".FM_List_Data:gt(0)").css("margin-top", "1px");

        $(".FM_List_Data:eq(0)").css("margin-top", parseInt($(".FM_List_Data:eq(0)").css("margin-top").replace("px", "")) - 77 + "px");

    }

});

$('#FM_Right').mousewheel(function (event, delta, deltaX, deltaY) {

    if (delta == 1 && parseInt($("#FM_Right_List").css("margin-top").replace("px", "")) < 0) {

        //$(".FM_List_Data:gt(0)").css("margin-top", "1px");

        $("#FM_Right_List").css("margin-top", parseInt($("#FM_Right_List").css("margin-top").replace("px", "")) + 77 + "px");

    }

    else if (delta == -1 && parseInt($("#FM_Right_List").css("margin-top").replace("px", "")) > -$("#FM_Right_List").height() + $("#FM_Right").height()) {

        //$(".FM_List_Data:gt(0)").css("margin-top", "1px");

        $("#FM_Right_List").css("margin-top", parseInt($("#FM_Right_List").css("margin-top").replace("px", "")) - 77 + "px");

        $("#Top").css("display", "");

    }

    else if (delta == -1 && !IsSearch) {

        ShowRightList();

    }

    else if (delta == 1) {

        IsAllData = true;

        $("#Top").css("display", "none");

        $(".FM_Right_Info:gt(49)").remove();

        NowPage = 2;

    }

});

$('#FM_Mute').mousewheel(function (event, delta, deltaX, deltaY) {

    if (delta == 1) {

        if (Audio_.volume < 1) {

            if (Audio_.volume > 0.95) {

                Audio_.volume = 1;

            }

            else {

                Audio_.volume += 0.05;

            }

        }

    }

    else {

        if (Audio_.volume > 0) {

            if (Audio_.volume < 0.05) {

                Audio_.volume = 0;

            }

            else {

                Audio_.volume -= 0.05;

            }

        }

        Old_Volume = Audio_.volume;

        window.localStorage.Volume = Old_Volume;

    }

});

$("#Top").click(function () {

    IsAllData = false;

    $('#FM_Right_List').css('margin-top', '0px');

    if (!IsSearch) { $(".FM_Right_Info:gt(49)").remove(); }

    NowPage = 2;

    $("#Top").css("display", "none");

});

     $("#FM_Right").scroll(function(){  
         var $this =$(this),  
         viewH =$(this).height(),//可见高度  
         contentH =$(this).get(0).scrollHeight,//内容高度  
         scrollTop =$(this).scrollTop();//滚动高度  
        //if(contentH - viewH - scrollTop <= 100) { //到达底部100px时,加载新内容  
        if(scrollTop/(contentH -viewH)>=0.95){ //到达底部100px时,加载新内容  
    if (ShowRightListIs && $(".FM_Right_Loading").length > 0) return;

    ShowRightListIs = true;

    if (IsAllData && $(".FM_Right_Loading").length > 0) return;

    $("#FM_Right_List").append("<div class='FM_Right_Loading'>加载中......</div>");

    $.ajax({

        type: "GET",

        url: "/API/GetNewMusicList",

        data: { Page: NowPage, t: Math.random() },

        dataType: "json",

        success: function (data) {

            ShowRightListIs = false;

            if (data.length == 0) {

                IsAllData = true;

                $(".FM_Right_Loading").remove();

                $("#FM_Right_List").append("<div class='FM_Right_Loading'>没有更多数据了</div>");

                return;

            }

            $(data).each(function () {

                $("#FM_Right_List").append("<div class='FM_Right_Info' data-MusicID='" + this.MusicID + "'><div class='FM_Right_Info_DownLoad'><span onclick=\"$(this).parent().css('left', '-110%');\">×</span><a href='" + this.Bg + "?attname=' target='_blank' onclick=\"$(this).parent().css('left', '-110%');\">背景图</a>" + (this.A128 ? "<a href='" + this.A128 + "?attname=' target='_blank'  onclick=\"$(this).parent().css('left','-110%');\">128Kbps音质</a>" : "") + (this.A320 ? "<a href='" + this.A320 + "?attname=' target='_blank'  onclick=\"$(this).parent().css('left','-110%');\">320Kbps音质</a>" : "") + (this.WuSun ? "<a href='" + this.WuSun + "?attname=' target='_blank'  onclick=\"$(this).parent().css('left','-110%');\">无损音质</a>" : "") + "</div><div class='FM_Right_Info_Status'></div><div class='FM_Right_Info_Data'><div class='FM_Right_Name'>" + (this.Status == 0 ? "[ED] - " : this.Status == 1 ? "[OP] - " : this.Status == 2 ? "[插曲] - " : this.Status == 3 ? "[BGM] - " : this.Status == 4 ? "[角色歌] - " : this.Status == 5 ? "[单曲] - " : "[其他] - ") + this.Title + (parseInt(new Date().getTime().toString().substring(0, 10)) - this.Time < 86400 ? "<span style='color:red;margin-left:5px;font-size:12px;'>New!</span>" : "") + (this.Top == 1 ? "<span style='color:red;margin-left:5px;font-size:12px;'>Hot!</span>" : "") + "</div><div class='FM_Right_AnimeName'>" + this.AnimeName + "</div></div><div class='FM_Right_Info_DownLoadButton' onclick=\"$(this).parent().find('.FM_Right_Info_DownLoad').css('left', '0px');\"></div></div>");

            });

            $(".FM_Right_Loading").remove();

            NowPage++;

            $(".FM_Right_Info_Status").unbind();

            $(".FM_Right_Info_Status").click(function () {

                GoID = $(this).parent().attr("data-MusicID");

                LoadMusic();

            });

            $(".FM_Right_Info").unbind();

            $(".FM_Right_Info").dblclick(function () {

                GoID = $(this).attr("data-MusicID");

                LoadMusic();

            });

            $(".FM_Right_Info").each(function () {

                if ($(this).attr("data-MusicID") == MusicID) {

                    $(this).addClass("FM_Playing");

                    return;

                }

            });

        }

    });
        }  
     });									 
									 
var ShowRightListIs = false;

function ShowRightList() {

    if (ShowRightListIs && $(".FM_Right_Loading").length > 0) return;

    ShowRightListIs = true;

    if (IsAllData && $(".FM_Right_Loading").length > 0) return;

    $("#FM_Right_List").append("<div class='FM_Right_Loading'>加载中......</div>");

    $.ajax({

        type: "GET",

        url: "/API/GetNewMusicList",

        data: { Page: NowPage, t: Math.random() },

        dataType: "json",

        success: function (data) {

            ShowRightListIs = false;

            if (data.length == 0) {

                IsAllData = true;

                $(".FM_Right_Loading").remove();

                $("#FM_Right_List").append("<div class='FM_Right_Loading'>没有更多数据了</div>");

                return;

            }

            $(data).each(function () {

                $("#FM_Right_List").append("<div class='FM_Right_Info' data-MusicID='" + this.MusicID + "'><div class='FM_Right_Info_DownLoad'><span onclick=\"$(this).parent().css('left', '-110%');\">×</span><a href='" + this.Bg + "?attname=' target='_blank' onclick=\"$(this).parent().css('left', '-110%');\">背景图</a>" + (this.A128 ? "<a href='" + this.A128 + "?attname=' target='_blank'  onclick=\"$(this).parent().css('left','-110%');\">128Kbps音质</a>" : "") + (this.A320 ? "<a href='" + this.A320 + "?attname=' target='_blank'  onclick=\"$(this).parent().css('left','-110%');\">320Kbps音质</a>" : "") + (this.WuSun ? "<a href='" + this.WuSun + "?attname=' target='_blank'  onclick=\"$(this).parent().css('left','-110%');\">无损音质</a>" : "") + "</div><div class='FM_Right_Info_Status'></div><div class='FM_Right_Info_Data'><div class='FM_Right_Name'>" + (this.Status == 0 ? "[ED] - " : this.Status == 1 ? "[OP] - " : this.Status == 2 ? "[插曲] - " : this.Status == 3 ? "[BGM] - " : this.Status == 4 ? "[角色歌] - " : this.Status == 5 ? "[单曲] - " : "[其他] - ") + this.Title + (parseInt(new Date().getTime().toString().substring(0, 10)) - this.Time < 86400 ? "<span style='color:red;margin-left:5px;font-size:12px;'>New!</span>" : "") + (this.Top == 1 ? "<span style='color:red;margin-left:5px;font-size:12px;'>Hot!</span>" : "") + "</div><div class='FM_Right_AnimeName'>" + this.AnimeName + "</div></div><div class='FM_Right_Info_DownLoadButton' onclick=\"$(this).parent().find('.FM_Right_Info_DownLoad').css('left', '0px');\"></div></div>");

            });

            $(".FM_Right_Loading").remove();

            NowPage++;

            $(".FM_Right_Info_Status").unbind();

            $(".FM_Right_Info_Status").click(function () {

                GoID = $(this).parent().attr("data-MusicID");

                LoadMusic();

            });

            $(".FM_Right_Info").unbind();

            $(".FM_Right_Info").dblclick(function () {

                GoID = $(this).attr("data-MusicID");

                LoadMusic();

            });

            $(".FM_Right_Info").each(function () {

                if ($(this).attr("data-MusicID") == MusicID) {

                    $(this).addClass("FM_Playing");

                    return;

                }

            });

        }

    });

}

ShowRightList();



var Time = 0;

setInterval(function () {

    Time++;

    if (!IsSearch && Time >= 60 && parseInt($("#FM_Right_List").css("margin-top").replace('px', '')) > -200) {

        NowPage = 1;

        Time = 0;

        if (ShowRightListIs) return;

        ShowRightListIs = true;

        if (IsAllData) return;

        $("#FM_Right_List").append("<div class='FM_Right_Loading'>加载中......</div>");

        $.ajax({

            type: "GET",

            url: "/API/GetNewMusicList",

            data: { Page: NowPage, t: Math.random() },

            dataType: "json",

            success: function (data) {

                $("#FM_Right_List").css("margin-top", "0px");

                $("#FM_Right_List").html("<img id='Top' src='/images/iconfont-feiji.png' alt='回到顶部' title='回到顶部'>");

                $("#Top").click(function () {

                    IsAllData = false;

                    $('#FM_Right_List').css('margin-top', '0px');

                    if (!IsSearch) { $(".FM_Right_Info:gt(49)").remove(); }

                    NowPage = 2;

                    $("#Top").css("display", "none");

                });

                ShowRightListIs = false;

                if (data.length == 0) {

                    IsAllData = true;

                    $(".FM_Right_Loading").remove();

                    $("#FM_Right_List").append("<div class='FM_Right_Loading'>没有更多数据了</div>");

                    return;

                }

                $(data).each(function () {

                    $("#FM_Right_List").append("<div class='FM_Right_Info' data-MusicID='" + this.MusicID + "'><div class='FM_Right_Info_DownLoad'><span onclick=\"$(this).parent().css('left', '-110%');\">×</span><a href='" + this.Bg + "?attname=' target='_blank' onclick=\"$(this).parent().css('left', '-110%');\">背景图</a>" + (this.A128 ? "<a href='" + this.A128 + "?attname=' target='_blank'  onclick=\"$(this).parent().css('left','-110%');\">128Kbps音质</a>" : "") + (this.A320 ? "<a href='" + this.A320 + "?attname=' target='_blank'  onclick=\"$(this).parent().css('left','-110%');\">320Kbps音质</a>" : "") + (this.WuSun ? "<a href='" + this.WuSun + "?attname=' target='_blank'  onclick=\"$(this).parent().css('left','-110%');\">无损音质</a>" : "") + "</div><div class='FM_Right_Info_Status'></div><div class='FM_Right_Info_Data'><div class='FM_Right_Name'>" + (this.Status == 0 ? "[ED] - " : this.Status == 1 ? "[OP] - " : this.Status == 2 ? "[插曲] - " : this.Status == 3 ? "[BGM] - " : this.Status == 4 ? "[角色歌] - " : this.Status == 5 ? "[单曲] - " : "[其他] - ") + this.Title + (parseInt(new Date().getTime().toString().substring(0, 10)) - this.Time < 86400 ? "<span style='color:red;margin-left:5px;font-size:12px;'>New!</span>" : "") + (this.Top == 1 ? "<span style='color:red;margin-left:5px;font-size:12px;'>Hot!</span>" : "") + "</div><div class='FM_Right_AnimeName'>" + this.AnimeName + "</div></div><div class='FM_Right_Info_DownLoadButton' onclick=\"$(this).parent().find('.FM_Right_Info_DownLoad').css('left', '0px');\"></div></div>");

                });

                $(".FM_Right_Loading").remove();

                NowPage++;

                $(".FM_Right_Info_Status").unbind();

                $(".FM_Right_Info_Status").click(function () {

                    GoID = $(this).parent().attr("data-MusicID");

                    LoadMusic();

                });

                $(".FM_Right_Info").unbind();

                $(".FM_Right_Info").dblclick(function () {

                    GoID = $(this).attr("data-MusicID");

                    LoadMusic();

                });

                $(".FM_Right_Info").each(function () {

                    if ($(this).attr("data-MusicID") == MusicID) {

                        $(this).addClass("FM_Playing");

                        return;

                    }

                });



            }

        });

    }

}, 1000);



function moveBox() {

    if (window.event.keyCode == 32) {

        PlayOrPause();

    }

}



function Go(e) {

    try {

        if (Audio_.paused) {

            $("#Button_Play").removeClass("Icon_Play").addClass("Icon_Pause");

            Audio_.play();

            //clearInterval(Temp_Set);

            //Temp_Set = setInterval(function () { try { Audio_.volume = Audio_.volume + 0.1; if (Audio_.volume == 1) clearInterval(Temp_Set); } catch (e) { Audio_.volume = 1; clearInterval(Temp_Set); } }, 50);

        }

        var faterLfet = document.getElementById("FM_Left").offsetLeft;

        var i = mousePos(e).x;

        Audio_.buffered.start = (i - faterLfet) / 335 * Audio_.duration;

        Audio_.currentTime = (i - faterLfet) / 335 * Audio_.duration;

    }

    catch (e) { }

}

function mousePos(e) {

    try {

        var x;

        var e = e || window.event;

        return {

            x: e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft

        };

    }

    catch (e) { alert("11" + e); }

};



var IsSearch = false;



var SearchTime = 0;

var SearchGo = false;

var SearchGo_;

function Search() {

    if (SearchGo) {

        if (SearchTime <= 3) {

            SearchTime++;

            clearInterval(SearchGo_);

            SearchGo_ = setInterval("Search()", 100);

        }

        else {

            $("#FM_Right_List").css("right", "0px");

            $("#FM_Button>img").attr("src", "/images/iconfont-zuosuojin.png");

            SearchTime = 0;

            SearchGo = false;

            IsSearch = true;

            $("#FM_Right_List").append("<div class='FM_Right_Loading'>搜索中...</div>");

            $.ajax({

                type: "POST",

                url: "/API/Search",

                data: { Data: $("#FM_Serach>input:eq(0)").val(), t: Math.random() },

                dataType: "json",

                success: function (data) {

                    $("#FM_Right_List").css("margin-top", "0px");

                    $("#FM_Right_List").html("<img id='Top' src='/images/iconfont-feiji.png' alt='回到顶部' title='回到顶部'>");

                    $("#Top").click(function () {

                        IsAllData = false;

                        $('#FM_Right_List').css('margin-top', '0px');

                        if (!IsSearch) { $(".FM_Right_Info:gt(49)").remove(); }

                        NowPage = 2;

                        $("#Top").css("display", "none");

                    });

                    ShowRightListIs = false;

                    if (data.length == 0) {

                        $(".FM_Right_Loading").remove();

                        $("#FM_Right_List").append("<div class='FM_Right_Loading'>没有结果...<span onclick=\"ExitSearch();\" style='cursor: pointer;'>点击取消搜索</span></div>");

                        return;

                    }

                    $(data).each(function () {

                        $("#FM_Right_List").append("<div class='FM_Right_Info' data-MusicID='" + this.MusicID + "'><div class='FM_Right_Info_DownLoad'><span onclick=\"$(this).parent().css('left', '-110%');\">×</span><a href='" + this.Bg + "?attname=' target='_blank' onclick=\"$(this).parent().css('left', '-110%');\">背景图</a>" + (this.A128 ? "<a href='" + this.A128 + "?attname=' target='_blank'  onclick=\"$(this).parent().css('left','-110%');\">128Kbps音质</a>" : "") + (this.A320 ? "<a href='" + this.A320 + "?attname=' target='_blank'  onclick=\"$(this).parent().css('left','-110%');\">320Kbps音质</a>" : "") + (this.WuSun ? "<a href='" + this.WuSun + "?attname=' target='_blank'  onclick=\"$(this).parent().css('left','-110%');\">无损音质</a>" : "") + "</div><div class='FM_Right_Info_Status'></div><div class='FM_Right_Info_Data'><div class='FM_Right_Name'>" + (this.Status == 0 ? "[ED] - " : this.Status == 1 ? "[OP] - " : this.Status == 2 ? "[插曲] - " : this.Status == 3 ? "[BGM] - " : this.Status == 4 ? "[角色歌] - " : this.Status == 5 ? "[单曲] - " : "[其他] - ") + this.Title + (parseInt(new Date().getTime().toString().substring(0, 10)) - this.Time < 86400 ? "<span style='color:red;margin-left:5px;font-size:12px;'>New!</span>" : "") + (this.Top == 1 ? "<span style='color:red;margin-left:5px;font-size:12px;'>Hot!</span>" : "") + "</div><div class='FM_Right_AnimeName'>" + this.AnimeName + "</div></div><div class='FM_Right_Info_DownLoadButton' onclick=\"$(this).parent().find('.FM_Right_Info_DownLoad').css('left', '0px');\"></div></div>");

                    });

                    $(".FM_Right_Loading").remove();

                    $("#FM_Right_List").append("<div class='FM_Right_Loading'>没有更多数据了,<span onclick=\"ExitSearch();\" style='cursor: pointer;'>点击取消搜索</span></div>");

                    NowPage++;

                    $(".FM_Right_Info_Status").unbind();

                    $(".FM_Right_Info_Status").click(function () {

                        GoID = $(this).parent().attr("data-MusicID");

                        LoadMusic();

                    });

                    $(".FM_Right_Info").unbind();

                    $(".FM_Right_Info").dblclick(function () {

                        GoID = $(this).attr("data-MusicID");

                        LoadMusic();

                    });

                    $(".FM_Right_Info").each(function () {

                        if ($(this).attr("data-MusicID") == MusicID) {

                            $(this).addClass("FM_Playing");

                            return;

                        }

                    });



                }

            });

        }

    }

    else {

        clearInterval(SearchGo_);

    }

}



function SearchTo() {

    if ($('#FM_Serach>input').val() == "") {

        ExitSearch();

    } else {

        $("#FM_Serach>span").css("display", "inherit");

        SearchTime = 0;

        SearchGo = true;

        Search();

    }

}

function ExitSearch() {

    if ($('#FM_Serach>input').val() != "") { $('#FM_Serach>input').val("") };

    $("#FM_Serach>span").css("display", "none");

    IsSearch = false;

    Time = 0;

    SearchGo = false;

    SearchTime = 0;

    clearInterval(SearchGo_);

    $("#FM_Right_List").html("<img id='Top' src='/images/iconfont-feiji.png' alt='回到顶部' title='回到顶部'>");

    $("#FM_Right_List").append("<div class='FM_Right_Loading'>加载中......</div>");

    $.ajax({

        type: "GET",

        url: "/API/GetNewMusicList",

        data: { Page: 1, t: Math.random() },

        dataType: "json",

        success: function (data) {

            ShowRightListIs = false;

            if (data.length == 0) {

                IsAllData = true;

                $(".FM_Right_Loading").remove();

                $("#FM_Right_List").append("<div class='FM_Right_Loading'>没有更多数据了</div>");

                return;

            }

            $(data).each(function () {

                $("#FM_Right_List").append("<div class='FM_Right_Info' data-MusicID='" + this.MusicID + "'><div class='FM_Right_Info_DownLoad'><span onclick=\"$(this).parent().css('left', '-110%');\">×</span><a href='" + this.Bg + "?attname=' target='_blank' onclick=\"$(this).parent().css('left', '-110%');\">背景图</a>" + (this.A128 ? "<a href='" + this.A128 + "?attname=' target='_blank'  onclick=\"$(this).parent().css('left','-110%');\">128Kbps音质</a>" : "") + (this.A320 ? "<a href='" + this.A320 + "?attname=' target='_blank'  onclick=\"$(this).parent().css('left','-110%');\">320Kbps音质</a>" : "") + (this.WuSun ? "<a href='" + this.WuSun + "?attname=' target='_blank'  onclick=\"$(this).parent().css('left','-110%');\">无损音质</a>" : "") + "</div><div class='FM_Right_Info_Status'></div><div class='FM_Right_Info_Data'><div class='FM_Right_Name'>" + (this.Status == 0 ? "[ED] - " : this.Status == 1 ? "[OP] - " : this.Status == 2 ? "[插曲] - " : this.Status == 3 ? "[BGM] - " : this.Status == 4 ? "[角色歌] - " : this.Status == 5 ? "[单曲] - " : "[其他] - ") + this.Title + (parseInt(new Date().getTime().toString().substring(0, 10)) - this.Time < 86400 ? "<span style='color:red;margin-left:5px;font-size:12px;'>New!</span>" : "") + (this.Top == 1 ? "<span style='color:red;margin-left:5px;font-size:12px;'>Hot!</span>" : "") + "</div><div class='FM_Right_AnimeName'>" + this.AnimeName + "</div></div><div class='FM_Right_Info_DownLoadButton' onclick=\"$(this).parent().find('.FM_Right_Info_DownLoad').css('left', '0px');\"></div></div>");

            });

            $(".FM_Right_Loading").remove();

            NowPage = 2;

            $(".FM_Right_Info_Status").unbind();

            $(".FM_Right_Info_Status").click(function () {

                GoID = $(this).parent().attr("data-MusicID");

                LoadMusic();

            });

            $(".FM_Right_Info").unbind();

            $(".FM_Right_Info").dblclick(function () {

                GoID = $(this).attr("data-MusicID");

                LoadMusic();

            });

            $(".FM_Right_Info").each(function () {

                if ($(this).attr("data-MusicID") == MusicID) {

                    $(this).addClass("FM_Playing");

                    return;

                }

            });



        }

    });

    IsAllData = false;

}



(function($){

    $.fn.extend({

	    Scroll:function(opt,callback){

	    	if(!opt) var opt={};

	    	var oo;

	    	var _this=this.eq(0).find("ul:first");

	    	var lineH=_this.find("li:first").height(),//23

	    	line = opt.line?parseInt(opt.line,10):parseInt(this.height()/lineH,10),

	    	speed=opt.speed?parseInt(opt.speed,10):7000, //卷动速度，数值越大，速度越慢（毫秒）

	    	timer=opt.timer?parseInt(opt.timer,10):7000; //滚动的时间间隔（毫秒）

	    	if(line==0) line=1;

	    	var upHeight = 0-line*lineH;//-总高度

		    scrollUp=function(){

			    _this.animate({

			    marginTop:upHeight // <li>的margin-top

			    },speed,function(){

				    for(i=1;i<=line;i++){

				    _this.find("li:first").appendTo(_this);

				    }

			    	_this.css({marginTop:0});

			    	}

			    );

		    };

		    var timerID = function(){

		    	oo =setInterval("scrollUp()",timer);

		    };

		   	timerID();

	    _this.hover(function(){

		    clearInterval(oo);

		    },function(){

				timerID();

		    }).mouseout(function(){

		    	//$('body').css({'background-color':'#aecdef'});

		    });

	    }

    });

})(jQuery);