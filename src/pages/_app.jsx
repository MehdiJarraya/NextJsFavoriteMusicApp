import '../common/css/global.css';

import { useEffect, useState } from 'react';

import Navbar from '../components/Navbar';
import { genres } from '../data/genres';

const App = ({ Component, pageProps }) => {
  const [genresData, setGenresData] = useState(
    genres.map((item) => ({ ...item, isFavorite: false }))
  );

  const toggleFavorite = (id) => {
    setGenresData(
      genresData.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : { ...item }
      )
    );
  };

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      import('agnostic-axe').then(({ AxeObserver, logViolations }) => {
        const MyAxeObserver = new AxeObserver(logViolations);
        MyAxeObserver.observe(document);
      });
    }
  }, []);

  return (
    <Navbar>
      <Component
        {...pageProps}
        genresData={genresData}
        toggleFavorite={toggleFavorite}
      />
    </Navbar>
  );
};

export default App;
