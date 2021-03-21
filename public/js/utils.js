const hideModal = (idModal) => {
	let modal = document.querySelector(idModal);
	const modal_ = bootstrap.Modal.getInstance(modal);
	modal_.hide();
};

const showModal = (idModal) => {
	let modal = document.querySelector(idModal);
	const modal_ = bootstrap.Modal.getInstance(modal);
	modal_.show();
};

const querySnapshotToArray = (data) => {
	let newData = [];
	data.forEach((doc) => {
		newData.push(doc.data());
	});
	return newData;
};

const spinButton = ({identifier, action, text = "loading..."}) => {
	const itemElement = document.querySelector(identifier);
	console.log("identifier->", identifier);
	itemElement.innerHTML = `${action !== "default" ? spinType[action] : text} `;
};

const spinType = {
	save: `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Saving...`,
	update: `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Saving...`,
	delete: `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Deleting...`,
	singin: `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Login...`,
};

/* const notification = ({type = "primary", message}) => {
	let myToast = document.querySelector("#toast");

	console.log("myToast->", myToast);

	const messageElement = document.querySelector(".message-notification");
	messageElement.textContent = message;

	myToast.addEventListener("show.bs.toast", function () {
		myToast.show();
	});
};
 */
