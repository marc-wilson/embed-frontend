import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatSelectionList, MatStepper } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MongoDBConnection } from '../../models/connections/mongo-dbconnection';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-new-connection-dailog',
  templateUrl: './new-connection-dailog.component.html',
  styleUrls: ['./new-connection-dailog.component.scss']
})
export class NewConnectionDailogComponent implements OnInit {
  public matDialogRef: MatDialogRef<NewConnectionDailogComponent>;
  public connectionConfig: MongoDBConnection = new MongoDBConnection();
  public databaseService: DatabaseService;
  public databases = [];
  public collections = [];
  @ViewChild(MatSelectionList) 'collectionsList';
  constructor(_matDialogRef: MatDialogRef<NewConnectionDailogComponent>, _databaseService: DatabaseService) {
    this.matDialogRef = _matDialogRef;
    this.databaseService = _databaseService;
  }

  ngOnInit() {

  }
  onConnectionSelected(connection: string, stepper: MatStepper) {
    switch (connection) {
      case 'MongoDB':
        this.connectionConfig = new MongoDBConnection();
        break;
      default:
        this.connectionConfig = null;
        break;
    }
    stepper.next();
  }
  onConnectionStringChanged() {
    this.getDatabases();
  }
  onDatabaseChange() {
    this.getCollections();
  }
  async testConnection() {
    const result = await this.databaseService.testConnection(this.connectionConfig);
    // TODO: Icon for success/fail
  }
  async getDatabases() {
    const databases: any = await this.databaseService.getDatabases(this.connectionConfig);
    this.databases = databases;
  }
  async getCollections() {
    const collections: any = await this.databaseService.getCollections(this.connectionConfig);
    this.collections = collections;
  }

}
