// Your web app's Firebase configuration

const firebaseConfig = config;

const hosts = ["simpletasks-prod.web.app", "simpletasks-prod.firebaseapp.com"];

const hostName = window.location.hostname;

const ambient = hosts.includes(hostName) ? "prod" : "dev";

console.info(ambient);

const config_ = firebaseConfig[ambient];

firebase.initializeApp(config_);

const auth = firebase.auth();

const fs = firebase.firestore();

firebase.analytics();
