/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Router from './Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Provider } from 'react-redux';
import Store from './redux/Store';



const queryClient = new QueryClient() // react query' s client

function App(): JSX.Element {
  return (
    <>
      {/* //! wrapped with redux's provider to handling state management */}
      <Provider store={Store}>
        <QueryClientProvider client={queryClient} >
          <Router />
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
