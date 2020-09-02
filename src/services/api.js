import axios from 'axios';

const api = axios.create({ baseURL: 'https://rocketseat-node.herokuapp.com/api'});  //IMPORTANDO A API DO BANCO DE DADOS

export default api;