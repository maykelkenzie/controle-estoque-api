import AppDataSource from "./data-source";
import app from "./app";
import 'dotenv/config'

AppDataSource.initialize()
.then(async ()=>{
    console.log("Database Conected!")

    const port = process.env.APP_PORT || 3000
    app.listen(port, ()=>{
        console.log(`App is running on https://localhost:${port}`);
        
    })
})
.catch((err)=> console.error(err))