$(document).ready(function() {

var offset = 200; // координата сдвига по оси Y
var duration = 300; //время выполнения
$('#totop').fadeOut(0); 


  /* Добавить плавный скроллинг ко всем ссылкам внутри тега navbar*/
  $("a[href^='#']").on("click", function(event) {
    //this.hash - атрибут 'href' ссылки
    var hash = $(this).attr("href"); //сохраняем атрибут href
    if (hash !== "") { //проверяем, не пустое ли поле 'href'      
      // Используем метод jQuery animate(), чтобы добавить плавный скроллинг
      $("html, body").animate(
        {scrollTop: $(hash).offset().top // устанавливаем новое положение документа по якорю
        }, 900  //900-число миллисекунд - время анимации        
      );
    }
  });

$(window).scroll(function() { // если происходит скроллинг
    $(".slideanim").each(function(){ // для каждого блока с классом slideanim
      var pos = $(this).offset().top; // считываем его координату по оси Y в окне браузера
  
      var winTop = $(window).scrollTop(); // сохраняем текущую верхнюю координату окна браузера (верх страницы)
  
      if (pos < winTop + 400) { //если до верха страницы остается 400px, 
        $(this).addClass("slide"); //добавляем к блоку класс slide с анимацией
      }
    });

    if ($(window).scrollTop() > offset) {
      $("#totop").css("opacity", "0.8"); // возвращаем прозрачность
      $("#totop").fadeIn(duration); // функция плавно исчезает
    } else {
      $("#totop").fadeOut(duration); // функция плавно появляется
    }

  });


});
