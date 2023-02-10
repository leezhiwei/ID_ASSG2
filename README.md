# ID_ASSG2
- Project Idea: Game Quiz-Theme<br />
- Student name: Lee Zhi Wei & Lim Jia Xian

# PROJECT IDEA
Developing a game called AlterPastel, It is a quiz themed game where players can participate by entering a nickname and start answering questions to gain points. Each player is stored into the Database and has score. Overall, will be compiled into a leader board (Separate page). Questions can be customised by quiz creator; each quiz will have QuizID. Will redirect to leader board, show current position. Question timing will be around 30 seconds. After timer runs out, the player will no longer be able to choose any options in the quiz. Thus, it will be taken as an incorrect answer and no points will be awarded, and the correct answer will be showed. The background colour is JS and will alternate between some colours with the help of JavaScript. Hence, name of game is chosen as AlterPastel.

&nbsp;
&nbsp;
&nbsp;

# Individual Contributions
- Jia Xian (Front-End)
  - Created HTML pages: Index, About, Play, Create
  - Learnt & Implemented JavaScript for Quiz questions instead of creating 10 html pages for each question (Pre-API) 
  - Implemented Responsiveness for HTML pages
  - CSS buttons, borders & design
  - Added TypeWriter on Index page via JavaScript
- Zhi Wei (Back-End)
  - Implemented RestDB API on existing JavaScript to retrieve questions from RestDB server instead of JavaScript code (Post-API)
  - Implemented  & Created JavaScript for Quiz Creation to be sent & retrived RestDB 
  - Added Altering colour backgrounds via JavaScript
  - Added scoreboard and usernames retrieved from RestDB
  - Added score & time left calculation

&nbsp;
&nbsp;
&nbsp;
# Design process / format
- PLAY / CREATE (HOME) page
  - AlterPastel Logo
  - Welcome message will be slowly revealed to user using typewriter
  - A href implemented as buttons to different html pages
- About Us page
  - Typewriter for headers
  - paragraph about AlterPastel information
- Play page
  - Textboxes for Custom Quiz ID & Username
  - Buttons to start Quiz
  - Checks if Username is the same as the custom Quiz creator's name (If so, prevent playing Quiz)
  - Hides previous contents to play Quiz 
  - Query and get Questions from RestDB 
- Create page
  - Textboxes for Quiz Question & Quiz Options
  - Web Form for Custom Quiz Creation
  - Submit button checks if all textboxes & fields are filled
  - Cancel button that clears all previous edits in form
  - Return button goes back to home page
- Score & Game over page (In play.html)
  - Displays Game Over Lottie
  - Calculates score and display different messages accordingly to score (If passes Quiz, Congratulate player. Otherwise, encourages player to do better next attempt)
  - Proceed to Scoreboard button
- Scoreboard page (In play.html)
  - Retrieves different player's score and position
  - Display current player's position in the leaderboard
  - Buttons to replay Quiz or Quit

&nbsp;
&nbsp;
&nbsp;

# Colour Theme
- Alternating Background with pastel colours
- Quiz border with dark themed orange-grey format
- With both of these different contrast of colours, it allows the player to feel a wonderful yet mystery feeling
- Mixed environment give players some exciting yet dreadful emotion while playing the Quiz, scrambling to choose correct option

&nbsp;
&nbsp;
&nbsp;

# Features
Responsive Interactions / Website Testing
- Added media screens for mobile ratios 320, 375, 400
Mobile Responsiveness
- Iphone
  - Iphone X, Iphone XR, Iphone 12 Pro, Iphone SE, Iphone 6/7/8 Plus
- Samsung
  -  Galaxy S8/S8+, Galaxy S9/S9+, Galaxy S20 Ultra, Galaxy A51/71
- Google 
  - Pixel 5 

Technologies / Language Implemented
- HTML
  - Base for score, time format
  - Custom create Quiz Form
- CSS
  - Created different style for buttons, paddings and textbox inputs
  - Created an empty border to allow typewrite to expand wordings without affecting main border
  - a href created to mimic a button sturcture to link different pages: Play or Create
- JavaScript
  - Gradient chaning for backgrounds, alternating with different colours
  - Made use of JavaScript to change questions on a single HTML page 
- API
  - RestDB implemented to generate questions, both default or custom created questions
  - Get leaderboard score from RestDB

&nbsp;
&nbsp;
&nbsp;

# Credits
Content / Media Images & Descriptions
- Logo creation
  Website Link - https://www.freelogodesign.org/ 

Acknowledgements / Sources of Inspiration
- Quiz Making, refered to below sources.
  - Stackoverflow Link - https://stackoverflow.com/questions/39981628/how-to-create-an-advanced-html-quiz 
  - Coding with nick Link - https://codingwithnick.in/create-a-quiz-app-using-html-css-javascript/
  - sitepoint about quiz structure Link - https://www.sitepoint.com/simple-javascript-quiz/
  - Youtube Tutorial Link - https://www.youtube.com/watch?v=pQr4O1OITJo&ab_channel=CodingNepal 
  - Codeactually Link - https://codeactually.com/interactivequiz.html
- JavaScript Animated Background (Gradient changing)
  - Website Link - https://speckyboy.com/css-javascript-animated-backgrounds/
- TypeWriter Effect
  -  CSS-TRICKS - Link : https://css-tricks.com/snippets/css/typewriter-effect/
- Empty Border Trick
  - Stack overflow - Link : https://stackoverflow.com/questions/9612758/add-a-css-border-on-hover-without-moving-the-element
- HTML & CSS Responsive Design
  - W3schools - Link : https://www.w3schools.com/html/html_responsive.asp 

&nbsp;
&nbsp;
&nbsp;

# - Video Link -


&nbsp;
&nbsp;
&nbsp;
# - PROJECT Link -
https://leezhiwei.github.io/ID_ASSG2/