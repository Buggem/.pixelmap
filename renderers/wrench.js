const currentDate = new Date(); // So I never have to change the date
var version = 0.1; // Version represented as decimal
console.log("Pixeltools (codename Wrench) package v" + version.toString() + " renderer OFFICIAL\n\u00A9 The Pixelmap Authors " + currentDate.getFullYear()); // Making my life easier so I never have to update the year.
var pxname = "Official Pixeltools (codename Wrench) package v" + version.toString() + " by The Pixelmap Authors";
var wrenchL = {
	"PixelToolsException": function(message = "") {
		this.name = "PixelMapP5Exception";
		this.message = message;
	},
	"logs": false, // Do logs? boolean
	"loadPixelmap": function(url, _callback) { // Newly added load feature
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				try {var pm = JSON.parse(this.responseText);} catch {throw new this.PixelToolsException("Unable to parse URL response.");}
				if(typeof pm == 'object' && typeof _callback == 'function') { _callback(pm); }
				window.savePixelmap(pm);
			}
		};
		xhttp.open("GET", url, true);
		xhttp.send();
	}
};
pmp5.PixelToolsException.prototype = Error.prototype; // Make PixelMapP5Exception of type Error (make it a throwable error)
window.savePixelmap = function(pm) { // Saves to LocalStorage
	var pmID = Math.floor(Math.random() * 1000).toString();
	if(window.localStorage.hasOwnProperty(pmID)) {
		this();
		return;
	}
	if(window.pixelmap.wrench.logs) console.log("Saving as Pixelmap #" + pmID);
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
	window.pixelmap.p5 = wrenchL; // DON'T REMOVE THIS LINE | DEFINES PIXELMAP.WRENCH
}
if (typeof window.pixelmap === 'undefined') {
	// Remember to use alongside pixelmap
	throw new wrenchL.PixelToolsException("Unable to write. No PixelMapper to use alongside.");
} else if(window.pixelmap.wrench.name !== pxname) {
	// This case warn the user
	unofficialFound(); // We found an unofficial 'reserved variable overwrite' or a undefined value!
} else {
  window.pixelmap.p5 = wrenchL;
}
