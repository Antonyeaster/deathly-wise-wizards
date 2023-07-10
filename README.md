# ****Deathly Wise Wizards****


## **Site overview**
Deathly Wise Wizards is very similar to a game most people already know, but with a twist. The game I'm talking about is Rock, Paper, Scissors. As you play, you will quickly see the similarities.

Like I said though, with a twist. This game was designed with Harry Potter fans at the forefront of the design, with quirky sayings and choices.

The game offers endless amounts of fun and luck that can be enjoyed on a whole range of different-sized devices.


![Am I Responsive](/documentation/testing/am-i-responsive.png)


## **Contents**

* [Site Overview](#User-Experience-UX)
  * [Initial Discussion](#Initial-Discussion)
  * [Targeted Audiance](#Targeted-Audiance)
  * [User Stories](#User-Stories)
  * [Site Aims](#Site-Aims)
  * [To Can This Be Achived](#To-Can-This-Be-Achived)

* [Design](#Design)

  * [Colour Scheme](#Colour-Scheme)
  * [Typography](#Typography)
  * [Imagery](#Imagery)
  * [Wireframes](#wireframes)
  * [Features](#Features)
     * [Initial Load Page](#Initial-Load-Page)
     * [Main Game Page](#Main-Game-Page)
     * [Game Rules Button](#Game-Rules-Button)
     * [Game Rules Modal](#Game-Rules-Modal)
     * [Choices Button](#Choices-Button)
     * [Choices Open With Hover](#Choices-Open-With-Hover)
     * [Game Selection](#Game-Selection)
     * [Game Area](#Game-Area)
     * [Footer](#Footer)
  * [Accessibilty](#Accessibilty)

* [Technologies Used](#Technologies-Used)
  * [Languages Used](#Languages-Used)
  * [Frameworks, Libraries & Programs Used](#Frameworks,-Libraries-&-Programs-Used)

* [Deployment & Local Development](#Deployment-&-Local-Development)
  * [Deployment](#Deployment)
  * [Local Development](#Local-Development)
    * [How to Fork](#How-to-Fork)

* [Testing](#Testing)
  * [W3C Validator](#W3C-Validator)
  * [Solved Bugs](#Solved-Bugs)
  * [Lighthouse](#Lighthouse)
  * [Index Page](#Index-Page)
  * [Full Testing](#Full-Testing)

* [Credits](#Credits) 
  * [Content](#Content)
  * [Media](#Media)
  * [Code Help](#Code-Help)
  * [Acknowledgments](#Acknowledgments)

## **Initial Discussion**

Deathly Wise Wizards is a game very much like rock, paper, scissors. However, this one is much more aimed at the Harry Potter fandom out there. Even for someone who doesn't have an understanding of rock, paper, scissors and hasn't seen the Harry Potter films, the instructions are clear and easy to follow in the game rules button.

### Targeted Audiance 

* Adults and children with an interest in Harry Potter
* People looking to play a free game
* People who do not have anyone else to play along with.
* People looking to have some fun without having to do much

### User Stories 

#### Client Goals

* Have a clear indication of the game rules and what beats what
*  Give people on their own a chance to play a game without needing a second player
*  Link the theme of the site with the way of the wizarding world
* Give the player and computer scores to allow the user to keep track

## Site Aims

1. To provide a game that has similar characteristics to another one but a different theme
2. To keep track of the current game scores
3. A simple and easy-to-find set of instructions
4. To the best of my ability, make a game that a visually impaired individual can play.
5. To keep a single page simple design
6. To give the user feedback on wins, losses, and draws

## To Can This Be Achived 

1. Keep the game as close to rock, paper, scissors as possible
2. To keep the score tally increasing by one for whoever wins or to hold still if a draw happens
3. A button right in the middle that clearly indicates game rules
4. With semantic elements, aria labels and alternate text tags
5. By keeping the design simple and without too much information on the page
6. Create a serarate winning, losing, or draw sentence and apply it to each individual outcome


## **Design**

### Colour Scheme 

![Colours](/documentation/design/colours.png)

I used a small amount of solid block colours which I ran through the [Eight Shapes Contrast Grid](https://contrast-grid.eightshapes.com/?version=1.1.0&background-colors=&foreground-colors=%23F0FFFF%0D%0A%23000000%0D%0A%238505A8%0D%0A%2315FD38%0D%0A%23045a9c&es-color-form__tile-size=regular&es-color-form__show-contrast=aaa&es-color-form__show-contrast=aa&es-color-form__show-contrast=aa18&es-color-form__show-contrast=dnp) to make sure the contrast was acceptable and easy to read.

### Typography

Google Font was used as the only font. I decided to use one that would often be related to a wizard/magic type of font.
The font I used was [EB Garamond](https://fonts.google.com/specimen/EB+Garamond?query=eb+gar).

### Imagery 

All images were taken from different sources on Google Images. Full credits will be issued in the credits section at the bottom of the page.

### Wireframes

The wireframes were created on [Balsamiq](https://balsamiq.com/wireframes/?gad=1&gclid=Cj0KCQjw756lBhDMARIsAEI0Agl24mon1Tx0wAiad-qwLhfV72ErIDggCJMa5YpB4Om_V84o5aBkVIUaAuAjEALw_wcB)

#### Desktop
* [Desktop Game Page](/documentation/design/wireframe-balsamiq-desktop-main.png)
* [Modal for Game Rules on desktop and mobile](/documentation/design/wireframe-balsamiq-game-rules-modal.png)
* [Modal for Page Load on desktop and mobile](/documentation/design/wireframe-balsamiq-play-game-modal.png)

#### Mobile 

* [Mobile Game Page](/documentation/design/wireframe-balsamiq-mobile-design.png)

## Features

### Initial Load Page

I have created a modal that displays when the game is first loaded.

![Page Load Modal](/documentation/design/page-load-modal.png)

* The title name is a clear indication of the type of theme
* The bright border and darkened background bring the user's focus directly to the modal


The play game button will take the user to the main game and hide the modal.

![Play Game Button](/documentation/design/play-game-button.png)

### Main Game Page

The main game page is a simple design but with everything the user will need to play.

![Main Game Page](/documentation/design/main-game-page.png)

#### Game Rules Button

The Game rules button is an important feature as it opens up a modal which explains everything you need to know to win.

![Game Rules Button](/documentation/design/game-rules-button.png)

The game rules button also features in the page load modal, this way the user can study the rules prior to entering the game.

![Game Rules Button inside page load modal](/documentation/design/play-game-game-rules.png)

#### Game Rules Modal

The game rules modal features three rules, this is to keep the game as simple as possible so anyone can play. 

![Game Rules Modal](/documentation/design/game-rules-modal.png)

#### Choices Button

The choices button is for the user to be able to see which image relates to which name. This is for anyone who has no or little knowledge of Harry Potter.

![Choices Button](/documentation/design/choices-button.png)

#### Choices Open With Hover

The choices are in image form to allow the user to put an image to a choice name. Ive added a hover/tap effect for interaction and understanding.

![Choices Open With Hover](/documentation/design/choices-with-hover.png)

#### Game Selection 

The game selection buttons are large and easy to press; once pressed, the game will start, and the user's choice will be displayed in image form.
The buttons will stack on smaller screens for responsive design.

![Game Selection](/documentation/design/game-selection.png)

Game on a mobile

![Game selection responsive](/documentation/design/responsive-main-page.png)

#### Game Area

The game area is split into two, one side for the user and the other for the computer. A placeholder image is in place when the game is first opened.

![Game Area](/documentation/design/game-area.png)

Game Running

![Game Running](/documentation/design/game-running.png)

*  The scores are within the image area for easy viewing
* The text above the images changes as per the outcome (win, lose, or draw).
* The scores are incremented by one for a win; there is no score movement for a loss or draw.

#### Footer

The social links are in the footer of the page and match the rest of the design.
They both open within a new tab.

![Social Links](/documentation/design/social-links.png)

### Accessibilty

It's vital to make websites as accessible and easy to follow as possible. This has been achieved by:

*  Using semantic HTML
*  Using descriptive alt attributes on images
* Using aria labels for links, including naming the footer social media icons
* Using a colour contrast that is easy to see

I also used [Wave - Web accessibility evaluation tools](https://wave.webaim.org/) to make sure I had no errors regarding colour contrast and aria labels.

### Future Implementations

In the future I would like to add the following features:

* Add a score cap of 10 with winning/losing modals
* Add a enter a username and use it to replace (player score)
* Add an option for themed sound effects and background music   


## **Technologies Used**

### Languages Used
HTML, CSS and JavaScript were used to create this game

### Frameworks, Libraries & Programs Used
* Balsamic - Used to create wireframes.

* Git - For version control.

* Github/Codeanywhere - To save and store the code files for the website.

* [Google Fonts](https://fonts.google.com/) - To choose and import my desired fonts.

* [Font Awesome](https://fontawesome.com/) - For social media icons in the footer.

* [RedKetchup](https://redketchup.io/) - For resizing images

* [Eightshapes Contrast Grid](https://contrast-grid.eightshapes.com/?version=1.1.0&background-colors=&foreground-colors=%23F0FFFF%0D%0A%23000000%0D%0A%238505A8%0D%0A%2315FD38&es-color-form__tile-size=regular&es-color-form__show-contrast=aaa&es-color-form__show-contrast=aa&es-color-form__show-contrast=aa18&es-color-form__show-contrast=dnp) - For colour design with appropriate contrast

* [Readme.so](https://readme.so/) - To be able to write and preview the Read me at the same time.

* [TinyPNG](https://tinypng.com/) - To compress images.

* [Convertio](https://convertio.co/jpg-webp/) - To change images to webp.

* [Stack Overflow](https://stackoverflow.com/) - For more css styling information.

* [W3Schools](https://www.w3schools.com/howto/howto_css_modals.asp) - For help with building a modal.

* [Am I Responsive?](https://ui.dev/amiresponsive) - To show the website on a range of different devices.

* [Wave Accessibility checker](https://wave.webaim.org/) - To check the site is contrast ready and accessible to visually impaired individuals.

* Google Dev Tools - To help with responsive design and troubleshooting.
## **Development & Local Development**

### Deployment

Github Pages was used to deploy the live website.

The instructions to achieve this are below:

*  Log in to Github
*  Find the repository for this project, Deathly Wise Wizards
*  Click on settings
*  Go to Pages
*  In the Source section, choose main from the drop down select branch menu. Select Root from the drop down select folder menu.
* Click save, and your live Github Pages site will be deployed at the URL shown

You can find the live site by the following URL - [Deathly Wise Wizards](https://antonyeaster.github.io/deathly-wise-wizards/)

### Local Development

#### How to Fork

To Fork the PUP HQ repository:

* Log in to Github
* Go to the repository - Antonyeaster/deathly-wise-wizards
* Select the fork button in the top right hand corner




## **Testing**

Testing was continuously being done throughout the project. I used Chrome Dev Tools to help identify problems with the styling and the console inside Chrome Dev Tools for JavaScript problems and console logs.

The following issues were raised during my mid-way project mentor meeting: 
* The colour contrast was not the easiest to see and should be addressed.
* The page load modal did not stand out enough, and something should be done to make it easier for the user to stay focused on it.
* Tidy up the code, remove any double spaces, and fix indentation.

### W3C Validator 

**HTML Validation**
* ![Index Page HTML](/documentation/testing/w3c-html-validation.png)
**CSS Validation**
* ![Style.css CSS Jigsaw](/documentation/testing/css-jigsaw-validation.png)
**JSHint Validation**
* ![JSHint](/documentation/testing/jshint-validator.png)

1. The HTML passed through the W3C validator with no errors.
2. The CSS passed through the jigsaw validator with no errors.
3. The JavaScript originally had a few errors, including missing semicolons, an unused variable, and functions declared within loops. These were all fixed other than the latter one, as seen in the screenshot above.

### Solved Bugs 

1. The JSHint validator was showing an error saying unused variable. This was because I had originally written the "onclick" event listener in the HTML, which caused JSHint to throw an error due to not being able to link the variable to anything. I solved this by writing an event listener in JavaScript and removing the code in the HTML.

2. The hover effect on my modal images was originally very jittery due to a lack of space. I solved this by lining the images in a column instead of a row.

3. When playing the game, the images would resize themselves according to their original size, this would cause the screen to jump around while you played. I solved this by resizing all the images in RedKetchup.


### Lighthouse 

I used Lighthouse in Chrome dev tools to test the performance, accessibility, best practices, and SEO of the website.

#### Main Page Desktop

I ran all the tests in incognito to avoid interference from browser extensions.

#### Desktop Test

![Main Page Desktop](/documentation/testing/desktop-lighthouse.png)

#### Mobile Test 

![Main Page Mobile](/documentation/testing/mobile-lighthouse.png)

#### Full Testing

To completly test my site I used multiple browsers including: 

1. Google Chrome
2. Firefox
3. Microsoft Edge
4. Safari (IOS ipadOS)

These tests were done on devices such as the iPhone 14 Pro Max, iPhone 12 Pro, Ipad and HP laptop.

I shared my site with my family and friends for them to use on their various devices, and I didn't receive reports of any problems.

I also used Chrome Dev Tools to test the responsiveness of the site down to 325 pixels in width.

## **Credits**

### Content

* The content of the project was written by myself, Antony Easter
*  Other references within the site are the property of the Harry Potter film Series **(J.K. Rowling and Warner Bros)**
*  The site has been made for educational purposes only

### Media

All images were taken from Google Images and were used for educational purposes:

* [Resurrection Stone](https://www.pinterest.co.uk/pin/the-resurrection-stone-3d-model--162833342747385460/)
* [Elder Wand](https://www.hampel-auctions.com/a/archive-catalogue-detail.html?la=en&a=126&s=-1&id=594&acl=1260683&g=universe)
* [Invisibility Cloak](https://bookanalysis.com/harry-potter/invisibility-cloak/)

### Code Help

* [W3Schools](https://www.w3schools.com/howto/howto_css_modals.asp) for help with the modals
* Love Maths project for general help with JavaScript
* [Stack overflow](https://stackoverflow.com/) for help with CSS styling and JavaScript
* Code Institute tutor support for help with making my images change during the game.

### Acknowledgments

I would like to acknowledge the following people and communities for their help with completing my second milestone project:

* The Slack Community
*  My family and friends for taking the time to check the responsiveness on their phones.
* My mentor, David Bowers, for all the support and encouragement he has supplied.
* Tutor support at Code Institute for help with 
