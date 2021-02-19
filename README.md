# UFO
# JavaScript and DOM Manipulation - Table Filters of Extra-Terrestrial Dataset

## Project Background Story

The project focuses on building a dynamic webpage taht accepts user inputs and adjusts accordingly to display information about UFOs sightings.

## Resources
- Data Source: [UFO data](https://github.com/achoav/UFO/blob/main/static/js/data.js)
- Software: HTML/CSS, JavaScript, Visual Studio Code 1.49.1, BootStrap 4.0.0

# Tasks

### Automatic Table and Date Search - Those files "index.html" and "app.js"

* Create a basic HTML web page or use the starter code file provided.

* Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

* Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.

* Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.

### Multiple Search Categories - Those files "index_v2.js" and "app2.js"

* Filter UFO sightings on multiple criteria

* Using multiple `input` tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

  1. `date/time`
  2. `city`
  3. `state`
  4. `country`
  5. `shape`
All filter parameters can be entered simultaneously.

## Summary
- One drawback of this design is the difficulty for the user to know what parameter to use for the filtering. For example to pick a city, the user would have to go through the table a find the city desired for the analysis.
- A way to address this would be to present drop-down lists including all filter values in place of the input fields.<br>
Each list would need to update after a parameter is selected in any filter.
<<<<<<< HEAD
- Including a button to clear the filters is also needed. The button would be located below the last filter
=======
- Including a button to clear the filters is also needed. The button would be located below the last filter.
>>>>>>> 02d5c4942746298b736e4285bd45683cca66d7f6
