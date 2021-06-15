import { MoviesService } from './../movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  popularMoviesList: any = [];
  isLoading: boolean = false;
  imgPrefix: string = "https://image.tmdb.org/t/p/w500";
  totalPagesNumber: number = 0;
  currentPageNumber:number = 1;




  constructor(public _MoviesService: MoviesService, public _ActivatedRoute: ActivatedRoute, private _Router: Router) { }


  getMovies(page: number) {

    this.isLoading = true;

    this._MoviesService.getPopularMovies(page).subscribe((data) => {


      this.popularMoviesList = data.results;
      this.totalPagesNumber = data.total_pages*10;


    }, () => {
      this._Router.navigate(['notfound']);
    })

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);



  }

  goToPage(page:number) {
    this._Router.navigate(['/movies', page]);
  }


  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe((params)=>{
      console.log('param = ' + params.page);

      this.currentPageNumber = params.page;

      $('html, body').animate({
        scrollTop: 0
      }, 500);
  
  
      this.getMovies(params.page);
            
    })



    console.log(document.querySelector('ngb-pagination li'));
    
    
     
  }






}

