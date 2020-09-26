import React from 'react';
import { wrapper } from '../src/redux/store';
import { NextPage } from 'next';

const WrappedApp: NextPage = ({ Component, pageProps }: any) => (
  <Component {...pageProps} />
);

export default wrapper.withRedux(WrappedApp);
