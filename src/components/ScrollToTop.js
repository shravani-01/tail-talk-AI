// import { useEffect } from 'react';
// import { withRouter } from 'react-router-dom';

// function ScrollToTop({ history }) {
//   useEffect(() => {
//     const unlisten = history.listen(() => {
//       window.scrollTo(0, 0);
//     });
//     return () => {
//       unlisten();
//     }
//   }, []);

//   return (null);
// }

// export default withRouter(ScrollToTop);

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

export default ScrollToTop;
