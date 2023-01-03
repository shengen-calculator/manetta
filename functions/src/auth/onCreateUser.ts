import * as functions from "firebase-functions";
import {
  AuthUserRecord,
} from "firebase-functions/lib/common/providers/identity";
import * as admin from "firebase-admin";
import DataStoreService from "../DataStoreService";

const onCreate = async (user: AuthUserRecord) => {
  const dataStoreService = new DataStoreService();
  const email: string = user?.email?.length ? user.email : "";
  const users = await dataStoreService.getUserByEmail(email);

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
