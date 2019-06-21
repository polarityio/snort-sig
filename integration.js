function doLookup(entities, options, cb) {
  let lookupResults = [];

  entities.forEach((entity) => {
    if (entity.types.indexOf('custom.snort-sig') >= 0) {
      let snortstring = entity.value.replace(":", "-");
      let snortstring1 = snortstring.split(':')[0]

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
    } else if (entity.types.indexOf('custom.et-sig') >= 0) {
      let etstring = entity.value.split(':')[1]

      lookupResults.push({
        entity: entity,
        data: {
          summary: [etstring],
          details: {
            type: 'et-sig',
            title: 'Emerging Threats Signature',
            string: etstring
          }
        }
      });
    }
  });

  cb(null, lookupResults);
}

function _decodeBase64String(string) {
  let ascii = Buffer.from(string, 'base64').toString('ascii');
  return ascii;
}

function _decodeUrlString(string) {
  let ascii = null;
  try {
    ascii = decodeURIComponent(string);
  } catch (e) {
    Logger.warn({ string }, 'Invalid URL encoded string received');
  }
  return ascii;
}

module.exports = {
  doLookup: doLookup
};
