//Header burger     
let header__burger = document.querySelector('.burger');
let header_menu = document.querySelector('.header__menu');
let back = document.querySelector('body');


header__burger.onclick = function () {
  header__burger.classList.toggle('active');
  header_menu.classList.toggle('active');
  back.classList.toggle('locked');
}
//Header burger   

document.addEventListener("click", e => {
  let anchorlink = e.target.closest('a[href^="#"]');

  if (anchorlink) {
    e.preventDefault();
    let hashval = anchorlink.getAttribute('href')
    let target = document.querySelector(hashval)
    const yOffset = -100;
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });

    history.pushState(null, null, hashval)
    e.preventDefault();
  }
})

function removeCls() {
  $('.burger').removeClass('active');
  $('.nav').removeClass('active');
  $('body').removeClass('locked');
}

$(function () {
  $('input[type=file]').each(function () {
    var $input = $(this),
      $label = $input.next('.js-labelFile'),
      labelVal = $label.html();

    $input.hide();
    $input.on('change', function (element) {
      var fileName = '1';
      if (element.target.value) fileName = element.target.value;
      fileName ? $label.addClass('has-file').find('.js-fileName').html('(1)') : $label.removeClass('has-file').html('1');
    });
  });
});
// $(function () {


// document.getElementById('feedback-form').addEventListener('submit', function(evt){
// var http = new XMLHttpRequest(), f = this;
// var th = $(this);
//   let show = document.querySelector(".showblock");
//   const file_text = document.getElementById("file_text");
//   let showbg = document.querySelector(".showblock_background");
// evt.preventDefault();
// http.open("POST", "mail.php", true);
// http.onreadystatechange = function() {
// if (http.readyState == 4 && http.status == 200) {
//  if (http.responseText.indexOf(f.nameff.value) == 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
//    th.trigger("reset"); 
//     file_text.innerHTML = "";
//  show.classList.toggle("Show");
    
//     showbg.classList.toggle("Show_bg");
   
//     file_text.innerHTML = "";


//     $('body').addClass('overlock');
//     //Если все графы заполнены, то показываем popup
//  }
// }
// }
// http.onerror = function() {
// alert('Извините, данные не были переданы');
// }
// http.send(new FormData(f));
// }, false);

// });
$('form').submit(function (e) {
  let show = document.querySelector(".showblock");
  const file_text = document.getElementById("file_text");
  let showbg = document.querySelector(".showblock_background");
  var empty = $(this).parent().find("input").filter(function () {
    return this.value === "";
  });
  if (!empty.length) {
    show.classList.toggle("Show");
    $('#modal-container').addClass('hide');
    $('#modal-container2').addClass('hide');
    $('.modal-background2').removeClass('opened');
    showbg.classList.toggle("Show_bg");
    $('.modal-background').removeClass('opened');
    file_text.innerHTML = "";


    $('body').addClass('overlock');
    //Если все графы заполнены, то показываем popup


    //очищаем все данные текстовых полей, кроме кнопок
    $('form input').not(':button, :submit').val('');
  }
  e.preventDefault();
});

$('.showblock_background').click(function () {
  $('body').removeClass('overlock');
  $('.showblock_background').removeClass('Show_bg');
  $('.showblock').removeClass('Show');
});
$('.modal-background').click(function () {
  $('#modal-container').addClass('out');
  $('body').removeClass('modal-active');
  $('.modal-background').removeClass('opened');
  $('body').removeClass('overlock');
});
$('.modal-background').on('click', (e) => {
  setTimeout(() => {
    $('#modal-container').addClass('hide');
  }, 500);
});

$('.modal__close').click(function () {
  $('.showblock').removeClass('Show');
  $('#modal-container2').addClass('out');
  $('body').removeClass('modal-active');
  $('.modal-background2').removeClass('opened');
  $('body').removeClass('overlock');
});
$('.modal__close').on('click', (e) => {
  $('.showblock').removeClass('Show');
  $('.showblock_background').removeClass('Show_bg');
  setTimeout(() => {
    $('#modal-container2').addClass('hide');
  }, 500);
});

const header = $(".header__wrapper");

const headerBody = $(".header__body");

window.addEventListener('scroll', function () {
  if (window.scrollY > 40) {
    // $(".white__btn").removeClass("white__btn");
    header.addClass("sticky");
    headerBody.addClass('sticky-margin');

  } else {
    header.removeClass("sticky");
    headerBody.removeClass('sticky-margin');
  }
});
if ($(document).scrollTop() > 10) {
  header.classList.add("sticky");
  headerBody.classList.add('sticky-margin');
 
}




