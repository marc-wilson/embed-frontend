import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MongoDBMappingConfiguration } from '../../models/mapping/mongo-dbmapping-configuration';

@Component({
  selector: 'app-open-mapping-dialog',
  templateUrl: './open-mapping-dialog.component.html',
  styleUrls: ['./open-mapping-dialog.component.scss']
})
export class OpenMappingDialogComponent implements OnInit {
  private _matDialogRef: MatDialogRef<OpenMappingDialogComponent>;
  public mappings: MongoDBMappingConfiguration[];
  constructor(_matDialogRef: MatDialogRef<OpenMappingDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data: MongoDBMappingConfiguration[]) {
    this.mappings = data;
    this._matDialogRef = _matDialogRef;
    this._matDialogRef.updateSize('600px', '600px');
  }

  ngOnInit() {

  }
  openMapping(mapping: MongoDBMappingConfiguration): void {
    this._matDialogRef.close(mapping);
  }

}
