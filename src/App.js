import React from 'react';

import Routes from './routes';

import RefreshProvider from "./providers/RefreshProvider.js";

function App() {
  return (
    <RefreshProvider>
      <Routes />
    </RefreshProvider>
  );
}

export default App;