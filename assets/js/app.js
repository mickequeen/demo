$(document).ready(() => {
  /* se le da el formato mm/aaaa a la fecha al momento de escribirla */
  $('#exp').mask('00/0000');

/*
*validación tarjeta utilizando api
*/
  $('#cn').keyup(function(){
    if (CARD.validLuhn($('#cn').val()) === true && CARD.validTypeCard($('#cn').val()) === 'mastercard' && CARD.validateLength($('#cn').val()) === 'mastercard'){
      $('#mastercard').show();
      $('#visa').hide();
      $('#amex').hide();
      $('#cn').attr('class', 'valid');
      $('#statusCard').attr('data-success', 'Número de tarjeta Válido');
    } if (CARD.validLuhn($('#cn').val()) === true && CARD.validTypeCard($('#cn').val()) === 'visa'){
      $('#mastercard').hide();
      $('#visa').show();
      $('#amex').hide();
      $('#cn').attr('class', 'valid');
      $('#statusCard').attr('data-success', 'Número de tarjeta Válido');
    } if(CARD.validLuhn($('#cn').val()) === true && CARD.validTypeCard($('#cn').val()) === 'amex' && CARD.validateLength($('#cn').val()) === 'amex'){
      $('#mastercard').hide();
      $('#visa').hide();
      $('#amex').show();
      $('#cn').attr('class', 'valid');
      $('#statusCard').attr('data-success', 'Número de tarjeta Válido');
    } if (CARD.validLuhn($('#cn').val()) !== true){
      $('#cn').attr('class', 'invalid');
      $('#statusCard').attr('data-error', 'tarjeta NO válida');
    } if ($('#cn').val() == "") {
      $('#cn').removeAttr('class', 'valid');
      $('#statusCard').removeAttr('data-success', 'Número de tarjeta Válido');
      $('#mastercard').show();
      $('#visa').show();
      $('#amex').show();

    }
  });
/*
*validacion cvv usando api
*/
  $('#cvv').keyup(function(){
    if (CARD.validTypeCard($('#cn').val()) === 'mastercard' && CARD.LengthCvv($('#cvv').val()) === 'visa/mastercard'){
      $('#cvv').attr('class', 'valid');
      $('#statusCVV').attr('data-success', 'CVV Válido');
    } if (CARD.validTypeCard($('#cn').val()) === 'visa' && CARD.LengthCvv($('#cvv').val()) === 'visa/mastercard'){
      $('#cvv').attr('class', 'valid');
      $('#statusCVV').attr('data-success', 'CVV Válido');
    } if (CARD.validTypeCard($('#cn').val()) === 'amex' && CARD.LengthCvv($('#cvv').val()) === 'amex'){
      $('#cvv').attr('class', 'valid');
      $('#statusCVV').attr('data-success', 'CVV Válido');
    } if ($('#cvv').val()==='') {
      $('#cvv').removeAttr('class', 'valid');
      $('#cvv').removeAttr('class', 'invalid');
      $('#statusCVV').removeAttr('data-success', 'CVV Válido');
      $('#statusCVV').removeAttr('data-error', 'CVV NO Válido');
    } if(CARD.LengthCvv($('#cvv').val()) === 'cvv inválido') {
      $('#cvv').attr('class', 'invalid');
      $('#statusCVV').attr('data-error', 'CVV NO Válido');
    }
  });
/*
*validacion fecha expiracion api
*/

  $('#exp').keyup(function(){
    if (CARD.validateDate($('#exp').val()) === true && CARD.validTypeDataDate($('#exp').val()) === true) {
      $('#exp').attr('class', 'valid');
      $('#statusEXP').attr('data-success', 'Fecha Válida');
    } if (CARD.validTypeDataDate($('#exp').val()) === false || CARD.validateDate($('#exp').val()) !== true) {
      $('#exp').removeAttr('class', 'valid');
      $('#statusEXP').removeAttr('data-success', 'Fecha Válida');
      $('#exp').attr('class', 'invalid');
      $('#statusEXP').attr('data-error', 'Fecha NO Válida');
    } if ($('#exp').val() === '') {
      $('#exp').removeAttr('class', 'valid');
      $('#statusEXP').removeAttr('data-success', 'Fecha Válida');
    }
  });

  $('#name').keyup(function(){
    if (CARD.validateName($('#name').val()) === false) {
      $('#name').attr('class', 'invalid');
      $('#statusName').attr('data-error', 'Carácteres no válidos');
    } if ($('#name').val() === true) {
      $('#name').removeAttr('class', 'invalid');
      $('#statusName').removeAttr('data-error', 'Carácteres no válidos');
    }
    if ($('#name').val() === "") {
      $('#name').removeAttr('class', 'invalid');
      $('#statusName').removeAttr('data-error', 'Carácteres no válidos');
    }
  });
});