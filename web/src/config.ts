const config = {
  environment: process.env.REACT_APP_ENV,
  apiUrl: process.env.REACT_APP_BACKEND || 'http://localhost:3030/local',
  startUrl: process.env.REACT_APP_STAT_URL,
  countryName: process.env.REACT_APP_COUNTRY_NAME || 'CountryX',
  countryCode: process.env.REACT_APP_COUNTRY_CODE || 'NG',
  countryFlag:
    process.env.REACT_APP_COUNTRY_FLAG_URL ||
    'https://cr-perlin-common-dev.s3.amazonaws.com/flag.png',
  mapBoxToken: process.env.REACT_APP_MAPBOXGL_ACCESS_TOKEN,
  mapType: process.env.REACT_APP_MAP_TYPE || 'None',
};

export default config;
