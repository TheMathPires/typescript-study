import Concessionaria from "./Concessionaria";
import { DaoInterface } from "./DaoInterface";

export class ConcessionariaDao implements DaoInterface {
    nomeTabela: string = 'tb-concessionaria'

    inserir(object: Concessionaria): boolean {
        console.log('lógica de insert')
        return true
    }

    atualizar(object: Concessionaria): boolean {
        console.log('lógica update')
        return true
    }

    remover(id: number): Concessionaria {
        console.log('lógica delete')
        return new Concessionaria('', [])
    }

    selecionar(id: number): Concessionaria {
        console.log('lógica select')
        return new Concessionaria('', [])
    }

    selecionarTodos(): [any] {
        console.log('lógica select all')
        return [new Concessionaria('', [])]
    }
}