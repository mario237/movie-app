import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { TvComponent } from './tv/tv.component';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full'},
  {path:'home' , canActivate:[AuthGuard] , component:HomeComponent},
  {path:'movies/:page', canActivate:[AuthGuard] , component:MoviesComponent},
  {path:'tv', canActivate:[AuthGuard] , component:TvComponent},
  {path:'people', canActivate:[AuthGuard] , component:PeopleComponent},
  {path:'movieDetails/:type/:id', canActivate:[AuthGuard] , component:MovieDetailsComponent},
  


  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},


  {path:'**' , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
