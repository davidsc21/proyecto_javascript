// componente de las estadisticas a nivel general
class Dashboard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const container = document.createElement('div');
    container.innerHTML = /* HTML */`
      <section>
        <header>
          <slot name="titulo">[Sin título]</slot>
        </header>
        <main>
          <slot name="contenido">[Sin contenido]</slot>
        </main>
      </section>
    `;

    const style = document.createElement('style');
    style.textContent = /* CSS */ `
      section {
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
        padding: 1.5rem;
        border-radius: 10px;
        font-family: Arial;
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
      .dash-board{
        display: flex;
      }
    `;
    shadow.append(style, container);
  }
}
customElements.define('dashboard-card', Dashboard);


// componente de los cursos en proceso
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
    style.textContent = /* CSS */ `
      section {
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
        padding: 1.5rem;
        border-radius: 10px;
        font-family: Arial;
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
    const shadow = this.attachShadow({ mode: 'open' });

    const container = document.createElement('div');
    container.innerHTML = /* HTML */`
      <section>
        <header>
          <slot name="titulo">[Sin título]</slot>
        </header>
        <main>
          <slot name="contenido">[Sin contenido]</slot>
        </main>
        <footer>
          <slot name="footer">[Sin pie de página]</slot>
        </footer>
      </section>
    `;

    const style = document.createElement('style');
    style.textContent = /* CSS */ `
      section {
        border: 2px solid #888;
        padding: 12px;
        border-radius: 10px;
        font-family: Arial;
        max-width: 400px;
        background: #fefefe;
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
      .dash-board{
        display: flex;
      }
    `;
    shadow.append(style, container);
  }
}
customElements.define('recent-activity-card', RecentActivity);