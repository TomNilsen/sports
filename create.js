export function createContent(
  number,
  teamOneName,
  teamTwoName,
  teamOnePage,
  teamTwoPage,
  outcome
) {
  const TABLE = document.querySelector("tbody");
  const TROW = document.createElement("tr");
  const NUMBER = document.createElement("td");
  const TEAMS = document.createElement("td");
  const TEAMONE = document.createElement("a");
  const TEAMTWO = document.createElement("a");
  const VS = document.createElement("span");
  const OUTCOME = document.createElement("td");
  const BLANKSPACE1 = document.createElement("td");
  const BLANKSPACE2 = document.createElement("td");
  const CONTAINER = document.createElement("div");
  const CHECKMARK = document.createElement("span");
  const STEM = document.createElement("div");
  const KICK = document.createElement("div");

  TROW.appendChild(NUMBER);
  TROW.appendChild(TEAMS);
  TEAMS.appendChild(CONTAINER);

  if (outcome == "1") {
    TROW.appendChild(OUTCOME);
    TROW.appendChild(BLANKSPACE1);
    TROW.appendChild(BLANKSPACE2);
  } else if (outcome == "X") {
    TROW.appendChild(BLANKSPACE1);
    TROW.appendChild(OUTCOME);
    TROW.appendChild(BLANKSPACE2);
  } else if (outcome == "2") {
    TROW.appendChild(BLANKSPACE1);
    TROW.appendChild(BLANKSPACE2);
    TROW.appendChild(OUTCOME);
  }

  NUMBER.innerHTML = number;
  TEAMONE.text = teamOneName;
  TEAMTWO.text = teamTwoName;
  TEAMONE.href = teamOnePage;
  TEAMTWO.href = teamTwoPage;
  VS.innerHTML = " -VS- ";
  CHECKMARK.className = "checkmark";
  STEM.className = "stem";
  KICK.className = "kick";

  CONTAINER.appendChild(TEAMONE);
  CONTAINER.appendChild(VS);
  CONTAINER.appendChild(TEAMTWO);
  OUTCOME.appendChild(CHECKMARK);
  CHECKMARK.appendChild(STEM);
  CHECKMARK.appendChild(KICK);
  TABLE.appendChild(TROW);
}
