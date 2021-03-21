// DELETE TASK
const deleteTask = (taskId) => {
	try {
		if (!globalData.user) return null;

		spinButton({identifier: "#btnDeleteTask", action: "delete"});

		let btnDeleteTask = document.querySelector("#btnDeleteTask");

		btnDeleteTask.addEventListener("click", async () => {
			await fs.collection("tasks").doc(taskId).delete();

			hideModal("#deleteTaskModal");

			console.log("Task delete successfully!");
		});
	} catch (e) {
		console.error("Task delete: ", e);
	} finally {
		spinButton({identifier: "#btnDeleteTask", action: "default", text: "Yes"});
	}
};
