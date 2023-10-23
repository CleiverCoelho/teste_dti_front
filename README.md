# Desafio Tecnico Mr Eduardo - DTI Digital

Voce pode testar o deploy da aplicação no seguinte link: https://teste-dti-front.vercel.app/ <br/> <br/>

ps: demorou para carregar as informações e os petshops na página? o site de deploy do render para o back-end nos informa que "Free instance types will spin down with inactivity". Ou seja, a latencia de requisição está "dormente", então é só esperar um pouquinho e atualizar a pagina que as informações vão aparecer na tela em instantes. Dessa forma, feito uma requisição, basta esperar um pouco que ela volta ao normal. A partir disso, as requisicoes seguintes devem ser retornadas em tempo hábil.

O link para o repositório do back-end segue: https://github.com/CleiverCoelho/teste_dti_back



https://github.com/CleiverCoelho/teste_dti_front/assets/102709370/f00b6ac0-b1a5-4815-a78d-84d11af9c191




## Premissas
- Para rodar essa aplicação é preciso ter o gerenciador de pacotes para aplicações Nodejs chamado "NPM". 
- É preciso ter o sistema de controle de versões distribuído "Git" para seguir os comandos de instalação local (voce também pode baixar o zip do arquivo). 
- Para evitar problemas com versões também aconselho rodar esta aplicação no Sistema Operacional do Linux Ubuntu 20.04

## Decisões de Projeto
- Nesta aplicação decidi utilizar a ferramenta do react + vite, para construir uma aplicação organizada. Nesse sentido, pude manter o controle tanto de requisições com axios, utilizando Hooks de chamadas assincronas, assim como do ciclo de vida dos meus componentes para renderização das informações no momento certo.
- Ainda, para evitar o chamado "Prop Drilling", utilizei um context que armazena e destaca a melhor opção de petshop - esta encontrada na última pesquisa feita pelo usuário - na renderização dos petshops cadastrados no sistema para a pagina Main. Assim, tive acesso a essas informações diretamente a partir dos proprios componentes.
- Por fim, utilizei a lib "react-router-dom", para separar as paginas de acordo com suas funcionalidades, assim como a lib "react-datepicker" para facilitar a experiência de input de datas por parte do usuário e evitar bad requests por bodys invalidos nas requisicoes para a api.


## Instalação

```bash
$ git clone https://github.com/CleiverCoelho/teste_dti_front.git
$ cd teste_dti_front
$ npm install
```

## Rodando o app

Crie um arquivo .env na raiz do diretório. Voce pode seguir o arquivo .env.example
```bash
VITE_API_KEY=http://localhost:5000
```
# preview
`$ npm run preview`

# development
`$ npm run dev`

# prod
`$ npm run build`
