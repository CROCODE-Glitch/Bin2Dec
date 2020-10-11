"use strict";

function convert() {
  var binary = document.getElementById('x-input').value;
  if (binary === '') return alert('Please, enter a binary number');
  binary.split('').map(function (_char) {
    if (_char !== '0' && _char !== '1') return alert('Please, enter a binary number');
  });
  var decimal = parseInt(binary, 2);
  document.getElementById('y-input').value = decimal;
  return true;
}