# React + Vite

## Installation

```bash
$ git clone https://github.com/CleiverCoelho/teste_dti_front
$ cd desafio_tecnico
$ npm install
```

## Running the app

First you have to acces the weather api to generate your own free key api to acces weather and forecast data

Create a .env file on the root of the project with your api ky
```bash
VITE_API_KEY=my_back_end_test
```
#preview
`$ npm run preview`

# development
`$ npm run dev`

# prod
`$ npm run build`

## Running the app with docker image

```bash
$ docker build -t desafio_vite .
$ docker run --name desafioVite -p 8080:80 desafio_vite
```

#open your favorite browser and access the `localhost:8080` url to preview the project

