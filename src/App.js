import React from 'react';

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>Notícias</h1>
        <select name="source" value="google-news-br">
          <option value="blasting-news">Blasting News</option>
          <option value="globo">Globo</option>
          <option value="google-news-br">Google News Brasil</option>
          <option value="info-money">Info Money</option>
        </select>
      </div>
      <div className="news-list">
        <div className="news">
          <div className="news-headline">
            <a href="http://google.com" target="blank">Link</a>
          </div>
          <div className="news-info">
            <div className="news-date">
              <span>16/10/2018</span>
            </div>
            <div className="news-source">
              <span>Fonte A</span>
            </div>
          </div>
          <hr/>
        </div>
        <div className="news">
          <div className="news-headline">
            <a href="http://google.com" target="blank">Link</a>
          </div>
          <div className="news-info">
            <div className="news-date">
              <span>16/10/2018</span>
            </div>
            <div className="news-source">
              <span>Fonte A</span>
            </div>
          </div>
          <hr/>
        </div>
        <div className="news">
          <div className="news-headline">
            <a href="http://google.com" target="blank">Link</a>
          </div>
          <div className="news-info">
            <div className="news-date">
              <span>16/10/2018</span>
            </div>
            <div className="news-source">
              <span>Fonte A</span>
            </div>
          </div>
          <hr/>
        </div>
        <div className="news-control">
          <button>Mostrar mais</button>
        </div>
      </div>
    </div>
  );
}

export default App;
