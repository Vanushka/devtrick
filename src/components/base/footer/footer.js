import React from 'react';

import './footer.css';

class Footer extends React.Component {
  render () {
    return (
      <footer className={location.pathname === "/contacts" ? 'black' : ''}>
        <div className="copyright">© 2019. All Rights Reserved.</div>
      </footer>
    )
  }
}

export default Footer;
