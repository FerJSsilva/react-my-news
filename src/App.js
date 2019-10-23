import React from 'react';
import './assets/style.css'

function App() {
  return (
    <div className="container">
      <div className="header">     
        <h1 className="title">Notícias</h1>
        <select className="filter" name="source">
          <option hidden disabled selected>Filtrar por fonte</option>
          <option value="none">Nenhum</option>
          <option value="blasting-news">Blasting News</option>
          <option value="globo">Globo</option>
          <option value="google-news-br">Google News Brasil</option>
          <option value="info-money">Info Money</option>
        </select>
      </div>
      <div className="news-list">
        <div className="news">
          <a className="news-headline" href="http://google.com" target="blank">Manchete 1</a>
          <div className="news-info">
            <div className="news-date">
              <span>16/10/2018</span>
            </div>
            <div className="news-source">
              <span>Fonte A</span>
            </div>
          </div>
        </div>
        <div className="news">
          <a className="news-headline" href="http://google.com" target="blank">Manchete 2</a>
          <div className="news-info">
            <div className="news-date">
              <span>16/10/2018</span>
            </div>
            <div className="news-source">
              <span>Fonte A</span>
            </div>
          </div>
        </div>
        <div className="news">
          <a className="news-headline" href="http://google.com" target="blank">Manchete 3</a>
          <div className="news-info">
            <div className="news-date">
              <span>16/10/2018</span>
            </div>
            <div className="news-source">
              <span>Fonte A</span>
            </div>
          </div>
        </div>
        <div className="news-control">
          <button className="show-more">Mostrar mais</button>
        </div>
      </div>
    </div>
  );
}

export default App;
