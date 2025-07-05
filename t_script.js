//////////////////////////////////////ТЕОРИЯ////////////////////////////////////
// 
// 
// 
// ///////////// 1) доступ камере////////////////////////

// if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//   // Всё в порядке! Можно работать
//   console.log('Всё в порядке! Можно работать!!!')
//   navigator.mediaDevices.getUserMedia({video:true, audio: true})
// } else {
//   console.warn('Ваш браузер не поддерживает медиаустройства');

// }

////////////2) Список доступных устройств ///////////////////////

// async function getDevices() {
//   const devices = await navigator.mediaDevices.enumerateDevices();
//     devices.forEach(device => {
//       console.log(device.kind, device.label, device.deviceId);
//     });
  
// }

// getDevices();

////////3) Сумма двух предыдуших пунктов


// async function getDevices() {
//   await navigator.mediaDevices.getUserMedia({video:true, audio: true});
//   const devices = await navigator.mediaDevices.enumerateDevices();
//     devices.forEach(device => {
//       console.log(device.kind, device.label, device.deviceId);
//     });
  
// }

// getDevices();

/////////////////4) Новое изменения в устройствах

// navigator.mediaDevices.addEventListener('devicechange', ()=> {
//   console.log("Device changed");
// })

/////////////5) Работа с трэками //////////////////////

// navigator.mediaDevices.getUserMedia({video:true})
// .then(stream => {
//   const [videoTrack] = stream.getVideoTracks();
//   return videoTrack.applyConstraints({
//     width: 1280,
//     height: 720
//   }).then(()=> { 
//     console.log('Разрешение применено');
//   })
//   .catch(error => {
//     console.error('ошибка доступа к устройству', error);
//   });
// });

//////////////////6) отключение звука //////////


// navigator.mediaDevices.getUserMedia({audio:true})
// .then(stream => {
//   const [audioTrack] = stream.getAudioTracks();
//   audioTrack.enabled= false;
//   console.log('Микрофон выключен');
// })
// .catch(error => {
//     console.error('ошибка доступа к микрофону', error);
//   });

  ////////////////7) вывод аудио на устройство /////////

  navigator.mediaDevices.getUserMedia({audio:true})
.then(() => {
  const audioElement = document.querySelector('audio'); // html разметка должна быть соответствующая

  return navigator.mediaDevices.enumerateDevices()
  .then(devices => {
    const device = devices.find(d => d.kind ==='audiooutput');
    if (device) {
      return audioElement.setSinkId(device.deviceId)
      .then(()=> {
        console.log(`Звук пойдет на ${device.label}`);
      })
      .catch(err => {
        console.error('Ошибка при смене выхода:', err);
      });
    } else {
      console.warn('Нет доступных устройств вывода звука');
    }
  })

})
.catch(error => {
  console.error('Ошибка при получении доступа к аудио:', error);
});