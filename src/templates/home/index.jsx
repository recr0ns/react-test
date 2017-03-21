import React from 'react';
import FetchButton from '../../containers/fetch_button';
import List from '../../components/list';

const items = [
  { primaryText: 'text #1' },
  { primaryText: 'text #2' },
];

const Home = () => {
  return (
    <div>
      <h1>Hello react!</h1>
      <FetchButton />
      <List items={items} />
    </div>
  );
};

export default Home;
