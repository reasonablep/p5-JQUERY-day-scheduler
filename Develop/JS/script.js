$(document).ready(function() {

  function getHour () {
  return dayjs().hour();
  }

  function formatTime() {
    return dayjs().format('hh:mm A');
  }

  const currentHour = getHour();

  const currentTime = formatTime();

  const currentDay = document.getElementById('currentDay');
  const currentHourEl = document.createElement('p');
  currentHourEl.textContent = currentTime;
  currentDay.appendChild(currentHourEl);

  $('.time-block').each (function(){
    let timeBlock = parseInt ($(this).attr('id').split('-')[1])
    if (timeBlock < currentHour) {
      $(this).addClass('past')
    } else if (timeBlock === currentHour) {
      $(this).removeClass('past')
      $(this).addClass('present')
    } else { 
      $(this).removeClass('past')
      $(this).addClass('future')
      $(this).removeClass('present')
    }
  })

for (let hour = 9; hour <= 17; hour ++) {

console.log (localStorage.getItem(`hour-${hour}`));
$(`#hour-${hour} .description`).val(localStorage.getItem(`hour-${hour}`))

}

$('.saveBtn').on('click', function(){
let value = $(this).siblings('.description').val();
let time = $(this).parent().attr('id');
localStorage.setItem(time, value);
$(`#${time} .description`).val(value);

})

})
