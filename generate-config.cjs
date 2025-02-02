const fs = require('fs');

const config = {
  API_URL: process.env.API_URL || ''
};

fs.writeFileSync('src/assets/config.json', JSON.stringify(config, null, 2));

console.log('Config saved to src/assets/config.json');
