import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './store/appStore';

import App from './components/App/App';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
