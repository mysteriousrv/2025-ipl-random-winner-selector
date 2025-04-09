# 2025-ipl-random-winner-selector
A simple JavaScript project that randomly selects an IPL team as the winner and displays it with dynamic team colors using DOM manipulation.
# 🏆 IPL Random Winner Selector with Team Colors

This fun JavaScript project selects a **random IPL team** as the winner when you click a button. It then updates the heading (`<h1>`) with the team's name and applies the team's **theme colors** using inline CSS.

## ✨ Features

- Random IPL team selection from a list
- Displays team name dynamically
- Applies team's primary and secondary colors to the heading
- Simple and interactive UI using plain HTML, CSS, and JavaScript

## 🧠 How It Works

### 📦 Team Data (Array of Objects)

```js
let arr = [
  {
    team: 'CSK',
    primary: 'yellow',
    secondary: 'green'
  },
  {
    team: 'RCB',
    primary: 'red',
    secondary: 'black'
  },
  {
    team: 'MI',
    primary: 'blue',
    secondary: 'golden'
  },
  {
    team: 'DC',
    primary: 'blue',
    secondary: 'red'
  },
  {
    team: 'GT',
    primary: 'darkblue',
    secondary: 'golden'
  },
  {
    team: 'SRH',
    primary: 'orange',
    secondary: 'black'
  }
]
```
#🖱️ DOM Selection and Click Logic

```let btn = document.querySelector('button')
var h1 = document.querySelector('h1')

btn.addEventListener('click', function() {
  let num = Math.floor(Math.random() * arr.length)
  let winner = arr[num]
  h1.innerHTML = winner.team
  h1.style.backgroundColor = winner.primary
  h1.style.color = winner.secondary
})
```
```querySelector()``` selects the button and heading from the HTML.

- On button click:

- A random number is generated.

- A random team is picked.

- Team name is shown inside ```<h1>```.

- Heading background and text color change based on that team's theme.


