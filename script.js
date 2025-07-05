if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  // Всё в порядке! Можно работать
  console.log('Всё в порядке! Можно работать!!!')
  navigator.mediaDevices.getUserMedia({video:true, audio: true})
} else {
  console.warn('Ваш браузер не поддерживает медиаустройства');

}