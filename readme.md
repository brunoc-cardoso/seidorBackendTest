# Seidor Backend Test

## Instalação

```sh
npm install
```

## Execução

```sh
npm run dev
```

## Observação

Para o teste, a API já conta com dados de mock. Foi utilizado um banco de dados em memória.

## Tecnologias utilizadas

-NodeJS - 18+
-Express

A aplicação será executada na seguinte url: `http://localhost:3333`

A API tem os seguintes recursos:

Veículos
GET - vehicles/ - lista todos os veículos cadastrados

```sh
[
  {
    "id": "2c90c009-6b27-4461-8de0-845493a2549a",
    "plate": "ABC-1232",
    "color": "pink",
    "brand": "VW"
  }
]
```

GET - vehicles/:id - lista o veículo com base no id

```sh
{
  "id": "2c90c009-6b27-4461-1234-845493a25123",
  "plate": "CBA-4321",
  "color": "green",
  "brand": "CHEVROLET"
}
```

POST vehicles/ - cadastra um veículo

```sh
{
  "message": "vehicle stored successfully",
  "vehicle": {
    "id": "73417807-e98d-4e4a-8dd2-e99a99d69afd",
    "plate": "ABC-12322",
    "color": "pink",
    "brand": "VW"
  }
}
```

PUT - vehicles/:id - atualiza dados de um veículo

```sh
{
  "message": "vehicle updated successfully",
  "updatedVehicle": {
    "id": "2c90c009-6b27-4461-8de0-845493a2549a",
    "plate": "ABC-1232",
    "color": "black",
    "brand": "GM"
  }
}
```

DELETE - vehicles/:id - deleta um veículo (Não possui retorno)

Motoristas
GET - drivers/ - lista todos os motoristas cadastrados (aceita query params)
Parametro: name - filtra motorista que contenham o parametro

```sh
[
  {
    "id": "2c90c009-6b27-4461-8de0-098493a21234",
    "name": "John Doe"
  },
  {
    "id": "2c90c009-6b27-4461-1234-843453a28765",
    "name": "Fulano de tal"
  }
]
```

GET - drivers/:id - lista o motorista com base no id

```sh
{
  "id": "2c90c009-6b27-4461-8de0-098493a21234",
  "name": "John Doe"
}
```

POST drivers/ - cadastra um motorista

```sh
{
  "message": "Driver stored successfully",
  "driver": {
    "id": "b2c65bac-d655-418a-b4a8-87c0ecc061d2",
    "name": "algum novo nome"
  }
}
```

PUT - drivers/:id - atualiza dados de um motorista

```sh
{
  "message": "Driver updated successfully",
  "updatedDriver": {
    "id": "2c90c009-6b27-4461-8de0-098493a21234",
    "name": "Algum outro nome"
  }
}
```

DELETE - drivers/:id - deleta um motorista (Não possui retorno)

Uso dos veículos
GET - vehicles-use/ - lista todos os usos do veículos com motoristas

```sh
[
  {
    "id": "2c90c009-6b27-4461-8de0-098493a26666",
    "startUseDate": "1710633172639",
    "endUseDate": "",
    "driverId": "2c90c009-6b27-4461-8de0-098493a21234",
    "vehicleId": "2c90c009-6b27-4461-8de0-845493a2549a",
    "reason": "daily use for deliveries",
    "vehicle": {
      "id": "2c90c009-6b27-4461-8de0-845493a2549a",
      "plate": "ABC-1232",
      "color": "black",
      "brand": "GM"
    },
    "driver": {
      "id": "2c90c009-6b27-4461-8de0-098493a21234",
      "name": "Algum outro nome"
    }
  },
 ]
```

POST - vehicles-use/ - cadastra o uso de um veiculo pelo motorista

```sh
{
  "message": "VehicleUse stored successfully",
  "newVehicleUse": {
    "id": "f99ba975-6e81-4b12-9713-f99fa40ce2db",
    "startUseDate": 1710637596290,
    "driverId": "2c90c009-6b27-4461-1234-843453a28765",
    "vehicleId": "2c90c009-6b27-4461-1234-845493a25123",
    "reason": "apenas um teste"
  }
}
```

PUT - vehicles-use/:id - atualiza a data de fim de uso do veículo

```sh
{
  "message": "VehicleUse updated successfully",
  "updatedVehicleUse": {
    "id": "2c90c009-6b27-4461-8de0-098493a26666",
    "startUseDate": "1710633172639",
    "endUseDate": "1710633187010",
    "driverId": "2c90c009-6b27-4461-8de0-098493a21234",
    "vehicleId": "2c90c009-6b27-4461-8de0-845493a2549a",
    "reason": "daily use for deliveries"
  }
}
```
