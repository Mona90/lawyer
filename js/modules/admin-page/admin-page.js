$(document).ready(function(){

    // change the head text to fetch the tab text that we clicked on
    $('.admin-page__tabs__link').on('click', function(){
        var headData = $(this).text();
          $('.admin-page__fixed-frame__up h3').text(headData);
        });
        
});