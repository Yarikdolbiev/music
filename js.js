var setAnimate, flag = 0;

function my_animat()
{
  var animate_conteiner = $('#animate-conteiner'),
      t = 0,
      H = 128, // Высота кадра и самого контейнера
      sprH = 3840, // Высота спрайта
      speed = 25; // Скорость анимации

      if(flag == 0) 
      {
          flag = 1;
          
          setAnimate = setInterval(function(){
               
             t += H;
             if(t == sprH) t = 0;
             animate_conteiner.css({'background-position':'0 -'+t+'px'});
  
          }, speed); 
      }
}  


function stop_animat()
{
    
    if(flag == 1)
    {
        flag = 0;
        clearInterval(setAnimate);
    }
}


$(function(){

    my_animat();
    
    
    // Запуск анимации
    $('#btn-start').click(function(e) {
        my_animat();
    });
    
    
    // Остантовка анимации
    $('#btn-stop').click(function(e) {
        stop_animat();
    });

});