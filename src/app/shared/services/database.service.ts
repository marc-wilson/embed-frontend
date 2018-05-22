import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MongoDBConnection } from '../models/connections/mongo-dbconnection';
import { environment } from '../../../environments/environment';
import { MongoMapping } from '../models/mapping/mongo-mapping';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  public httpClient: HttpClient;
  constructor(_httpClient: HttpClient) {
    this.httpClient = _httpClient;
  }
  async testConnection(config: MongoDBConnection) {
    const res = await this.httpClient.post(`${environment.apiPath}/database/connection/test`, config).toPromise();
    return res;
  }
  async getDatabases(config: MongoDBConnection) {
    const res = await this.httpClient.post(`${environment.apiPath}/database/databases`, config).toPromise();
    return res;
  }
  async getCollections(config: MongoDBConnection) {
    const res = await this.httpClient.post(`${environment.apiPath}/database/databases/collections`, config).toPromise();
    return res;
  }
  async getBulkCollectionInfo(config: MongoDBConnection) {
    const res = await this.httpClient.post(`${environment.apiPath}/database/databases/collections/bulkinfo`, config)
      .toPromise();
    return res;
  }
  async getSampleData(config: MongoDBConnection, mapping: MongoMapping) {
    console.log(mapping);
    const res = await this.httpClient.post(`${environment.apiPath}/database/query`, { config: config, mapping: mapping }).toPromise();
    return res;
  }
}
