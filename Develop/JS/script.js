$(document).ready(function() {

    function getHour () {
    return dayjs().hour();
    }

    function formatTime() {
      return dayjs().format('hh:mm A');
    }

    const currentHour = getHour();

<<<<<<< HEAD
    const currentTime = formatTime();
=======
    function timeBlocks (hour, currentTime) {

      

      const timeBlock = document.createElement('div');
      timeBlock.id = `hour-${hour}`;
      timeBlock.classList.add('row','time-block');
    
>>>>>>> 8fc77465f75f3c919ced0a37c2de6227486269bf

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

<<<<<<< HEAD
console.log (localStorage.getItem(`hour-${hour}`));
$(`#hour-${hour} .description`).val(localStorage.getItem(`hour-${hour}`))
=======


    const hourColumn = document.createElement('div');
    hourColumn.classList.add('col-2', 'col-md-1', 'hour', 'text-center', 'py-3');
  

    const hourText = hour === 12 ? '12PM': hour < 12 ? `${hour}AM` : `${hour-12} PM`;
    hourColumn.textContent = hourText;

    const textarea = document.createElement('textarea');
    textarea.classList.add('col-8', 'col-md-10', 'description');
    textarea.setAttribute('rows', '3')


    const saveBtn = document.createElement('button');
    saveBtn.classList.add('btn', 'saveBtn','col-2', 'col-md-1');
    saveBtn.setAttribute('aria-label', 'save');

    const saveIcon = document.createElement('i');
    saveIcon.classList.add('fas', 'fa-save');

    saveBtn.appendChild(saveIcon);
    timeBlock.appendChild(hourColumn);
    timeBlock.appendChild(textarea);
    timeBlock.appendChild(saveBtn);

    return timeBlock;

  }

  const container = document.querySelector('.time-block');

  for (let hour = 9; hour <=17; hour ++) {
    const timeBlock = timeBlocks (hour, currentHour);

    const hourId = parseInt (timeBlock.id.split('-')[1]);
    if (hourId < currentHour) {
      timeBlock.classList.remove('present', 'future');
      timeBlock.classList.add('past');
    }
    else if (hourId > currentHour) {
      timeBlock.classList.remove('past', 'present');
      timeBlock.classList.add('future');
    }
  
    else if (hourId === currentHour) {
      timeBlock.classList.remove('past', 'future');
      timeBlock.classList.add('present');
    }


  container.appendChild (timeBlock);
>>>>>>> 8fc77465f75f3c919ced0a37c2de6227486269bf

  }
      const saveButtons = document.querySelectorAll('.saveBtn');

<<<<<<< HEAD
$('.saveBtn').on('click', function(){
  let value = $(this).siblings('.description').val();
  let time = $(this).parent().attr('id');
  localStorage.setItem(time, value);
  $(`#${time} .description`).val(value);

})

})
=======
      saveButtons.forEach(function (button) {
        button.addEventListener ('click', function () {
      
          const textarea = this.parentNode.querySelector('.time-block');
          const inputValue = textarea.value;
          const key = `user-input-${textarea.id}`;
          localStorage.setItem (key, inputValue);
      
        });
      });
      
      const textareas = document.querySelectorAll('.time-block');
      
          textareas.forEach(function (textarea) {
            const savedInput = localStorage.getItem(`user-input-${textarea.id}`);
            if (savedInput) {
              textarea.value = savedInput;
            }
       });

});
>>>>>>> 8fc77465f75f3c919ced0a37c2de6227486269bf
