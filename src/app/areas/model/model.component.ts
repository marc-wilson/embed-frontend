import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSidenav, MatTableDataSource } from '@angular/material';
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
  public dataSource: MatTableDataSource<any>;
  public displayColumns: string[] = [];
  public selectedFields: { collection: string, field: string }[] = [];
  public config: MongoDBConnection;
  @ViewChild(MatSidenav) sidenav: MatSidenav;
  constructor(_matDialog: MatDialog, _databaseService: DatabaseService) {
    this.matDialog = _matDialog;
    this.databaseService = _databaseService;
    this.dataSource = new MatTableDataSource<any>([
      { test: '0', test1: '1', test2: '2' }
    ]);
    const dialogRef = this.matDialog.open(NewConnectionDailogComponent, {});
    dialogRef.afterClosed().subscribe( config => {
      this.config = config;
      this.loadSelectedCollectionsInfo(config);
      this.sidenav.open();
    } );
  }

  ngOnInit() {

  }
  async loadSelectedCollectionsInfo(config: MongoDBConnection) {
    const res: any = await this.databaseService.getBulkCollectionInfo(config);
    this.collections = res;
    console.log(this.collections);
  }
  onDragStart(evt, collection, field): void {
    evt.dataTransfer.setData('text', JSON.stringify({ collection: collection, field: field } ));
    console.log(evt);
  }
  async onDrop(evt) {
    evt.preventDefault();
    const colObj = JSON.parse(evt.dataTransfer.getData('text'));
    this.selectedFields.push(colObj);
    this.displayColumns.push(colObj.field);
    const data: any = await this.databaseService.getSampleData(this.config, this.selectedFields);
    console.log('data', data);
    this.dataSource = new MatTableDataSource<any>(data);
  }
  allowDrop(evt): void {
    evt.preventDefault();
  }
}
