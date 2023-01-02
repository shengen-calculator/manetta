import * as functions from "firebase-functions";
import beforeCreateUser from "./main/beforeCreateUser";
import onCreate from "./main/onCreateUser";

exports.beforeCreate = functions.region("europe-west1")
    .auth.user().beforeCreate((user, context) => {
      return beforeCreateUser(user);
    });

exports.processSignUp = functions.region("europe-west1")
    .auth.user().onCreate((user) => {
      return onCreate(user);
    });
