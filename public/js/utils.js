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

const spinButton = ({identifier, action, text = "Cargando..."}) => {
	const itemElement = document.querySelector(identifier);
	itemElement.innerHTML = `${action !== "default" ? spinType[action] : text} `;
};

const spinType = {
	save: `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Guardar...`,
	update: `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Guardar...`,
	delete: `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Eliminar...`,
	singin: `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Iniciar sesión...`,
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
