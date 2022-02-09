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

  document.getElementById("provincia")
  document.addEventListener("focusout", validar);

  function validar() {
  var cpost = document.getElementById("cp").value;
  var ciudad =document.getElementById("provincia").value;

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
    var codigo = [
      "01", "02", "03", "04", "05", "06", "07","08",
      "09", "10","11","12","13","14","15","16",
      "17","18","19","20","21","22","23","24","25",
      "26","27","28","29","30", "31","32","33","34",
      "35","36","37","38","39","40","41","42","43",
      "44","45","46","47","48","49","50","51","52",
    ];

    if (
     cpost.substring(0,2)
     == codigo [0] && 
     ciudad == provinciasCp [0]
   ) {
     correcto = document.createElement ("p");
     correcto.textContent = cpost  + "pertenece a" + ciudad;
     correcto.setAtribute ("id","correcto")
     document.getElementById("val").appendChild(correcto);
     document.getElementById("correcto").style.color = "#00e600";
  } else {
		 incorrecto = document.createElement("p");
     incorrecto.textContent = cpost + " no pertenece a " + ciudad;
     incorrecto.setAttribute("id", "incorrecto");
     document.getElementById("val").appendChild(incorrecto);
     document.getElementById("incorrecto").style.color = "#008h89";
  }
  }