import { Component, Input, OnInit } from '@angular/core';
import {
  MongoDBMappingConfiguration
} from '../../../shared/models/mapping/mongo-dbmapping-configuration';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { MongoConfigurationService } from '../../../shared/services/mongo-configuration.service';

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
  }
  allowDrop(evt: DragEvent) {
    evt.preventDefault();
  }
  onDrop(evt: DragEvent) {
    evt.preventDefault();
    const data: { collection: string, field: string } = JSON.parse(evt.dataTransfer.getData('text'));

    console.log('droppedObj', data);
  }

}
