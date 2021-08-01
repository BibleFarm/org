// run in linux terminal just like this: node node_to_gen_images_5000x5000.js
// leave this alone 
const puppeteer = require('/home/demo/node_modules/puppeteer');

(async () => {

const browser = await puppeteer.launch({      defaultViewport: {width: 6000, height: 6000}  });

const page = await browser.newPage();

// BEGIN paste here:

await page.goto('file:///media/demo/ALL-DATA/Github/local-shop/Create_Pages_And_Images/RedBubble_Square/Pages/Sample.html'); await page.waitForTimeout(1000); await page.screenshot({ path: '/media/demo/ALL-DATA/Github/local-shop/Create_Pages_And_Images/RedBubble_Square/Images/Sample.png' });

// END paste here:

await browser.close();

})();


