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
          <hr>
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
    const emoji = this.getAttribute('emoji') || 'titulo no definido';
    const description = this.getAttribute('description') || 'texto no definido';
    const time = this.getAttribute('time') || 'tiempo no definido';

    const container = document.createElement('section');
    container.innerHTML = /* HTML */`
      <section>
        <div class="emoji-container">
          <button class="emoji-btn">${emoji}</button>
        </div>
        <div class="description-container">
          <p class="description-text">${description}</p>
          <span class="time-text">${time}</span>
        </div>
      </section>
    `;

    const style = document.createElement('style');
    style.textContent = /* CSS */ `
      .container-emoji {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-right: 1rem;
      }
      .emoji-btn{
        border: none;
        background: none;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0.4rem;
        transition: transform 0.5s;
      }

      section {
        border: 2px solid #888;
        padding: 12px;
        border-radius: 10px;
        font-family: Inter;
        max-width: 400px;
        background: #F8F9FA;
        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
      }
      header {
        font-weight: bold;
        font-size: 20px;
        margin-bottom: 10px;
        color: #003366;
      }
      main {
        font-size: 16px;
        margin-bottom: 10px;
        color: #222;
      }
      footer {
        font-size: 12px;
        color: #555;
        text-align: right;
      }

    `;
    this.shadowRoot.innerHTML = ''; // Limpiar si hay algo anterior
    this.shadowRoot.append(style, container);
  }
}
customElements.define('recent-activity-card', RecentActivity);