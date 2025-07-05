//////////////////////////////////////Практика 1////////////////////////////////////

const video = document.getElementById('video');

const toggleAudioBtn = document.getElementById('toggleAudio');
const toggleVideoBtn = document.getElementById('toggleVideo');

let stream;

async function startStream() {
try { stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true
});

    video.srcObject = stream; // отображаем поток в элементе <video>
} catch (err) {
   console.error(`Ошибка при доступе к камере/микрофону: ${err}`);
}
}

startStream();

toggleAudioBtn.addEventListener('click', ()=> {
  const [audioTrack] = stream.getAudioTracks(); // получаем первый аудиотрек из потока
  audioTrack.enabled = !audioTrack.enabled // включаем/выключаем микрофон
  toggleAudioBtn.textContent = audioTrack.enabled ? 'Микрофон вкл' : 'Микрофон выкл';
  toggleAudioBtn.classList.toggle('non-active');
})



toggleVideoBtn.addEventListener('click', ()=> {
  const [videoTrack] = stream.getVideoTracks(); // получаем первый видеотрек из потока
  videoTrack.enabled = !videoTrack.enabled // инвертируем свойство
  toggleVideoBtn.textContent = videoTrack.enabled ? 'Микрофон вкл' : 'Микрофон выкл';
  toggleVideoBtn.classList.toggle('non-active');
})