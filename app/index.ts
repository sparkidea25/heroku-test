import express from "express";

let app = express();

app.use(express.json());

app.get('/', (req, res) => {
    console.log('welcome to my world');
} );

let port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`{Server is listening on http://localhost:${port}`);
});