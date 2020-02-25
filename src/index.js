import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';

//On va générer le contenu de l'appli React dans l'élément html ayant l'id root
ReactDom.render(<App/>, document.getElementById('root'));