# CSS
Used to style HTML.

## Table of contents
  - [Syntax](#Syntax)
  - [Selector](#Selector)
  - [CSS visual rules](#CSS-visual-rules)
  - [Box model](#Box-model)
  - [Display and positioning](#Display-and-positioning)
  - [Color](#Color)
  - [Typography](#Typography)

## Syntax
CSS declarations contain a property (ex. color) and a value (ex. blue), example `color: blue;`<br>
CSS selectors consist of a tag (ex. p, also called the type selector) followed by braces like a function ({}) filled with declarations, to define a style for a particular tag.

The usual syntax for CSS is external stylesheet, consisting of selectors inside a .css file, to style an HTML based on that css file, use the element `<link rel="stylesheet" href="pathToCSS">` with rel for relationship which is usually set in the head section of HTML page.<br>
But inline and internal stylesheet also exist.<br>
In HTML elements can have the attribute style, that can directly be set with a css declaration (inline).<br>
In the header element of an HTML file, style element can be created which will contain selectors like in a .css, applicable for the elements in the .HTML file.<br>

## Selector
Type selectors refer to HTML tags, multiple can be used on one selector and the universal type selector `(*)` refers to all the tags.<br>
CSS classes can also be made, HTML elements must use the class attribute to use them, CSS classes have a type selector = .name.<br>
CSS ids can also be made those are classes that each only style one HTML element by using the id attribute, their type selector = #name.<br>
You can also create selectors based on HTML element attributes, if an element contains an attribute ([attribute]) or if an element contains an attribute that is-equal-to/contains a value ([attribute*=value]) or an element containing a tag/type and attribute (type[attribute]).<br>
To target an HTML element of a particular type with a particular class create a selector with type.className.<br>
Descendants are child elements a parent element can style its child elements with a class attribute and selector .className descendantType or without a class attribute parentType childType.<br>
Pseudo-class selectors are added to the selector type (ex. p:focus) and allow to change styling during an action on the site here are some of them :focus, :visited, :disabled, and :active.

If mutliple css selectors are applicable on an HTML element the most specific one receives priority, id is more specific than class which is more specific than type. <br>
!important can be used at end of declaration to automatically make it the most specific one (priority), but its use is considerd bad practice.<br>
Good practice when writing a .css is to write the file from lowest priority selectors to highest priority selectors.<br>

## CSS visual rules
As a declaration property font-family can be used to indicate typeface/font family.<br>
To change size of text use font-size.<br>
To change how bold or thin text appears use font-weight.<br>
text-align can be used to position text relative to its parent HTML element.<br>
color indicates the text color, background-color and background-image are self-explanatory.<br>
opacity can be used to indicate the transparancy of the text.<br>

## Box model
Defines set of properties that defines how much space an HTML element takes.<br>
Height and width properties are self-explanatory.<br>
The border property can receive three values one for the border width, style and color.<br>
border-radius property can be used to make the square border less square.<br>
The space between the borders of the box and its content is known as padding, even specifying it for one side of the box is possible.<br>
Margin property refers to the space outside of the box, whereby each side's margin can be specified individually, usually pixels are used as value but auto value can center the element in its containing element automatically.<br>
Margin collapse is a concept whereby horizontal(side-by-side elements) margin between two HTML elements logically add up but vertical(up-under elements) margins do not, horizontal margins become the biggest margin between the two.<br>
Different screen sizes can narrow or widen elements, limiting this is possible with min-width, min-height, max-width, max-height.<br>
Overflow occurs when child element takes more space than parent element (this can happen when screensize is limited), the overflow property can be used by the parent to decide how to handle it, values are hide (hide everything that overflows) scroll (scroll bar to display whole) or show.<br>
The visibility of an HTML element can be set to hidden, so that it takes the place without displaying its contents.

In all (*), margin and padding is set to 0. This is often first selector of an external stylesheet it resets the default values a browser has.

A default box-model is used but it can be modified with `* { border-size: border-box; }`. The border-box model is not affected by border thickness or padding, a lot of developers prefer this.

Google Chrome devTools can be used to view and adjust box dimensions from the browser.

## Display and positioning
Use the position property with static, relative, absolute, fixed, sticky.<br>
Static is default value leading to regular left-alignment.<br>
Relative leads to regular left-alignment but allows the use of offset properties and z-index, relative to default position.<br>
Absolute leads to an element ignored by others thus element overlap can happen, it sits relative to closest parent element.<br>
When an element is set to fixed it will stay at least on top of screen when scrolling down or at least bottom screen when scrolling up.<br>
When an element is set to sticky it will keep its perfect position relative to the screen when scrolling, if the postion has been set with offset properties.

Offset properties can also be used to precisely position elements, those are top, bottom, right, left, they can be used to move the position x pixels from the property.<br>
z-index describes the depth of elements, thus which elements come above other ones, with a higher z-index leading to a more forward sitting element.<br>
float property can be set to right or left and simply places the element against the left or right side of the screen. If elements bump into each other as a consequence of float, clear property (right, left, both values) can be used to avoid them bumping on one side or both sides.

The display property indicates if elements are horizontally positioned.<br>
The inline value is the default one, here the next element comes horizontally next to the prior element, but height and width properties cannot be used.<br>
The block value indicates the next element comes vertically next to the prior element and takes whole screen width.<br>
The inline-block value allows to have the next element horizontally next to the prior element, while being able to specify the height and width properties.

## Color
color property refers to color of text and backgroud-color to color of background.

Pre-made colors can be used by indicating their name for example, brown, sienna... Here is the list https://developer.mozilla.org/en-US/docs/Web/CSS/color_value

Custom colors can be created using hexadecimal, use an online hexadecimal generator for the wanted hexadecimal code.<br>
Another way to create custom colors is with the RGB system as value use rgb(R, G, B) with a value for red, green and blue between 0-250.<br>
The HSL or hue-saturation-lightness color scheme is another alternative for custom colors, it consist of the hue value between 0-360 (360degree color circle), the saturation and lightness as percentages, as value use hsl(H, S, L).

Opacity also called alpha can be added onto all custom color representations, with for example rgba(R, G, B, A), hsla(H, S, L, A) (A = 0 - 1) or adding two digits to hexadecimal with 6digits and one digit to hexadecimal with 3digits.

## Typography
The property font-family can be used to set fonts to text.<br>
Here is a list of safe fonts https://www.cssfontstack.com/, safe meaning they will appear the same on all browsers. They can be used as fall-back fonts if favorite font not available, indicated by 'font-family: font1, font2(fallbackfont)'.<br>
Fonts can also be imported and used safely. Services like 'google fonts' can be used for example.<br>
To import the 'link HTML element' can be used inside the header element, with the font's link generated by google fonts.<br>
To import from the css file use @font-face with inside it the font-family name, and 'src: url('localPathToFont') format(format);', by downloading the font on local computer from google fonts, and ideally download and import the TTF, WOFF and WOFF2 formats for multi-browser compatibility.

font-weight controls bold-thin spectrum and can take values: bold, bolder, lighter, normal or 1 - 1000.<br>
font-style can be set to normal or italic.<br>
The text-transform property can be set to uppercase or lowercase.<br>
Letter-spacing, word-spacing, line-height and text-align can also be described, as value pixels can be used or em which is relative to font.

# Resources
[Codecademy - Learn CSS](https://www.codecademy.com/learn/learn-css) - 10h<br>
