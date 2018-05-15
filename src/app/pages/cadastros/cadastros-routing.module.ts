import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CadastrosComponent } from './cadastros.component';
import { GridPessoasComponent } from './pessoas/grid-pessoas/grid-pessoas.component';
const routes: Routes = [{
  path: '',
  component: CadastrosComponent,
  children: [{
    path: 'pessoas',
    component: GridPessoasComponent,
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class CadastrosRoutingModule { }

export const routedComponents = [
  CadastrosComponent,
  GridPessoasComponent,
];
