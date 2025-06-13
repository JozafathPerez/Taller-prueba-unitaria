# Taller de Pruebas Unitarias - API de Tareas

Este repositorio es la base para el taller de pruebas unitarias en Node.js y JavaScript. Simula una API RESTful para la gestión de tareas, donde los participantes implementarán y probarán la lógica de negocio.

## Estructura del proyecto

```
todo-api/
├── src/
│   ├── services/
│   │   └── taskService.js      # Lógica de negocio
│   ├── controllers/
│   │   └── taskController.js   # Simula endpoints HTTP
│   └── utils/
│       └── idGenerator.js      # Utilidad para generar IDs únicos
├── tests/
│   └── task.test.js            # Pruebas unitarias con Jest
├── app.js                      # Setup del servidor
├── package.json                # Configuración de proyecto
├── jest.config.js              # Configuración de Jest
└── README.md                   # Instrucciones y guía
```

## Instrucciones

1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Ejecuta el servidor:
   ```bash
   npm start
   ```
3. Ejecuta las pruebas unitarias:
   ```bash
   npm test
   ```

