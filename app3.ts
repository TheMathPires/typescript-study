import Carro from './Carro'
import Moto from './Moto'
import Concessionaria from './Concessionaria'

let carro = new Carro('Velost', 3);
carro.acelerar()
carro.acelerar()

let moto = new Moto('Ninja');
moto.acelerar()
moto.acelerar()

let concessionaria = new Concessionaria('', [])

console.log(concessionaria.fornecerHorariosDeFuncionamento())