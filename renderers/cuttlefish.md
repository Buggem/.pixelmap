# cuttlefish.js (Pixelmapper for P5)

## Functions

### Using `pixelmap.p5.loadPixelmap()`

`loadPixelmap()` is not at all associated with p5.js. In fact, it can be used in vanilla Javascript!

Usage example:

```
var readtest, renderReady = false;
window.pixelmap.p5.loadPixelmap("https://raw.githubusercontent.com/Buggem/.pixelmap/main/examples/example1.pixelmap", function(pm) {
	readtest = pm;
	renderReady = true;
});
```

### Using BRF
BRF (standing for Basic Render Functions) includes `render()` and `renderPixel()`.
```
window.pixelmap.p5.render(
	... /*Type: JSON object/String - the first param is the JSON pixelmap object parsed or stringified.*/,
	... /*Type: JSON object/String - More JSON in here. set JSON objects x value to the desired x position and the y value to the desired y position.*/,
	... /*Type: p5.js Applet (JSON object) - Typically "window" without instance mode*/
);
```
`renderPixel()` takes on even more arguments
```
window.pixelmap.p5.renderPixel(
	... /*Type: JSON object/String - The singular JSON object of a pixel. See pixel formatting docs (coming soon) for expected layout for a Pixel object*/,
	... /*Type: Strictly integer - The pixel size. This feature is planned to be replaced later 2022.*/,
	... /*Type: JSON object/String - The position of the Pixelmap. It is a Position object.*/,
	... /*Type: p5.js Applet (JSON object) - Typically "window" without instance mode*/
);
```
