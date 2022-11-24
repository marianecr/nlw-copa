function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="icone do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="icone da ${player2}" />
    </li>
  `;
}

let delay = -0.4;

function createCard(date, day, games) {
  delay = delay + 0.4;
  return `          
    <div class="card">
      <h2>${date} <span>${day}</span></h2>

      <ul>
        ${games}
      </ul>
    </div>
  `;
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "domingo", createGame("qatar", "13:00", "equador")) +
  createCard(
    "24/11",
    "quinta",
    createGame("brazil", "16:00", "serbia") +
      createGame("ghana", "13:00", "portugal")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("spain", "16:00", "germany") +
      createGame("canada", "13:00", "croatia")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("brazil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("japan", "16:00", "spain") +
      createGame("costa-rica", "16:00", "germany")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("cameroon", "16:00", "brazil") +
      createGame("ghana", "12:00", "uruguay")
  );

document.querySelector("#switch-theme").addEventListener("change", changeTheme);

function changeTheme() {
  const theme = document.querySelector("#switch-theme").value;

  if (theme === "blue") {
    document.body.classList.remove("green");
    document.body.classList.add("blue");
  } else if (theme === "green") {
    document.body.classList.remove("blue");
    document.body.classList.add("green");
  } else {
    document.body.classList.remove("blue", "green");
  }
}
