 // leave this alone
const puppeteer = require('/home/demo/node_modules/puppeteer');

(async () => {

const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 630}  });

const page = await browser.newPage();

// BEGIN paste here:
await page.goto('file:///media/demo/ALL-MY-DATA/org/_ALL-UIs/Create_Pages_And_Images/Sharing_Items_Mugs/Pages/1-Chronicles-16-11.html'); await page.waitForTimeout(1000); await page.screenshot({ path: '/media/demo/ALL-MY-DATA/org/share/mugs-images/1-Chronicles-16-11.png' });
await page.goto('file:///media/demo/ALL-MY-DATA/org/_ALL-UIs/Create_Pages_And_Images/Sharing_Items_Mugs/Pages/1-Chronicles-16-34.html'); await page.waitForTimeout(1000); await page.screenshot({ path: '/media/demo/ALL-MY-DATA/org/share/mugs-images/1-Chronicles-16-34.png' });
await page.goto('file:///media/demo/ALL-MY-DATA/org/_ALL-UIs/Create_Pages_And_Images/Sharing_Items_Mugs/Pages/1-Chronicles-16-8.html'); await page.waitForTimeout(1000); await page.screenshot({ path: '/media/demo/ALL-MY-DATA/org/share/mugs-images/1-Chronicles-16-8.png' });
await page.goto('file:///media/demo/ALL-MY-DATA/org/_ALL-UIs/Create_Pages_And_Images/Sharing_Items_Mugs/Pages/1-Chronicles-17-11.html'); await page.waitForTimeout(1000); await page.screenshot({ path: '/media/demo/ALL-MY-DATA/org/share/mugs-images/1-Chronicles-17-11.png' });
await page.goto('file:///media/demo/ALL-MY-DATA/org/_ALL-UIs/Create_Pages_And_Images/Sharing_Items_Mugs/Pages/1-Chronicles-22-13.html'); await page.waitForTimeout(1000); await page.screenshot({ path: '/media/demo/ALL-MY-DATA/org/share/mugs-images/1-Chronicles-22-13.png' });
await page.goto('file:///media/demo/ALL-MY-DATA/org/_ALL-UIs/Create_Pages_And_Images/Sharing_Items_Mugs/Pages/1-Chronicles-29-11.html'); await page.waitForTimeout(1000); await page.screenshot({ path: '/media/demo/ALL-MY-DATA/org/share/mugs-images/1-Chronicles-29-11.png' });
await page.goto('file:///media/demo/ALL-MY-DATA/org/_ALL-UIs/Create_Pages_And_Images/Sharing_Items_Mugs/Pages/1-Chronicles-29-12.html'); await page.waitForTimeout(1000); await page.screenshot({ path: '/media/demo/ALL-MY-DATA/org/share/mugs-images/1-Chronicles-29-12.png' });
await page.goto('file:///media/demo/ALL-MY-DATA/org/_ALL-UIs/Create_Pages_And_Images/Sharing_Items_Mugs/Pages/1-Chronicles-29-13.html'); await page.waitForTimeout(1000); await page.screenshot({ path: '/media/demo/ALL-MY-DATA/org/share/mugs-images/1-Chronicles-29-13.png' });
await page.goto('file:///media/demo/ALL-MY-DATA/org/_ALL-UIs/Create_Pages_And_Images/Sharing_Items_Mugs/Pages/1-Chronicles-29-14.html'); await page.waitForTimeout(1000); await page.screenshot({ path: '/media/demo/ALL-MY-DATA/org/share/mugs-images/1-Chronicles-29-14.png' });
await page.goto('file:///media/demo/ALL-MY-DATA/org/_ALL-UIs/Create_Pages_And_Images/Sharing_Items_Mugs/Pages/1-Chronicles-29-15.html'); await page.waitForTimeout(1000); await page.screenshot({ path: '/media/demo/ALL-MY-DATA/org/share/mugs-images/1-Chronicles-29-15.png' });
await page.goto('file:///media/demo/ALL-MY-DATA/org/_ALL-UIs/Create_Pages_And_Images/Sharing_Items_Mugs/Pages/1-Chronicles-29-17.html'); await page.waitForTimeout(1000); await page.screenshot({ path: '/media/demo/ALL-MY-DATA/org/share/mugs-images/1-Chronicles-29-17.png' });

// END paste here:

await browser.close();

})();

