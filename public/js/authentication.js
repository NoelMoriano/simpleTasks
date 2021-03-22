const signUpForm = document.querySelector("#signup-form");
const signInForm = document.querySelector("#signin-form");

const signInWithGoogle = document.querySelectorAll("#btn-signin-google");
const signInWithFacebook = document.querySelectorAll("#btn-signin-fb");

// SIGNUP EMAIL AND PASSWORD
signUpForm.addEventListener("submit", (e) => {
	e.preventDefault();
	spinButton({identifier: "#btn-signup", action: "singin"});
	const email = document.querySelector("#signup-email").value;
	const password = document.querySelector("#signup-password").value;

	auth
		.createUserWithEmailAndPassword(email, password)
		.then((user) => {
			hideModal("#signUpModal");
			spinButton({identifier: "#btn-signup", action: "default", text: "Sign Up"});
			console.log("signup:", user);
		})
		.catch((e) => {
			const errorCode = e.code;
			const errorMessage = e.message;
			spinButton({identifier: "#btn-signup", action: "default", text: "Sign Up"});
			console.error("signup->", errorCode + ":" + errorMessage);
		});
});

// SIGNIN EMAIL AND PASSWORD
signInForm.addEventListener("submit", async (e) => {
	try {
		e.preventDefault();

		spinButton({identifier: "#btn-signin-emailpass", action: "singin"});

		const email = document.querySelector("#signin-email").value;
		const password = document.querySelector("#signin-password").value;

		const user = await auth.signInWithEmailAndPassword(
			email.toLowerCase().trim(),
			password.toLowerCase().trim()
		);

		hideModal("#signInModal");
		console.log("signin Email&Pass:", user);
	} catch (e) {
		console.log("signin Email&Pass:", user);
	} finally {
		spinButton({
			identifier: "#btn-signin-emailpass",
			action: "default",
			text: "Iniciar sesión",
		});
	}
});

// SIGN IN WITH GOOGLE
signInWithGoogle.forEach((button) => {
	button.addEventListener("click", (e) => {
		e.preventDefault();
		spinButton({identifier: "#btn-signin-google", action: "singin"});
		const provider = new firebase.auth.GoogleAuthProvider();
		auth
			.signInWithPopup(provider)
			.then((user) => {
				console.log("SignInWithGoogle success: ", user);
				spinButton({
					identifier: "#btn-signin-google",
					action: "default",
					text: "Signin with google",
				});
				hideModal("#signInModal");
				hideModal("#signUpModal");
			})
			.catch((error) => {
				spinButton({
					identifier: "#btn-signin-google",
					action: "default",
					text: "Google",
				});
				console.error("signInWithGoogle->", error);
			});
	});
});

//  SIGNIN WITH FACEBOOK
signInWithFacebook.forEach((button) => {
	button.addEventListener("click", (e) => {
		e.preventDefault();
		spinButton({identifier: "#btn-signin-fb", action: "singin"});
		const provider = new firebase.auth.FacebookAuthProvider();

		auth
			.signInWithPopup(provider)
			.then((user) => {
				console.log("signInWithFacebook: ", user);
				spinButton({
					identifier: "#btn-signin-fb",
					action: "default",
					text: "Signin with facebook",
				});
				hideModal("#signInModal");
				hideModal("#signUpModal");
			})
			.catch((error) => {
				spinButton({
					identifier: "#btn-signin-fb",
					action: "default",
					text: "Facebook",
				});
				console.error("signInWithFacebook->", error);
			});
	});
});

// EVENTS onAuthStateChanged USERS

auth.onAuthStateChanged((user) => {
	let imgProfile = document.querySelector("#item-img-profile");
	let itemUserName = document.querySelector(".nav-user-name");

	contentAuthUser.style.display = "none";

	if (user) {
		//Set data global

		globalData["user"] = {...user.providerData[0], userId: user.uid};

		const userData = globalData.user;

		//Inner html user data
		imgProfile.src = userData.photoURL ? userData.photoURL : "./images/img-profile.png";
		itemUserName.innerHTML = userData.displayName ? userData.displayName : userData.email;

		/* fs
			.collection("tasks")
			.get()
			.then((querySnapshot) => {
				setTasks(querySnapshotToArray(querySnapshot));
			}); */
		fs
			.collection("tasks")
			.where("userId", "==", user.uid)
			.orderBy("createAt", "desc")
			.onSnapshot((querySnapshot) => validateTask(querySnapshotToArray(querySnapshot)));

		// Content user auth
		contentAuthUser.style.display = "block";
		wrapperMessage.style.display = "none";
		document.body.classList.add("new-bg-body");
	} else {
		validateTask([]);
		contentAuthUser.style.display = "none";
		wrapperMessage.innerHTML = `<h4 class='title-banner-home text-center text-white'>Administra tus tareas de una manera muy simple ✏️🗒️ </h4>`;
		globalData["user"] = null;
		console.error("Auth: signin no found:", user);
	}

	checkLinks(user);
});

// CHECK LINKS
const checkLinks = (user) => {
	let itemsSignIn = document.querySelectorAll(".item-user-exists");
	let itemsLogout = document.querySelectorAll(".item-user-not-exists");

	if (user) {
		itemsSignIn.forEach((link) => {
			link.style.display = "none";
		});

		itemsLogout.forEach((link) => {
			link.style.display = "block";
		});
	} else {
		itemsSignIn.forEach((link) => {
			link.style.display = "block";
		});

		itemsLogout.forEach((link) => {
			link.style.display = "none";
		});
	}
};
