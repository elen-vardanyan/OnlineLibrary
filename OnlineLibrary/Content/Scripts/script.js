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

//upload page form validation
$('#btn_link').click(function () {
    if ($('#bname').val() == '') {
        $('#bname_sp').text('Please write text *');
    }
    else {
        $('#bname_sp').text('');
    }
    if ($('#author').val() == '') {
        $('#author_sp').text('Please write text *');
    }
    else {
        $('#author_sp').text('');
    }

    if ($('#genre').val()) {
        $('#select_sp').text('');
    }
    else {
        $('#select_sp').text('Please choose one *');
    }
    if ($('#language').val()) {
        $('#select_sp_lng').text('');
    }
    else {
        $('#select_sp_lng').text('Please choose one *');
    }
})