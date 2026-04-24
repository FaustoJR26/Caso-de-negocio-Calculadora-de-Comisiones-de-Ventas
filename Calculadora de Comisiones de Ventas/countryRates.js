/**
 * countryRates.js
 * Capa de Datos: configuración de tasas de comisión por país.
 */

const COUNTRY_RATES = {
  IN: { name: "India",       flag: "🇮🇳", rate: 0.10, symbol: "₹", rateDisplay: "10%" },
  US: { name: "Estados Unidos", flag: "🇺🇸", rate: 0.15, symbol: "$", rateDisplay: "15%" },
  UK: { name: "Reino Unido", flag: "🇬🇧", rate: 0.12, symbol: "£", rateDisplay: "12%" },
};

/**
 * Obtiene la configuración de un país.
 * @param {string} countryCode - Código del país (IN, US, UK).
 * @returns {object} Configuración del país.
 */
function getCountryConfig(countryCode) {
  const config = COUNTRY_RATES[countryCode];
  if (!config) throw new Error(`País no soportado: ${countryCode}`);
  return config;
}

/**
 * Retorna todos los países disponibles.
 * @returns {object} Mapa completo de países.
 */
function getAllCountries() {
  return COUNTRY_RATES;
}
