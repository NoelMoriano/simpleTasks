const addTaskForm = document.querySelector("#add-task-form");

// ADD TASK FORM
addTaskForm.addEventListener("submit", async (e) => {
	try {
		if (!globalData.user) return null;

		e.preventDefault();

		spinButton({identifier: ".btn-save-task", action: "save"});

		const taskTitle = document.querySelector("#task-title").value;
		const taskDescription = document.querySelector("#task-description").value;
		const taskPriority = document.querySelector("#add-task-priority").value;

		const taskId = fs.collection("tasks").doc().id;

		await fs.collection("tasks").doc(taskId).set({
			id: taskId,
			title: taskTitle,
			description: taskDescription,
			priority: taskPriority,
			createAt: new Date(),
			userId: globalData.user.userId,
		});

		addTaskForm.reset();
		hideModal("#addTaskModal");
		console.log("Save task successfully");
		/* notification({type: "success", message: "Save task successfully"}); */
	} catch (e) {
		console.error("Save task:", e);
	} finally {
		spinButton({identifier: ".btn-save-task", action: "default", text: "Gurdar"});
	}
});
