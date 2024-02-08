import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <>
    <div className='container'>
      <div className='About-us'>
        <div>
            <a href="">
            <h1>Open source <span>Code</span></h1>
            </a>
            <pre>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Quae, magnam odit dignissimos necessitatibus
                  saepe harum quod tempore minus.</pre>
                 <a href="">Explore more </a>
        </div>

      </div>
      <div className="new">
        <div>
            <ul>
                <li><a href="">Code of Conduct</a></li>
                <li><a href="">Contact us</a></li>
            </ul>
        </div>
      </div>
      <div className="Legal">
        <div>
            <ul>
                <li><a href="">ASOC</a></li>
                <li><a href="">Uplift project</a></li>
            </ul>
        </div>
      </div>
      <div className="social">
        <div>
            <h4>Follow us on </h4>
            <ul>
                <li><a href="">Github</a></li>
                <li><a href="">Linkedin</a></li>
                <li><a href="">Discord</a></li>
                <li><a href="">Twitter</a></li>
                <li><a href="">Instagram</a></li>
                <li><a href="">facebook</a></li>

            </ul>
        </div>
      </div>
    </div>
        <h4>© 2024 open source . Made with 🖤️ by Harshit. All rights reserved.</h4>
    </>
  )
}
