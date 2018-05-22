import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSidenav, MatTableDataSource } from '@angular/material';
import { NewConnectionDailogComponent } from '../../shared/dialogs/new-connection-dailog/new-connection-dailog.component';
import { MongoDBConnection } from '../../shared/models/connections/mongo-dbconnection';
import { DatabaseService } from '../../shared/services/database.service';
import { MongoMapping } from '../../shared/models/mapping/mongo-mapping';
import { ConfirmDialogComponent } from '../../shared/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {
  public matDialog: MatDialog;
  public databaseService: DatabaseService;
  public collections: { primary: boolean, fields: string[], collection: string }[];
  public dataSource: MatTableDataSource<any>;
  public displayColumns: string[] = [];
  public selectedFields: { collection: string, field: string }[] = [];
  public config: MongoDBConnection;
  public mapping: MongoMapping;
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
      this.mapping = new MongoMapping(this.config);
      this.loadSelectedCollectionsInfo(config);
      this.sidenav.open();
    } );
  }

  ngOnInit() {

  }
  async loadSelectedCollectionsInfo(config: MongoDBConnection) {
    const res: any = await this.databaseService.getBulkCollectionInfo(config);
    this.collections = res;
  }
  onDragStart(evt, collection, field): void {
    evt.dataTransfer.setData('text', JSON.stringify({ collection: collection, field: field } ));
    console.log(evt);
  }
  async onDrop(evt) {
    evt.preventDefault();
    const colObj: { collection: string, field: string } = JSON.parse(evt.dataTransfer.getData('text'));
    this.selectedFields.push(colObj);
    this.displayColumns.push(colObj.field);
    if (this.mapping.view.length === 0) {
      const dialogRef = this.matDialog.open(ConfirmDialogComponent);
      dialogRef.afterClosed().subscribe( _res => {
        if (_res) {
          this.mapping.addMapping(colObj);
          this.onPrimaryCollectionChange(colObj);
        }
      });
    }

    // const data: any = await this.databaseService.getSampleData(this.config, this.mapping);
    // this.dataSource = new MatTableDataSource<any>(data);
  }
  allowDrop(evt): void {
    evt.preventDefault();
  }
  onPrimaryCollectionChange(collection) {
    this.collections.forEach( c => { c.primary = false; });
    collection.primary = !collection.primary;
    if (this.mapping.view.length > 0) {
      this.mapping.view.forEach( c => { c.primary = false; } );
      const col = this.mapping.view.find( c => c.name === collection.collection );
      col.primary = !col.primary;
    }
  }
}
