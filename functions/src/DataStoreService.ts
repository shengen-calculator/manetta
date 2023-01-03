import {Datastore} from "@google-cloud/datastore";

/**
 * Represents a dataStore service
 */
export default class DataStoreService {
  private datastore: Datastore;
  /**
   * @constructor
   */
  constructor() {
    this.datastore = new Datastore();
  }
  /**
   * get User by email func.
   * @param {string} email - The email of the user.
   */
  public async getUserByEmail(email: string): Promise<any[]> {
    const storeQuery = this.datastore
        .createQuery("users")
        .filter("email", "=", email)
        .limit(3);
    const [users] = await this.datastore.runQuery(storeQuery);
    return users;
  }
}
