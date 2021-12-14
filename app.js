// Define Body
let body = document.body;

// container.style.cssText = 'width: 1200px;'

// Styling Body
body.style.cssText = 'font-family: Arial; background-color:#ebeaea';
/* Navbar */

// Create Navbar Elements
let navbar = document.createElement('nav');
let logo = document.createElement('div');
let linksList = document.createElement('ul');

// Adding Navabr Content
let logoText = document.createTextNode('Hero');
let linksText = ['Home', 'About', 'Services', 'Contact'];

// Append Links To List
for (let linkText of linksText) {
    let link = document.createElement('li');
    link.textContent = linkText
    linksList.appendChild(link)
}
// Append Navabr Elements
logo.appendChild(logoText);
navbar.appendChild(logo);
navbar.appendChild(linksList);
body.appendChild(navbar);

// Styling Navbar
navbar.style.cssText = 'display: flex; background-color: #fff; padding: 10px; border-radius: 5px;'

// Styling Logo
logo.style.cssText = "font-weight: bold; font-size: 40px; color: #4cb64c";

// Styling List of Links
linksList.style.cssText = 'text-align: right;width: 100%;'

// Styling Links
for (let linkEle of linksList.children) {
    linkEle.style.cssText = 'list-style: none; display: inline-block; font-size: 20px; margin-right: 15px; flex-'
};

/*****************************************************************/

/* Body Content */

// Craete Box

// Container
let container = document.createElement('div');
container.className = 'container';
body.appendChild(container);
container.style.cssText = 'height: 531px;'
for (let i = 1; i <= 12; i++) {
    let box = document.createElement('div');
    let boxHeading = document.createElement('h2');
    let boxDescription = document.createElement('p');

    // Create Text
    let boxHeadingText = document.createTextNode(i);
    let boxDescriptionText = document.createTextNode('Product');

    // Append Texts
    boxHeading.appendChild(boxHeadingText);
    boxDescription.appendChild(boxDescriptionText);

    // Append Elements
    box.appendChild(boxHeading);
    box.appendChild(boxDescription);
    container.append(box)
        // Box Styling
    box.style.cssText = 'background-color: #fff; border-radius: 5px; box-shadow: #bcbcbc 4px 6px 20px; padding: 10px; margin: 30px 15px -15px 0 ; text-align: center; float: left; width: calc(100%/3 - 30px)';
    if (parseInt(boxHeadingText.textContent) % 3 === 0) {
        box.style.marginRight = '0px';
    }
    if (boxHeadingText.textContent == 1 || boxHeadingText.textContent == 2 || boxHeadingText.textContent == 3) {
        box.style.marginTop = '15px';
    }
}

/********************************************************************/

/* Footer */

// Create Footer
let footer = document.createElement('div');
let copyright = document.createElement('p');
let designer = document.createElement('p');

// Copyright Text
let copyText = document.createTextNode('Copyright © 2021');
let designerName = document.createTextNode('Mahmoud Samy');

// Apppend Text
copyright.appendChild(copyText);
designer.appendChild(designerName);
footer.appendChild(copyright);
footer.appendChild(designer);
body.appendChild(footer);

// Styling Footer
footer.style.cssText = 'background-color: #4cb64c; margin-top: 40px; display: flex; padding: 20px; justify-content: space-between; border-radius: 5px;'
copyright.style.cssText = 'margin: 0; color: #fff;';
designer.style.cssText = "margin: 0; color: #fff; font-weight: bold; font-family: 'Corinthia', cursive;"