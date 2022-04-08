# Sistema cadastro Planos com Javascript 
### Aplicação de um painel de planos de saúde e cadastros de clientes com html, css, e javascript, com validação de campos e dados preenchidos. Totalmente responsivo, confira o resultado no link abaixo:
## [Teste a aplicação clicando aqui !](https://gabrielfranca95.github.io/Sistema_cadastro_Planos/home)
### Este é um exemplo de visualização desktop
[<img src="https://user-images.githubusercontent.com/57453192/162351515-6dd0ad1b-24ce-47f9-a1cf-37a8d4e183fd.png" width="500"/>](https://user-images.githubusercontent.com/57453192/162351515-6dd0ad1b-24ce-47f9-a1cf-37a8d4e183fd.png)
[<img src="https://user-images.githubusercontent.com/57453192/162351545-a7e3fa54-bbde-44fd-99a8-4700cd0a2840.png" width="500"/>](https://user-images.githubusercontent.com/57453192/162351545-a7e3fa54-bbde-44fd-99a8-4700cd0a2840.png)
### Este é um exemplo de exibição de tela em um smartphone
[<img src="https://user-images.githubusercontent.com/57453192/162351338-d56d3b88-71e1-41b7-9787-54d0a3fcc4b3.png" width="240"/>](https://user-images.githubusercontent.com/57453192/162351338-d56d3b88-71e1-41b7-9787-54d0a3fcc4b3.png)
[<img src="https://user-images.githubusercontent.com/57453192/162353675-b18001d2-a79c-429a-a83a-c080b59a2a5b.png" width="240"/>](https://user-images.githubusercontent.com/57453192/162353675-b18001d2-a79c-429a-a83a-c080b59a2a5b.png)
[<img src="https://user-images.githubusercontent.com/57453192/162353384-177b9417-24cd-45c0-a411-8004517d8929.png" width="240"/>](https://user-images.githubusercontent.com/57453192/162353384-177b9417-24cd-45c0-a411-8004517d8929.png)
[<img src="https://user-images.githubusercontent.com/57453192/162351358-7c14bd11-6395-4875-be17-84f60bf6d20d.png" width="240"/>](https://user-images.githubusercontent.com/57453192/162351358-7c14bd11-6395-4875-be17-84f60bf6d20d.png)
### A aplicação permite a inserção de novos usuários nos planos de saúde baseando-se nas informações solicitatas por cada plano como mostra a imagem acima.
Utilizando html, css, e javascript para criação da aplicação e utilizando localstorage para persistência dos dados.
## Requisitos:
````
os requisitos para rodar a aplicação são minimos, pois a aplicação não faz uso de frameworks ou bibliotecas externas com exigência de processamento, utilizei uma máquina windows 10 e o editor de códigos vs code.
````
## Explicando a inteção
Antes de iniciarmos a aplicação iremos entender como iremos construí-la, inicialmente iremos montar o html das paginas dos planos de saúde, após isso iremos criar a pagina home, e passar todo css para as duas, depois iremos criar todo javascript repassando as funcionalidades da aplicação e passaremos o JSON para o localstorage e por fim possibilitar a persistência dos dados!

# Mão na massa:
## Criando html do menu de cadastro

Iremos começar criando o html da pagina de cadastros de pessoas:

Abra o seu editor de códigos, link para downloado: https://code.visualstudio.com/

Crie um arquivo chamado dentaltio.html em um repositorio local(pasta):
````
touch dentaltio.html
````
crie um doctype html e adicione as seguintes rotas que usaremos em nossa aplicação:
````
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">   
    <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,700;1,200;1,800&display=swap"rel="stylesheet">
````    


Agora iremos adicionar a barra superior direita responsável por exibir um menu de saída e rotas da páginas, titulo e subtitulo. Dentro da teg `<body>` insira o seguinte trecho:
````
    <div class="w3-opacity">
        <span class="w3-button w3-xxlarge w3-white w3-right" onclick="w3_open()"><i class="fa fa-bars"></i></span> 
        <div class="w3-clear"></div>
        <!--título e subtitulo da pagina-->
        <header class="w3-center w3-margin-bottom">
          <h1>DENTAL SORRISO</h1>
          <p>Realize aqui o cadastros dos seus funcionários</p>
        </header>
     </div><br>
````
Note que inserimos um onclick `w3_open()` usaremos este onclick para adicionar a funcionalidade de exibir o menu quando introduzirmos o javascript.

Agora iremos inserir o menu de opções que será exibido ao clicar nas 3 barrinha do canto superior direito:
ainda na tag `<body>` acima do codigo adicionado anteriormente insira o seguinte código:
````
    <nav class="w3-sidebar w3-white w3-animate-top w3-xxlarge" style="display:none;padding-top:150px" id="mySidebar">
        <a href="javascript:void(0)" onclick="w3_close()" class="w3-button w3-white w3-xxlarge w3-padding w3-display-topright" style="padding:6px 24px">
            <i class="fa fa-remove"></i>
        </a>
        <div class="w3-bar-block w3-center">
            <h1>Planos Tio Patinhas</h1><br>
            <a href="rota do seu arquivo/mentesa.html" class="w3-bar-item w3-button w3-text-grey w3-hover-white">Mente Sã, Corpo São</a>
            <a href="rota do seu arquivo/pampulha.html" class="w3-bar-item w3-button w3-text-grey w3-hover-white">Pampulha Intermedica</a>
            <a href="rota do seu arquivo/home.html" class="w3-bar-item w3-button w3-text-grey w3-hover-white">Inicio</a>

        </div>
    </nav>
````
os links referenciados como `rota do seu arquivo/exemplo.html` serão substituídos futuramente pelas suas rotas criadas, onde ao final da linha podemos ver o nome da página ao qual a rota deve se referênciar, cada link será exibido como uma linha referênciando cada página, futuramente abordaremos mais esses aspectos.

Agora iremos criar a tag `<main>` com a tabela padrão a ser exibida quandoa página é carregada:
Ainda dentro da tag `<body>` logo abaixo de todos os codigos inseridos anteriormente, insira o seguinte código:
````
    <main>
    <!--botão cadastrar funcionarios-->
        <button type="button" class="button blue mobile" id="cadastrarCliente">Cadastrar </button>
        <div style="overflow-x:auto;">
        <!--tabela inicial de dados da tabela para telas maiores-->    
        <table id="tableClient" class="records">
            <thead>
                <tr>
                    <th data-title="nome">Nome</th>
                    <th data-title="cpf">cpf</th>
                    <th data-title="peso">peso</th>
                    <th data-title="altura">altura</th>
                    
                </tr>
            </thead>
            <tbody>
        </div>        
            </tbody>
        </table>
        <!--conteúdo da janela modal-->
        <div class="modal" id="modal">
            <div class="modal-content">
                <header class="modal-header">
                    <h2>Novo Cliente</h2>
                    <span class="modal-close" id="modalClose">&#10006;</span>
                </header>
                <form id="form" class="modal-form">
                    
                    <input type="text" id="nome" data-index="new" class="modal-field" placeholder="Nome do Cliente">
                    <input type="text" id="cpf"  class="modal-field" placeholder="CPF 123.456.789-01" >
                    <input type="text" id="peso"  class="modal-field" pattern="\d{2}\.\d{1}" \ placeholder="Peso(kg) EX: 62.0 " title="Digite o peso no formato: 00.0" >
                    <input type="text" id="altura"  class="modal-field" pattern="\d{1},\d{2}" \ placeholder="Altura(cm) Ex: 1,60" title="Digite a altura no formato: 0,0" required>
              
                        

                </form>
                <footer class="modal-footer">
                    <!--botão salvar da janela modal-->
                    <button id="salvar" class="button green">Salvar</button>
                    <button id="cancelar" class="button blue">Cancelar</button>
                </footer>
            </div>
        </div>
    </main>
````    
Note que neste arquivo temos uma tabela com as informações exibidas na tela do desktop, e tambem temos uma class records, onde futuramente iremos adiciona-la no css.
Uma div modal, nos passando os parametros da janela modal que é exibida ao clicar em `cadastrar`na aplicação
Tambem temos um `<form>` que é onde inserimos os imputs solicitados dentro da nossa janela modal

No `<footer>` foi inserido uma class modal que será adicionada ao css e incluímos o botão salva e cancelar da nossa janela modal.
Após isso abrindo o arquivo em seu navegador iremos nos deparar com uma tela parecida com a tela abaixo:
![image](https://user-images.githubusercontent.com/57453192/162367491-0b0c6fe4-6d93-43d1-89ac-1f67cf388758.png)

# validando os dados
Agora iremos validar os dados dos campos do formulário, para executar tal tarefa iremos exigir que o nosso imput do formulário seja preenchido, fazendo com que assim o usuário não seja capaz de salvar o formulário sem que todos os campos estejam preenchidos

Adicionando o `required` ao final de cada formulário iremos exigir que o campo em questão seja preenchido:
````
<input type="text" id="nome" data-index="new" class="modal-field" placeholder="Nome do Cliente"required>
````
Sendo assim, será mostrado ao usuário uma mensagem de erro toada vez que o campo não for preênchido. Adicione required em todos os campos input

No campo cpf iremos exigir que o campo além de ser preenchido também tenha um padrão de um cpf, para evitar que o usuário preencha os dados nos campos errados
Seguindo a mesma lógica, além dos avisos nós iremos solicitar que o padrão de preenchimento do CPF corresponda ao padrão com pontos a cada 3 dígitos e com um traço. para adicionarmos essa funcionalidade adicionaremos um `pattern` informando o padrão dessa forma `\d{3}\.\d{3}\.\d{3}-\d{2}` para exigir o formato do cpf e depois adicionaremos um `title` e informaremos o que desejamos adicionar na mensagem de erro, se não adicionarmos um title a mensagem de erro será padrão, e provavelmente o usiário ficaria confuso ao preencher, pois mesmo adicionando no campo placeholder o padrão exigido, ao começar a digitar o usuário não verá mais a mennsagem
então iremos adicionar um title com a seguinte mensagem `title="Digite um CPF no formato: 000.000.000-00`
````
<input type="text" id="cpf"  class="modal-field" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" \ placeholder="CPF 123.456.789-01" title="Digite um CPF no formato: 000.000.000-00" required>
````
note que o campo peso e altura já estão preenchidos seguindo o pdrão acimda, e sucessivamente, sendo necessário adicionaremos mais inputs de forma semelhante.



## Criando o html da pagina home
Normalmente damos index.html como nome de arquivo padrão, porém neste caso demos o nome de home para facilitar a inserção da pagina de teste da aplicação aqui no github.
No mesmo diretório do arquivo criado anteriormente, adicione este segundo arquivo, dê a ele o nome de `home.html`, este será o nosso arquivo padrão.
````
touch home.html
````
crie um doctype html e adicione as seguintes rotas que usaremos em nossa aplicação:
````
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
````    
Sdicione o seguinte código:

````
<style>
html,body,h1,h2,h3,h4,h5 {font-family: "Raleway", sans-serif}
</style>
</head>
<body class="w3-light-grey">

<!-- container do topo-->
<div class="w3-bar w3-top w3-black w3-large" style="z-index:4">
  <button class="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" onclick="openMenu();"><i class="fa fa-bars"></i>  Menu</button>
  <span class="w3-bar-item w3-right">PIPO SAÚDE</span>
</div>

<!-- menu lateral esquerdo -->
<nav class="w3-sidebar w3-collapse w3-white w3-animate-left" style="z-index:3;width:300px;" id="mySidebar"><br>
  <div class="w3-container w3-row">
    <div class="w3-col s8 w3-bar">
      <span>Empresas e, <strong>Planos</strong></span><br>
    </div>
  </div>
  <hr>

  <div class="w3-bar-block">
    <a href="#" class="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-hover-black" onclick="closeMenu()" title="close menu"><i class="fa fa-remove fa-fw"></i>Fechar</a>
    <div class="w3-container w3-blue">
      <h5>Inicio</h5>
    </div>
    <div class="w3-container">
      <h5>Acme co</h5>
    </div>
    <a href="http://127.0.0.1:5501/dentalacme.html" class="w3-bar-item w3-button w3-padding"><i class="fa fa-users fa-fw"></i> Dental Sorriso</a>
    <a href="http://127.0.0.1:5501/norteeuropa.html" class="w3-bar-item w3-button w3-padding "><i class="fa fa-users fa-fw"></i> Norte Europa</a>

    <hr>
    <div class="w3-container">
      <h5>Tio Patinhas</h5>
    </div>
    <a href="http://127.0.0.1:5501/dentaltio.html" class="w3-bar-item w3-button w3-padding"><i class="fa fa-users fa-fw"></i> Dental Sorriso</a>
    <a href="http://127.0.0.1:5501/mentesa.html" class="w3-bar-item w3-button w3-padding"><i class="fa fa-users fa-fw"></i> Mente Sã, Corpo São</a>
    <a href="http://127.0.0.1:5501/pampulha.html" class="w3-bar-item w3-button w3-padding"><i class="fa fa-users fa-fw"></i> Pampulha intermedica</a>

  </div>
</nav>


<!-- Efeito de sobreposição ao abrir a barra lateral em telas pequenas -->
<div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>

<!-- !CONTENT! -->
<div class="w3-main" style="margin-left:300px;margin-top:43px;">

  <!-- Header, blocos redicionadores de pagina com icones -->
  <header class="w3-container" style="padding-top:22px">
    <h5><b><i class="fa fa-home"></i> Todos os Planos</b></h5>
  </header>
  <div class="w3-row-padding w3-margin-bottom">
    <div id="dentalt" class="w3-quarter" onclick="window.location='http://127.0.0.1:5501/dentaltio.html';">
      <div class="w3-container w3-teal w3-padding-16">
        <div class="w3-left"><i class="fa fa-users w3-xxxlarge"></i></div>
        <div class="w3-right">
          <h6>Tio Patinhas</h6>
        </div>
        <div class="w3-clear"></div>
        <h4>Dental Sorriso</h4>
      </div>
    </div>    
    <div id="dentalac" class="w3-quarter" onclick="window.location='http://127.0.0.1:5501/dentalacme.html';">
      <div class="w3-container w3-blue w3-padding-16">
        <div class="w3-left"><i class="fa fa-heart w3-xxxlarge"></i></div>
        <div class="w3-right">
          <h6>Acme co</h6>
        </div>
        <div class="w3-clear"></div>
        <h4>Dental Sorriso</h4>
      </div>
    </div>
    <div id="norteur" class="w3-quarter" onclick="window.location='http://127.0.0.1:5501/norteeuropa.html';">
      <div class="w3-container w3-teal w3-padding-16">
        <div class="w3-left"><i class="fa fa-users w3-xxxlarge"></i></div>
        <div class="w3-right">
          <h6>Acme co</h6>
        </div>
        <div class="w3-clear"></div>
        <h4>Norte Europa</h4>
      </div>
    </div>
    <div id="mentes" class="w3-quarter" onclick="window.location='http://127.0.0.1:5501/mentesa.html';">
      <div class="w3-container w3-blue w3-padding-16">
        <div class="w3-left"><i class="fa fa-heart w3-xxxlarge"></i></div>
        <div class="w3-right">
          <h6>Tio Patinhas</h6>
        </div>
        <div class="w3-clear"></div>
        <h4>Mente Sã, Corpo São</h4>
      </div>
    </div>
    <div id="pa,pulh" class="w3-quarter" style="padding-top: 0.5cm ;" onclick="window.location='http://127.0.0.1:5501/pampulha.html';" >
      <div class="w3-container w3-teal w3-text-white w3-padding-16">
        <div class="w3-left"><i class="fa fa-users w3-xxxlarge"></i></div>
        <div class="w3-right">
          <h6>Tio Patinhas</h6>
        </div>
        <div class="w3-clear"></div>
        <h4>Pampulha intermedica</h4>
      </div>
    </div>
    
  </div>
</body>
````

No campo comentado como `<!-- menu lateral esquerdo -->` temos as div's de rotas para as páginas subsequentes da aplicação, nos campos referênciados como: 
````
a href="http://127.0.0.1:5501/dentalacme.html"
````
Lembre-se de adicionar a página para direcionar para as paginas que desejar adicionar.
Note que há muitas referências, e `id` que usarems para herdas as funções javascript futuramente.

# criando o CSS
 crie uma pasta dentro do repositorio inicial e a nomeie como css, dentro da pasta css crie um arquivo chamado `main.css` e adicione o seguinte código:
````
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

:root{
    --primary-color: #d7f2f8;
    --secundary-color: rgba(250, 250, 250, 0.945);
    --shadow-color: rgb(209, 222, 248);
    --text-color: rgb(183, 220, 255);
}

html,body,h1,h2,h3,h4,h5 {font-family: "Raleway", sans-serif}


body{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: 'karla', sans-serif;
    position:relative;
}

header{
    background-color: var(--primary-color);
    height: 70px;
    text-align: center;
    line-height: 70px;
    box-shadow: 0 1px 2px var(--shadow-color);
}

.header-title{
    color: black;
    font-size: 2rem;
}

main{
    flex-grow: 1;
    display: grid;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin: 5vh auto;
    padding: 40px;
    box-shadow: 2px 2px 10px var(--shadow-color);
    gap: 20px;
}

    
footer{
    width:100;
    text-align: center;
    font-weight: 200;
    font-style: italic;
    padding: 20px;
}


````
Como podemos observar já referenciamos toda a tag main, dando as devidas dimensões para tal.

Agora iremos adicionar as configurações para telas pequenas; Abaixo do código acima insira:
````
/*configuração para telas pequenas*/
@media (max-width:480px){
    header{
        display:block;
        position:absolute;
        width:100%;
    }
    .header-title{
        font-size: 1.5rem;
    }


    
}
````
como o trecho comentado já diz, essas são as configurações mobile

### criando botões css
ma pasta css cria um arquivo chamado `button.css` e adicione o seguinte código:
````
.button{
    border-style:none;
    height: 40px;
    padding: 6px 12px;
    background-color: black;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: box-shadow .6s ease;
}

.button.blue{
    background-color: #1FB6FF;
    border-radius: 16px;

}

button.green{
    background-color: #2fadcc;
    border-radius: 14px;
}

button.red{
    background-color: #60aaf0;
    border-radius: 14px;
}

.button:hover{
    box-shadow: inset 1500px 5px 5px #00000055;
    
}
````

Note as classes dos botões que chamamos no html que acabamos de criar para que os mesmos possam herdar as dimensões.
agora iremos adicionar as configurações mobile:
````
/*comportamento dos botões em telas pequenas*/
@media(max-width:480px){
    .button.mobile{
        color:transparent;
        font-size:0;
        width:90%;
        height:40px;
        border-radius: 16px;
        position:relative;
        top: 15vh;
        left: 5vw;
    }
    .button.mobile::before{
        content: "cadastrar";
        color:white;
        font-size:1rem;
        width:100%;
        height:100%;
    }
}
````

### criando modal.css 
dentro da pasta css crie um arquivo chamado de `modal.css` e adicione o seguinte código:
````
.modal{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background: #00000090;
    opacity: 0;
    z-index: -1;
}

.modal.active{
    opacity: 1;
    z-index: 1;
}

.modal-content{
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap:80px;
    width: 90vw;
    margin: 15vh auto;
    padding-bottom: 20px;
    background-color: white;
    box-shadow: 1px 1px 10px rgb(77, 109, 158);
}

.modal-header{
    border-radius: 20px;
    display: flex;
    position: relative;
    justify-content: center;
    height: 60px;
    line-height: 40px;
    font-size: 1rem;
}



.modal-close{
    position: absolute;
    padding: 10px;
    right: 0;
    display: block;
    width: 60px;
    height: 0px;
    text-align: center;
    user-select: none;
    cursor: pointer;
}



.modal-form{
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    padding: 0 20px;
}
/*Altere o tamnho dos campos input, formato entre outros atraves do modal-field*/
.modal-field{
    width: calc(100% - 10px);
    height: 40px;
    outline-style: none;
    border-style: none;
    border-radius: 10px;
    box-shadow: 0 0 2px black;
    padding: 0 10px;
    font-size:1rem;
}

.modal-field:focus{
    border: 2px solid var(--primary-color);
    box-shadow: 0 0 3px var(--primary-color);
}


.modal-footer{
    background-color: inherit;
    text-align: right;
    padding: 0 20px;
}

/*configuração para telas pequenas*/
@media (max-width:480px){
    .modal{
        top:100%;
        transition: all 0.3s ease;
    }
    .modal.active{
        top:0;
    }
    .modal-content{
        margin:0;
        width:100%;
        position:fixed;
    }
    .modal-field{
        width:100%;
    }
}

````
Note que criamos todas as configurações para o modal referênciadas antes no `dentaltio.html`, adicionei alguns comentários para facilitar a compreenção e alterações futuras. 

### records.css
Na pasta css crie um arquivo chamado `records.css`. Este arquivo será responsável por dimensionar as tabelas a serem inseridas de forma dinamica com o javascript.
adicione o seguinte código:
````
.records{
    border-collapse: collapse;
    flex-direction: column;
    width: 100%;
    user-select: none;
    text-align: left;
}

.records th{
    /*text-align: auto;*/
    height: 45px;
    background-color: var(--primary-color);
    padding-left: 100px;
    font-size: 1.2rem;    
}
.records td{
    /*text-align: auto;*/
    height: 50px;
    padding-left: 100px;
    position: relative;
}

.records th:last-child,
.records td:last-child{
    
    padding: 0;
    min-width: 140px;
    /*text-align: center;*/
}

.records tr:hover{
    background-color: var(--secundary-color);
}

/*configuração para telas pequenas*/
@media(max-width:800px){
    
    .records thead{
        display:flex;
        clip:rect(0 0 0 0);
        height: 85px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: relative;
        width: 1px;
    }

    .records tr {      
        border-bottom: 3px solid rgb(221, 221, 221);
        display:block;
        margin-bottom: 0.625rem;
        padding: 0;
    }

    .records td{
        border-bottom: 1px solid #ddd;
        display: block;
        font-size: 1rem;
        text-align: right;
        padding-left: 10px;
        padding-top: 5%;

    }

    .records td::before{
        content: attr(data-label);
        float: left;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 0.9rem;
        height: 10px;
        text-align: left;
            
    }

    .records th{
        text-align: left;
    }

    
}
````
Note que as configurações mobile ficaram dimensionadas diferentemente dos padrões anteriores, isto porque neste ocasião, temos uma tabela que deve ser totalmente redimensionada, poderiamos fazer uso somente do `overflow-x` que é um recurso para permitir a visualização da tabela podendo desliza-la para o lado, como os recursos acima utilizados para visualizar os códigos. Porém isso dificultaria a visualização da tabela inteira, por isso utilizaremos uma forma diferente para exibir no mobile:
Ao adicionarmos em telas pequenas iremos ocultar a tabela de dados exibida na tela desktop, e exibiremos os dados como lista, e adicionaremos indicadores dos campos como nome, cpf etc.. como uma lista ao lado da nova tabela exibindo as informações da nova tabela.
Para realizar tal tarefa utilizaremos parametros nas novas tabelas para exibir tal funcionalidade, adicionaremos um `data-label` quando estivermos criando o nosso javascript e assim referenciaremos a exibição da tabela. 
Exemplo de tabela listada lateralmente:  
nome      | fulano
--------- | ------
cpf       | 123.456.789-58
peso      | 71.5
altura    | 1,73

### rotas css
 agroa na tag `<head>` adicione as seguintes rotas:
 ````
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/button.css">
    <link rel="stylesheet" href="css/records.css">
    <link rel="stylesheet" href="css/modal.css">
````    
essas rotas possibilitarão os arquivos css serem herdados pelo html, ao recarregar a pagina `dentaltio.html` você verá algo parecido com isso:
![image](https://user-images.githubusercontent.com/57453192/162456929-b2193b39-a2a6-4fab-89f0-920cc79b8b8b.png)


# Iniciando Javascript
Iremos iniciar o javascript com as funcções de abrir as janelas de menu das páginas `dentaltio.html` e `home.html`.
crie um arquivo no diretório com o nome de `scripts.js` e adicione as seguintes funções:
````
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
````
A função Myfunction é responsavel por exibir o menu lateral da página `dentaltio`, a função `w3_open()` repassará o css o tornando visivel e a função `w3_close()` fechará a barra lateral.

Agora iremos adicionar a função para acionar a menu da página home
adicione o seguinte código:
````
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
````
Semelhante a função anterior, as funçoes `openMenu` e `closeMenu` são responsáveis por abrir e fechar o menu lateral da página home.

## Criando js do painel de usuários
crie uma pasta dentro do diretório raiz chamada `tiopatinhas`, e dentro dela crie um arquivo chamado `dentaltio.js`.
Após criar o arquivo, adicione o seguinte código:
````
//const para ativar modal
const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    clearFields()
    document.getElementById('modal').classList.remove('active')
}
````
este código é responsável por ativar a exibição da janela modal.

Agora iremos repassar os dados do JSON para o localstorage, vamos utilizar a segunte linha lógica, os dados informados no form do campo modal, serão passado para um JSON e enviados para o localstorage.
adicione o codigo a seguir logo abaixo do código anterior:
````
'use strict'
//const para ativar modal
const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    clearFields()
    document.getElementById('modal').classList.remove('active')
}

// repassa dados JSON para localstorage 
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_clientdentaltio')) ?? []
const setLocalStorage = (dbClientdentaltio) => localStorage.setItem("db_clientdentaltio", JSON.stringify(dbClientdentaltio))



//inserindo editando e apagando clientes do localstorage
const deleteClient = (index) => {
    const dbClientdentaltio = readClient()
    dbClientdentaltio.splice(index, 1)
    setLocalStorage(dbClientdentaltio)
}

const updateClient = (index, client) => {
    const dbClientdentaltio = readClient()
    dbClientdentaltio[index] = client
    setLocalStorage(dbClientdentaltio)
}

const readClient = () => getLocalStorage()

const createClient = (client) => {
    const dbClientdentaltio = getLocalStorage()
    dbClientdentaltio.push (client)
    setLocalStorage(dbClientdentaltio)
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
    document.getElementById('nome').dataset.index = 'new'
}

const saveClient = () => {
    debugger
    if (isValidFields()) {
        const client = {
            nome: document.getElementById('nome').value,
            cpf: document.getElementById('cpf').value,
            peso: document.getElementById('peso').value,
            altura: document.getElementById('altura').value,

        }
        const index = document.getElementById('nome').dataset.index
        if (index == 'new') {
            createClient(client)
            updateTable()
            closeModal()
        } else {
            updateClient(index, client)
            updateTable()
            closeModal()
            
        }
    }
}



// Tabela a ser inserida no html ao prencher os dados da modal
const createRow = (client, index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td data-label="nome">${client.nome}</td>
        <td data-label="cpf">${client.cpf}</td>
        <td data-label="peso">${client.peso}</td>
        <td data-label="altura">${client.altura}</td>
        <td>
            <button type="button" class="button green" id="edit-${index}">Editar</button>
            <button type="button" class="button red" id="delete-${index}" >Excluir</button>
        </td>
    `
    document.querySelector('#tableClient>tbody').appendChild(newRow)
}

//Limpar tabela inserida
const clearTable = () => {
    const rows = document.querySelectorAll('#tableClient>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
    const dbClientdentaltio = readClient()
    clearTable()
    dbClientdentaltio.forEach(createRow)
}

const fillFields = (client) => {
    document.getElementById('nome').value = client.nome
    document.getElementById('cpf').value = client.cpf
    document.getElementById('peso').value = client.peso
    document.getElementById('altura').value = client.altura
    document.getElementById('nome').dataset.index = client.index
}

const editClient = (index) => {
    const client = readClient()[index]
    client.index = index
    fillFields(client)
    openModal()
}


//ação de deletar e alerta condicional de exclusão de novo funcionário
const editDelete = (event) => {
    if (event.target.type == 'button') {

        const [action, index] = event.target.id.split('-')

        if (action == 'edit') {
            editClient(index)
        } else {
            const client = readClient()[index]
            const response = confirm(`Deseja realmente excluir o funcionário ${client.nome} do plano ?`)
            if (response) {
                deleteClient(index)
                updateTable()
            }
        }
    }
}

// ações de click para abrir, fechar, salvar e deletar 
updateTable()

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', saveClient)

document.querySelector('#tableClient>tbody')
    .addEventListener('click', editDelete)

document.getElementById('cancelar')
    .addEventListener('click', closeModal)


````


