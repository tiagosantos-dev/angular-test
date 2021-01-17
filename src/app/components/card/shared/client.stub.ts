import { Observable } from "rxjs";
import { of } from 'rxjs';
let listClient = [{
    "id": 1,
    "nome": "Daniel Tomás Almeida",
    "idade": 63,
    "cpf": "766.211.857-66",
    "rg": "23.774.287-1",
    "data_nasc": "18\/06\/1958",
    "sexo": "Masculino",
    "signo": "Gêmeos",
    "mae": "Jéssica Flávia Lara",
    "pai": "Theo Marcos Vinicius Francisco Almeida",
    "email": "danieltomasalmeida..danieltomasalmeida@suzano.com.br",
    "senha": "LO7ydJ6Upo",
    "cep": "79082-076",
    "endereco": "Travessa Ipeúna",
    "numero": 544,
    "bairro": "Guanandi II",
    "cidade": "Campo Grande",
    "estado": "MS",
    "telefone_fixo": "(67) 3827-3988",
    "celular": "(67) 98933-6753",
    "altura": "1,88",
    "peso": 59,
    "tipo_sanguineo": "B+",
    "cor": "vermelho"
  }, {
    "id": 2,
    "nome": "Gabriela Elaine Nicole Galvão",
    "idade": 37,
    "cpf": "494.808.190-66",
    "rg": "13.614.477-9",
    "data_nasc": "26\/04\/1984",
    "sexo": "Feminino",
    "signo": "Touro",
    "mae": "Raimunda Rafaela",
    "pai": "Calebe Mário Samuel Galvão",
    "email": "ggabrielaelainenicolegalvao@hersa.com.br",
    "senha": "E3nitqb1pc",
    "cep": "76875-760",
    "endereco": "Rua São Felipe",
    "numero": 905,
    "bairro": "Coqueiral",
    "cidade": "Ariquemes",
    "estado": "RO",
    "telefone_fixo": "(69) 3603-0532",
    "celular": "(69) 99334-5236",
    "altura": "1,53",
    "peso": 88,
    "tipo_sanguineo": "AB-",
    "cor": "vermelho"
  },];
export class ClientStub{
    public getAll() :Observable<any>{
        return of(listClient);
    }

}