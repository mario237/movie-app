import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.scss']
})
export class HomeheaderComponent implements OnInit {

  constructor(private _MoviesService:MoviesService) { }

  trendingMovies:any[] = []

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    margin:5,
    dots: false,
    navSpeed: 700,
    nav:false,
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 7
      }
    },

  }

  imgPrefix: string = "https://image.tmdb.org/t/p/w500";



 ngOnInit(): void {
   this._MoviesService.getTrending('movie').subscribe((response)=>{
    for(let i=0 ; i< response.results.length ; i++){
      if(response.results[i].media_type != 'tv'){
        this.trendingMovies.push(response.results[i]);
        
      }
    }
   })
}


}
