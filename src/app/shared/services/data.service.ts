import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Pessoa} from '../models/pessoa';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class DataService {
  private readonly API_URL = 'https://api.github.com/repos/angular/angular/Pessoas';

  dataChange: BehaviorSubject<Pessoa[]> = new BehaviorSubject<Pessoa[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;

  constructor (private httpClient: HttpClient) {}

  get data(): Pessoa[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  getAllPessoas(): void {
    this.httpClient.get<Pessoa[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
      });
  }

  // DEMO ONLY, you can find working methods below
  addPessoa (Pessoa: Pessoa): void {
    this.dialogData = Pessoa;
  }

  updatePessoa (Pessoa: Pessoa): void {
    this.dialogData = Pessoa;
  }

  deletePessoa (id: number): void {
    console.log(id);
  }
}

