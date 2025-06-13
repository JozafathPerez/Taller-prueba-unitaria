function generateUUID() {
  return crypto.randomUUID(); // O un mock
}

function createTask(title, dueDate) {
  if (!title || title.trim() === '') throw new Error('Title is required');
  return {
    id: generateUUID(),
    title,
    dueDate,
    status: 'pending',
    createdAt: new Date()
  };
}

module.exports = { createTask };
