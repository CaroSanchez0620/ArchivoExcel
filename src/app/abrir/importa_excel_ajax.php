<?php
  if(is_array(_FILES['archivoexcel']) && count(_FILES['archivoexcel']) >0){
    //llamada a la libreria
    require_once 'PHPExcel/Classes/PHPExcel.php';
    require_once 'conexion.php';

    tmpfname = _FILES['archivoexcel']['tmpfname'];
    //creea y lee archivo
    leerexcel = PHPExcel_IOFactory :: createReaderForFile(tmpfname);
    //carga
    excelobj = $leerexcel -> load (tmpfname);
    //carga hoja en la que se trabaja
    hoja = excelobj -> getSheet(0);
    filas = hoja -> getHighestRow();

    echo "<table id='ta'"

  }
>
