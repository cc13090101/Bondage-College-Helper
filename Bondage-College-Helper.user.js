// ==UserScript==
// @icon         https://www.bondageprojects.com/images/player_icon.png
// @name         Bondage_College_Helper
// @namespace    https://github.com/cc13090101/Bondage-College-Helper
// @version      0.0.20191207
// @description  Bondage College 作弊辅助（试用）。
// @author       木木祭曦
// @grant        none
// @homepageURL  https://github.com/cc13090101/Bondage-College-Helper
// @downloadURL  https://github.com/cc13090101/Bondage-College-Helper/raw/master/Bondage-College-Helper.user.js
// ==/UserScript==

/*
 // 如果您是直接通过拖动Bondage_College_Helper.user.js安装的插件，请忽略。
 // 如果您使用的油猴脚本编辑模式，请将下面一行仿照上方格式，复制到上面的 // ==UserScript== 标签内，以便启动辅助。
 // @match        http*://www.bondageprojects.com/*
 */

(function() {
    'use strict';
    // Your code here...

    //起始按钮(初始化界面)
    var Common_view_Bodage_div
    var Common_btn_Bodage_div
    var Common_btn_Bodage_div_p
    try{
        //主界面（初次加载时隐藏且空白无内容）
        Common_view_Bodage_div_Add();
        //起始按钮文字说明
        Common_btn_Bodage_div_p_Add();
        //起始按钮
        Common_btn_Bodage_div_Add();
        console.log("作弊辅助启动成功！");
        //正式启动（进入不同页面）
        Start();
    }catch(err){
        console.error('作弊辅助启动失败！错误信息：' + err);
    }

    //添加主界面
    function Common_view_Bodage_div_Add(){
        Common_view_Bodage_div = document.createElement("div");
        Common_view_Bodage_div.id = "Common_view_Bodage_div";
        Common_view_Bodage_div.style = "border:2px solid #808080; width:525px; height:700px; z-index: 9999; position: fixed ! important; right: 52px; bottom: 50px; background-color:white";
        Common_view_Bodage_div.style.display = "none";
        document.getElementsByTagName("body")[0].appendChild(Common_view_Bodage_div);
    }

    //添加起始按钮文字说明
    function Common_btn_Bodage_div_p_Add(){
        Common_btn_Bodage_div_p = document.createElement("p");
        Common_btn_Bodage_div_p.id = "Common_btn_Bodage_div_p";
        Common_btn_Bodage_div_p.style = "font-family:verdana;font-size:10px;color:black;user-select:none";
        Common_btn_Bodage_div_p.innerHTML = "作弊辅助(试用版)";
    }

    //添加起始按钮
    function Common_btn_Bodage_div_Add(){
        Common_btn_Bodage_div = document.createElement("div");
        Common_btn_Bodage_div.style = "border:2px solid #808080; width:50px; height:50px; z-index: 9999; position: fixed ! important; right: 0px; bottom: 50px; background-color:white";
        Common_btn_Bodage_div.id = "Common_btn_Bodage_div";
        Common_btn_Bodage_div.appendChild(Common_btn_Bodage_div_p);
        Common_btn_Bodage_div.style.display = "none";
        document.getElementsByTagName("body")[0].appendChild(Common_btn_Bodage_div);
    }


    //起始按钮点击事件
    function Common_btn_Bodage_div_onclick(){
        if(Common_view_Bodage_div.style.display == "none"){
            Common_view_Bodage_div.style.display = "inline";
            Common_btn_Bodage_div_p.innerHTML = "点击收起";
        }else{
            Common_view_Bodage_div.style.display = "none";
            Common_btn_Bodage_div_p.innerHTML = "作弊辅助(试用版)";
        }
    }

    //进入不同的游戏页面判断
    var LocationUrl = "";
    var CollegeUrl = "";
    var ClubUrl = "";
    function Start(){
        LocationUrl = document.location.href.toString();
        CollegeUrl = "college";
        ClubUrl = "BondageClub";
        var reg = /^http?\:\/\/www\.bondageprojects\.com\/*$/;
        if(LocationUrl.indexOf(ClubUrl) != -1){
            Common_btn_Bodage_div.style.display = "inline";
            ClubStart();
        }else if(LocationUrl.indexOf(CollegeUrl) != -1){
            Common_btn_Bodage_div.style.display = "inline";
            CollegeStart();
        }else{
            console.error('没有匹配到当前游戏页面！');
        }
    }

    ///------------------------------------------------------------------------------College功能开始------------------------------------------------------------------------------///
    function CollegeStart(){
        //加载起始按钮功能
        Common_btn_Bodage_div.onclick = Common_btn_Bodage_div_onclick;
        console.log("这是College页面。暂时没有制作相关作弊功能。");
        alert("这是College页面。暂时没有制作相关作弊功能。");
        //移除起始按钮功能
        Common_btn_Bodage_div.onclick = null;
    }
    ///------------------------------------------------------------------------------College功能结束------------------------------------------------------------------------------///

    ///------------------------------------------------------------------------------Club功能开始------------------------------------------------------------------------------///
    var Club_text_ChangeMoney_input
    var Club_text_ChangeMoney_input_value = "";
    var Club_btn_ChangeMoney_input;
    function ClubStart(){
        //加载起始按钮功能
        Common_btn_Bodage_div.onclick = Common_btn_Bodage_div_onclick;
        console.log("这是Club页面。");
        ///-----------------------第01行开始-----------------------///
        //金钱输入框
        Club_text_ChangeMoney_input_Add();
        //修改金钱按钮
        Club_btn_ChangeMoney_input_Add();
        //不可见的input(text)标签1
        Club_text_InVisible_input_Add(1,225,25,10);
        ///-----------------------第01行结束----------------------///
        ///-----------------------第02行开始-----------------------///
        //属性值输入框
        //Club_text_ChangeMoney_input_Add();
        //修改

        ///-----------------------第02行结束----------------------///

    }

    //添加修改金钱输入框
    function Club_text_ChangeMoney_input_Add(){
        Club_text_ChangeMoney_input = document.createElement("input");
        Club_text_ChangeMoney_input.id = "Common_text_Bondage_input";
        Club_text_ChangeMoney_input.type = "text";
        Club_text_ChangeMoney_input.style = "width:100px;margin-left:25px;margin-top:10px";
        Club_text_ChangeMoney_input.placeholder = "请输入金钱数";
        Common_view_Bodage_div.appendChild(Club_text_ChangeMoney_input);
    }

    //添加修改金钱按钮
    function Club_btn_ChangeMoney_input_Add(){
        Club_btn_ChangeMoney_input = document.createElement("input");
        Club_btn_ChangeMoney_input.id = "Club_btn_ChangeMoney_input";
        Club_btn_ChangeMoney_input.type = "button";
        Club_btn_ChangeMoney_input.style = "width:100px;margin-left:25px;margin-top:10px";
        Club_btn_ChangeMoney_input.value = "修改金钱";
        Club_btn_ChangeMoney_input.onclick = Club_btn_ChangeMoney_input_onclick;
        Common_view_Bodage_div.appendChild(Club_btn_ChangeMoney_input);
    }

    //修改金钱按钮点击事件
    function Club_btn_ChangeMoney_input_onclick(){
        ClubLoadCheck();
        var reg = /^-?\d*$/;
        Club_text_ChangeMoney_input_value = Club_text_ChangeMoney_input.value;
        if(reg.test(Club_text_ChangeMoney_input_value) && Club_text_ChangeMoney_input_value != ""){
            Player.Money = Number(Club_text_ChangeMoney_input_value);
            ServerPlayerSync();
        } else{
            alert("金钱数目必须为数字！");
        }
        Club_text_ChangeMoney_input_value = "";
    }

    //添加看不见的input(text)标签占位置
    function Club_text_InVisible_input_Add(soft,width,left,top){
        var Club_text_InVisible_input = document.createElement("input");
        Club_text_InVisible_input.id = "Club_text_InVisible_input_" + soft;
        Club_text_InVisible_input.type = "text";
        var Club_text_InVisible_input_style_model="visibility:hidden;width:" + width + "px;margin-left:" + left + "px;margin-top:" + top + "px";
        Club_text_InVisible_input.style = Club_text_InVisible_input_style_model;
        Club_text_InVisible_input.placeholder = "不可见的input(text)标签" + soft;
        Common_view_Bodage_div.appendChild(Club_text_InVisible_input);
    }

    //检查是否可以修改数据
    function ClubLoadCheck(){
        if(typeof Player != "undefined" && Player.Name != null && Player.Name != ""){
            console.log("登录成功，已获取玩家数据。");
        }else{
            console.log("没有获取到玩家数据，请刷新重新登录。");
            alert("没有获取到玩家数据，请刷新重新登录。");
            return;
        }
    }
    ///------------------------------------------------------------------------------Club功能结束------------------------------------------------------------------------------///
})();