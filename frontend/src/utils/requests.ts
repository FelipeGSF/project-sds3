export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'https://sds3-felipegsf.herokuapp.com'; // Definindo que a BASE_URL da aplicação vai ser para pegar a var de ambiente do netlify

//se a variável de ambiente nao estiver definida "REACT_APP_BACKEND_URL" que é o caso quando rodamos no computador local o BASE_URL vai pegar por padrão o "htpp://localhost:8080"