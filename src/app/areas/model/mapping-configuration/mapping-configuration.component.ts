import { Component, Input, OnInit } from '@angular/core';
import { MongoDBMappingConfiguration } from '../../../shared/models/mapping/mongo-dbmapping-configuration';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-mapping-configuration',
  templateUrl: './mapping-configuration.component.html',
  styleUrls: ['./mapping-configuration.component.scss']
})
export class MappingConfigurationComponent implements OnInit {
  @Input() mapping: MongoDBMappingConfiguration;
  public dataSource: MatTableDataSource<any>;
  public displayColumns: string[];
  constructor() { }

  ngOnInit() {
  }
  allowDrop(evt: DragEvent) {
    evt.preventDefault();
  }
  onDrop(evt: DragEvent) {
    evt.preventDefault();
    const data = JSON.parse(evt.dataTransfer.getData('text'));
    console.log(data);
  }

}
