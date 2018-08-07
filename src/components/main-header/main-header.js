import React from 'react';
import {Link} from 'react-router-dom';

export const MainHeader = () =>
  <header className="container-fluid">
    <section>
      <div id="section-hello" className="container-flex">
        <div className="logo">
          <a href="https://linterhub.com" title="linterhub" >
            <div className="container-flex">
              <h1>linterhub</h1>
            </div>
          </a>
        </div>
        <div className="tabs container-flex flex-start">
          <Link to="/catalog"><div className="button active"><span>catalog</span></div></Link>
          <Link to="/about"><div className="button"><span>about</span></div></Link>
          <a href="https://github.com/linterhub/catalog/issues/new?template=engine.md"
            target="_blank"
            className="hidden-xs"
            rel="noopener noreferrer">
            <div className="button"><span>add new linter</span></div>
          </a>
        </div>
      </div>
    </section>
  </header>;
