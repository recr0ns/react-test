import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import { List, ListItem } from 'material-ui/List';

class ItemsList extends React.Component {
  componentWillReceiveProps(newProps) {
    console.log('new props', newProps);
  }

  render() {
    return (
      <Paper>
        <Toolbar style={{ backgroundColor: '#fff' }}>
          <ToolbarGroup firstChild={true} style={{ marginLeft: 0 }}>
            <ToolbarTitle text="Items" />
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarSeparator />
            <RaisedButton label="Create item" primary={true} onClick={this.props.createItem} />
          </ToolbarGroup>
        </Toolbar>
        <Divider />
        <List>
          {
            this.props.items.map((item) =>
              <ListItem
                key={item.id}
                primaryText={item.title}
                onClick={() => this.props.toggleItem(item.id, item.completed) }
              />
            )
          }
        </List>
      </Paper>
    );
  }
}

ItemsList.defaultProps = {
  items: [{id: 'text', title: 'default'}],
  createItem: () => {},
};

export default ItemsList;
