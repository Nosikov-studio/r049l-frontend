if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  // Всё в порядке! Можно работать
  console.log('Всё в порядке! Можно работать!!!')
} else {
  console.warn('Ваш браузер не поддерживает медиаустройства');

}