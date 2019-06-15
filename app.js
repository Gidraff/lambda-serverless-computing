'use strict';

const express = require('express');
const sls = require('serverless-http')

// app instance
const app = express()

app.get('/', async (req, res, next) => {
  res.status(200).send('Hello World!')
})

module.exports.server = sls(app) // export function