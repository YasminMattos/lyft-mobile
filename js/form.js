// form 1 - Habilita botón y genera código
$(document).ready(function() {
  var phoneInput = $('.phone-input');
  var codeInput = $('.code-input');
  var nextBtn = $('.next-btn');
  var next = $('.next')
  var resendCode = $('.resend');
  var ok = $('.ok');
  var min = 120;
  var max = 350;
  var code = Math.floor(Math.random() * (max - min + 1) ) + min;

  phoneInput.focus();
  
  phoneInput.on('keyup', function() {
    if(phoneInput.val().length >= 10) {
      nextBtn.attr('disabled', false);
    } else {
      nextBtn.attr('disabled', true);
    }
  });
  
  nextBtn.on('click', function() {
    if(nextBtn.prop('disabled', false)) {
      $(this).attr('data-toggle','modal');
      $(this). attr('data-target', '#myModal');
      $('.modal-body').text('LAB-' + code);
    }
  });

  ok.on('click', function() {
    window.location.href = 'form2.html';
  })

  // form2 - reenvía código
  codeInput.on('keyup', function() {
    if(codeInput.val().length == 3) {
      next.attr('disabled', false);
      next.on('click', function() {
        window.location.href = 'form3.html';
      })
    }
  });

  resendCode.on('click', function() {
    $(this).attr('data-toggle','modal');
    $(this). attr('data-target', '#myModal');
    $('.modal-body').text('LAB-' + code);
  });

  
  
  
});
