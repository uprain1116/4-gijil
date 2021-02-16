function setBackgroundColor() {
    var red = Math.floor(Math.random() * 128) + 128;
    var green = Math.floor(Math.random() * 128) + 128;
    var blue = Math.floor(Math.random() * 128) + 128;
    var color = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.body.style.backgroundColor = color;
}

function showQuest() {
    var quests = [
    "감사하기",
    "과일 먹기",
    "그림 그리기",
    "그림일기 쓰기",
    "기부하기",
    "낮잠 자기",
    "독서하기",
    "명상하기",
    "목욕하기",
    "물 많이 마시기",
    "사과하기",
    "산책하기",
    "선물하기",
    "스트레칭하기",
    "신문 읽기",
    "아침 먹기",
    "안마하기",
    "영어 신문 읽기",
    "영어로<br>일기 쓰기",
    "영화 보기",
    "옛날 사진 찾기",
    "요리하기",
    "일기 쓰기",
    "저금하기",
    "종이접기 하기",
    "청소하기",
    "칭찬하기",
    "편지 쓰기",
    "하늘 사진 찍기",
    "하루를 영상으로<br>기록하기",
    "<a href=\"https://forms.gle/BvpQbxRzphzorpwU8\">새로운 퀘스트<br>제안하기</a>"
    ];
    var index = Math.floor(Math.random() * quests.length);
    document.getElementById("quest").innerHTML = quests[index];
}

setBackgroundColor();
showQuest();
