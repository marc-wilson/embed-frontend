export class MongoDBConnection {
  public connectionString: string;
  public databaseName: string;
  public collectionName: string;
  constructor(config?) {
    if (config) {
      this.connectionString = config.connectionString;
      this.databaseName = config.databaseName;
      this.collectionName = config.collectionName;
    }
  }
}
