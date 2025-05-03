const fs = require('fs');
const login = require('@xaviabot/fca-unofficial');

login({ email: 'YOUR_EMAIL', password: 'YOUR_PASSWORD' }, (err, api) => {
  if (err) return console.error(err);
  fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState()));
  console.log('✅ appstate.json has been saved successfully.');
});