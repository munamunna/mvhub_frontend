import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../service/movie.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent {
  id:any
  movie: any;

  reviewForm=new FormGroup({
    "comment":new FormControl("",Validators.required),
    "rating":new FormControl("",Validators.required)
  })

  constructor(private route:ActivatedRoute,private service:MovieService){
    this.id=this.route.snapshot.params["id"]
    console.log(this.id);
    this.fetchMovieDetails()
    
    // this.service.movieDetails(this.id).subscribe(res=>this.movie=res)
    
  }

  fetchMovieDetails(){
    this.service.movieDetails(this.id).subscribe(res=>this.movie=res)
  }

  addReview(){
    let formData=this.reviewForm.value
    console.log(formData);
    
    this.service.postReview(this.id,formData).subscribe(res=>this.fetchMovieDetails()
    )

  
    
  }

  
    

   
  

  





}
