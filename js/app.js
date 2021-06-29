var app = {
  row: 4,
  cell: 6,
  player: {
    x: 0,
    y: 0,
    direction: "right"
  },
  targetCell: {
    x: 5,
    y: 3
  },
  drawBoard: function () {
    for (var rowIndex = 0; rowIndex < app.row; rowIndex++) {
      var row = document.createElement("div");
      row.classList.add("row")
      for (var cellIndex = 0; cellIndex < app.cell; cellIndex++) {
        var cell = document.createElement("div");
        cell.classList.add("cell");
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

