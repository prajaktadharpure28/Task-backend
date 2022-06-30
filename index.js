const express = require('express');

const app = express();

app.use(express.json())

const PORT = 5000;

//temp database
const tasks =[]

//create a task
app.post('/tasks', (req, res) =>{
    const task ={
        'id': req.body.id,
        'title': req.body.title,
        'description': req.body.description,
        'priority': req.body.priority,
        'emoji': req.body.emoji
    }

    tasks.push(task);

    res.json({
        'status': 'success',
        'data': task
    })
})

app.get('/tasks', (req, res)=>{
    res.json({
        'status': 'success',
        'data': tasks
    })
})

app.post('/get_task', (req, res) =>{
    const id = req.body.id;

    let resultTask;

    tasks.map((task)=>{
        if(task.id === id){
            resultTask - task;
        }
    })

    res.json({
        'status': 'success',
        'data': resultTask
    })
})
// app.get('/health', (req, res)=>{
//     res.json({
//         "status": "API is running well"
//     })
// })

app.listen(PORT, ()=>{
    console.log(`Wow! Server started running on port`, PORT);
})