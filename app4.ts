import Concessionaria from "./Concessionaria";
import Pessoa from './Pessoa';
import Carro from './Carro';
import { Dao } from "./Dao";

let concessionaria: Concessionaria = new Concessionaria('', [])
let pessoa: Pessoa = new Pessoa ('', '')
let carro: Carro = new Carro('', 0)

let dao3: Dao<Concessionaria> = new Dao<Concessionaria>()
let dao4: Dao<Pessoa> = new Dao<Pessoa>()

dao3.inserir(concessionaria)
dao4.remover(5)
