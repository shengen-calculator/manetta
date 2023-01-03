import * as functions from "firebase-functions";
import beforeCreateUser from "./auth/beforeCreateUser";
import onCreate from "./auth/onCreateUser";

exports.beforeCreate = functions.region("europe-west1")
    .auth.user().beforeCreate((user, context) => {
      return beforeCreateUser(user);
    });

exports.onCreate = functions.region("europe-west1")
    .auth.user().onCreate((user) => {
      return onCreate(user);
    });
