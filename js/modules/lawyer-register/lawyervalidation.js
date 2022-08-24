$(document).ready(function() {
    $.validator.addMethod("format", function(value, element) {
        var domainRegex = /(.*?)[^w{3}.]([a-zA-Z0-9]([a-zA-Z0-9-]{0,65}[a-zA-Z0-9])?.)+[a-zA-Z]{2,6}/igm; 
        return this.optional(element) || domainRegex.test(String(value).toLowerCase());
              }, "برجاء إدخال عنوان بريد إلكتروني صحيح");

    $('#lawyerValidate').validate({
        
        rules: {
            lawyername: {
                required:true
            },
            gradeyear:{
                required:true
            },
            state2: {
                required:true
            },
            state1: {
                required:true
            },
            city: {
                required:true
            },
            country:{
                required:true
            },
            lawyeremail:{
                required:true,
                email:true,
                format:true
            },
            lawyerpass:{
                required:true
            },
            mobile: {
                required: true,
                number:true,

            },
            phone: {
                required: true,
                number:true,
            },
            experience: {
                required:true
            },
            idcard:{
                required:true,
                number: true
            }
        }
        
    });

    

});
$('#lawyerValidate .form-control').bind('keyup blur click', function () { // fires on every keyup & blur
    if ($('#lawyerValidate').validate().checkForm()) {                   // checks form for validity
        $('#lowyer-form-btn').removeClass('fixed__btn__disabled').attr('disabled', false); // enables button
    } else {
        $('#lowyer-form-btn').addClass('fixed__btn__disabled').attr('disabled', true);   // disables button
    }
});