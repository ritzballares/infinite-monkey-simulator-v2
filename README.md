# Infinite Monkey Theorem Simulation v2

According to Wikipedia ([more information in the Wikipedia page here](https://en.wikipedia.org/wiki/Infinite_monkey_theorem)):
>The infinite monkey theorem states that a monkey hitting keys at random on a typewriter keyboard for an infinite amount of time will almost surely type any given text, such as the complete works of William Shakespeare.

## Purpose
The goal of this project is to determine how long it would take for the "monkey" to reproduce any given text.

## Algorithm
The algorithm in this simulation works like this: it generates a character and compares that with the character of the same index from the provided text to see if they match. If they do, then it moves on to the next character, else it repeats the process. This is slightly modified, however. A true infinite monkey theorem simulation, in my opinion, would involve randomly generating a set of characters instead of generating them one by one and then comparing afterward. However, the process can take a long time especially if the given text is very long. Therefore, I thought to make things faster, I would implement it the way I did in this simulation.

## Technologies used/learned
- HTML
- CSS
- Bootstrap
- JavaScript

## Check it out!
https://ritzballares.github.io/infinite-monkey-simulator-v2/