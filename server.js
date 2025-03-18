//importation des modules nécessaires
const { config } = require('dotenv');
const express = require('express');
const mongoose=require('mongoose');

//création de l'application express
const app = express();
const PORT =process.env.PORT|| 3000;

//connexion à la base de données MongoDB
mongoose.connect('mongodb+srv://KougoDARI:1i2r3o4k5o@cluster0.n7usm.mongodb.net/')
  .then(() => console.log("MongoDB connecté"))
  .catch(err => console.error("Erreur de connexion", err));
  
//Middleware pour perse les données JSON
app.use(express.json());

//définition du modèle de la tâche(Mongoose schema)
const noteSchema=new mongoose.Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    createAt:{type:Date,default:Date.now}
});
constNote=mongoose.model('Note',noteSchema);

//ROUTES CRUD
//1.créer une tâche(POST/api/tasts)
app.post('/api/tasks', async(req, res)=>{
    try{
        const{title, description}=req.body;
        const task=new task({title, description});
        await task.save();
        res.status(201).json(task);
        }catch (error){
            res.status(500).json({error:'Erreur lors de la création de la tâche'});
            }
            });

           app.get('/', (req, res) => {
    res.send('Bienvenue sur mon serveur Express !');
});

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});



