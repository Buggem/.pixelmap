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
	... /*Type: JSON object/String - Geometry object defining where to start drawing (0, 0 will be the top left of the pixelmap)*/,
	... /*Type: p5.js Applet (JSON object) - Typically "window" without instance mode*/
);
```
`renderPixel()` takes on even more arguments
```
window.pixelmap.p5.renderPixel(
	... /*Type: JSON object/String - The singular JSON object of a pixel. See pixel formatting docs for expected layout for a Pixel object*/,
	... /*Type: JSON object/String - The pixel size. Used to be 'Strictly integer' but moved to Geometry object as of August 6, 8:25 am 2022 (Sydney, Australia time)*/,
	... /*Type: JSON object/String - The position of the Pixelmap. It is a Geometry object.*/,
	... /*Type: p5.js Applet (JSON object) - Typically "window" without instance mode*/
);
```
## Objects
### `Pixel`
Syntax for a `Pixel` is half-`Pixel`-half-[**`Geometry`**](https://github.com/Nyanport/.pixelmap/blob/main/renderers/cuttlefish.md#geometry)
We also have color syntax, such as:


`r` for Red (0 to 255)


`g` for Green (0 to 255)


`b` for Blue (0 to 255)

and

`a` for Alpha (also 0 to 255)

It is of the type `object` and this is the syntax for it:
```
var pixel = {"r": 0, "g": 0, "b": 0, "a": 255, "x": 0, "y": 0};
```
### `Geometry`
An `Geometry` object, known earlier as a `Position` object, specifies the position or size of a Pixelmap.
Two usages are the `pos` arguement for [**BRF**](https://github.com/Nyanport/.pixelmap/blob/main/renderers/cuttlefish.md#using-brf) and the `pixelsize` attriubute of the Pixelmap. It is also used in the [**`Pixel`**](https://github.com/Nyanport/.pixelmap/blob/main/renderers/cuttlefish.md#pixel) object.
It has an `x` attribute for positioning and, as we're using Cartesian coordinates, a `y` as well. These start, as I said earlier, in the top left.
Usage:
```
var geoObject = { "x": 0, "y": 0 };
```
