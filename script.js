document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("start-button");
    const resultDiv = document.getElementById("result");
    const progressBar = document.querySelector(".progress-bar");

    let testRunning = false;

    startButton.addEventListener("click", () => {
        if (testRunning) {
            clearInterval(testRunning);
            testRunning = false;
            progressBar.style.width = "0";
            resultDiv.innerHTML = "";
            startButton.innerText = "Start Test";
            startButton.disabled = false;
        } else {
            startButton.disabled = true;
            resultDiv.style.display = "block";
            progressBar.style.width = "0";
            resultDiv.innerHTML = "Testing...";
            startButton.innerText = "Stop Test";

            let progress = 0;
            testRunning = setInterval(() => {
                if (progress >= 100) {
                    clearInterval(testRunning);
                    const downloadSpeed = Math.random() * 100 + 1;
                    const uploadSpeed = Math.random() * 50 + 1;
                    resultDiv.innerHTML = `
                        <p>Download Speed: ${downloadSpeed.toFixed(2)} Mbps</p>
                        <p>Upload Speed: ${uploadSpeed.toFixed(2)} Mbps</p>
                    `;
                    startButton.innerText = "Start Test";
                    startButton.disabled = false;
                    testRunning = false;
                } else {
                    progress += 1;
                    progressBar.style.width = `${progress}%`;
                }
            }, 30);
        }
    });
});
