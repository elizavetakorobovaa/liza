let translated = true;
function changeLanguage() {
  if (translated) {
    console.log("en")
    document.getElementById("surname").innerText = "Korobova";
    document.getElementById("firstname").innerText = "Elizaveta";
    document.getElementById("paternalname").innerText = "Olegovna";
    document.getElementById("birthyear").innerText = "2004";
    document.getElementById("gender").innerText = "fem";
    document.getElementById("cityofbirth").innerText = "Moscow";
    translated = false;
  } else {
    console.log("ru")
    document.getElementById("surname").innerText = "Коробова";
    document.getElementById("firstname").innerText = "Елизавета";
    document.getElementById("paternalname").innerText = "Олеговна";
    document.getElementById("birthyear").innerText = "2004";
    document.getElementById("gender").innerText = "жен.";
    document.getElementById("cityofbirth").innerText = "Москва";
    translated = true;
  }
}
