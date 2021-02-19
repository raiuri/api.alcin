import app from './index';

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`App is running at port ${PORT}`);
});
