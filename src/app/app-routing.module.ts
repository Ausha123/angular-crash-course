import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstCompComponent} from "./components/first-comp/first-comp.component";
import {AboutComponent} from "./components/about/about.component";

const routes: Routes = [
  {
    path: 'home',
    component: FirstCompComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'about/:username',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
