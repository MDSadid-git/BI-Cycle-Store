# BI-Cycle-Store

## Overview Project

This project will include build a robust and scalable RESTful API for a Bicycle Store using Express, TypeScript, MongoDB, and Mongoose. This project will include CRUD operations for managing bicycles, creating and retrieving orders, and calculating total revenue from sales. I will also implement global error handling and a unified API response structure

### Install dependencies:

    npm install

### Start the application:

    npm run start:dev

# Api model

## Create Bicycle

# POST /api/products

    {

"name": "Roadster 5000",
"brand": "SpeedX",
"price": 300,
"type": "Road",
"description": "A premium road bike designed for speed and performance.",
"quantity": 20,
"inStock": true
}

## Get All Bi Cycles

## GET /api/products

## GET /api/products/:productId

## Update Bicycle

# PUT /api/products/:productId

{
"price": 3117,
"quantity": 31
}

# Delete Bi Cycle

## DELETE /api/products/:productId

# Create Order

## POST /api/orders

{
"email": "customer@example.com",
"product": "\_productId_here",
"quantity": 2,
}

## Calculate Revenue

/api/orders/revenue
