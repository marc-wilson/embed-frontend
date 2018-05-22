import { MongoDBConnection } from '../connections/mongo-dbconnection';

export class MongoMapping extends MongoDBConnection {
  public view: CollectionMapping[] = [];
  constructor(_mongoDBConnection: MongoDBConnection) {
    super(_mongoDBConnection);
  }
  addMapping(mapping: { collection: string, field: string }) {
    const match = this.view.find( v => v.name === mapping.collection );
    if (match) {
      match.fields.push(mapping.field);
    } else {
      const colMapping = new CollectionMapping();
      colMapping.name = mapping.collection;
      colMapping.fields = [mapping.field];
      this.view.push( colMapping );
    }
  }
  getPrimaryCollection(): CollectionMapping {
    return this.view.find( c => c.primary ) || null;
  }
}

class CollectionMapping {
  public name: string;
  public primary: boolean;
  public fields: string[];
  constructor() {}
}
