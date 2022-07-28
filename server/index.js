require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pool = require("./db");
const bodyParser = require('body-parser')

const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(express.json());

// Get all Orders
app.get("/orders", async (req, res) => {
    try {
        //const results = await db.query("select * from restaurants");
        const allOrders = await pool.query(
            "SELECT * FROM orders"
        );
        const allDetails = await pool.query(
            "SELECT * FROM details"
        );
        // res.status(200).send(JSON.stringify(allOrders.row));
        res.status(200).send(JSON.stringify({
            status: "success",
            results: allOrders.rows.length,
            data: {
                orders: allOrders.rows,
                details: allDetails.rows,
            },
        }));
       //  res.send(JSON.stringify(allOrders.row));
       // console.log(JSON.stringify(allDetails));
    } catch (err) {
        console.log(err);
    }
});

app.get("/orders/:id/details", async (req, res) => {
    // try {
    //     const {id} = req.params;
    //     const details = await pool.query(
    //         "SELECT * FROM orders LEFT JOIN details ON orders.order_id = details.order_id WHERE orders.id = $1",
    //         [id]
    //     );
    //     res.status(200).json({
    //         status: "success",
    //         data: {
    //             details: details.rows,
    //         },
    //     });
    // } catch (error) {
    //     console.log(error.message)
    // }
})


app.get("/orders/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const order = await pool.query("SELECT * FROM orders WHERE id = $1", [
            id
        ]);
        const details = await pool.query(
            "SELECT * FROM details WHERE order_id = $1",
            [id]
        );
        res.status(200).json({
            status: "success",
            data: {
                orders: order.rows[0],
                details: details.rows
            },
        });
        // res.json(order.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});


app.post("/orders", async (req, res) => {
    try {
        const {
            address,
            recipient,
            comment,
        } = req.body;
        const newOrder = await pool.query(
            "INSERT INTO orders (  address, recipient, comment) VALUES($1, $2, $3) RETURNING *",
            [ address, recipient, comment]
        );
        res.status(201).json({
            status: "success",
            data: {
                orders: newOrder.rows[0],
            }
        });
    } catch (err) {
        console.error(err.message);
    }
});

app.put("/orders/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const { address, recipient, comment} = req.body;
        const updateOrder = await pool.query(
            "UPDATE orders SET address = $1, recipient = $2, comment = $2 WHERE id = $4 RETURNING *",
            [ address, recipient, comment, id]
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
        const {id} = req.params;
        const deleteOrder = await pool.query("DELETE FROM orders WHERE id = $1", [
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
app.post("/orders/:id/addDetail", async (req, res) => {
    try {
        const {id} = req.params;
        const {
            full_name,
            color,
            characteristics,
            term,
            size,
            amount,
            link,
            order_comment,
            order_recipient

        } = req.body;
        const newDetail = await pool.query(
            "INSERT INTO details ( order_id, full_name, color, characteristics, term, size, amount, link, order_comment, order_recipient) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *;",
            [id, full_name, color, characteristics, term, size, amount, link, order_comment, order_recipient]
        );
        console.log(newDetail);
        res.status(201).json({
            status: "success",
            data: {
                details: newDetail.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }
});


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});
