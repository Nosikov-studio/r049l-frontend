///////////////// 1) доступ камере////////////////////////

// if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//   // Всё в порядке! Можно работать
//   console.log('Всё в порядке! Можно работать!!!')
//   navigator.mediaDevices.getUserMedia({video:true, audio: true})
// } else {
//   console.warn('Ваш браузер не поддерживает медиаустройства');

// }

////////////2) Список доступных устройств ///////////////////////

async function getDevices() {
  const devices = await navigator.mediaDevices.enumerateDevices();
    devices.forEach(device => {
      console.log(device.kind, device.label, device.deviceId);
    });
  
}

getDevices();