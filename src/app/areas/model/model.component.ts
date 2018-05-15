import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewConnectionDailogComponent } from '../../shared/dialogs/new-connection-dailog/new-connection-dailog.component';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {
  public matDialog: MatDialog;
  constructor(_matDialog: MatDialog) {
    this.matDialog = _matDialog;
    this.matDialog.open(NewConnectionDailogComponent, {});
  }

  ngOnInit() {

  }
}
