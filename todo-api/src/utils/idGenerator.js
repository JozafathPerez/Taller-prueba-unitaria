// idGenerator.js
// Utilidad para generar IDs únicos para las tareas

function generateId() {
    // Implementar lógica para generar un ID único
    return Math.random().toString(36).substr(2, 9);
}

module.exports = { generateId };
