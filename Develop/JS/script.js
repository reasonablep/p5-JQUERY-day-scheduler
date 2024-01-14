$(document).ready(function() {

  function getHour () {
  return dayjs().hour();
  }

  function formatDateTime() {
    return dayjs().format('MMMM DD, YYYY @ hh:mm A');
  }

  const currentHour = getHour();

  const currentDate = formatDateTime();

  const currentDay = document.getElementById('currentDay');
  const currentDateEl = document.createElement('p');
  currentDateEl.textContent = currentDate;
  currentDay.appendChild(currentDateEl);

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
