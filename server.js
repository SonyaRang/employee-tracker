const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.listen(PORT,() =>{
    console.log(`API SERVER NOW ON PORT ${PORT}`);
});