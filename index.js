const express = require("express")

const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server started running ${PORT}`)
})


const students = [
    {firstName: "David",
        lastName: "Sam,pson"
    },
    {firstName: "David",
        lastName: "Sam,pson"
    },
    {firstName: "David",
        lastName: "Sam,pson"
    },
]


app.get("/students", (request, response)=>{

    response.json(students)
})







