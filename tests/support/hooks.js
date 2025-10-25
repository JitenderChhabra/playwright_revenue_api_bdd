const { BeforeAll, AfterAll } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

BeforeAll(async function () {
  console.log('* * * Starting test run... * * *');
});

AfterAll(async function () {
  console.log('* * * * * Test run complete! * * * * *');
});
