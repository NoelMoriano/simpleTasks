if (globalData) {
}

//GET tasks
const validateTask = (tasks) => {
	if (!globalData.user) return null;

	if (tasks.length) {
		wrapperMessage.style.display = "none";

		const normalTask_ = tasks.filter((task) => task.priority === "normal");
		setTasks(normalTask_, "#normal-tasks");

		const importantTasks_ = tasks.filter((task) => task.priority === "important");
		setTasks(importantTasks_, "#important-tasks");

		const urgentTasks_ = tasks.filter((task) => task.priority === "urgent");
		setTasks(urgentTasks_, "#urgent-tasks");

		const completeTasks_ = tasks.filter((task) => task.priority === "complete");
		setTasks(completeTasks_, "#complete-tasks");
	} else {
		return null;
	}
};

const setTasks = (tasksList, idWrapper) => {
	const itemWrapper = document.querySelector(idWrapper);

	let html = "";
	tasksList.map((task) => {
		let li = `<div class="col mb-3">
			<div class="card text-white ${priorityColor(task.priority)} h-100">
				<div class="card-header d-flex justify-content-between">
						<div class="col-md-8">${task.priority.toUpperCase()}</div>
						<div class="col-md-4 d-flex justify-content-end">
							<i class="fas fa-edit m-1 fs-5 item-icon-edit" id="${task.id}"
							onclick="return updateTask('${task.id}')"
							data-bs-toggle="modal"
							data-bs-target="#updateTaskModal"
							></i>

							<i class="fas fa-trash-alt m-1 fs-5 item-icon-delete"
							data-bs-toggle="modal"
							data-bs-target="#deleteTaskModal"
							onclick="return deleteTask('${task.id}')"></i>
						</div>
				</div>
				<div class="card-body">
					<h5 class="card-title">${task.title}</h5>
					<p class="card-text">${task.description}</p>
				</div>
			</div>
		</div>`;

		html += li;
	});
	itemWrapper.innerHTML = html;
};

// COLOR PRIORITY
const priorityColor = (priority) => {
	switch (priority.toLowerCase()) {
		case "normal":
			return "bg-primary";
		case "important":
			return "bg-warning";
		case "urgent":
			return "bg-danger";
		case "complete":
			return "bg-success";
		default:
			return "bg-primary";
	}
};
