$(function () {
'use strict';    
    
    
    
    var windo = $(window);
    
//    //Closes responsive menu when a scroll link is clicked
//    $('.nav-link').on('click',function (){
//        $('.navbar-collapse').collapse('hide');
//    });





    

    //back-to-top
    var html_body = $('html, body');
    $('.back-top a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 70
                }, 1500, );
                return false;
            }
        }
    });






});
 




function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



function openNav2() {
  document.getElementById("mySidenav2").style.width = "350px";
}

function closeNav2() {
  document.getElementById("mySidenav2").style.width = "0";
}



function openNav3() {
  document.getElementById("mySidenav3").style.width = "350px";
}

function closeNav3() {
  document.getElementById("mySidenav3").style.width = "0";
}
