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
Utilizando node.js, Express para ciração do servidor local, mongodb como banco de dados e solicitando a biblioteca mongoose, e utilizando react com adminBro.
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

Agora iremos criar a tag `<main>` com a tabela padrão a ser exibida quandoa página é carregada

