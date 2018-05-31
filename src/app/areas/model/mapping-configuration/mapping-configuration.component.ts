import { Component, Input, OnInit } from '@angular/core';
import {
  MongoDBCollectionMapping, MongoDBField,
  MongoDBMappingConfiguration
} from '../../../shared/models/mapping/mongo-dbmapping-configuration';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { MongoConfigurationService } from '../../../shared/services/mongo-configuration.service';
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
  private _mongoConfigService: MongoConfigurationService;
  constructor(_matDialog: MatDialog, _mongoConfigService: MongoConfigurationService) {
    this._matDialog = _matDialog;
    this._mongoConfigService = _mongoConfigService;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>([]);
    this._mongoConfigService.mappingEmitter.subscribe( _mapping => {
      if (_mapping) {
        this.mapping = _mapping;
        this.displayColumns = this.mapping.getDisplayColumns();
        console.log(this.displayColumns);
      }
    });
  }
  allowDrop(evt: DragEvent) {
    evt.preventDefault();
  }
  onDrop(evt: DragEvent) {
    evt.preventDefault();
    const primaryCollection = this.mapping.getPrimaryCollection();
    const data: { collection: string, field: string } = JSON.parse(evt.dataTransfer.getData('text'));
    const mapping = new MongoDBCollectionMapping(this.mapping);
    const field = new MongoDBField();
    field.name = data.field;
    mapping.primary = false;
    mapping.collectionName = data.collection;
    mapping.addField(field);
    if (!primaryCollection) {
      const dialogRef = this._matDialog.open(ConfirmDialogComponent, {});
      dialogRef.afterClosed().subscribe( _res => {
        if (_res) {
          mapping.primary = true;
          this._mongoConfigService.addMapping(mapping);
        }
      });
    } else {
      this._mongoConfigService.addMapping(mapping);
    }
  }
}
