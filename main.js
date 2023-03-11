$(document).ready(function () {
    let stick = $('#stick');

    let con = {
        113: ["kick", 61, 52],
        119: ["hit", 20, 89],
        101: ["snare", 11, 66],
        114: ["crash", 3, 29]
    }

    function play(sound, topPosition, leftPosition) {
        let audio = new Audio(`audio/${sound}.mp3`);
        audio.play();

        // animate
        stick.show().css({ top: topPosition + "%", left: leftPosition + "%", transform: 'rotate(-10deg)' });

        setTimeout(function () {
            stick.css('transform', 'rotate(0deg)');
        }, 100)
    }

    $(document).on('keypress', function (e) {
        if (typeof (con[e.which]) !== 'undefined') {
            play(con[e.which][0], con[e.which][1], con[e.which][2]);
        }
    })
})