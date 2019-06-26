// JavaScript source code
$(document).ready(function () {
    // Set options
    var nopeus = 500;               // Himmennys nopeus
    var autoswitch = true;          // Automaattisen vaihtumisen optio
    var autoswitch_nopeus = 4000;    // Automaattisen vaihtumisen nopeus

// Lis‰‰ avustava luokka ensimm‰iseen kuvaan
    $('.slide').first().addClass('active');

// Piilota kaikki diat
    $('.slide').hide();

// N‰yt‰ ensimm‰inen dia
    $('.active').show();

    function seuraavaDia() {
        $('.active').removeClass('active').addClass('oldActive');
        if ($('.oldActive').is(':last-child')) {
            $('.slide').first().addClass('active');
        }
        else {
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(nopeus);
        $('.active').fadeIn(nopeus);
    }

// Siirry edelliseen diaan
    function edellinenDia() {
        $('.active').removeClass('active').addClass('oldActive');
        if ($('.oldActive').is(':first-child')) {
            $('.slide').last().addClass('active');
        }
        else {
            $('.oldActive').prev().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(nopeus);
        $('.active').fadeIn(nopeus);
    }

    // Seuraavan dian kutsu
    $('#next').on('click', seuraavaDia);

    // Edellisen dian kutsu
    $('#prev').on('click', edellinenDia);

    // Automaattisen vaihtumisen testaus
    if(autoswitch === true) {
        setInterval(seuraavaDia, autoswitch_nopeus);
    }

});
