// componente de las estadisticas a nivel general
class Dashboard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const templateDashboard = /* HTML */`
      <style>
        .card-dashboard {
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
        padding: 1.5rem;
        border-radius: 10px;
        font-family: Inter;
        width: 20rem;
        min-height: 10rem;
        background: #fefefe;
        }
        .title  {
          font-weight: 500;
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: #2c3e50;
        }
        .text  {
          font-weight: bolder;
          font-size: 2.5rem;
          font-weight: 700;
          color: #3498db;
        }
      </style>
    
      <section class="card-dashboard">
          <div id="title" class="title">Loading title...</div>
          <div id="text" class="text">-</div>
      </section>
    `;

    this.shadowRoot.innerHTML = templateDashboard;
  }
  connectedCallback() {
    const filtro = this.getAttribute("filtro");
    fetch('http://localhost:3000/dashboard')
    .then(res => res.json())
    // convierte el formato JSON en un objeto para js, obtiene el valor de filtro y se convierte a minusculas y se les quita lso espacios para poder trabajar de forma sencilla con ellos 
    .then(data => {
      // en este caso se tiene que hacer con data[0] ya que se está recorriendo un array con un objeto
      const dashboardData = data[0];

      // obtiene el valor de filtro y lo edita para trabajar con el.
      if (dashboardData && dashboardData[filtro]) {
        // Busca la carta cuyo nombre incluya el filtro
        // se accede al array de un solo objeto
        const [info] = dashboardData[filtro]; 
        this.data = info;
      } else {
        // en caso de que la carta no exista se muestran los valoes 
        this.shadowRoot.querySelector('#title').textContent = "Tarjeta no encontrada";
        this.shadowRoot.querySelector('#text').textContent = "-";
      }
    })
    // esto se hace para comprobar si hubo un error al cargar los datos para identificar de forma sencilla los bugs
    .catch(err => {
      console.error("Error al cargar datos:", err);
      this.shadowRoot.querySelector('#title').textContent = "Error al cargar";
      this.shadowRoot.querySelector('#text').textContent = "-";
    });
  }

  // cargar los datos que tengan "d", en realidad puede ser cualqueir valro pero se escogio este porque es la sigla de data y es mas facil reconocerlo.
  set data(d) {
    // los carga a traves del id con el query selector
    this.shadowRoot.querySelector('#title').textContent = d.title;
    this.shadowRoot.querySelector('#text').textContent = d.text;
    // establece el atributo filtro para poder agarrar el nombre clave del cual se van a basar todo los datos
  }
}
customElements.define('dashboard-card', Dashboard);


// componente de los cursos en proceso
class MyEnrolledCourses extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const templateMyEnrolledCourses = /* HTML */`
      <style>
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
        .imagen{
          position: relative;
          height: 10rem;
        }
        .imagen img{
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
          background-color: #2980b9; 
          transform: translateY(-2px);
        }
      </style>
      <section>
        <div class="imagen" id="imagen">
          <img src="" alt="Imagen curso">
        </div>
        <div class="progress-indicator">
          <div class="progress-bar"></div>
        </div>
        <main>
          <div class="course-info">
            <h3 class="title">[Nombre del curso]</h3>
            <p class="trainer">[trainer o profesor]</p>
          </div>
          <div class="progress-course">
            <div class="progress-stats">
              <div class="progress-percentage">% complete</div>
              <div class="progress-lessons">/20</div>
            </div>
            <button type="button" class="btn-MRC-card">Continue Learning</button>
          </div>
        </main>
      </section>
    `;

    this.shadowRoot.innerHTML = templateMyEnrolledCourses;
  }
  connectedCallback() {
    const filtro = this.getAttribute("filtro");
    fetch('http://localhost:3000/dashboard')
    .then(res => res.json())
    // convierte el formato JSON en un objeto para js, obtiene el valor de filtro y se convierte a minusculas y se les quita lso espacios para poder trabajar de forma sencilla con ellos 
    .then(data => {
      // en este caso se tiene que hacer con data[0] ya que se está recorriendo un array con un objeto
      const dashboardData = data[0];

      // obtiene el valor de filtro y lo edita para trabajar con el.
      if (dashboardData && dashboardData[filtro]) {
        // Busca la carta cuyo nombre incluya el filtro
        // se accede al array de un solo objeto
        const [info] = dashboardData[filtro]; 
        this.data = info;
      } else {
        // en caso de que la carta no exista se muestran los valoes 
        this.shadowRoot.querySelector('#imagen').textContent = "imagen no encontrada";
        this.shadowRoot.querySelector('#title').textContent = "titulo no encontrado";
        this.shadowRoot.querySelector('#trainer').textContent = "trainer no encontrado";
        this.shadowRoot.querySelector('#lessons').textContent = "-";
      }
    })
    // esto se hace para comprobar si hubo un error al cargar los datos para identificar de forma sencilla los bugs
    .catch(err => {
      console.error("Error al cargar datos:", err);
      this.shadowRoot.querySelector('#imagen').textContent = "error imagen";
      this.shadowRoot.querySelector('#title').textContent = "error titulo";
      this.shadowRoot.querySelector('#trainer').textContent = "error trainer";
      this.shadowRoot.querySelector('#lessons').textContent = "error lessons";
    });
  }

  // cargar los datos que tengan "d", en realidad puede ser cualqueir valro pero se escogio este porque es la sigla de data y es mas facil reconocerlo.
  set data(d) {
    // los carga a traves del id con el query selector
    const title = this.shadowRoot.querySelector('.title');
    const trainer = this.shadowRoot.querySelector('.trainer');
    const lessonsText = this.shadowRoot.querySelector('.progress-lessons');
    const percentageText = this.shadowRoot.querySelector('.progress-percentage');
    const progressBar = this.shadowRoot.querySelector('.progress-bar');
    const imagen = this.shadowRoot.querySelector('.imagen img');

    // constante de la cantidad total de lecciones 
    const totalLessons = 20;
    // parseint para pasar de string a entero
    const completedLessons = parseInt(d.lessons);
    // esta es la operacion matematica para poder calcular el progeso y el width de la barra de progeso con las lecciones que ha realizadoe el usuario con el fin de hacerlo dinamico 
    const percentage = Math.round((completedLessons / totalLessons) * 100);
    title.textContent = d.title;
    trainer.textContent = d.trainer;
    lessonsText.textContent = `${completedLessons}/${totalLessons} Lessons`;
    percentageText.textContent = `${percentage}% Complete`;
    progressBar.style.width = `${percentage}%`;

    imagen.src = d.imagen;
    imagen.alt = `Imagen del curso ${d.title}`;
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