// SET OPTIONS PRIORITY IN SELECT

const prioritiesData = ["normal", "important", "urgent", "complete"];

//SET DATA INITIAL DOM

window.addEventListener("DOMContentLoaded", () => {
	const selectPriority = document.querySelectorAll(".task-priority");

	selectPriority.forEach((select) => {
		let selectHtml = "";
		prioritiesData.forEach((priority) => {
			let option = `<option value="${priority}">${priority}</option>`;
			selectHtml += option;
		});
		select.innerHTML = selectHtml;
	});
});
