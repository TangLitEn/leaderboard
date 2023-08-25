# leaderboard
A basic leaderboard system to compare whether a participant is a member of the game/event, accumulating the score, and sort it automatically based on the score

# ✨Setup
To start using this system, first set up the spreadsheet. There are two major tabs that are required in this code, which are 
1. The Leaderboard Tab, where you want the points to be added to and also sorted. This Tab will contain **ALL IDs of the participants**.
2. The Update Leaderboard Tab, this is the tab where you will put in the points **to be added** to the leaderboard tab.

For the Leaderboard tab name, I had set it as **Leaderboard** and for the Update Leaderboard tab name, I had set it as **Update Leaderboard**.

![Screenshot 2023-08-26 at 12 44 13 AM](https://github.com/TangLitEn/leaderboard/assets/65808174/81ce58f0-48e8-4284-9232-794ad59566d5)


In my setup, I had set the tabs' content to be as follows:

**Leaderboard**

![Screenshot 2023-08-26 at 12 37 42 AM](https://github.com/TangLitEn/leaderboard/assets/65808174/8fe34632-30dd-4db1-8bd9-7905ea17824f)

**Update Leaderboard**

![Screenshot 2023-08-26 at 12 37 28 AM](https://github.com/TangLitEn/leaderboard/assets/65808174/088660bd-c89e-4fb7-b84c-7559b20a1806)

Open up the app script environment and then copy and paste the content from the MAIN.gs files provided in this GitHub repo. 

# 🔥Customisation
You may modify the tab name, just need to variable in the section below. 

![Screenshot 2023-08-26 at 12 39 39 AM](https://github.com/TangLitEn/leaderboard/assets/65808174/fb4494db-f626-4a45-a3ac-88aba7f56df6)

You can also modify the leaderboard and update leaderboard, You just need to inform the system of the two parameters below, which are the 
1. Keys column, which is the column where the main IDs that are being checked
2. Values column, which is the column where the points that are tied to the main IDs

❗ Do take note that:
* Column A -> 1
* Column B -> 2
* Column C -> 3 
* ...

# 🤔Usage
1. Put all IDs into the Leaderboard sheets (in my case, it is the school IDs), and put all initial points as 0.
2. You will notice that there is a username column in the Leaderboard sheet, cause I created this system in Singapore, and we are very strict in PDPA (Private Data Protection Act), so we can't really display the real name upfront, so the people can actually choose their display name.
3. After marking the quiz/exam and obtaining the points that are tied to each id, you will need to place it into the Update Leaderboard sheet and then run the function.
4. If those IDs in the Update Leaderboard are present in the Leaderboard, their points will be added to their points and then sorted according to the points. Those rows in Update Leaderboard with their IDs found in the leaderboard will be highlighted green.
5. If those IDs aren't present in the Leaderboard (which means they are outsiders?), their points will not be updated in the Leaderboard. 
