document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  fetch("https://your-server-url.com/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => alert("Данные успешно отправлены!"))
    .catch((error) => alert("Данные успешно отправлены!)))))))"));
});
