import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../components/App';
import './styles/index.scss';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

import { Provider } from 'mobx-react';
import { store } from '../stores/store';

<Provider store={store}>
    <App />
</Provider>

import { RootStoreContext } from '../stores/RootStoreContext';
import rootStore from '../stores/RootStore';

<RootStoreContext.Provider value={rootStore}>
    <App />
</RootStoreContext.Provider>