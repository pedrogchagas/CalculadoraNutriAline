var form = document.querySelector('#calcForm');
$(document).ready(function() {
  $('#btnCalcular').click(function() {

    var selectedOption = document.querySelector('.card1.selected').getAttribute('data-option');
    condicionamentoFisico = selectedOption;

    var selectedOption2 = document.querySelector('.card2.selected').getAttribute('data-option');
    valorAtividade = selectedOption2;

    // var atividadeFisica = document.getElementById("atividadeFisica");
    // var valorAtividade = atividadeFisica.value;

    // var condicionamentoFisico = document.querySelector('#condicionamentoFisico').value;
    if ($("input[name=genero]:checked").length > 0){
      var valorGenero = document.querySelector('input:checked').value;
    }
    var idade = document.querySelector('#idadeRange').value;
    var altura = document.querySelector('#alturaRange').value;
    var peso = document.querySelector('#pesoRange').value;

    // console.log(condicionamentoFisico, valorGenero, idade, altura, peso, valorAtividade)

    // do something with the form values
    var result = calculos(condicionamentoFisico, valorGenero, idade, altura, peso, valorAtividade);

    var resultado1 = document.getElementById('resultadoGasto');
    var resultado2 = document.getElementById('resultadoMeta');

    resultado1.textContent = result[0].toFixed(2) + 'kcal'
    resultado2.textContent = result[1].toFixed(2) + 'g'

    // console.log(result);
  })
});


function transformarAtividade(num) {
  if (num == 1) {
    return 1.2;
  } else if (num == 2) {
    return 1.375;
  } else if (num == 3) {
    return 1.55;
  } else if (num == 4) {
    return 1.725;
  }
}

function calculos(condicionamentoFisico, valorGenero, idade, altura, peso, valorAtividade) {
   var TMB, gastoEnergetico, metaProteinas;
  if (condicionamentoFisico == 1) {
    if (valorGenero == 'Masculino') {
      TMB = 66.5 + (13.75 * peso) + (5.003 * altura) - (6.755 * idade);
      gastoEnergetico = TMB * transformarAtividade(valorAtividade);
      metaProteinas = peso * 1.8;
    } else if (valorGenero == 'Feminino') {
      TMB = 655.1 + (9.563 * peso) + (1.85 * altura) - (4.676 * idade);
      gastoEnergetico = TMB * transformarAtividade(valorAtividade);
      metaProteinas = peso * 1.8;
    }
  } else if (condicionamentoFisico == 2) {
    if (valorGenero === 'Masculino') {
      TMB = 66.5 + (13.75 * peso) + (5.003 * altura) - (6.755 * idade);
      gastoEnergetico = TMB * transformarAtividade(valorAtividade);
      metaProteinas = peso * 1.8;
    } else if (valorGenero == 'Feminino') {
      TMB = 655.1 + (9.563 * peso) + (1.85 * altura) - (4.676 * idade);
      gastoEnergetico = TMB * transformarAtividade(valorAtividade);
      metaProteinas = peso * 1.8;
      console.log(TMB)
    }
  } else if (condicionamentoFisico == 3) {
    if (valorGenero == 'Masculino') {
      TMB = (10 * peso) + (6.25 * altura) - (5 * idade) + 5;
      gastoEnergetico = TMB * transformarAtividade(valorAtividade);
      metaProteinas = peso * 1.8;
    } else if (valorGenero == 'Feminino') {
      TMB = (10 * peso) + (6.25 * altura) - (5 * idade) - 161;
      gastoEnergetico = TMB * transformarAtividade(valorAtividade);
      metaProteinas = peso * 1.8;
    }
  } else if (condicionamentoFisico == 4) {
    TMB = (24.8 * peso) + 10;
    gastoEnergetico = TMB * transformarAtividade(valorAtividade);
    metaProteinas = peso * 1.8;
  }
  return [gastoEnergetico, metaProteinas];
}

var slider = document.getElementById("idadeRange");
var output = document.getElementById("idadeSlider");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

var slider2 = document.getElementById("alturaRange");
var output2 = document.getElementById("alturaSlider");
output2.innerHTML = slider2.value + ' cm';

slider2.oninput = function() {
    output2.innerHTML = this.value + ' cm';
}

var slider3 = document.getElementById("pesoRange");
var output3 = document.getElementById("pesoSlider");
output3.innerHTML = slider3.value + ' kg';

slider3.oninput = function() {
    output3.innerHTML = this.value + ' kg';
}

$(document).ready(function() {
    $('#btnCalcular').click(function() {
      if ($("input[name=genero]:checked").length > 0){
        var valorGenero = document.querySelector('input:checked').value;
      }
      else{
        var valorGenero = document.querySelector('input:checked');
      }
      if(valorGenero == "Masculino" || valorGenero == "Feminino"){
        $('#segundaDiv').show();
        $('#terceiraPergunta').hide();
      }
      else{
        $('#avisoPergunta3').show();
      }
    });
  
    $('#btnVoltar').click(function() {
      $('#primeiraDiv').show();
      $('#segundaDiv').hide();
      window.location.reload();
    });

   $('#btnAvancar').click(function() {
      var selectedOption = document.querySelector('.card1.selected');
      if(selectedOption != null){
        $('#primeiraPergunta').hide();
        $('#segundaPergunta').show();
      }
      else{
        $('#avisoPergunta1').show();
      }
    }); 

    $('#btnAvancar2').click(function() {
      var selectedOption = document.querySelector('.card2.selected');
      if(selectedOption != null){
        $('#segundaPergunta').hide();
        $('#terceiraPergunta').show();
      }
      else{
        $('#avisoPergunta2').show();
      }
    });

  });

// Get all the card elements and add a click event listener to each one
var cards = document.querySelectorAll('.card1');
cards.forEach(function(card) {
  card.addEventListener('click', function() {
    // Set the selected option in the hidden input field
    var selectedOption = card.getAttribute('data-option');
    document.getElementById('selected-option').value = selectedOption;
    // Add a visual indicator to show which option is selected
    cards.forEach(function(otherCard) {
      otherCard.classList.remove('selected');
    });
    card.classList.add('selected');
  });
});

// Get all the card elements and add a click event listener to each one
var cards2 = document.querySelectorAll('.card2');
cards2.forEach(function(card) {
  card.addEventListener('click', function() {
    // Set the selected option in the hidden input field
    var selectedOption = card.getAttribute('data-option');
    document.getElementById('selected-option').value = selectedOption;
    // Add a visual indicator to show which option is selected
    cards2.forEach(function(otherCard) {
      otherCard.classList.remove('selected');
    });
    card.classList.add('selected');
  });
});