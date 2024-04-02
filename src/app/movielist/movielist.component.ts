import { Component } from '@angular/core';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent {

  movies:any
  genres:any
  constructor(private service:MovieService){
    this.service.listMovies().subscribe(res=>this.movies=res)
    this.service.getAllgenres().subscribe(res=>this.genres=res)
  }

  getMoviesByGenres(genre_name:any){
    this.service.filterMovies(genre_name).subscribe(res=>this.movies=res)
  }

}
