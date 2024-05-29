document.getElementById("idea-btn").addEventListener("click", function () {
	fetch("https://apis.scrimba.com/bored/api/activity")
		.then((res) => res.json())
		.then((data) => {
			document.getElementById("random-idea").textContent = data.activity;
		});
});
