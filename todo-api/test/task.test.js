const {
  createTask,
  markTaskCompleted,
  getTasksByStatus,
  deleteTask
} = require('../src/services/taskService');

describe('createTask()', () => {
  it('lanzar error si el título está vacío (mínimo)', () => {
    expect(() => createTask('', '2025-06-30')).toThrow('Title is required');
  });

  it('crear tarea con datos válidos (medio)', () => {
    const task = createTask('Leer libro', '2025-06-30');
    expect(task.status).toBe('pending');
    expect(task).toHaveProperty('id');
  });

  it('acepta título largo (máximo)', () => {
    const task = createTask('A'.repeat(255), '2025-12-31');
    expect(task.title.length).toBe(255);
  });
});

describe('markTaskCompleted()', () => {
  it('lanzar error si ID no existe (mínimo)', () => {
    expect(() => markTaskCompleted('no-id')).toThrow('Task not found');
  });

  it('marca tarea como completada (medio)', () => {
    const task = createTask('Tarea 1', '2025-07-01');
    const updated = markTaskCompleted(task.id);
    expect(updated.status).toBe('completed');
  });
});

describe('getTasksByStatus()', () => {
  it('lanzar error por estado inválido (mínimo)', () => {
    expect(() => getTasksByStatus('otro')).toThrow('Invalid status');
  });

  it('filtra tareas pendientes (medio)', () => {
    createTask('Pendiente 1', '2025-07-10');
    const pending = getTasksByStatus('pending');
    expect(pending.length).toBeGreaterThan(0);
  });
});

describe('deleteTask()', () => {
  it('lanzar error si ID no existe (mínimo)', () => {
    expect(() => deleteTask('fake-id')).toThrow('Task not found');
  });

  it('elimina tarea correctamente (medio)', () => {
    const task = createTask('Eliminarme', '2025-08-01');
    const deleted = deleteTask(task.id);
    expect(deleted.id).toBe(task.id);
  });
});
