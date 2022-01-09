//Browse File
function performClick(elemId) {
    var elem = document.getElementById(elemId);
    if(elem && document.createEvent) {
       var evt = document.createEvent("MouseEvents");
       evt.initEvent("click", true, false);
       elem.dispatchEvent(evt);
    }
 }

//BookName Caption read more
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

//Form validation
let requiredMessage = "This field is required!";
$('#btn_link').click(function () {
    if ($('#bname').val() == '') {
        $('#bname-validation-p').text(requiredMessage);
    }
    else {
        $('#bname-validation-p').text('');
    }
    if ($('#author').val() == '') {
        $('#author-validation-p').text(requiredMessage);
    }
    else {
        $('#author-validation-p').text('');
    }
    if ($('#genre').val()) {
        $('#genre-validation-p').text('');
    }
    else {
        $('#genre-validation-p').text(requiredMessage);
    }
    if ($('#language').val()) {
        $('#language-validation-p').text('');
    }
    else {
        $('#language-validation-p').text(requiredMessage);
    }
})