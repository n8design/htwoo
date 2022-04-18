// @ts-check
const {
  test,
  expect
} = require('@playwright/test');

const path = require('path');

const patternTool = require('../tools/get-test');
const patternsToTest = patternTool.getPatterns();

let currentPattern;
let currentTheme = 'teal';

test.beforeEach(async ({
  page
}) => {

  await page.goto(`http://localhost:3000/patterns/${currentPattern.path}`);

});



for (const currentTest in patternsToTest) {
  // console.log(currentPattern);

  currentPattern = patternsToTest[currentTest];

  test.describe(`Theme ${currentTheme}`, () => {

    test(`Test: ${currentTest} - ${currentPattern.name}`, async ({
      page
    }) => {

      // await page.waitForLoadState('domcontentloaded');

      const screenshotPath = `./screenshots/teal/${path.basename(currentPattern.path, '.html')}.png`

      expect(await page.screenshot()).toMatchSnapshot(screenshotPath, {
        threshold: 0.01,
        maxDiffPixelRatio: 0.1
      });

    });


  });



};