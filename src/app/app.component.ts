import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// estos ayudan a lidiar con los apis
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Meme } from './meme';

/*
esta clase contiene la info general a correr del programa. Se llama app-root y su contenido se divide en
app.component.html y app.component.css
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meme-project';
  public mms : Meme[] = [];

  constructor(private http: HttpClient){

  }

  onSave() : void{
    console.log("Antes de invocar el REST");
    this.http.get<any>("https://api.imgflip.com/get_memes") // esto devuelve un Observable
      .subscribe(response => { //al llegar los datos asincronamente, los vamos a procesar aqui
        console.log(response, "Llego los datos");
        this.mms = response.data.memes;
      });
    console.log("Luego de invocar el REST");
  }
}
