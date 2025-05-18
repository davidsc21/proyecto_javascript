# Proyecto de Desarrollo de un LMS (Learning Management System)

En el contexto actual de transformación digital, las plataformas de gestión del aprendizaje (LMS, por sus siglas en inglés) se han convertido en herramientas fundamentales para instituciones educativas, docentes y estudiantes. Estas soluciones permiten estructurar contenidos, facilitar la interacción pedagógica, y monitorear el progreso académico de forma centralizada y eficiente.

Este proyecto propone el desarrollo de un LMS moderno, funcional y adaptable, que integre herramientas de gestión educativa con una interfaz intuitiva y responsiva, inspirada en la plataforma visual disponible en [https://astounding-clafoutis-196412.netlify.app](https://astounding-clafoutis-196412.netlify.app/). La propuesta busca brindar una solución integral que simplifique la administración académica y potencie la experiencia de aprendizaje en línea, respondiendo a las necesidades de instituciones educativas en constante evolución.

El sistema está diseñado para soportar perfiles de usuario (opcional pero debe de haber al menos un perfil), con funcionalidades que abarcan desde la gestión de cursos hasta el seguimiento de resultados académicos. El enfoque modular del desarrollo permitirá escalar la plataforma conforme a nuevas necesidades, integrando tecnologías modernas y buenas prácticas de desarrollo web.



### **Justificación**

El auge de la educación en línea, potenciado por los avances tecnológicos y los cambios en las dinámicas educativas globales, ha generado una creciente necesidad de plataformas robustas que soporten la enseñanza-aprendizaje de forma remota, asincrónica y personalizada. Sin embargo, muchas instituciones aún enfrentan limitaciones en sus procesos de digitalización, ya sea por la falta de herramientas adecuadas, interfaces poco amigables o plataformas inflexibles que no responden a sus modelos pedagógicos.

Desarrollar un LMS propio representa una oportunidad estratégica para integrar la tecnología con la pedagogía institucional, brindando autonomía en la gestión académica y optimizando recursos. Esta solución permitirá centralizar los procesos educativos en un solo entorno: desde la administración de cursos, evaluación y retroalimentación, hasta la generación de reportes académicos y seguimiento al progreso del estudiante.

El diseño propuesto, basado en una interfaz limpia y moderna como la del panel de referencia, garantiza accesibilidad, usabilidad y escalabilidad. Además, el desarrollo propio abre la puerta a una personalización total del sistema, tanto en sus funcionalidades como en su integración con otras plataformas (como sistemas de matrículas, bibliotecas virtuales o CRMs institucionales).

Invertir en este proyecto no solo responde a una necesidad operativa, sino que representa una apuesta por la innovación educativa, la mejora continua y el fortalecimiento de la calidad académica.



### **Alcance del Proyecto**

**Incluye:**

- Diseño y desarrollo de una interfaz moderna basada en el dashboard de referencia.
- Creación y gestión de cursos,Docentes, módulos y lecciones.
- Carga de contenidos multimedia (videos, PDFs, enlaces).
- Gestión de actividades evaluativas (tareas, exámenes, foros).
- Sistema de retroalimentación y calificación.
- Persistencia de datos usando Json-Server

**No incluye (en esta fase inicial):**

- Integración con sistemas externos como CRMs o plataformas de videollamadas.
- Aplicaciones móviles nativas.
- Soporte multilingüe.

### **Tecnologias Permitidas**

- HTML, CSS, JS
- Frameworks (Bootstrap)
- JSON-Server

### **Condiciones de Entrega**

- Enlace de repositorio(Privado)
- Archivo db contenedor de la información almacenada.
- Domunetacion del proyecto (README)

## **Estructura de Datos**

### Informacion de cursos

Codigo

Nivel (Basico,Intermedio y Avanzado)

Duracion (Semanas o Horas)

Titulo

categoria

Descripcion

Prerequisitos

Resultados(Que aprendera)

estructura curso

experto

precio

garantia (✓ Lifetime access,✓ Certificate of completion,✓ 30-day money-back guarantee ✓ Direct instructor support)



### Experto

id

nombre completo

email

nacionalidad

biografia



### Contenido

nombre modulo

temas (lista de temas por modulo y recursos adicionales al tema)



### Estudiantes

id

nombre completo

email

nacionalidad



### Matriculas

idestudiante

codigocurso

fecharegistro

### **Módulos del LMS** 

El LMS se estructura en módulos funcionales claramente definidos, orientados a facilitar la gestión académica y la experiencia del usuario. Cada módulo toma como base la estructura y el diseño mostrado en la plataforma de referencia https://astounding-clafoutis-196412.netlify.app/:

#### **1. 📊 Dashboard Principal**

- Visualización resumida de estadísticas: número de cursos activos, usuarios registrados, progreso general.
- Accesos rápidos a acciones comunes (crear curso, gestionar usuarios, revisar tareas).
- Gráficos dinámicos y tarjetas informativas.

#### **2. 📚 Gestión de Cursos**

- Creación y edición de cursos con categorías, descripciones, duración, etiquetas y visibilidad.
- Asignación de docentes a cada curso.
- Vista en tabla con filtros por estado, fecha y tipo de curso.

#### **3. 👨‍🏫 Gestión de Docentes**

- Registro y edición de docentes.
- Asignación de cursos a cargo.
- Panel individual con su carga académica, desempeño y número de estudiantes.

#### **4. 👩‍🎓 Gestión de Estudiantes**

- Inscripción y administración de estudiantes.
- Seguimiento individual por curso: actividades completadas, pendientes, cerradas,retrasadas.

#### **5. 📂 Lecciones y Contenidos**

- Estructuración de módulos de aprendizaje por curso.
- Subida de contenidos: videos, documentos, imágenes, enlaces.
- Estado de visibilidad (publicado/borrador) y ordenamiento de lecciones.

#### **6. ✅ Tareas y Evaluaciones**

- Creación de tareas con fecha límite, rúbricas y calificación.
- Evaluaciones tipo test, preguntas abiertas o combinadas.
- Vista por entregas, estado de revisión y retroalimentación.

#### **7. ⚙️ Configuración del Sistema**

- Personalización de la plataforma (colores, logos, información institucional).
- Configuración de parámetros de cursos, notificaciones y seguridad.
- Integración JSOn-Server.
- Implementar peticiones con Fetch-Api

#### **8. ⚙️ Modulo Administrador**

- Interfaces de usuario para la gestion de informacion de los cursos, estudiantes y contenidos