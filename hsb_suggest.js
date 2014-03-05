(function(){
    
    var appended = false;
    var onscroll = function() {
        var scrollSpot = document.documentElement.scrollTop || document.body.scrollTop;
        if (document.documentElement.clientWidth > 300) {
            var scrollPerc = document.body.scrollHeight * .50;
        } else {
            var scrollPerc = document.body.scrollHeight * .85;
        }
        
        var popBox = document.getElementById("suggest_box");
        if (scrollSpot > scrollPerc) {
            popBox.className += ' show';
        } else {
            popBox.className = popBox.className.replace(/(^|\b)show(\b|$)/, ' ');
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
    
})();
