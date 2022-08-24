$(document).ready(function() {
    $.validator.addMethod("format", function(value, element) {
        var domainRegex = /(.*?)[^w{3}.]([a-zA-Z0-9]([a-zA-Z0-9-]{0,65}[a-zA-Z0-9])?.)+[a-zA-Z]{2,6}/igm; 
        return this.optional(element) || domainRegex.test(String(value).toLowerCase());
              }, "برجاء إدخال عنوان بريد إلكتروني صحيح");

    $('#uservalidation').validate({

        rules: {
            username: {
                required: true,
                minlength:4
            },
            useremail: {
                required: true,
                email: true,
                format:true
            },
            password: {
                required: true,
            }


        }
        
    });

});

$('#uservalidation .form-control').bind('keyup blur click', function () { // fires on every keyup & blur
    if ($('#uservalidation').validate().checkForm()) {                   // checks form for validity
        $('#form-btn').removeClass('fixed__btn__disabled').attr('disabled', false); // enables button
    } else {
        $('#form-btn').addClass('fixed__btn__disabled').attr('disabled', true);   // disables button
    }
});