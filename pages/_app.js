import React from 'react';
import Head from 'next/head';
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';

import '../src/styles/custom.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>PKeep - Unleash Decentalized Safety</title>
      </Head>
      <Card>
        <main style={{ minHeight: 'calc(100vh - 65px)' }}>
          <header class='main-header'>
            <img
              src={'/icons/logo.jpeg'}
              alt='logo'
              loading='lazy'
              height='100px'
            />
            <Typography variant='h4' component='h1'>
            PKeep - Unleash Decentalized Safety
            </Typography>
            <div style={{ width: '70px' }} />
          </header>
          <div style={{ margin: '20px' }}>
            <Component {...pageProps} />
          </div>
        </main>
        <footer class='main-footer'>
          <p>&copy; 2023 PKeep All rights reserved.</p>
        </footer>
      </Card>
    </>
  );
}
export default MyApp;
