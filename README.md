<a name="readme-top"></a>
# ColorBerry Messages

A simple messaging app where you can color in the messages
<p align="center">
  <img src="./src/assets/ColorBerryScreen.png" alt="Png of the front page of the colerberry messages web app" width="600" height="auto" >
</p>


  <p align="left">
    <br />
    <a href="https://github.com/tessathornberry/Colorberry-messages"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/tessathornberry/Colorberry-Messages/issues">Report Bug</a>
    ·
    <a href="https://github.com/tessathornberry/Colorberry-Messages/issues">Request Feature</a>
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <li><a href="#challenges">Challenges</a></li>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#future-work">Future Work</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
This was a simple 3-day web app coloring-message project I created. 

<p align="center">
  <img src="./src/assets/ColorBerryView.png" alt="A colored-in message that says 'I think you are AMAZING!'" width="600" height="auto" >
</p>

In this app, one can log in, create a short message, color two boxes and the text with the palette, and save the colored-in message to the database, afterwhich, it will appear on the user's list. 

<p align="center">
  <img src="./src/assets/Colorberrycolor.gif" alt="animation of user coloring in a message with the palette" width="600" height="auto" >
</p>

At the time a message is created, a form allows the user two options:
1. to either copy and paste a unique code to send to a recipient in the messaging app of their choice, or 
2. fill the recipient's e-mail in to make it into a mailto hotlink, that, when clicked, opens the user's default e-mail service in a new tab.
<p align="center">
  <img src="./src/assets/colorberryemailentry.gif" alt="an image of the hotlink created by a user entering in the recipient's e-mail address" width="600" height="auto" >
</p>
If the user elects the second option, they are provided an e-mail prefilled with the recipient's address and the site link and code. 
<p align="center">
  <img src="./src/assets/ColorBerryMessageEmail.png" alt="A pre-filled e-mail form with link and code" width="600" height="auto" >
</p>
When a recipient copies the code and visits the site, regardless of if they are a user or not, the code will provide them with the sender's colored-in message.
<p align="center">
  <img src="./src/assets/ColorBerryCode.png" alt="entering the code in the web app" width="600" height="auto" >
</p>
<p align="center">
  <img src="./src/assets/ColorBerrySunset.png" alt="the received colored-in message" width="600" height="auto" >
</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Challenges
There were several challenges I faced in the building of this app that I had to overcome in a short amount of time in order to be able to present this app as a complete Version 1:

* I found that I really needed to standardize the appearance and relative sizing of the components of the messages, between the active message the user was coloring and the retrieved message they had colored and stored in the database. To accomplish this, I really fine-tuned the styled components I used in CSS.
* It was challenging determining how the selected color would be transferred to the clickable divs, and what their "importance" would be so that the user would be coloring the div they wanted rather than the one behind it or in front of it. To overcome this I had to program the z-index of each div, informing its relevance to the cursor's action, and create a color tracking system in state that would save a color upon a user click on the palette, and then would update the div background color upon the user's click following the color selection. I also had to ensure the selections had properties in the database schema that were updated upon submitting the message.
* I wanted to find a way to have the user be able to send the recipient a message without having the time to establish a full email module. In order to do this, I used the HTML mailto property and created a basic form encoded in the HTML that activated the user's default e-mail in the browser. 
* I also wanted the recipient to be able to retrieve their message wihout having to log in. I tried making a unique ID for each message using a hashing function with the user's input data, and then realized I could use MongoDB's auto-generated unique ID. Then I created a form on the entry page of the app that allowed an ID entry without requiring a log in, and for the page-load to only contain the retrieved message.
* At first, I could not figure out how to make the font color changable, because when one clicked on the actual words, the div behind it would update. To solve this issue, I programmed a separate tab the user could click to transfer the font color.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
### Built With

* [![React][React.js]][React-url]
* [![Express][Express.js]][Express-url]
* [![Node][Node.js]][Node-url]
* [![MongoDB][MongoDB]][MongoDB-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

To get a local copy of this simple web app, follow the steps below:

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```
* <a href="https://www.mongodb.com/docs/manual/installation/">MongoDB installed</a> and running (Community version ok)

### Installation

1. Clone the repo
   ```git
   git clone https://github.com/tessathornberry/Colorberry-Messages.git
   ```
2. Navigate into the root directory and the server directory and install npm packages

   ```git
   npm install
   -----------
   cd server/
   npm install
   ```
   
3. In new terminal window, navigate into the server directory and enter:

   ```sh
   npm run server-dev
   ```
   
4. In new terminal window, navigate into the root directory and enter:

   ```sh
   npm run start
   ```
   
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- FUTURE WORK EXAMPLES -->
## Future Work
While this app is a great starting point for what I had envisioned, there are many improvements or additions I would like to create for Version 2.

* Using Firebase and e-mail verification to securely establish user accounts for storage of messages
* Designing and coding far more complex SVG files for users to color that would size uniformly regardless of screen size.
* Adding an animation to the opening of a message
* Establishing a more varied palette such as one through React Color for a wider range of options, and a more intuitive font-coloring action
* Creating a cleaner e-mailing/messaging system and recipient code entry system
* Allowing the recipient to also color the message and save the result
* Deploying the app in the cloud for public use

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact
- **<a target="_blank" mailto="tessa.thornberry.engineer@gmail.com">tessa.thornberry.engineer@gmail.com</a>**
- <p align="left"> <a href="https://linkedin.com/in/tessathornberry" target="_blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="tessathornberry at LinkedIn" height="30" width="40" /> - Tessa Thornberry on LinkedIn</a>
</p>

Project Link: [https://github.com/tessathornberry/Colorberry-messages](https://github.com/tessathornberry/Colorberry-messages)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/tessathornberry/Colorberry-messages">
    <img src="public/strawberryicon.png" alt="Logo" width="80" height="80">
  </a>
  
<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* Green vines background/banner <a href="https://www.freepik.com/free-vector/seamless-intertwined-branches-leaves-pattern_10601246.htm#query=website%20background%20green%20leaves&position=3&from_view=search&track=sph">Image by macrovector</a> on Freepik
* Berry painting by <a href="http://www.tessathornberry.com">Tessa Thornberry</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/tessathornberry/Colorberry-Messages.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Express.js]: https://img.shields.io/badge/express.js-485063?style=for-the-badge&logo=express&logoColor=61DAFB
[Express-url]: https://expressjs.com/
[MongoDB]: https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://mongodb.com
[Node.js]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/
