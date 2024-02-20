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
3. .visit() - Visit a remote URL
4. it() - Defines an individual test 
5. .get() -  Locates a DOM element and allows other commands to interact with it
6. .should() - Makes an assertion about that state of a DOM element
7. .and() - An alias for .should()
8. .title() - Gets current title of the page
9. .document() - Gets the window.document of the page
10. .invoke() - Interacts with functions or methods on DOM elements
