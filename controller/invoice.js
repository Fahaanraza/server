const mongoose = require('mongoose');
const Invoice = mongoose.model("Invoice");
const { ObjectId } = require('mongodb');


module.exports.getInvoices = async (req, res) => {
    console.log('Getting Invoices');
    try {
      const Invoices = await Invoice.find();
      res.send(Invoices);
    } catch (err) {
        console.log(err)
      res.status(500)
    }
  };

module.exports.addInvoice = async (req, res) => {
    console.log('Adding Invoice');
    const {brand,
    salesRepId,
    salesmanName,
    invoiceAmount,
    retailerId,
    retailerName,
    retailerPhoneNo,
    invoiceDate,
    billNo,
    pendingAmount,
    collectionDate} = req.body;
    try {
        const invoice = new Invoice({
            brand,
            salesRepId,
            salesmanName,
            invoiceAmount,
            retailerId,
            retailerName,
            retailerPhoneNo,
            invoiceDate,
            billNo,
            pendingAmount,
            collectionDate
        })
        await invoice.save();
      res.send(invoice);
    } catch (err) {
        console.log(err)
      res.status(500)
    }
  };

module.exports.updateAmount = async (req, res) => {
console.log('Updating Invoices');
const { amount, id} = req.body
try {
    const Invoices = await Invoice.updateOne({_id: ObjectId(id)},{$set:{pendingAmount:amount}});
    res.send(Invoices);
} catch (err) {
    console.log(err)
    res.status(500)
}
};
