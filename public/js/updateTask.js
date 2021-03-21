// UPDATE TASKS
const updateTaskForm = document.querySelector("#update-task-form");

const updateTask = async (taskId_) => {
	if (!globalData.user) return null;

	const inputIdTask = document.querySelector("#input-id-task");
	updateTaskForm.reset();

	const taskTitle = document.querySelector("#update-task-title");
	const taskDescription = document.querySelector("#update-task-description");
	const taskPriority = document.querySelector("#update-task-priority");

	const taskQuery = await fs.collection("tasks").doc(taskId_).get();
	const result = await taskQuery.data();

	inputIdTask.value = taskId_;
	taskTitle.value = result.title;
	taskDescription.value = result.description;
	taskPriority.value = result.priority;
};

updateTaskForm.addEventListener("submit", async (e) => {
	try {
		e.preventDefault();

		spinButton({identifier: ".btn-update-task", action: "save"});

		const inputIdTask = document.querySelector("#input-id-task").value;

		const taskTitle = document.querySelector("#update-task-title");
		const taskDescription = document.querySelector("#update-task-description");
		const taskPriority = document.querySelector("#update-task-priority");

		const taskTitleValue = taskTitle.value;
		const taskDescriptionValue = taskDescription.value;
		const taskPriorityValue = taskPriority.value;

		await fs.collection("tasks").doc(inputIdTask).update({
			title: taskTitleValue,
			description: taskDescriptionValue,
			priority: taskPriorityValue,
			updateAt: new Date(),
		});

		updateTaskForm.reset();
		hideModal("#updateTaskModal");
		console.log("Task update successfully!");
	} catch (e) {
		console.error("Task update: ", e);
	} finally {
		spinButton({identifier: ".btn-update-task", action: "default", text: "Update"});
	}
});
