let Logger;

function startup(logger) {
  Logger = logger;
}

function doLookup(entities, options, cb) {
  Logger.trace({ entities }, 'doLookup');
  let lookupResults = [];

  entities.forEach((entity) => {
    if (entity.types.indexOf('custom.snortSig') >= 0) {
      let snortstring = entity.value.replace(':', '-');
      let snortstring1 = snortstring.split(':')[0];

      lookupResults.push({
        entity: entity,
        data: {
          summary: [snortstring1],
          details: {
            type: 'snort-sig',
            title: 'Snort Signature',
            string: snortstring1
          }
        }
      });
    }
  });

  cb(null, lookupResults);
}

module.exports = {
  doLookup,
  startup
};
