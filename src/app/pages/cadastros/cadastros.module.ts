import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from '../../@theme/theme.module';
import { CadastrosComponent } from './cadastros.component';
import { CadastrosRoutingModule, routedComponents } from './cadastros-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    CadastrosRoutingModule,
    MatProgressSpinnerModule,
  ]
  ,
  declarations: [
    ...routedComponents,
  ],
  providers: [

  ],
})
export class CadastrosModule { }
