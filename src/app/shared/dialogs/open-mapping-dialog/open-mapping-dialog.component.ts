import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-open-mapping-dialog',
  templateUrl: './open-mapping-dialog.component.html',
  styleUrls: ['./open-mapping-dialog.component.scss']
})
export class OpenMappingDialogComponent implements OnInit {
  private _matDialogRef: MatDialogRef<OpenMappingDialogComponent>;
  constructor(_matDialogRef: MatDialogRef<OpenMappingDialogComponent>) {
    this._matDialogRef = _matDialogRef;
  }

  ngOnInit() {
  }

}
