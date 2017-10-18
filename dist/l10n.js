module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _en = __webpack_require__(1);

var _en2 = _interopRequireDefault(_en);

var _zh = __webpack_require__(2);

var _zh2 = _interopRequireDefault(_zh);

var _index = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index.locales.en.localeData = _en2.default;
// import ar from 'react-intl/locale-data/ar';
// import de from 'react-intl/locale-data/de';
// import es from 'react-intl/locale-data/es';
// import he from 'react-intl/locale-data/he';

// import {locales} from '../locales/gui-msgs.js';

_index.locales.zh.localeData = _zh2.default;
// locales.ar.localeData = ar;
// locales.de.localeData = de;
// locales.es.localeData = es;
// locales.he.localeData = he;

exports.default = _index.locales;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,a){ true?module.exports=a():"function"==typeof define&&define.amd?define(a):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.en=a())}(this,function(){"use strict";return[{locale:"en",pluralRuleFunction:function(e,a){var n=String(e).split("."),l=!n[1],o=Number(n[0])==e,t=o&&n[0].slice(-1),r=o&&n[0].slice(-2);return a?1==t&&11!=r?"one":2==t&&12!=r?"two":3==t&&13!=r?"few":"other":1==e&&l?"one":"other"},fields:{year:{displayName:"year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{one:"in {0} year",other:"in {0} years"},past:{one:"{0} year ago",other:"{0} years ago"}}},month:{displayName:"month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{one:"in {0} month",other:"in {0} months"},past:{one:"{0} month ago",other:"{0} months ago"}}},day:{displayName:"day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{one:"in {0} day",other:"in {0} days"},past:{one:"{0} day ago",other:"{0} days ago"}}},hour:{displayName:"hour",relative:{0:"this hour"},relativeTime:{future:{one:"in {0} hour",other:"in {0} hours"},past:{one:"{0} hour ago",other:"{0} hours ago"}}},minute:{displayName:"minute",relative:{0:"this minute"},relativeTime:{future:{one:"in {0} minute",other:"in {0} minutes"},past:{one:"{0} minute ago",other:"{0} minutes ago"}}},second:{displayName:"second",relative:{0:"now"},relativeTime:{future:{one:"in {0} second",other:"in {0} seconds"},past:{one:"{0} second ago",other:"{0} seconds ago"}}}}},{locale:"en-001",parentLocale:"en"},{locale:"en-150",parentLocale:"en-001"},{locale:"en-AG",parentLocale:"en-001"},{locale:"en-AI",parentLocale:"en-001"},{locale:"en-AS",parentLocale:"en"},{locale:"en-AT",parentLocale:"en-150"},{locale:"en-AU",parentLocale:"en-001"},{locale:"en-BB",parentLocale:"en-001"},{locale:"en-BE",parentLocale:"en-001"},{locale:"en-BI",parentLocale:"en"},{locale:"en-BM",parentLocale:"en-001"},{locale:"en-BS",parentLocale:"en-001"},{locale:"en-BW",parentLocale:"en-001"},{locale:"en-BZ",parentLocale:"en-001"},{locale:"en-CA",parentLocale:"en-001"},{locale:"en-CC",parentLocale:"en-001"},{locale:"en-CH",parentLocale:"en-150"},{locale:"en-CK",parentLocale:"en-001"},{locale:"en-CM",parentLocale:"en-001"},{locale:"en-CX",parentLocale:"en-001"},{locale:"en-CY",parentLocale:"en-001"},{locale:"en-DE",parentLocale:"en-150"},{locale:"en-DG",parentLocale:"en-001"},{locale:"en-DK",parentLocale:"en-150"},{locale:"en-DM",parentLocale:"en-001"},{locale:"en-Dsrt",pluralRuleFunction:function(e,a){return"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relative:{0:"this hour"},relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relative:{0:"this minute"},relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"en-ER",parentLocale:"en-001"},{locale:"en-FI",parentLocale:"en-150"},{locale:"en-FJ",parentLocale:"en-001"},{locale:"en-FK",parentLocale:"en-001"},{locale:"en-FM",parentLocale:"en-001"},{locale:"en-GB",parentLocale:"en-001"},{locale:"en-GD",parentLocale:"en-001"},{locale:"en-GG",parentLocale:"en-001"},{locale:"en-GH",parentLocale:"en-001"},{locale:"en-GI",parentLocale:"en-001"},{locale:"en-GM",parentLocale:"en-001"},{locale:"en-GU",parentLocale:"en"},{locale:"en-GY",parentLocale:"en-001"},{locale:"en-HK",parentLocale:"en-001"},{locale:"en-IE",parentLocale:"en-001"},{locale:"en-IL",parentLocale:"en-001"},{locale:"en-IM",parentLocale:"en-001"},{locale:"en-IN",parentLocale:"en-001"},{locale:"en-IO",parentLocale:"en-001"},{locale:"en-JE",parentLocale:"en-001"},{locale:"en-JM",parentLocale:"en-001"},{locale:"en-KE",parentLocale:"en-001"},{locale:"en-KI",parentLocale:"en-001"},{locale:"en-KN",parentLocale:"en-001"},{locale:"en-KY",parentLocale:"en-001"},{locale:"en-LC",parentLocale:"en-001"},{locale:"en-LR",parentLocale:"en-001"},{locale:"en-LS",parentLocale:"en-001"},{locale:"en-MG",parentLocale:"en-001"},{locale:"en-MH",parentLocale:"en"},{locale:"en-MO",parentLocale:"en-001"},{locale:"en-MP",parentLocale:"en"},{locale:"en-MS",parentLocale:"en-001"},{locale:"en-MT",parentLocale:"en-001"},{locale:"en-MU",parentLocale:"en-001"},{locale:"en-MW",parentLocale:"en-001"},{locale:"en-MY",parentLocale:"en-001"},{locale:"en-NA",parentLocale:"en-001"},{locale:"en-NF",parentLocale:"en-001"},{locale:"en-NG",parentLocale:"en-001"},{locale:"en-NL",parentLocale:"en-150"},{locale:"en-NR",parentLocale:"en-001"},{locale:"en-NU",parentLocale:"en-001"},{locale:"en-NZ",parentLocale:"en-001"},{locale:"en-PG",parentLocale:"en-001"},{locale:"en-PH",parentLocale:"en-001"},{locale:"en-PK",parentLocale:"en-001"},{locale:"en-PN",parentLocale:"en-001"},{locale:"en-PR",parentLocale:"en"},{locale:"en-PW",parentLocale:"en-001"},{locale:"en-RW",parentLocale:"en-001"},{locale:"en-SB",parentLocale:"en-001"},{locale:"en-SC",parentLocale:"en-001"},{locale:"en-SD",parentLocale:"en-001"},{locale:"en-SE",parentLocale:"en-150"},{locale:"en-SG",parentLocale:"en-001"},{locale:"en-SH",parentLocale:"en-001"},{locale:"en-SI",parentLocale:"en-150"},{locale:"en-SL",parentLocale:"en-001"},{locale:"en-SS",parentLocale:"en-001"},{locale:"en-SX",parentLocale:"en-001"},{locale:"en-SZ",parentLocale:"en-001"},{locale:"en-Shaw",pluralRuleFunction:function(e,a){return"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relative:{0:"this hour"},relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relative:{0:"this minute"},relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"en-TC",parentLocale:"en-001"},{locale:"en-TK",parentLocale:"en-001"},{locale:"en-TO",parentLocale:"en-001"},{locale:"en-TT",parentLocale:"en-001"},{locale:"en-TV",parentLocale:"en-001"},{locale:"en-TZ",parentLocale:"en-001"},{locale:"en-UG",parentLocale:"en-001"},{locale:"en-UM",parentLocale:"en"},{locale:"en-US",parentLocale:"en"},{locale:"en-VC",parentLocale:"en-001"},{locale:"en-VG",parentLocale:"en-001"},{locale:"en-VI",parentLocale:"en"},{locale:"en-VU",parentLocale:"en-001"},{locale:"en-WS",parentLocale:"en-001"},{locale:"en-ZA",parentLocale:"en-001"},{locale:"en-ZM",parentLocale:"en-001"},{locale:"en-ZW",parentLocale:"en-001"}]});


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.zh=t())}(this,function(){"use strict";return[{locale:"zh",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"年",relative:{0:"今年",1:"明年","-1":"去年"},relativeTime:{future:{other:"{0}年后"},past:{other:"{0}年前"}}},month:{displayName:"月",relative:{0:"本月",1:"下个月","-1":"上个月"},relativeTime:{future:{other:"{0}个月后"},past:{other:"{0}个月前"}}},day:{displayName:"日",relative:{0:"今天",1:"明天",2:"后天","-2":"前天","-1":"昨天"},relativeTime:{future:{other:"{0}天后"},past:{other:"{0}天前"}}},hour:{displayName:"小时",relative:{0:"这一时间 / 此时"},relativeTime:{future:{other:"{0}小时后"},past:{other:"{0}小时前"}}},minute:{displayName:"分钟",relative:{0:"此刻"},relativeTime:{future:{other:"{0}分钟后"},past:{other:"{0}分钟前"}}},second:{displayName:"秒",relative:{0:"现在"},relativeTime:{future:{other:"{0}秒钟后"},past:{other:"{0}秒钟前"}}}}},{locale:"zh-Hans",parentLocale:"zh"},{locale:"zh-Hans-HK",parentLocale:"zh-Hans",fields:{year:{displayName:"年",relative:{0:"今年",1:"明年","-1":"去年"},relativeTime:{future:{other:"{0}年后"},past:{other:"{0}年前"}}},month:{displayName:"月",relative:{0:"本月",1:"下个月","-1":"上个月"},relativeTime:{future:{other:"{0}个月后"},past:{other:"{0}个月前"}}},day:{displayName:"日",relative:{0:"今天",1:"明天",2:"后天","-2":"前天","-1":"昨天"},relativeTime:{future:{other:"{0}天后"},past:{other:"{0}天前"}}},hour:{displayName:"小时",relative:{0:"这一时间 / 此时"},relativeTime:{future:{other:"{0}小时后"},past:{other:"{0}小时前"}}},minute:{displayName:"分钟",relative:{0:"此刻"},relativeTime:{future:{other:"{0}分钟后"},past:{other:"{0}分钟前"}}},second:{displayName:"秒",relative:{0:"现在"},relativeTime:{future:{other:"{0}秒后"},past:{other:"{0}秒前"}}}}},{locale:"zh-Hans-MO",parentLocale:"zh-Hans",fields:{year:{displayName:"年",relative:{0:"今年",1:"明年","-1":"去年"},relativeTime:{future:{other:"{0}年后"},past:{other:"{0}年前"}}},month:{displayName:"月",relative:{0:"本月",1:"下个月","-1":"上个月"},relativeTime:{future:{other:"{0}个月后"},past:{other:"{0}个月前"}}},day:{displayName:"日",relative:{0:"今天",1:"明天",2:"后天","-2":"前天","-1":"昨天"},relativeTime:{future:{other:"{0}天后"},past:{other:"{0}天前"}}},hour:{displayName:"小时",relative:{0:"这一时间 / 此时"},relativeTime:{future:{other:"{0}小时后"},past:{other:"{0}小时前"}}},minute:{displayName:"分钟",relative:{0:"此刻"},relativeTime:{future:{other:"{0}分钟后"},past:{other:"{0}分钟前"}}},second:{displayName:"秒",relative:{0:"现在"},relativeTime:{future:{other:"{0}秒后"},past:{other:"{0}秒前"}}}}},{locale:"zh-Hans-SG",parentLocale:"zh-Hans",fields:{year:{displayName:"年",relative:{0:"今年",1:"明年","-1":"去年"},relativeTime:{future:{other:"{0}年后"},past:{other:"{0}年前"}}},month:{displayName:"月",relative:{0:"本月",1:"下个月","-1":"上个月"},relativeTime:{future:{other:"{0}个月后"},past:{other:"{0}个月前"}}},day:{displayName:"日",relative:{0:"今天",1:"明天",2:"后天","-2":"前天","-1":"昨天"},relativeTime:{future:{other:"{0}天后"},past:{other:"{0}天前"}}},hour:{displayName:"小时",relative:{0:"这一时间 / 此时"},relativeTime:{future:{other:"{0}小时后"},past:{other:"{0}小时前"}}},minute:{displayName:"分钟",relative:{0:"此刻"},relativeTime:{future:{other:"{0}分钟后"},past:{other:"{0}分钟前"}}},second:{displayName:"秒",relative:{0:"现在"},relativeTime:{future:{other:"{0}秒后"},past:{other:"{0}秒前"}}}}},{locale:"zh-Hant",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"年",relative:{0:"今年",1:"明年","-1":"去年"},relativeTime:{future:{other:"{0} 年後"},past:{other:"{0} 年前"}}},month:{displayName:"月",relative:{0:"本月",1:"下個月","-1":"上個月"},relativeTime:{future:{other:"{0} 個月後"},past:{other:"{0} 個月前"}}},day:{displayName:"日",relative:{0:"今天",1:"明天",2:"後天","-2":"前天","-1":"昨天"},relativeTime:{future:{other:"{0} 天後"},past:{other:"{0} 天前"}}},hour:{displayName:"小時",relative:{0:"這一小時"},relativeTime:{future:{other:"{0} 小時後"},past:{other:"{0} 小時前"}}},minute:{displayName:"分鐘",relative:{0:"這一分鐘"},relativeTime:{future:{other:"{0} 分鐘後"},past:{other:"{0} 分鐘前"}}},second:{displayName:"秒",relative:{0:"現在"},relativeTime:{future:{other:"{0} 秒後"},past:{other:"{0} 秒前"}}}}},{locale:"zh-Hant-HK",parentLocale:"zh-Hant",fields:{year:{displayName:"年",relative:{0:"今年",1:"下年","-1":"上年"},relativeTime:{future:{other:"{0} 年後"},past:{other:"{0} 年前"}}},month:{displayName:"月",relative:{0:"本月",1:"下個月","-1":"上個月"},relativeTime:{future:{other:"{0} 個月後"},past:{other:"{0} 個月前"}}},day:{displayName:"日",relative:{0:"今日",1:"明日",2:"後日","-2":"前日","-1":"昨日"},relativeTime:{future:{other:"{0} 日後"},past:{other:"{0} 日前"}}},hour:{displayName:"小時",relative:{0:"這個小時"},relativeTime:{future:{other:"{0} 小時後"},past:{other:"{0} 小時前"}}},minute:{displayName:"分鐘",relative:{0:"這分鐘"},relativeTime:{future:{other:"{0} 分鐘後"},past:{other:"{0} 分鐘前"}}},second:{displayName:"秒",relative:{0:"現在"},relativeTime:{future:{other:"{0} 秒後"},past:{other:"{0} 秒前"}}}}},{locale:"zh-Hant-MO",parentLocale:"zh-Hant-HK"}]});


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// GENERATED FILE:
const messages = {
  "en": {
    "name": "English",
    "messages": {
      "gui.backdropLibrary.backdropLibrary": "Backdrop Library",
      "gui.blocks.createVariable": "Create Variable",
      "gui.costumeLibrary.costumeLibrary": "Costume Library",
      "gui.costumeTab.addBackdrop": "Add Backdrop",
      "gui.costumeTab.addCostume": "Add Costume",
      "gui.extensionLibrary.extensionLibrary": "Extension Library",
      "gui.greenFlag.go": "Go",
      "gui.gui.addExtension": "Extensions",
      "gui.gui.blocks": "Blocks",
      "gui.gui.costumes": "Costumes",
      "gui.gui.sounds": "Sounds",
      "gui.header.open": "Open",
      "gui.header.save": "Save",
      "gui.loadButton.load": "Load",
      "gui.playbackStep.loading": "Loading",
      "gui.playbackStep.play": "Play",
      "gui.playbackStep.save": "Save",
      "gui.playbackStep.stop": "Stop",
      "gui.prompt.cancel": "Cancel",
      "gui.prompt.ok": "OK",
      "gui.soundEditor.echo": "Echo",
      "gui.soundEditor.faster": "Faster",
      "gui.soundEditor.louder": "Louder",
      "gui.soundEditor.play": "Play",
      "gui.soundEditor.redo": "Redo",
      "gui.soundEditor.reverse": "Reverse",
      "gui.soundEditor.robot": "Robot",
      "gui.soundEditor.save": "Save",
      "gui.soundEditor.slower": "Slower",
      "gui.soundEditor.softer": "Softer",
      "gui.soundEditor.sound": "Sound",
      "gui.soundEditor.stop": "Stop",
      "gui.soundEditor.trim": "Trim",
      "gui.soundEditor.undo": "Undo",
      "gui.soundLibrary.soundLibrary": "Sound Library",
      "gui.soundTab.addSound": "Add Sound",
      "gui.soundTab.recordSound": "Record Sound",
      "gui.spriteInfo.allAround": "all around",
      "gui.spriteInfo.direction": "Direction",
      "gui.spriteInfo.doNotRotate": "don't rotate",
      "gui.spriteInfo.leftRight": "left-right",
      "gui.spriteInfo.name": "Name",
      "gui.spriteInfo.rotation": "Rotation",
      "gui.spriteInfo.show": "Show",
      "gui.spriteInfo.sprite": "Sprite",
      "gui.spriteLibrary.spriteLibrary": "Sprite Library",
      "gui.spriteSelector.addSprite": "Add Sprite",
      "gui.spriteSelectorItem.contextMenuDelete": "delete",
      "gui.spriteSelectorItem.contextMenuDuplicate": "duplicate",
      "gui.stageSelector.backdrops": "Backdrops",
      "gui.stageSelector.stage": "Stage",
      "gui.stageSelector.targetPaneAddBackdrop": "Add Backdrop",
      "gui.stopAll.stop": "Stop",
      "gui.turboMode.active": "Turbo Mode",
      "paint.brushMode.brush": "Brush",
      "paint.paintEditor.hue": "Hue",
      "paint.paintEditor.saturation": "Saturation",
      "paint.paintEditor.brightness": "Brightness",
      "paint.eraserMode.eraser": "Eraser",
      "paint.paintEditor.fill": "Fill",
      "paint.lineMode.line": "Line",
      "paint.ovalMode.oval": "Circle",
      "paint.paintEditor.costume": "Costume",
      "paint.paintEditor.undo": "Undo",
      "paint.paintEditor.redo": "Redo",
      "paint.paintEditor.front": "Front",
      "paint.paintEditor.back": "Back",
      "paint.paintEditor.group": "Group",
      "paint.paintEditor.ungroup": "Ungroup",
      "paint.paintEditor.modeTools": "Mode Tools",
      "paint.penMode.pen": "Pen",
      "paint.rectMode.rect": "Rectangle",
      "paint.reshapeMode.reshape": "Reshape",
      "paint.roundedRectMode.roundedRect": "Rounded Rectangle",
      "paint.selectMode.select": "Select",
      "paint.paintEditor.stroke": "Outline"
    }
  },
  "zh": {
    "name": "简体中文",
    "messages": {
      "gui.backdropLibrary.backdropLibrary": "背景库",
      "gui.blocks.createVariable": "创建变量",
      "gui.costumeLibrary.costumeLibrary": "造型库",
      "gui.costumeTab.addBackdrop": "添加背景",
      "gui.costumeTab.addCostume": "添加造型",
      "gui.extensionLibrary.extensionLibrary": "扩展型",
      "gui.greenFlag.go": "运行",
      "gui.gui.addExtension": "扩展",
      "gui.gui.blocks": "脚本",
      "gui.gui.costumes": "造型",
      "gui.gui.sounds": "声音",
      "gui.header.open": "打开",
      "gui.header.save": "保存",
      "gui.loadButton.load": "打开",
      "gui.playbackStep.loading": "载入中",
      "gui.playbackStep.play": "播放",
      "gui.playbackStep.save": "保存",
      "gui.playbackStep.stop": "停止",
      "gui.prompt.cancel": "取消",
      "gui.prompt.ok": "确定",
      "gui.soundEditor.echo": "回声",
      "gui.soundEditor.faster": "加快",
      "gui.soundEditor.louder": "响亮",
      "gui.soundEditor.play": "播放",
      "gui.soundEditor.redo": "重做",
      "gui.soundEditor.reverse": "反转",
      "gui.soundEditor.robot": "机器",
      "gui.soundEditor.save": "保存",
      "gui.soundEditor.slower": "减慢",
      "gui.soundEditor.softer": "柔和",
      "gui.soundEditor.sound": "声音",
      "gui.soundEditor.stop": "停止",
      "gui.soundEditor.trim": "剪裁",
      "gui.soundEditor.undo": "撤消",
      "gui.soundLibrary.soundLibrary": "声音库",
      "gui.soundTab.addSound": "添加声音",
      "gui.soundTab.recordSound": "记录声音",
      "gui.spriteInfo.allAround": "任意翻转",
      "gui.spriteInfo.direction": "方向",
      "gui.spriteInfo.doNotRotate": "不翻转",
      "gui.spriteInfo.leftRight": "左右翻转",
      "gui.spriteInfo.name": "名字",
      "gui.spriteInfo.rotation": "旋转",
      "gui.spriteInfo.show": "显示",
      "gui.spriteInfo.sprite": "角色",
      "gui.spriteLibrary.spriteLibrary": "角色库",
      "gui.spriteSelector.addSprite": "添加角色",
      "gui.spriteSelectorItem.contextMenuDelete": "删除",
      "gui.spriteSelectorItem.contextMenuDuplicate": "复制",
      "gui.stageSelector.backdrops": "背景",
      "gui.stageSelector.stage": "舞台",
      "gui.stageSelector.targetPaneAddBackdrop": "添加背景",
      "gui.stopAll.stop": "停止",
      "gui.turboMode.active": "加速模式",
      "paint.brushMode.brush": "画刷",
      "paint.paintEditor.hue": "色调",
      "paint.paintEditor.saturation": "饱和度",
      "paint.paintEditor.brightness": "亮度",
      "paint.eraserMode.eraser": "橡皮擦",
      "paint.paintEditor.fill": "填充",
      "paint.lineMode.line": "线",
      "paint.ovalMode.oval": "圆",
      "paint.paintEditor.costume": "造型",
      "paint.paintEditor.undo": "撤消",
      "paint.paintEditor.redo": "重做",
      "paint.paintEditor.front": "前景",
      "paint.paintEditor.back": "背景",
      "paint.paintEditor.group": "分组",
      "paint.paintEditor.ungroup": "取消分组",
      "paint.paintEditor.modeTools": "模式工具",
      "paint.penMode.pen": "画笔",
      "paint.rectMode.rect": "矩形",
      "paint.reshapeMode.reshape": "变形",
      "paint.roundedRectMode.roundedRect": "圆角矩形",
      "paint.selectMode.select": "选择",
      "paint.paintEditor.stroke": "外框"
    }
  }
}
exports.locales = messages;


/***/ })
/******/ ]);