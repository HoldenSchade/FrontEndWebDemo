function startOsc() {
    const FREQUENCYINPUT = document.getElementById("frequency").value;
    const GAININPUT = document.getElementById("loudness").value;

    /* The if statement limits the noise generated to between 0Hz and 25000Hz, as numbers outside these ranges can cause
       unpredictable side-effects - 02/07 HS
     */
    if ((0 <= FREQUENCYINPUT) && (FREQUENCYINPUT <= 25000) && (0 <= GAININPUT) && (GAININPUT <= 2)) {
        let audioContext = new AudioContext();

        let myOscillator = audioContext.createOscillator();
        let gain = audioContext.createGain();

        myOscillator.frequency.value = FREQUENCYINPUT;
        gain.gain.value = GAININPUT;

        myOscillator.connect(gain);
        gain.connect(audioContext.destination);

        myOscillator.start();
        myOscillator.stop(audioContext.currentTime + 2);
    }
}

function drawCircle() {
    var colorInput = document.getElementById("frequency").value;
    var color = colorInput * 838;
    var hexColor = String("000000" + color.toString(16)).slice(-6);
    var c = document.getElementById("visualizer");
    var ctx = c.getContext("2d");

    ctx.beginPath();
    /* Random numbers between 0 and 769 for position (first two numbers) to keep it inside the canvas element.
     * Random numbers between 1 and 384 for radius (third number) to keep it a reasonable size inside the canvas element.
     */
    ctx.arc(Math.floor(Math.random() * 721), Math.floor(Math.random() * 721), Math.floor(Math.random() * 360) + 1, 0, 2 * Math.PI);
    ctx.fillStyle = "#" + hexColor;
    ctx.fill();
}