import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import './styles/index.css';
import App from './App';
import { LanguageProvider } from './languages/LanguageProvider';
import { fetchTranslations } from './languages/fetchTranslations';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <LanguageProvider fetchTranslations={fetchTranslations}>
      <App />
    </LanguageProvider>,
  </Provider>,
);
