//function addLoadEvent(func) {
//	var oldonload = window.onload;
//	if (typeof window.onload != 'function') {
//		window.onload = func;
//	} else{
//		window.onload = function() {
//			oldonload();
//			func();
//		}
//	}
//}



function getAllListItem() {
    // 返回页面中所有li标签
    var li = document.getElementsByTagName("li");
    var result = document.getElementById("result1");
    var list = "";
    for(var i=0; i<li.length; i++){
        var outer = li[i].outerHTML;  //li的元素及子节点
        list += outer;
    }
    result.innerHTML = list;
}
getAllListItem();


function findAllHtmlSpanInOneSection(sectionId) {
    // 返回某个section下所有span中内容为HTML的span标签
    var spans = document.getElementById(sectionId).getElementsByTagName("span");
    var result2 = document.getElementById("result2");
    var html = "";  //显示的初始化变量
    for (var i = 0; i < spans.length; i++) {
    	if(spans[i].innerHTML ===  "HTML"){
    		html += spans[i].outerHTML;
    	}
    }
    result2.innerHTML = html;
}
findAllHtmlSpanInOneSection("news-top");


function findListItem(sectionId, spanCont) {
    // 返回某个section下，所有所包含span内容为spanCont的LI标签
    var lis = document.getElementById(sectionId).getElementsByTagName("li");
    var result3 = document.getElementById("result3");
    var html = "";  //显示的初始化变量
    for (var i = 0; i < lis.length; i++) {
    	var span = lis[i].getElementsByTagName("span")[0];
    	console.log(span)
    	if(span.innerHTML === spanCont){
    		html += lis[i].outerHTML;
    		console.log(html)
    	}
    }
    result3.innerHTML = html;
}

findListItem("news-top", "JS");

function getActiveLinkContent(sectionId) {
    // 返回某个section下，class为active的链接中包含的文字内容
    var As = document.getElementById(sectionId).getElementsByTagName("a");
    var result4 = document.getElementById("result4");
    var html = "";
    for(var i=0; i < As.length; i++){
        if(As[i].className=="active"){
            html += As[i].innerHTML;
        }
    }
    result4.innerHTML = html;
}
getActiveLinkContent("news-normal");
