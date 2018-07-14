   

   $("document").ready(() => {



   $(".container .row .first ").click(() => {

   	$(".container .modal").fadeIn();
   	$(".container .paragraph").fadeIn(1000);


   })

   $(".modal").click(() => {
    
    $(".modal").fadeOut(1000);
    $(".container .paragraph").fadeOut();

   })


   $("#second").click(() => {

   	$(".container .modal").fadeOut(1000);
   	$(".container .paragraph").fadeOut();

   })


   })