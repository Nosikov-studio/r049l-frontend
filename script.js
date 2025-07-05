//////////////////////////////////////Практика 1////////////////////////////////////

const video = document.getElementById('video');

const toggleAudioBtn = document.getElementById('toggleAudio');
const toggleVideoBtn = document.getElementById('toggleVideo');
const stopBtn =document.getElementById('stopStream');

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
  toggleVideoBtn.textContent = videoTrack.enabled ? 'Видео вкл' : 'Видео выкл';
  toggleVideoBtn.classList.toggle('non-active');
})


stopBtn.addEventListener('click', ()=> {
  if(!stream) { // гарантируем, что мы не будем обращаться к несуществующему потоку. Защита от ошибок.
    return;
  }

  stream.getTracks().forEach((track) => {
    track.stop(); // полная остановка всех дорожек
  });

  video.srcObject = null; // Удаляю отображение с экрана (визуально завершает трансляцию)

  toggleAudioBtn.disabled = true;
  toggleVideoBtn.disabled = true;
  stopBtn.disabled = true;

  stopBtn.textContent ='Трансляция остановлена';
})