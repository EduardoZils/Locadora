import { Veiculo } from "./veiculo";
import { Cliente } from "./cliente";

export class Locacao {
    idLocacao: number;
    idVeiculo: number;
    idCliente: number;
    dtLocacao: Date;
    dtDevolucao: Date;
    pagamento: boolean;
    cliente: Cliente;
    veiculo: Veiculo;
    
}
