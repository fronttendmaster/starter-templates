import { useState } from 'react';
import 'primereact/resources/themes/lara-light-cyan/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import './App.css';

import { Rating } from '../common/index';

function App() {
  return (
    <>
      <header>
        <nav>
          <ul className='m-0 p-0 flex gap-4 align-items-center justify-content-center pt-4 '>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <article>
            <div className='hero-content text-center'>
              <h1>Javascript + React</h1>
              <p className='read-the-docs'>
                Click on the Vite and React logos to learn more
              </p>
            </div>
          </article>
          <article>
            <div className='card flex justify-content-center'>
              <Rating value={5} readOnly cancel={false} />
            </div>
          </article>
        </section>
      </main>
      <footer>
        <p className='text-center'>&copy; 2024 My React App</p>
      </footer>
    </>
  );
}

export default App;
