let items = [
  { id: 1, name: 'Item A', price: 100 },
  { id: 2, name: 'Item B', price: 200 }
];

module.exports = {
  findAll: () => items,
  findById: (id) => items.find(i => i.id == id),
  add: (item) => items.push(item),
  update: (id, newItem) => { 
    const index = items.findIndex(i => i.id == id);
    if (index !== -1) {
      items[index] = newItem;
    }
  },
  delete: (id) => {
    items = items.filter(i => i.id != id);
  }
};
