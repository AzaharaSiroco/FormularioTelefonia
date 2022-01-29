function verValor() {
    let valor = document.querySelector("#valoracion").value;
    alert(`Has valorado con ${valor} puntos`);
  }

  function verCuenta() {
    let pais = document.querySelector("#pais").value;
    let controlIBAN = document.querySelector("#controlIBAN").value;
    let entidad = document.querySelector("#entidad").value;
    let sucursal = document.querySelector("#sucursal").value;
    let dc = document.querySelector("#dc").value;
    let cuenta = document.querySelector("#cuenta").value;
    alert(
      `Su número de cuenta es: ${pais}-${controlIBAN}-${entidad}-${sucursal}-${dc}-${cuenta}`
    );
  }

  function verDia() {
    let fecha_dom = document.getElementById("date").value;
    let fecha_date = new Date(fecha_dom);
  
    var fecha_formato = new Intl.DateTimeFormat("es-ES", {
      weekday: "long",
    }).format(fecha_date);
  
    alert(
      `La fecha seleccionada es ${fecha_dom}, ${fecha_formato}`
    );
  }

  function validarCodigoPostal()
{
  var input = document.getElementById("cp").value;
  console.log(parseInt(input))
  if(input.length == 5 && parseInt(input) >= 10000 && parseInt(input) <= 52999)
  {
    alert("codigo valido");
  }
  else{
    alert("codigo invalido");
   }
}