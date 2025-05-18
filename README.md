# 💡 Sistema de Gestión del Aprendizaje (LMS)

## 🌍 Introducción

El desarrollo de plataformas digitales en el ámbito educativo ha transformado la forma en que enseñamos y aprendemos. Este proyecto propone la construcción de un **LMS (Learning Management System)** como solución integral para centralizar la administración académica, facilitar el acceso a contenidos educativos y mejorar la experiencia de aprendizaje.

Inspirado en una interfaz moderna y responsiva como la que se muestra en [este ejemplo visual](https://astounding-clafoutis-196412.netlify.app/), este sistema busca atender las necesidades actuales de instituciones educativas en proceso de digitalización.

---

## 🧠 Propósito del Proyecto

El LMS está diseñado para ofrecer una plataforma web que:

- Organice cursos, contenidos y evaluaciones de manera estructurada.
- Brinde una experiencia de usuario clara, eficiente y accesible.
- Simule al menos un perfil de usuario (ej. administrador) con funciones de gestión.
- Permita la integración futura de nuevas funcionalidades gracias a su estructura modular.
- Almacene la información utilizando un backend ligero con JSON-Server.

Este desarrollo representa un avance hacia la autonomía digital educativa, la personalización pedagógica y la mejora continua de los procesos formativos.

---

## ✨ Funcionalidades del Proyecto

### Incluye:

- Panel de control interactivo con estadísticas clave.
- Gestión de cursos, módulos, lecciones y contenidos.
- Soporte para carga de recursos multimedia (videos, PDFs, enlaces).
- Creación y seguimiento de tareas, exámenes y retroalimentaciones.
- Persistencia de datos utilizando JSON-Server y manejo de peticiones con Fetch API.
- Personalización del sistema mediante parámetros configurables.

### No incluye (versión inicial):

- Integraciones con herramientas externas (CRMs, videollamadas).
- Aplicaciones móviles.
- Múltiples idiomas (opcional) o localización.

---

## 🔧 Tecnologías Empleadas

- HTML5
- CSS3 
- JavaScript puro (Vanilla JS)
- JSON-Server como base de datos local REST

---

## 📁 Estructura del Proyecto

El sistema contempla el uso de un JSON con la siguiente estructura:

### Cursos

- `codigo`
- `nivel`
- `duracion`
- `titulo`
- `categoria`
- `descripcion`
- `prerequisitos`
- `resultados`
- `estructuraCurso` (módulos y temas)
- `trainer`
- `precio`

### Trainer

- `id`
- `nombreCompleto`
- `email`
- `nacionalidad`
- `biografia`

### Contenido

- `nombreModulo`
- `temas` (lista de temas con tipo y recurso)

### Estudiantes

- `id`
- `nombreCompleto`
- `email`
- `nacionalidad`

---

## 🧩 Módulos Funcionales

Este LMS se organiza en componentes funcionales, basados en la referencia visual proporcionada:

### 1. Dashboard Principal

- Panel con estadísticas generales (cursos, usuarios, progreso).
- Accesos directos a acciones clave.
- Gráficos y tarjetas informativas.

### 2. Gestión de Cursos

- Edición y visualización de cursos.
- Filtros por categoría, duración o tipo.

### 3. Gestión de Contenidos

- Organización por módulos y temas.
- Subida y descarga de materiales multimedia.

### 4. Evaluaciones

- Registro de tareas, pruebas y exámenes.
- Evaluación mediante rúbricas y notas.
- Seguimiento del estado de entregas.

### 5. Personalización del Sistema

- Configuración de parámetros visuales y operativos.
- Integración con JSON-Server y uso de Fetch API para operaciones CRUD.

### 6. Módulo Administrador

- Panel de control centralizado.
- Gestión de estudiantes, cursos y contenido desde una misma interfaz.

---

## ✅ Entregables del Proyecto

- Código fuente en un **repositorio privado**.
- Archivo `db.json` con los datos estructurados.
- Este archivo `README.md` como documentación oficial del proyecto.

---