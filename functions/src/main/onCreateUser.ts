import * as functions from "firebase-functions";
import {Datastore} from "@google-cloud/datastore";
import {
  AuthUserRecord,
} from "firebase-functions/lib/common/providers/identity";
import * as admin from "firebase-admin";

const onCreate = async (user: AuthUserRecord) => {
  // Only users of a specific domain can sign up.
  const datastore = new Datastore();
  const email: string = user?.email?.length ? user.email : "";
  const storeQuery = datastore
      .createQuery("users")
      .filter("email", "=", email)
      .limit(3);
  const [users] = await datastore.runQuery(storeQuery);

  if (!users.length) {
    throw new functions.auth.HttpsError("invalid-argument",
        `Unauthorized email "${user.email}"`);
  }

  const customClaims = {
    role: users[0].role,
  };

  await admin.auth().setCustomUserClaims(user.uid, customClaims);
};

export default onCreate;
