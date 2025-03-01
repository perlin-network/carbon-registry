const config = {
  environment: process.env.REACT_APP_ENV,
  apiUrl: process.env.REACT_APP_BACKEND || 'http://localhost:3030/local',
  startUrl: process.env.REACT_APP_STAT_URL,
  countryName: process.env.REACT_APP_COUNTRY_NAME || 'Bahamas',
  countryCode: process.env.REACT_APP_COUNTRY_CODE || 'BS',
  countryFlag:
    process.env.REACT_APP_COUNTRY_FLAG_URL ||
    'https://bs-cr-perlin-common-prod.s3.amazonaws.com/flag.png',
  mapBoxToken: process.env.REACT_APP_MAPBOXGL_ACCESS_TOKEN,
  mapType: process.env.REACT_APP_MAP_TYPE || 'None',
  iframurl: process.env.REACT_APP_IFRAME_BASE_URL || 'http://localhost:3000/carbon/app',
};

export default config;
