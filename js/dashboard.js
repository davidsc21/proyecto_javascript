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
          <img src="./assets/.png">
          <div class="progress-bar"></div>
        </header>
        <main>
          <h2>[Nombre del curso]</h2>
          <p>[trainer o profesor]</p>
          <div class="dropdown-divider"></div>
        </main>
        <footer>
          <button type="button" class="btn-MRC-card">Continue Learning</
        </footer>
      </section>
    `;

    const style = document.createElement('style');
    // terminar de arrreglar los dise;os de la pagina
    style.textContent = /* CSS */ `
      section {
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
        padding: 1.5rem;
        border-radius: 10px;
        font-family: Inter;
        width: 20rem;
        background: #fefefe;
      }
      section:hover{
        transition: transform 0.5s ease;
      }
      header {
        font-weight: bold;
        font-size: 2rem;
        margin-bottom: 10px;
        color: #2c3e50;
      }
      main {
        font-weight: bold;
        font-size: 2rem;
        margin-bottom: 10px;
        color: #27a4e0;
      }
      .dropdown-divider {
        height: 1px;
        background: #e1e8ed;
        margin: .5rem 0;
      }
      .btn-MRC-card{
        background-color: #3498db; /* azul principal */
        color: white;
        padding: 10px 20px;
        font-size: 1rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.2s ease;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        margin-right: 3.5rem;
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
          margin-bottom: 0.25rem;
          font-size: 1rem;
        }
        
        .content span {
          color: #666;
          font-size: 0.85rem;
          display: inline-block;
        }
        /* Estilos específicos para diferentes tipos de actividades */
        :host([emoji="📚"]) .emoji {
          background-color: #e8f4fc;
        }
        
        :host([emoji="✍️"]) .emoji {
          background-color: #fef2e6;
        }
        
        :host([emoji="🏆"]) .emoji {
          background-color: #e9f7ef;
        }
    `;
    this.shadowRoot.innerHTML = ''; // Limpiar si hay algo anterior
    this.shadowRoot.append(style, container);
  }
}
customElements.define('recent-activity-card', RecentActivity);