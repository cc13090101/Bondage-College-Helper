// ==UserScript==
// @icon         https://www.bondageprojects.com/images/player_icon.png
// @name         Bondage_College_Helper
// @namespace    https://github.com/cc13090101/Bondage-College-Helper
// @version      0.0.20210530
// @description  Bondage College 作弊辅助（试用）。
// @author       木木祭曦
// @grant        none
// @homepageURL  https://github.com/cc13090101/Bondage-College-Helper
// @downloadURL  https://github.com/cc13090101/Bondage-College-Helper/raw/master/Bondage-College-Helper.user.js
// @match        http*://www.bondageprojects.elementfx.com/*
// @match        http*://www.bondageprojects.com/*
// ==/UserScript==

/*
 // 如果您是直接通过拖动Bondage_College_Helper.user.js安装的插件，请忽略。
 // 如果您使用的油猴脚本编辑模式，请将下面两行仿照上方格式，复制到上面的 // ==UserScript== 标签内，以便启动辅助。
 // @match        http*://www.bondageprojects.elementfx.com/*
 // @match        http*://www.bondageprojects.com/*
 */

(function() {
	'use strict';
	// Your code here...

	//起始按钮(初始化界面)
	var Common_view_Bodage_div;
	var Common_btn_Bodage_div;
	var Common_btn_Bodage_div_p;
	try {
		//主界面（初次加载时隐藏且空白无内容）
		Common_view_Bodage_div_Add();
		//起始按钮文字说明
		Common_btn_Bodage_div_p_Add();
		//起始按钮
		Common_btn_Bodage_div_Add();
		console.log("作弊辅助启动成功！");
		//正式启动（进入不同页面）
		Start();
	} catch (err) {
		console.error('作弊辅助启动失败！错误信息：' + err);
	}

	//添加主界面
	function Common_view_Bodage_div_Add() {
		Common_view_Bodage_div = document.createElement("div");
		Common_view_Bodage_div.id = "Common_view_Bodage_div";
		Common_view_Bodage_div.style =
			"border:2px solid #808080; width:550px; height:700px; z-index: 9999; position: fixed ! important; right: 52px; bottom: 50px; background-color:white";
		Common_view_Bodage_div.style.display = "none";
		document.getElementsByTagName("body")[0].appendChild(Common_view_Bodage_div);
	}

	//添加起始按钮文字说明
	function Common_btn_Bodage_div_p_Add() {
		Common_btn_Bodage_div_p = document.createElement("p");
		Common_btn_Bodage_div_p.id = "Common_btn_Bodage_div_p";
		Common_btn_Bodage_div_p.style = "font-family:verdana;font-size:10px;color:black;user-select:none";
		Common_btn_Bodage_div_p.innerHTML = "作弊辅助(试用版)";
	}

	//添加起始按钮
	function Common_btn_Bodage_div_Add() {
		Common_btn_Bodage_div = document.createElement("div");
		Common_btn_Bodage_div.style =
			"border:2px solid #808080; width:50px; height:50px; z-index: 9999; position: fixed ! important; right: 0px; bottom: 50px; background-color:white";
		Common_btn_Bodage_div.id = "Common_btn_Bodage_div";
		Common_btn_Bodage_div.appendChild(Common_btn_Bodage_div_p);
		Common_btn_Bodage_div.style.display = "none";
		document.getElementsByTagName("body")[0].appendChild(Common_btn_Bodage_div);
	}


	//起始按钮点击事件
	function Common_btn_Bodage_div_onclick() {
		if (Common_view_Bodage_div.style.display == "none") {
			Common_view_Bodage_div.style.display = "inline";
			Common_btn_Bodage_div_p.innerHTML = "点击收起";
		} else {
			Common_view_Bodage_div.style.display = "none";
			Common_btn_Bodage_div_p.innerHTML = "作弊辅助(试用版)";
		}
	}

	//进入不同的游戏页面判断
	var LocationUrl = "";
	var CollegeUrl = "";
	var ClubUrl = "";

	function Start() {
		LocationUrl = document.location.href.toString();
		CollegeUrl = "/V13Q/";
		ClubUrl = "/BondageClub/";
		if (LocationUrl.indexOf(ClubUrl) != -1) {
			Common_btn_Bodage_div.style.display = "inline";
			ClubStart();
		} else if (LocationUrl.indexOf(CollegeUrl) != -1) {
			Common_btn_Bodage_div.style.display = "inline";
			CollegeStart();
		} else {
			console.error('没有匹配到当前游戏页面！');
		}
	}

	///------------------------------------------------------------------------------College功能开始------------------------------------------------------------------------------///
	function CollegeStart() {
		//加载起始按钮功能
		Common_btn_Bodage_div.onclick = Common_btn_Bodage_div_onclick;
		console.log("这是College页面。暂时没有制作相关作弊功能。");
		alert("这是College页面。暂时没有制作相关作弊功能。");
		//移除起始按钮功能
		Common_btn_Bodage_div.onclick = null;
	}
	///------------------------------------------------------------------------------College功能结束------------------------------------------------------------------------------///

	///------------------------------------------------------------------------------Club功能开始------------------------------------------------------------------------------///
	//
	var Club_text_ChangeMoney_input;
	var Club_text_ChangeMoney_input_value = "";
	var Club_btn_ChangeMoney_input;
	//
	var Club_text_ChangeReputation_input;
	var Club_text_ChangeReputation_input_value = "";
	var Club_btn_ChangeReputationRepair_input;
	//
	var Club_text_ChangeSkill_input;
	var Club_text_ChangeSkill_input_value = "";
	var Club_btn_ChangeSkillRepair_input;
	//
	function ClubStart() {
		//加载起始按钮功能
		Common_btn_Bodage_div.onclick = Common_btn_Bodage_div_onclick;
		console.log("这是Club页面。");
		setTimeout(function() {
			///-----------------------------ServerPlayerSync()开始-----------------------------///
			//Money输入框
			Club_text_ChangeMoney_input_Add();
			//修改Money按钮
			Club_btn_ChangeMoney_input_Add();
			//不可见的input(text)标签1
			Club_text_InVisible_input_Add(1, 150, 25, 10);
			///-----------------------------ServerPlayerSync()结束----------------------------///
			//直线(div)标签1，分割不同区域
			Club_line_div_Add(1, 550, 2, 0, 10, "red");
			///------------------------ServerPlayerInventorySync()开始------------------------///

			///------------------------ServerPlayerInventorySync()结束------------------------///
			///---------------------------ServerPlayerLogSync()开始---------------------------///

			///---------------------------ServerPlayerLogSync()结束---------------------------///
			///-----------------------ServerPlayerReputationSync()开始-----------------------///
			//Reputation输入框
			Club_text_Reputation_input_Add();
			//恢复异常Reputation按钮
			Club_btn_ChangeReputationRepair_input_Add();
			//不可见的input(text)标签2
			Club_text_InVisible_input_Add(2, 150, 25, 10);
			//修改Reputation按钮
			Club_btn_ChangeReputation_input_Add();
			///-----------------------ServerPlayerReputationSync()结束----------------------///
			//直线(div)标签2，分割不同区域
			Club_line_div_Add(2, 550, 2, 0, 10, "red");
			///---------------------------ServerPlayerSkillSync()开始---------------------------///
			//Reputation输入框
			Club_text_Skill_input_Add();
			//恢复异常Reputation按钮
			Club_btn_ChangeSkillRepair_input_Add();
			//不可见的input(text)标签3
			Club_text_InVisible_input_Add(3, 150, 25, 10);
			//修改Reputation按钮
			Club_btn_ChangeSkill_input_Add();
			///---------------------------ServerPlayerSkillSync()结束---------------------------///
			//直线(div)标签3，分割不同区域
			Club_line_div_Add(3, 550, 2, 0, 10, "red");
		}, 1000);
	}

	//添加修改Money输入框
	function Club_text_ChangeMoney_input_Add() {
		Club_text_ChangeMoney_input = document.createElement("input");
		Club_text_ChangeMoney_input.id = "Common_text_Bondage_input";
		Club_text_ChangeMoney_input.type = "text";
		Club_text_ChangeMoney_input.style = "width:142px;margin-left:25px;margin-top:10px";
		Club_text_ChangeMoney_input.placeholder = "请输入Money数值";
		Common_view_Bodage_div.appendChild(Club_text_ChangeMoney_input);
	}

	//添加修改Money按钮
	function Club_btn_ChangeMoney_input_Add() {
		Club_btn_ChangeMoney_input = document.createElement("input");
		Club_btn_ChangeMoney_input.id = "Club_btn_ChangeMoney_input";
		Club_btn_ChangeMoney_input.type = "button";
		Club_btn_ChangeMoney_input.style = "width:150px;margin-left:25px;margin-top:10px";
		Club_btn_ChangeMoney_input.value = "修改Money";
		Club_btn_ChangeMoney_input.onclick = Club_btn_ChangeMoney_input_onclick;
		Common_view_Bodage_div.appendChild(Club_btn_ChangeMoney_input);
	}

	//修改Money按钮点击事件
	function Club_btn_ChangeMoney_input_onclick() {
		ClubLoadCheck();
		var reg = /^-?\d*$/;
		Club_text_ChangeMoney_input_value = Club_text_ChangeMoney_input.value;
		if (reg.test(Club_text_ChangeMoney_input_value) && Club_text_ChangeMoney_input_value != "") {
			Player.Money = Number(Club_text_ChangeMoney_input_value);
			ServerPlayerSync();
		} else {
			alert("Money数目必须为整数！");
		}
		Club_text_ChangeMoney_input_value = "";
	}

	//添加Reputation输入框
	function Club_text_Reputation_input_Add() {
		Club_text_ChangeReputation_input = document.createElement("input");
		Club_text_ChangeReputation_input.id = "Club_text_ChangeReputation_input";
		Club_text_ChangeReputation_input.type = "text";
		Club_text_ChangeReputation_input.style = "width:142px;margin-left:25px;margin-top:10px";
		Club_text_ChangeReputation_input.placeholder = "请输入Reputation数值";
		Common_view_Bodage_div.appendChild(Club_text_ChangeReputation_input);
	}

	//添加修改Reputation按钮（循环）
	function Club_btn_ChangeReputation_input_Add() {
		for (var R = 0; R < ReputationValidReputations.length; R++) {
			Club_btn_ChangeReputationSingle_input_Add(ReputationValidReputations[R]);
		}
	}

	//添加修改Reputation按钮（单个）
	function Club_btn_ChangeReputationSingle_input_Add(ReputationName) {
		var Club_btn_ChangeReputation_input = document.createElement("input");
		Club_btn_ChangeReputation_input.id = "Club_btn_ChangeReputation_input_" + ReputationName;
		Club_btn_ChangeReputation_input.type = "button";
		Club_btn_ChangeReputation_input.style = "width:150px;margin-left:25px;margin-top:10px";
		Club_btn_ChangeReputation_input.value = "修改" + ReputationName;
		Club_btn_ChangeReputation_input.onclick = Club_btn_ChangeReputationSingle_input_Add_onclick;
		Common_view_Bodage_div.appendChild(Club_btn_ChangeReputation_input);
	}

	//修改Reputation按钮（单个）点击事件
	function Club_btn_ChangeReputationSingle_input_Add_onclick() {
		ClubLoadCheck();
		var reg = /^-?\d*$/;
		var ReputationName = this.value.replace("修改", "");
		Club_text_ChangeReputation_input_value = Club_text_ChangeReputation_input.value;
		if (reg.test(Club_text_ChangeReputation_input_value) && Club_text_ChangeReputation_input_value != "") {
			var ClubtextChangeReputationinputvalue = Number(Club_text_ChangeReputation_input_value);
			if (ClubtextChangeReputationinputvalue >= -100 && ClubtextChangeReputationinputvalue <= 100) {
				DialogSetReputation(ReputationName, ClubtextChangeReputationinputvalue);
				ServerPlayerReputationSync();
			} else {
				alert("Reputation数目必须在-100到100之间！");
			}
		} else {
			alert("Reputation数目必须为整数！");
		}
		Club_text_ChangeReputation_input_value = "";
	}

	//添加恢复异常Reputation按钮
	function Club_btn_ChangeReputationRepair_input_Add() {
		Club_btn_ChangeReputationRepair_input = document.createElement("input");
		Club_btn_ChangeReputationRepair_input.id = "Club_btn_ChangeReputationRepair_input";
		Club_btn_ChangeReputationRepair_input.type = "button";
		Club_btn_ChangeReputationRepair_input.style = "width:150px;margin-left:25px;margin-top:10px";
		Club_btn_ChangeReputationRepair_input.value = "修复异常Reputation";
		Club_btn_ChangeReputationRepair_input.onclick = Club_btn_ChangeReputationRepair_input_onclick;
		Common_view_Bodage_div.appendChild(Club_btn_ChangeReputationRepair_input);
	}

	//恢复异常Reputation按钮点击事件
	function Club_btn_ChangeReputationRepair_input_onclick() {
		ClubLoadCheck();
		for (var R = 0; R < Player.Reputation.length; R++) {
			if (Player.Reputation[R].Value != 0) {
				for (var RR = 0; RR < Player.Reputation.length; RR++) {
					if (ReputationValidReputations[RR] == Player.Reputation[R].Type) {
						return;
					}
				}
				Player.Reputation[R].Value = 0;
			}
		}
		ServerPlayerReputationSync();
	}

	//添加Skill输入框
	function Club_text_Skill_input_Add() {
		Club_text_ChangeSkill_input = document.createElement("input");
		Club_text_ChangeSkill_input.id = "Club_text_ChangeSkill_input";
		Club_text_ChangeSkill_input.type = "text";
		Club_text_ChangeSkill_input.style = "width:142px;margin-left:25px;margin-top:10px";
		Club_text_ChangeSkill_input.placeholder = "请输入Skill数值";
		Common_view_Bodage_div.appendChild(Club_text_ChangeSkill_input);
	}

	//添加修改Skill按钮（循环）
	function Club_btn_ChangeSkill_input_Add() {
		for (var R = 0; R < SkillValidSkills.length; R++) {
			Club_btn_ChangeSkillSingle_input_Add(SkillValidSkills[R]);
		}
	}

	//添加修改Skill按钮（单个）
	function Club_btn_ChangeSkillSingle_input_Add(SkillName) {
		var Club_btn_ChangeSkill_input = document.createElement("input");
		Club_btn_ChangeSkill_input.id = "Club_btn_ChangeSkill_input_" + SkillName;
		Club_btn_ChangeSkill_input.type = "button";
		Club_btn_ChangeSkill_input.style = "width:150px;margin-left:25px;margin-top:10px";
		Club_btn_ChangeSkill_input.value = "修改" + SkillName;
		Club_btn_ChangeSkill_input.onclick = Club_btn_ChangeSkillSingle_input_Add_onclick;
		Common_view_Bodage_div.appendChild(Club_btn_ChangeSkill_input);
	}

	//修改Skill按钮（单个）点击事件
	function Club_btn_ChangeSkillSingle_input_Add_onclick() {
		ClubLoadCheck();
		var reg = /^-?\d*$/;
		var SkillName = this.value.replace("修改", "");
		Club_text_ChangeSkill_input_value = Club_text_ChangeSkill_input.value;
		if (reg.test(Club_text_ChangeSkill_input_value) && Club_text_ChangeSkill_input_value != "") {
			var ClubtextChangeSkillinputvalue = Number(Club_text_ChangeSkill_input_value);
			if (ClubtextChangeSkillinputvalue >= 0 && ClubtextChangeSkillinputvalue <= 10) {
				SkillChange(SkillName, ClubtextChangeSkillinputvalue, 0, true);
			} else {
				alert("Skill数目必须在0到10之间！");
			}
		} else {
			alert("Skill数目必须为整数！");
		}
		Club_text_ChangeSkill_input_value = "";
	}

	//添加恢复异常Skill按钮
	function Club_btn_ChangeSkillRepair_input_Add() {
		Club_btn_ChangeSkillRepair_input = document.createElement("input");
		Club_btn_ChangeSkillRepair_input.id = "Club_btn_ChangeSkillRepair_input";
		Club_btn_ChangeSkillRepair_input.type = "button";
		Club_btn_ChangeSkillRepair_input.style = "width:150px;margin-left:25px;margin-top:10px";
		Club_btn_ChangeSkillRepair_input.value = "修复异常Skill";
		Club_btn_ChangeSkillRepair_input.onclick = Club_btn_ChangeSkillRepair_input_onclick;
		Common_view_Bodage_div.appendChild(Club_btn_ChangeSkillRepair_input);
	}

	//恢复异常Skill按钮点击事件
	function Club_btn_ChangeSkillRepair_input_onclick() {
		ClubLoadCheck();
		for (var R = 0; R < Player.Skill.length; R++) {
			Player.Skill[R].Progress = 0;
			if (Player.Skill[R].Value != 0) {
				for (var RR = 0; RR < Player.Skill.length; RR++) {
					if (SkillValidSkills[RR] == Player.Skill[R].Type) {
						return;
					}
				}
				Player.Skill[R].Level = 0;
			}
		}
		ServerPlayerSkillSync();
	}

	//添加看不见的input(text)标签，占位置
	function Club_text_InVisible_input_Add(soft, width, left, top) {
		var Club_text_InVisible_input = document.createElement("input");
		Club_text_InVisible_input.id = "Club_text_InVisible_input_" + soft;
		Club_text_InVisible_input.type = "text";
		var Club_text_InVisible_input_style_model = "visibility:hidden;width:" + width + "px;margin-left:" + left +
			"px;margin-top:" + top + "px";
		Club_text_InVisible_input.style = Club_text_InVisible_input_style_model;
		Club_text_InVisible_input.placeholder = "不可见的input(text)标签" + soft;
		Common_view_Bodage_div.appendChild(Club_text_InVisible_input);
	}

	//添加直线(div)标签，分割不同区域
	function Club_line_div_Add(soft, width, height, left, top, color) {
		var Club_line_div = document.createElement("div");
		Club_line_div.id = "Club_line_div_" + soft;
		var Club_line_div_style_model = "width:" + width + "px;height:" + height + "px;margin-left:" + left +
			"px;margin-top:" + top + "px;background-color:" + color;
		Club_line_div.style = Club_line_div_style_model;
		Common_view_Bodage_div.appendChild(Club_line_div);
	}

	//检查是否可以修改数据
	function ClubLoadCheck() {
		if (typeof Player != "undefined" && Player.Name != null && Player.Name != "") {
			console.log("登录成功，已获取玩家数据。");
		} else {
			console.log("没有获取到玩家数据，请刷新重新登录。");
			alert("没有获取到玩家数据，请刷新重新登录。");
			return;
		}
	}
	///------------------------------------------------------------------------------Club功能结束------------------------------------------------------------------------------///
})();
