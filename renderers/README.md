# Yup you got the right folder!
This is where the source code for all our renderers is stored.

Yep, its just not that simple to add:

```
<script>
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
	    eval(this.responseText);
	  }
	};
	xhttp.open("GET", "https://raw.githubusercontent.com/Buggem/.pixelmap/main/renderers/cuttlefish.js", true);
	xhttp.send();
</script>
```

To put the renderer as a function.

## Renderers
### Cuttlefish
Cuttlefish is a p5.js renderer.

How to use cuttlefish.js:

### Step #1: Turn on 'Instance Mode'
Unfortunatly you need instance mode for the project to run so Cuttlefish can detect which instance to write to.

(Without an instance Cuttlefish would use the instance as `undefined` which could lead to many countless errors.

### Step #2 Import the script
Add this to your HTML `<head>` element:

```
<script>
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
	    eval(this.responseText);
	  }
	};
	xhttp.open("GET", "https://raw.githubusercontent.com/Buggem/.pixelmap/main/renderers/cuttlefish.js", true);
	xhttp.send();
</script>
```

and make sure to constantly check for `window.hasOwnProperty("pixelmap")` and if that is true, `window.pixelmap.hasOwnProperty("p5")`

### Step #3 Render your pixelmap

Follow the pixelmap standard JS syntax (not file syntax)

So a minified 1 line pixelmap file could be rendered like this: (paste file contents where `<paste here>` is written)

```
var readtest = <paste here>;

const s = ( sketch ) => {

  sketch.setup = () => {
    sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
  };

  sketch.draw = () => {
    sketch.background(100);
    if(window.hasOwnProperty("pixelmap")) { if(window.pixelmap.hasOwnProperty("p5")) { window.pixelmap.p5.render(readtest, {x: 0, y: 0}, sketch); } }
		
  };
};

var myp5 = new p5(s);
```

### Step #4 run code.

Here is a good example of that in [the main example](https://openprocessing.org/sketch/1616444).

### Also see cuttlefish.md for more info.
