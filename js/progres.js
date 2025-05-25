const progressData = {
  progress: [
    {
      title: "Web Development",
      percentage: 80,
      modalId: "modal1",
      image: "../assets/node.js-development.png",
      topics: [
        { title: "HTML Fundamentals", progress: 100 ,description: "Basic structure, elements, and semantic markup"},
        { title: "CSS Styling", progress: 100,description: "Selectors, properties, layouts, and responsive design" },
        { title: "JavaScript Basics", progress: 100,description: "Variables, functions, DOM manipulation" },
        { title: "Fronetend Frameworks", progress: 110,description: "Introduction to modern frameworks and libraries" }
      ]
    },
    {
      title: "Data Science",
      percentage: 60,
      modalId: "modal2",
      image: "../assets/image.webp",
      topics: [
        { title: "Python Programming", progress: 90 ,description: "Basic syntax, data structures, and functions"},
        { title: "Data Analysis", progress: 70 ,description: "Working with pandas and numpy"},
        { title: "Machine Learning", progress: 45,description: "Basic algorithms and model training" },
        { title: "Data Visualization", progress: 35,description: "Creating charts and interactive visualizations" }
      ]
    },
    {
      title: "Mobile Development",
      percentage: 45,
      modalId: "modal3",
      image: "../assets/pexels-photo-1092644.jpeg",
      topics: [
        { title: "HMobile UI Design", progress: 80,description: "Principles of mobile interface design" },
        { title: "JavaScrReact Native Basicsipt", progress: 55,description: "Components, navigation, and state management" },
        { title: "Native APIs", progress: 30 ,description: "Camera, location, and device features"},
        { title: "App Publishing", progress: 15,description: "Preparing and deploying to app stores" }
      ]
    },
    {
      title: "Cloud Computing",
      percentage: 30,
      modalId: "modal4",
      image: "../assets/imagen2.png",
      topics: [
        { title: "Cloud Fundamentals", progress: 100,description: "Basic concepts and service models" },
        { title: "AWS Services", progress: 40,description: "EC2, S3, and core AWS services" },
        { title: "Cloud Security", progress: 25,description: "Security best practices and implementation" },
        { title: "Serverless Computing", progress: 15,description: "Lambda functions and serverless architecture" }
      ]
    }

  ]
};

function generateProgressSection(data) {
  const cardsHTML = data.progress.map(item => `
    <div class="card">
      <h4>${item.title}</h4>
      <progress class="progress-bar" value="${item.percentage}" max="100">${item.percentage}%</progress>
      <h5>${item.percentage}% Complete</h5>
      <button class="blue-text-btn" onclick="openModal('${item.modalId}')">Click to view topics→</button>
    </div>
  `).join('');

  const modalsHTML = data.progress.map(item => `
    <div id="${item.modalId}" class="modal" style="display:none;">
      <div class="modal-content">
        <div class="superior" style="background-image: url('${item.image}');">
          <div class="contenedor-imagen">
            <h2>${item.title}</h2>
            <span class="close-btn" onclick="closeModal('${item.modalId}')">✖</span>
            <div class="barras">
              <progress class="barra" value="${item.percentage}" max="100">${item.percentage}%</progress>
              <h5>${item.percentage}% Complete</h5>
            </div>
          </div>
        </div>
        ${item.topics.map(topic => `
          <div class="progress-section">
            <h3 class="titulo-modal">${topic.title}</h3>
            <p class="descripcion-topic">${topic.description || ''}</p>
            <div class="contenido"><progress value="${topic.progress}" max="100">${topic.progress}%</progress>
            <h5>${topic.progress}% Complete</h5></div>
            <hr>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  return `
    <section class="Web-component">
      <header><h1 class="titulo">Learning Progress</h1></header>
      <div class="card-containerpro">
        ${cardsHTML}
      </div>
      ${modalsHTML}
    </section>
  `;
}

function openModal(modalId) {
  document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}
function nav(page) {
  const content = document.getElementById('main');
  if (page === 'progreso') {
    content.innerHTML = generateProgressSection(progressData);
  } else {
    content.innerHTML = '<h1>Página no encontrada</h1>';
  }
}
