export function totalConImpuesto(subtotal, tasa) {
  if (subtotal < 0) {
    throw new Error('subtotal inválido');
  }

  return Number((subtotal * (1 + tasa)).toFixed(2));
}