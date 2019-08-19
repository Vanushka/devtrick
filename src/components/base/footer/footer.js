import React from 'react';

import './footer.css';
import './media.css';

class Footer extends React.Component {
  render () {
    return (
      <footer className={location.pathname === "/contacts" && window.innerWidth > 768 ? 'black' : ''}>
        <div className="copyright">© 2019. All Rights Reserved.</div>
      </footer>
    )
  }
}

export default Footer;
