function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="icone do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="icone da ${player2}" />
    </li>
  `;
}

function createCard(date, day, games) {
  return `          
    <div class="card">
      <h2>${date} <span>${day}</span></h2>

      <ul>
        ${games}
      </ul>
    </div>
  `;
}

document.querySelector("#app").innerHTML = `
  <header>
          <img
            src="./assets/logo.svg"
            alt="Logo do calendário - 'nlw Copa' em amarelo acima de 'Calendário' em cinza"
          />
        </header>
        <main id="cards">
          ${createCard(
            "24/11",
            "quinta",
            createGame("Brazil", "16:00", "Serbia")
          )}
          ${createCard(
            "27/11",
            "domingo",
            createGame("Spain", "16:00", "Germany")
          )}
          ${createCard(
            "28/11",
            "segunda",
            createGame("Brazil", "13:00", "Switzerland") +
              createGame("Portugal", "16:00", "Uruguay")
          )}
          ${createCard(
            "02/12",
            "sexta",
            createGame("Cameroon", "16:00", "Brazil")
          )}
        </main>
`;
