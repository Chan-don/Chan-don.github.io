const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();

    // UTC 기준으로 시간을 얻습니다.
    const utc = date.getTime() + date.getTimezoneOffset() * 60000;

    // 서울 시간(UTC+9)을 설정합니다.
    const SeoulTime = new Date(utc + 9 * 60 * 60000);

    const year = SeoulTime.getFullYear();
    const month = String(SeoulTime.getMonth() + 1).padStart(2, "0");
    const day = String(SeoulTime.getDate()).padStart(2, "0");

    const hours = String(SeoulTime.getHours()).padStart(2, "0");
    const minutes = String(SeoulTime.getMinutes()).padStart(2, "0");
    const seconds = String(SeoulTime.getSeconds()).padStart(2, "0");

    clock.innerText = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
