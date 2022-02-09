import express from 'express';
import usersRoutes from './routes/users.js';


const port = 5000;
const app = express();
app.use(express.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => { res.send("CRUD WITH NODE-JS"); });

app.listen(port, () => console.log("Server Running on : http://localhost:" +port));
;
