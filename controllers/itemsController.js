const Item = require('../models/item.model'); // Đang dùng Mongoose

// 1️⃣ GET /api/items
exports.apiList = async (req, res) => {
  try {
    const items = await Item.find();
    res.json({ success: true, data: items });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// 2️⃣ POST /api/items
exports.apiAdd = async (req, res) => {
  try {
    const { name, price } = req.body;
    const newItem = new Item({ name, price });
    await newItem.save();
    res.json({ success: true, data: newItem });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// 3️⃣ PUT /api/items/:id
exports.apiUpdate = async (req, res) => {
  try {
    const { name, price } = req.body;
    const updated = await Item.findByIdAndUpdate(
      req.params.id,
      { name, price },
      { new: true }
    );
    if (!updated) return res.status(404).json({ success: false, message: 'Item not found' });
    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// 4️⃣ DELETE /api/items/:id
exports.apiDelete = async (req, res) => {
  try {
    const deleted = await Item.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: 'Item not found' });
    res.json({ success: true, data: deleted });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
