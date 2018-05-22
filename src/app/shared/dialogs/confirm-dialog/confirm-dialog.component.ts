import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
  private _matDialogRef: MatDialogRef<ConfirmDialogComponent>;
  constructor(_matDialogRef: MatDialogRef<ConfirmDialogComponent>) {
    this._matDialogRef = _matDialogRef;
  }

  ngOnInit() {
  }
  yes(): void {
    this._matDialogRef.close(true);
  }
  no(): void {
    this._matDialogRef.close(false);
  }

}
