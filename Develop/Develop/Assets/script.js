$(document).ready(function() {

    function getHour () {
    return dayjs().hour();

    }

    function timeBlocks (hour, currentTime) {
      const timeBlock = document.createElement('div');
      timeBlock.id = `hour-${hour}`;
      timeBlock.classList.add('row','timeblock');
    

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
    hourColumn.textContent = `${hour}`;

    const textarea = document.createElement('textarea');
    textarea.classList.add('form-control', 'col-8', 'col-md-10');

    const saveBtn = document.createElement('button');
    saveBtn.classList.add('btn', 'saveBtn','col-2', 'col-md-1');
    saveBtn.setAttribute('aria-label', 'save');

    const saveIcon = document.createElement('i');
    saveIcon.classList.add('fas','fa-save');

    saveBtn.appendChild(saveIcon);
    timeBlock.appendChild(hourColumn);
    timeBlock.appendChild(textarea);
    timeBlock.appendChild(saveBtn);

    return timeBlock;

  }

  const currentHour = getHour();

  const container = document.querySelector('.time-blocks');

  for (let hour = 9; hour <= 11; hour ++) {
    const timeBlock = timeBlocks (hour, currentHour);
    container.appendChild (timeBlock);
  }
});

const saveButtons = document.querySelectorAll('.saveBtn');

saveButtons.forEach(function (button) {
  button.addEventListener ('click', function () {
    const textarea = this.parentNode.querySelector('text-area');
    const inputValue = textarea.value;
    const key = `user-input-${textarea.id}`;
    localStorage.setItem (key, inputValue);
});

});



  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the index
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


  //What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?