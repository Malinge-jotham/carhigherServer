// routes/customers.js
const express = require('express');
const router = express.Router();
const { Customers } = require('../models'); // Assuming you have defined the Customers model

// Create a new Customer
router.post('/', async (req, res) => {
  try {
    const customer = await Customers.create(req.body);
    res.status(201).json(customer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get all Customers
router.get('/', async (req, res) => {
  try {
    const customers = await Customers.findAll();
    res.status(200).json(customers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get a single Customer by ID
router.get('/:id', async (req, res) => {
  try {
    const customer = await Customers.findByPk(req.params.id);
    if (customer) {
      res.status(200).json(customer);
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update a Customer by ID
router.put('/:id', async (req, res) => {
  try {
    const customer = await Customers.findByPk(req.params.id);
    if (customer) {
      await customer.update(req.body);
      res.status(200).json({ message: 'Customer updated successfully' });
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete a Customer by ID
router.delete('/:id', async (req, res) => {
  try {
    const customer = await Customers.findByPk(req.params.id);
    if (customer) {
      await customer.destroy();
      res.status(200).json({ message: 'Customer deleted successfully' });
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
