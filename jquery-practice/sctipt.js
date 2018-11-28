$(function() {
  let $name       = $('.name');
  let $surname    = $('.surname');
  let $form       = $('form');
  let $ul         = $('#ul');

  $form.on('submit', function(e) {
    e.preventDefault();
    let nameValue   = $name.val();
    let surnamValue = $surname.val();
    if(nameValue && surnamValue) {
      let li = $(`<li class="list-group-item"> <span class="name">${nameValue}</span> <span class="surname">${surnamValue}</span> <button class="btn btn-danger d-none">Remove</button>  </li>`);
      $ul.append(li);
      $name.val('');
      $surname.val('');
    }
  })
  // hover function
  $ul.on('mouseenter','li', function (event) {
    if($ul.children().length > 1) {
      $('button', this ).removeClass('d-none');
      $('button', this ).addClass('d-inline-block');
    }
  }).on('mouseleave','li',  function(){
    $('button', this ).removeClass('d-inline-block');
    $('button', this ).addClass('d-none');
  });
  // remove function
  $ul.on('click', 'button', function() {
    $(this).closest('li').remove();
  });
  // value change function
  $ul.on('click', 'span.name', function(event) {
  //  console.log($(this).text());
      let changeName = $('<input type="text" class="changeName">');
      let spanName = $('span.name');
      $(this).after(changeName);
      changeName.focus();
      changeName.val($(this).text());
      changeName.on('blur', function() {
        let inputValue = changeName.val();
   //   console.log(inputValue);
        spanName.html('');
        spanName.html(inputValue);
        changeName.remove();
      })
  });
  $ul.on('click', 'span.surname', function(event) {
    //  console.log($(this).text());
        let changeSurname = $('<input type="text" class="changeSurname">');
        let spanSurname = $('span.surname');
        $(this).after(changeSurname);
        changeSurname.val($(this).text());  
        changeSurname.on('blur', function() {
          let inputValue = changeSurname.val();
     //   console.log(inputValue);
          spanSurname.html('');
          spanSurname.html(inputValue);
          changeSurname.remove();
        })
    });
});
