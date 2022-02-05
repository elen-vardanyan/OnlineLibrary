//Browse File
function performClick(elemId) {
    var elem = document.getElementById(elemId);
    if (elem && document.createEvent) {
        var evt = document.createEvent("MouseEvents");
        evt.initEvent("click", true, false);
        elem.dispatchEvent(evt);
    }
}


//Form validation
$(() => {
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
    });
});