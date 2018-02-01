$(document).ready(() => {
  $('h1').hide();
  /* se le da el formato mm/aaaa a la fecha al momento de escribirla */
  $('#exp').mask('00/0000');

  $('#validar').click(() => {

    let num = $('#cn').val();
    let cvv = $('#cvv').val();
    let date = $('#exp').val();
    let name = $('#name').val();

    if (CARD.validTypeCard(num) === 'mastercard' && CARD.LengthCvv(cvv) === 'visa/mastercard' && CARD.validateDate(date) === true && CARD.validateName(name) === true || CARD.validTypeCard(num) === 'visa' && CARD.LengthCvv(cvv) === 'visa/mastercard' && CARD.validateDate(date) === true && CARD.validateName(name) === true || CARD.validTypeCard(num) === 'amex' && CARD.LengthCvv(cvv) === 'visa/mastercard' && CARD.validateDate(date) === true && CARD.validateName(name) === true){
      $('#val').show();
      $('#inval').hide();
    } else {
      $('#val').hide();
      $('#inval').show();
    }

    /* Validación de campos */
    if(CARD.validateData(num) === false || CARD.validateCvv(cvv) === false || CARD.validTypeDataDate(date) === false || CARD.validateName(name) === false){
      Materialize.toast('Ningún campo deber estar vacío o contener datos erróneos', 3000);
    }

    /* Validación de la fecha de expiración */
    if (CARD.validateDate(date) === false) {
      Materialize.toast('Fecha inválida', 3000);
    }

    /* Validación del número de la tarjeta */
    if (CARD.validLuhn(num) === false) {
      Materialize.toast('Tarjeta inválida', 3000);
    }      

   /* Validaciones según el tipo de tarjeta */
    if (CARD.validTypeCard(num) === 'visa') {
      if(CARD.validateLength(num) === 'visa'){
        $('#visa').show();
        $('#mastercard').hide();
        $('#amex').hide();
        if (CARD.LengthCvv(cvv) !== 'visa/mastercard') {
          Materialize.toast('El CVV no corresponde a la tarjeta ingresada', 4000);
        }
      }
    }

    if (CARD.validTypeCard(num) === 'mastercard') {
      if (CARD.validateLength(num) === 'mastercard') {
        $('#visa').hide();
        $('#mastercard').show();
        $('#amex').hide();
        if (CARD.LengthCvv(cvv) !== 'visa/mastercard') {
          Materialize.toast('El CVV no corresponde a la tarjeta ingresada', 4000);
        }
      }
    }

    if (CARD.validTypeCard(num) === 'amex') {
      if (CARD.validateLength(num) === 'amex') {
        $('#visa').hide();
        $('#mastercard').hide();
        $('#amex').show();
        if (CARD.LengthCvv(cvv) !== 'amex') {
          Materialize.toast('El CVV no corresponde a la tarjeta ingresada', 4000);
        }
      }
    }
  });
});