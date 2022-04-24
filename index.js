import express from 'express';
import connectDB from './config/db.js'
import {errorHandler, notFound} from './middleware/errorMiddleware.js';
import stateRoutes from './routes/stateRoutes.js';
import cityRoutes from './routes/cityRoutes.js';

const app = express();
app.use(express.json());
connectDB();

//routes
app.use('/api/states', stateRoutes);
app.use('/api/cities', cityRoutes);

app.use("/", (req, res) => {
    res.send("Hello from the server");
});

// Handlers
app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`The Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`));