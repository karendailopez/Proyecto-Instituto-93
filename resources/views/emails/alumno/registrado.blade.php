<div>
    Felicidades {{$alumno->nombre}} {{$alumno->apellido}}!!
    <br>
    Te registraste en la carrera {{ $carrera }}
    <br>
    <br>
    Por favor verifique el mail con el siguiente link:
    <br>
    <a href="{{ route('verificar-alumno', ['email' => $email_encriptado], true)  }}" target="_blank">Verificar Email</a>
</div>
