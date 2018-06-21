<h1>TIC TIC TOE</h1>

<h2>User Story & Wireframe</h2>

AS A USER, I want to sign up, so I can play this game.

AS A USER, I want to sign in, so I can play on my account.

As A USER, I want to sign out, because so no one else can use my account.

As A USER, I want to change my password, because I want a more secured password.

As A USER, I want to see the game info, for informational purposes.

As A USER, I want user feed back on every event so user is aware of status.

https://imgur.com/a/rgKPBlW

<h2>What technologies were used:</h2>
<ul>
<li>jQuery</li>
<li>JavaScript</li>
<li>Git</li>
<li>Issue Cue</li>
<li>Grunt Serve</li>
<li>HTML</li>
<li>SCSS</li>
<li>AJAX</li>
</ul>

<h2>Development Process:</h2>
<p>I started out drawing my wire frame and listing out my user stories so I had somewhat of a visual aspect on my tasks. I made the tic tac toe grid consisting of nine divs which all shared the same class that I can reference altogether when the board needs to reset later down the road. I did not really focused much on the HTML and SCSS other than the basic set up because I knew I can always come back to it to touch it up. I put my functionality of the game as first priority. I also made a blank div box with an id message, where I keep the user updated with every action that occurs so the user is aware of what is going on at all times. I used jQuery .html and .append to display the success/failure result.</p>
<p>I did not want to start my logic yet at this point, I knew that it was going to by my biggest challenge aside from the game api. So I went on to completing the user api, but first I tested it out in the terminal with the curl scripts to make sure the api is responding. Once I made all forms for sign up, sign in, change password and sign out user and got the request from the api to all succeed I moved on to the next task.</p>
<p>After things were set up from previous steps, I worked on my logic which consists of many conditions under the event of user clicking each box. It included adding "X" and "O" onto the box clicked, alternating current player from X to O vice versa after each click, incrementing turns, and checking wins after each turn.</p>
<p>After that, I went back and started focusing on the game api mainly create game, show game, and update game. Create game and show game were buttons and update game was off of user action. Like the user api, the game api also displayed success/failure messages for the user.</p>
<p>The last thing I did was clean as much code as I could especially in my logic. I saw repeated code so I took them out and made a function and referenced it when needed. I touched up the scss and got rid of all my console log. I played the game many time to make sure it function properly so that the user will get the best experience out of the game. I kept my console open to view any error messages incase I missed something.</p>

<h2>Future Iteration/ fixed problems</h2>
<ul>
<li>Add more features and touch up the scss on page</li>
<li>Clean up code by making an outside function that refers to all the repeated code</li>
<li>Try out the game=over? api in the future</li>
<li>Abuse the issue cue to get things done more efficiently, I tend to get stuck and waste too much time trying to figure it out when I could just simply ask for assistance.</li>
<li>My board was not resetting after a game was over therefore, player O would start occasionally. I was able to fix it by making a reset function inside my logic conditions after a player won.</li>
<li>When a player puts an X or O into the board, the box would move a tad. Luckily this did not affect my game functionality, but I still would like to fix it..</li>
<li>I probably would of been better off using bootstrap to make my board rather than make nine divs since that led me to some grid issues with X and O placement inside the box</li>
</ul>
