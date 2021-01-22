var dados = new FormData();

dados.append('name','Vitoria');
dados.append('idade', 19);
dados.append('endereco','Rua Lobato');

dados.append('nome','')

/* $.ajax({
    url:'http://localhost/sojavascript/meu.php',
    method: 'post',
    data:dados,
    processData: false,
    contentType: false,
    success: function(resposta){
        console.log(resposta);
    }
    
  /*   {
     nome:'Daniel',
     idade: 19,
     endereco: 'Rua Lobato'
        
    } */
//}) */

/* $.ajax({
    url:'http://localhost/sojavascript/meu.php',
    method: 'post',
    data:dados,
    processData: false,
    contentType: false  
}).done(function(resposta){
    alert(resposta);
}) */

$.ajax({
    url:'http://localhost/sojavascript/meu.php',
    method: 'post',
    data:dados,
    processData: false,
    contentType: false  
}).done(function(resposta){
   $('#main').text(resposta);
})