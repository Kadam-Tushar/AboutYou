window.addEventListener("load",(e) => {
    console.log("called");
	if ('serviceWorker' in navigator) {
		try {
			navigator.serviceWorker.register('./serverworker.js');
			console.log('SW registered');
		} catch (error) {
			console.log('SW failed');

		}
	}
});
