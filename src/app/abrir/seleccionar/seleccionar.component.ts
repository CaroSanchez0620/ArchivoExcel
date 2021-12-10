import { Component, OnInit } from '@angular/core';
import {ajax} from "rxjs/ajax";

@Component({
  selector: 'app-seleccionar',
  templateUrl: './seleccionar.component.html',
  styleUrls: ['./seleccionar.component.css']
})
export class SeleccionarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  CargarExcel(){
    var excel = ("#txt_archivo").valueOf();
    if(excel == ""){
      Swal.fire("Mensaje De Advertencia", "Seleccionar archivo","warning");
    }
    var formdata = new FormData(SeleccionarComponent);


    var files = ("#txt_archivo")[0].files[0];
    formdata.append('archivoexcel',files);
  .ajax({
      url:'importa_excel_ajax.php',
      type: 'post',
      data: formdata,
      contentType:false,
      processData:false,
      success: function (resp){
        alert(resp);

      }
    });
}


<script> src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
