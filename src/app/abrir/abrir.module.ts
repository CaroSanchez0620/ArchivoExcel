import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbrirRoutingModule } from './abrir-routing.module';
import { ArchivoComponent } from './archivo/archivo.component';
import { SeleccionarComponent } from './seleccionar/seleccionar.component';


@NgModule({
    declarations: [
        ArchivoComponent,
        SeleccionarComponent
    ],
    exports: [
        ArchivoComponent
    ],
    imports: [
        CommonModule,
        AbrirRoutingModule
    ]
})
export class AbrirModule { }
