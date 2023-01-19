import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { AddbookComponent } from './addbook/addbook.component';
import { OldestlatestComponent } from './oldestlatest/oldestlatest.component';

const routes: Routes = [ { path:'addbook', component:AddbookComponent },
                         { path:'', pathMatch:'full', redirectTo:'viewbooks'},
                         { path:'viewbooks', component:ViewbooksComponent},
                         { path:'oldestlatest', component: OldestlatestComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
