# Roc Game Dev Jam Showcase 2017
Webpage featuring the games from the Roc Game Dev Jam 2017.

# Submitting Your Game
In order to submit your game to the showcase...
- **Your game needs to be built for HTML5** and playable in a standalone web page on a browser.
- **An index.html file that loads and displays your game should be included in the root folder of your submission.** All game content should be included and linked relative to that file.
- To load your game, the website will simply redirect to your index.html file. The URL will look something like this: http://rocgamedev.com/showcase-2017/games/your-project-name. A page refresh by the browser will be forced to avoid memory issues!
- **Include a banner.png file in the root folder of your submission** that will be displayed on the home page as a clickable link to your game. **The banner must be 720x480px in size to display properly.**
- **Include an info.json file in the root folder of your submission** so the site has some information to display about your game. The file needs to be a properly formatted JSON file with the following fields (also you can copy and paste this text right into your info.json file and just change the text!):
```json
{
    "title": "Test Game",
    "author": "Wes Rockholz",
    "description": "This is an example of an awesome game made right here in Rochester!"
}
```
- Here's an example of a valid submission, which happens to be a Unity WebGL build: ![Example Submission](https://raw.githubusercontent.com/weslo/rgdjam-showcase/master/readme-content/example-game-submission.png)
## Testing Your Submission
To test your submission, just place all of your game content in one folder, and load and display it via an index.html file in the root. Consider uploading your game to an FTP server and loading it via common browsers like Chrome, Firefox, or Safari to test that the game works over the net (**this is required for Unity WebGL builds to work**).
## Frequently Asked Questions
- **How much can I customize my game's webpage?** Since the site will just link to a web page where your game is embedded, you have full control over the style and structure of that web page. You could make your whole game a website, like Neopets, I guess. If you want to be super legit, you could add a 'Back to Showcase' button that links users to "../../" to go back to the showcase!
