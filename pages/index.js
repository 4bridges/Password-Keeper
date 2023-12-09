import React from 'react';


function Landing() {
  return (

      <><head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <title>Your Website</title>
          <link rel="stylesheet" href="styles/styles.css">
            </link>
          </head>
          <body>
              <header class="main-header">
                  <div class="logo">Your Logo</div>
                  <div class="title">Title</div>
              </header>

              <main>
                  <div class="slider">
                  </div>

                  <section class="two-parts">
                      <div class="part-one">
                          <button>Button for Part One</button>
                      </div>
                      <div class="part-two">
                          <button>Button for Part Two</button>
                      </div>
                  </section>
              </main>

              <footer class="main-footer">
                  <p>&copy; 2023 Your Website. All rights reserved.</p>
                  <nav class="footer-menu">
                      <ul>
                          <li><a href="#">Link 1</a></li>
                          <li><a href="#">Link 2</a></li>
                          <li><a href="#">Link 3</a></li>
                          <li><a href="#">Link 4</a></li>
                      </ul>
                  </nav>
              </footer>
          </body></>

  );
}
export default Landing;