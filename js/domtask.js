function readDOM() {
  const name = document.getElementById("name").textContent;
  const surname = document.getElementById("surname").textContent;
  const birthyear = document.getElementById("birthyear").textContent;
  alert(
    "Ваше имя: " +
      name +
      "Ваша фамилия: " +
      surname +
      "Ваш год рождения: " +
      birthyear
  );
}
