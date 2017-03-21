export default function (state, item) {
  return state.update('items', items =>
    items.map(i => (i.get('id') === item.id ? i.set('completed', !i.get('completed')) : i)),
  );
}
