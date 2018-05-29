import { Component, Input, OnInit } from '@angular/core';
import { MongoDBMappingConfiguration } from '../../../shared/models/mapping/mongo-dbmapping-configuration';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { ConfirmDialogComponent } from '../../../shared/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-mapping-configuration',
  templateUrl: './mapping-configuration.component.html',
  styleUrls: ['./mapping-configuration.component.scss']
})
export class MappingConfigurationComponent implements OnInit {
  @Input() mapping: MongoDBMappingConfiguration;
  public dataSource: MatTableDataSource<any>;
  public displayColumns: string[];
  private _matDialog: MatDialog;
  constructor(_matDialog: MatDialog) {
    this._matDialog = _matDialog;
  }

  ngOnInit() {
  }
  allowDrop(evt: DragEvent) {
    evt.preventDefault();
  }
  onDrop(evt: DragEvent) {
    evt.preventDefault();
    const data = JSON.parse(evt.dataTransfer.getData('text'));
    const primaryCollection = this.mapping.getPrimaryCollection();
    if (!primaryCollection) {
      const dialogRef = this._matDialog.open(ConfirmDialogComponent, {});
      dialogRef.afterClosed().subscribe( _res => {
        if (_res) {

        }
      });
    }
    console.log(primaryCollection);
    console.log('asdf', data);
  }

}
