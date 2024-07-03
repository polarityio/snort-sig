module.exports = {
  name: 'Snort Sig Reference',
  acronym: 'SNORT',
  description: 'Identifies Snort Signatures and allows for quick pivot to rule documentation',
  logging: {
    level: 'info' //trace, debug, info, warn, error, fatal
  },
  customTypes: [
    {
      key: 'snortSig',
      regex: /(1|3):[1-9][0-9]{2,4}(:[1-9])?/
    },
    {
      key: 'etSig',
      regex: /1:2[0-9]{6}(:[1-9])?/
    }
  ],
  defaultColor: 'light-gray',
  block: {
    component: {
      file: './components/snort-block.js'
    },
    template: {
      file: './templates/snort-block.hbs'
    }
  },
  request: {
    cert: '',
    key: '',
    passphrase: '',
    ca: '',
    proxy: ""
  }
};
