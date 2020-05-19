## Online [DEMO](https://musing-nightingale-e94fe0.netlify.app/):


## Passos para a instalação

Clone o projeto:
### `git clone https://github.com/wemboava/eduzzitcoin.git`

Acesse a pasta do projeto e instale as dependencias
### `yarn`

Inicie o projeto no modo desenvolvimento
### `yarn start`

## Especificação do Sistema

#### 1) Contas

O sistema deve permitir cadastro (nome, email e senha) e login com token JWT

#### 2) Dashboard

- Deve exibir o saldo disponível em reais na conta do cliente
- Cotação atual do bitcoin, compra e venda
- Volume: total de bitcoins comprados e vendidos no dia corrente.
- Histórico: Deve exibir um gráfico o histórico de valor de compra/venda do bitcoin que retorne o valor com frequência de 10 minutos (8:00, 8:10, 8:20, ...) das últimas 24 horas.

#### 3) Depósitos

O cliente deve poder fazer depósitos de valores em reais na plataforma.

#### 4) Compra

O Cliente deve poder fazer compras de bitcoins usando seu saldo disponível na conta. Deve ser exibido um preview com a estimativa antes da confirmação da compra.

#### 5) Venda

O Cliente poderá vender seus bitcoins com o valor em reais.

#### 6) Extrato

Deverá ser possível listar os depósitos, compras e resgates, com suas respectivas datas e cotações para o cliente ter transparência do que foi feito nos últimos 90 dias ou por intervalo customizado.

## Tecnologias utilizadas
- ReactJs
- Typescript
- styled-components
- Redux
- Redux-saga
- React-router
- Amcharts
- React-spring
