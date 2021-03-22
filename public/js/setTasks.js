//GET tasks
const validateTask = (tasks) => {
	if (!globalData.user) return null;

	if (tasks.length) {
		wrapperMessage.style.display = "none";
		wrapperMessageTasksEmpty.style.display = "none";

		const normalTask_ = tasks.filter((task) => task.priority === "normal");
		setTasks(normalTask_, "#normal-tasks");

		const importantTasks_ = tasks.filter((task) => task.priority === "important");
		setTasks(importantTasks_, "#important-tasks");

		const urgentTasks_ = tasks.filter((task) => task.priority === "urgent");
		setTasks(urgentTasks_, "#urgent-tasks");

		const completeTasks_ = tasks.filter((task) => task.priority === "complete");
		setTasks(completeTasks_, "#complete-tasks");
	} else {
		wrapperMessageTasksEmpty.style.display = "flex";
		wrapperMessageTasksEmpty.innerHTML = `<h4 class="text-center text-white">
		Aun no tienes tareas registradas 🙄 <br/> comienza agregando algunos 😉 </h4>`;
	}
};

const setTasks = (tasksList, idWrapper) => {
	const itemWrapper = document.querySelector(idWrapper);

	let html = "";
	tasksList.map((task) => {
		let li = `<div class="mb-3">
			<div class="card custom-card-task text-white ${priorityColor(task.priority)} h-100">
				<div class="card-header d-flex justify-content-between">
						<div class="col-md-8 d-flex justify-content-start align-items-center">
						<h6 class="text-card-create-at fw-bold">${new Date(
							task.createAt.toDate()
						).toLocaleString()}</h6>
						</div>
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
					<h6 class="card-title fw-bold text-uppercase text-wrap lh-sm">${task.title}</h5>
					<p class="card-text fw-normal text-capitalize text-wrap lh-sm">${task.description}</p>
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
