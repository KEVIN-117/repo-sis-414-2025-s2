const nameInput = document.getElementById("nameInput"); // de donde obtengo el valor (nombre)
const addUserButton = document.getElementById("addUserButton"); // cuando se obtiene el valor de nameInput
const usersList = document.getElementById("usersList"); // donde se va a mostrar el valor obtenido

usersList.style.backgroundColor = "#f0f0f0";
usersList.style.padding = "10px";
usersList.style.borderRadius = "5px";
usersList.style.listStyleType = "round";
usersList.style.fontFamily = "Arial, sans-serif";
usersList.style.fontSize = "16px";

addUserButton.addEventListener("click", () => {
  const name = nameInput.value;
  const li = document.createElement("li"); // <li></li>
  li.textContent = name; // <li>valor de name</li>
  usersList.appendChild(li); // <ul> <li>valor de name</li> </ul>
  nameInput.value = ""; // limpiar el input
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const box = document.getElementById("colorBox");
box.style.width = "200px";
box.style.height = "200px";
box.style.border = "2px solid #000";

box.addEventListener("click", () => {
  box.style.background = getRandomColor();
})