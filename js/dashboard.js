// componente de las estadisticas a nivel general
class Dashboard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

    connectedCallback() {
    const title = this.getAttribute('title') || 'titulo no definido';
    const text = this.getAttribute('text') || 'texto no definido';

    const container = document.createElement('section');
    container.innerHTML = /* HTML */`
      <header>
        <slot name="titulo">${title}</slot>
      </header>
      <main>
        <slot name="contenido">${text}</slot>
      </main>
    `;

    const style = document.createElement('style');
    style.textContent = /* CSS */ `
      section {
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
        padding: 1.5rem;
        border-radius: 10px;
        font-family: Inter;
        width: 20rem;
        min-height: 10rem;
        background: #fefefe;
      }
      header {
        font-weight: 500;
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: #2c3e50;
      }
      main {
        font-weight: bolder;
        font-size: 2.5rem;
        font-weight: 700;
        color: #3498db;
      }
    `;

    this.shadowRoot.innerHTML = ''; // Limpiar si hay algo anterior
    this.shadowRoot.append(style, container);
  }
}
customElements.define('dashboard-card', Dashboard);


// componente de los cursos en proceso
// falta terminar este componente e implementarlo con JSON dinamico
class MyEnrolledCourses extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const container = document.createElement('div');
    container.innerHTML = /* HTML */`
      <section>
        <div class="course-image">
          <img src="./assets/.png" alt="Imagen curso">
        </div>
        <div class="progress-indicator">
          <div class="progress-bar"></div>
        </div>
        <main>
          <div class="course-info">
            <h3>[Nombre del curso]</h3>
            <p>[trainer o profesor]</p>
          </div>
          <div class="progress-course">
            <div class="progress-stats">
              <span class="progress-percentage">[progress]</span>
              <span class="progress-lessons">[lessons]</span>
            </div>
            <button type="button" class="btn-MRC-card">Continue Learning</button>
          </div>
        </main>
      </section>
    `;

    const style = document.createElement('style');
    // terminar de arrreglar los dise;os de la pagina
    style.textContent = /* CSS */ `
      section {
        background: #fff;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 2px 4px #0000001a;
        transition: transform 0.3s ease;
        font-family: Inter;
        min-width: 10rem;
      }
      section:hover{
        transform: translateY(-5px);
      }
      .course-image{
        position: relative;
        height: 10rem;
      }
      .course-image img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      img{
        max-width: 100%;
        vertical-align: middle;
      }
      .progress-indicator{
        position: relative;
        bottom: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: #0000001a;
      }
      .progress-bar{
        height: 100%;
        background: #2ecc71;
        transition: width .3s ease;
        /* valor estatico de 65% */
        width: 65%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
        text-align: center;
        white-space: nowrap;
      }
      main {
        padding: 1.5rem;
      }
      .course-info h3{
        color: #2c3e50;
        margin: 0 0 0.5rem;
        font-size: 1.1rem;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -.27%;
      }
      .course-info p{
        color: #666;
        font-size: .9rem;
        margin-bottom: 1rem;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: .32px;
      }
      .progress-course{
        border-top: 1px solid #e1e8ed;
        padding-top: 1rem;
      }
      .progress-stats{
        display: flex;
        justify-content: space-between;
        color: #666;
        font-size: .9rem;
        margin-bottom: 1rem;
      }
      .progress-percentage{
        color: #2ecc71;
        font-weight: 500;
      }
      .progress-lessons{
        display: inline-block;
        color: #666;
        font-size: .9rem;
      }
      .btn-MRC-card{
        width: 100%;
        background: #3498db;
        color: #fff;
        border: none;
        padding: .75rem;
        border-radius: 6px;
        cursor: pointer;
        transition: all .3s ease;
        margin: 0;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
      }
      .btn-MRC-card:hover{
        background-color: #2980b9; /* azul más oscuro */
        transform: translateY(-2px);
      }
    `;
    shadow.append(style, container);
  }
}
customElements.define('my-enrolled-courses-card', MyEnrolledCourses);

class RecentActivity extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
    connectedCallback() {
    const emoji = this.getAttribute('emoji') || 'emoki no definido';
    const description = this.getAttribute('description') || 'texto no definido';
    const time = this.getAttribute('time') || 'tiempo no definido';

    const container = document.createElement('section');
    container.innerHTML = /* HTML */`
        <div class="activity-card">
          <div class="emoji">${emoji}</div>
          <div class="content">
            <p>${description}</p>
            <span>${time}</span>
          </div>
        </div>
    `;

    const style = document.createElement('style');
    style.textContent = /* CSS */ `
        .activity-card {
          display: flex;
          align-items: center;
          padding: 1rem;
          gap: 1rem;
          background-color: #f8f9fa;
          border-radius: 8px;
        }
        .emoji {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }
        .content{
          flex-grow: 1;
        }

        .content p {
          color: #2c3e50;
          margin-bottom: 0.5rem;
          margin-top: 0.25rem;
          font-size: 1rem;
        }
        
        .content span {
          color: #666;
          font-size: 0.85rem;
          display: inline-block;
        }
        /* Estilos específicos para diferentes tipos de actividades */
        :host([emoji="📚"]) .emoji {
          background-color: #E1F0FA;
        }
        
        :host([emoji="🏆"]) .emoji {
          background-color: #fef2e6;
        }
        
        :host([emoji="✍️"]) .emoji {
          background-color: #e9f7ef;
        }
    `;
    this.shadowRoot.innerHTML = ''; // Limpiar si hay algo anterior
    this.shadowRoot.append(style, container);
  }
}
customElements.define('recent-activity-card', RecentActivity);