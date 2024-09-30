import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsediting] = useState(false);

  function handleEditClick() {
    //wanneer de button is geklikt kan er worden ge edit. dit komt doordat isediting op true staat. Je wilt alleen deze aanpassen als je op de button klikt daarom is het default false
    // setIsediting(isEditing ? false : true);

    //door setIsediting een function te geven heb je altijd de laatst geupdate state dit heb je niet bij     //setIsediting(!isEditing);
    // setIsediting(isEditing ? false : true);
    setIsediting((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  //   let btnCaption = "Edit";

  //als de handleEditClick functie wordt uitgevoerd door op de button te klikken wordt er een input veld laten zien door de regel hieronder
  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    // btnCaption = "Save";
  }

  //Als isActive true is dan wordt de class active toegevoegd en anders is het undefined omdat ik dan geen class wil
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
