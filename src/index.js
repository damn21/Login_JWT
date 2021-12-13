// const express = require('express');
// const app = express();
// const morgan = require('morgan');
//
// //settings
// app.set('port', process.env.PORT||3000);//entrega el nombre de puerto asignado o coloca 3000
//
//
// //middlewares --  morgan (combined - dev)
// app.use(morgan('dev'));
// app.use(express.urlencoded({extended: false})); //permite recibir forms inputs
// app.use(express.json()); //ayuda a comunicarse en json
//
// //routes (llama al archivo que controlara las rutas)
// app.use(require('./routes/user'));
//
// //starting the server
// app.listen(app.get('port'), () => {
// console.log(`Server on Port ${app.get('port')}`);
//
// });
//
// //RESPUESTA DIRECTA DEL SERVIDOR SIN RUTAS
// //app.get('/',(req,res) =>{
//   //  res.send({"title": "al fin"}); //en vez res.send = es res.json por la ayudad de la libreria
// //});
const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//settings
app.set('port', process.env.PORT||4000);//entrega el nombre de puerto asignado o coloca 3000

//routes (llama al archivo que controlara las rutas)
const usersRouter = require('./routes/user')
app.use('/user', usersRouter);

//starting the server
app.listen(app.get('port'), () => {
console.log(`Server on Port ${app.get('port')}`);
});

//CONEXION BASE DE DATOS
const mongoose = require ('mongoose')
mongoose.connect('mongodb+srv://damn:8gfh6cRg8!vNFP3@cluster0.jelk9.mongodb.net/nueva?retryWrites=true&w=majority', ()=>{
    console.log("CONNECTED TO MONGO")
    }
)
