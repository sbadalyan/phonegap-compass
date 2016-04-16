document.addEventListener('deviceready', function(){
    var watchId = null;
    var start = document.querySelector('.start');
    start.addEventListener('click', function(){
        var options = {
                frequency: 200
            }
        navigator.compass.watchHeading(
            function(heading){
                var element = document.querySelector('.heading');
                element.innerHTML = 'Heading: ' + heading.magneticHeading;
                var rotation = Math.round(heading.magneticHeading)+'deg';
                var needle = document.querySelector('.needle');
                needle.style.webkitTransform = 'rotate('+rotation+')';
            }, 
            function(error){
                console.log("error");
            }, 
            options
        );
    });
});
