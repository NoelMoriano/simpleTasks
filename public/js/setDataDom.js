// SET OPTIONS PRIORITY IN SELECT

const prioritiesData = [
	{name: "Normal", code: "normal"},
	{name: "Importante", code: "important"},
	{name: "Urgente", code: "urgent"},
	{name: "Completado", code: "complete"},
];

//SET DATA INITIAL DOM

window.addEventListener("DOMContentLoaded", () => {
	const selectPriority = document.querySelectorAll(".task-priority");

	selectPriority.forEach((select) => {
		let selectHtml = "";
		prioritiesData.forEach((priority) => {
			let option = `<option value="${priority.code}">${priority.name}</option>`;
			selectHtml += option;
		});
		select.innerHTML = selectHtml;
	});
});
