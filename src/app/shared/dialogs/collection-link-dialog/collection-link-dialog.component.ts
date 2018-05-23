import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-collection-link-dialog',
  templateUrl: './collection-link-dialog.component.html',
  styleUrls: ['./collection-link-dialog.component.scss']
})
export class CollectionLinkDialogComponent implements OnInit {
  public matDialogRef: MatDialogRef<CollectionLinkDialogComponent>;
  public data: any;
  public primaryField: string;
  public localField: string;
  constructor(_matDialogRef: MatDialogRef<CollectionLinkDialogComponent>, @Inject(MAT_DIALOG_DATA) _data: any) {
    this.matDialogRef = _matDialogRef;
    this.data = _data;
  }

  ngOnInit() {
  }
  ok(): void {
    this.matDialogRef.close({ primaryField: this.primaryField, localField: this.localField });
  }
}
