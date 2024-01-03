$(document).ready(function() {
    function handleClick1() {
        $('.c1').removeClass('c1Active');
        $('.c0').toggleClass('c0Active');
        $('.c2').removeClass('c2Active');
    }
    function handleClick2() {
        $('.c0').removeClass('c0Active');
        $('.c1').toggleClass('c1Active');
        $('.c2').removeClass('c2Active');
    }

    function handleClick3() {
        $('.c0').removeClass('c0Active');
        $('.c2').toggleClass('c2Active');
        $('.c1').removeClass('c1Active');
    }
    const button1 = $('.b1');
    button1.on('click', handleClick1);
    const button2 = $('.b2');
    button2.on('click', handleClick2);
    const button3 = $('.b3');
    button3.on('click', handleClick3);
});
