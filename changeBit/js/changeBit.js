//输入整数的input
var decNumber = document.getElementById("dec-number");
//转换按钮
var transBtn = document.getElementById("trans-btn");
//清空按钮
var clearBtn = document.getElementById("clear");
//输出二进制的地方
var spanNum = document.querySelector("span");
//二进制的位数
var bit = document.getElementById("bin-bit");  
//整数转换为二进制数值


transBtn.addEventListener("click", transNumber);
clearBtn.addEventListener("click", ClearNumber);

function transNumber() {
	if (decNumber.value == "" || isNaN(decNumber.value)) {
		alert("请输入整数");
	} else{
		var num = parseInt(decNumber.value).toString(2);
		var numLen = num.length
		var bitLen = parseInt(bit.value);
		
		if (bitLen > numLen) {
			spanNum.innerHTML = PrefixInteger(num, bitLen);
		} else{
			spanNum.innerHTML = num;
		}
	}
}

//num传入的数字，n需要的字符长度
function PrefixInteger(num,n){
	return (Array(n).join('0') + num).slice(-n);
}

//清空
function ClearNumber() {
	decNumber.value = '';
	bit.value = '';
	spanNum.innerHTML = '';

}
