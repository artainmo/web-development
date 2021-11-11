# HTML

Consists of elements.<br>
Elements consist of one opening and one closing tag and content between the tags like this `<p>Hello World</p>`.<br>
Child/nested elements are elements inside elements, they can inherit styling from their parent elements.<br>
One element per line and nested elements should be indented once compared to their direct parent element for readable code.<br>
Attributes are content added to the opening tag of an element, it has a name and is equal to a value. One common attribute is id to identify your elements.

HTML files should have the .html extension and start with `<!DOCTYPE html>`.<br>
All the code should be in between `<html></html>`.<br>
The `<header></header>` tags should follow and they allow metadata (info that does not get displayed). As nested element it can contain the `<title>` element which will give a title on browser tab, the header element should come before the body element.

All content between body tags get displayed on screen `<body></body>`.<br>
Different heading types exist `<h1>` for the main heading and for subheadings: `<h2> <h3> <h4> <h5> <h6>`.<br>
The div tag is used to group content together or divide the content `<div></div>`, the `<p>` and `<span>` tags too.<br>
The `<em>` tag allows for italic text and <strong> tag for bold text.<br>
The `<br>` tag has no closing tag and refers to a line break.<br>
The `<ul>` or `<ol>` nested with `<li>` tags allow for the creation of a bullet-pointed-list or numbered-list.

The `<img />` is a self-closing tag used to display images, it must contain an src attribute with the value containing the path/link towards the image, the alt attribute can be used to add a description, this can be positive for blind people, SEO or browsers that cannot render the image. (graphic images can be made using Canva)<br>
The `<video></video>` tags are used to display videos, in between tags a text for when the video cannot be displayed, in opening tag src attribute should link to video. Control attribute can be used to include basic video controls like pause...<br>
For audio use `<source src=linkToAudio type=audioType controls>`

To link/hyperlink(same) to other webpages you can use an anchor element like this `<a href=hyperlink/relativePath>text/image/buttton..</a>`, by using the target attribute as such target="_blank" the pages will be opened in a new window. <br>
Linking to same page is possible with href="#idOfElement".

Comments begin with <!-- and end with -->.

Inside `<table></table>` tags a table can be created. By using `<tr></tr>` you can define rows wherein you can define columns/fill-data with `<td><td>`.<br>
With `<th></th>` table headings can be defined with attribute scope one can choose 'col' or 'row'.<br>
Attribute rowspan and colspan can be used to span one block over multiple rows/columns. `<tbody>`, `<thead>` and `<tfoot>` are used to separate table's body, header, footer.

To create a form use `<form></form>` that can have attribute action (where the information is sent) and method (POST).<br>
In between tags can contain text and must contain an input element, the input element must take as attribute type(text,password,number,checkbox) and name(id) and potentially value(default text).<br>
Labels are used to give description to form, their advantage is that when clicking on them they focus on the form, they go as follows `<label for=idInput></label>`.<br>
Step attribute in input with type number allows to increment, decrement the number with arrows.<br>
For input slider set type attribute to range, min and max can be used as attributes to be more specific.<br>
For radio buttons, which allow to choose one option between multiple checkboxes, set type attribute to radio.<br>
For a drop-down menu use the select tags that contain option tags.<br>
A datalist is an input wherein you can write and an appropriate drop-down will follow, this is possible using the datalist tags containing the option tags.<br>
`<textarea></textarea>` can be used to take larger text input.<br>
A form element must always end with a submit button this can be created with an input element containing the type attribute equaling submit.<br>
When a `<form>` is submitted, the name of the fields that accept input and the value of those fields are sent as name=value pairs.

The required attribute in an input element can force the filling of that form.<br>
The min/minlength and max/maxlength attributes in an input element can force the number-or-range/text to be in between certain values / to have a certain length.<br>
The patern element can indicate what chars can be used or not.

For more readable, SEO-friendly, blind-people-friendly code instead of divs use:<br>
Nav tag can be used to indicate the navigation links section.<br>
main tag can be used to indicate content of page.<br>
footer tag can be used to indicate the footer part of the page.<br>
section tags can encapsulate elements with the same theme.<br>
aside tags are used to indicate extra information of an article or section.<br>
figure tag is used to encapsulate media, the media post can receive a description with figcaption, audio can be encapsulated with audio tag.
