//window.pixelmap = { "name": "COOLERRENDER" }; // Unofficial render test
const currentDate = new Date(); // So I never have to change the date
var version = 0.1; // Version represented as decimal int
console.log("Pixelmapper (aka NIPPER) for P5.js (codename Cuttlefish) v" + version.toString() + " renderer OFFICIAL\n\u00A9 The Pixelmap Authors " + currentDate.getFullYear()); // Making my life easier so I never have to update the year.
var pxname = "Official Pixelmapper (aka NIPPER) for P5.js (codename Cuttlefish) v" + version.toString() + " by The Pixelmap Authors";
var pmp5 = {
	"PixelMapP5Exception": function(message = "") {
		this.name = "PixelMapP5Exception";
		this.message = message;
	},
	"logs": false, // Do logs? boolean
	"render": function(pm, pos, sketch) { // Main render function
		if( ( !(typeof pm === 'object') || pm === null ) || ( !(typeof pos === 'object') || pos === null ) || ( !(typeof sketch === 'object') || sketch === null )) { // Null is an exception for this, for whatever reason it returns 'object'
			//console.warn("WARNING: Not ideal data type passed.");
			if(typeof pm === 'string') {
				try {
					var newPm = JSON.parse(pm);
					pm = newPm;
				} catch {
					throw new this.PixelMapP5Exception("Unable to parse JSON. Are you messing with pixelmap?");
				}
			}
			if(typeof pos === 'string') {
				try {
					var newPos = JSON.parse(pos);
					pos = newPos;
				} catch {
					throw new this.PixelMapP5Exception("Unable to parse JSON. Are you messing with pixelmap?");
				}
			}
			if(typeof sketch === 'string') {
				try {
					var newSketch = JSON.parse(sketch);
					sketch = newSketch;
				} catch {
					throw new this.PixelMapP5Exception("Unable to parse JSON. Are you messing with pixelmap?");
				}
			}
			if( ( !(typeof pm === 'object') || pm === null ) && ( !(typeof pos === 'object') || pos === null ) && ( !(typeof sketch === 'object') || sketch === null )) {
				throw new this.PixelMapP5Exception("Warning... all arguments incorrect");
			}
		}
		for(let pixel of pm.pixels) {
			this.renderPixel(pixel, pm.pixelsize, pos, sketch); // 'this' keyword refers to the object this function is being ran on (pixelmap.p5 or pmp5, in this case)
		}
		if(window.pixelmap.p5.logs) console.log("Finished render of \"" + ((typeof pm.name === 'undefined') ? ("Unnamed Pixelmap") : (pm.name)) + "\" at x: " + pos.x + ", y: " + pos.y);
	},
	"renderPixel": function(pixel, pixelsize, pos, sketch) { // Renders a single pixel
		if( ( !(typeof pixel === 'object') || pixel === null ) || ( !(typeof pos === 'object') || pos === null ) || ( !(typeof sketch === 'object') || sketch === null ) || ( !(typeof pixelsize === 'object') || pixelsize === null )) { // Null is an exception for this, for whatever reason it returns 'object'
			//console.warn("WARNING: Not ideal data type passed.");
			if(typeof pixel === 'string') {
				try {
					var newPixel = JSON.parse(pixel);
					pixel = newPixel;
				} catch {
					throw new this.PixelMapP5Exception("Unable to parse JSON. Are you messing with pixelmap?");
				}
			}
			if(typeof pos === 'string') {
				try {
					var newPos = JSON.parse(pos);
					pos = newPos;
				} catch {
					throw new this.PixelMapP5Exception("Unable to parse JSON. Are you messing with pixelmap?");
				}
			}
			if(typeof sketch === 'string') {
				try {
					var newSketch = JSON.parse(sketch);
					sketch = newSketch;
				} catch {
					throw new this.PixelMapP5Exception("Unable to parse JSON. Are you messing with pixelmap?");
				}
			}
			if((typeof pixelsize === 'string')) {
				try {
					var newPs = JSON.parse(pixelsize);
					pixelsize = newPs;
				} catch {
					throw new this.PixelMapP5Exception("Unable to parse JSON. Are you messing with pixelmap?");
				}
			}
			if( ( !(typeof pixel === 'object') || pixel === null ) && ( !(typeof pos === 'object') || pos === null ) && ( !(typeof sketch === 'object') || sketch === null ) && ( !(typeof pixelsize === 'object') || pixelsize === null )) {
				throw new this.PixelMapP5Exception("Warning... all arguments incorrect (from renderPixel())");
			}
		}
		if(window.pixelmap.p5.logs) console.log("Rendered pixel at x: " + pos.x + (pixel.x*pixelsize.x) + ", y: " + pos.y + (pixel.y*pixelsize.y));
		//console.log(sketch);
		sketch.noStroke();
		sketch.fill(pixel.r, pixel.g, pixel.b, pixel.a);
		sketch.rect(pos.x + (pixel.x*pixelsize.x), pos.y + (pixel.y*pixelsize.y), pixelsize.x, pixelsize.y);
	},
	"loadPixelmap": function(url, _callback) { // Newly added load feature
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var pm = JSON.parse(this.responseText);
				_callback(pm);
				window.savePixelmap(pm);
			}
		};
		xhttp.open("GET", url, true);
		xhttp.send();
	},
	"genPixelmap": function(_name ,_pxsize, image, _callback) { // Even newer generator from a p5.Image!
		var pm = { 
			"name": _name,
			"pixelsize": _pxsize,
			"pixels": []
		};
		for(let x = 0; x < image.width; x++) {
			for(let y = 0; y < image.height; y++) {
				var c = image.get(x, y);
				if(window.pixelmap.p5.logs) console.log("Transferred pixel at x: " + x + ", y: " + y);
				
				pm.pixels.push({ "r": red(c), "g": green(c), "b": blue(c), "a": alpha(c), "x": x, "y": y });
			}
		}
		_callback(pm);
	}
};
pmp5.PixelMapP5Exception.prototype = Error.prototype; // Make PixelMapP5Exception of type Error (make it a throwable error)
window.savePixelmap = function(pm) { // Saves to LocalStorage
	var pmID = Math.floor(Math.random() * 1000).toString();
	if(window.localStorage.hasOwnProperty(pmID)) {
		this();
		return;
	}
	if(window.pixelmap.p5.logs) console.log("Saving as Pixelmap #" + pmID);
	window.localStorage.setItem(pmID, JSON.stringify(pm));
}; // Hardly used saver
function unofficialFound() { // Don't overwrite OUR variable
	var renderID = Math.floor(Math.random() * 1000).toString();
	if(window.localStorage.hasOwnProperty(renderID)) { // This could get stuck in an infinite loop, clear all localstorage when fix needed
		this();
		return;
	}
	console.warn("WARNING: Unofficial renderer found using same variable name as official.\nIf you are the developer of this renderer please use a different variable name.\nThis render will now be sent to localstorage as render #" + renderID);
	window.localStorage.setItem(renderID, JSON.stringify(window.pixelmap)); // Bye bye other renderer, go into localstorage
	window.pixelmap = { "name": pxname }; // important to write render.name otherwise line 81 window.pixelmap.name will always be undefined
	window.pixelmap.p5 = pmp5; // DON'T REMOVE THIS LINE | DEFINES PIXELMAP.P5
}
if (typeof window.pixelmap === 'undefined') {
	// This case create a new one
	window.pixelmap = { "name": pxname }; // important to write render.name otherwise line 81 window.pixelmap.name will always be undefined
	window.pixelmap.p5 = pmp5; // DON'T REMOVE THIS LINE | DEFINES PIXELMAP.P5
} else if(window.pixelmap.name !== pxname) {
	// This case warn the user
	unofficialFound(); // We found an unofficial 'reserved variable overwrite'
}
//window.pixelmap.p5 = pmp5;
