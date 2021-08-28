function draw() {
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.fillStyle = "RGB(70, 130, 180)";
        ctx.fillRect(210, 210, 125, 100);

        ctx.beginPath(); //circulo
        ctx.fillStyle = "RGB(255,0,0)";
        ctx.arc(170, 350, 40, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = "RGB(0,255,0)";
        ctx.moveTo(336, 210);
        ctx.lineTo(420, 100);
        ctx.lineTo(497, 210);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "RGB(255, 117, 24)";
        ctx.fillRect(380, 310, 90, 50);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "RGB(255,117,24)";
        ctx.moveTo(460, 290);
        ctx.lineTo(500, 335);
        ctx.lineTo(460, 380);
        ctx.fill();
    }
}