import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [CampoControlErroComponent],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CampoControlErroComponent
  ]

})
export class SharedModule { }
