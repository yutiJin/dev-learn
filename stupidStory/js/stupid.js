var customName = document.getElementById("name");
var randomize = document.getElementById("rand");
var uk = document.getElementById("uk");
var para = document.querySelector("p");


var insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
var insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
var insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
	if(customName.value != ''){
		var name = customName.value;
		if (uk.checked) {
			var weight = random(300);
			var temperature = random(94);
		}else {
			weight = 300;
			temperature = 94;
		}
		
	
		para.textContent = 'It was ' + temperature +' farenheit outside, so '+ randomValueFormArray(insertX) +' went for a walk. When they got to ' + randomValueFormArray(insertY) + ' , they stared in horror for a few moments, then ' + randomValueFormArray(insertZ) + '. ' + name + ' saw the whole thing, but was not surprised — ' + randomValueFormArray(insertX) +' weighs '+ weight +' pounds, and it was a hot day.';
		para.style.visibility = 'visible';
		para.style.backgroundColor = changeBackColor();
		
	}else {
		alert("请输入名字！");
		para.textContent = "";
		para.style.visibility = 'hidden';
		para.style.backgroundColor = 'white';
	}
}

function randomValueFormArray(array) {
	return array[Math.floor(Math.random()*array.length)];
}
function random(number){
	return Math.floor(Math.random()*(number+1));
}
function changeBackColor() {
	var r = random(256);
	var g = random(256);
	var b = random(256);
	return `rgba(${r}, ${g}, ${b}, 0.4)`;
}
