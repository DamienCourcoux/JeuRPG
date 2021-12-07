var app = {
  row: 4,
  cell: 6,
  gameOver: false,
  score: 0,
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
        if (cellIndex === app.targetCell.x && rowIndex === app.targetCell.y) {
          cell.classList.add("targetCell");
        }
        if (cellIndex === app.player.x && rowIndex === app.player.y) {
          var player = document.createElement("div");
          player.classList.add("player");
          player.classList.add(app.player.direction);
          cell.appendChild(player);
        }
        row.appendChild(cell);
      }
      var board = document.getElementById("board");
      board.appendChild(row);
    }
    app.isGameOver();
  },
  clearBoard: function () {
    board.textContent = "";
  },
  redrawBoard: function () {
    app.clearBoard();
    app.drawBoard()
  },
  turnLeft: function () {
    if (!app.gameOver) {
      switch (app.player.direction) {
        case "right":
          app.player.direction = "up";
          break;
        case "down":
          app.player.direction = "right";
        case "left":
          app.player.direction = "down";
        case "up":
          app.player.direction = "left";
        default:
          console.log("Impossible de tourner le joueur");
          break;
      }
      app.score += 1;
      app.redrawBoard();
    }
  },
  turnRight: function () {
    if (!app.gameOver) {
      switch (app.player.direction) {
        case "right":
          app.player.direction = "down";
          break;
        case "down":
          app.player.direction = "left";
        case "left":
          app.player.direction = "up";
        case "up":
          app.player.direction = "right";
        default:
          console.log("Impossible de tourner le joueur");
          break;
      }
      app.score += 1;
      app.redrawBoard();
    }
  },
  moveForward: function () {
    if (!app.gameOver) {
      switch (app.player.direction) {
        case "right":
          app.player.x += 1;
          app.player.x = Math.min(app.cell - 1, app.player.x)
          break;
        case "down":
          app.player.y += 1;
          app.player.y = Math.min(app.row - 1, app.player.y)
          break;
        case "left":
          app.player.x -= 1;
          app.player.x = Math.max(0, app.player.x)
          break;
        case "up":
          app.player.y -= 1;
          app.player.y = Math.min(0, app.player.y)
          break;

        default:
          console.log("Impossible de déplacer le joueur");
          break;
      }
      app.score += 1;
      app.redrawBoard();
    }
  },
  listenKeyboardEvents: function () {
    document.addEventListener("keyup", (event) => {
      switch (event.code) {
        case "ArrowRight":
          app.turnRight()
          break;
        case "ArrowDown":
          app.turnLeft()
          break;
        case "ArrowLeft":
          app.turnLeft()
          break;
        case "ArrowUp":
          app.moveForward()
          break;

        default:
          console.log("Vous appuyez sur une mauvaise touche");
          break;
      }
    })
  },
  isGameOver: function () {
    if (app.player.x === app.targetCell.x && app.player.y === app.targetCell.y) {
      app.gameOver = true;
      setTimeout(() => alert(`Game Over en ${app.score} déplacements`), 100);
    }
  },
  init: function () {
    app.drawBoard();
    app.listenKeyboardEvents();
  }
};

document.addEventListener("DOMContentLoaded", app.init);

