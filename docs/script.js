var one = 0;
var two = 0;
var three = 0;
var four = 0;

var i = 0;

var personals = [
	["생동감 있는", "모험적인", "분석적인", "융통성 있는"],
	["쾌활한", "설득력이 있는", "끈기 있는", "평온한"],
	["사교적인", "의지가 강한", "희생적인", "순응하는"], 
	["매력 있는", "경쟁심이 있는", "이해심이 많은", "감정을 억제하는"],
	["참신한", "능력이 비상한", "존중하는", "삼가는"],
	["신나는", "독자적인", "민감한", "수용하는"],
	["장려하는", "긍정적인", "계획하는", "참을성이 있는"], 
	["충동적인", "확신하는", "계획을 따르는", "과묵한"], 
	["낙천적인", "솔직한", "질서 있는", "포용력 있는"],
	["재담이 있는", "주관이 뚜렷한", "신실한", "응답하는"],
	["즐거운", "겁이 없는", "섬세한", "외교적인"],
	["명랑한", "자신감 있는", "문화적인", "안정된"],
	["고무하는", "독립적인", "이상적인", "거슬리지 않는"],
	["표현하는", "단호한", "몰두하는", "정색하고 농담하는"], 
	["쉽게 어울리는", "행동가", "음악을 좋아하는", "중재하는"],
	["말하기 좋아하는", "성취하는", "사려 깊은", "관대한"], 
	["열정적인", "책임을 지는", "충성스러운", "듣는자"], 
	["무대형의", "지도력이 있는", "조직적인", "만족한"], 
	["인기 있는", "생산적인", "완벽을 추구하는", "편안한"],
	["활기 있는", "담대한", "예의바른", "중도적인"],
	["허세를 부리는", "권세를 부리는", "숫기 없는", "무표정한"],
	["규율이 없는", "동정심이 없는", "용서하지 않는", "열정이 없는"],
	["중언부언하는", "거스르는", "분을 품는", "상관이 없는"], 
	["건망증이 있는", "노골적인", "까다로운", "두려워하는"],
	["중간에 끼여드는", "성급한", "자신감이 없는", "결단력이 없는"],
	["예측할 수 없는", "애정표현이 없는", "인기 없는", "관계하지 않는"], 
	["되는 대로하는", "완고한", "불만스러운", "망설이는"],
	["방임하는", "교만한", "염세적인", "단조로운"],
	["쉽게 분노하는", "논쟁을 좋아하는", "자신을 격리하는", "목표가 없는"],
	["피상적인", "자만하는", "부정적인", "안일한"],
	["칭찬을 바라는", "일벌레", "뒤로 물러서는", "염려하는"],
	["말이 많은", "무례한", "과민한", "소심한"],
	["무질서한", "지배하는", "낙담한", "확신이 없는"],
	["일관성이 없는", "관대하지 못한", "내성적인", "무관심한"],
	["어지르는", "조종하는", "우울한", "중얼거리는"], 
	["과시하는", "고집이 센", "회의적인", "느린"], 
	["시끄러운", "주장하는", "외로운", "게으른"],
	["산만한", "성미가 급한", "의심 많은", "나태한"], 
	["침착하지 못한","경솔한","앙심이 많은", "마지못해하는"],
	["변덕스러운","약삭빠른","비판적인","타협하는"]

]
function start(){
	location.replace("index2.html");	 
}

function button1(){
	one++;
	i++;
	
	if(i >= 40){showResult();}
	else{
	setBackgroundColor();
	show();
	}
	
}

function button2(){
	two++;
	i++;
	
	if(i >= 40){showResult();}
	else{
	setBackgroundColor();
	show();
	}
} 

function button3(){
	three++;
	i++;
	
	if(i >= 40){showResult();}
	else{
	setBackgroundColor();
	show();
	}
}

function button4(){
	four++;
	i++;
	
	if(i >= 40){
		showResult();
	}
	else{
	setBackgroundColor();
	show();
	}
}

function setBackgroundColor() {
  var red = Math.floor(Math.random() * 128) + 128;
  var green = Math.floor(Math.random() * 128) + 128;
  var blue = Math.floor(Math.random() * 128) + 128;
  var color = "rgb(" + red + ", " + green + ", " + blue + ")";
  document.body.style.backgroundColor = color;
}

function show(){
	
	if(i<20) question.innerHTML = "본인에게 가장 어울리는 단어를 골라주세요 (장점) <br/>" + (i+1) + "/40";
	else question.innerHTML = "본인에게 가장 어울리는 단어를 골라주세요 (단점) <br/>" + (i+1) + "/40";
		
	q1.innerHTML = personals[i][0];
	q2.innerHTML = personals[i][1];
	q3.innerHTML = personals[i][2];
	q4.innerHTML = personals[i][3];

}

function showResult(){
			
	var find = findMyPersonal();
	alert("다혈: " + Math.floor((one/40)*100) + "%\n" + "담즙: " + Math.floor((two/40)*100) + 
							"%\n" + "우울: " + Math.floor((three/40)*100) + "%\n" + "점액: " + Math.floor((four/40)*100) + "%");
							
	if(find == 1) 	   location.replace("dadam.html");
	else if(find == 2) location.replace("dawu.html");
	else if(find == 3) location.replace("dajum.html");
	
	else if(find == 4) location.replace("damda.html");
	else if(find == 5) location.replace("damwu.html");
	else if(find == 6) location.replace("damjum.html");
	
	else if(find == 7) location.replace("wuda.html");
	else if(find == 8) location.replace("wudam.html");
	else if(find == 9) location.replace("wujum.html");
	
	else if(find == 10) location.replace("jumda.html");
	else if(find == 11) location.replace("jumdam.html");
	else if(find == 12) location.replace("jumwu.html");
}

function findMyPersonal(){
	if(one >= two && one >= three && one >= four){
		if(one >= two && two >= three && two >= four) {
			if(one == two || two == three || two == four) alert("검사결과, 동률이 나온 기질이 있습니다.\n검사결과가 부정확할 수 있으며, 다시 테스트를 해보시는것을 권합니다.");
			return 1;
		}
		else if (three >= four) {
			if(one == three || three == four) alert("검사결과, 동률이 나온 기질이 있습니다.\n검사결과가 부정확할 수 있으며, 다시 테스트를 해보시는것을 권합니다.");
			return 2;
		}
		else {
			if(one == four) alert("검사결과, 동률이 나온 기질이 있습니다.\n검사결과가 부정확할 수 있으며, 다시 테스트를 해보시는것을 권합니다.");
			return 3;
		}
	}
	else if(two >= three && two >= four){
		if(one >= three && one >= four) {
			if(one == three || one == four) alert("검사결과, 동률이 나온 기질이 있습니다.\n검사결과가 부정확할 수 있으며, 다시 테스트를 해보시는것을 권합니다.");
			return 4;
		}
		else if(three >= four) {
			if(three == two || three == four) alert("검사결과, 동률이 나온 기질이 있습니다.\n검사결과가 부정확할 수 있으며, 다시 테스트를 해보시는것을 권합니다.");
			return 5;
		}
		else {
			if(two == four) alert("검사결과, 동률이 나온 기질이 있습니다.\n검사결과가 부정확할 수 있으며, 다시 테스트를 해보시는것을 권합니다.");
			return 6;
		}
			
	}
	else if(three > four){
		if(one >= two && one >= four) {
			if(one == two || one == four) alert("검사결과, 동률이 나온 기질이 있습니다.\n검사결과가 부정확할 수 있으며, 다시 테스트를 해보시는것을 권합니다.");
			return 7;
		}
		else if(two >= four) {
			if(two == four) alert("검사결과, 동률이 나온 기질이 있습니다.\n검사결과가 부정확할 수 있으며, 다시 테스트를 해보시는것을 권합니다.");
			return 8;
		}
		else {
			if(three == four) alert("검사결과, 동률이 나온 기질이 있습니다.\n검사결과가 부정확할 수 있으며, 다시 테스트를 해보시는것을 권합니다.");
			return 9;
		}
	}
	else{
		if(one >= two && one >= three) {
			if(one == two || one == three) alert("검사결과, 동률이 나온 기질이 있습니다.\n검사결과가 부정확할 수 있으며, 다시 테스트를 해보시는것을 권합니다.");
			return 10;
		}
		else if (two >= three) {
			if(two == three) alert("검사결과, 동률이 나온 기질이 있습니다.\n검사결과가 부정확할 수 있으며, 다시 테스트를 해보시는것을 권합니다.");
			return 11;
		}
		else {
			return 12;
		}
	}
}

function gijil(){
	location.replace("index3.html");
}
setBackgroundColor();
show();

//1 다혈담즙
//2 다혈우울
//3 다혈점액

//4 담즙다혈
//5 담즙우울
//6 담즙점액

//7 우을다혈
//8 우을담즙
//9 우을점액

//10 점액다혈
//11 점액담즙
//12 점액우을
