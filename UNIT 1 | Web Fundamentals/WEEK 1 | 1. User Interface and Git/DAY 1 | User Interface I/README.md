# User Interface I
Even the most complex web applications start with simple HTML elements. Knowing how to use HTML and style it with CSS has a massive impact for your future as a developer. This module will explore the fundamentals of HTML and CSS.

At the end of this module, you should be able to:
* describe and use semantic HTML tags to markup content
* demonstrate the use of CSS selectors to style markup
* demonstrate CSS specificity and inheritance to create and update styles


# Prepare
Review each preclass resource before class.

## Videos
* [Semantic-HTML](https://www.youtube.com/watch?v=mJkb00lk6rk)
* [CCS Selectors](https://www.youtube.com/watch?v=71Re0ld_ES0)
* [CSS Specificity](https://www.youtube.com/watch?v=uN-yD5usiR0)

[Interneting Is Hard: Semantic HTML](https://internetingishard.com/html-and-css/semantic-html/)
An awesome guide on semantic HTML and it’s use cases.

[Specificity Weight](https://www.htmldog.com/guides/css/intermediate/specificity/)
By simply adding numbers to elements, classes, and IDs we can make specificity weight problems a thing of the past.


# Learn
Learn to describe and use semantic HTML tags to markup content
Being able to provide meaning to your content is exactly what semantic HTML aims to do. By having well-formed and semantic HTML we are building a solid foundation for our applications and websites to grow.

### Overview
## HTML Standards
To understand the use of HTML we first need to understand why we even have it in the first place. When the Internet was in its infancy, there were many organizations writing their own markup for their own communication. Company X would use specific tags that made logical sense to them while Company Y would write their own unique tags.

As the Internet expanded to impact more people across many organizations and countries, a unification of meaning was needed. That unification is what we call the World Wide Web Consortium (W3C). The W3C was formed in 1994 to create international standards for the World Wide Web. We use the ever-changing W3C standards today. You can find the official standards of the W3C here: https://www.w3.org/standards/

If we didn’t have standards for the web we would end up with thousands of lines of markup to describe the same thing. In fact, because browsers can render matching XML tags, we could experience this ourselves. Let’s look at an example:
```
<lambdaSchool>My custom Lambda tag!</lambdaSchool>  
```
The ```<lambdaSchool>``` tag renders correctly in the browser! We can even style our newly created tag:

```
lambdaSchool {
  color: red;
}
```
This is a small example of why we need standards when writing HTML. If we could write custom tags for everything we would be in a state of constant confusion across development teams and organizations.

## Semantic HTML5
The W3C uses the word recommended to describe the most up to date web standards. The current recommended standard for HTML markup is HTML5. HTML5 comes with more meaningful tags to better describe our code. We use the word semantic to describe tags with meaning.

Some examples of semantic tags include:
```
<h1>
<p>
<section>
<nav>
<header>
<footer>
```
Notice that you can quickly figure out what each tag listed should be described in HTML. The fact that you can read the tag and know more about its meaning instantly is a direct example of why we say it’s semantic HTML.

Compare the semantic tags above with this list of non-semantic tags below:
```
<div class=”main-content”></div>
<div class=”nav”></div>
<span class=”orange”></span>
<div class=”footer”></div>
```
#### Note, that while you can get information from the class names, you are at the mercy of the original developer’s naming convention, spelling, and meaning.

At this point, we can clearly see the advantage of semantic markup for web developers. The clarity and meaning should be found right in the tags. There is another large advantage in writing semantically correct code: computer algorithms consuming your code.

Search engines are algorithms looking for meaning. If your code is a lot of divs without meaning, you could lose out on valuable search engine optimization ranking. Knowing that both humans and machines prefer semantic code, we should get some practice writing it and knowing when to use it.

## <div> Tags Aren’t Bad
In the example above we shed a bit of bad light on using divs with classes but the reality is that often you need a div to get the job done. When do we use div tags? Whenever we don’t need to describe meaning. Using a div to create space, add structure or style elements is just fine. The concept of using markup like this is called presentational HTML.

Presentational HTML does not convey meaning. It is used to achieve something the designer or client wanted but perhaps doesn’t contain meaning. An example of this would be:
```
<section>
  <div>
    <p>Half the content here should go here.</p>
  </div>
  <div>
    <p>The other half here should go here.</p>
  </div>
</section>
```
Notice how we can use the ```<section>``` tag to wrap the content but we could split the content into two halves using divs. Semantically we are still using ```<section>``` and at the same time, we are using presentational ```<div>``` tags to split the content in half. We could then use CSS on our divs to split the content without hurting the semantic structure.

### Follow Along
## Semantic HTML Tutorial
Be sure to follow along with the code examples presented here!

Semantic HTML is all about providing meaning to our content. Let’s look at some content and think about how we could add meaning to it. Study the content below:
```
<!-- Main heading -->
Lambda School

<!-- Navigation -->
Tracks
About
Blog
Apply Now

<!-- Secondary heading -->
A Revolutionary New School
That Invests in You

<!-- Site content -->
Lambda School is a 30 week, immersive program that gives you the tools and training you need to launch your new career—from the comfort of your own home.
```
#### Step 1: Main Heading
When someone is searching for Lambda School, they are most likely going to type “Lambda School” into the search bar.

We need our content to be marked up so that search engines can successfully find Lambda School. To do this we can wrap our heading (or title) in a ```<h1>``` tag.
```
<h1>Lambda School</h1>
```
The ```<h1>``` tag is providing meaning to the search engine by informing any indexing tools that we want “Lambda School” to be most important.

We are also telling the next developer that “Lambda School” is the most important content on the page.

Let’s keep marking up our code by looking at the navigation content.

#### Step 2: Header
```
<h1>Lambda School</h1>

<!-- Navigation -->
Tracks
About
Blog
Apply Now
```
At this point, we will want to define a header (upper portion) for our document. We can use the ```<header>``` tag to wrap both the main heading (or title) and navigation items like this:
```
<header>
  <h1>Lambda School</h1>

  <!-- Navigation -->
  Tracks
  About
  Blog
  Apply Now
</header>
```
Now that we have our header in place, let’s finish marking the navigation items up using the ```<nav>``` tag with nested <a> elements:
```
<header>
  <h1>Lambda School</h1>
  <nav>
    <a href="#">Tracks</a>
    <a href="#">About</a>
    <a href="#">Blog</a>
    <a href="#">Apply Now</a>
  </nav>
</header>
```
By using the ```<nav>``` tag we are making it clear what the intent of that block of code is. The nested ```<a>``` tags don’t currently link anywhere so we can put the ```#``` symbol in the ```href``` value to refresh the page for now.

#### Step 3: Secondary Heading and Site Content Section
Now that we have our main heading and navigation in place, we can look at the secondary heading and site content. Before we markup the code, take a look at the content and think: “How should I organize this?”
```
<!-- Secondary heading -->
A Revolutionary New School
That Invests in You

<!-- Site content -->
Lambda School is a 30 week, immersive program that gives you the tools and training you need to launch your new career—from the comfort of your own home.
```
The secondary heading and site content go together. We could use a ```<section>``` tag to organize both the secondary heading and site content together.

We can also markup the secondary heading with a ```<h2>``` and the site content could be a paragraph or ```<p>``` tag.
```
<section>
  <!-- Secondary heading -->
  <h2>A Revolutionary New School
  That Invests in You</h2>

  <!-- Site content -->
  <p>Lambda School is a 30 week, immersive program that gives you the tools and training you need to launch your new career—from the comfort of your own home.</p>
</section>
```
HTML has multiple heading tags. When we use them depends on what order we want the content to be understood by search engines.

Using ```<h2>``` after ```<h1>``` tells the search engines that the secondary heading isn’t as important as the main heading.

Congratulations, you have marked up some content with semantic HTML, go complete the challenge below to push yourself further!

Note: Semantic HTML concepts go deeper into search engine optimization (SEO) which are out of scope for this lesson. You should google more information on SEO to become familiar with its uses but don’t focus too much on it right now.

### Challenge
Follow the instructions found [here](https://codepen.io/lambdaschool/pen/wxgdeO?editors=1000) to complete a challenge on your own. Submit your fork of this Codepen to your PM once you are finished.

### Dig Deeper
* [Semantic HTML Tags](https://www.w3schools.com/htmL/html5_semantic_elements.asp)
W3 Schools list of relevant semantic HTML tags.


### Overview
## CSS Selectors

In order to access an HTML tag for styling we use selectors in CSS. Selectors come with different specificity weights that can be used to layer on many styles. The weight of a selector has a major impact on how we build our apps and web pages. Lets look at a few of the major selectors used in everyday development:

Universal Selector *
There are occasions you would want to select every element on a web page. The universal selector sometimes called the wild card or star selector does exactly that.

#### Specificity Weight: Less specific than any selector.

## CSS Syntax example:
```
* {
  color: red;  
}  
```
Element Selectors <h1></h1>
When styling elements we are basically telling the browser: “I want every single tag I specify to follow my styles.” This is more specific than the universal selector.

#### Specificity Weight: More specific than universal less than everything else.

## HTML Syntax example:
```
<h1>I'm a h1 element</h1>  
```

## CSS Syntax example:
```
h1 {  
  color: blue;  
}  
```
Class Selector ```.class```

Class selectors begin to introduce a heavier specificity compared to element or universal selectors. Classes allow us to select individual elements by placing a special attribute in our HTML. We can use the same class over and over again on many elements. This behavior is extremely powerful and allows designers and developers to be more efficient.

#### Specificity Weight: More than universal and element, less than ID, inline, and important.

## HTML Syntax example:
```
<h1 class="a b c d">I have 4 classes!</h1>  
```

## CSS Syntax example:
```
.a {  
  color: green;  
}  
```
Pseudo-Classes
Pseudo-classes are used when you may not have a set amount of elements but still want to specifically style them.

For example: You are given a list of items in a store’s inventory. That list of items grows and shrinks everyday with purchases and new items.

Now let’s imagine that the last item in the inventory needs to update to a new color to signify the end of the inventory.

Without pseudo classes we couldn’t achieve that result. We could use something like li:last-child to always select the last child in an unordered list to achieve our goal with the inventory.

### Specificity Weight:

Same specificity weight as classes. More specific than: universal and element.
Less specific than: ID, inline styles, and important.

## HTML Syntax example:
```
<h1 class="normal">Normal class here</h1>  
<h1 class="normal">Normal class here</h1>  
<h1 class="normal">Psuedo class found here!</h1>  
```

## CSS Syntax example:
```
h1:last-child {  
  color: orange;  
}  
```
ID Selectors
IDs are only allowed to be used once per HTML page. The use of IDs should be for very specific reasons that can’t be accomplished using a class. Be mindful of where you use IDs as their specificity weight is heavier than most selectors.

##Specificity Weight:
* More than universal, element, pseudo-classes, and classes.
* Less than inline styles, and important.

## HTML Syntax example:
```
<h1 id="example-id">I have an ID</h1>  
```
## CSS Syntax example:
```
#example-id {  
  color: gold;  
}  
```
Specificity Heavy Weights

The following items go beyond selector specificity and are in a heavy weight category. Using these items can cause issues in your code if you aren’t completely familiar with them. Be aware of them and avoid their use for everyday styling. Of course they have a place in the CSS ecosystem, but be mindful of using them.

## 3 Different Style Integrations
You can introduce CSS styles into your HTML using 3 different approaches.

* Inline styles
* Embedded style tag in the HTML page
* Externally linked CSS file

The standards on what is the best approach change with the flow of new technology but for now, we will say that external style sheets are the way to code. Why? Because both the inline styles and the style tag are more specific and we want to control all our style specificity in one place as we learn. In the future you may have cases where knowledge of all 3 come into play. It is recommended to know how all 3 work.

## Inline Styles
Inline styles utilize the style attribute baked into every HTML element. This can be very useful with JavaScript libraries but is to be avoided outside of that. Inline styles overwrite everything but !important.

## Specificity Weight:
* More than universal, element, pseudo-classes, classes, IDs
* Less than !important

## HTML Syntax example:
```
<h1 style="color: red">Inline Styled Heading</h1>  
```
#### Embedded Style Tag
Inline styles were too cumbersome for early developers so a style tag was introduced to the spec. The style tag houses everything that an external style sheet does but instead has it in the actual page. There are some big advantages in having a style tag embedded on the page.

You won’t have an extra HTTP request going out to find your externally linked style pages
You know exactly what is on that page and don’t have to look in external files to find them
External style sheets are deemed as content blocking by some search engines and you could lose search engine optimization rank because of this
However, embedded style tags are tightly coupled to the page and not very reusable. External style sheets are also overwritten by any embedded style tags with duplicate selectors. It’s wise to choose one approach and stick with it as you learn. For our time here at Lambda, we will be focusing on external style sheets.

### Specificity Weight:
* More than duplicate universal, element, pseudo-classes, classes, IDs
* Less than inline styles, !important

## HTML Syntax example:
```
<style>  
 h1 {  
  color: red;  
 }  
</style>  
```
#### External Styles
Externally loaded styles require a link tag to point to the source path of the CSS file.

#### External CSS style sheets have some advantages over both inline and embedded styles.
* 100% CSS only files are easier to identify and update
* Specificity is controlled in one place and not tampered with by inline or style tags
* Separation of style and structure allows for clearer approaches for smaller projects

#### Specificity Weight:
Less than inline styles and embedded styles, and !important

## HTML Syntax example:
```
<link rel="stylesheet" href="css/index.css">  
```

### !important, The Most Specific of Them All
Last but certainly not least, we have the !important rule. When you place !important at the end of a style property you are basically declaring “This style property now has the most specificity!” Using !important will override any previous styles for that given property no matter what. The only exception is the use of another !important rule with higher specificity weight.

#### Specificity Weight:
Heavier than everything else
Less than another !important rule with a higher specificity
## HTML Syntax example:
```
<!-- This is the most specific you can get -->  
<h1 style="color: red !important">Don't Do This<h1>  
```
Try to avoid using !important unless you must use it. The only need I could imagine is if a 3rd party UI library was overwriting your styles and you needed to overwrite theirs. That’s pretty much it. If you ever think “I should use !important here.” Think about the cascade instead and try to find another way.

#### Follow Along
## Selectors Tutorial
Let’s get some practice writing out CSS selectors by using this HTML as a starting point:
```
<div class="container">
  <header>
    <h1 class="main-heading">Lambda School</h1>
    <nav>
      <a href="#">Tracks</a>
      <a href="#">About</a>
      <a href="#">Blog</a>
      <a id="apply" href="#">Apply Now</a>
    </nav>
  </header>
</div>
```
Universal Selector
If we wanted to style everything in our HTML to have a ```font-size of 16px```, we could use the universal selector ```*``` like this:
```
* {
  font-size: 16px;
}
```
Element Selector
Let’s use an element selector to remove text-decoration from all our a tags:
```
a {
  text-decoration: none;
}
```
Class Selector
Class selectors allow us to target one element or many. Classes in CSS are the go-to for many apps and websites.

Notice that we have ```a``` tags on multiple elements. We can use our classes to differentiate the styles between the heading and navigation items.

Style the heading to have a ```font-size``` of ```24px``` with a ```color``` of ```crimson;```
```
main-heading {
  font-size: 24px;
  color: crimson;
}
```
Let’s style all our ```.nav-item``` classes to look like buttons, review the code below:
```
.nav-item {
  padding: 5px 20px;
  background: lightgray;
  border: 1px solid gray;
  margin: 10px 10px;
  border-radius: 5px;
  display: inline-block;
  color: black;
}
```
Note: We will be discussing what some of the above CSS properties are in another module.

#### ID Selector
We have an ID on the Apply Now link. We can use the ID to add a specific style helping us call out the button even more:
```
#apply {
  background: #125172;
  color: white;
}
```
The ```ID``` overwrote our ```class``` styles for ```background``` and ```color```. We are using everything else from our classes, this is related to the cascade which you will learn more about soon.

This tutorial covered many selectors but we are still missing a few, go check out the challenge below and explore what we are missing!


#### Challenge
## Selector Challenge:
Explore this [code](https://codepen.io/lambdaschool/pen/VxMbwv) and see how each unique selector works and overwrites each other.

#### Learn to demonstrate CSS specificity and inheritance to create and update styles
The most basic building blocks of any app or website on the internet today rely heavily on HTML and CSS. The first steps into building bigger and more complex projects start with a solid understanding of CSS specificity and inheritance.

#### Overview
## CSS Inheritance
To understand CSS we need to look at the C in cascading style sheets. This cascade suggests a pattern of inheritance that we can use in our code. Inheritance is similar to human characteristics that are passed down from generation to generation. Children will inherit characteristics and personality traits from their parents.

CSS Inheritance is similar to human inheritance in that you can pass traits down to ancestor elements. In CSS every ancestor of the original parent will gain access to all the CSS properties through inheritance. You may be thinking, “How does inheritance occur in CSS?” The answer is the HTML structure. In HTML when an element is placed inside another element it is said to be nested within its parent element. This HTML nesting creates a bond between elements that we call inheritance.

Lets look at an example to demonstrate inheritance:

### HTML Structure:
```
<div class="parent">  
  <p>Parent</p>  
  <div class="child">  
    <p>Child</p>  
    <div class="grandchild">  
      <p>Grandchild</p>  
    </div>  
  </div>  
</div>
```
CSS:
```
.parent {  
  color: red;  
}  
```
Notice that by styling the ```.parent``` class, all our p tags will now turn red. Using inheritance this way is extremely powerful and allows for easier development when building user interfaces. However, we don’t always want to change everything at once. What if we only wanted two elements to turn red and not all 3? This problem is solved with specificity and understanding selectors.

### CSS Specificity
Specificity is the concept we use to describe the ability to style many elements or just one element using CSS selectors. Selectors allow us to access HTML tags and update their styles. Before we learn more about selector syntax and usage, we need to study specificity weight.

Specificity Weight
Think of specificity weight like the waterfall example used earlier. The water at the top of the waterfall is less specific and therefore can be overwritten further This diagram below helps visualize specificity weight. Note the < symbol is used to represent “less specific.” The more you read to the right, the more specific a selector or style will be.
```
* < elements < classes, pseudo-classes, attributes < IDs < inline styles < !important
```
The selectors above are very common in styling practices but they do not represent every possible selector. It is recommended that you get a solid knowledge of these selectors first before moving on to more advanced selectors.

#### Follow Along
### Specificity Tutorial
For this tutorial, you will be building CSS selector chains to demonstrate specificity and inheritance.

CSS specificity begins with HTML structure. Before we write any CSS, study the HTML nesting below:
```
<div class="container">
  <header>
    <h1 class="main-header">Lambda School</h1>
    <nav>
      <a href="#">Tracks</a>
      <a href="#">About</a>
      <a href="#">Blog</a>
      <a href="#">Apply Now</a>
    </nav>
  </header>
</div>
```
We can see that there is a class of ```.container``` wrapping all of the other elements.

CSS Specificity: Many Elements
With this knowledge in hand, we now have a starting point for our specificity chain to begin. Let’s start by styling the ```.container``` itself:
```
.container {
  width: 600px;
  margin: 0 auto;
}
```
Notice that all of the content within ```.container``` is now centered in the page. We are using the cascade to impact all of the elements inside of ```container``` with just a few simple lines of CSS!

Let’s increase our specificity chain by styling everything in the header to have a ```font-family``` of ```Helvetica```:
```
.container header {
  font-family: 'Helvetica', Arial, sans-serif;
}
```
Because of the cascade, all of the elements in the header will now have a ```font-family``` of ```Helvetica```.

#### CSS Specificity: One Element
Styling many elements is pretty easy because of the cascade, what about styling one specific element?

Let’s select the ```.main-header``` class and style it’s ```color``` to ```crimson```:
```
.container header .main-header {
  color: crimson;
}
```
Note that we could have written the selector chain above with just the h1 and achieved the same result:
```
.container header h1 {
  color: crimson;
}
```
This is because both the class ```.main-header``` and the ```h1``` element is on the same specificity level in our chain.

If we wanted to be extremely specific, we could use both the element AND the class together like this:
```
.container header h1.main-header {
  color: crimson;
}
```
We just did the same thing 3 different ways with the same result!

Some developers see this as a powerful aspect of CSS, others point this out as a reason CSS is so confusing.

Our opinion is that you should know several ways to do the same thing in case you run into a unique situation where you need the specificity weight to be heavier.

At this point, you should attempt to style the anchor tags inside the navigation, explore the several different ways you could write your specificity chains.

[Check your code against a final solution for this tutorial:](https://codepen.io/lambdaschool/pen/rqOOmX?editors=1100)

## Challenge
Follow the instructions [here](https://codepen.io/lambdaschool/pen/rddroJ) to challenge yourself using CSS specificity and inheritance.

#### Dig Deeper
[Centering things in CSS](https://css-tricks.com/centering-css-complete-guide/)
* Center anything, vertically or horizontally using CSS.
[Check your code: CSS}(https://jigsaw.w3.org/css-validator/)
* You can check your CSS validation against current standards. Open bracket? Missing semicolon? This validator will find it.
[Check your code: HTML Validator](https://validator.w3.org/)
You can check your code against the W3 standards by using their HTML validator. Remember, this is just HTML and doesn't include CSS or JavaScript.


# Projects
[UI I: Project I - Sweet Eats Bakery Markup](https://codepen.io/lambdaschool/pen/vaKejB)
Sweet Eats Bakery has provided content for you to markup on their website. Use semantic HTML tags to give their content meaning.

[UI I: Project 2 - Sweet Eats Bakery Style](https://codepen.io/lambdaschool/pen/vaXWWG/?editors=0100)
Now that we have some practice with semantic HTML, we need to add some style to our project. This project is going to explore selectors, inheritance in combination with our new found HTML skills.

# Review

## Class Recordings
You can use class recordings to help you master the material.

[Webpt11 User Interface I with Pace Ellsworth](https://youtu.be/o8qxGUH2xoc)
User Interface I

[All previous recordings](https://learn.lambdaschool.com/archive/FSW/module/recl0IyzS2Vl89lZa)

# Demonstrate Mastery
To demonstrate mastery of this module, you need to complete and pass a code review on each of the following:
* Objective challenge:
Follow the instructions found [here](https://codepen.io/lambdaschool/pen/wxgdeO?editors=1000) to complete a challenge on your own. Submit your fork of this Codepen to your PM once you are finished.
* Objective challenge:
## Selector Challenge:
Explore this [code](https://codepen.io/lambdaschool/pen/VxMbwv) and see how each unique selector works and overwrites each other.
* Objective challenge:
Follow the instructions [here](https://codepen.io/lambdaschool/pen/rddroJ) to challenge yourself using CSS specificity and inheritance.
* Project: UI I: Project I - Sweet Eats Bakery Markup
