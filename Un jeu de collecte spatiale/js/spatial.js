$(function() {
    let stopDetection = 0;
    // let ok = 1;
    function deplace() {
        $('#bon').animate({top: '-=600'}, 2500, 'linear', function(){
            let bonX = Math.floor(Math.random()*194)+70;
            let bonY = 400;
            $('#bon').css('top', bonY);
            $('#bon').css('left', bonX);
            ok = 1;
        });
        $('#mauvais').animate({top: '-=600'}, 2500, 'linear', function(){
            let mauvaisX = Math.floor(Math.random()*154)+70;
            let mauvaisY = 600;
            $('#mauvais').css('top', mauvaisY);
            $('#mauvais').css('left', mauvaisX);
            ok = 1;
        });
        $('.fond').animate({top: '-=370'}, 2500, 'linear', function(){
            $('.fond').css('top', 0);
            deplace();
          });
    };

    $(document).keydown(function(e) {
        if (e.which === 39) {

            soucoupeX = parseInt($('#soucoupe').css('left'));
            if (soucoupeX < 280)
            $('#soucoupe').css('left', soucoupeX+30);
        }
        if (e.which === 37) {

            soucoupeX = parseInt($('#soucoupe').css('left'));
            if (soucoupeX > 10)
            $('#soucoupe').css('left', soucoupeX-30);
        }
        if (e.which === 40) {

            soucoupeX = parseInt($('#soucoupe').css('top'));
            if (soucoupeX < 230)
            $('#soucoupe').css('top', soucoupeX+30);
        }
        if (e.which === 38) {

            soucoupeX = parseInt($('#soucoupe').css('top'));
            if (soucoupeX > 10)
            $('#soucoupe').css('top', soucoupeX-30);
        }
        if (e.which === 36) {

            soucoupeX = parseInt($('#soucoupe').css('top').css('left'));
            if ((soucoupeY > 20) && (soucoupeX > 20))
            $('#soucoupe').css('top', soucoupeX-30).css('left', soucoupeX-30);
        }
        if (e.which === 33) {

            soucoupeX = parseInt($('#soucoupe').css('top').css('left'));
            if ((soucoupeY > 20) && (soucoupeX > 280))
            $('#soucoupe').css('top', soucoupeX-30).css('left', soucoupeX+30);
        }
        if (e.which === 35) {

            soucoupeX = parseInt($('#soucoupe').css('top'));
            if ((soucoupeX > 20) && (soucoupeY > 280))
            if (soucoupeY > 230)
            $('#soucoupe').css('top', soucoupeX+30).css('left', soucoupeX-30);
        }
        if (e.which === 34) {

            soucoupeX = parseInt($('#soucoupe').css('top'));
            if ((soucoupeY > 20) && (soucoupeX > 280))
            $('#soucoupe').css('top', soucoupeX+30).css('left', soucoupeX+30);
        }
    });

    // function collisions() {
    //     soucoupeX = parseInt($('#soucoupe').css('left'));
    //     mauvaisX = parseInt($('#mauvais').css('left'));
    //     soucoupeY = 10;
    //     mauvaisY = parseInt($('#mauvais').css('top'));
    //     if (((mauvaisX > soucoupeX) && (mauvaisY < (soucoupeX+40)) && (mauvaisY > soucoupeY) && (mauvaisY < (soucoupeY+125-50+20)) && (stopDetection === 0))
    //     || ((soucoupeX > mauvaisX) && (soucoupeX < (mauvaisX+40)) && (mauvaisY > soucoupeY) && (mauvaisY < (soucoupeY+125-50+20)) && (stopDetection === 0))) {
    //         // $('#son')[0].play();
    //         collisions = parseInt($('#info2').text()) + 1;
    //         let score = parseInt($('#info3').text()) - 5;
    //         $('#info3').text(score).css('color', 'red');
    //         $('#info2').text(collisions).css('color', 'red');
    //     ok = 0;
    //      }

    //      if ((mauvaisX > soucoupeX) && (mauvaisY < (soucoupeX+233)) && (mauvaisY > soucoupeY) && (mauvaisY < (soucoupeY+127)) && (stopDetection === 0))
    //     {
    //         $('#son')[0].play();
    //         stopDetection = 1;
    //     }
    //     }
            
    function bonus() {
        soucoupeX = parseInt($('#soucoupe').css('left'));
        bonX = parseInt($('#bon').css('left'));
        soucoupeY = 10;
        bonY = parseInt($('#bon').css('top'));
        if (((bonX > soucoupeX) && (bonY > (soucoupeX+40)) && (bonY > soucoupeY) && (bonY < (soucoupeY+177-116+20)) && (stopDetection === 0))
        || ((soucoupeX > bonX) && (soucoupeX < (bonX+40)) && (bonY > soucoupeY) && (bonY < (soucoupeY+177-116+20)) && (stopDetection === 0))) {
            // $('#son')[0].play();
            bonus = parseInt($('#info1').text()) + 1;
            let score = parseInt($('#info3').text()) + 5;
            $('#info3').text(score).css('color', 'green');
            $('#info1').text(bonus).css('color', 'green');
        ok = 0;
        }
    }

    function collisions()
{
  posX = parseInt($('#soucoupe').css('left'));
  posY = parseInt($('#soucoupe').css('top'));
  if ($('#bon').css('display') == 'none')
  {
    elemType = 'mauvais';
    elemX = parseInt($('#mauvais').css('left'));
    elemY = parseInt($('#mauvais').css('top'));
  }
  else 
     {
    elemType = 'bon';
    elemX = parseInt($('#bon').css('left'));
    elemY = parseInt($('#bon').css('top'));
  }
  if ((elemX>posX-20) && (elemX<(posX+125-50+20)) && (elemY>posY-20) && (elemY<(posY+177-116+20)) && (stopDetection === 0))
  {
    if (elemType=='bon')
    {
      let nbBon = parseInt($('#info1').text())+1;
      $('#info1').text(nbBon);
      let score = parseInt($('#info3').text())+5;
      $('#info3').text(score).css('color', 'red');
      $('#bon').css('display', 'none');
    }
    else
    {
      let nbMauvais = parseInt($('#info2').text())+1;
      $('#info2').text(nbMauvais);
      let score = parseInt($('#info3').text())-5;
      $('#info3').text(score).css('color', 'red');
      $('#mauvais').css('display', 'none');
    }
  }
}

    deplace();
    setInterval(collisions, 20);
    setInterval(bonus, 20);
    // $('#son')[0].play();
});