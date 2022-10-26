// const board = document.querySelector("#board");
const canvas = board.getContext("2d");
canvas.beginPath();
canvas.strokeStyle = '#FFF100';
canvas.fillStyle = '#FFF100';
canvas.moveTo(16, 138);
canvas.lineTo(16, yone);
canvas.lineTo(134, ytwo);
canvas.lineTo(134, 138);
canvas.fill();

canvas.beginPath();
canvas.strokeStyle = '#FFF100';
canvas.fillStyle = '#FFF100';
canvas.moveTo(16, 125);
canvas.lineTo(16, yone);
canvas.lineTo(134, ytwo);
canvas.lineTo(134, 125);
canvas.fill();


                            // canvas.beginPath();
                            // canvas.arc(75, 59, 59, 0, Math.PI, false);
                            // canvas.fill();
                            // arc(中心x座標, 中心y座標, 半径, 円弧の開始角, 円弧の終了角, 描画の方向)
