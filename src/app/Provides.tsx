'use client'
import React from 'react'
import { store } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

const Provides = ({
    children,
  }: {
    children: React.ReactNode;
  })=>{
let persistor:any = persistStore(store)
      return (
        <div>
          <Provider store={store}><PersistGate persistor={persistor}>
            {children}
            </PersistGate>
            </Provider>
            
        </div>
      )
  }

export default Provides
