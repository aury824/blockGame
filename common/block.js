// 문서가 준비(html, 이미지, 스크립트, 스타일 등)되면 실행
window.onload = function(){     //body 에 onload가 있으면 body가 먼저실행됨
    console.log(myGameArea.message.docIsReady);
}

// 환경정보를 가진 객체
var myGameArea = {
    message : {
        docIsReady : "문서가 준비되었습니다."
    }
}