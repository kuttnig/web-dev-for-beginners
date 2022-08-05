let selectedTile = null;
let selectedListener = null;
let colors = ['#f48fb1', '#7e57c2', '#2196f3', '#26c6da', '#43a047', '#eeff41', '#f9a825', '#ff5722'];

let numTiles = 0;
const rowElements = document.getElementById('play-field').children;
for (const row of rowElements) {
    numTiles += row.children.length;
}

let baseString = 'tile-'
for (let i = 0; i < numTiles; i++) {
    let tileId = baseString.concat(i.toString());
    let tile = document.getElementById(tileId);
    clickElement(tile);
}

function clickElement(tile) {
    let colorIndex = 0;
    tile.addEventListener('click', selectTile);
    function selectTile(ev) {
        if (selectedTile) {
            selectedTile.style.border = '0.2em solid white';
            selectedTile.removeEventListener('keydown', selectedListener);
        }

        selectedTile = ev.target;
        selectedListener = updateColor;
        selectedTile.style.border = '0.2em solid blue';
        selectedTile.addEventListener('keydown', selectedListener);

        function updateColor(event) {
            if (event.code === 'Space') {
                colorIndex = (colorIndex + 1) % colors.length;
                selectedTile.style.backgroundColor = `${colors[colorIndex]}`;
            }
        }
    }
}
