function getUserName() {
  let userName = prompt('Adınızı giriniz: ')
  document.querySelector('#user-name').innerHTML = userName
  now()
}

let fullDate, dateNow, hourNow, minuteNow, secondNow, day

function getDayName(day) {
  switch (day) {
    case 0:
      return 'Pazar'
    case 1:
      return 'Pazartesi'
    case 2:
      return 'Salı'
    case 3:
      return 'Çarşamba'
    case 4:
      return 'Perşembe'
    case 5:
      return 'Cuma'
    case 6:
      return 'Cumartesi'
  }
}

function now() {
  dateNow = new Date()
  hourNow = dateNow.getHours()
  minuteNow = dateNow.getMinutes()
  secondNow = dateNow.getSeconds()
  hourNow < 10 ? (hourNow = '0' + hourNow) : hourNow
  minuteNow < 10 ? (minuteNow = '0' + minuteNow) : minuteNow
  secondNow < 10 ? (secondNow = '0' + secondNow) : secondNow
  day = getDayName(dateNow.getDay())

  fullDate = hourNow + ':' + minuteNow + ':' + secondNow + ', ' + day
  document.querySelector('#date-now').innerHTML = fullDate
  setTimeout('now()', 1000)
}