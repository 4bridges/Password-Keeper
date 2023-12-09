import React from 'react';
import App from 'next/app';

import '../src/styles/custom.css';
import Head from 'next/head';
import { Card } from '@mui/material';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Your Website</title>
      </Head>
      <Card>
        <main>
          <header class="main-header">
            <div class="logo">Your Logo</div>
            <div class="title">Title</div>
          </header>
          <Component {...pageProps} />;
        </main>
        <footer class="main-footer">
          <p>&copy; 2023 Your Website. All rights reserved.</p>
          <nav class="footer-menu">
            <ul>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 3</a>
              </li>
              <li>
                <a href="#">Link 4</a>
              </li>
            </ul>
          </nav>
        </footer>
      </Card>
    </>
  );
}
export default MyApp;
