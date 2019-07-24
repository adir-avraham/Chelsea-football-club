const PLAYERS_DOM = {
    player_name: document.querySelector("#inputName"),
    player_age: document.querySelector("#inputAge"),
    player_position: document.querySelector("#inputPosition"),
    player_image: document.querySelector("#inputImage"),
    players_data: document.querySelector("#playersData")
}


let arrayOfData = [];



document.querySelector("#saveButton").addEventListener("click", savePlayer);



function draw() {
    clearTable()
    for (let index = 0; index < arrayOfData.length; index++) {
        drawRow(arrayOfData[index]);
    }
}

function clearTable() {
    PLAYERS_DOM.players_data.innerHTML = "";
}

function drawRow(player) {
    const { players_data } = PLAYERS_DOM;
    const playerTr = createPlayerTr(player);
    if (!playerTr) return;
    players_data.append(playerTr);

}

function findIndex(data, id) {
    for (let index = 0; index < data.length; index++) {
        if (data[index].player_name === id) {
            return index;
        }
    }
}

function deletePlayer(id) {
    const index = findIndex(arrayOfData, id);
    if (id === undefined) return;
    arrayOfData.splice(index, 1);
    draw();
}

function deleteCarHandler() {
    deletePlayer(this.parentElement.id);
}



function createPlayerTr(player) {
    const { player_name, player_age, player_position, player_image } = player;
    if (!player_name || !player_age || !player_position || !player_image) return;

    const tr = document.createElement("tr");
    tr.id = player_name;

    const image = document.createElement("img");
    image.src = player.player_image;
    image.alt = "picture";
    image.className = "player-img";

    const deleteButton = document.createElement("Button")
    deleteButton.innerText = "X";
    deleteButton.className = "btn btn-danger";
    deleteButton.addEventListener("click", deleteCarHandler);


    const td_player_name = document.createElement("td");
    td_player_name.innerText = player_name;

    const td_player_age = document.createElement("td");
    td_player_age.innerText = player_age;

    const td_player_position = document.createElement("td");
    td_player_position.innerText = player_position;

    const td_player_image = document.createElement("td");
    td_player_image.append(image);

    const td_delete_button = document.createElement("td");
    td_delete_button.append(deleteButton);

    tr.append(td_player_name, td_player_age, td_player_position, td_player_image, td_delete_button);

    return tr;
}



function savePlayer() {
    const { player_name, player_age, player_position, player_image } = PLAYERS_DOM;
    arrayOfData.push(new Player(player_name.value, player_age.value, player_position.value, player_image.value));
    draw()
}


function Player(_name, _age, _position, _image) {
    this.player_name = _name;
    this.player_age = _age;
    this.player_position = _position;
    this.player_image = _image;

}



