// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html. === .ready

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

const textarea = document.getElementById ('timeblock');

textarea.addEventListener('input', function () {
  const inputValue = textarea.value;
  localStorage.setItem('user-input', inputValue); 
});

window.addEventListener('load', function() {

  const savedInput = localStorage.getItem ('user-input'); 
  if (savedInput) {
    textarea.value = savedInput;
  }
});

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the idex
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
