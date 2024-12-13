# App React Native: Conversor de Moedas com Axios

Este projeto é um aplicativo simples de **conversão de moedas** desenvolvido com **React Native** e utilizando a biblioteca **Axios** para consumir uma API de taxas de câmbio em tempo real.

---

## 📋 **Funcionalidades**

1. **Conversão de Moedas**:
   - O usuário pode selecionar uma moeda de origem e uma moeda de destino.
   - O aplicativo calcula e exibe o valor convertido com base na taxa de câmbio atual.

2. **Busca de Taxas de Câmbio em Tempo Real**:
   - As taxas de câmbio são obtidas de uma API externa usando Axios.

3. **Interface Intuitiva**:
   - Design responsivo e amigável.
   - Utilização de componentes do React Native para melhorar a experiência do usuário.

---

## 🛠️ **Tecnologias Utilizadas**

- **React Native**: Framework para desenvolvimento do aplicativo.
- **Axios**: Biblioteca para realizar requisições HTTP.
- **API de Taxas de Câmbio**: Um serviço externo, como [ExchangeRate-API](https://www.exchangerate-api.com/) ou [Exchangeratesapi.io](https://economia.awesomeapi.com.br).

---

## 🚀 **Como Funciona**

1. O aplicativo carrega as taxas de câmbio disponíveis ao iniciar.
2. O usuário seleciona:
   - A moeda de origem (ex.: USD - Dólar Americano).
   - A moeda de destino (ex.: EUR - Euro).
3. Após inserir o valor na moeda de origem, o aplicativo faz o cálculo baseado na taxa de câmbio atual.
4. O valor convertido é exibido em tempo real
