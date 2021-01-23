# Memory game

**Code Institute - Second Milestone Project for Interactive Frontend Development**

[View webpage in GitHub Pages](https://github.com/GilleM/Memory-game)

Welcome to my first Code Institute milestone project that you can check out by clicking on the photo below:

[![Foo](assets/images/back_face.jpg)](https://gillem.github.io/Memory-game/)



## Project Description
***
**Memory game** is my second out of four milestone projects at the Code Institute 
Full Stack Developer course.
The main requirements were to design, develop and implement front-end web application using HTML, CSS and JavaScript. 
It was also required to implement front-end interactivity, using core JavaScript, JavaScript libraries and/or APIs.
Everything needed to be tested  through development, implementation and deployment stages.

The reason I decided to go with _Memory game_ is simply because I like (arcade) games. I found this project would be good 
and at the same time challenging for a JavaScript beginner. According to study of International Psychogeriatrics 2016, 
memory games help sharpen certain  thinking skills that tend to wane with age, such as processing speed, planning skills, 
reaction time, decision making, and short-term memory, so I decided it give it a go with it.




##  User Experience
***

In this paragraph I'm about to provide insight into my UX process, 
focusing on who this website is for, what it is that they want to achieve 
and how my project is the best way to help them achieve these things.

According to [interaction design page](https://www.interaction-design.org/literature/topics/ux-design), user 
experience (UX) design is _"the process design teams use to create products that provide meaningful and relevant 
experiences to users. This involves the design of the entire process of acquiring and integrating the product, 
including aspects of branding, design, usability and function."_




### Project Goals

- to create a website that is fully responsive on mobiles, laptops, tablets and desktops,
- to make a page with interface design, providing a logical structure which is easy to follow,
- to write interactive JavaScript code to produce relevant responses to user actions
- to understand the code and to possibly implement it in another project
- to make an interesting, enjoyable page that could be played by children and adults as well

### The business goals of this website is:

- the page could possibly be the part of some company's website or it could contribute to entertaining larger group of 
people by memory card playing

### User Stories

- as a new user who never played memory, I want to have access to the memory rules.
- as a new user, I want to see nicely developed game with logical characteristic (2 matching cards appear, other stay closed)
- as a young user, I want to have possiblity to play with a smaller number of cards
- as a user, I'd like the page to be enjoyable and I'd like to have fun with playing it
- as a user, I'd like to have the highest score to be saved

## Strategy

The main goal of the website is for younger and older generations to have fun playing memory game.
My personal goal was to well understand the JavaScript logic and to prove myself that I could do my first game.
My goal in design was to make everything as structured and intuitive as possible. I didn't introduce
a lot of text this time; I mostly put the accent on the very interactivity of the page; with images, flipping the cards 
around, matchin them, displaying result... I have also decided not to introduce any social link for the purpose of the game, 
since I wanted to have the UX simple and put the accent on the game. UX is easy to read and to follow.



## Scope
I certainly had a scope creep; all the features I wanted to add but that weren't agreed on at the starting point. 
In order to meet the deadline with this milestone, I needed to make it simpler. 
I decided to have a grid of cards (all of them taken from Unsplash), and to distribute them evenly on the page, at
the same take taking care about responsiveness, so that the data in nicely loaded and presented in phone and tablet view.
I decided to introduce interactive "Let's play" button.
I decided to introduce interactive "Play/Resume" button.


## Structure
All the pages have a fixed **navbar** with "Kilbronogue trip" logo I created just for the 
purpose of the page.

At the bottom of the page I put a **footer** with social links and copyright text.

* First - _Home_ page, has a jumbotron with the quote in it, followed by "About me" section which
is, again, followed by some activities photos with text. 
* Second - _Gallery_ page, is separated in three divs, each one containing photos
with different subjects. _Nature_, _With animals_ and _Food we made_. I colored the last div's
background differently on purpose, in order to divide it semantically from the first two divs which both represent
nature (flora or fauna). To reduce the width of the page and to make it more structured and nicer, I introduced 
_overflow_ element.
* In the third - _Accommodation_ page, I introduced _form_ and _map_ sections and it's the only 
page that has a _table_, so it's a bit more diverse. I decided to put more 
history text, strongly related to Kilbronogue place and which might
attract people in coming to Ireland and visiting West Cork.

## Skeleton
##### Wireframe
By using Balsamiq, I developed the wireframes for each page, for mobile, tablet and laptop/desktop size.
I added the colours in the next step and coloured the background of some sections.

You can click on one of the following links below:

[LARGE SIZE wireframe](https://gillem.github.io/Kilbronogue_trip/assets/wireframes/Wireframe_large_screen.html)

[MEDIUM SIZE wireframe](https://gillem.github.io/Kilbronogue_trip/assets/wireframes/Wireframe_medium_screen.html)

[EXTRA-SMALL wireframe](https://gillem.github.io/Kilbronogue_trip/assets/wireframes/Wireframe_extra_small_screen.html)

## Surface
After finishing with the Skeleton plane of user experience, I started with 
the Surface plan, the most concrete plan of all five of them. 
I tried to accomplish the following tasks: how can the users interact, what effects are there,
 what they can click, where they can go to, and also the final version of the 
 information that appears on the screen.

I wanted to provide readability and make my content legible.
I also try to have consistent patterns, e.g. the navbar and header section 
and the footer section are consistent across the pages, while for the bigger text
I decided to go with the font that contains the lowercase as well, which the main font
doesn't provide.
I used the form, map, buttons and table. In phone responsiveness, I decided to remove the 
last column to make UX more legible.


##### Colour Scheme

I used _Google inspect_ feature to choose the colours that would fit the page and match
together, paying attention to both the contrast of the background color and the text
in order to make it more legible.
I decided to use mostly greyish and white colours with some dark red and dark blue.
The footer dark red colours matches with the font colour in the navbar. Social links are white
which also matches the navigation background as well as some of the sections’ backgrounds in the 
pages. The reason for choosing the dark blue background of the last div sections was
the bluish and dark (opaque overlay) background picture in _Home_ 
and _Accommodation_ page.

##### Typography

The _Amatic SC_ font is the main font used throughout the website with _Sans Serif_
as the fall-back font in case if for reason the primary font isn't being imported into the site.
I used it for navbar, headings, jumbotron and divs which don't contain too much text.
I used the _Roboto_ font for the larger group of texts, with _Sans Serif_
as the fall-back.

##### Imagery

I used transition to each activity section containing header, text and image in the _Home_ page.

The majority of photographs are taken by me during my stay in Kilbronogue.
The ones I was missing, like the norwegian mythology photo I took from [Unsplash site](https://www.lifeinnorway.net/norwegian-mythology-folk-tales/) 
and the accommodation background photo I found on very gifted illustrator's Laivi Põder [page](https://www.instagram.com/laivi_illustration/?hl=en)

I also designed my own logo for the website through [The Canva](https://www.canva.com/tools/logo-maker-q1/?utm_source=google_sem&utm_medium=cpc&utm_campaign=REV_UK_EN_CanvaPro_Branded_Tier2_EM&utm_term=REV_UK_EN_CanvaPro_Branded_Tier2_Logo%20Maker_EM&gclsrc=aw.ds&&gclid=Cj0KCQiA48j9BRC-ARIsAMQu3WQ7ydQ2Q3Kda5FdSQv4VHsPLO8MA73UXXeadtTRhM33HDo8yivlf6MaAnemEALw_wcB&gclsrc=aw.ds)

I chose the divider image from [Freepek page](https://www.freepik.com/free-vector/ornaments-collection-design-concept_3463268.htm).

In order to invert black colour to white, I used [Pinetools editor](https://pinetools.com/invert-image-colors).
I also made the background transparent by using [removebg site](https://www.remove.bg/).



## Features
***

The project consists of three different pages, all of which can be accessed through the menu in the navbar.

**Consistent features across all pages:**

-	The fixed navbar containing the menu at the top of the page is consistent and across all pages.
-	The sticky footer is consistent across all pages.
-	The navbar's and the footer's colour is consistent in each page, always containing the same elements.
-	Each page has a footer with copyright information and social media icons linking to different pages of the respective media.
-   I introduced a "Top up" button which can be found in the right bottom of each page and it leads to a navigation bar 
which makes the scrolling easier for each user.


### Features left to Implement

In the future, I would like:
* to add the links to the right social networks, because now the pages of the various social networks do not yet exist.
* add more places to visit in West Cork.
* add the option to choose the language of the website.



## Technologies used
***

**Languages, libraries, frameworks, editors and version control**

* HTML5
  * The language used to create the form and add content to the website.
* CSS3
  * The language used to style the HTML5 elements.
* [Bootstrap framework](https://getbootstrap.com/)
  * The project uses **Bootstrap4** to simplify the structure of the website and easily make the website responsive.
  * The project also uses BootstrapCDN to provide icons from [Font Awesome](https://fontawesome.com)
* [Gitpod](https://www.gitpod.io/)
  * I used Gitpod's development environment to write the code for the website
* [Git Version Control](https://git-scm.com/)
  * I used Git for Version Control to record changes and updates to my files
* [GitHub](https://github.com/)
  * I used GitHub’s repository hosting service to host my deployed website as well as track previous versions of my code 

**Other tools used:**

* [Balsamiq](https://balsamiq.com/)
  * I used Balsamiq to create wireframes for my project for large, medium and extra-small views.
* [Google Fonts](https://fonts.google.com/)
* [W3Schools](https://www.w3schools.com/css/default.asp)
  - It was helpful with all my HTML, CSS and Bootstrap issues.
* [Markdown here](https://markdown-here.com/livedemo.html)
  - Markdown editor created by Adam Pritchard
* [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)
* [Wikipedia](https://www.wikipedia.org/)

*Note: I also found [W3C Schools](https://www.w3schools.com/) a helpful resource throughout the project, 
providing me information related to HMTL, CSS, Bootstrap and sometimes even JavaScript which
wasn't required in this project. 

I cannot emphasize enough the importance of **Code Institute Slack Community** and their desire to help . 
I got responses in 100% of the cases and that helped me to proceed with the lessons
and it gave me a huge boost of confidence. This platform is very useful and friendly.


## Testing
***

**General Testing**

* Tested all external links opened in a new tab and went to the correct page
* Tested all internal links within the pages.
* Tested all buttons.
* Tested the responsive behaviour of images and text on desktops, laptops, notebooks and various smartphones.
* Reduce and expand the width of the window to verify that each line of text behaves the way expected, 
and that the text arrangement looks good on all device sizes.
* I identified and fixed the majority of problems that were affecting my site's performance, accessibility 
and UX by using open-source Google tool **Lighthouse**. A day before submitting the milestone, performance of
each page exceeded 80%.

**Navbar**

- Click on each navigation menu item and verify that it links to the correct page.
- Hover over navigation links and see the difference in colour.
- Click on one navigation link and see how the colour of the active link is different.
- Change the screen sizes to verify that the navigation bar is responsive and switches 
from in line menu to navbar toggler button with dropdown menu at the appropriate place.
- Tested the picture logo in all device sizes and it's well positioned.

**Map**

The map's div is fixed and the map is flexible inside the div and can be moved in different directions. 

- Press minimize and maximize buttons on the map to expand and reduce the scale. 
- Press _View larger map_ to see that the map opens in the new tab. 
- Press _Satelite imagery_ to see that it works both, in the page and in the larger view.
- Press _Street map_ again to see that it changes back to street view.

**Form contact**

- Try to submit the empty form and verify that an error message about the required fields appears
- Try to submit the form with an invalid email address and verify that a relevant error message appears
- Try to submit the form with all inputs valid and verify that a success message appears.
- Reduce and expand the width of the window to verify that the form display behaves and centres the way expected, 
and that it is well positioned on all device sizes.

**Footer**

- Hover over each social media icon and confirm the different colour of the icon.
- Click on each icon to confirm it opens a separate tab for its link.
- Reduce and expand width of the window to verify that the footer is responsive and that
is well positioned on all device sizes.


## Validation
***
I used **W3C CSS Validation Service** and **W3C Markup Validation Service** to check the validity of the website code.
The validator showed just one error and it's in the _gallery.html_ page.
It says that there is _src_ attribute missing from modal image. Every image in the _gallery.html_
has the _src_ and _alt_ attribute, but since this modal serves to open each image from the gallery and to make it bigger,
it wasn't possible to give a name to its source. Not taking into consideration this fact,
all the pages, as well as the CSS page, passed validation tests which can be verified by clicking on the following links:

- W3C CSS validation - [CSS page](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fgillem.github.io%2FKilbronogue_trip%2Fassets%2Fcss%2Fstyle.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- W3C Markup Validation - [Home page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fgillem.github.io%2FKilbronogue_trip%2Findex.html)
- W3C Markup Validation - [Gallery page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fgillem.github.io%2FKilbronogue_trip%2Fgallery.html)
- W3C Markup Validation - [Accommodation page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fgillem.github.io%2FKilbronogue_trip%2Faccommodation.html)


To test phone responsiveness of each page, I  used [Mobile friendly Test](https://search.google.com/test/mobile-friendly).
All three of the pages passed the test which can be checked by clicking on the following links: [Home page](https://search.google.com/test/mobile-friendly?id=HAcf9Qzh05MQltbkZByFNw),
 [Gallery page](https://search.google.com/test/mobile-friendly?id=zG1pGL1AnIlVCmg_60pdeA) and [Accommodation page](https://search.google.com/test/mobile-friendly?id=z5TcQNYJ91LtQ_hYvbzB1A)



## Deployment
***

This project was developed using the [Gitpod](https://www.gitpod.io/), committed to git and pushed to GitHub using the built in function within git.

To deploy this page to GitHub Pages from its [GitHub repository](https://github.com/AJGreaves/portrait-artist), the following steps were taken:

1. Log into GitHub.
2. From the list of repositories on the screen, select **GilleM/Memory_game**.
3. From the menu items near the top of the page, select **Settings**.
4. Scroll down to the **GitHub Pages** section.
5. Under **Source** click the drop-down menu labelled **None** and select **Master Branch**
6. On selecting Master Branch the page is automatically refreshed, the website is now deployed.
7. Scroll back down to the **GitHub Pages** section to retrieve the link to the deployed website.

**How to run this project locally**

To clone this project into Gitpod you will need:

1. A Github account. [Create a Github account here](https://github.com/)
2. Use the Chrome browser

Then follow these steps:

1. Install the [Gitpod Browser Extentions for Chrome](https://www.gitpod.io/docs/browser-extension/)
2. After installation, restart the browser
3. Log into [Gitpod](https://gitpod.com/) with your gitpod account.
4. Navigate to the [Project GitHub repository](https://github.com/GilleM/Kilbronogue_trip)
5. Click the green "Gitpod" button in the top right corner of the respository
6. This will trigger a new gitpod workspace to be created from the code in github where you can work locally.

To work on the project code within a local IDE such as VSCode, Pycharm etc:

1. Follow this link to the [Project GitHub repository](https://github.com/GilleM/Kilbronogue_trip).
2. Under the repository name, click "Clone or download".
3. In the Clone with HTTPs section, copy the clone URL for the repository.
4. In your local IDE open the terminal.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
git clone https://github.com/USERNAME/REPOSITORY
```

1. Press Enter. Your local clone will be created.

Further reading and troubleshooting on cloning a repository from GitHub [here](https://help.github.com/en/articles/cloning-a-repository).


## Credits
***


### Content
The code to develop  _Gallery_ page. was obtained from Snippet by *NMonst4* - [Bootsnip page](https://bootsnipp.com/snippets/P2gor) 

I used w3schools code for [Top up button](https://www.w3schools.com/howto/howto_js_scroll_to_top.asp).

I used CSS tricks for [quote](https://css-tricks.com/snippets/css/simple-and-nice-blockquote-styling/ ).

Text I used in my web page is copied from the following Wikipedia's pages, respectively:
- [Mount Gabriel](https://en.wikipedia.org/wiki/Mount_Gabriel)
- [Norwegian language](https://en.wikipedia.org/wiki/Norwegian_language#:~:text=Norwegian%20(Norwegian%3A%20norsk)%20is,in%20particular%2C%20are%20very%20close.)
- [Great Famine](https://en.wikipedia.org/wiki/Great_Famine_(Ireland))
- [Black '47 (film)](https://en.wikipedia.org/wiki/Black_%2747_(film))

Other text is copied from the following pages, respectively:
- [James Joyce Quote](http://www.notable-quotes.com/j/joyce_james_ii.html)
- [Jawaharlal Nehru Quote](https://www.brainyquote.com/quotes/jawaharlal_nehru_132485)
- [Rural population of Ireland](https://tradingeconomics.com/ireland/rural-population-percent-of-total-population-wb-data.html)
- [Butter Road](https://roaringwaterjournal.com/tag/the-butter-road-between-schull-and-ballydehob/)
- [George Eliot Quote](https://www.brainyquote.com/quotes/george_eliot_104038)
- [Jules Renard Quote](https://www.brainyquote.com/quotes/jules_renard_378268)
- [Angela Abraham Quote](https://www.descriptionari.com/quotes/home/)
- [Bantry sea temperature](https://www.seatemperature.org/europe/ireland/bantry.htm)
- [Meanings of Irish placenames](https://www.geographyinaction.co.uk/Text_based_site/Placenames/pnamesmeaning.html)
- [Kilbronogue story](https://en.wikipedia.org/wiki/Z)
- [Realities of Irish life](https://archive.org/stream/realitiesofirish00trenrich#mode/2up) book



### Media
The photos used in this site were obtained from the following pages:
- [Unsplash](https://www.lifeinnorway.net/norwegian-mythology-folk-tales/) photo
- [Canva](https://www.canva.com/tools/logo-maker-q1/?utm_source=google_sem&utm_medium=cpc&utm_campaign=REV_UK_EN_CanvaPro_Branded_Tier2_EM&utm_term=REV_UK_EN_CanvaPro_Branded_Tier2_Logo%20Maker_EM&gclsrc=aw.ds&&gclid=Cj0KCQiA48j9BRC-ARIsAMQu3WQ7ydQ2Q3Kda5FdSQv4VHsPLO8MA73UXXeadtTRhM33HDo8yivlf6MaAnemEALw_wcB&gclsrc=aw.ds) -
 _REMOVE_ 
- [Pinetools editor](https://pinetools.com/invert-image-colors) to invert black colour of the image to white
- [Remove bg site](https://www.remove.bg/) to make a background for some memory card pictures 



### Acknowledgements

- I received inspiration for this project from the beautiful paysage and peacefulness of the Kilbronogue
village, all the people I met there and animals I saw.

