# Mini Quote Saver

Mini Quote Saver is a small web app that lets users quickly add, view, and delete their favorite quotes in the browser.  
All quotes are stored using the browser’s `localStorage`, so they remain saved even after refreshing or closing the tab.

## Features

- Add a quote using an input field and “Add” button  
- Press Enter in the input to add a quote  
- See all saved quotes listed on the page  
- Delete individual quotes with a Delete button  
- Quotes stay saved between page reloads with `localStorage`

## Tech Stack

- HTML for structure  
- CSS for layout and styling  
- Vanilla JavaScript for all behavior and data handling  
- Web API : `localStorage` for persistence

## How It Works

- On page load, the app:
  - Reads the `"quotes"` item from `localStorage`  
  - Parses it into a JavaScript array (or uses an empty array if nothing is saved)  
  - Renders each quote into the list

- When the user adds a quote:
  - The input value is trimmed  
  - Non-empty quotes are added to the beginning of the `quotes` array using `unshift`  
  - The array is saved back to `localStorage` as JSON  
  - The list in the DOM is re-rendered to show the latest data

- When the user deletes a quote:
  - The quote is removed from the `quotes` array using `splice(index, 1)`  
  - The updated array is saved to `localStorage`  
  - The list is re-rendered without that quote

## Core JavaScript Logic (Overview)

- `addQuote()`  
  - Reads the input, validates it, pushes it into the `quotes` array, saves, and reloads the list.

- `deleteQuote(index)`  
  - Removes the quote at the given index and refreshes both storage and UI.

- `saveQuotes()`  
  - Converts the `quotes` array to JSON and stores it under the `"quotes"` key in `localStorage`.

- `loadQuotes()`  
  - Clears the existing list and recreates `<li>` elements for each quote.  
  - For every quote:
    - Creates a `span.quote-text` that displays the quote  
    - Creates a `button.delete-btn` that deletes this specific quote when clicked


This project demonstrates DOM manipulation, event handling, and client-side persistence with `localStorage`, which are core concepts for front-end web development.
