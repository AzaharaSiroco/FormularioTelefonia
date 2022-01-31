function verValor() {
    let valor = document.querySelector("#valoracion").value;
      alert(` Has valorado con ${valor}`);
  }

  function verCuenta() {
    let pais = document.querySelector("#pais").value;
    let controlIBAN = document.querySelector("#controlIBAN").value;
    let entidad = document.querySelector("#entidad").value;
    let sucursal = document.querySelector("#sucursal").value;
    let dc = document.querySelector("#dc").value;
    let cuenta = document.querySelector("#cuenta").value;
    alert(`Su número de cuenta es: ${pais}-${controlIBAN}-${entidad}-${sucursal}-${dc}-${cuenta}`
    );
  }

  function verDia() {
    let fecha_dom = document.getElementById("date").value;
    let fecha_date = new Date(fecha_dom);
  
    var fecha_formato = new Intl.DateTimeFormat("es-ES", {
      weekday: "long",
    }).format(fecha_date);
    alert(`La fecha seleccionada es ${fecha_dom}, ${fecha_formato}`);
  }



  function validar() {
  var cp = document.getElementById("cp").value;
  var provinciasCp = [
    "Álava", "Albacete", "Alicante", "Almería", "Ávila",
    "Badajoz", "Baleares", "Barcelona","Burgos", "Cáceres",
    "Cádiz", "Castellón", "Ciudad Real", "Córdoba", "Coruña",
    "Cuenca", "Gerona", "Granada", "Guadalajara", "Guipúzcoa",
    "Huelva", "Huesca", "Jaén", "León", "Lérida",
    "La Rioja", "Lugo", "Madrid", "Málaga","Murcia",
    "Navarra", "Orense", "Asturias", "Palencia", "Las Palmas",
    "Pontevedra", "Salamanca", "Santa Cruz de Tenerife", "Cantabria", "Segovia",
    "Sevilla", "Soria", "Tarragona", "Teruel", "Toledo",
    "Valencia", "Valladolid", "Vizcaya", "Zamora", "Zaragoza",
    "Ceuta", "Melilla"]
    console.log (provinciasCp[0])
  if (cp.length == 5 && parseInt(cp) >= 10000 && parseInt(cp) <= 52999) {
    for (const index in provinciasCp) {
      console.log(`${index}: ${provinciasCp[index]}`);
    }
}
  }