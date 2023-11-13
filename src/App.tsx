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
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(true) // ignoring all logs on the phone

const queryClient = new QueryClient() // react query' s client

function App(): JSX.Element {
  return (
    <>
      {/* //! wrapped with redux's provider to handling state management */}
      <Provider store={Store}>
        {/* 
        //!! I used react query for caching and refetching data
        //!! but redux thunk is also good with redux toolkit
        */}
        <QueryClientProvider client={queryClient} >
          <Router />
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
