function updateClock() {
    const timeElem = document.getElementById('time');
    const londonTimeElem = document.getElementById('london-time');
    const parisTimeElem = document.getElementById('paris-time');


    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const timeString = `Brasil: ${hours}:${minutes}:${seconds}`;
    timeElem.textContent = timeString;

    const nowStranger = new Date();

    const londonTime = nowStranger.toLocaleTimeString('en-GB', { timeZone: 'Europe/London' });
    const parisTime = nowStranger.toLocaleTimeString('fr-FR', { timeZone: 'Europe/Paris' });

    londonTimeElem.textContent = `Londres: ${londonTime}`;
    parisTimeElem.textContent = `Paris: ${parisTime}`;
}
updateClock();
setInterval(updateClock, 1000);