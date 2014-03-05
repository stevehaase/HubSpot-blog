var appended = false;
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
onscroll = function() {
    var scrollSpot = document.documentElement.scrollTop || document.body.scrollTop;
    if (w > 300) {
        var scrollPerc = document.body.scrollHeight*.50;
    } else {
        var scrollPerc = document.body.scrollHeight*.85;
    }
    
    if (scrollSpot > scrollPerc) {
        if (!appended){
            var popBox = document.getElementById("suggest_box");
            var x = 0;
            
            function slowLoop1(){
                if (x < 10){
                    popBox.style.opacity = x * 0.1;      
                    x++;
                    setTimeout(slowLoop1, 50);
                }
            }
            slowLoop1();
            
            appended = true;
        }
    } else {
        if (appended) {
            var popBox = document.getElementById("suggest_box");
            var x = 10;
            
            function slowLoop2(){
                if (x > -1){
                    popBox.style.opacity = x * 0.1;      
                    x--;
                    setTimeout(slowLoop2, 50);
                }
            }
            slowLoop2();
            
            appended = false;
        }
    }
};


var closeMe = document.getElementsByTagName("button");
closeMe[0].onclick = function () {
    var popBox = document.getElementById("suggest_box");
    var x = 10
    
    function slowLoop2(){
        if (x > -1){
            popBox.style.opacity=x*0.1;      
            x--;
            setTimeout(slowLoop2, 50);
        }
    }
    slowLoop2();
    appended = true;
};
