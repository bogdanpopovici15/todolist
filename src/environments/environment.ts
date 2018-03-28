// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyDQjUIUxc99pN9ex2r-bZvniaQ9aAf8iZU",
    authDomain: "todolist-d3395.firebaseapp.com",
    databaseURL: "https://todolist-d3395.firebaseio.com",
    projectId: "todolist-d3395",
    storageBucket: "todolist-d3395.appspot.com",
    messagingSenderId: "648273322813"
  }
};
