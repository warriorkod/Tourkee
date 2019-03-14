$(function(){
	$("#wizard").steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        transitionEffectSpeed: 300,
        labels: {
            next: "Suivant",
            previous: "Précédant",
            finish: 'Valider'
        },
        onStepChanging: function (event, currentIndex, newIndex) {
            if ( newIndex >= 1 ) {
                $('.steps ul li:first-child a img').attr('src','assets/images/step-01.png');
            } else {
                $('.steps ul li:first-child a img').attr('src','assets/images/step-01-active.png');
            }

            if ( newIndex === 1 ) {
                $('.steps ul li:nth-child(2) a img').attr('src','assets/images/step-02-active.png');
            } else {
                $('.steps ul li:nth-child(2) a img').attr('src','assets/images/step-02.png');
            }

            if ( newIndex === 2 ) {
                $('.steps ul li:nth-child(3) a img').attr('src','assets/images/step-03-active.png');
            } else {
                $('.steps ul li:nth-child(3) a img').attr('src','assets/images/step-03.png');
            }

            if ( newIndex === 3 ) {
                $('.steps ul li:nth-child(4) a img').attr('src','assets/images/step-04-active.png');
                $('.actions ul').addClass('step-4');
            } else {
                $('.steps ul li:nth-child(4) a img').attr('src','assets/images/step-04.png');
                $('.actions ul').removeClass('step-4');
            }
            return true;
        }
    });
    // Custom Button Jquery Steps
    $('.forward').click(function(){
    	$("#wizard").steps('next');
    })
    $('.backward').click(function(){
        $("#wizard").steps('previous');
    })
    // Click to see password
    $('.password i').click(function(){
        if ( $('.password input').attr('type') === 'password' ) {
            $(this).next().attr('type', 'text');
        } else {
            $('.password input').attr('type', 'password');
        }
    })
    // Create Steps Image
    $('.steps ul li:first-child').append('<img src="assets/images/step-arrow.png" alt="" class="step-arrow">').find('a').append('<img src="assets/images/step-01-active.png" alt=""> ').append('<span class="step-order">Step 1</span>');
    $('.steps ul li:nth-child(2').append('<img src="assets/images/step-arrow.png" alt="" class="step-arrow">').find('a').append('<img src="assets/images/step-02.png" alt="">').append('<span class="step-order">Step 2</span>');
    $('.steps ul li:nth-child(3)').append('<img src="assets/images/step-arrow.png" alt="" class="step-arrow">').find('a').append('<img src="assets/images/step-03.png" alt="">').append('<span class="step-order">Step 3</span>');
    $('.steps ul li:last-child a').append('<img src="assets/images/step-04.png" alt="">').append('<span class="step-order">Step 4</span>');
    // Count input
    $(".quantity span").on("click", function() {

        var $button = $(this);
        var oldValue = $button.parent().find("input").val();

        if ($button.hasClass('plus')) {
          var newVal = parseFloat(oldValue) + 1;
        } else {
           // Don't allow decrementing below zero
          if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
            } else {
            newVal = 0;
          }
        }
        $button.parent().find("input").val(newVal);
    });
})
