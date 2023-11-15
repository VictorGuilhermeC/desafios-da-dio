class heroi {
  constructor(nome, idade, tipo){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  };
  atacar() {
    let ataque = "";
    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
      };
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  };
};
    
const jericho = new heroi("Jericho", 75, "mago");
const danhausen = new heroi("Danhausen", 100, "mago");
const daisuke = new heroi("Daisuke Ikeda", 53, "guerreiro");
const jinsei = new heroi("Jinsei Shinzaki", 60, "monge");
const hayabusa = new heroi("Hayabusa", 45, "ninja");

jericho.atacar();
danhausen.atacar();
daisuke.atacar();
jinsei.atacar();
hayabusa.atacar();

/* Solução alternativa:

class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    const ataques = {
      "mago": "magia",
      "guerreiro": "espada",
      "monge": "artes marciais",
      "ninja": "shuriken"
    }
    console.log(`O ${this.tipo} atacou usando ${ataques[this.tipo]}`);
  }
}
*/ 