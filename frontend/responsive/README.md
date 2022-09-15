Responsive web design basics: https://web.dev/responsive-web-design-basics/
“Responsive web design, responds to the needs of the users and the devices they're using. The layout changes based on the size and capabilities of the device.”
“Pages optimized for a variety of devices must include a meta viewport tag in the head of the document.”
“Using the meta viewport value width=device-width instructs the page to match the screen's width in device-independent pixels.”
“This allows the page to reflow content to match different screen sizes, whether rendered on a small mobile phone or a large desktop monitor.”
“Some browsers keep the page's width constant when rotating to landscape mode, and zoom rather than reflow to fill the screen. Adding the value initial-scale=1 instructs browsers to establish a 1:1 relationship between CSS pixels and device-independent pixels regardless of device orientation, and allows the page to take advantage of the full landscape width.”
“<meta name="viewport" content="width=device-width, initial-scale=1”>”
“An image has fixed dimensions and if it is larger than the viewport will cause a scrollbar. A common way to deal with this problem is to give all images a max-width of 100%. This will cause the image to shrink to fit the space it has, should the viewport size be smaller than the image.”
“Media queries are simple filters that can be applied to CSS styles. They make it easy to change styles based on the types of device rendering the content, or the features of that device, for example width, height, orientation, ability to hover, and whether the device is being used as a touchscreen.”
“To view your page under different breakpoints: Open DevTools and then turn on Device Mode. This opens in responsive mode by default.”
