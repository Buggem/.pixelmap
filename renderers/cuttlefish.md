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
