import { Component, OnInit } from '@angular/core';

import { catchError } from 'rxjs/operators';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.scss']
})
export class PaginaComponent implements OnInit {

  public apiGreeting = 'abc';      
 



  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.post(this.apiGreeting).pipe(
      catchError((err) => {
        this.apiGreeting = 'Falha na comunicação com o servidor.';
        return [];
      })
    ).subscribe((response) => {
      if (response) {
        this.apiGreeting = response.msg;
      }
    });
  }

}
