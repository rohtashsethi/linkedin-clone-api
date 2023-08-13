const express = require("express");
const { port } = require('./config');
const authRouter = require('./routes/auth');
const app = express();

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true
    })
);

app.get('/', (req, res) => {
    res.json({ message: 'ok' });
});

// Auth router middleware
app.use('/auth', authRouter);

// Error handler middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.err(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});

app.listen(port, () => {
    console.log(`LinkedIn Clone app listening on port ${port}`);
});
