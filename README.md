# Instalação

Antes de instalar o projeto, verifique se todas as dependências para rodar o React Native estão instaladas:

Link da documentação oficial: https://reactnative.dev/docs/set-up-your-environment?os=macos


### Instalação dos pacotes

basta rodar o comando `yarn` ou `npm i` no console dentro da pasta principal do projeto


### Iniciar o projeto

Android:

- Yarn: `yarn android`

- Npm: `npm run dev`

IOs:

- Yarn: `yarn ios`

- Npm: `npm run ios`

### Principais bibliotecas utilizadas:

| [@react-navigation](https://reactnavigation.org/)                                                                                           | Biblioteca robusta e amplamente utilizada para navegação no React Native. Foi utilizada a variante “bottom-tabs” para um design mais limpo.                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [react-hook-form](https://www.react-hook-form.com/)                                                                                         | Biblioteca para formulários Web / Mobile altamente performática e simples de implementar, escolhida principalmente para evitar renderizações desnecessárias e validar se os dados foram preenchidos corretamente. |
| [yup](https://github.com/jquense/yup)                                                                                                       | Ferramenta utilizada para validação de formularios.                                                                                                                                                               |
| [styled-components](https://styled-components.com/)                                                                                         | Utilizado para criar o tema do app escolhido pela facilidade de utilização e leitura do código.                                                                                                                   |
| [@react-native-async-storage/async-storage](https://github.com/react-native-async-storage/async-storage/tree/main/packages/default-storage) | ferramenta utilizada para salvar localmente as tarefas adicionadas.                                                                                                                                               |
