// src/services/taskService.js
const tasks = [];
const { randomUUID } = require('crypto');

function createTask(title, dueDate) {
  if (!title || title.trim() === '') throw new Error('Title is required');
  const newTask = {
    id: randomUUID(),
    title,
    dueDate,
    status: 'pending',
    createdAt: new Date()
  };
  tasks.push(newTask);
  return newTask;
}

function getTasksByStatus(status) {
  if (!['pending', 'completed'].includes(status)) throw new Error('Invalid status');
  return tasks.filter(task => task.status === status);
}

function markTaskCompleted(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) throw new Error('Task not found');
  task.status = 'completed';
  return task;
}

function deleteTask(id) {
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) throw new Error('Task not found');
  return tasks.splice(index, 1)[0];
}

module.exports = {
  createTask,
  getTasksByStatus,
  markTaskCompleted,
  deleteTask
};
