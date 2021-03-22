const btnLogout = document.querySelector("#item-logout");

// LOGOUT
btnLogout.addEventListener("click", (e) => {
	e.preventDefault();
	auth
		.signOut()
		.then(() => {
			console.log("signOut success");
			contentAuthUser.style.display = "none";
			wrapperMessageTasksEmpty.style.display = "none";
			wrapperMessage.innerHTML = `<h4 class='title-banner-home text-center text-white'>Administra tus tareas de una manera muy simple ✏️🗒️</h4>`;
			validateTask([]);
			window.location.reload();
		})
		.catch((e) => {
			console.error("signOut", e);
		});
});
