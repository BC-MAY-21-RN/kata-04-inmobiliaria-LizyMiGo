import React from 'react';
import List from './src/components/List';
import Inmuebles from './db/data';

const App = () => {
  return <List data={Inmuebles} />;
};

export default App;
