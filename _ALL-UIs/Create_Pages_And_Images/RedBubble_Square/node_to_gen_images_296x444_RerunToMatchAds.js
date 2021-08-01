// run in linux terminal just like this: node node_to_gen_images_296x444_RerunToMatchAds.js
// leave this alone 
const puppeteer = require('/home/demo/node_modules/puppeteer');

(async () => {

const browser = await puppeteer.launch({      defaultViewport: {width: 296, height: 444}  });

const page = await browser.newPage();

// BEGIN paste here:

await page.goto('file:///media/demo/ALL-DATA/Github/local-shop/Create_Pages_And_Images/Feature_Items_Mugs/Pages/1-Peter-5-7.html'); await page.waitForTimeout(1000); await page.screenshot({ path: '/media/demo/ALL-DATA/Github/local-shop/Create_Pages_And_Images/Feature_Items_Mugs/Images/1-Peter-5-7.png' });
await page.goto('file:///media/demo/ALL-DATA/Github/local-shop/Create_Pages_And_Images/Feature_Items_Mugs/Pages/1-Thessalonians-5-17.html'); await page.waitForTimeout(1000); await page.screenshot({ path: '/media/demo/ALL-DATA/Github/local-shop/Create_Pages_And_Images/Feature_Items_Mugs/Images/1-Thessalonians-5-17.png' });
await page.goto('file:///media/demo/ALL-DATA/Github/local-shop/Create_Pages_And_Images/Feature_Items_Mugs/Pages/John-10-27.html'); await page.waitForTimeout(1000); await page.screenshot({ path: '/media/demo/ALL-DATA/Github/local-shop/Create_Pages_And_Images/Feature_Items_Mugs/Images/John-10-27.png' });
await page.goto('file:///media/demo/ALL-DATA/Github/local-shop/Create_Pages_And_Images/Feature_Items_Mugs/Pages/Exodus-14-14.html'); await page.waitForTimeout(1000); await page.screenshot({ path: '/media/demo/ALL-DATA/Github/local-shop/Create_Pages_And_Images/Feature_Items_Mugs/Images/Exodus-14-14.png' });

// END paste here:

await browser.close();

})();


