# Snack Or Booze App: Overview

Silicon Valley startups are no strangers to pivoting their products to appeal to the right customer demographic. In this assessment, you'll be taking the role of a developer who must update an existing site as part of a rebrand for a coding cafe turned bar and restaurant. You'll receive detailed instructions about what to include in the site and how to do it in the most professional looking way!

# “Snack or booze APP”, requierements.
- The homepage should show the # of food items (“snacks”) and drink choices (“drinks”)
- The navbar should add a new link, “Drinks”, leading to a page listing the drinks — just like the “Snacks” link leads to a page listing food items.
- The drink listing page should show a list of drink choices, with each being a link to the details about the drink, just like for food items.
- Note: However, you shouldn’t solve this by just cloning the FoodMenu and FoodItem components — you’d have so much duplicate code! Instead, turn these into generic components that can work with either food or drink lists/items.
- Extras: Now that you have more things on your menu, you should add a page that lets site users add either a drink or a snack.

# How to launch the app
Run npm i to install the dependencies and npm start to start the server.

Important! Although the React frontend doesn’t yet use it, you do have your backend set up so that npm start starts both your backend and your frontend. The backend is available at http://localhost:5000/. You have a RESTful JSON-oriented backend with two resources, drinks and snacks. (The backend supports all sorts of methods, but you will only need GET and POST for the exercise).

# Note: The Back-end Serer
We included a node library, json-server, which creates a straightforward fully-featured JSON REST API from a JSON file, including the ability to update that JSON file when changes are made via POST/PATCH/DELETE. When you add drinks/snacks, you’re changing the file db.json in the application directory.

json-server is terrific for working on front-end code challenges that would benefit from a simple backend API, or small-scale personal projects where a custom backend server would be overkill.

Also: we edited the package.json so that npm start doesn’t just start up the React server on 3000, but also json-server on 5000. This is a nice convenience—to work on the app, you don’t need to separately start/stop both. We did this with another add-on library, concurrently.
