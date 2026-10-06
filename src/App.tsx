import { useEffect } from 'react';

import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { findRoute } from './routes';

type Props = {
  // Set by scripts/prerender.js; in the browser the current URL decides.
  path?: string;
};

// Every page is a full page load, so routing is just a lookup on the pathname.
function App({ path }: Props) {
  const { title, Page } = findRoute(path ?? window.location.pathname);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Page />
      </main>
      <SiteFooter />
    </>
  );
}

export default App;
