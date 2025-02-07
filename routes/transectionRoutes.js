const express = require("express");
const { addTransection, getAllTransection, editTransection, deleteTransection } = require("../controllers/transectionCtrl");


//router object
const router = express.Router();

// routes
//add trans
router.post('/add-transection', addTransection)

//get trans
router.post('/get-transection', getAllTransection)

//edit trans
router.post('/edit-transection', editTransection)

//delete trans
router.post('/delete-transection', deleteTransection)

module.exports = router;



