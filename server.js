import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import {StaticRouter} from 'react-router-dom/server'
import App from './src/App.js';
import serialize from 'serialize-javascript';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, "..", 'build'),{index:false}));
// console.log(path.resolve(__dirname,"..","build"))

app.get('*', (req, res) => {
  try {
    console.log('inside req', req.url)
    const appHtml = renderToString(
      <StaticRouter location={req.url}>
        <Provider store={store}>
          <App/>
        </Provider>
      </StaticRouter>
      )
  
    console.log("App html",appHtml);
    const indexHtml = fs.readFileSync(path.resolve(__dirname,"..", 'build', 'index.html'), 'utf-8');
    const storeState = serialize(store.getState());
    const updatedHtml = indexHtml
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
      .replace('__REDUX_STATE__', storeState);  
      console.log(updatedHtml);
    res.send(updatedHtml);
  } catch (error) {
    console.error('Error rendering app:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on porttttt ${PORT}`);
});
