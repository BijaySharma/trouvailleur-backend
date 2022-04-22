import express from 'express';

const app = express();
app.use(express.json());

app.use("/", (req, res) => {
    res.send("Hello from the server");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`The Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`));