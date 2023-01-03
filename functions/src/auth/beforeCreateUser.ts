import * as functions from "firebase-functions";

import {
  AuthUserRecord,
} from "firebase-functions/lib/common/providers/identity";
import DataStoreService from "../DataStoreService";

const beforeCreate = async (user: AuthUserRecord) => {
  const dataStoreService = new DataStoreService();
  const email: string = user?.email?.length ? user.email : "";
  const users = await dataStoreService.getUserByEmail(email);

  if (!users.length) {
    throw new functions.auth.HttpsError("invalid-argument",
        `Unauthorized email "${user.email}"`);
  }
};

export default beforeCreate;
