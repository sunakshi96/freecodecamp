$(document).ready(function() {

  // waypoints
  $('.wp1').waypoint(function() {
    $('.wp1').addClass('animated fadeInLeft');
  }, {
    offset: '75%'
  });
  $('.wp2').waypoint(function() {
    $('.wp2').addClass('animated fadeInUp');
  }, {
    offset: '75%'
  });
  $('.wp3').waypoint(function() {
    $('.wp3').addClass('animated fadeInDown');
  }, {
    offset: '55%'
  });
  $('.wp4').waypoint(function() {
    $('.wp4').addClass('animated fadeInDown');
  }, {
    offset: '75%'
  });
  $('.wp5').waypoint(function() {
    $('.wp5').addClass('animated fadeInUp');
  }, {
    offset: '75%'
  });
  $('.wp6').waypoint(function() {
    $('.wp6').addClass('animated fadeInDown');
  }, {
    offset: '75%'
  });


  // Magnific Popup
  $('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });

  $('.popup-with-move-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });

  // contact form validation
  $("input,textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // something to have when submit produces an error ?
      // Not decided if I need it yet
    },
    submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var name = $("input#name").val();
      var email = $("input#email").val();
      var website = $("input#website").val();
      var message = $("textarea#message").val();
      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }
      $.ajax({
        url: "",
        type: "POST",
        data: {
          name: name,
          email: email,
          website: website,
          message: message
        },
        cache: false,
        success: function() {
          // Success
          $('#success').html("<div class='alert alert-success'>");
          $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
          $('#success > .alert-success').append("<strong>Your message has been sent. </strong>");
          $('#success > .alert-success').append('</div>');

          //clear all fields
          $('#contactForm').trigger("reset");
        },
        error: function() {
          // Fail
          $('#success').html("<div class='alert alert-danger'>");
          $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
          $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that our mail server is not responding...</strong> Please email us directly at ...");
          $('#success > .alert-danger').append('</div>');

          //clear all fields
          $('#contactForm').trigger("reset");
        },
      })
    },
    filter: function() {
      return $(this).is(":visible");
    },
  });

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });

});

// hide success/fail boxes on click
$('#name').focus(function() {
  $('#success').html('');
});

// slideshow
(function() {
  new Slideshow(document.getElementById('slideshow'));

  var body = docElem = window.document.documentElement,
    wrap = document.getElementById('wrap'),
    mockup = wrap.querySelector('.mockup'),
    mockupWidth = mockup.offsetWidth;

  scaleMockup();

  function scaleMockup() {
    var wrapWidth = wrap.offsetWidth,
      val = wrapWidth / mockupWidth;

    mockup.style.transform = 'scale3d(' + val + ', ' + val + ', 1)';
    mockup.style.WebkitTransform = 'scale3d(' + val + ', ' + val + ', 1)';
  }

  window.addEventListener('resize', resizeHandler);

  function resizeHandler() {
    function delayed() {
      resize();
      resizeTimeout = null;
    }
    if (typeof resizeTimeout != 'undefined') {
      clearTimeout(resizeTimeout);
    }
    resizeTimeout = setTimeout(delayed, 50);
  }

  function resize() {
    scaleMockup();
  }
})();