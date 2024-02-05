import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './clientes/home/home.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
      /*Ambos*/
      {path: '', component: HomeComponent},
      /*Cliente*/
      /*Admin*/ 
      ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
