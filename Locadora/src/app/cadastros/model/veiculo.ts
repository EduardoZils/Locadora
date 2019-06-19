import { Modelo } from './modelo';

export class Veiculo {
    idVeiculo: number;
    dsVeiculo: string;
    corVeiculo: string;
    placaVeiculo: string;
    anoVeiculo: number;
    precoVeiculo: number; //no banco é double
    alugado: boolean;
    idModelo: Modelo;
}
