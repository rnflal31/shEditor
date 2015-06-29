/**
 * New node file
 */
//browser detect
var browser = (function() {
	var agt = navigator.userAgent.toLowerCase();
	if (agt.indexOf("chrome") != -1) return 'Chrome'; 
	if (agt.indexOf("opera") != -1) return 'Opera'; 
	if (agt.indexOf("staroffice") != -1) return 'Star Office'; 
	if (agt.indexOf("webtv") != -1) return 'WebTV'; 
	if (agt.indexOf("beonex") != -1) return 'Beonex'; 
	if (agt.indexOf("chimera") != -1) return 'Chimera'; 
	if (agt.indexOf("netpositive") != -1) return 'NetPositive'; 
	if (agt.indexOf("phoenix") != -1) return 'Phoenix'; 
	if (agt.indexOf("firefox") != -1) return 'Firefox'; 
	if (agt.indexOf("safari") != -1) return 'Safari'; 
	if (agt.indexOf("skipstone") != -1) return 'SkipStone'; 
	if (agt.indexOf("msie") != -1) return 'Internet Explorer'; 
	if (agt.indexOf("netscape") != -1) return 'Netscape'; 
	if (agt.indexOf("mozilla/5.0") != -1) return 'Mozilla';
}());

var editorFacesMap = {
		"default" : [["textSize", "textColor", "bold", "fontFace"]]		
}

/**
 * Editor Component options List 
 */
/* 	width: 100%; */
/* 	height: 15px; */
/* 	border: 1px solid #dedede;	 */
var compOptions = {
	"textSize" 		: [	'<span style="font-size : 8pt">8</span>','<span style="font-size : 10pt">10</span>','<span style="font-size : 12pt">12</span>',
			            '<span style="font-size : 15pt">15</span>','<span style="font-size : 18pt">18</span>',
			            '<span style="font-size : 24pt">24</span>','<span style="font-size : 32pt">32</span>'
			          ],
	"colorOption" 	: [
	              	   	'<div style="background-color: #000000; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #ffffff; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #333333; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #666666; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #999999; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #aaaaaa; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #dddddd; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #ff0000; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #ff2222; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #ff4444; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #ff6666; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #ff8888; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #ffaaaa; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #ffdddd; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #00ff00; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #22ff22; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #44ff44; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #66ff66; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #88ff88; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #aaffaa; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #ddffdd; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #0000ff; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #2222ff; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #4444ff; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #6666ff; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #8888ff; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #aaaaff; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #ddddff; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #ffff00; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #ffff22; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #ffff44; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #ffff66; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #ffff88; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #ffffaa; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #ffffdd; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #ff00ff; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #ff22ff; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #ff44ff; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #ff66ff; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #ff88ff; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #ffaaff; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #ffddff; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #00ffff; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #22ffff; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #44ffff; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #66ffff; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #88ffff; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #aaffff; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>',
	              	   	'<div style="background-color: #ddffff; width: 100%; height: 15px; border: 1px solid #dedede; cursor: pointer;"></div>'
	              	  ]

};

/**
 * Editor componentList
 */
var shEditorComponentList = {
	"textSize" 	: new SHEditorComponent("defaultDropDown", "textSizeDropDown", 	"textSizeDropDown", 	"glyphicon-text-size", "", "textSize"),
	"textColor" : new SHEditorComponent("colorDropDown", "textColorDropDown", 	"textColorDropDown", 	"glyphicon-text-color", "", "colorOption"),
	"bold" 		: new SHEditorComponent("btn", 		"textBoldBtn", 			"textBoldBtn", 			"glyphicon-bold", ""),
	"fontFace" 	: new SHEditorComponent("btn", 		"fontFaceBtn", 			"fontFaceBtn", 			"glyphicon-font", ""),
//	"textSize" 	: new SHEditorComponent("btn", "textSizeDropDown", 	"textSizeDropDown", 	"glyphicon-text-size", ""),
//	"textSize" 	: new SHEditorComponent("btn", "textSizeDropDown", 	"textSizeDropDown", 	"glyphicon-text-size", "")
};


/**
 * Editor default options 
 */
var shEditorOptions = {
//	"width" : ""
	"mode"  : "default"	
};


/**
 * Editor Class
 * parameter : options, baseTextArea, editorFrame
 * */
function SHEditor(baseTextArea, option) {
	this.baseTextArea = baseTextArea;
	this.option = option ? option : 'default';
//	this.configOptions = {
//			"width" 	: "100%",
//			"height" 	: "300px"			
//	};
	this.editorFrame;
	this.value;
	this.selectHtml;
	this.selectText;	
	this.compenents;
};

/**
 * Editor Component
 * parameter : clsNm, id, bindFncNm, options, defaultVal
 */
function SHEditorComponent (type, comCls, comId, imgIcon, comFncNm, options) {
	this.type 		= type;
	this.comCls 	= comCls;
	this.comId 		= comId;
	this.imgIcon 	= imgIcon;
	this.comFncNm 	= comFncNm;	 
	this.options 	= options;
};


SHEditor.prototype.createEditor = function() {
	this.baseTextArea.hide();
	var iframeStr = ''
		+ '<div class="shEditorContainer" style="border:1px solid #a9a9a9;">'
		+ makeEditor(this.option)
		+ '</div>';
	this.baseTextArea.parent().append(iframeStr)
	$('.shEditorFrame').insertScript();
	$('.shEditorFrame').insertCss();
	if(browser == "Firefox") {
		document.getElementsByClassName("shEditorFrame")[0].contentWindow.document.open();
		document.getElementsByClassName("shEditorFrame")[0].contentWindow.document.close();
		document.getElementsByClassName("shEditorFrame")[0].contentWindow.document.designMode = "on";
	} else {
		$('.shEditorFrame').contents().prop('designMode','on')
	}
//	$('.shEditorFrame').initialize();
	this.editorFrame = $('.shEditorFrame');	
};

/**
 * iframe script 적용  
 */
$.fn.insertScript = function() {
	var doc = this[0].contentDocument;
	if (!doc && this[0].contentWindow) {
	    doc = this[0].contentWindow.document;
	}
	var script = doc.createElement('script');
	script.type = 'text/javascript';
	script.src = 'js/jquery-1.11.2.min.js';	
	var head = doc.getElementsByTagName('head')[0];
	head.appendChild(script);
}

/**
 * iframe css 적용  
 */
$.fn.insertCss = function() {
	var doc = this[0].contentDocument;
	if (!doc && this[0].contentWindow) {
	    doc = this[0].contentWindow.document;
	}
	var cssLink = doc.createElement('link');
	cssLink.href = 'editor_inner.css'; 
	cssLink.rel = 'stylesheet'; 
	cssLink.type = 'text/css'; 
	doc.getElementsByTagName('head')[0].appendChild(cssLink);
}

/**
 * Editor 생성 
 */
var makeEditor = function(option) {
	if(option) console.log(option);
	var editorStr = '<div class="editorDefaultPanel" style="background:linear-gradient(to top, #eeeeee , #c8c8c8); border-bottom:1px solid #c8c8c8;">'
		editorStr += makePanel(editorFacesMap[option]);
		editorStr += '</div>';
		editorStr += '<div class="shIframeContainer" style="height:300px;"><iframe class="shEditorFrame"/></div>' + makeEditorFooter();
//	return makePanel() + '<div class="shIframeContainer" style="height:300px;"><iframe class="shEditorFrame"/></div>' + makeEditorFooter();
//	return '<div class="shIframeContainer" style="height:300px;"><iframe class="shEditorFrame"/></div>' + makeEditorFooter();
	return editorStr;
}

var makePanel = function(panalData) {
	var panalStr = '';
	$.each(panalData, function(index, data) {
		panalStr += '<div class="btn-group" style="margin-left: 5px;margin-right: 5px;padding-top: 3px; padding-bottom: 2px;">';
		$.each(data, function(i, name) {
//			console.log(name);
			var compElem = shEditorComponentList[name];
			console.log(shEditorComponentList[name]);
			if(compElem.type == "btn") {
				panalStr += makeBtn(compElem);
			} else {
				panalStr +=  makeDropDown(compElem);
			}
		});
		panalStr += '</div>';
	});
	
	return panalStr;
}

var makeBtn = function(compElem) {
	var btnStr = '';
		btnStr += '<button type="button" class="btn btn-default btn-sm '+compElem.comCls+'" id="'+compElem.comId+'" aria-label="Left Align">';				
		btnStr += '<span class="glyphicon '+compElem.imgIcon+'" aria-hidden="true"></span>';
		btnStr += '</button>';
	return btnStr;
}

var makeDropDown = function(compElem) {
	var dropDownStr = '<div class="btn-group">';
	dropDownStr += '<button type="button" class="btn btn-default btn-sm dropdown-toggle '+compElem.comCls+'" id="'+compElem.comId+'" data-toggle="dropdown" aria-expanded="false">';
	if(compElem.imgIcon) {
		dropDownStr += '<span class="glyphicon '+compElem.imgIcon+'" aria-hidden="true"></span>&nbsp;';
	}
	
	switch (compElem.type) {
	case "defaultDropDown":
		dropDownStr  += '<span id="selectedOptionSpan">'+'10'+'</span> <span class="caret"></span>';
		break;	
	case "colorDropDown":
		dropDownStr  += '<span class="caret"></span>';
		break;
	default:
		break;
	}
	dropDownStr += '</button>';
	dropDownStr += makeDropDownOption(compElem);
	dropDownStr += '</div>';
	return dropDownStr;
}

/* 	width: 10%; */
/* 	margin: 3px; */
/* 	float: left; */

/* 	list-style: none; */
/* 	padding: 0; */
/* 	margin: 0; */
/* 	width: 150px; */
/* 	height : 150px; */
var makeDropDownOption = function(compElem) {
	var optionsStr = '';
	switch (compElem.type) {
	case "defaultDropDown":
		optionsStr  += '<ul class="dropdown-menu shDropDown '+compElem.comCls+'" id="'+compElem.comId+'" role="menu" style="height:300px; overflow-y:auto;">';
		console.log(compOptions[compElem.options]);
			$.each(compOptions[compElem.options], function(index, value) {
				optionsStr  +=  '<li><a>'+value+'</a></li>';
			});
		optionsStr  +=  '</ul>';
		break;	
	case "colorDropDown":
		optionsStr  += '<ul class="dropdown-menu shDropDown '+compElem.comCls+'" id="'+compElem.comId+'" role="menu" style="list-style: none; padding: 0; margin: 0; width: 150px; height : 150px;">';
		$.each(compOptions[compElem.options], function(index, value) {
			optionsStr  +=  '<li style="width: 10%; margin: 3px; float: left;">'+value+'</li>';
		});
//		dropDownStr  += '<span class="caret"></span>';
		optionsStr  +=  '</ul>';
		break;
	default:
		break;
	}
	return optionsStr;
}

//에디터 footer 생성
var makeEditorFooter = function() {
//	var footerStr = '<div id="editorDefaultFooter" style="background:#e1e1e1; border-top:1px solid #c8c8c8; height : 40px; text-align : center;">'
	var footerStr = '<div class="editorDefaultFooter" style="border-top:1px solid #c8c8c8; height : 40px; text-align : center;">'
//	var footerStr = '<div id="editorDefaultFooter" style="background:linear-gradient(to bottom, #eeeeee , #c8c8c8); border-top:1px solid #c8c8c8; height : 40px; text-align : center;">'
		+ '<span class="glyphicon glyphicon-triangle-bottom" aria-hidden="true" style="margin-top:20px;"></span>'
		+ '</div>';
	return footerStr;
}




