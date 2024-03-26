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

## Citation for Chart

[Made In Ca](https://madeinca.ca/tea-consumption-statistics-canada/#:~:text=Tea%20Consumption%20Statistics%20for%20Canadians&text=55%25%20of%20Canadian%20women%20are,when%20making%20tea%20at%20home.)

## Installations

```
npm install cypress --save-dev
```

```
npm i axios
```

```
npm i --save chart.js react-chartjs-2
```

## Testing Methods Used

1. describe() - Enhances readibility on code and describes what the testing is about.
2. beforeEach() - Runs the code in the function before each individual test
3. visit() - Visit a remote URL
4. it() - Defines an individual test
5. get() - Locates an a, img , h1, footer, header
6. should() - Checks to see if element ‘exists’
7. and() - Checks to see if an a tag has a specified href, or title includes ‘moodbrew’
8. title() - Grabs the title tag
9. document() - Gets the window.document of moodbrew
10. viewport() - Sets the viewport of the screen
11. type() - types in the search bar a tea
12. contains() - search for an a tag that has the text Teas
13. click() - Click a tea after being searched
14. location() - Check for the url to match the tea clicked
