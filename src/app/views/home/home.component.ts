import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   public horas = '';  
 

  constructor(  private apiService: ApiService) { }

  ngOnInit(): void {
   
    this.apiService.getData().pipe(
      catchError((err) => {
        this.horas = 'Falha na comunicação com o servidor.';
        return [];
      })
      
    ).subscribe((response) => {
     
       // just testing if it is working
  

      if (response) {
        this.horas = response.DateHours; 
      
      }
   
    });
  }




  
  }


