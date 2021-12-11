import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';

import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
 public message = '';
  public input = '';
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
   this.Mensagem();
  }

    Mensagem():void {
   

    this.apiService.post(this.input).pipe(
      catchError((err) => {
        this.message = 'Falha na comunicação com o servidor.';
        return [];
      })
      
    ).subscribe((response) => {
     
       // just testing if it is working
  

      if (response) {
        this.message = response.msg; 
        
      }
   
    });

  }

}
