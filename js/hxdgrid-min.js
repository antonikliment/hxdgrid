var jQuery=jQuery||require&&require("jquery"),HxdModuleLoader="undefined"===typeof HxdModuleLoader?0:HxdModuleLoader;
(function(h){function x(a){window.getHxGridObj=function(b){return a[b]};window.getHxItemById=function(b){try{var c=b.split("@");return"undefined"===typeof a[parseInt(c[1])].items[parseInt(c[0])]?(n("HxdGrid->Access error. Invalid item id. Itemuid: "+c[0]+" RAW:"+b),0):a[parseInt(c[1])].items[parseInt(c[0])]}catch(d){throw new l("HxdGrid->Access error. Invalid ID format. The correct format is ITEMuid@GRIDuid. Current input "+b+". Exception details "+d);}}}function y(a){function b(){200>new Date-c?
setTimeout(b,200):(d=!1,a.resizeLock&&(a.resizeLock=!1,a.reflowHexRows(function(){a.resizeLock=!0})))}var c,d=!1;window.addEventListener("resize",function(a){c=new Date;!1===d&&(d=!0,setTimeout(b,200))})}function t(a){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)}function p(a){a=parseInt(a);a=a.toString(16);return 1==a.length?"0"+a:a}function u(a,b,c,d,e){c=parseInt(c);d=parseInt(d);if(a){var f=(new Date).getTime(),m=setInterval(function(){var g=Math.min(1,((new Date).getTime()-f)/e);a.style[b]=
c+g*(d-c)+"px";1==g&&clearInterval(m)},25);a.style[b]=c+"px"}}function k(a,b,c,d){d=d||function(a){return a};c=c||0;var e=[[],[]];if(2>a.length)return a;for(var f=Math.floor(a.length/2),m=d(a[f][b]),f=a.splice(f,1)[0],g=0;g<a.length;g++){var h=d(a[g][b]);h<=m?e[0+c].push(a[g]):h>m&&e[1-c].push(a[g])}return k(e[0],b,c,d).concat(f,k(e[1],b,c,d))}function q(a){a=a.get(0);for(var b="width height opacity background-image background-repeat background-position background-color margin-right margin-left margin-top margin-bottom".split(" "),
c={},d="undefined"!==getComputedStyle,e=0,f=b.length;e<f;e++)c[b[e]]=d?getComputedStyle(a,null).getPropertyValue(b[e]):a.currentStyle[b[e]];return c}function z(a,b,c){var d={MM:0,YYYY:2,DD:1},e=[];a=a.split(b);c=c.split("-");b=0;for(var f=c.length;b<f;b++)e[d[c[b]]]=a[b];return e.join("/")}function A(a,b){for(var c=[],d=a.length,e=0;e<d;e++){var f=a[e];b(f)&&c.push(f)}return c}function B(a,b,c){setTimeout(function(){a.style.top=b},"undefined"===typeof c?1E3:c)}function C(a,b,c){setTimeout(function(){a.style.left=
b},"undefined"===typeof c?1E3:c)}function l(a){this.message=a;this.name="HxdException"}function n(a){for(var b="assert cd clear count countReset debug dir dirxml error exception group groupCollapsed groupEnd info log markTimeline profile profileEnd select table time timeEnd timeStamp timeline timelineEnd trace warn".split(" "),c=b.length,d=window.console=window.console||{},e,f=function(){};c--;)e=b[c],d[e]||(d[e]=f);d.log("------WARNING------");d.log(a)}var v=0,w=function(a,b,c){try{this.uid=v,this.$el=
b,this.resizeLock=!0,this.items=[],b.addClass("hxdGridContainer"),b.get(0).setAttribute("style","list-style: none;width: 100%; height: 100%; overflow: hidden;  position: relative;"),this.setOptions(c),this.create(a,this),y(this),v++}catch(d){throw new l("HxdGrid-> Grid initialization error. Detais: "+d);}},r=function(a,b){this.$elem=a;this.cssAnim=!1;var c;c=0<window.navigator.userAgent.indexOf("MSIE ")||navigator.userAgent.match(/Trident.*rv\:11\./)?!0:!1;c&&(this.cssAnim=!1);this.harwareAccelaration=
!1;this.setOptions(b);this.create(this)};r.prototype={uid:0,$elem:null,startPos:null,bgColor:0,xCor:0,yCor:0,setOptions:function(a){this.viewFade=a&&a.viewFade||this.viewFade;this.autoBind=a&&a.autoBind||this.autoBind;"undefined"!==typeof a.bgColor&&0!=a.bgColor&&(t(a.bgColor)?this.bgColor=a&&a.bgColor:n("HxdError -> Options.Invalid color ("+a.bgColor+") provided. Input ignored. Please provide a valid hex string"))},addAttr:function(a,b){this.hasOwnProperty(a)?n("HxdError -> Object function. Attempting to override property. Use setAttribute instead"):
this[a]=b},_passNodeAttributes:function(a){for(var b=0,c=a.length;b<c;b++){var d=a.item(b);-1<d.name.indexOf("data-hxd-")&&this.addAttr(d.name.replace("data-hxd-",""),d.value)}},create:function(a){var b="";if("undefined"!==typeof q(a.$elem)["background-color"]){var c;c=q(a.$elem)["background-color"];if("transparent"==c)c="";else{c=c.split("(")[1].split(")")[0].split(",");var d=c[1],e=c[2];c="#"+p(c[0])+p(d)+p(e)}t(c)&&(a.bgColor=c,b=a.colStyleOverride(a))}modeVar="";a.$elem.wrapInner("<div class='hxContent "+
modeVar+"' "+b+"></div>")},getXY:function(){return[this.xCor,this.yCor]},swapPos:function(a,b){var c=this.getXY(),d=a.getXY();this.moveTo(d[0],d[1]);a.moveTo(c[0],c[1]);c=this.uid.split("@")[0];this.$elem.parent().trigger("binaryShift"+c,{0:this,1:a});"undefined"!==typeof b&&b()},colStyleOverride:function(a){if("undefined"!==typeof a.bgColor&&0!==a.bgColor)return'style="background:'+a.bgColor+'"'},moveTo:function(a,b,c){c=c||this.$elem;"undefined"!==typeof c.attr("style")&&"absolute"==c.get(0).style.position?
this.moveInViewport(a,b)||!this.viewFade?this.animateOver(a,b):this.cssAnim?this.fadeOver(a,b,c):c.filter(":not(:animated)").fadeOut("normal",function(){c.css({left:a,top:b});c.fadeIn("fast")}):c.attr("style","margin:0!important;float:none;position: absolute;left:"+a+"px;top:"+b+"px");this.xCor=a;this.yCor=b},animateOver:function(a,b,c){c=c||this.$elem;if(this.cssAnim){this.harwareAccelaration&&(c.get(0).style.WebkitTransform="  translate3d(0, 0, 0)",c.get(0).style.MozTransform="  translate3d(0, 0, 0) ",
c.get(0).style.transform=" translate3d(0, 0, 0) ");c.get(0).style.WebkitTransition="  all 0.7s ease ";c.get(0).style.MozTransition="  all 0.7s ease ";c.get(0).style.transition=" all 1s ease  ";a+="px";var d=b+"px";c.position()<b?(c.get(0).style.left!=a&&(c.get(0).style.left=a),c.get(0).style.top!=d&&B(c.get(0),d,1E3)):(c.get(0).style.top!=d&&(c.get(0).style.top=d),c.get(0).style.left!=a&&C(c.get(0),a,1E3))}else c.position(),u(c.get(0),"left",c.get(0).style.left,a,500),u(c.get(0),"top",c.get(0).style.top,
b,500)},fadeOver:function(a,b,c){var d=c||this.$elem,d=c.get(0);d.style.WebkitTransition="  opacity  0.7s ease ";d.style.MozTransition="  opacity  0.7s ease ";d.style.transition=" opacity  1 linear 0s ";d.style.opacity="0";this.delayedOpacityShift(d,2,1500,a,b)},delayedOpacityShift:function(a,b,c,d,e){setTimeout(function(){var b=e+"px";a.style.left=d+"px";a.style.top=b;a.style.opacity="1"},"undefined"===typeof c?1E3:c)},forceHidden:function(){this.$elem.fadeOut("slow","linear")},forceVisible:function(){this.$elem.fadeIn("slow",
"linear")},toggleVisible:function(a){this.$elem.fadeToggle("slow","linear")},isElementInViewport:function(a,b){el=this.$elem;var c=el[0].getBoundingClientRect();return-100<=c.top&&-100<=c.left&&c.bottom<=(window.innerHeight+100||document.documentElement.clientHeight+100)&&c.right<=(window.innerWidth+100||document.documentElement.clientWidth+100)},moveInViewport:function(a,b){el=this.$elem;var c=el[0].getBoundingClientRect(),d=parseInt(el[0].style.top)-b,e=parseInt(el[0].style.left)-a;return 0<=c.top-
d&&0<=c.left-e&&c.bottom-d<=(window.innerHeight+0||document.documentElement.clientHeight+0)&&c.right-e<=(window.innerWidth+0||document.documentElement.clientWidth+0)},hxGetYOffset:function(a){var b=1.015*parseInt(a.height);return[function(a){return b*a},function(c){return b*c+(parseInt(a["margin-top"])||0)}]}};w.prototype={uid:0,$:null,$el:null,resize:!0,selector:".hxdItem",hiddenItems:[],gridId:null,emptyGrid:!1,emptyGridLength:0,reflowLock:!0,cellStyle:0,cellOptions:{},setOptions:function(a){this.autocenter=
a&&!1!==a.autocenter||!1;this.clipping=a&&a.clipping||this.clipping;this.resize=a&&a.resize||this.resize;this.selector=a&&a.selector||this.selector;this.hexMode=a&&a.hexMode||this.hexMode;this.reflowLock=a&&a.reflowLock||this.reflowLock;this.emptyGrid=a&&a.emptyGrid||this.emptyGrid;this.emptyGridLength=a&&a.emptyGridLength||this.emptyGridLength;this.cellOptions.hxScale=a&&a.hxScale||"hxd-xl";this.cellOptions.autoBind=a&&a.autoBind||!1;this.cellOptions.bgColor=a&&a.bgColor||0;this.cellOptions.viewFade=
a&&a.viewFade||!1},create:function(a,b){b.$=a;b.reflowLevel=0;b._boundaryWrap(b.$el,b);b.$el.find(b.selector).each(function(a){b.items[a]=0!==HxdModuleLoader?HxdModuleLoader.moduleSelect(b,b.cellOptions,h(this),r):new r(h(this),b.cellOptions);b.items[a].uid=b.uid+"@"+a;b.items[a]._passNodeAttributes(h(this).get(0).attributes)});if(0==b.cellStyle){var c=1<b.items.length?1:0;if(0==c)throw new l("OPS one item in the grid. Are you sure you have it on the right dom element");b.cellStyle=q(b.items[c].$elem);
"undefined"===typeof b.cellStyle.height&&(b.cellStyle.height=b.cellStyle.width)}b.xyMap=b.mapGrid();b._prepContainer();b.reflowHexRows()},_prepContainer:function(){pos=this.$el.position();boundingX=pos.left;boundingY=pos.top;boundingH=this.xyMap.rows*parseInt(this.cellStyle.height)+(parseInt(this.cellStyle["margin-top"])||0);this.$el.find(".gridContent").css({position:"relative",width:"100%",height:boundingH})},_boundaryWrap:function(a,b){b=b||this;out=a.wrapInner("<div class='gridContent'></div>");
var c="binaryShift"+b.uid;out.find(".gridContent").bind(c,function(a,c){b.orderSwap(c)})},orderSwap:function(a){var b=a[0].startPos;a=a[1].startPos;this.itemOrder[b]=a;this.itemOrder[a]=b},reflowHexRows:function(a){this.reflowLock&&(this.reflowLock=!1,this.xyMap=this.mapGrid(),this.reflowLevel!=this.xyMap.rows&&(this._prepContainer(),reflowLevel=this.xyMap.rows,this.reflowCells(this.itemOrder)),this.reflowLock=!0,"undefined"!==typeof a&&a())},reflowCells:function(a){"undefined"===typeof this.itemOrder&&
(this.itemOrder=[]);for(var b=0,c=this.items.length;b<c;b++){var d="undefined"===typeof a||"undefined"===typeof a[b]?b:a[b];if("undefined"!==typeof this.xyMap.cols||0!=this.xyMap.cols){0<this.hiddenItems.indexOf(d)?this.items[d].toggleVisible():this.items[d].forceVisible();if(1==this.emptyGrid)var e=this.items[d].setrow,f=this.items[d].setcol%this.xyMap.cols;else e=Math.ceil((b+1)/this.xyMap.cols),f=b%this.xyMap.cols;var h=f*this.xyMap.xO+this.xyMap.xIndent;if(!isNaN(f))var g=this.xyMap.yO[f%2](e-
1);"undefined"!==typeof f&&"undefined"!==typeof g||this.items[d].forceHidden();this.items[d].moveTo(h,g)}this.items[d].startPos=d;this.itemOrder[b]=d}},grepItems:function(a,b){return A(this.items,function(c){return"undefined"!==typeof b?c[a]===b:c[a]})},orderByDateKey:function(a,b,c,d,e){b=b||!1;c=c||"ascending";d=d||".";e=e||"DD-MM-YYYY";var f=k(this.grepItems(a),a),f=function(a){return Date.parse(z(a,d,e))},f="descending"==c?k(this.grepItems(a),a,1,f):k(this.grepItems(a),a,0,f);this._orderChange(f,
b)},orderByKey:function(a,b,c){b=b||!1;a="descending"==(c||"ascending")?k(this.grepItems(a),a,1):k(this.grepItems(a),a);this._orderChange(a,b)},_orderChange:function(a,b){for(var c=[],d=[],e=0,f=a.length;e<f;e++)c[e]=a[e].startPos;e=0;for(f=this.itemOrder.length;e<f;e++)-1==c.indexOf(e)&&(c.push(e),b&&d.push(e));b&&(this.hiddenItems=d);this.itemOrder=c;this.reflowCells(this.itemOrder)},randomShuffle:function(){for(var a=this.itemOrder,b=a.length-1;0<b;b--){var c=Math.floor(Math.random()*(b+1)),d=
a[b];a[b]=a[c];a[c]=d}this.reflowCells(a)},resetOrder:function(){for(var a=0,b=this.itemOrder.length;a<b;a++)this.itemOrder[a]=a;this.hiddenItems=[];this.reflowCells(this.itemOrder)},mapGrid:function(){var a=this.$el;a.height();var b=a.width(),a=this.emptyGrid&&0<this.emptyGridLength?this.emptyGridLength:this.items.length,c=parseInt(this.cellStyle["margin-left"]||0);parseInt(this.cellStyle["margin-right"]||0);var d=parseInt(this.cellStyle.width)+c,e=Math.floor(b/d);this.autocenter?(b=(b-e*d)/2,b=
b>2*Math.abs(c)?b-c:b+c/2,a<e&&(b+=(e-a)/2*d)):b=0;return{cols:e,rows:Math.ceil(a/e),xO:d,yO:this.items[1<this.items.length?1:0].hxGetYOffset(this.cellStyle),xIndent:b}}};jQuery.fn.hxdGrid=function(a){var b=[];x(b);return this.each(function(c){var d=h(this);b[c]=new w(h,d,a)})};l.prototype=Error()})(jQuery);
