console.log("ceshi") 

process.on('message', (msg) => {
    console.log('get message', msg)
})
process.send('call me father')