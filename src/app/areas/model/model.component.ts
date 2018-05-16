import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewConnectionDailogComponent } from '../../shared/dialogs/new-connection-dailog/new-connection-dailog.component';
import { MongoDBConnection } from '../../shared/models/connections/mongo-dbconnection';
import { DatabaseService } from '../../shared/services/database.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {
  public matDialog: MatDialog;
  public databaseService: DatabaseService;
  public collections: any[];
  constructor(_matDialog: MatDialog, _databaseService: DatabaseService) {
    this.matDialog = _matDialog;
    this.databaseService = _databaseService;
    const dialogRef = this.matDialog.open(NewConnectionDailogComponent, {});
    dialogRef.afterClosed().subscribe( config => {
      this.loadSelectedCollectionsInfo(config);
    } );
  }

  ngOnInit() {

  }
  async loadSelectedCollectionsInfo(config: MongoDBConnection) {
    const res: any = await this.databaseService.getBulkCollectionInfo(config);
    this.collections = res;
    console.log(this.collections);
  }
}
