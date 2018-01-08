// Declara variables y enfoca inputs
$(document).ready(function() {
  var phoneInput = $('.phone-input');
  var codeInput = $('.code-input');
  var firstNext = $('.next-btn');
  var secondNext = $('.next')
  var resendCode = $('.resend');
  var ok = $('.ok');
  var user = $('.user');
  // var min = 120;
  // var max = 350;
  var code = Math.floor(Math.random() * (350 - 120 + 1) ) + 120;
 
  phoneInput.focus();
  codeInput.focus();
  user.focus();
  
  // form 1 - Habilita botón y genera código
  phoneInput.on('keyup', function() {
    if(phoneInput.val().length >= 10) {
      firstNext.attr('disabled', false);
    } else {
      firstNext.attr('disabled', true);
    }
  });
  
  firstNext.on('click', function() {
    if(firstNext.prop('disabled', false)) {
      $(this).attr('data-toggle','modal');
      $(this). attr('data-target', '#myModal');
      $('.modal-body').text('LAB-' + code);
    }
  });

  ok.on('click', function() {
    window.location.href = 'form2.html';
  })

  // form2 - reenvía código
  resendCode.on('click', function() {
    $(this).attr('data-toggle','modal');
    $(this). attr('data-target', '#myModal');
    $('.modal-body').text('LAB-' + code);
  });

  codeInput.on('keyup', function() {
    if(codeInput.val() == $('.modal-body').text()) {
      secondNext.attr('disabled', false);
      secondNext.on('click', function() {
        window.location.href = 'form3.html';
      })
    }
  });

  
  
  
});
