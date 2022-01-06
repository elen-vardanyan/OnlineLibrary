//upload book page browse file
function performClick(elemId) {
    var elem = document.getElementById(elemId);
    if(elem && document.createEvent) {
       var evt = document.createEvent("MouseEvents");
       evt.initEvent("click", true, false);
       elem.dispatchEvent(evt);
    }
 }

//index page read more
$(document).ready(function(){
    var maxLength = 14;
    $(".show-read-more").each(function(){
        var myStr = $(this).text();
        if($.trim(myStr).length > maxLength){
            var newStr = myStr.substring(0, maxLength);
            var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
            $(this).empty().html(newStr);
            $(this).append('<a href="javascript:void(0);" class="read-more" style="color: rgb(80, 80, 80);">...</a>');
            $(this).append('<span class="more-text">' + removedStr + '</span>');
        }
    });
    $(".read-more").click(function(){
        $(this).siblings(".more-text").contents().unwrap();
        $(this).remove();
    });
});

//form validation
// var form = document.querySelector(".ol-uploadbook-validatedform");
// var validateBtn = document.querySelector(".ol-uploadbook-uploadbutton-btn");
// var bookName = document.querySelector("#bname");
// var author = document.querySelector("#author");
// var genre = document.querySelector("#genre");
// var language = document.querySelector("#language");
// var description = document.querySelector("#description");
// var fields = document.querySelector('.form-field')

// document.addEventListener('submit', function (event) {
//     event.preventDefault();
    
//     for (var i = 0; i < fields.length; i++) {
//         if (!fields[i].value) {
//             console.log('fields is blank', fields[i]);
//         }
//     }
//   })

