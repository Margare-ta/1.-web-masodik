$(document).ready(function () {
  $('.navbar-nav li').click(function (x) {
    $('.navbar-nav li').removeClass('active');
    $(event.target).parent().addClass('active');
  });
});

function showCircuit() {
    $('#circuit').change(function (o) {
      switch (o.target.value) {
        case 'ITA':
          $('#circuitimage').attr('src', 'img/monza.jpg');
          $('#f1sound')[0].play();
          break;
        case 'HUN':
          $('#circuitimage').attr('src', 'img/hungaroring.jpg');
          break;
        case 'BEL':
          $('#circuitimage').attr('src', 'img/spa.jpg');
          break;
        case 'MON':
          $('#circuitimage').attr('src', 'img/monaco.jpg');
          break;

        default:
          break;
      }
    });
  }

//---------------------------------------------------------

function calculate() {
    let HUN = 4.381;
    let MON = 3.337;
    let BEL = 7.004;
    let ITA = 5.793;

  let laptime = Number(document.getElementById('laptime').value) / 3600;

    $('#circuit').change(function (o) {
      switch (o.target.value) {
        case 'ITA':
          document.getElementById('averagespeed').value = ITA / laptime;
        case 'HUN':
          
        case 'BEL':
         
        case 'MON':
          

        default:
       
      }
    });
  }
