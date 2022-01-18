import React, { useState } from 'react';

import { ClientContext } from './provider/ClientContext';
import { AppRouter } from './routes/AppRouter';

function App() {

  const [client, setClient] = useState({});

  return (
    <ClientContext.Provider value={{ client, setClient }}>
      <AppRouter />
    </ClientContext.Provider>
  );
}

export default App;