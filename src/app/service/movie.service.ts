import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  register(data:any){
    return this.http.post('http://127.0.0.1:8000/api/register/',data)

  }

  authenticate(data:any){
    return this.http.post('http://127.0.0.1:8000/api/token/',data)
  }

  
  listMovies() {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    });
    return this.http.get("http://127.0.0.1:8000/api/movies/",{"headers":headers});
}

movieDetails(id:any) {
  const token = localStorage.getItem('authToken');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Token ${token}`
  });
  return this.http.get(`http://127.0.0.1:8000/api/movies/${id}/`,{"headers":headers})
}

postReview(id:any,data:any) {
  const token = localStorage.getItem('authToken');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Token ${token}`
  });
  return this.http.post(`http://127.0.0.1:8000/api/movies/${id}/add_review/`,data, {"headers":headers})
}

getAllgenres() {
  const token = localStorage.getItem('authToken');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Token ${token}`
  });
  return this.http.get(`http://127.0.0.1:8000/api/movies/genres/`, {"headers":headers})

  
}

filterMovies(genre:any){

  const token = localStorage.getItem('authToken');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Token ${token}`
  });
  return this.http.get(`http://127.0.0.1:8000/api/movies/?genre=${genre}`, {"headers":headers})
}

getReview(id:any){

  const token = localStorage.getItem('authToken');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Token ${token}`
  });
  return this.http.get(`http://127.0.0.1:8000/api/reviews/${id}/`,{"headers":headers})

}



}
