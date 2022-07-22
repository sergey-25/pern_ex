require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pool = require("./db");

const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());

// Get all Restaurants
app.get("/orders", async (req, res) => {
    try {
        //const results = await db.query("select * from restaurants");
        const allOrders = await pool.query(
            "select * from orders"
        );
        res.status(200).json({
            status: "success",
            results: allOrders.rows.length,
            data: {
                orders: allOrders.rows,
            },
        });
        // res.json(allOrders.rows);
    } catch (err) {
        console.log(err);
    }
});


app.get("/orders/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const order = await pool.query("SELECT * FROM orders WHERE order_id = $1", [
            id
        ]);
        // const reviews = await pool.query(
        //     "select * from reviews where order_id = $1",
        //     [req.params.id]
        // );
        res.status(200).json({
            status: "success",
            data: {
                orders: order.rows[0],
                // reviews: reviews.rows,
            },
        });
        // res.json(order.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});


app.post("/orders", async (req, res) => {
    try {
        const { name, address, recipient, comment } = req.body;
        const newOrder = await pool.query(
            "INSERT INTO orders ( name, address, recipient, comment) VALUES($1, $2, $3, $4) RETURNING *",
            [name, address, recipient, comment]
        );
        res.status(201).json({
            status: "success",
            data: {
                orders: newOrder.rows[0],
            },
        });
        // res.json(newOrder.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.put("/orders/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, address, recipient, comment,} = req.body;
        const updateOrder = await pool.query(
            "UPDATE orders SET name = $1, address = $2, recipient = $3, comment = $4 WHERE order_id = $5 RETURNING *",
            [name, address, recipient, comment, id]
        );
        res.status(200).json({
            status: "success",
            data: {
                orders: updateOrder.rows[0],
            },
        });
        // res.json(updateOrder.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.delete("/orders/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteOrder= await pool.query("DELETE FROM orders WHERE order_id = $1", [
            id
        ]);
        // res.status(204).json({
        //     status: "success",
        //     data: {
        //         orders: deleteOrder.rows[0],
        //     },
        // });
        res.json('Deleted');
    } catch (err) {
        console.log(err.message);
    }
});



const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});