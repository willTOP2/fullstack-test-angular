import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})
export class Home2Component implements OnInit {

  public hello = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void { this.apiService.getHello().pipe(
    catchError((err) => {
      this.hello = 'Falha na comunicação com o servidor.';
      return [];
    })
    
  ).subscribe((response) => {
    if (response) {
      this.hello = response.mensagem; 
    
    }
  });

  }

}
