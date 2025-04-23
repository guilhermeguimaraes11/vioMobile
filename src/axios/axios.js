import axios from "axios";

const api = axios.create({
  baseURL: "http://10.89.240.80:5000/api/v1/",
  headers: {
    accept: "application/json",
  },
});

const sheets = {
  postLogin: (user) => api.post("login/", user),
  postCadastro: (user) => api.post("user/", user),
  postHome: (user) => api.post("login/", user),
  postCadastroOrganizador: (org) => api.post("org/", org),
  postCadastroEvento: (evento) => api.post("evento/", evento),
  postCadastroIngresso: (ingresso) => api.post("ingresso/", ingresso),
  getEventos: () => api.get("evento"),
  getIngressosPorEvento: (id_evento) => api.get(`ingresso/evento/${id_evento}`),
};

export default sheets;
