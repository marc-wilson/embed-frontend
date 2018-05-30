import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MongoDBConnection } from '../models/connections/mongo-dbconnection';
import { environment } from '../../../environments/environment';
import { MongoMapping } from '../models/mapping/mongo-mapping';
import { MongoDBMappingConfiguration } from '../models/mapping/mongo-dbmapping-configuration';

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
  async getDatabases(mapping: MongoDBMappingConfiguration) {
    const res = await this.httpClient.post(`${environment.apiPath}/database/databases`, mapping).toPromise();
    return res;
  }
  async getCollections(mapping: MongoDBMappingConfiguration): Promise<{ collectionName: string }[]> {
    const res = await this.httpClient.post<any[]>(`${environment.apiPath}/database/databases/collections`, mapping).toPromise();
    const collections: { collectionName: string }[] = res.map( c => ({ collectionName: c.name }));
    return collections;
  }
  async getBulkCollectionInfo(mapping: MongoDBMappingConfiguration) {
    const res = await this.httpClient.post(`${environment.apiPath}/database/databases/collections/bulkinfo`, mapping)
      .toPromise();
    return res;
  }
  async getSampleData(config: MongoDBConnection, mapping: MongoMapping) {
    console.log(mapping);
    const res = await this.httpClient.post(`${environment.apiPath}/database/query`, { config: config, mapping: mapping }).toPromise();
    return res;
  }
}
