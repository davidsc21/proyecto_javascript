
/* datos estaticos de la pagina de cursos y que no se encuentran en el json server: 

pagina courses principal: todos los datos de las cartas dependen del json server, ninguno es fijo.

modal "Enroll now": 
- boton sin funcionalidad de enrolled ("enrolled": "250+ enrolled"). 

- Div del course instructor (👨‍🏫, course instructor, Dr. John Smith). 

- El contenido del course overview es exactamente el mismo que de la descripcion.

- El div de la carta de precio, todos los datos son fijos "precio": "$99.99",
      "servicio": "One-time payment",
      "garantia": [
        "✓ Lifetime access",
        "✓ Certificate of completion",
        "✓ 30-day money-back guarantee",
        "✓ Direct instructor support"
      ]).
    <button class="xxxx">start learning</button>

- El div de el course structure es estatico, sus 4 modulos tambien con su respectivo menu al hacer click. "estructuraCurso": [
        {
          "nombreModulo": "Module 1  Introduction to the Course",
          "temas": {
              "titulo1": "Course overview and objectives",
              "titulo2": "Setting up your development enviroment",
              "titulo3": "Understanding the course structure"
          }
        },
        {
          "nombreModulo": "Module 2  Fundamentals and Core Concepts",
          "temas": {
              "titulo1": "Basic principles and terminology",
              "titulo2": "Essential tools and frameworks",
              "titulo3": "Best practices and conventions"
          }
        },
        {
          "nombreModulo": "Module 3  Advanced Topics",
          "temas": {
              "titulo1": "Advanced techniques and patterns",
              "titulo2": "Performance optimization",
              "titulo3": "Real-world applications"
          }
        },
        {
          "nombreModulo": "Module 4  Project Work",
          "temas": {
              "titulo1": "Planning and requirements gathering",
              "titulo2": "Implementation and coding",
              "titulo3": "Testing and deployment"
          }
        }
      ]

Modal de al darle "start learning": Todo es estatico.

*/
const pages3 = {
    courses:`
    <section class="courses">
class CoursesPage extends HTMLElement{
  constructor() {
    super();
    this.attachShadow({mode:'open'})

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
  background: #f0f0f0; /* color del fondo del scroll */
  border-radius: 10px;
}

.card-back::-webkit-scrollbar-thumb {
  background-color: #888; /* color del thumb (la parte que se mueve) */
  border-radius: 10px;
  border: 2px solid #f0f0f0; /* opcional: agrega espacio entre el thumb y el track */
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

/* Responsivo para pantallas pequeñas: móviles */
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
     <section class="courses-section">
  <h1>Available Courses</h1>
  <h2>Video Games</h2>
  <div class="courses-container">
    <div class="courses-card">
      <div class="flip-inner">
        <!-- FRONT -->
        <div class="card-front">
          <div class="card-img" style="background-image: url('/assets/courses/img1.jpeg');">
            <span class="level-tag">Intermediate</span>
            <span class="duration-tag">⏱ 12 weeks</span>
          </div>
          <div class="card-content">
            <h3>Unity Game Development</h3>
            <p>
              Create immersive 3D games with Unity. Learn C# programming,
              game physics, and professional game development...
            </p>
            <div class="card-buttons">
              <button class="enroll-btn">Enroll Now</button>
              <button class="info-btn">More Info</button>
            </div>
          </div>
        </div>

        <!-- BACK -->
        <div class="card-back">
          <div class="card-content">
            <h2>Prerequisites</h2>
            <p>Basic programming knowledge in any language. Understanding of 3D geometry is helpful but not required.</p>
            <h2>What You'll Learn</h2>
            <p>Build complete 3D games, master C# programming, implement game physics, create engaging UI systems, and optimize game performance.</p>
            <h2>Course Structure</h2>
            <p>24 interactive lessons, 12 hands-on projects, 4 major game development assignments, and a final capstone project..</p>
            <button class="flip-btn">Close</button>
          </div>
        </div>
      </div>
    </div>
  
 <div class="courses-card">
      <div class="flip-inner">
        <!-- FRONT -->
        <div class="card-front">
          <div class="card-img" style="background-image: url('/assets/courses/img2.jpeg');">
            <span class="level-tag">Intermediate</span>
            <span class="duration-tag">⏱ 12 weeks</span>
          </div>
          <div class="card-content">
            <h3>Unity Game Development</h3>
            <p>
              Create immersive 3D games with Unity. Learn C# programming,
              game physics, and professional game development...
            </p>
            <div class="card-buttons">
              <button class="enroll-btn">Enroll Now</button>
              <button class="info-btn">More Info</button>
            </div>
          </div>
        </div>

        <!-- BACK -->
        <div class="card-back">
          <div class="card-content">
            <h2>Prerequisites</h2>
            <p>Basic programming knowledge in any language. Understanding of 3D geometry is helpful but not required.</p>
            <h2>What You'll Learn</h2>
            <p>Build complete 3D games, master C# programming, implement game physics, create engaging UI systems, and optimize game performance.</p>
            <h2>Course Structure</h2>
            <p>24 interactive lessons, 12 hands-on projects, 4 major game development assignments, and a final capstone project..</p>
            <button class="flip-btn">Close</button>
          </div>
        </div>
      </div>
    </div>


 <div class="courses-card">
      <div class="flip-inner">
        <!-- FRONT -->
        <div class="card-front">
          <div class="card-img" style="background-image: url('/assets/courses/img3.jpeg');">
            <span class="level-tag">Intermediate</span>
            <span class="duration-tag">⏱ 12 weeks</span>
          </div>
          <div class="card-content">
            <h3>Unity Game Development</h3>
            <p>
              Create immersive 3D games with Unity. Learn C# programming,
              game physics, and professional game development...
            </p>
            <div class="card-buttons">
              <button class="enroll-btn">Enroll Now</button>
              <button class="info-btn">More Info</button>
            </div>
          </div>
        </div>

        <!-- BACK -->
        <div class="card-back">
          <div class="card-content">
             <h2>Prerequisites</h2>
            <p>Basic programming knowledge in any language. Understanding of 3D geometry is helpful but not required.</p>
            <h2>What You'll Learn</h2>
            <p>Build complete 3D games, master C# programming, implement game physics, create engaging UI systems, and optimize game performance.</p>
            <h2>Course Structure</h2>
            <p>24 interactive lessons, 12 hands-on projects, 4 major game development assignments, and a final capstone project..</p>
            <button class="flip-btn">Close</button>
          </div>
        </div>
      </div>
    </div>




</div>
</section>

  <section class="courses-section">
  <h2>Video Games</h2>
  <div class="courses-container">
    <div class="courses-card">
      <div class="flip-inner">
        <!-- FRONT -->
        <div class="card-front">
          <div class="card-img" style="background-image: url('/assets/courses/img4.jpeg');">
            <span class="level-tag">Intermediate</span>
            <span class="duration-tag">⏱ 12 weeks</span>
          </div>
          <div class="card-content">
            <h3>Unity Game Development</h3>
            <p>
              Create immersive 3D games with Unity. Learn C# programming,
              game physics, and professional game development...
            </p>
            <div class="card-buttons">
              <button class="enroll-btn">Enroll Now</button>
              <button class="info-btn">More Info</button>
            </div>
          </div>
        </div>

        <!-- BACK -->
        <div class="card-back">
          <div class="card-content">
            <h2>Prerequisites</h2>
            <p>Basic programming knowledge in any language. Understanding of 3D geometry is helpful but not required.</p>
            <h2>What You'll Learn</h2>
            <p>Build complete 3D games, master C# programming, implement game physics, create engaging UI systems, and optimize game performance.</p>
            <h2>Course Structure</h2>
            <p>24 interactive lessons, 12 hands-on projects, 4 major game development assignments, and a final capstone project..</p>
            <button class="flip-btn">Close</button>
          </div>
        </div>
      </div>
    </div>
  
 <div class="courses-card">
      <div class="flip-inner">
        <!-- FRONT -->
        <div class="card-front">
          <div class="card-img" style="background-image: url('/assets/courses/img5.jpeg');">
            <span class="level-tag">Intermediate</span>
            <span class="duration-tag">⏱ 12 weeks</span>
          </div>
          <div class="card-content">
            <h3>Unity Game Development</h3>
            <p>
              Create immersive 3D games with Unity. Learn C# programming,
              game physics, and professional game development...
            </p>
            <div class="card-buttons">
              <button class="enroll-btn">Enroll Now</button>
              <button class="info-btn">More Info</button>
            </div>
          </div>
        </div>

        <!-- BACK -->
        <div class="card-back">
          <div class="card-content">
            <h4>Prerequisites</h4>
             <h2>Prerequisites</h2>
            <p>Basic programming knowledge in any language. Understanding of 3D geometry is helpful but not required.</p>
            <h2>What You'll Learn</h2>
            <p>Build complete 3D games, master C# programming, implement game physics, create engaging UI systems, and optimize game performance.</p>
            <h2>Course Structure</h2>
            <p>24 interactive lessons, 12 hands-on projects, 4 major game development assignments, and a final capstone project..</p>
            <button class="flip-btn">Close</button>
          </div>
        </div>
      </div>
    </div>


 <div class="courses-card">
      <div class="flip-inner">
        <!-- FRONT -->
        <div class="card-front">
          <div class="card-img" style="background-image: url('/assets/courses/img6.jpg');">
            <span class="level-tag">Intermediate</span>
            <span class="duration-tag">⏱ 12 weeks</span>
          </div>
          <div class="card-content">
            <h3>Unity Game Development</h3>
            <p>
              Create immersive 3D games with Unity. Learn C# programming,
              game physics, and professional game development...
            </p>
            <div class="card-buttons">
              <button class="enroll-btn">Enroll Now</button>
              <button class="info-btn">More Info</button>
            </div>
          </div>
        </div>

        <!-- BACK -->
        <div class="card-back">
          <div class="card-content">
             <h2>Prerequisites</h2>
            <p>Basic programming knowledge in any language. Understanding of 3D geometry is helpful but not required.</p>
            <h2>What You'll Learn</h2>
            <p>Build complete 3D games, master C# programming, implement game physics, create engaging UI systems, and optimize game performance.</p>
            <h2>Course Structure</h2>
            <p>24 interactive lessons, 12 hands-on projects, 4 major game development assignments, and a final capstone project..</p>
            <button class="flip-btn">Close</button>
          </div>
        </div>
      </div>
    </div>




</div>
</section>


  <section class="courses-section">
  <h2>Video Games</h2>
  <div class="courses-container">
    <div class="courses-card">
      <div class="flip-inner">
        <!-- FRONT -->
        <div class="card-front">
          <div class="card-img" style="background-image: url('/assets/courses/img7.jpeg');">
            <span class="level-tag">Intermediate</span>
            <span class="duration-tag">⏱ 12 weeks</span>
          </div>
          <div class="card-content">
            <h3>Unity Game Development</h3>
            <p>
              Create immersive 3D games with Unity. Learn C# programming,
              game physics, and professional game development...
            </p>
            <div class="card-buttons">
              <button class="enroll-btn">Enroll Now</button>
              <button class="info-btn">More Info</button>
            </div>
          </div>
        </div>

        <!-- BACK -->
        <div class="card-back">
          <div class="card-content">
             <h2>Prerequisites</h2>
            <p>Basic programming knowledge in any language. Understanding of 3D geometry is helpful but not required.</p>
            <h2>What You'll Learn</h2>
            <p>Build complete 3D games, master C# programming, implement game physics, create engaging UI systems, and optimize game performance.</p>
            <h2>Course Structure</h2>
            <p>24 interactive lessons, 12 hands-on projects, 4 major game development assignments, and a final capstone project..</p>
            <button class="flip-btn">Close</button>
          </div>
        </div>
      </div>
    </div>
  
 <div class="courses-card">
      <div class="flip-inner">
        <!-- FRONT -->
        <div class="card-front">
          <div class="card-img" style="background-image: url('/assets/courses/img11.jpeg');">
            <span class="level-tag">Intermediate</span>
            <span class="duration-tag">⏱ 12 weeks</span>
          </div>
          <div class="card-content">
            <h3>Unity Game Development</h3>
            <p>
              Create immersive 3D games with Unity. Learn C# programming,
              game physics, and professional game development...
            </p>
            <div class="card-buttons">
              <button class="enroll-btn">Enroll Now</button>
              <button class="info-btn">More Info</button>
            </div>
          </div>
        </div>

        <!-- BACK -->
        <div class="card-back">
          <div class="card-content">
            <h2>Prerequisites</h2>
            <p>Basic programming knowledge in any language. Understanding of 3D geometry is helpful but not required.</p>
            <h2>What You'll Learn</h2>
            <p>Build complete 3D games, master C# programming, implement game physics, create engaging UI systems, and optimize game performance.</p>
            <h2>Course Structure</h2>
            <p>24 interactive lessons, 12 hands-on projects, 4 major game development assignments, and a final capstone project..</p>
            <button class="flip-btn">Close</button>
          </div>
        </div>
      </div>
    </div>


 <div class="courses-card">
      <div class="flip-inner">
        <!-- FRONT -->
        <div class="card-front">
          <div class="card-img" style="background-image: url('/assets/courses/img8.jpeg');">
            <span class="level-tag">Intermediate</span>
            <span class="duration-tag">⏱ 12 weeks</span>
          </div>
          <div class="card-content">
            <h3>Unity Game Development</h3>
            <p>
              Create immersive 3D games with Unity. Learn C# programming,
              game physics, and professional game development...
            </p>
            <div class="card-buttons">
              <button class="enroll-btn">Enroll Now</button>
              <button class="info-btn">More Info</button>
            </div>
          </div>
        </div>

        <!-- BACK -->
        <div class="card-back">
          <div class="card-content">
             <h2>Prerequisites</h2>
            <p>Basic programming knowledge in any language. Understanding of 3D geometry is helpful but not required.</p>
            <h2>What You'll Learn</h2>
            <p>Build complete 3D games, master C# programming, implement game physics, create engaging UI systems, and optimize game performance.</p>
            <h2>Course Structure</h2>
            <p>24 interactive lessons, 12 hands-on projects, 4 major game development assignments, and a final capstone project..</p>
            <button class="flip-btn">Close</button>
          </div>
        </div>
      </div>
    </div>




</div>
</section>


  <section class="courses-section">
  <h2>Video Games</h2>
  <div class="courses-container">
    <div class="courses-card">
      <div class="flip-inner">
        <!-- FRONT -->
        <div class="card-front">
          <div class="card-img" style="background-image: url('/assets/courses/img9.jpeg');">
            <span class="level-tag">Intermediate</span>
            <span class="duration-tag">⏱ 12 weeks</span>
          </div>
          <div class="card-content">
            <h3>Unity Game Development</h3>
            <p>
              Create immersive 3D games with Unity. Learn C# programming,
              game physics, and professional game development...
            </p>
            <div class="card-buttons">
              <button class="enroll-btn">Enroll Now</button>
              <button class="info-btn">More Info</button>
            </div>
          </div>
        </div>

        <!-- BACK -->
        <div class="card-back">
          <div class="card-content">
            <h2>Prerequisites</h2>
            <p>Basic programming knowledge in any language. Understanding of 3D geometry is helpful but not required.</p>
            <h2>What You'll Learn</h2>
            <p>Build complete 3D games, master C# programming, implement game physics, create engaging UI systems, and optimize game performance.</p>
            <h2>Course Structure</h2>
            <p>24 interactive lessons, 12 hands-on projects, 4 major game development assignments, and a final capstone project..</p>
            <button class="flip-btn">Close</button>
          </div>
        </div>
      </div>
    </div>
  
 <div class="courses-card">
      <div class="flip-inner">
        <!-- FRONT -->
        <div class="card-front">
          <div class="card-img" style="background-image: url('/assets/courses/img12.jpeg');">
            <span class="level-tag">Intermediate</span>
            <span class="duration-tag">⏱ 12 weeks</span>
          </div>
          <div class="card-content">
            <h3>Unity Game Development</h3>
            <p>
              Create immersive 3D games with Unity. Learn C# programming,
              game physics, and professional game development...
            </p>
            <div class="card-buttons">
              <button class="enroll-btn">Enroll Now</button>
              <button class="info-btn">More Info</button>
            </div>
          </div>
        </div>

        <!-- BACK -->
        <div class="card-back">
          <div class="card-content">
            <h2>Prerequisites</h2>
            <p>Basic programming knowledge in any language. Understanding of 3D geometry is helpful but not required.</p>
            <h2>What You'll Learn</h2>
            <p>Build complete 3D games, master C# programming, implement game physics, create engaging UI systems, and optimize game performance.</p>
            <h2>Course Structure</h2>
            <p>24 interactive lessons, 12 hands-on projects, 4 major game development assignments, and a final capstone project..</p>
            <button class="flip-btn">Close</button>
          </div>
        </div>
      </div>
    </div>


 <div class="courses-card">
      <div class="flip-inner">
        <!-- FRONT -->
        <div class="card-front">
          <div class="card-img" style="background-image: url('/assets/courses/img10.jpeg');">
            <span class="level-tag">Intermediate</span>
            <span class="duration-tag">⏱ 12 weeks</span>
          </div>
          <div class="card-content">
            <h3>Unity Game Development</h3>
            <p>
              Create immersive 3D games with Unity. Learn C# programming,
              game physics, and professional game development...
            </p>
            <div class="card-buttons">
              <button class="enroll-btn">Enroll Now</button>
              <button class="info-btn">More Info</button>
            </div>
          </div>
        </div>

        <!-- BACK -->
        <div class="card-back">
          <div class="card-content">
             <h2>Prerequisites</h2>
            <p>Basic programming knowledge in any language. Understanding of 3D geometry is helpful but not required.</p>
            <h2>What You'll Learn</h2>
            <p>Build complete 3D games, master C# programming, implement game physics, create engaging UI systems, and optimize game performance.</p>
            <h2>Course Structure</h2>
            <p>24 interactive lessons, 12 hands-on projects, 4 major game development assignments, and a final capstone project..</p>
            <button class="flip-btn">Close</button>
          </div>
        </div>
      </div>
    </div>




</div>
</section>
    
    
    
    </section>
     
     
     
     ` 
    

  }
 connectedCallback(){
this.shadowRoot.addEventListener('click', (e) => {
  const card = e.target.closest('.courses-card');
  if (!card) return;

  if(e.target.classList.contains('info-btn')){
    card.classList.add('flipped')

  } else if (e.target.classList.contains('flip-btn')){
    e.stopPropagation();
    card.classList.remove('flipped')
  }
  



 }
)}

}
customElements.define('courses-page', CoursesPage)






const pages3 = {
    courses:`
    <courses-page></courses-page>
    `,

}
function courses(page3){
    const content = document.getElementById('main')
    content.appendChild
    content.innerHTML = pages3[page3] || '<h1>pagina no en contrada</h1>'
}