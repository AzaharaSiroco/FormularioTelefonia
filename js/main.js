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
    document.write(`Su número de cuenta es: ${pais}-${controlIBAN}-${entidad}-${sucursal}-${dc}-${cuenta}`
    );
  }

  function verDia() {
    let fecha_dom = document.getElementById("date").value;
    let fecha_date = new Date(fecha_dom);
  
    var fecha_formato = new Intl.DateTimeFormat("es-ES", {
      weekday: "long",
    }).format(fecha_date);
  
    alert(`La fecha seleccionada es ${fecha_dom}, ${fecha_formato}`
    );
  }



  function validar()
{
  var input = document.getElementById("cp").value;
  var provinciasCp = {
    1: "Álava", 2: "Albacete", 3: "Alicante", 4: "Almería", 5: "Ávila",
    6: "Badajoz", 7: "Baleares", 08: "Barcelona", 09: "Burgos", 10: "Cáceres",
    11: "Cádiz", 12: "Castellón", 13: "Ciudad Real", 14: "Córdoba", 15: "Coruña",
    16: "Cuenca", 17: "Gerona", 18: "Granada", 19: "Guadalajara", 20: "Guipúzcoa",
    21: "Huelva", 22: "Huesca", 23: "Jaén", 24: "León", 25: "Lérida",
    26: "La Rioja", 27: "Lugo", 28: "Madrid", 29: "Málaga", 30: "Murcia",
    31: "Navarra", 32: "Orense", 33: "Asturias", 34: "Palencia", 35: "Las Palmas",
    36: "Pontevedra", 37: "Salamanca", 38: "Santa Cruz de Tenerife", 39: "Cantabria", 40: "Segovia",
    41: "Sevilla", 42: "Soria", 43: "Tarragona", 44: "Teruel", 45: "Toledo",
    46: "Valencia", 47: "Valladolid", 48: "Vizcaya", 49: "Zamora", 50: "Zaragoza",
    51: "Ceuta", 52: "Melilla"
  };
  if (input.length == 5 && cp <= 52999 && cp >= 01000)
  return provinciasCp [parseInt(cp.substring(0,2))];
  console.log (provinciasCp);
}
