# MoodBrew

## Description
An app where you can get recommended tea's based on your mood or health.

## Team Members
- Kushal
- Patrick
- Olivia
- Neema
- Meelaud

## API's
[API Ninja - Recipe API](https://api.api-ninjas.com/v1/recipe)
[Tea API](https://github.com/NeemaToto/NeemaToto.github.io.git)

## Installations
```
npm install cypress --save-dev
```
```
npm i axios
```

## Testing Methods Used
1. describe() - Enhances readibility on code and describes what the testing is about.
2. beforeEach() - Runs the code in the function before each individual test
3. visit() - Visit a remote URL
4. it() - Defines an individual test
5. get() - Locates an <a>, <img> , <h1>, <footer>, <header>
6. should() - Checks to see if element ‘exists’
7. and() - Checks to see if an <a> tag has a specified href, or title includes ‘moodbrew’
8. title() - Grabs the <title> tag
9. document() - Gets the window.document of moodbrew
10. invoke() - Interacts with functions or methods on DOM elements - Force visibility of header hamburger menu and ensures it exists
11. type() - types in the search bar a tea
12. trigger() - triggers search function in search bar to search
13. click() - Click a tea after being searched
14. location() - Check for the url to match the tea clicked

