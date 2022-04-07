//aba superior 
        // função para exibir menu de navegação entre as paginas dos planos
        function myFunction() {
          var x = document.getElementById("myGrid");
          if (x.className === "w3-row") {
            x.className = "w3-row-padding";
          } else { 
            x.className = x.className.replace("w3-row-padding", "w3-row");
          }
        }
        
        // função para abrir e fechar o menu
        function w3_open() {
          document.getElementById("mySidebar").style.width = "100%";
          document.getElementById("mySidebar").style.display = "block";
        }
        
        function w3_close() {
          document.getElementById("mySidebar").style.display = "none";
        }




// função para exibir barra lateral home
var mySidebar = document.getElementById("mySidebar");

// efeito overley
var overlayBg = document.getElementById("myOverlay");


// Alternar entre mostrar e ocultar a barra lateral 

function openMenu() {
    if (mySidebar.style.display === 'block') {
      mySidebar.style.display = 'none';
      overlayBg.style.display = "none";
    } else {
      mySidebar.style.display = 'block';
      overlayBg.style.display = "block";
    }
  }
  
  // botão para feche a barra lateral 
  function closeMenu() {
    mySidebar.style.display = "none";
    overlayBg.style.display = "none";
  }



