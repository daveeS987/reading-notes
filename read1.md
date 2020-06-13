# Read: 01 - SMACSS and Responsive Web Design

## Links:

- [Shay Howe’s intro to RWD](http://learn.shayhowe.com/advanced-html-css/responsive-web-design/)
- [All About Floats](https://css-tricks.com/all-about-floats/)
- [Don’t Overthink It Grids](https://css-tricks.com/dont-overthink-it-grids/)
- [CSS Floats Explained By Riding An Escalator](https://medium.freecodecamp.org/css-floats-explained-by-riding-an-escalator-57fa55232333)
- [SMACSS Official Documentation](http://smacss.com/)

## Responsive Web Design

- Responsive Web Design - practice of building a website suitable to work on every device regardless of size. Broken down into 3 components:

  - flexible layouts
  - media queries
  - flexible media

- Flexible Layouts - practice of building layout with a flexible grid, capable of resizing to any width.  
  `target % context = results` (target element width % parent element width = percentage)

- Media Queries - provide the ability to specify diffrent styles based on different browsers, device circumstances, width of viewport, or device orientation.
  - Import using the following or link via html

```
/* @media Rule */
@media all and (max-width: 1024px) {...}

/* @import Rule */
@import url(styles.css) all and (max-width: 1024px) {...}
```

- Media type includes "all", "screen", "print", "tv", and "braille". if not specified will default to "screen"
- Logical Operators in Media Queries - "and", "not", "only"

- Mobile First - technique that uses smaller viewport as default sizes and adds media queries as viewport grows

- For best results use device default by applying "device-height" and "device-width" values

- Flexible Media - quick way - max-width property with value of 100%
- Flexible embedded Media -

```
figure {
  height: 0;
  padding-bottom: 56.25%; /* 16:9 */
  position: relative;
  width: 100%;
}
iframe {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
```

## Floats


<br>
<br>

[Back to Table of Contents](README.md)