var initialized;
var quests = [
    "10분 명상하기",
    "30분 낮잠 자기",
    "5분 명상하기",
    "90분 낮잠 자기",
    "가장 기억에 남는<br>노래 부르기",
    "가장 기억에 남는<br>영화 보기",
    "가장 기억에 남는<br>음식 만들기",
    "가장 기억에 남는<br>책 읽기",
    "가장 먼저 떠오르는<br>것 그리기",
    "가장 먼저 떠오르는<br>노래 부르기",
    "가장 먼저 떠오르는<br>사람 그리기",
    "가장 먼저 떠오르는<br>사람에게 선물하기",
    "가장 먼저 떠오르는<br>사람에게 전화하기",
    "가장 먼저 떠오르는<br>사람에게 편지 쓰기",
    "가장 먼저 떠오르는<br>영화 보기",
    "가장 먼저 떠오르는<br>음식 만들기",
    "가장 먼저 떠오르는<br>책 읽기",
    "가장 먼저 보이는<br>책 읽기",
    "가장 먼저<br>보이는 것 그리기",
    "가장 먼저<br>보이는 재료로<br>음식 만들기",
    "가장 좋아하는 것<br>그리기",
    "가장 좋아하는<br>노래 부르기",
    "가장 좋아하는<br>영화 보기",
    "가장 좋아하는<br>음식 만들기",
    "가장 좋아하는<br>책 읽기",
    "가족 안마해 주기",
    "가족에게 선물하기",
    "가족에게 전화하기",
    "가족에게 편지 쓰기",
    "가족이랑 밥 먹기",
    "가족이랑 사진 찍기",
    "가족이랑 영화 보기",
    "가족이랑<br>노래 부르기",
    "거울보고<br>소리 내어 웃기",
    "고등학교 때 사진<br>찾아보기",
    "고운 말만 사용하기",
    "공원 산책하기",
    "국민체조하기",
    "군것질 대신<br>과일 먹기",
    "그림일기 쓰기",
    "긍정적으로<br>생각하기",
    "나 그리기",
    "놀이터에서<br>그네 타기",
    "눈 마사지하기",
    "다음 달 달력에<br>중요한 날 표시하기",
    "달 그리기",
    "달 사진 찍기",
    "대학교 때 사진<br>찾아보기",
    "동네 산책하기",
    "만원 기부하기",
    "만원 저금하기",
    "목욕하기",
    "못했던 사과하기",
    "못했던<br>감사 인사 하기",
    "물 1리터 마시기",
    "물 2리터 마시기",
    "물 3리터 마시기",
    "방 청소하기",
    "버킷리스트<br>작성하기",
    "부모님 그리기",
    "새로운 노래 부르기",
    "새로운 사람에게<br>선물하기",
    "새로운 사람에게<br>전화하기",
    "새로운 사람에게<br>편지 쓰기",
    "새로운 사람이랑<br>밥 먹기",
    "새로운 사람이랑<br>영화 보기",
    "새로운 영화 보기",
    "새로운 음식 만들기",
    "새로운 책 읽기",
    "새천년체조하기",
    "생활기록부<br>찾아보기",
    "손발톱 정리하기",
    "스트레칭하기",
    "신문 읽기",
    "신발 빨래하기",
    "아기 때 사진<br>찾아보기",
    "앨범 커버 그리기",
    "야생 동물 촬영하기",
    "영어로 일기 쓰기",
    "영어신문 읽기",
    "영어책 읽기",
    "영화 포스터 그리기",
    "오천원 기부하기",
    "오천원 저금하기",
    "오후 9시 이후<br>금식하기",
    "옷장 정리하기",
    "유치원 때 사진<br>찾아보기",
    "이메일 정리하기",
    "일기 쓰기",
    "일찍 일어나서<br>아침 먹기",
    "족욕하기",
    "졸업 앨범 찾아보기",
    "종이접기 하기",
    "주변 사람들에게<br>나의 단점 물어보기",
    "주변 사람들에게<br>나의 장점 물어보기",
    "중학교 때 사진<br>찾아보기",
    "지난달 가계부 쓰기",
    "책상 정리하기",
    "천원 기부하기",
    "천원 저금하기",
    "초등학교 때 사진<br>찾아보기",
    "친구 그리기",
    "친구 안마해 주기",
    "친구랑 노래 부르기",
    "친구랑 밥 먹기",
    "친구랑 사진 찍기",
    "친구랑 영화 보기",
    "친구에게 선물하기",
    "친구에게 전화하기",
    "친구에게 편지 쓰기",
    "침구 빨래하기",
    "침대 정리하기",
    "클래식 음악 듣기",
    "프로필 사진 바꾸기",
    "하늘 그리기",
    "하늘 사진 찍기",
    "하루를<br>영상으로 기록하기",
    "핸드폰 배경화면<br>바꾸기",
    "핸드폰 잠금 화면<br>바꾸기",
    "<a href=\"https://forms.gle/BvpQbxRzphzorpwU8\">새로운 퀘스트<br>제안하기</a>"
];
var length = quests.length;

function setBackgroundColor() {
    var red = Math.floor(Math.random() * 128) + 128;
    var green = Math.floor(Math.random() * 128) + 128;
    var blue = Math.floor(Math.random() * 128) + 128;
    var color = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.body.style.backgroundColor = color;
}

function removeInstructions() {
    document.getElementById("tag").innerHTML = "#questeveryday";
    document.getElementById("link").innerHTML = "tinyurl.com/questeveryday";
}

function showQuest() {
    if (!initialized) {
        initialized = true;
        removeInstructions();
    }

    setBackgroundColor();
    var index = Math.floor(Math.random() * length);
    document.getElementById("quest").innerHTML = quests[index];
}

function copyLink() {
    const text = document.createElement("textarea");
    text.value = "tinyurl.com/questeveryday";
    text.setAttribute("readonly", "");
    text.style.position = "absolute";
    text.style.left = "-9999px";
    document.body.appendChild(text);
    text.select();
    text.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(text);
    alert("주소를 복사했습니다");
}

setBackgroundColor();
document.getElementById("quest").innerHTML = "소소하지만<br>확실한 행복을<br>가져다주는<br>일일 퀘스트";
