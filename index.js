import express from 'express';
import connectDB from './config/db.js'
import {errorHandler, notFound} from './middleware/errorMiddleware.js';
import stateRoutes from './routes/stateRoutes.js';

const app = express();
app.use(express.json());
connectDB();

app.use("/", (req, res) => {
    res.send("Hello from the server");
});


//routes
app.use('/api/states', stateRoutes);

// Handlers
app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`The Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`));