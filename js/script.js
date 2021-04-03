function Jogador(nome,vitorias, empates, derrotas, pontos) {
  this.nome = nome;
  this.vitorias = vitorias;
  this.empates = empates;
  this.derrotas = derrotas;
  this.pontos = pontos;
  
};



jogador1 = new Jogador(prompt("Entre com Jogador 1"),0,0,0,0);

jogador2 = new Jogador(prompt("Entre com Jogador 2"),0,0,0,0);

var jogadores = [jogador1, jogador2];

exibirJogadores();

function calcularPontuacao(jogador){
  return (jogador.vitorias * 3) + jogador.empates;

};

function acumularPontuacao(idxJogador){
  jogadores[idxJogador].pontos = calcularPontuacao(jogadores[idxJogador]);
}

function adicionarVitoria(idxJogador){
  jogadores[idxJogador].vitorias +=1; 
  acumularPontuacao(idxJogador);
  
};

function adicionarEmpate(idxJogador){
  jogadores[idxJogador].empates +=1;
  acumularPontuacao(idxJogador);
  exibirJogadores();
  
};

function adicionarDerrota(idxJogador){
  jogadores[idxJogador].derrotas +=1;
  exibirJogadores();
};


function exibirJogadores(){
  var html="";
  var btnAcao = "";
  for(var i = 0; i < jogadores.length; i++){
    html +="<tr>";
    html +="<td>" + jogadores[i].nome + "</td>";
    html +="<td>"+jogadores[i].vitorias+"</td>";
    html += "<td>"+jogadores[i].empates+"</td>";
    html += "<td>"+jogadores[i].derrotas+"</td>";
    html +="<td>"+jogadores[i].pontos+"</td>";
    if(btnAcao==""){
      btnAcao = "<td rowspan='2'><input type='button' id='btnVitoriaJ1' value='Vitória P1' onClick='vitoriaJ1()'/> </td>";
      btnAcao += "<td rowspan='2'><input type='button' id='btnEmpate' value='Empate' onClick='empate()'/> </td>";
      btnAcao += "<td rowspan='2'><input type='button' id='btnVitoriaJ2' value='Vitória P2' onClick='vitoriaJ2()'/> </td>";
      html += btnAcao;
    };
    
    html +="</tr>"
    
  };
  
  var elementoTabela =  document.getElementById("tabelaJogadores");
  elementoTabela.innerHTML = html;

};

function vitoriaJ1(){
  adicionarVitoria(0);
  adicionarDerrota(1);
  exibirJogadores();
};

function vitoriaJ2(){
  adicionarVitoria(1);
  adicionarDerrota(0);
  exibirJogadores;
};

function empate(){
  adicionarEmpate(0);
  adicionarEmpate(1);
  exibirJogadores;
};