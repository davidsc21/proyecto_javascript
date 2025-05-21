const pagess = {
  progreso: `
    <section class="Web-component">
      <header>
        <h1 class"titulo">Learning Progress</h1>
      </header>
      <body>
        <div class="card-container">
          <div class="card">
            <h4>Web Development</h4>
            <progress class="progress-bar" value="60" max="100">60%</progress>
            <h5>80% Complete</h5>
            <button class="blue-text-btn" onclick="openModal('modal1')">Clic to view topics → </button>
          </div>
          <div class="card">
            <h4>Data Science</h4>
            <progress class="progress-bar" value="40" max="100">40%</progress>
            <h5>60% Complete</h5>
            <button class="blue-text-btn" onclick="openModal('modal2')">Clic to view topics → </button>
          </div>
          <div class="card">
            <h4>Mobile Development</h4>
            <progress class="progress-bar" value="80" max="100">80%</progress>
            <h5>45% Complete</h5>
            <button class="blue-text-btn" onclick="openModal('modal3')">Clic to view topics → </button>
          </div>
          <div class="card">
            <h4>Cloud Computing</h4>
            <progress class="progress-bar" value="20" max="100">20%</progress>
            <h5>30% Complete</h5>
            <button class="blue-text-btn"onclick="openModal('modal4')">Clic to view topics → </button>
          </div>
        </div>
      <!-- Modal -->
      <div id="modal1" class="modal">
    <div class="modal-content">
        <div class="superior">
            <img id="imagen-detail" src="assets/mode.js-development.png" alt="Desarrollo Web">
            <div class"contenido-imagen">
              <h2>Web Development</h2>
                <span class="close-btn" onclick="closeModal('modal1')">✖</span>
                <progress value="80" max="100">80%</progress><h5 class"porciento">45% Complete</h5>
            </div>
              
        </div>
        <div class="progress-section">
            <h3>HTML & CSS</h3>
            <h5>Basic structure, elements, and semantic markup</h5>
            <progress value="80" max="100">80%</progress>
            <h5>45% Complete</h5>
        </div>
        <div class="progress-section">
            <h3>JavaScript</h3>
            <h5>Basic structure, elements, and semantic markup</h5>
            <progress value="60" max="100">60%</progress>
            <h5>45% Complete</h5>
        </div>
        <div class="progress-section">
            <h3>React</h3>
            <h5>Basic structure, elements, and semantic markup</h5>
            <progress value="40" max="100">40%</progress>
            <h5>45% Complete</h5>
        </div>
        <div class="progress-section">
            <h3>Node.js</h3>
            <h5>Basic structure, elements, and semantic markup</h5>
            <progress value="20" max="100">20%</progress>
            <h5>45% Complete</h5>
        </div>
    </div>
</div>
      <!-- Modal -->
      <div id="modal2" class="modal">
        <div class="modal-content">
          <span class="close-btn" onclick="closeModal('modal2')">✖</span>
          <h2>Web Development</h2>
          <progress value="80" max="100">80%</progress>
          <h5>45% Complete</h5>
          <div class="progress-section">
            <h3>HTML & CSS</h3>
            <h5>Basic structure, elements, and semantic markup</h5>
            <progress value="80" max="100">80%</progress>
            <h5>45% Complete</h5>
          </div>
          <div class="progress-section">
            <h3>JavaScript</h3>
            <h5>Basic structure, elements, and semantic markup</h5>
            <progress value="60" max="100">60%</progress>
            <h5>45% Complete</h5>
          </div>
          <div class="progress-section">
            <h3>React</h3>
            <h5>Basic structure, elements, and semantic markup</h5>
            <progress value="40" max="100">40%</progress>
            <h5>45% Complete</h5>
          </div>
          <div class="progress-section">
            <h3>Node.js</h3>
            <h5>Basic structure, elements, and semantic markup</h5>
            <progress value="20" max="100">20%</progress>
            <h5>45% Complete</h5>
          </div>
        </div>
      </div>
      <!-- Modal -->
      <div id="modal3" class="modal">
        <div class="modal-content">
          <span class="close-btn" onclick="closeModal('modal3')">✖</span>
          <h2>Web Development</h2>
          <progress value="80" max="100">80%</progress>
          <h5>45% Complete</h5>
          <div class="progress-section">
            <h3>HTML & CSS</h3>
            <h5>Basic structure, elements, and semantic markup</h5>
            <progress value="80" max="100">80%</progress>
            <h5>45% Complete</h5>
          </div>
          <div class="progress-section">
            <h3>JavaScript</h3>
            <h5>Basic structure, elements, and semantic markup</h5>
            <progress value="60" max="100">60%</progress>
            <h5>45% Complete</h5>
          </div>
          <div class="progress-section">
            <h3>React</h3>
            <h5>Basic structure, elements, and semantic markup</h5>
            <progress value="40" max="100">40%</progress>
            <h5>45% Complete</h5>
          </div>
          <div class="progress-section">
            <h3>Node.js</h3>
            <h5>Basic structure, elements, and semantic markup</h5>
            <progress value="20" max="100">20%</progress>
            <h5>45% Complete</h5>
          </div>
        </div>
      </div>
      <!-- Modal -->
      <div id="modal4" class="modal">
        <div class="modal-content">
          <span class="close-btn" onclick="closeModal('modal4')">✖</span>
          <h2>Web Development</h2>
          <progress value="80" max="100">80%</progress>
          <h5>45% Complete</h5>
          <div class="progress-section">
            <h3>HTML & CSS</h3>
            <h5>Basic structure, elements, and semantic markup</h5>
            <progress value="80" max="100">80%</progress>
            <h5>45% Complete</h5>
          </div>
          <div class="progress-section">
            <h3>JavaScript</h3>
            <h5>Basic structure, elements, and semantic markup</h5>
            <progress value="60" max="100">60%</progress>
            <h5>45% Complete</h5>
          </div>
          <div class="progress-section">
            <h3>React</h3>
            <h5>Basic structure, elements, and semantic markup</h5>
            <progress value="40" max="100">40%</progress>
            <h5>45% Complete</h5>
          </div>
          <div class="progress-section">
            <h3>Node.js</h3>
            <h5>Basic structure, elements, and semantic markup</h5>
            <progress value="20" max="100">20%</progress>
            <h5>45% Complete</h5>
          </div>
        </div>
      </div>

      </body>
    </section>
  `,
};

function nav(page) {
  const content = document.getElementById('main');
  content.innerHTML = pagess[page] || '<h1>Página no encontrada</h1>';
}

function openModal(modalId) {
  document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}