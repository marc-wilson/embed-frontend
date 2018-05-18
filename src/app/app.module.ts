import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModelComponent } from './areas/model/model.component';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule,
  MatDialogModule, MatExpansionModule,
  MatIconModule,
  MatInputModule, MatListModule, MatSelectModule, MatSidenavModule,
  MatStepperModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { HomeComponent } from './areas/home/home.component';
import { NewConnectionDailogComponent } from './shared/dialogs/new-connection-dailog/new-connection-dailog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ModelComponent,
    HomeComponent,
    NewConnectionDailogComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatStepperModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  entryComponents: [
    NewConnectionDailogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
