(function(){
    
    var hide = function() {
        var popBox = document.getElementById("suggest_box");
        popBox.className = popBox.className.replace(/(^|\b)show(\b|$)/, ' ');

        setTimeout(function(){
            // When the animation is done, we can remove this class:
            popBox.className = popBox.className.replace(/(^|\b)animating(\b|$)/, ' ');
        }, 500);
    };
    var show = function() {
        var popBox = document.getElementById("suggest_box");
        popBox.className += ' show animating';
    };

    var onscroll = function() {
        var scrollSpot = document.documentElement.scrollTop || document.body.scrollTop;
        if (document.documentElement.clientWidth > 300) {
            var scrollPerc = document.body.scrollHeight * .50;
        } else {
            var scrollPerc = document.body.scrollHeight * .85;
        }
        
        var popBox = document.getElementById("suggest_box");
        if (scrollSpot > scrollPerc) {
            show();
        } else {
            hide();
        }
    };
            
    document.querySelector("#suggest_box button").onclick = hide;
})();
