import React from 'react';
import { List, ListItem } from 'material-ui/List';

const ItemsList = (props) => {
  return (
    <List>
      {props.items.map((item) => <ListItem key={item.id} primaryText={item.title} />)}
    </List>
  );
};

export default ItemsList;
