// Create JSON SErver

//install from npm json server, copy the version u needed a stable one , and copy the code to terminal to install here we used 0.17.4, (dont use the 'alpha' version)

const JSONServer = require('json-server')
const MpServer = JSONServer.create()
const router = JSONServer.router('db.json')

//its to covert to json format
const middleware = JSONServer.defaults()


const PORT = 3000 || process.env.PORT

MpServer.use(middleware)
MpServer.use(router)

MpServer.listen(PORT,()=>{
    console.log(`Media-Player Server Started running at Port: ${PORT} &Waiting for client request`
    )
})