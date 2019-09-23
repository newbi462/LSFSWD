# User Interface II
Basic HTML and CSS are fundamental to any web site or web app on the internet. Being able to create layouts using CSS is the next progression on your journey to a full stack web developer. In this module we will cover CSS resets, box model layout, display types, and positioning.

#### At the end of this module, you should be able to:
* identify and use all properties in the box model
* use CSS display properties to build user interface
* implement a CSS reset and understand why it’s important for cross browser development

* Pro Tip
#### Write all code knowing someone else will be working on it after you.

# Prepare
Review each preclass resource before class.
* [Box model](https://www.youtube.com/watch?v=0tUUFdkTybs)
* []()
* []()

[CSS Box Model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
A brief overview of what the box model is and some of its properties.

[Relative vs. Absolute playground.](https://codepen.io/lambdaschool/pen/bxZNrX?editors=1100)
A simple code pen that allows you to see (and play with) the differences between absolute and relative positioning.

[Eric Meyer Reset](https://meyerweb.com/eric/tools/css/reset/)
One of the first main stream resets used in web development.

# Learn
#### Learn to identify and use all properties in the box model
The box model is a way we can position and layout HTML elements on a page using CSS. Being able to style elements using the box model is one of the most valuable skills you can learn when building user interfaces.

### Overview
## The Box Model
Every element you see on a web page is really just an interpretation of a pixel on a screen. Those small pixels start to get bigger as we add content and style to them. The box model is our first look into the layout out those pixels using CSS. As the name suggests, we are working with boxes. Lets define a box for our purposes as a HTML element with four sides. To visualize what this looks like, [check out this link from W3Schools](https://www.w3schools.com/css/css_boxmodel.asp).

You will notice there are some interesting words like ```margin```, ```border```, ```padding```, and ```content```. These words make up the CSS properties that we use to layout HTML elements on a page.

The box model allows us to layout the spacing and size of an individual HTML element.

### Content
This is where text and images are rendered

### Padding
The space between the content and the border

### Border
A border that we can style around the padding and content of a box

### Margin
The space between the border and everything else on a web page

#### Follow Along
## Box Model Tutorial
Let’s dive into a single HTML element and explore how the box model works.

Review this HTML:
```
<div class="box-example">
  I am a box!
</div>
```
We will use the ```.box-example``` class to test out the box model properties. Before we get started with the box mdoel, lets give our soon-to-be box a background of gray:
```
.box-example {
  background: gray;
}
```
Box Model: Content Area

The first part of the box model we need to understand is the ```content area```. In our HTML example, we currently have some text: ```"I am a box!"```. This text is taking up space and adding to the ```content area``` of our HTML element.

This is great but we can actual control the size of our content area by using ```width``` and ```height```. Let’s add a ```width``` of ```100px``` and a ```height``` of ```100px``` to see what happens:
```
.box-example {
  background: gray;

  /* Box Model: Content Area */
  width: 100px;
  height: 100px;
}
```
We can see our gray box now matches our 100x100 dimensions. Let’s see how ```padding``` works with our ```content area```.

Box Model: Padding
Padding is the area between our content area and the border bounds of our box.

Let’s add ```20px``` of ```padding``` to each side of our ```.box-example``` to see how this works:
```
.box-example {
  background: gray;

  /* Box Model: Content Area */
  width: 100px;
  height: 100px;

  /* Box Model: Padding */
  padding: 20px;
}
```
Notice that padding added ```20px``` to each side of our box! This can be an annoying side effect of using ```padding``` and we need to make sure we pay attention to how big our box is in case it doesn’t match up with our design.

There are ways to avoid this resizing behavior by using ```box-sizing: border-box``` to constrain the padding inside the border’s boundaries set by our ```width``` and ```height```.

Go ahead and add ```box-sizing: border-box``` to our example and see how it impacts our box.
```
.box-example {
  background: gray;

  /* Box Model: Content Area */
  width: 100px;
  height: 100px;

  /* Box Model: Padding */
  padding: 20px;
  box-sizing: border-box;
}
```
Notice how our example now adds ```padding``` from the border’s edge in to the box. This allows you to have way more control across your web site.

Box Model: Border
The border sits between our padding and margin.

Border is straight forward in its visualization but can be a little confusing with its syntax:
```
.box-example {
  background: gray;

  /* Box Model: Content Area */
  width: 100px;
  height: 100px;

  /* Box Model: Padding */
  padding: 20px;
  box-sizing: border-box;

  /* Box Model: Border */  
  border: 1px solid black;
}
```
You can see that border has 3 values in it! These are shorthand so we don’t have to write 3 properties every time.
* The first value is the ```border-width```
* The second value is the ```border-style```
* The third value is the ```border-color```
Imagine writing that out every time!

#### Box Model: Margin
Margin is the white space surrounding our border. ```Margin``` allows us to create distance between our element and the rest of the page.

Lets see how it works:
```
.box-example {
  background: gray;

  /* Box Model: Content Area */
  width: 100px;
  height: 100px;

  /* Box Model: Padding */
  padding: 20px;
  box-sizing: border-box;

  /* Box Model: Border */  
  border: 1px solid black;

  /* Box Model: Margin */  
  margin: 20px;
}
```
We just added ```20px``` of ```margin``` to each side of our box. You have now explored each part of the box model!

[Click here to see the final tutorial code!](https://codepen.io/lambdaschool/pen/qJbZaM?editors=1100)

## Challenge
[Take the code from the tutorial](https://codepen.io/lambdaschool/pen/qJbZaM?editors=1100) and add 4 new boxes. Update each box with unique box model values and see how they interact with each other.
