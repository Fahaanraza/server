const express = require('express');
const router = express.Router();

const {getInvoices, addInvoice, updateAmount} =require('../controller/invoice')

router.get('/getInvoices',getInvoices)

router.post('/addInvoice',addInvoice)

router.post('/updateAmount',updateAmount)

module.exports = router;