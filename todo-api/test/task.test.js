const { createTask } = require('../src/services/taskService');

describe('createTask', () => {
  it('should create a task with valid input', () => {
    const task = createTask('Buy milk', '2025-06-20');
    expect(task).toHaveProperty('id');
    expect(task.title).toBe('Buy milk');
    expect(task.status).toBe('pending');
  });

  it('should throw if title is empty', () => {
    expect(() => createTask('', '2025-06-20')).toThrow('Title is required');
  });
});
