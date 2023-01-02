import * as functions from "firebase-functions";
import {Datastore} from "@google-cloud/datastore";
import {
  AuthUserRecord,
} from "firebase-functions/lib/common/providers/identity";

const beforeCreate = async (user: AuthUserRecord) => {
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
};

export default beforeCreate;
