console.log("i am listening");

WA.onEnterZone('Stream', () => {
    WA.sendChatMessage("Hello!", 'Mr Robot');
	openCoWebSite("https://www.youtube.com/embed/C4uJJnYAl94?autoplay=1");
})

WA.onLeaveZone('Stream', () => {
    WA.sendChatMessage("Goodbye!", 'Mr Robot');
	closeCoWebSite();
})