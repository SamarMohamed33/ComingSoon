window.onload = function () {
  let currentDate = new Date().getFullYear();
  let startDate = new Date("June 1 2023 00:00:00");

  function updateCountdown() {
    const current = new Date();
    const difference = startDate - current;
    let Days = Math.floor(difference / 1000 / 60 / 60 / 24);
    let Hours = Math.floor(difference / 1000 / 60 / 60) % 24;
    let Minutes = Math.floor(difference / 1000 / 60) % 60;
    let Seconds = Math.floor(difference / 1000) % 60;

    document.querySelector(".days").innerHTML = Days;
    document.querySelector(".hours").innerHTML =
      Hours < 10 ? "0" + Hours : Hours;
    document.querySelector(".minutes").innerHTML =
      Minutes < 10 ? "0" + Minutes : Minutes;
    document.querySelector(".seconds").innerHTML =
      Seconds < 10 ? "0" + Seconds : Seconds;
  }
  setInterval(updateCountdown, 1000);

  var audio = new Audio("Audio/bts_dynamite.mp3");
  var audio2 = new Audio("Audio/drivers_license.mp3");
  var audio3 = new Audio("Audio/Treat you better.mp3");
  var audio4 = new Audio("Audio/dua_lipa_new_rules.mp3");
  var audio5 = new Audio("Audio/look_at_her_now.mp3");
  var audio6 = new Audio("Audio/7_rings.mp3");

  let audioList = [audio, audio2, audio3, audio4, audio5, audio6];
  let ids = ["img-1", "img-2", "img-3", "img-4", "img-5", "img-6"];
  document.onmouseover = function (e) {
    console.log(e.target.id);
    for (let i = 0; i < ids.length; i++) {
      if (e.target.id === ids[i]) {
        audioList[i].play();
        stopAudio(audioList[i]);
      }
    }
  };
  function stopAudio(audio) {
    for (let i = 0; i < audioList.length; i++) {
      if (audioList[i] === audio) {
        continue;
      }
      audioList[i].pause();
      audioList[i].currentTime = 0;
    }
  }

  document.onmouseout = function (e) {
    console.log(e.target.id);
    for (let i = 0; i < ids.length; i++) {
      if (e.target.id !== ids[i]) {
        audioList[i].pause();
        audioList[i].currentTime = 0;
      }
    }
  };
};
