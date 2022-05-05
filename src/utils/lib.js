import React from 'react';

export function InputNumber() {
  return 0;
}

export function ValidatePosNum(num) {
  if (num < 0) return 0;
  else return num.replace(/[^0-9.]/g, '');
}
