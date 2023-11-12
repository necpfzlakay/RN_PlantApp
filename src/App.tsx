/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Router from './Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';



const queryClient = new QueryClient()

function App(): JSX.Element {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>

    </>
  );
}

export default App;
