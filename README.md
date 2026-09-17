# The Odin Project - Project: Etch-a-Sketch

## 🌅 Context
This project sits at the end of the foundations part of the programme, bringing together everything covered so far on JavaScript and the DOM. It's designed to get us comfortable with:

- Selecting and creating DOM elements dynamically
- Using CSS Grid to lay out a variable number of elements
- Handling and responding to user events (mouse events in particular)
- Manipulating an element's styles with JavaScript

## 🌱 Purpose and Use Case
We're going to build a browser-based version of the classic Etch-a-Sketch toy.

The page will render a grid of square divs. Hovering the mouse over a square will change its background color, letting the user "draw" on the grid. A button will let the user set a new grid size (with a limit of 100x100 squares) which clears the sketch and generates a fresh grid.

## 💭 Reflections

- Border-box vs content-box matters more than I realized: with the default `content-box`, a border is added *on top of* the width you set, not included in it. With 16+ elements each adding a fraction of a pixel of border, the rounding error stacked up and made the grid overflow its container at some zoom levels but not others (100%/150% happened to round evenly, in-between values didn't).
- Fix: use `outline` instead of `border` for grid cell dividers. Outlines don't take up layout space at all, so they can't cause this kind of sizing/rounding overflow — worked perfectly here instead of fiddling with `box-sizing`.
- For anything with a variable in a string, remember to use the `${}` brackets and backtick (`` ` ``) notation (template literals).
- Flags like `isDrawing` are way more important and useful than I thought they would end up being.
- `innerHTML = ""` can quickly clear out all child elements of a parent element.
- Something like `reset.addEventListener("click", resetCanvas(size))` doesn't work because we're calling the function immediately when we should be passing it/referencing it (e.g. `() => resetCanvas(size)`).

Overall I had a blast with this and have a few ideas on how I want to iterate and make this more fleshed out since this is currently a really REALLY MVP version for now 😂
