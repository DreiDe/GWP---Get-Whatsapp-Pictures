# GWP---Get-Whatsapp-Pictures
Javascript Chrome plugin to get Whatsapp profile pictures for dataset creation with the use of the internal Whatsapp Web API.
This project was inspired by <a href="https://github.com/LoranKloeze/WhatsAllApp">WhatsAllApp</a> from <a href="https://github.com/LoranKloeze">LoranKloeze</a>


<h3>Disclaimer:</h3>
This project was made for research purposes only!<br>
Using the script might be against Whatsapp's user agreement!<br>
You might get banned! Don't use your real phone number!<br>
Use of this project happens at your own risk!


<h3>Requirements:</h3>
-Webserver (Apache; Xampp; Wamp)<br>
-Chrome


<h3>Installation:</h3>
1. Clone the project.<br>
2. Extract all files from the Zip.<br>
3. Put the extracted folder into your webserver folder (htdocs; var/www).<br>
3. Open up Chrome and go to chrome://extensions/.<br>
4. Turn on "Developer mode" in the upper right-hand corner.<br>
5. Click the load extension button.<br>
6. Choose the extracted folder and click "OK".


<h3>Goals of this project:</h3>
At the moment the project has 3 main goals:<br>
1. Discover the internal Whatsapp Web Api and see What's possible.<br>
2. Get thousends of images for the use in machine learning systems.<br>
3. Get data for analysing and evaluation purposes.


<h3>What this project is capable of:</h3>
At the current state the project is only able to get profile pictures from Whatsapp users by their phone number. Also if they are not in your contacts. The script generates a set of 100 numbers by chance (currently the german number format is used but you should be able to change this easily) and saves the profile picture of the desired number (if the number exists, uses Whatsapp and has the Profile picture set to public) to the in whatsapp.php given location. After that the page is reloaded (whithout reloading the page you get a rate limit from the servers realy fast) and the process starts over and over again. If you want to stop the process disable the plugin in the Chrome extension settings.

<h3>Statistics:</h3>
Average time to get a picture: 1.81s<br>
Average file size of one picture: 48KB<br>
Rate Limit: ban after 9380s and 5035 pictures (can't remember how many requests that were... must be close to 100.000)

Statistics were messuared at max script speed with an internet connection speed of 10MB/s upload and 35MB/s download.<br>
I would suggest not to use the script at max speed. Change setTimeout() from 50ms to something bigger or you will propably be banned after 9380s. 

<br><br>
I'm realy interested in what you come up using this project for. I would be realy thankful if someone could tell me more about the rate limit he/she discovered so we can find out more about the "sweet spot".<br>
If you have some more ideas feel free to contribute.<br>
This project is working at the state of today (31.10.2018) but because Whatsapp is constantly changing their API please raise an issue if you experience any bug.
