import '../common/css/global.css';

import { useEffect } from 'react';

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      import('agnostic-axe').then(({ AxeObserver, logViolations }) => {
        const MyAxeObserver = new AxeObserver(logViolations);
        MyAxeObserver.observe(document);
      });
    }
  }, []);

  return <Component {...pageProps} />;
};

export default App;
