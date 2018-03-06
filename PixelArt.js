/*************Create Grid****/

$(document).ready(function() {
  $('#makeGrid').on('click', function() {
    const table = document.createElement('table');
    document.getElementById('tableDiv').appendChild(table);
    let row = document.getElementById('addRow').valueAsNumber;
    let column = document.getElementById('addColumn').valueAsNumber;

    for (let x = 0; x < row; x++) {
      let tableRow = document.createElement('tr');
      table.appendChild(tableRow);

      for (let y = 0; y < column; y++) {
        let tableColumn = document.createElement('td');
        tableColumn.setAttribute('id', 'grid' + x + y);
        tableRow.appendChild(tableColumn);
      }
    }

  });
});
/***Delete Grid********/

$(document).ready(function() {
  $('#deleteGrid').on('click', function() {
    var node = document.getElementById('tableDiv');

    while (node.hasChildNodes()) {
      node.removeChild(node.firstChild);
    }

  });
});

/******Add color using color picker******/

$(document).ready(function() {
  var isMouseDown = false;

  $('#tableDiv').on('mousedown', 'td', function() {
    isMouseDown = true;
    let colorValue = document.getElementById('colorPick').value;
    $(this).css('background-color', colorValue);
  });

  $('#tableDiv').on('mousemove', 'td', function() {
    if (isMouseDown) {
      let colorValue = document.getElementById('colorPick').value;
      $(this).css('background-color', colorValue);
    }

  });

  $('#tableDiv').on('mouseup', 'td', function() {
    isMouseDown = false;
  });


  /*******Clear the color of one  cell***********/

  $('#tableDiv').ready(function() {
    $('#tableDiv').on('dblclick', 'td', function() {
      $(this).css('background-color', 'initial');
    });
  });

});


/*****clear the color of  the entire  grid***********/

$(document).ready(function() {

  $('#clearGrid').on('click', function() {
    $('td').css('background-color', 'initial');

  });

});
