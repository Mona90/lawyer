var callDataCounter = 1;
var pageSize = 10;

// Ajax Request
function callData(){
  $.ajax({
            url:"https://jsonplaceholder.typicode.com/posts",
            type:"GET",
            dataType: 'json',
            success: function(data){
            var content = $('#body-content');

                content.empty();
              var totalData = data.length;
              var dataLoad = (pageSize * callDataCounter);
              console.log(dataLoad)
              
//                 test show request data
//                 var dataArr = [];
//                 var newArr = data.push(dataArr);
//                 console.log(newArr);
//                  var newRequest += pagesize;
//                 var showRequest = dataArr.slice(newRequest, 10)
              
              
              for(var i= dataLoad - 10; i< dataLoad; i++){
   
                var row= `
                    <tr class="bg-light">
                    <th scope="row">${data[i].userId}</th>
                    <td>${data[i].id}</td>
                    <td>605</td>
                    <td>2/2/2020</td>
                    <td>أحمد إبراهيم جلال</td>
                    <td>
                    <div class="lawyer__grade">
                    <i class="far fa-star lawyer__grade__empty"></i>
                    <i class="fas fa-star lawyer__grade__full"></i>
                    <i class="fas fa-star lawyer__grade__full"></i>
                    <i class="fas fa-star lawyer__grade__full"></i>
                    <i class="fas fa-star lawyer__grade__full"></i>     
                    </div>
                    </td>
                    <td>150 ج</td>
                    </tr>
                    ` ;  
                   content.append(row);

  }


}
});
}
// check the current page to hide the previous or next arrow
function checkpage(){
  var currentPage = $('.consult-details__fixed-frame__down__navigation__pagination .active');
      if(currentPage.is(':first-child')){
         $('.prev-page').hide()
      }else if(currentPage.is(':last-child')){
         $('.next-page').hide()
      }else{
          $('.next-page').show()
          $('.prev-page').show()
      }
  }


$(document).ready(function(){

  // send ajax request
    callData();
// check the current page to hide the previous or next arrow
    checkpage();

    var page = $('.page-num')
    if(page.length >4){
      page.slice(4).hide();
    }

    page.on('click', function(){
      $(this).addClass('active').siblings().removeClass('active');
    var pageAttr =  $(this).attr('data-show')
    //     convert page attribute to number
      var pageNumber = parseInt(pageAttr);
      callDataCounter = pageNumber

      // Ajax Request
        callData();
      
    })

    $('.next-page').on('click', function(){
          var currentPage = $('.consult-details__fixed-frame__down__navigation__pagination .active');
          var nextPage = currentPage.next();

          if(!currentPage.is(':last-child')){
              currentPage.removeClass('active');
              nextPage.addClass('active');
              if(nextPage.is(':hidden')){
                nextPage.show();

              }
              
          }else{
              currentPage.removeClass('active');
              $('.consult-details__fixed-frame__down__navigation__pagination li').eq(0).addClass('active');
          } 
        // check the current page to hide the previous or next arrow
            checkpage();

      
          var pageAttr =  nextPage.attr('data-show')
          //     convert page attribute to number
            var pageNumber = parseInt(pageAttr);
            callDataCounter = pageNumber
                    
            callData();

      });

    //Slide to left
      $('.prev-page').on('click', function(){
          var currentPage = $('.consult-details__fixed-frame__down__navigation__pagination .active');
          var prevPage = currentPage.prev();

          if(currentPage.is(':first-child')){
              currentPage.removeClass('active');
              $('.consult-details__fixed-frame__down__navigation__pagination li:last-child').addClass('active');

          }else{
              currentPage.removeClass('active');
              prevPage.addClass('active');
          }
        
        // check the current page to hide the previous or next arrow
            checkpage();

          var pageAttr =  prevPage.attr('data-show')
          //     convert page attribute to number
            var pageNumber = parseInt(pageAttr);
            callDataCounter = pageNumber
            
            callData();

          
      });
      
            
});

