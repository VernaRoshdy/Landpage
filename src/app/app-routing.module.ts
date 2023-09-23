import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CareerComponent } from './career/career.component';
import { HomeComponent } from './home/home.component';
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: "enabled",
  anchorScrolling: "enabled",
  scrollOffset: [0, 64]
};
const routes: Routes = [

  {
    path: "content",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "Careers",
    component:CareerComponent ,
    pathMatch: "full"
  },
  {
    path: "",
    redirectTo: "content",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
   
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 60] // [x, y]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
