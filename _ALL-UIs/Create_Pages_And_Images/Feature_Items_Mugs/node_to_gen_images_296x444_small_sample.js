// run in linux terminal just like this: node node_to_gen_images_296x444_small_sample.js
// leave this alone 
const puppeteer = require('/home/demo/node_modules/puppeteer');

(async () => {

const browser = await puppeteer.launch({      defaultViewport: {width: 296, height: 444}  });

const page = await browser.newPage();

// BEGIN paste here:
await page.goto('file:///media/demo/ALL-MY-DATA/org/_ALL-UIs/Create_Pages_And_Images/Feature_Items_Mugs/Pages/1-Chronicles-16-11.html'); await page.waitForTimeout(1000); await page.screenshot({ path: '/media/demo/ALL-MY-DATA/org/m/1-Chronicles-16-11.png' });
await page.goto('file:///media/demo/ALL-MY-DATA/org/_ALL-UIs/Create_Pages_And_Images/Feature_Items_Mugs/Pages/1-Chronicles-16-34.html'); await page.waitForTimeout(1000); await page.screenshot({ path: '/media/demo/ALL-MY-DATA/org/m/1-Chronicles-16-34.png' });
await page.goto('file:///media/demo/ALL-MY-DATA/org/_ALL-UIs/Create_Pages_And_Images/Feature_Items_Mugs/Pages/1-Chronicles-16-8.html'); await page.waitForTimeout(1000); await page.screenshot({ path: '/media/demo/ALL-MY-DATA/org/m/1-Chronicles-16-8.png' });
await page.goto('file:///media/demo/ALL-MY-DATA/org/_ALL-UIs/Create_Pages_And_Images/Feature_Items_Mugs/Pages/1-Chronicles-17-11.html'); await page.waitForTimeout(1000); await page.screenshot({ path: '/media/demo/ALL-MY-DATA/org/m/1-Chronicles-17-11.png' });
await page.goto('file:///media/demo/ALL-MY-DATA/org/_ALL-UIs/Create_Pages_And_Images/Feature_Items_Mugs/Pages/1-Chronicles-22-13.html'); await page.waitForTimeout(1000); await page.screenshot({ path: '/media/demo/ALL-MY-DATA/org/m/1-Chronicles-22-13.png' });
await page.goto('file:///media/demo/ALL-MY-DATA/org/_ALL-UIs/Create_Pages_And_Images/Feature_Items_Mugs/Pages/1-Chronicles-29-11.html'); await page.waitForTimeout(1000); await page.screenshot({ path: '/media/demo/ALL-MY-DATA/org/m/1-Chronicles-29-11.png' });
await page.goto('file:///media/demo/ALL-MY-DATA/org/_ALL-UIs/Create_Pages_And_Images/Feature_Items_Mugs/Pages/1-Chronicles-29-12.html'); await page.waitForTimeout(1000); await page.screenshot({ path: '/media/demo/ALL-MY-DATA/org/m/1-Chronicles-29-12.png' });

// END paste here:

await browser.close();

})();

 
