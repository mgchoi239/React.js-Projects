# Personal Website Documentation

### Directory Structure:

```
src                 
├── App.js
├── index.js
└── components
    ├── NavBar.js               <=== default header that exists in all pages
    ├── NavBar.css
    ├── Footer.js               <=== default footer that exists in all pages
    ├── Footer.css
    ├── Image.css               <=== css for default logo/photo items
    └── pages                   <=== directory containing items related to the 4 pages accessible via NavBar
        ├── About.js                <=== brief intro of myself
        ├── Mile_Stones.js          <=== recent experiences
        ├── Readings.js             <=== GoodReads sync
        ├── Readings.css          
        ├── Ttca.js                 <=== blog posts
        ├── Cards                   <=== card items belonging to Mile_Stones page  
        |   ├── Cards.js
        |   ├── Cards.css
        |   └── CardItem.js
        └── Posts                   <=== post items belonging to Ttca page
            ├── Posts.js
            ├── Posts.css
            └── PostItem.js
```

## **Overview**

The objective of this project was to create a personal website from scratch using React.js. Due to lack of backend knowledge, this project does not include any syncing features (e.g comments, authentifcation and etc) but rather focuses on utilizing React.js to design a fully functioning website. The Website is divided into four pages, About, Mile Stones, Readings, and Ttca.

### **NavBar.js & Footer.js**

`NavBar.js` and `Footer.js` is the default header and footer, respectively. Regardless of the page being visited, the header and footer is the same which was implemented by directly placing them onto App.js. On the other hand, other components that require visit (located in pages directory) through interaction (clicking desiring page on NavBar) were implemented by importing BrowserRouter and sandwiching them between the NavBar and Footer in App.js as a switch. The menu function of NavBar was created using Link import.

#### **About.js**

About page is the default website page that contains a brief introduction of myself including my email and other linked websites (LinkedIn and GitHub). The logos are directly pulled from Wikipedia while the links are implemented with `<a href>` tag with the respective website. 

#### **Mile_Stones.js + Cards**

Mile Stones displays the list of experiences as cards. `Mile_Stones.js` only contains `<Cards />`, which abstracted away the details of cards into a separate directory. `Cards.js` creates the container/wrapper, its css settings, and individual card items with its respective props. Another file `CardItem.js` was created as to avoid complexity; each call to `<CardItem />` in `Cards.js` is given props (Location, Duration, and Role) that is formatted and displayed to the user in `CardItem.js`.

#### **Readings.js**

Readings page was created to share my personal affection for books. It did not involve any significant React functionality besides importing and linking GoodReads photo and website. 

#### **Ttca.js**

Ttca (Thoughts That Come Along) was an attempt to create a blog to keep track of entries with a title, date, and content. Though the final result of the blog was neat and legible, the structure of the code has space for improvement by restructuring the items and its css. The current structure is analogous to Mile_Stones and Cards directory where `Ttca.js` only contains `<Posts />`, which abstracted away the specifications of the posts. The difference from Cards is that each posts' content consists of 3 paragraphs each saved as separate props. This limits posts from having more than 3 paragraphs unless the props manually created each time they are needed. Moreover, it does not allow indentation, exhibiting limited flexibility. 
    
## **Conclusion**

The purpose of this personal website was to employ rudimentary React functionalities to create an interactive website. However, there were many simplications in the  structure to avoid excessive complexity. Further knowledge of React.js syntax and features would allow me to design a website of bigger scale in an organized manner, one that is easier for coders to interpret and one that allows users to comfortably explore.
