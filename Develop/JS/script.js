$(document).ready(function() {

    function getHour () {
    return dayjs().hour();

    }

    const currentHour = getHour();

    // 

console.log(currentHour);
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



  //   const hourColumn = document.createElement('div');
  //   hourColumn.classList.add('col-2', 'col-md-1', 'hour', 'text-center', 'py-3');
  //   hourColumn.textContent = `${hour}`;

  //   const textarea = document.createElement('textarea');
  //   textarea.classList.add('form-control', 'col-8', 'col-md-10');

  //   const saveBtn = document.createElement('button');
  //   saveBtn.classList.add('btn', 'saveBtn','col-2', 'col-md-1');
  //   saveBtn.setAttribute('aria-label', 'save');

  //   const saveIcon = document.createElement('i');
  //   saveIcon.classList.add('fas', 'fa-save');

  //   saveBtn.appendChild(saveIcon);
  //   timeBlock.appendChild(hourColumn);
  //   timeBlock.appendChild(textarea);
  //   timeBlock.appendChild(saveBtn);

  //   return timeBlock;

  // }

  // const container = document.querySelector('.time-block');

  for (let hour = 9; hour <= 17; hour ++) {
  //   const timeBlock = timeBlocks (hour, currentHour);

  //   const hourId = hour;
  //   if (hourId < currentHour) {
  //     timeBlock.classList.remove('present', 'future');
  //     timeBlock.classList.add('past');
  //   }
  //   else if (hourId > currentHour) {
  //     timeBlock.classList.remove('past', 'present');
  //     timeBlock.classList.add('future');
  //   }
  
  //   else if (hourId === currentHour) {
  //     timeBlock.classList.remove('past', 'future');
  //     timeBlock.classList.add('present');
  //   }


  // container.appendChild (timeBlock);
console.log (localStorage.getItem(`hour-${hour}`));
$(`#hour-${hour} .description`).val(localStorage.getItem(`hour-${hour}`))

}


$('.saveBtn').on('click', function(){
  let value = $(this).siblings('.description').val()
  let time = $(this).parent().attr('id')
  localStorage.setItem(time, value)
})


})
// const saveButtons = document.querySelectorAll('.saveBtn');

// saveButtons.forEach(function (button) {
//   button.addEventListener ('click', function () {

//     const textarea = this.parentNode.querySelector('.form-control');
//     const inputValue = textarea.value;
//     const key = `user-input-${textarea.id}`;
//     localStorage.setItem (key, inputValue);

//   });
// });

// const textareas = document.querySelectorAll('.form-control');

//     textareas.forEach(function (textarea) {
//       const savedInput = localStorage.getItem(`user-input-${textarea.id}`);
//       if (savedInput) {
//         textarea.value = savedInput;
//       }
//     });
//   });