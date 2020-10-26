$(document).ready(function () {
    $('#show_password').on('click',function() {
        const passWordFiled = $('#password');
        const passWordFiledType = passWordFiled.attr('type');
        if (passWordFiledType === 'password') {
            passWordFiled.attr('type', 'text');
            addRemoveEyeIcon(passWordFiledType);
        } else {
            addRemoveEyeIcon(passWordFiledType);
            passWordFiled.attr('type','password');
        }
    })

    function addRemoveEyeIcon(type) {
        const eyeIcon = $('#eye');
        if (type === 'password')
           eyeIcon.removeClass( "fa fa-eye" ).addClass( "fa fa-eye-slash" );
        else
        eyeIcon.removeClass( "fa fa-eye-slash" ).addClass( "fa fa-eye" );
    }
})