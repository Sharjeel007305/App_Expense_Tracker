const express = require('express');
const router = express.Router();
const transactionController = require('../controller/transaction_controller');
const controller = require('../controller/categoies_controller');


// Create & Get CATEGORIES
router.post("/api/categories",controller.create_categoies);
router.get("/api/categories",controller.get_Categories);

// Create & Get TRANSACTION
router.post("/api/transaction",transactionController.create_Transaction);
router.get("/api/transaction",transactionController.get_Transaction);
router.delete("/api/transaction",transactionController.delete_Transaction);

// GET LABELS
router.get("/api/labels",transactionController.get_Labels);






module.exports = router;