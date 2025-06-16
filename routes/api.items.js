const express = require('express');
const router = express.Router();
const controller = require('../controllers/itemsController');
const verifyToken = require('../middleware/verifyToken');

// ✅ PUBLIC API: Lấy danh sách Items (JSON)
/**
 * @swagger
 * /api/items:
 *   get:
 *     summary: Lấy danh sách Items (PUBLIC)
 *     tags: [Items]
 *     responses:
 *       200:
 *         description: Danh sách Items
 */
router.get('/', controller.apiList);

// ✅ PROTECTED API: Thêm mới Item (phải có JWT)
/**
 * @swagger
 * /api/items:
 *   post:
 *     summary: Thêm Item (Cần JWT)
 *     tags: [Items]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Áo khoác
 *               price:
 *                 type: number
 *                 example: 200
 *     responses:
 *       200:
 *         description: Item đã được thêm
 */
router.post('/', verifyToken, controller.apiAdd);

// ✅ PROTECTED API: Cập nhật Item theo ID
/**
 * @swagger
 * /api/items/{id}:
 *   put:
 *     summary: Cập nhật Item theo ID (Cần JWT)
 *     tags: [Items]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Áo khoác cập nhật
 *               price:
 *                 type: number
 *                 example: 300
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 */
router.put('/:id', verifyToken, controller.apiUpdate);

// ✅ PROTECTED API: Xóa Item theo ID
/**
 * @swagger
 * /api/items/{id}:
 *   delete:
 *     summary: Xoá Item theo ID (Cần JWT)
 *     tags: [Items]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Xoá thành công
 */
router.delete('/:id', verifyToken, controller.apiDelete);

module.exports = router;
