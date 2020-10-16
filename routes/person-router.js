
const { 
    createData, 
    readData, 
    updateData, 
    deleteData,
    readDataByID

} = require('../controllers/person-controller');
const express = require('express');
const router = express.Router();

router.route('/')
    .post(createData)
    .get(readData);

router.route('/:id')
    .put(updateData)
    .delete(deleteData)
    .get(readDataByID);

module.exports = router;