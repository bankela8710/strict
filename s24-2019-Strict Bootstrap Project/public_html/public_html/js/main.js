$(document).ready(function () {

    if ($('.lead-slider').length > 0) {

        $('.lead-slider').owlCarousel({
            items: 1,
            autoplay: true,
            loop: true

        });

    }

    if ($('.contact-form').length > 0) {

        //FORM VALIDATION
        $(function () {
            $(".contact-form").validate({
                highlight: function (element) {
                    $(element).addClass("is-invalid").removeClass("is-valid");
                },
                unhighlight: function (element) {
                    $(element).removeClass('is-invalid').addClass('is-valid');
                },
                rules: {
                    name: {
                        required: true

                    },
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true
                    }


                },
                messages: {
                    name: {
                        required: 'The name is reguired field'

                    },
                    email: {
                        required: 'The email is reguired field',
                        email: 'Please provide valid Email adress'
                    },
                    message: {
                        required: 'The message is reguired field'
                    }

                },
                errorElement: 'p',
                errorPlacement: function (error, element) {
                    error.appendTo($(element).closest('.form-group').find('.invalid-feedback'));
                }

            });
        });


    }
    function animation() {
        var windowHeight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            let position = $(this).offset().top;
            let animation = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');
            if (position < scroll + windowHeight - 100) {
                $(this).css('animation-delay', delay);
                $(this).addClass(animation);
            }
        });
    }
    animation();
    $(window).scroll(function () {
        animation();
    });






$("#test").on('click', function() {
  
  $.fancybox.open({
    src  : '../img/projects/big/project-01.jpg',
    type : 'inline',
    opts : {
      afterShow : function( instance, current ) {
        console.info('done!');
      }
    }
  });
  
});




});



