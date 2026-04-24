/**
 * validator.js
 * Capa de Logica de Negocio: validacion de entradas del vendedor.
 */

/**
 * Valida los datos de entrada antes del calculo.
 * @param {number} sales   - Ventas totales del mes.
 * @param {number} discounts - Descuentos aplicados.
 * @returns {{ valid: boolean, errors: string[] }}
 */
function validateInputs(sales, discounts) {
  const errors = [];

  if (isNaN(sales) || sales < 0) {
    errors.push("Las ventas totales deben ser un número mayor o igual a 0.");
  }
  if (isNaN(discounts) || discounts < 0) {
    errors.push("Los descuentos deben ser un número mayor o igual a 0.");
  }
  if (!isNaN(sales) && !isNaN(discounts) && discounts > sales) {
    errors.push("Los descuentos no pueden superar las ventas totales.");
  }

  return { valid: errors.length === 0, errors };
}
