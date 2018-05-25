import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MongoDBMappingConfiguration } from '../models/mapping/mongo-dbmapping-configuration';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MongoConfigurationService {
  private _httpClient: HttpClient;
  constructor(_httpClient: HttpClient) {
    this._httpClient = _httpClient;
  }
  async save(mapping: MongoDBMappingConfiguration): Promise<boolean> {
    const res = this._httpClient.post<boolean>(`${environment.apiPath}/database/mappings/save`, mapping).toPromise();
    return res;
  }
  async getMappings(): Promise<MongoDBMappingConfiguration[]> {
    const mappings = await this._httpClient.get<MongoDBMappingConfiguration[]>(
      `${environment.apiPath}/database/mappings`
    ).toPromise();
    return mappings.map( m => new MongoDBMappingConfiguration(m));
  }
  async open(mappingId: string) {

  }
}
