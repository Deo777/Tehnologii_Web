
function show(name, photo) {
  
    name.onmouseover = function(){
      photo.style.display = "block";
    }

    name.onmouseout = function(){
      photo.style.display = "none";
    }
}  

function SearchBox() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("TabelCeleMaiMariOrase");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("TabelCeleMaiMariOrase");
  switching = true;
  //Setam ordinea de sortare
  dir = "asc"; 
  
  while (switching) {
    
    switching = false;
    rows = table.rows;
    /*Parcurgem toate rindurile tabelului, cu exceptia primului rind unde sunt 
    indicate denumirile coloanei:*/
    for (i = 1; i < (rows.length - 1); i++) {
      
      shouldSwitch = false;
      /*Alegem rindurile care dorim sa comparam :*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*Verificam daca trebuie schimabate cu locul:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //Daca e adevarat marcam shouldSwitch si oprim ciclul:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      
      switchcount ++;      
    } else {
      
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
