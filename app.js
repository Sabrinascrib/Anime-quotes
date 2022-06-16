const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
  fetch("https://animechan.vercel.app/api/random")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      result.innerHTML = `
        <h3>${data.anime}</h3>
        <h2>  ${data.character} </h2>
        <p>"
 ${data.quote}
        "</p>`;
    });
});
