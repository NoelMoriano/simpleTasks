/* const btnAddTasks = document.querySelector("#run-add-tasks");

const userIds = [
	"9jK5t534mxXASUSZvW2eaPCn1363",
	"iVrP4SOnu4UbNzgVHIb79erpBfl2",
	"nhNwGmwIp1SZBQ4i8hviElFcvH82",
	"t5kxlhT7BScTjJtC1eMjDe0xeem1",
];

const toDateTime = (seconds) => new Date(seconds * 1000);

btnAddTasks.addEventListener("click", async () => {
	try {
		console.log("Iniciando");
 */
/* const tasksQuery = await fs.collection("tasks").get();
		const tasks = querySnapshotToArray(tasksQuery); */

/* 		const batch = fs.batch();

		const taskUsers = tasksOld.filter((task) => userIds.includes(task.userId));

		const filterTasks = taskUsers.map((task) => {
			console.log("task", task);

			const createAtTask = toDateTime(task.createAt.seconds);
			const updateAtTask = toDateTime(task.updateAt.seconds);

			return {
				...task,
				createAt: createAtTask,
				updateAt: updateAtTask,
			};
		});

		filterTasks.forEach((task) => {
			const taskRef = fs.collection("tasks").doc(task.id);

			batch.set(taskRef, task);
		});

		await batch.commit();

		return console.log("Finalizado");
	} catch (e) {
		console.error("Add tasks:", e);
	}
}); */
