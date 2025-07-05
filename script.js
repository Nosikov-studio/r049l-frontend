///////////////// 1) доступ камере////////////////////////

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

navigator.mediaDevices.addEventListener('devicechange', ()=> {
  console.log("Device changed");
})