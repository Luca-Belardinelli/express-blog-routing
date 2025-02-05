// richiamando express
const express = require('express')
// inalizzazione express
const app = express()
// defiinizione porta in ascolto
const port = 3000
//importiamo il router 
const postsRouter = require('./routers/posts')

// definiamo l'uso di una cartella per i file statici
app.use(express.static('public'));


// definiamo la prima rotta 
app.get('/', (req, res) => {
  res.send('Server del mio blog')
})

// router
app.use("/posts", postsRouter)

// avviamo il server mettendelo in ascolto sulla porta indicata
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})