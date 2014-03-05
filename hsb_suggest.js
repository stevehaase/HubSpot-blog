if (document.addEventListener){
    // Not IE8
    
    document.addEventListener('DOMContentLoaded', function(){
        var popBox = document.getElementById("suggest_box");

        var hide = function() {
            popBox.className = popBox.className.replace(/(^|\b)show(\b|$)/, ' ');

            setTimeout(function(){
                // When the animation is done, we can remove this class:
                popBox.className = popBox.className.replace(/(^|\b)animating(\b|$)/, ' ');
            }, 500);
        };
        var show = function() {
            popBox.className += ' show animating';
        };

        var scrollHandler = function() {
            if (document.documentElement.clientWidth > 300) {
                var scrollPerc = document.body.scrollHeight * .50;
            } else {
                var scrollPerc = document.body.scrollHeight * .85;
            }
            
            if (document.documentElement.scrollTop > scrollPerc) {
                show();
            } else {
                hide();
            }
        };

        document.addEventListener('scroll', scrollHandler)
                
        document.querySelector("#suggest_box button").addEventListener('click', hide);
    });
}
