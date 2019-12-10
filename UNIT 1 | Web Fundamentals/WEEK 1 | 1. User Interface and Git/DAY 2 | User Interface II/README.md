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

## Dig Deeper
[Box Sizing - Best practice and history](https://css-tricks.com/box-sizing/)
* Box sizing directly impacts the box model and you need to know why it's there and how it impacts your user interfaces.

Learn to use CSS display properties to build user

The display property in CSS is another vital part of styling layout. Being able to understand the difference between ```block``` and ```inline``` is fundamental to user interface development. You can craft any website using ```inline-block``` and the other display values.

### Overview
## CSS Display Property
We have learned about the box model but found it has some limitations in how we can render our elements to match a layout.

We can leverage the CSS property ```display``` to render HTML elements as well as create simple layouts. Think of ```display``` as the visual representation of your HTML.

There are many ```display``` values available to us. We will focus on several ```display``` values that lend themselves to building simple layouts.
```
display: none
```
When we use ```display: none```, we are actually removing the HTML element from the page’s flow. This can be a powerful tool for layout when we need to temporarily remove content or toggle it off and on with JavaScript

### none Traits
* Removes element from the document
* Not to be confused with visbility: hidden which does not remove the element from the document

### none Syntax
```
  .example {
    display: none;
  }
```
#### display: inline
inline elements can be nested inside of other elements without disrupting the flow of content.

Some example ```inline``` elements are ```<a>``` or ```<span>```. Both the ```<a>``` and ```<span>``` elements are usually wrapped around content that won’t create a break in the page flow.

Click [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements#Elements) for a list of elements that ```display: inline``` as their default property.

#### inline Traits
* height and width properties have no effect
* Only takes up as much space as its content
* block elements are not allowed to be nested inside inline elements
* Can use vertical-align to position vertically
* Can use text-align to position horizontally

#### inline Syntax
```
  .example {
    display: inline;
  }
```

### display: block
Elements that are displayed as ```block``` will take up as much space as their parent element will allow. This behavior is great for some layout designs however, if you want to control a ```block``` elements’ size, you will need to employ both ```width``` or ```height``` depending on your needs.

block elements will break the flow of content on a new line. You will find that block elements are the backbone of most layouts and are vital to building any web page.

Some example ```block``` elements are ```<div>``` or ```<p>```. You can nest other ```block``` or ```inline``` elements inside of a ```block``` element.

Click [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements#Elements) for a list of elements that ```display: block``` as their default property

#### block Traits
* Starts on a new line
* Takes up as much width as its parent element will allow
* Both height and width can be used to adjust sizing of the element
* Can nest both inline and block elements
* Can use margin: auto to center horizontally
* Vertical centering can be tricky without the flex box module. Click this link for an amazing guide on centering anything.

#### block Syntax
```
  .example {
    display: block;
  }
```
### display: inline-block
Sometimes we don’t want a ```block``` element’s abrupt behavior in our layouts but we also want the control it can provide with ```width``` and ```height```.

That is exactly what ```inline-block``` accomplishes. An element that has ```inline-block``` applied to it has the default behavior of an ```inline``` element with the added bonus of controlling the size using ```width``` and ```height```!

#### inline-block Traits
* Inline behavior allows for elements to stack next to each other
* Both width and height can be used to control the size of the element
#### inline-block Syntax
```
  .example {
    display: inline-block;
  }
```
Use Display For Layout

Now that we have a better understanding of what the display property can do, let’s take a look at how we can employ it for layout.

We know that ```display: block``` takes up as much horizontal space as its parent’s element. What if we wanted to get two block level elements to stack next to each other? We can utilize the hybrid ```display: inline-block``` to accomplish this.

Take a look at this HTML:
```
<header>
  <h1>Sweet Eats Bakery</h1>
  <nav>
    <a href="#">About</a>
    <a href="#">Muffins</a>
    <a href="#">Cookies</a>
    <a href="#">Catering</a>
  </nav>
</header>
```
In its current form without CSS we can see that there is a ```block``` level ```<header>``` containing two more block level elements. That means the ```<h1>``` and ```<nav>``` aren’t going to cooporate in our layout.

We will need to utilize our ```inline-block``` skills here. Review this CSS:
```
header h1 {
  display: inline-block;
}

header nav {
  display: inline-block;
}
```
Notice we overwrote both default ```display``` values. The updated ```inline-block``` will allow our ```<h1>``` and ```<nav>``` to stack up horizontally because they are now being treated as ```inline``` elements that respect ```width``` and ```height```.

At this point it’s now a matter of using the ```box-model``` to push elements around where we want them. This layout approach pales in comparison with the ```flex box module``` but it’s great to get a solid understanding of for older browsers.

## Follow Along
Follow the instructions found here to explore several display property values: [Click me to go to the tutorial](https://codepen.io/lambdaschool/pen/oabLjN)

## Challenge
Go to your favorite website and use the developer tools to update various elements on the page. Explore each of the following display property values:
* none
* block
* inline
* inline-block
Stretch yourself by using other display properties we haven’t discussed yet by [clicking here](https://developer.mozilla.org/en-US/docs/Web/CSS/display).

Learn to implement a CSS reset and understand why it’s important for cross browser development

CSS resets allow development teams to have a consistent rendering experience across multiple browsers. Resets are common in the web development industry and although they may not be right every situation, knowing about them and how they are used it critical to most projects.

#### Overview
## What is a CSS Reset?
A CSS reset is when a developer will remove all default styling provided by browsers. Usually a CSS reset will set all box model and font properties to 0 or inherit.

Example code from Eric Meyer’s popular CSS reset:
```
html, body, div, span, applet, object, iframe,  
h1, h2, h3, h4, h5, h6, p, blockquote, pre,  
a, abbr, acronym, address, big, cite, code,  
del, dfn, em, img, ins, kbd, q, s, samp,  
small, strike, strong, sub, sup, tt, var,  
b, u, i, center,  
dl, dt, dd, ol, ul, li,  
fieldset, form, label, legend,  
table, caption, tbody, tfoot, thead, tr, th, td,  
article, aside, canvas, details, embed,  
figure, figcaption, footer, header, hgroup,  
menu, nav, output, ruby, section, summary,  
time, mark, audio, video {  
margin: 0;  
padding: 0;  
border: 0;  
font-size: 100%;  
font: inherit;  
vertical-align: baseline;  
}
```
This type of reset is beginner friendly because it forces you to create your own styles from scratch.

### Alternative Resets
There are other more tailored resets that companies will use that are very specific to their needs. Some companies will incorporate their own style guides into a reset so that all new developers joining the company are aligned from the beginning.

A popular alternative to just setting everything to zero is called Normalize. Normalize focuses on only fixing the cross browser problems and adding your own styles. The focus here is to utilize the positive sides of default browser styles. If you would like to learn more about normalize it would be to your advantage as many companies use this to build their projects.

Link to normalize: https://necolas.github.io/normalize.css/

### Implementation
Because resets knock out most default styling from the browser, you will want to place your reset code at the top of your CSS page. If you put the reset at the bottom of your page, it will knock out all your styles due the cascade of CSS.

If you choose to use a CSS reset, make it your first priority to use it at the top of your CSS files when starting a project, otherwise it will be more of a headache than a help.

#### Follow Along
### CSS Reset In Action
The best way to see a reset in action is to have some existing code with default settings in it. Then to add a reset to see the huge difference. Follow these instructions to see how impactful a reset it:

Open this codepen: https://codepen.io/lambdaschool/pen/bjWbrx?editors=1000 Go to Eric Meyer’s reset page: https://meyerweb.com/eric/tools/css/reset/ Copy and paste the CSS reset code Paste the code in the CSS section of the codepen you have open Observe the huge changes that just occured

Notice how your code now looks lifeless. This is pretty jarring at first, but it gives us an opportunity now style these tags the way the designer wants without being worried about cross browser issues.

#### Challenge
### See The Difference: Reset vs Normalize
Use this codepen: https://codepen.io/lambdaschool/pen/bjWbrx?editors=1000

Implement the eric meyer reset and take note of how much changed. Then implement normalize instead of the eric meyer reset. Notice the subtle but important differences. Make a list of changes you see between the two approaches by inspecting the code in your web developer tools and looking at the CSS properties on each element.

## Project
[User Interface Project: Great Idea Web Page](https://github.com/LambdaSchool/User-Interface)
You will build a web page based off a design file provided to you. This project has two challenges:

Build the web page using inline-block layout techniques
This 30 minute walkthrough has been very helpful if you’re a first time user of git and and IDE: https://youtu.be/iEYHqj9rT0Y

## Review
Class Recordings
You can use class recordings to help you master the material.

[User Interface II with Pace Ellsworth](https://youtu.be/LP5lHFzS2Is)
User Interface II

[All previous recordings](https://learn.lambdaschool.com/archive/FSW/module/recGvXyWT6AvGtMHR)

## Demonstrate Mastery
To demonstrate mastery of this module, you need to complete and pass a code review on each of the following:

### Objective challenge:
[Take the code from the tutorial](https://codepen.io/lambdaschool/pen/qJbZaM?editors=1100) and add 4 new boxes. Update each box with unique box model values and see how they interact with each other.

### Objective challenge:
Go to your favorite website and use the developer tools to update various elements on the page. Explore each of the following display property values:

none
block
inline
inline-block
Stretch yourself by using other display properties we haven’t discussed yet by [clicking here](https://developer.mozilla.org/en-US/docs/Web/CSS/display).

### Objective challenge:
See The Difference: Reset vs Normalize
Use this codepen: https://codepen.io/lambdaschool/pen/bjWbrx?editors=1000

Implement the eric meyer reset and take note of how much changed. Then implement normalize instead of the eric meyer reset. Notice the subtle but important differences. Make a list of changes you see between the two approaches by inspecting the code in your web developer tools and looking at the CSS properties on each element.

### Project: [User Interface Project: Great Idea Web Page](https://github.com/LambdaSchool/User-Interface)
