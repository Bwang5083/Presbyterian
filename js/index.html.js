var bindEvent = function () {
    $("#pic1").bind('mouseover',function(){
        mover1();
    });
    $("#pic1").bind('mouseout',function(){
        mout1();
    });
    $("#pic1").bind('mouseup',function(){
        swap1();
    });
    $("#pic2").bind('mouseover',function(){
        mover2();
    });
    $("#pic2").bind('mouseout',function(){
        mout2();
    });
    $("#pic2").bind('mouseup',function(){
        swap2();
    });
    $("#pic3").bind('mouseover',function(){
        mover3();
    });
    $("#pic3").bind('mouseout',function(){
        mout3();
    });
    $("#pic3").bind('mouseup',function(){
        swap3();
    });
    $("#pic4").bind('mouseover',function(){
        mover4();
    });
    $("#pic4").bind('mouseout',function(){
        mout4();
    });
    $("#pic4").bind('mouseup',function(){
        swap4();
    });
    $("#pic5").bind('mouseover',function(){
        mover5();
    });
    $("#pic5").bind('mouseout',function(){
        mout5();
    });
    $("#pic5").bind('mouseup',function(){
        swap5();
    });
    $("#pic6").bind('mouseover',function(){
        mover6();
    });
    $("#pic6").bind('mouseout',function(){
        mout6();
    });
    $("#pic6").bind('mouseup',function(){
        swap6();
    });
    $("#pic7").bind('mouseover',function(){
        mover7();
    });
    $("#pic7").bind('mouseout',function(){
        mout7();
    });
    $("#pic7").bind('mouseup',function(){
        swap7();
    });
    $("#pic8").bind('mouseover',function(){
        mover8();
    });
    $("#pic8").bind('mouseout',function(){
        mout8();
    });
    $("#pic8").bind('mouseup',function(){
        swap8();
    });
    $("#pic9").bind('mouseover',function(){
        mover9();
    });
    $("#pic9").bind('mouseout',function(){
        mout9();
    });
    $("#pic9").bind('mouseup',function(){
        swap9();
    });
}

window.mover1 = function () {
    if (window.document.pic1.src.indexOf("images/1.jpg") != -1) {
        window.document.pic1.src = 'images/11.jpg';
    }
}

window.mover2 = function () {
    if (window.document.pic2.src.indexOf("images/2.jpg") != -1) {
        window.document.pic2.src = 'images/22.jpg';
    }
}

window.mover3 = function () {
    if (window.document.pic3.src.indexOf("images/3.jpg") != -1) {
        window.document.pic3.src = 'images/33.jpg';
    }
}

window.mover4 = function () {
    if (window.document.pic4.src.indexOf("images/4.jpg") != -1) {
        window.document.pic4.src = 'images/44.jpg';
    }
}

window.mover5 = function () {
    if (window.document.pic5.src.indexOf("images/5.jpg") != -1) {
        window.document.pic5.src = 'images/55.jpg';
    }
}

window.mover6 = function () {
    if (window.document.pic6.src.indexOf("images/6.jpg") != -1) {
        window.document.pic6.src = 'images/66.jpg';
    }
}

window.mover7 = function () {
    if (window.document.pic7.src.indexOf("images/7.jpg") != -1) {
        window.document.pic7.src = 'images/77.jpg';
    }
}

window.mover8 = function () {
    if (window.document.pic8.src.indexOf("images/8.jpg") != -1) {
        window.document.pic8.src = 'images/88.jpg';
    }
}

window.mover9 = function () {
    if (window.document.pic9.src.indexOf("images/9.jpg") != -1) {
        window.document.pic9.src = 'images/99.jpg';
    }
}

window.mout1 = function () {
    if (window.document.pic1.src.indexOf("images/11.jpg") != -1) {
        window.document.pic1.src = 'images/1.jpg';
    }
}

window.mout2 = function () {
    if (window.document.pic2.src.indexOf("images/22.jpg") != -1) {
        window.document.pic2.src = 'images/2.jpg';
    }
}

window.mout3 = function () {
    if (window.document.pic3.src.indexOf("images/33.jpg") != -1) {
        window.document.pic3.src = 'images/3.jpg';
    }
}

window.mout4 = function () {
    if (window.document.pic4.src.indexOf("images/44.jpg") != -1) {
        window.document.pic4.src = 'images/4.jpg';
    }
}

window.mout5 = function () {
    if (window.document.pic5.src.indexOf("images/55.jpg") != -1) {
        window.document.pic5.src = 'images/5.jpg';
    }
}

window.mout6 = function () {
    if (window.document.pic6.src.indexOf("images/66.jpg") != -1) {
        window.document.pic6.src = 'images/6.jpg';
    }
}

window.mout7 = function () {
    if (window.document.pic7.src.indexOf("images/77.jpg") != -1) {
        window.document.pic7.src = 'images/7.jpg';
    }
}

window.mout8 = function () {
    if (window.document.pic8.src.indexOf("images/88.jpg") != -1) {
        window.document.pic8.src = 'images/8.jpg';
    }
}

window.mout9 = function () {
    if (window.document.pic9.src.indexOf("images/99.jpg") != -1) {
        window.document.pic9.src = 'images/9.jpg';
    }
}
