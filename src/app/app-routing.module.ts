import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AbrirModule} from "./abrir/abrir.module";
import {ArchivoComponent} from "./abrir/archivo/archivo.component";

const routes: Routes = [
  {
    path:'Archivo', component:ArchivoComponent,
    loadChildren:() => import('./abrir/abrir.module').then(m => m.AbrirModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
