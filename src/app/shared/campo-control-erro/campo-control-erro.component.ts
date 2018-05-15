import { Component, AfterViewInit,  Input } from '@angular/core';

@Component({
  selector: 'campo-control-erro',
  templateUrl: './campo-control-erro.component.html',
  styleUrls: ['./campo-control-erro.component.scss']
})
export class CampoControlErroComponent implements AfterViewInit {

  @Input() msgErro: string;
  @Input() mostrarErro: boolean;

  constructor() { }

  ngAfterViewInit() {
  }

}