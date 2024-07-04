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
      regex: /\b(?:(?:1|3):[1-9][0-9]{2,4}(?::[1-9])?|1\d{2}:\d{1,3})\b/
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
