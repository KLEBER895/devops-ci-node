import { totalConImpuesto } from '../src/calculadora.js';

test('aplica 12 % de impuesto', () => {
  expect(totalConImpuesto(100, 0.12)).toBe(113);
});

test('subtotal cero devuelve cero', () => {
  expect(totalConImpuesto(0, 0.12)).toBe(0);
});

test('subtotal negativo genera error', () => {
  expect(() => totalConImpuesto(-100, 0.12))
    .toThrow('subtotal inválido');
});