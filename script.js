$(document).ready(() => {
  let player = "X";
  let count = 0;
  let arr = [["z", "z", "z"], ["z", "z", "z"], ["z", "z", "z"]];
  $("td").click(function() {
    if ($(this).text() === "") {
      if (
        $(".player-name").text() === "Player 1" &&
        $(".player-name").text() != "Player 2"
      ) {
        $(".player-name").text(() => {
          return "Player 2";
        });
      } else if (
        $(".player-name").text() === "Player 2" &&
        $(".player-name").text() != "Player 1"
      ) {
        $(".player-name").text(() => {
          return "Player 1";
        });
      }
      switch ($(this).attr("id")) {
        case "box1":
          arr[0][0] = player;
          break;
        case "box2":
          arr[0][1] = player;
          break;
        case "box3":
          arr[0][2] = player;
          break;
        case "box4":
          arr[1][0] = player;
          break;
        case "box5":
          arr[1][1] = player;
          break;
        case "box6":
          arr[1][2] = player;
          break;
        case "box7":
          arr[2][0] = player;
          break;
        case "box8":
          arr[2][1] = player;
          break;
        case "box9":
          arr[2][2] = player;
          break;
      }
      $(this).text(player);
      if (player === "X") {
        player = "O";
      } else {
        player = "X";
      }
      count++;
      // console.log(count);
      if (checkWin(this, arr) === true) {
        $(".player-name").text(() => {
          $("td").unbind();
          $("td").css("cursor", "context-menu");
          return "Winner!";
        });
      }
    }
  });

  $("#new").click(() => {
    document.location.reload(true);
  });
    $("#new").click(() => {
      document.location.reload(true);
    });
});

function checkWin(grid, arr) {
  let winCount = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i][0] + " " + arr[i][1] + " " + arr[i][2]);
    if (
      arr[i][0] != "z" &&
      arr[i][0] === arr[i][1] &&
      arr[i][0] === arr[i][2]
    ) {
      return true;
    } else if (
      arr[0][i] != "z" &&
      arr[0][i] === arr[1][i] &&
      arr[0][i] === arr[2][i]
    ) {
      console.log("yeah");
      return true;
    }
  }
  if (arr[0][0] != "z" && arr[0][0] === arr[1][1] && arr[0][0] === arr[2][2]) {
    return true;
  } else if (
    arr[2][0] != "z" &&
    arr[2][0] === arr[1][1] &&
    arr[2][0] === arr[0][2]
  ) {
    return true;
  }
  return false;
}
