// app.js
// Configuración básica del servidor (simulado para el taller)

const express = require('express');
const taskController = require('./src/controllers/taskController');

const app = express();
app.use(express.json());

// Rutas simuladas
app.post('/tasks', taskController.createTaskHandler);
app.get('/tasks', taskController.getTasksHandler);
app.put('/tasks/:id', taskController.updateTaskHandler);
app.delete('/tasks/:id', taskController.deleteTaskHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});
