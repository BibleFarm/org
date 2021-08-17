// run in linux terminal just like this: node node_to_gen_images_1200x630_CustomerRequests.js
// leave this alone 
const puppeteer = require('/home/demo/node_modules/puppeteer');

(async () => {

const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 630}  });

const page = await browser.newPage();

// BEGIN paste here:

await page.goto('file:///media/demo/ALL-MY-DATA/org/_ALL-UIs/Create_Pages_And_Images/Sharing_Items_Mugs/Pages_Customer_Requests/_Tanya_DE_S-135.html'); await page.waitForTimeout(1000); await page.screenshot({ path: '/media/demo/ALL-MY-DATA/org/_ALL-UIs/Create_Pages_And_Images/Sharing_Items_Mugs/Images/_Tanya_DE_S-135.png' });
await page.goto('file:///media/demo/ALL-MY-DATA/org/_ALL-UIs/Create_Pages_And_Images/Sharing_Items_Mugs/Pages_Customer_Requests/_Tanya_033_ES_Marco.html'); await page.waitForTimeout(1000); await page.screenshot({ path: '/media/demo/ALL-MY-DATA/org/_ALL-UIs/Create_Pages_And_Images/Sharing_Items_Mugs/Images/_Tanya_033_ES_Marco.png' });
await page.goto('file:///media/demo/ALL-MY-DATA/org/_ALL-UIs/Create_Pages_And_Images/Sharing_Items_Mugs/Pages_Customer_Requests/_Tanya_033.html'); await page.waitForTimeout(1000); await page.screenshot({ path: '/media/demo/ALL-MY-DATA/org/_ALL-UIs/Create_Pages_And_Images/Sharing_Items_Mugs/Images/_Tanya_033.png' });

// END paste here:

await browser.close();

})();

 
