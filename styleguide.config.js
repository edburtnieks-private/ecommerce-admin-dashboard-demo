const path = require('path');

module.exports = {
  sections: [
    {
      name: 'UI Components',
      components: [
        'src/components/Logo/*.tsx',
        'src/components/Transaction/*.tsx',
        'src/components/Transactions/*.tsx',
        'src/components/TransactionFilter/*.tsx',
        'src/components/TransactionFilters/*.tsx',
      ],
    },
    {
      name: 'Card',
      components: [
        'src/components/Card/*.tsx',
        'src/components/Action/*.tsx',
        'src/components/Actions/*.tsx',
        'src/components/Tab/*.tsx',
        'src/components/Tabs/*.tsx',
      ],
    },
    {
      name: 'Layout',
      components: [
        'src/components/MenuButton/*.tsx',
        'src/components/Navigation/*.tsx',
        'src/components/Header/*.tsx',
        'src/layouts/Default/*.tsx',
      ],
    },
    {
      name: 'Icons',
      components: 'src/components/Icons/**/*.tsx',
    },
    {
      name: 'Logos',
      components: 'src/components/Logos/**/*.tsx',
    },
    {
      name: 'Adding new page',
      content: 'src/docs/adding-new-page.md',
    },
  ],
  exampleMode: 'expand',
  usageMode: 'expand',
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json', []).parse,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/Wrapper'),
  },
};
