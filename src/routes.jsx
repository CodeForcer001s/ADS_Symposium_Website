import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Events from './pages/Events';
import DataFlix from './pages/DataFlix';
import HackOrHaunt from './pages/HackOrHaunt';
import Codesync from './pages/Codesync';
import PromptEFlux from './pages/PromptEFlux';
import Techverse from './pages/Techverse';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,  // Add this line to create a default route
        element: <Events />,  // Use Events component as the default page
      },
      {
        path: 'events',
        element: <Events />,
      },
      {
        path: 'events/dataflix',
        element: <DataFlix />,
      },
      {
        path: 'events/hack-or-haunt',
        element: <HackOrHaunt />,
      },
      {
        path: 'events/codesync',
        element: <Codesync />,
      },
      {
        path: 'events/prompt-e-flux',
        element: <PromptEFlux />,
      },
      {
        path: 'events/techverse',
        element: <Techverse />,
      },
    ],
  },
]);

export default router;