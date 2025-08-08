// Set your target date here
const targetDate = new Date("2025-11-16T23:59:59").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const gap = targetDate - now;

    const days = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((gap % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

    if (gap < 0) {
        document.getElementById("timer").innerHTML = "<span>Time's up!</span>";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();
