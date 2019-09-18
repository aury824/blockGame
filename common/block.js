// 문서가 준비(html, 이미지, 스크립트, 스타일 등)되면 실행
window.onload = function(){     //body 에 onload가 있으면 body가 먼저실행됨
    console.log(myGameArea.message.docIsReady);
        myGameArea.start(); //window.myGameArea.start()
        this.myGamePiece = new Component(30,30,"red",10,120);
}

var myGamePiece;

// 환경정보를 가진 객체
var myGameArea = {
    canvas : document.createElement("canvas"),
    message : {
        docIsReady : "문서가 준비되었습니다."
    },
    start : function(){
        this.canvas.width = 480;
        this.canvas.height = 270;
        // document.body.insertBefore(무엇,어디)    
        document.body.insertBefore(this.canvas,document.body.childNodes[0]);
        // var ctx = myGameArea.canvas.getContext("2d");
        this.context = this.canvas.getContext("2d");  

    }
}

// 컴포넌트 생성자 함수
function Component(w, h, c, x, y){
    this.x = x;
    this.y = y;
    this.c = c;
    this.w = w;
    this.h = h;
    ctx = myGameArea.context ;
    ctx.fillStyle = c;
    ctx.fillRect(this.x,this.y,this.w,this.h);

}