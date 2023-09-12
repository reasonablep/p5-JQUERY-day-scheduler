$(document).ready(function() {

    function getHour () {
    return dayjs().hour();

    }

    const currentHour = getHour();

    function timeBlocks (hour, currentTime) {

      

      const timeBlock = document.createElement('div');
      timeBlock.id = `hour-${hour}`;
      timeBlock.classList.add('row','time-block');
    

    if (hour < currentTime) {
      timeBlock.classList.add('past');
    }

    else if (hour=== currentTime) {
      timeBlock.classList.add('present');
    }

    else if (hour > currentTime) {
        timeBlock.classList.add('future');
    }



    const hourColumn = document.createElement('div');
    hourColumn.classList.add('col-2', 'col-md-1', 'hour', 'text-center', 'py-3');
  

    const hourText = hour === 12 ? '12PM': hour < 12 ? `${hour}AM` : `${hour-12} PM`;
    hourColumn.textContent = hourText;

    const textarea = document.createElement('textarea');
    textarea.classList.add('form-control', 'col-8', 'col-md-10');

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

  }
      const saveButtons = document.querySelectorAll('.saveBtn');

      saveButtons.forEach(function (button) {
        button.addEventListener ('click', function () {
      
          const textarea = this.parentNode.querySelector('.form-control');
          const inputValue = textarea.value;
          const key = `user-input-${textarea.id}`;
          localStorage.setItem (key, inputValue);
      
        });
      });
      
      const textareas = document.querySelectorAll('.form-control');
      
          textareas.forEach(function (textarea) {
            const savedInput = localStorage.getItem(`user-input-${textarea.id}`);
            if (savedInput) {
              textarea.value = savedInput;
            }
       });

});