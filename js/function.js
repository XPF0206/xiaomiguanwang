// // 兼容获取类名
function getClass(classname,obj){
	var obj=obj||document;
	if (obj.getElementsByClassName) {
		return obj.getElementsByClassName(classname);
	}else{
		var arr=[];
		var alls=obj.getElementsByTagName("*");
		for (var i = 0; i < alls.length; i++) {
			if(checkClass(alls[i].className,classname)){
				arr.push(alls[i]);
			}
		};
		return arr;
	};
}


function checkClass(newclass,oldclass){
	var classarr=newclass.split(' ')
	for (var i = 0; i < classarr.length; i++) {
		if(classarr[i]==oldclass){
			return true;
		}
	};
	return false;
}




// 兼容获取文本
// function getText(obj,val){
// 	if (val==undefined) {
// 		if (typeof obj.textContent=="string") {
// 			console.log(obj.textContent);
// 			//支持IE9~11  火狐  谷歌
// 			return obj.textContent;
// 		}else{
// 			console.log(obj.innerText);
// 			//支持IE6~8  谷歌
// 			return obj.innerText;
// 		};
// 	}else{
// 		if (typeof obj.textContent=="string") {
// 			console.log(obj.textContent);
// 			//支持IE9~11  火狐  谷歌
// 			obj.textContent=val;
// 		}else{
// 			console.log(obj.innerText);
// 			//支持IE6~8  谷歌
// 			obj.innerText=val;
// 		};
// 	};
	
// }


function getText(obj,val){
	if (val==undefined) {
		if (typeof obj.textContent=="string") {
			// console.log(obj.textContent);
			//支持IE9~11  火狐  谷歌
			return obj.textContent;
		}else{
			// console.log(obj.innerText);
			//支持IE6~8  谷歌
			return obj.innerText;
		};
	}else{
		if (typeof obj.textContent=="string") {
			// console.log(obj.textContent);
			//支持IE9~11  火狐  谷歌
			obj.textContent=val;
		}else{
			// console.log(obj.innerText);
			//支持IE6~8  谷歌
			obj.innerText=val;
		};
	};
	
}




// 获取样式
function getStyle(obj,attr){
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	}else{
		return window.getComputedStyle(obj,null)[attr];
	};
}