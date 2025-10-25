// cucumber.cjs
module.exports = {
    default: {
      require: [
        'tests/steps/**/*.js',
        'tests/support/**/*.js'
      ],
      format: [
        'progress',                       // basic progress in console
        'summary',                        // summary report
        'html:reports/cucumber.html',     // HTML report file
        'json:reports/cucumber.json'      // JSON report file
      ],
      paths: ['tests/features/**/*.feature'],
      publishQuiet: true,                 // disables cucumber.io publishing banner
    }
  };
  