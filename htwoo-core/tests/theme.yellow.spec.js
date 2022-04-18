// @ts-check
const {
  test,
  expect
} = require('@playwright/test');

const path = require('path');

const patternTool = require('../tools/get-test');
const patternsToTest = patternTool.getPatterns();
const testConfigJson = require('./localStorage.json');

let currentPattern;

const currentTheme = 'yellow'


test.beforeEach(async ({
  page
}) => {

  await page.goto(`${currentPattern.path}`);

  await page.addInitScript(value => {
    window.localStorage.setItem('availableThemes', value);
    window.sessionStorage.setItem('currentTheme', currentTheme);
  }, testConfigJson);

});



for (const currentTest in patternsToTest) {
  // console.log(currentPattern);

  currentPattern = patternsToTest[currentTest];

  test.describe(`Theme ${currentTheme}`, () => {

    test(`Test: ${currentTest} - ${currentPattern.name}`, async ({
      page
    }) => {

      // await page.waitForLoadState('domcontentloaded');

      const screenshotPath = `./screenshots/${currentTheme}/${path.basename(currentPattern.path, '.html')}.png`

      expect(await page.screenshot()).toMatchSnapshot(screenshotPath, {
        threshold: 0.01,
        maxDiffPixelRatio: 0.1
      });

    });


  });



};