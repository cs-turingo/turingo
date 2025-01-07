// importação do createBrowserRouter
import { createBrowserRouter } from 'react-router-dom';

// importação das páginas
import App from '../App.jsx';
import Home from '../routes/Home/Page.jsx';
import Provincie from '../routes/Provincie/Page.jsx';
import Test from '../routes/Teste/Page.jsx';
import ErrorPage from '../routes/ErrorPage/Page.jsx';

// configuração do router da aplicação
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {path: '/', element: <Home />},
      {path: '/provincie/:id', element: <Provincie />},
      {path: '/teste', element: <Test />},
    ]
  }
]);

// listando rotas para possíveis renderizações
const routes = [
  {path: '/', name: "Página Inicial"},
  {path: '/provincie/:id', name: "Província - Visite agora a sua..."},
  {path: '/teste', name: "Teste"}
];

// exportação do router da aplicação
export { router, routes };
