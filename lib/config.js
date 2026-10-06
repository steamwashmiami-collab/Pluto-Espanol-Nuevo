(function () {
  const fs = require('fs');

  let config = {};

  const loadConfig = () => {
    const defaults = {
      outdir: '.',
      clientID: '00000000-0000-0000-0000-000000000000',
      mapping: {
        us: '45.50.96.71'
      },
      all: false,
      group: 'genre',
      regionalize: false,
      excludeGroups: false,
      excludeChannels: false,
      chno: false,
      port: false,
      uniqueClientid: false,
      randomClientid: false,
      refresh: 0,
      xTvgUrl: false,
      ondemand: false,
      vlcopts: false,
      pipeopts: false
    };

    let custom = {};

    try {
      custom = JSON.parse(
        fs.readFileSync('./config.json', 'utf-8')
      );
    } catch (error) {
      console.error(
        'ERROR reading config.json:',
        error.message
      );
    }

    for (const key of Object.keys(defaults)) {
      config[key.toLowerCase()] =
        custom[key] !== undefined
          ? custom[key]
          : defaults[key];
    }
  };

  const get = (key) => {
    return config[key.toLowerCase()];
  };

  const getMapping = () => {
    return get('mapping');
  };

  module.exports = {
    loadConfig,
    get,
    getMapping
  };
})();
