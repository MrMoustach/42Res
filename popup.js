// Inject the payload.js script into the current tab after the popout has loaded
window.addEventListener('load', function (evt) {
	chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
		file: 'payload.js'
	});;
});

// Listen to messages from the payload.js script and write to popout.html
chrome.runtime.onMessage.addListener(function (message) {
	/*mySlots = message.getElementsByClassName("fc-event-stripe");
	var slotRanges = []
	mySlots.forEach(x => slotRanges.push(x["fcSeg"]["eventRange"]["range"]))
	document.getElementById('pagetitle').innerHTML = JSON.stringify(slotRanges);*/
	console.log(message);
});