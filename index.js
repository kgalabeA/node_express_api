import express from 'express';
import bodyParser from 'body-parser';
import usersRouters from './routes/user.js';

const app= express();
const PORT=5000;

app.use(bodyParser.json());
app.use('/users',usersRouters);

app.get('/',(req,res)=>{
res.send('[HOME PAGE.....]')
})

app.listen(PORT,()=>{ console.log(`Server running on port : http://localhost:${PORT}`) })