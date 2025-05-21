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
    
    
    `,

}
function courses(page3){
    const content = document.getElementById('main')
    content.textContent= `
    document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.courses-card');

  cards.forEach(card => {
    const moreInfoBtn = card.querySelector('.info-btn');
    const closeBtn = card.querySelector('.flip-btn');

    moreInfoBtn.addEventListener('click', () => {
      card.classList.add('flipped');
    });

    closeBtn.addEventListener('click', () => {
      card.classList.remove('flipped');
    });
  });
});

    
    `
    content.appendChild
    content.innerHTML = pages3[page3] || '<h1>pagina no en contrada</h1>'
}