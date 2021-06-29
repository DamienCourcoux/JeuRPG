var app = {
  row: 4,
  cell: 6,
  player: {
    x: "0",
    y: "0",
    direction: "right"
  },
  targetCell: {
    x: "5",
    y: "3"
  },
  drawBoard: function () {
    for (var rowIndex = 0; rowIndex < app.row; rowIndex++) {
      var row = document.createElement("div");
      row.classList.add("row")
      for (var cellIndex = 0; cellIndex < app.cell; cellIndex++) {
        var cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("data-x", cellIndex);
        cell.setAttribute("data-y", rowIndex);
        var cellX = cell.dataset.x;
        var cellY = cell.dataset.y;
        if (cellX === app.targetCell.x && cellY === app.targetCell.y) {
          cell.classList.add("targetCell");
        }
        if (cellX === app.player.x && cellY === app.player.y) {
          cell.classList.add("player");
        }

        row.appendChild(cell);
      }
      var board = document.getElementById("board");
      board.appendChild(row);
    }
  },
  init: function () {
    app.drawBoard();
  }
};

app.init()

