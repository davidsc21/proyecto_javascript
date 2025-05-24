

class CoursesPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.coursesData = [];
  }

  async connectedCallback() {
    await this.fetchCoursesData();
    this.render();
    this.setupEventListeners();
  }

  async fetchCoursesData() {
    try {
      const response = await fetch('./data/db.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      this.coursesData = data.cursos;
    } catch (error) {
      console.error('Error fetching courses data:', error);
    }
  }

  render() {
    // Agrupar cursos por categoría
    const coursesByCategory = this.groupCoursesByCategory();

    // Generar HTML para cada categoría
    let categoriesHTML = '';
    for (const [category, courses] of Object.entries(coursesByCategory)) {
      categoriesHTML += this.renderCategory(category, courses);
    }

    this.shadowRoot.innerHTML = `
      <style>
        .courses {
          font-family: 'Segoe UI', sans-serif;
          background-color: #f3f4f6;
          margin: 0;
          padding: 2rem;
          color: #111;
        }

        h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        h2 {
          font-size: 1.7rem;
          color: #2c3e50;
          margin-bottom: 1rem;
          position: relative;
          padding-bottom: 0.5rem;
          text-transform: capitalize;
        }

        h2::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          height: 1px;
          width: 100%;
          background-color: #3498db;
        }

        .courses-section {
          width: 1100px;
          margin: 0 auto;
        }

        .courses-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 1rem;
          padding: 1rem;
        }

        .courses-card {
          perspective: 1000px;
          position: relative;
          height: 100%;
          position: relative;
        }

        .flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s ease;
          transform-style: preserve-3d;
        }

        .courses-card.flipped .flip-inner {
          transform: rotateY(180deg);
        }

        .card-front,
        .card-back {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          background-color: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .card-front {
          z-index: 2;
        }

        .card-back {
          transform: rotateY(180deg);
          padding: 2rem;
          box-sizing: border-box;
          z-index: 1;
          overflow-y: auto;
          position: absolute;
        }

        .card-back::-webkit-scrollbar {
          width: 10px;
        }

        .card-back::-webkit-scrollbar-track {
          background: #f0f0f0;
          border-radius: 10px;
        }

        .card-back::-webkit-scrollbar-thumb {
          background-color: #888;
          border-radius: 10px;
          border: 2px solid #f0f0f0;
        }

        .card-back::-webkit-scrollbar-thumb:hover {
          background-color: #2980b9;
        }
        .card-img {
          height: 180px;
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .level-tag,
        .duration-tag {
          position: absolute;
          top: 10px;
          background-color: rgba(0, 0, 0, 0.75);
          color: #fff;
          padding: 4px 12px;
          border-radius: 16px;
          font-size: 0.75rem;
        }

        .level-tag {
          left: 10px;
        }

        .duration-tag {
          right: 10px;
        }

        .card-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          flex-grow: 1;
        }

        .card-content h3 {
          margin: 0;
          font-size: 1.5rem;
        }

        .card-content p {
          font-size: 0.9rem;
          color: #555;
          flex-grow: 1;
        }

        .card-buttons {
          display: flex;
          gap: 0.75rem;
          margin-top: auto;
        }

        .enroll-btn,
        .info-btn,
        .flip-btn {
          flex: 1;
          padding: 1rem 1rem;
          font-size: 0.9rem;
          border-radius: 24px;
          cursor: pointer;
          border: 2px solid #3498db;
          transition: 0.3s ease;
        }

        .enroll-btn {
          background-color: #3498db;
          color: #fff;
        }

        .enroll-btn:hover {
          background-color: #2980b9;
        }

        .info-btn {
          background-color: transparent;
          color: #3498db;
        }
        .flip-btn{
          background-color: transparent;
          color: #ecf0f1;
          background-color: #3498db;
        }

        .info-btn:hover {
          background-color: #ecf0f1;
        }
        .flip-btn:hover{
          background-color: #2980b9;
        }

        @media (max-width: 1100px) {
          .courses-section {
            width: 100%;
            padding: 0 1rem;
            box-sizing: border-box;
          }

          h1 {
            font-size: 2rem;
          }

          h2 {
            font-size: 1.4rem;
          }

          .card-content h3 {
            font-size: 1.3rem;
          }

          .card-content p {
            font-size: 0.85rem;
          }

          .enroll-btn,
          .info-btn,
          .flip-btn {
            font-size: 0.85rem;
            padding: 0.75rem;
          }
        }

        @media (max-width: 480px) {
          .courses-container {
            grid-template-columns: 1fr;
            gap: 1rem;
            padding: 0.5rem;
          }

          .card-buttons {
            flex-direction: column;
          }

          .card-content {
            padding: 1rem;
            gap: 0.75rem;
          }

          .card-back {
            padding: 1rem;
          }

          .enroll-btn,
          .info-btn,
          .flip-btn {
            font-size: 0.8rem;
            padding: 0.75rem;
          }
        }
      </style>

      <section class="courses">
        <h1>Available Courses</h1>
        ${categoriesHTML}
      </section>
    `;
  }

  groupCoursesByCategory() {
    return this.coursesData.reduce((acc, course) => {
      if (!acc[course.categoria]) {
        acc[course.categoria] = [];
      }
      acc[course.categoria].push(course);
      return acc;
    }, {});
  }

  renderCategory(category, courses) {
    const coursesHTML = courses.map(course => this.renderCourseCard(course)).join('');
    
    return `
      <section class="courses-section">
        <h2>${category}</h2>
        <div class="courses-container">
          ${coursesHTML}
        </div>
      </section>
    `;
  }

  renderCourseCard(course) {
    const prerequisitosList = typeof course.prerequisitosList === 'string' 
      ? course.prerequisitosList 
      : course.prerequisitosList?.[0] 
        ? Object.values(course.prerequisitosList[0]).join('<br>• ') 
        : course.prerequisitos;

    const resultadosList = typeof course.resultadosList === 'string'
      ? course.resultadosList
      : course.resultadosList?.[0]
        ? Object.values(course.resultadosList[0]).join('<br>• ')
        : course.resultados;

    return `
      <div class="courses-card">
        <div class="flip-inner">
          <!-- FRONT -->
          <div class="card-front">
            <div class="card-img" style="background-image: url('${course.imagen}');">
              <span class="level-tag">${course.nivel}</span>
              <span class="duration-tag">⏱ ${course.duracion}</span>
            </div>
            <div class="card-content">
              <h3>${course.titulo}</h3>
              <p>${course.descripcion}</p>
              <div class="card-buttons">
                <button class="enroll-btn" onclick="money('money', ${course.id})">Enroll Now</button>
                <button class="info-btn">More Info</button>
              </div>
            </div>
          </div>

          <!-- BACK -->
          <div class="card-back">
            <div class="card-content">
              <h2>Prerequisites</h2>
              <p>• ${prerequisitosList}</p>
              <h2>What You'll Learn</h2>
              <p>• ${resultadosList}</p>
              <h2>Course Structure</h2>
              <p>${course.estructuraCurso}</p>
              <button class="flip-btn">Close</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  setupEventListeners() {
    this.shadowRoot.addEventListener('click', (e) => {
      const card = e.target.closest('.courses-card');
      if (!card) return;

      if (e.target.classList.contains('info-btn')) {
        card.classList.add('flipped');
      } else if (e.target.classList.contains('flip-btn')) {
        e.stopPropagation();
        card.classList.remove('flipped');
      }
    });
  }
}

customElements.define('courses-page', CoursesPage);

class MoneyCourses extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.courseData = null;
    this.API_URL = 'http://localhost:3000';
  }

 async connectedCallback() {
  console.log('Course ID:', this.getAttribute('course-id'));
  try {
    // Obtener el ID del atributo del componente
    const courseId = this.getAttribute('course-id');
    
    if (!courseId) {
      this.showError("No se proporcionó ID del curso");
      return;
    }

    await this.loadCourseData(courseId);
    this.render();
    this.setupEventListeners();
    
  } catch (error) {
    console.error('Error:', error);
    this.showError(error.message || 'Error al cargar el curso');
  }
}
  async loadCourseData(courseId) {
    try {
      const response = await fetch(`${this.API_URL}/cursos/${courseId}`);
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: Curso no encontrado`);
      }
      
      this.courseData = await response.json();
      
    } catch (error) {
      console.error('Error al cargar datos del curso:', error);
      throw error;
    }
  }

  showError(message) {
    this.shadowRoot.innerHTML = `
      <style>
        .error-container {
          padding: 2rem;
          text-align: center;
          font-family: sans-serif;
        }
        .error-message {
          color: #dc2626;
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }
        .back-link {
          color: #3b82f6;
          text-decoration: none;
          font-weight: bold;
          display: inline-block;
          margin-top: 1rem;
          padding: 0.5rem 1rem;
          border: 1px solid #3b82f6;
          border-radius: 4px;
        }
        .back-link:hover {
          background-color: #eff6ff;
        }
      </style>
      <div class="error-container">
        <div class="error-message">${message}</div>
        <a href="#" class="back-link" onclick="courses('courses')">← Volver a los cursos</a>
      </div>
    `;
  }

  formatPrerequisites() {
    if (!this.courseData.prerequisitosList) {
      return `<p>${this.courseData.prerequisitos || 'No se requieren prerequisitos'}</p>`;
    }

    // Si es string
    if (typeof this.courseData.prerequisitosList === 'string') {
      return `<p>${this.courseData.prerequisitosList}</p>`;
    }

    // Si es array de objetos
    if (Array.isArray(this.courseData.prerequisitosList)) {
      const items = [];
      
      // Recorrer todos los objetos en el array
      this.courseData.prerequisitosList.forEach(obj => {
        // Agregar todos los valores de cada objeto
        Object.values(obj).forEach(val => {
          if (val.trim()) items.push(`<li>${val}</li>`);
        });
      });
      
      return items.length ? `<ul style="list-style-type: disc; padding-left: 1.5rem;">${items.join('')}</ul>` : 
        `<p>${this.courseData.prerequisitos || 'No se requieren prerequisitos'}</p>`;
    }

    return `<p>${this.courseData.prerequisitos || 'No se requieren prerequisitos'}</p>`;
  }

  formatLearningOutcomes() {
    if (!this.courseData.resultadosList) {
      return `<p>${this.courseData.resultados || 'No se especificaron resultados'}</p>`;
    }

    // Si es string
    if (typeof this.courseData.resultadosList === 'string') {
      return `<p>${this.courseData.resultadosList}</p>`;
    }

    // Si es array de objetos
    if (Array.isArray(this.courseData.resultadosList)) {
      const items = [];
      
      // Recorrer todos los objetos en el array
      this.courseData.resultadosList.forEach(obj => {
        // Agregar todos los valores de cada objeto
        Object.values(obj).forEach(val => {
          if (val.trim()) items.push(`<li>${val}</li>`);
        });
      });
      
      return items.length ? `<ul style="list-style-type: disc; padding-left: 1.5rem;">${items.join('')}</ul>` : 
        `<p>${this.courseData.resultados || 'No se especificaron resultados'}</p>`;
    }

    return `<p>${this.courseData.resultados || 'No se especificaron resultados'}</p>`;
  }

  render() {
    if (!this.courseData) {
      this.shadowRoot.innerHTML = '<p>Cargando datos del curso...</p>';
      return;
    }

    const prerequisitosHTML = this.formatPrerequisites();
    const resultadosHTML = this.formatLearningOutcomes();

    this.shadowRoot.innerHTML = `
      <style>
        /* Estilos permanecen iguales */
        .container {
          font-family: 'Segoe UI', sans-serif;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          color: #333;
        }
        
        .back-link {
          display: inline-block;
          margin-bottom: 1.5rem;
          color: #3b82f6;
          text-decoration: none;
          font-weight: 500;
        }
        
        .back-link:hover {
          text-decoration: underline;
        }
        
        .header-card {
          display: flex;
          gap: 2rem;
          margin-bottom: 2rem;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          color:white;
          background-image: url('${this.courseData.imagen}');
          background-size: cover;
          background-repeat: no-repeat;
          background-position:center;

         
          
        }
        
        
        .header-content {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        
        .header-title {
          font-size: 1.8rem;
          margin: 0 0 0.5rem 0;
          color: white;
        }
        
        .badges {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        
        .badge {
          background: black;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.875rem;
        }
        
        .header-description {
          margin: 1rem 0;
          line-height: 1.6;
        }
        
        .instructor {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: 1rem;
        }
        
        .instructor img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        
        .card-grid {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 2rem;
        }
        
        .card {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .card h2 {
          font-size: 1.25rem;
          margin-top: 0;
          margin-bottom: 1rem;
          color: #111;
        }
        
        .card p {
          line-height: 1.6;
          margin: 0.5rem 0;
        }
        
        .side-card {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 1rem;
          height: fit-content;
        }
        
        .price {
          font-size: 2rem;
          font-weight: bold;
          color: #111;
          margin-bottom: 0.5rem;
        }
        
        .features {
          padding-left: 1.25rem;
          margin: 1.5rem 0;
        }
        
        .features li {
          margin-bottom: 0.5rem;
        }
        
        .button {
          width: 100%;
          padding: 1rem;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s;
        }
        
        .button:hover {
          background: #2563eb;
        }
        
        .module {
          margin-top: 1.5rem;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .module-header {
          padding: 1rem;
          background: #f8fafc;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }
        
        .module-content {
          padding: 1rem;
          display: none;
        }
        
        .module.active .module-content {
          display: block;
        }
        
        @media (max-width: 768px) {
          .header-card {
            flex-direction: column;
          }
          
          .header-card img {
            width: 100%;
            height: 200px;
          }
          
          .card-grid {
            grid-template-columns: 1fr;
          }
          
          .side-card {
            position: static;
          }
        }
      </style>

      <div class="container">
        <a href="#" class="back-link" onclick="courses('courses')">← Volver a los cursos</a>

        <div class="header-card">
          <div class="header-content">
            <div>
              <h1 class="header-title">${this.courseData.titulo}</h1>
              <div class="badges">
                <div class="badge">⏱ ${this.courseData.duracion}</div>
                <div class="badge">${this.courseData.nivel}</div>
                <div class="badge">250+ inscritos</div>
              </div>
              <p class="header-description">
                ${this.courseData.descripcion}
              </p>
            </div>
            <div class="instructor">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Instructor" />
              <div>
                <strong>Instructor del curso</strong><br />
                Dr. John Smith
              </div>
            </div>
          </div>
        </div>

        <div class="card-grid">
          <div>
            <div class="card">
              <h2>Descripción del curso</h2>
              <p>${this.courseData.descripcion}</p>
            </div>
            
            <div class="card">
              <h2>Requisitos previos</h2>
              ${prerequisitosHTML}
            </div>
            
            <div class="card">
              <h2>Lo que aprenderás</h2>
              ${resultadosHTML}
            </div>
            
            <div class="card">
              <h2>Estructura del curso</h2>
              <p>${this.courseData.estructuraCurso}</p>
              
              <!-- Módulos del curso -->
              <div class="module">
                <div class="module-header">
                  <div class="title"><span>Módulo 1</span> Introducción</div>
                  <div class="toggle-icon">+</div>
                </div>
                <div class="module-content">
                  <p>Descripción general del curso y objetivos</p>
                  <p>Configuración del entorno de desarrollo</p>
                </div>
              </div>
              
              <div class="module">
                <div class="module-header">
                  <div class="title"><span>Módulo 2</span> Conceptos básicos</div>
                  <div class="toggle-icon">+</div>
                </div>
                <div class="module-content">
                  <p>Fundamentos teóricos</p>
                  <p>Primeros pasos prácticos</p>
                </div>
              </div>
            </div>
          </div>

          <div class="side-card">
            <div class="price">$99.99</div>
            <p>Pago único</p>
            <ul class="features">
              <li>Acceso de por vida</li>
              <li>Certificado de finalización</li>
              <li>Garantía de devolución de 30 días</li>
              <li>Soporte directo del instructor</li>
            </ul>
           <button class="button" onclick="video('video', '${this.courseData.id}')">Comenzar a aprender</button>

          </div>
        </div>
      </div>
    `;
  }

  setupEventListeners() {
    this.shadowRoot.querySelectorAll('.module').forEach(module => {
      module.addEventListener('click', () => {
        module.classList.toggle('active');
        const icon = module.querySelector('.toggle-icon');
        icon.textContent = module.classList.contains('active') ? '-' : '+';
      });
    });
  }
}

customElements.define('money-course', MoneyCourses);

class VideoPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.courseData = null;
    this.topics = [];
    this.API_URL = 'http://localhost:3000';
  }

  async connectedCallback() {
    try {
      const courseId = this.getAttribute('course-id');
      
      if (!courseId) {
        this.showError("No se proporcionó ID del curso");
        return;
      }

      await this.loadCourseData(courseId);
      this.prepareTopicsData();
      this.render();
      this.setupEventListeners();
      
    } catch (error) {
      console.error('Error:', error);
      this.showError(error.message || 'Error al cargar el curso');
    }
  }

  async loadCourseData(courseId) {
    try {
      const response = await fetch(`${this.API_URL}/cursos/${courseId}`);
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: Curso no encontrado`);
      }
      
      this.courseData = await response.json();
    } catch (error) {
      console.error('Error al cargar datos del curso:', error);
      throw error;
    }
  }

  prepareTopicsData() {
    if (this.courseData && this.courseData.videos && this.courseData.videos.modulos) {
      this.topics = this.courseData.videos.modulos.map((modulo, index) => ({
        id: modulo.id,
        title: modulo.titulo,
        duration: modulo.duracion,
        video: modulo.videoUrl,
        thumbnail: modulo.thumbnail,
        description: modulo.descripcion,
        recursos: modulo.recursos || [],
        completed: false
      }));
    } else {
      // Fallback si no hay datos de videos en el JSON
      const modules = this.courseData?.estructuraCurso?.split(', ') || [];
      this.topics = modules.map((module, index) => ({
        title: `Module ${index + 1}: ${module}`,
        duration: `${Math.max(5, Math.min(30, module.split(' ').length))} min`,
        video: `/assets/video/lesson-${index + 1}.mp4`,
        description: "Contenido educativo del módulo",
        completed: false
      }));
    }
  }

  showError(message) {
    this.shadowRoot.innerHTML = `
      <style>
        .error-container {
          padding: 2rem;
          text-align: center;
          font-family: sans-serif;
        }
        .error-message {
          color: #dc2626;
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }
        .back-link {
          color: #3b82f6;
          text-decoration: none;
          font-weight: bold;
          display: inline-block;
          margin-top: 1rem;
          padding: 0.5rem 1rem;
          border: 1px solid #3b82f6;
          border-radius: 4px;
        }
        .back-link:hover {
          background-color: #eff6ff;
        }
      </style>
      <div class="error-container">
        <div class="error-message">${message}</div>
        <a href="#" class="back-link" onclick="courses('courses')">← Volver a los cursos</a>
      </div>
    `;
  }

  render() {
    this.shadowRoot.innerHTML = `
       <style>
  .container-total {
    font-family: Arial, sans-serif;
    margin: 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
}

h1 {
   font-size: 50px;
}

#progress {
    color: gray;
}

.container {
    width: 100%;
    max-width: 1200px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    overflow: hidden;
    background-color: #fff;
}

.video {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.sidebar-back {
    width: 100%;
    background: #f5f7fa;
    padding: 20px;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: flex-start;
}

.back-link {
    color: #3b82f6;
    text-decoration: none;
    font-size: 0.9rem;
    display: inline-block;
}

.sidebar {
    flex: 1;
    min-width: 260px;
    max-width: 280px;
    background: #f5f7fa;
    padding: 20px;
    border-right: 1px solid #ddd;
    box-sizing: border-box;
}

.duration {
    display: flex;
    flex-direction: column;
}

.d-t {
    margin-top: 10px;
    color: gray;
}

.main {
    flex: 2;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
}

.topics {
    display: flex;
    flex-direction: column;
    padding: 0;
    overflow: hidden;
    width: 100%;
    justify-content: center;
    align-items: center;
}

.topic {
    display: flex;
    padding: 20px;
    width: 100%;
    max-width: 250px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    justify-content: flex-start;
    margin-bottom: 10px;
}

.topic.completed {
    color: white;
}

.topic.active {
    border-left: 5px solid #3b82f6;
    background-color:  #3b82f6;
}

.topic:hover {
    background-color: #e6f7ff;
}

.video-container {
    width: 100%;
    max-width: 800px;
    display: none;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
}

.video-player {
    width: 100%;
    height: 450px;
    background-color: #000;
    margin-bottom: 20px;
    border-radius: 8px;
}

.description {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.navigation {
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.buttons {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    justify-content: center;
    gap: 10px;
    width: 100%;
}

.barra {
    display: flex;
    width: 100%;
}

.barra::after {
    content: "";
    position: relative;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: #ccc;
}

button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    opacity: 0.9;
}

#completeBtn.completed {
    background-color: #28a745;
    color: white;
}

.description-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #f5f7fa;
    padding: 20px;
    border-radius: 8px;
    box-sizing: border-box;
    margin-top: 20px;
}

.resource-links {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}

.resource-link {
    display: flex;
    align-items: center;
    padding: 8px 0;
    text-decoration: none;
    color: #3b82f6;
}

.resource-icon {
    margin-right: 8px;
    font-size: 1.2rem;
}

/* ===== Responsive Styles ===== */
@media (max-width: 1024px) {
    .video {
        flex-direction: column;
    }

    .sidebar {
        width: 100%;
        max-width: 100%;
        border-right: none;
        border-bottom: 1px solid #ddd;
    }

    .main {
        padding: 20px;
    }
}

@media (max-width: 768px) {
    h1 {
        font-size: 1.5rem;
    }

    .video-player {
        height: 250px;
    }

    .buttons {
        flex-direction: column;
        align-items: center;
    }

    .topic {
        width: 90%;
    }
}

@media (max-width: 480px) {
    .container {
        margin: 20px 0;
    }

    .video-container {
        padding: 10px;
    }

    .description-container {
        padding: 10px;
    }

    button {
        width: 100%;
    }
}
    </style>

      <div class="container-total">
        <div class="container">
          <div class="sidebar-back">
            <a href="#" class="back-link" onclick="money('money', '${this.getAttribute('course-id')}')">← Back to Course</a>
          </div>
          <div class="video">
            <div class="sidebar">
              <h1>${this.courseData?.titulo || 'Course Topics'}</h1>
              <p id="progress">0/${this.topics.length} completed</p>
              <ul class="topics" id="topicList"></ul>
              <p class="duration"></p>
            </div>
            <div class="main">
              <div id="defaultView">
                <h2>📺 Select a Topic to Start Learning</h2>
                <p>Choose a topic from the sidebar to begin watching the course content.</p>
              </div>
              <div class="video-container" id="videoView">
                <video controls class="video-player" id="videoPlayer"></video>
                <div class="description">
                  <h3 id="topicTitle"></h3>
                  <p id="topicDescription"></p>
                </div>
                    
                <div class="description-container">
                  <h2>Course Resources</h2>
                  <div class="resource-links" id="resourceLinks">
                    <!-- Resources will be added dynamically -->
                  </div>
                </div>
                
                <div class="navigation">
                  <div class="barra"></div>
                  <div class="buttons">
                    <button id="prevBtn">&larr; Previous Topic</button>
                    <button id="completeBtn" class="complete-btn">Mark as Complete</button>
                    <button id="nextBtn">Next Topic &rarr;</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    this.initInterface();
  }

  initInterface() {
    const topicList = this.shadowRoot.getElementById("topicList");
    const progress = this.shadowRoot.getElementById("progress");
    const defaultView = this.shadowRoot.getElementById("defaultView");
    const videoView = this.shadowRoot.getElementById("videoView");
    const videoPlayer = this.shadowRoot.getElementById("videoPlayer");
    const topicTitle = this.shadowRoot.getElementById("topicTitle");
    const topicDescription = this.shadowRoot.getElementById("topicDescription");
    const resourceLinks = this.shadowRoot.getElementById("resourceLinks");
    const completeBtn = this.shadowRoot.getElementById("completeBtn");
    const prevBtn = this.shadowRoot.getElementById("prevBtn");
    const nextBtn = this.shadowRoot.getElementById("nextBtn");

    let currentTopicIndex = null;

    const renderTopics = () => {
      topicList.innerHTML = "";
      this.topics.forEach((topic, index) => {
        const li = document.createElement("li");
        li.className = "topic";
        if (index === currentTopicIndex) li.classList.add("active");
        if (topic.completed) li.classList.add("completed");

        li.innerHTML = `
          <div class="duration"> 
            <div>${topic.title}</div> 
            <div class="d-t">${topic.duration}</div>
          </div>`;

        li.onclick = () => selectTopic(index);
        topicList.appendChild(li);
      });

      const completedCount = this.topics.filter(t => t.completed).length;
      progress.textContent = `${completedCount}/${this.topics.length} completed`;
    };

    const selectTopic = (index) => {
      currentTopicIndex = index;
      const topic = this.topics[index];
      
      defaultView.style.display = "none";
      videoView.style.display = "flex";
      
      // Configurar el reproductor de video
      videoPlayer.src = topic.video;
      videoPlayer.poster = topic.thumbnail || '';
      videoPlayer.load();
      
      topicTitle.textContent = topic.title;
      topicDescription.textContent = topic.description;
      
      // Actualizar botón de completado
      completeBtn.textContent = topic.completed ? "Completed" : "Mark as Complete";
      completeBtn.classList.toggle("completed", topic.completed);
      
      // Renderizar recursos
      renderResources(topic.recursos);
      
      // Actualizar tema activo
      this.shadowRoot.querySelectorAll('.topic').forEach(item => {
        item.classList.remove('active');
      });
      this.shadowRoot.querySelectorAll('.topic')[index].classList.add('active');
    };

    const renderResources = (resources) => {
      resourceLinks.innerHTML = "";
      
      if (!resources || resources.length === 0) {
        resourceLinks.innerHTML = "<p>No resources available for this topic.</p>";
        return;
      }
      
      resources.forEach(resource => {
        const link = document.createElement("a");
        link.className = "resource-link";
        link.href = resource.url;
        link.target = "_blank";
        
        // Determinar el icono según el tipo de recurso
        let icon = "📄"; // Por defecto
        if (resource.tipo === "pdf") icon = "📄";
        if (resource.tipo === "link") icon = "🔗";
        
        link.innerHTML = `
          <span class="resource-icon">${icon}</span>
          <span>${resource.nombre}</span>
        `;
        
        resourceLinks.appendChild(link);
      });
    };

    completeBtn.onclick = () => {
      if (currentTopicIndex !== null) {
        const topic = this.topics[currentTopicIndex];
        topic.completed = !topic.completed;
        completeBtn.textContent = topic.completed ? "Completed" : "Mark as Complete";
        completeBtn.classList.toggle("completed", topic.completed);
        renderTopics();
      }
    };

    prevBtn.onclick = () => {
      if (currentTopicIndex > 0) selectTopic(currentTopicIndex - 1);
    };

    nextBtn.onclick = () => {
      if (currentTopicIndex < this.topics.length - 1) selectTopic(currentTopicIndex + 1);
    };

    // Renderizar temas inicialmente
    renderTopics();
  }

  setupEventListeners() {
    // Puedes agregar event listeners adicionales aquí si es necesario
  }
}

customElements.define('video-page', VideoPage);

const pages5 = {
  video: (id) => `<video-page course-id="${id}"></video-page>`
};

function video(page5, id) {
  const content = document.getElementById('main');
  content.innerHTML = pages5[page5](id) || 'Página no encontrada';
}

const pages4 = {
  money: (id) => `<money-course course-id="${id}"></money-course>`
};

function money(page4, id) {
  const content = document.getElementById('main');
  content.innerHTML = pages4[page4](id) || 'Página no encontrada';
}

const pages3 = {
  courses: `<courses-page></courses-page>`
};

function courses(page3) {
  const content = document.getElementById('main');
  content.innerHTML = pages3[page3] || '<h1>pagina no encontrada</h1>';
}