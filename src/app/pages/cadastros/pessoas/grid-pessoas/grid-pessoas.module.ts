import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GridPessoasComponent } from './grid-pessoas.component';
import { HttpClientModule } from '@angular/common/http';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatSnackBarModule,
    MatPaginatorModule, 
    MatSortModule,
    MatTableModule, 
    MatFormFieldModule
  } from '@angular/material';

import { MatIcon } from '@angular/material/icon';
import { DataService } from '../../../../shared/services/data.service';
import { AddDialogComponent } from '../dialogs/add/add.dialog.component';
import { EditDialogComponent } from '../dialogs/edit/edit.dialog.component';
import { DeleteDialogComponent } from '../dialogs/delete/delete.dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        GridPessoasComponent,
        AddDialogComponent,
        EditDialogComponent,
        DeleteDialogComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatDialogModule,
        FormsModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatSortModule,
        MatTableModule,
        MatPaginatorModule,
        ReactiveFormsModule,
        MatFormFieldModule
    ],
    exports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatDialogModule,
        FormsModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatSortModule,
        MatTableModule,
        MatPaginatorModule,
        ReactiveFormsModule,
        MatFormFieldModule
    ],
    entryComponents: [
        AddDialogComponent,
        EditDialogComponent,
        DeleteDialogComponent
    ],
    providers: [
        DataService
    ],
    bootstrap: [GridPessoasComponent]
})
export class GridPessoasModule { }
