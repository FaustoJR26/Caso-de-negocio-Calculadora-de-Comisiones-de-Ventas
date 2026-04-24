/**
 * engine.js
 * Capa de Lógica de Negocio: motor de cálculo de comisiones.
 * Fórmula: Comisión = (Ventas Totales - Descuentos) × Tasa del País
 */

/**
 * Calcula la comisión de un vendedor.
 * @param {number} sales       - Ventas totales del mes.
 * @param {number} discounts   - Descuentos aplicados.
 * @param {number} rate        - Tasa de comisión del país (0.10, 0.15, 0.12).
 * @returns {{ netBase: number, commission: number }}
 */
function calculateCommission(sales, discounts, rate) {
  const netBase = Math.max(sales - discounts, 0);
  const commission = parseFloat((netBase * rate).toFixed(2));
  return { netBase, commission };
}
