const RESTRICTED_COUNTRY_CODES = new Set([
  // EU
  "AT",
  "BE",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "DE",
  "GR",
  "HU",
  "IE",
  "IT",
  "LV",
  "LT",
  "LU",
  "MT",
  "NL",
  "PL",
  "PT",
  "RO",
  "SK",
  "SI",
  "ES",
  "SE",
  // EEA (non-EU)
  "IS",
  "LI",
  "NO",
  // UK + CH
  "GB",
  "UK",
  "CH",
]);

function normalizeCountryCode(value) {
  if (!value) return "";
  return String(value).trim().toUpperCase();
}

function resolveAnalyticsModeFromCountry(countryCode) {
  const normalizedCountry = normalizeCountryCode(countryCode);
  if (!normalizedCountry) return "restricted";
  return RESTRICTED_COUNTRY_CODES.has(normalizedCountry) ? "restricted" : "ga";
}

module.exports = {
  RESTRICTED_COUNTRY_CODES,
  normalizeCountryCode,
  resolveAnalyticsModeFromCountry,
};
