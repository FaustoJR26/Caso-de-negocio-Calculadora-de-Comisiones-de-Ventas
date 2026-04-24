/**
 * countryRates.js
 * Capa de Datos: configuracion de tasas de comision por pais.
 */
const COUNTRY_RATES = {
  IN: { name: "India",          flag: "IN", rate: 0.10, symbol: "Rs", rateDisplay: "10%" },
  US: { name: "Estados Unidos", flag: "US", rate: 0.15, symbol: "$",  rateDisplay: "15%" },
  UK: { name: "Reino Unido",    flag: "UK", rate: 0.12, symbol: "L",  rateDisplay: "12%" },
};

/**
 * Obtiene la configuracion de un pais.
 * @param {string} countryCode - Codigo del pais (IN, US, UK).
 * @returns {object} Configuracion del pais.
 */
function getCountryConfig(countryCode) {
  const config = COUNTRY_RATES[countryCode];
  if (!config) throw new Error("Pais no soportado: " + countryCode);
  return config;
}

/**
 * Retorna todos los paises disponibles.
 * @returns {object} Mapa completo de paises.
 */
function getAllCountries() {
  return COUNTRY_RATES;
}
