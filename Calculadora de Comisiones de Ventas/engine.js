/**
 * engine.js
 * Capa de Logica de Negocio: motor de calculo de comisiones.
 * Formula: Comision = (Ventas Totales - Descuentos) x Tasa del Pais
 */
 
/**
 * Calcula la comision de un vendedor.
 * @param {number} sales       - Ventas totales del mes.
 * @param {number} discounts   - Descuentos aplicados.
 * @param {number} rate        - Tasa de comision del pais (0.10, 0.15, 0.12).
 * @returns {{ netBase: number, commission: number }}
 */
function calculateCommission(sales, discounts, rate) {
  const netBase = Math.max(sales - discounts, 0);
  const commission = parseFloat((netBase * rate).toFixed(2));
  return { netBase, commission };
}
