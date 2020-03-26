const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Rota / Recurso
 * 
 */

 /**
  * Métodos HTTP:
  * 
  * GET: buscar uma informação no back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação do back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?"  (Filtos, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */


app.listen(3333);