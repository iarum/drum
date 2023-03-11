$(document).keypress(function (e) {
    var key = e.which;
    console.log(key);
    if (key == 13)  // the enter key code
    {
        audio = new Audio('audio/kick.wav');
        audio.play();
    }
}); 