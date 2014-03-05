if (document.addEventListener){
    // Not IE8
    
    document.addEventListener('DOMContentLoaded', function(){
        var popBox = document.getElementById("suggest_box");
        if (!popBox) return;

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
            if (document.body.clientWidth > 300) {
                var scrollPerc = document.body.scrollHeight * .50;
            } else {
                var scrollPerc = document.body.scrollHeight * .85;
            }
            
            if (document.body.scrollTop > scrollPerc) {
                show();
            } else {
                hide();
            }
        };

        document.addEventListener('scroll', scrollHandler)
                
        // This is still somewhat sketchy, as if there are other buttons in the box,
        // you're in trouble.  It would be better if there was a 'close-button' class
        // on the element we could select.
        popBox.querySelector("button").addEventListener('click', hide);
    });
}
