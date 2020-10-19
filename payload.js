// send the page title as a chrome message
mySlots = document.getElementsByClassName("fc-event-stripe");
slotRanges = [];
//mySlots.forEach(x => slotRanges.push(x["fcSeg"]["eventRange"]["range"]))
for(i = 0; i < mySlots.length; i++)
{
    slotRanges.push(mySlots[i].text);
}
console.log(slotRanges);
chrome.runtime.sendMessage(JSON.stringify(slotRanges));