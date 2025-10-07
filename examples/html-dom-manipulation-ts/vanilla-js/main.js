const users = [];

const button = document.getElementById("addUserButton");
const nameInput = document.getElementById("nameInput"); // value
const usersList = document.getElementById("usersList"); // ul

button.addEventListener("click", () => {
  const name = nameInput.value;
  users.push(name);
  let li = document.createElement("li");
  li.textContent = name;
  usersList.appendChild(li);
  button.style.backgroundColor = getRandomColor();
});

const box = document.getElementById("colorBox");

box.style.display = "flex";
box.style.width = "300px";
box.style.height = "300px";
box.style.backgroundColor = "lightgray";
box.style.justifyContent = "center";
box.style.alignItems = "center";
box.style.margin = "20px";

box.addEventListener("click", () => {
  box.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/*
- crear un  contenedor para (div)
    - estilos css
       - width: 300px
       - height: 300px
       - background-color: lightgray

- Boton (button)
    - estilos css
       - padding: 10px 20px
       - background-color: blue

Event Listener (click)
    - cambiar el color del contenedor (div) a rojo
       */
