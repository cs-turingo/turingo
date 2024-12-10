import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// importação de recursos para estilo
import './index.css';

// importando recursos para o router
import { RouterProvider } from 'react-router-dom';
import { router } from './settings/BrowserRouter.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
