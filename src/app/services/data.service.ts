import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// tap su función es hacer un acción para darnos la información del post
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
           .pipe(
             tap( post => {
              console.log(post);
             })
           );
  }
}
