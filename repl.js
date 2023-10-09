// Read, Evaluate, Print and Loop
// to go the node command line is Node + enter

const repl = require("repl");

const local = repl.start("$: ") // customize your node command line     

local.on('exit',()=>{
    console.log("Exiting...")
    process.exit();
})