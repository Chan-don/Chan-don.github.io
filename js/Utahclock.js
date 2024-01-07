const UtahClock = document.querySelector("h2#UtahClock");

function getUtahClock() {
    const date = new Date();
    
    // UTC 기준으로 시간을 얻습니다.
    const utc = date.getTime() + date.getTimezoneOffset() * 60000;

    // 유타 시간(UTC-7)을 설정합니다.
    const utahTime = new Date(utc - 7 * 60 * 60000);

    const year = utahTime.getFullYear();
    const month = String(utahTime.getMonth() + 1).padStart(2, "0");
    const day = String(utahTime.getDate()).padStart(2, "0");

    const hours = String(utahTime.getHours()).padStart(2, "0");
    const minutes = String(utahTime.getMinutes()).padStart(2, "0");
    const seconds = String(utahTime.getSeconds()).padStart(2, "0");

    UtahClock.innerText = `Now Utah: ${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

getUtahClock();
setInterval(getUtahClock, 1000);
