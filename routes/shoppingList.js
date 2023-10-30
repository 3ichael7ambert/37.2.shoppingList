const express = require('express');
const router = express.Router();
const Item = require('../routes/Item'); // Use the appropriate relative path


// GET /items - List all shopping items
router.get('/', (req, res) => {
  const items = Item.findAll(); // Use the Item class to get all items
  res.json(items);
});

// POST /items - Add an item to the shopping list
router.post('/', (req, res) => {
  const { name, price } = req.body;
  const newItem = new Item(name, price); // Create a new item using the Item class
  res.status(201).json({ added: newItem });
});

// GET /items/:name - Get details of a single item
router.get('/:name', (req, res) => {
  const { name } = req.params;
  try {
    const item = Item.find(name); // Use the Item class to find an item by name
    res.json(item);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
});

// PATCH /items/:name - Update details of a single item
router.patch('/:name', (req, res) => {
  const { name } = req.params;
  const { newName, newPrice } = req.body;
  try {
    const updatedItem = Item.update(name, { name: newName, price: newPrice }); // Use the Item class to update an item
    res.json({ updated: updatedItem });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
});

// DELETE /items/:name - Delete a specific item
router.delete('/:name', (req, res) => {
  const { name } = req.params;
  try {
    Item.remove(name); // Use the Item class to remove an item by name
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
});

module.exports = router;
