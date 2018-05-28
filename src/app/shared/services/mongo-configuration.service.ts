import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MongoDBMappingConfiguration } from '../models/mapping/mongo-dbmapping-configuration';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MongoConfigurationService {
  private _httpClient: HttpClient;
  public mappingEmitter: EventEmitter<MongoDBMappingConfiguration> = new EventEmitter<MongoDBMappingConfiguration>();
  constructor(_httpClient: HttpClient) {
    this._httpClient = _httpClient;
  }
  async save(mapping: MongoDBMappingConfiguration): Promise<MongoDBMappingConfiguration> {
    const res = this._httpClient.post<MongoDBMappingConfiguration>(
      `${environment.apiPath}/database/mappings/save`, mapping
    ).toPromise();
    return res;
  }
  async getMappings(): Promise<MongoDBMappingConfiguration[]> {
    const mappings = await this._httpClient.get<MongoDBMappingConfiguration[]>(
      `${environment.apiPath}/database/mappings`
    ).toPromise();
    return mappings.map( m => new MongoDBMappingConfiguration(m));
  }
  async getMapping(mappingId: string) {
    const mapping = await this._httpClient.get(`${environment.apiPath}/database/mapping/${mappingId}`).toPromise();
    return new MongoDBMappingConfiguration(mapping);
  }
}
