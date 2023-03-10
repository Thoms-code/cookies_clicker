# :cookie: Cookie Clicker

gh-pages link: https://thoms-code.github.io/cookies_clicker/

- Repository: `Javascript`
- Type of Challenge: `Consolidation`
- Duration: `5 days`
- Deadline: `17/01/23 17PM`
- Form: https://forms.gle/pR1rtj7QjqCwPRzv9
- Deployment strategy :
    - Github page
- Team challenge : In groups of three
    - frontend: 1 or 2
    - backend: 1 or 2
    - project management : 1

## Changelog
 > v0.0.1
> - Add git flow
> 
> v0.0.2
> - Resolve conflict in bootstrap

### Features to implement
 >  Add hints/ Tutorial
 >  Add Notification( No alerts) center that includes notification for:
	- Each action action that was taken 
	- Cookies spent
 >  Add side bar with action history
 >  Add reset button + reset notification

## Mission objectives

At the end of this challenge you should have improved your:

- **JavaScript** skills
- team skills
- git conflict skills

## The Mission

This challenge will have you create a [cookie clicker](https://en.wikipedia.org/wiki/Cookie_Clicker) as a team. Follow the instructions to complete the challenge, to get some ideas check the examples in the *resources* section.



<img src="https://media.giphy.com/media/1ngQorBCDcUFy/giphy.gif" alt="cookies" style="zoom: 200%;" />



### Must-have features / Instructions



> **!! Note: The steps below are meant to help you in development, but as long as you make a cookie clicker you can implement whatever you want !! **


**Step 1:** base structure

Write the base structure for the project in **HTML**, **CSS** and **JavaScript**. Within the HTML, put a *click* button which will increment a counter and a label initialised at *0* to display said counter.

**Step 2:** prepare the JavaScript

In your JavaScript prepare variables to allow you to control your button and label. You will also need a variable to keep track of the score.

**Step 3:** increase the score

When you click the button, increase the variable storing the score by *1*, then display the current score inside the label.

**Step 4:** make a multiplier

Add another button which will act as a multiplier. When called this button will permanently multiply the number of points per click, by *two* for example.

**Step 5:** price of multiplier

The multiplier allows you to have a big score quickly, that shouldn???t be free, it should be a purchase made with the current player score.

**Step 6:** no credit

You can???t make credit, meaning that the player cannot have a negative score. Think about updating the score display after a purchase.

**Step 7:** display multiplier counter

Display the counter within the multiplier. For example, if the counter is worth *5*, then the button should display something like *multiplier x5*.

**Step 8:** increase the cost

Buying a lot of multiplier is way too easy. For more fun, make it so that each time a multiplier is purchased the cost of buying a new one is increased.

**Step 9:** display the cost

In the text of the multiplier button you should also have the price of the upgrade.

**Step 10:** auto-clicker

Implement a new improvement to buy, the *auto-click*. As the name might suggest this bonus will automatically add a click to your score each *x* seconds.

**Step 11:** bonus

Implement yet another improvement to buy, the *bonus*. It should grant the player a boost in score of *200%* per click for *30 seconds*. When purchased the player should see a timer with the remaining time inside the bonus button.

**Step 12:** deactivate the buttons

Make it so that, if the player doesn???t have the points to purchase a multiplier, an auto-click or an other bonus, he can???t.

**Step 13:** make it pretty

**Your cookie clicker must be pretty, make it look good with CSS or some extra JavaScript.**

## Deliverables

1. Publish your source code on the GitHub repository.
2. Pimp up the readme file:
    - What, Why, When, How, Who.
    - Pending things to do
    - It must contain a link to the "live" version. The "live" version must contain a link to the source code on GitHub.
3. Publish the link to the "live" version on Discord.

### Steps

1. Create the repository
2. Study the request (What & Why ?)
3. Identify technical challenges (How ?)
4. UX Prototype ...

## Evaluation criterias

| Criteria       | Indicator                                                    | Yes/No |
| -------------- | ------------------------------------------------------------ | ------ |
| 1. Is complete | The student has realized all must-have features.             |        |
|                | There is a published GitHub page available.                  |        |
|                | The readme is complete                                       |        |
| 2. Is Correct  | The HTML and CSS pass the W3C Validation tool.               |        |
|                | The lighthouse test scores 90 at least on Performance, Best Practices, Accessibility and SEO. |        |
|                | The indentation is perfect                                   |        |

## Resources

- [cookie clicker](http://orteil.dashnet.org/cookieclicker/)
- [particle clicker](https://particle-clicker.web.cern.ch/particle-clicker/)

## Congrats

After all this hard work together, you all deserve a cookie!

<img src="https://media.giphy.com/media/w6MqZsuQurdYY/giphy.gif" style="zoom:200%;" />

## FAQ

###  What is this ?
This game allows you to collect cookies. Each click grants you a cookie. You can purchase different perks. Each perk allows you to receive more cookies from a single click. Finally if you are tired of clicking why not try to purchase the "autoclicker"? But i have no idea what it does...

### Cool... but why ?
Why not ? I mean everybody loves cookies. It was our teams goal to end world's hunger by giving away cookies. Since we currently dont posses the financial resources to distribute cookies around the world, we aimed for a more realistic goal : Giving away numerical cookies online.
The whole humanity consciousness will soon be uploaded online, so you might as well start collecting our delicious online cookies.

## It's amazing! How did you do it ?
We mainly used HTML to display the elements of this page. CSS was handled by bootstrap to make sure each element is displayed  where we wanted it to be displayed.JavaScript allowed back-end calculation and tracking of the cookies given. Since we chose to use bootstrap , we had to use a tool compatible with bootstrap to set up our local host. Vite was the answer! We had a few issues setting it up, but when it was set up it worked like a charm.



[cookies](/src/img/cookie2.png)
Thank you for reading

Copyright ?? January 2023, [FizaKhan2511](https://github.com/FizaKhan2511)/[Thoms-code](https://github.com/Thoms-code)/[merveil1](https://github.com/merveil1), @Becode, Brussels, Belgium
