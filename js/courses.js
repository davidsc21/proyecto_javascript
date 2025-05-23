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
              <button class="enroll-btn" onclick="money('money')">Enroll Now</button>
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
              <button class="enroll-btn" onclick="money('money')">Enroll Now</button>
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
              <button class="enroll-btn" onclick="money('money')">Enroll Now</button>
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
              <button class="enroll-btn" onclick="money('money')">Enroll Now</button>
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
              <button class="enroll-btn" onclick="money('money')">Enroll Now</button>
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
              <button class="enroll-btn" onclick="money('money')">Enroll Now</button>
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
              <button class="enroll-btn" onclick="money('money')">Enroll Now</button>
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
              <button class="enroll-btn" onclick="money('money')">Enroll Now</button>
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
              <button class="enroll-btn" onclick="money('money')">Enroll Now</button>
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
              <button class="enroll-btn" onclick="money('money')">Enroll Now</button>
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
              <button class="enroll-btn" onclick="money('money')">Enroll Now</button>
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
              <button class="enroll-btn" onclick="money('money')">Enroll Now</button>
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


class MoneyCourses extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode:'open'})
    this.shadowRoot.innerHTML =`
  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: 'Inter', sans-serif;
      background-color: #f4f5f7;
      color: #1f2937;
    }

    .container {
      max-width: 1100px;
      margin: auto;
      padding: 2rem 1rem;
    }

    a.back-link {
      color: #3b82f6;
      text-decoration: none;
      font-size: 0.9rem;
      display: inline-block;
      margin-bottom: 1rem;
      padding:1rem 1rem;
      cursor:pointer;
    }

    .header-card {
      position: relative;
      border-radius: 1rem;
      overflow: hidden;
      color: white;
    }

    .header-card img {
      width:100%;
      height: 300px;
      display: block;
      object-fit: cover;
    }

    .header-content {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 2rem;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6));
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .header-title {
      font-size: 2.2rem;
      font-weight: 700;
    }

    .badges {
      display: flex;
      gap: 0.75rem;
      margin-top: 0.75rem;
    }

    .badge {
      background-color: rgba(255, 255, 255, 0.2);
      padding: 0.4rem 0.8rem;
      border-radius: 9999px;
      font-size: 0.8rem;
      display: flex;
      align-items: center;
    }

    .header-description {
      margin-top: 1rem;
      font-size: 0.9rem;
    }

    .instructor {
      display: flex;
      align-items: center;
      margin-top: 1.5rem;
    }

    .instructor img {
      width: 48px;
      height: 48px;
      border-radius: 9999px;
      margin-right: 0.75rem;
    }

    .card-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 1.5rem;
      margin-top: 2rem;
    }

   .side-card {
      background-color: white;
      border-radius: 1rem;
      padding: 1.5rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      height: 350px;
      
    }
    .card{
       background-color: white;
      border-radius: 1rem;
      padding: 1.5rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    
      

    }

    .card h2 {
      margin-top: 0;
      font-size: 1.5rem;
    }

    .side-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .price {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    .features {
      list-style: none;
      padding: 0;
      text-align: left;
      line-height: 1.8;
      margin: 1rem 0;
    }

    .features li::before {
      content: "✓";
      color: green;
      margin-right: 0.5rem;
    }

    .button {
      flex: 1;
      padding: 1rem 6rem;
      font-size: 0.9rem;
      border-radius: 24px;
      cursor: pointer;
      background-color:  #3498db;
      border: 2px solid #3498db;
      color:white;
       transition: 0.3s ease;
    }

    #card{
        height: 150px;
    }
    .container2 {
      background-color: white;
      max-width: 700px;
      margin: auto;
      padding: 30px;
      border-radius: 20px;
      border:none;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
    }

    h2 {
      font-size: 32px;
      color: #1f2937;
      margin-bottom: 25px;
    }

    .module {
      background-color: #f9fafb;
      border-radius: 12px;
      margin-bottom: 16px;
      padding: 20px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .module:hover {
      background-color: #f1f5f9;
    }

    .module-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      font-weight: 500;
    }

    .module-header .title {
      display: flex;
      gap: 8px;
    }

    .module-header .title span {
      color: #3b82f6;
      font-weight: 600;
    }

    .toggle-icon {
      font-size: 20px;
      color: #6b7280;
    }

    .module-content {
      margin-top: 15px;
      padding-left: 20px;
      display: none;
      animation: fadeIn 0.3s ease;
    }

    .module-content p {
      margin: 8px 0;
      font-size: 15px;
      color: #374151;
      border-top: 1px solid #e5e7eb;
      padding-top: 10px;
    }

    .active .module-content {
      display: block;
    }

    .active .toggle-icon {
      transform: rotate(180deg);
    }

    @keyframes fadeIn {
      from {opacity: 0;}
      to {opacity: 1;}
    }

    @media (max-width: 768px) {
      .card-grid {
        grid-template-columns: 1fr;
      }
    }
  
  </style>

  <div class="container">
    <a class="back-link"  onclick="courses('courses')">← Back to Courses</a>

    <div class="header-card">
      <img src="/assets/courses/13.jpeg" alt="Course banner" />
      <div class="header-content">
        <div>
          <h1 class="header-title">Unity Game Development</h1>
          <div class="badges">
            <div class="badge">⏱ 12 weeks</div>
            <div class="badge">Intermediate</div>
            <div class="badge">250+ enrolled</div>
          </div>
          <p class="header-description">
            Create immersive 3D games with Unity. Learn C# programming, game physics, and professional game development workflows.
          </p>
        </div>
        <div class="instructor">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Instructor" />
          <div>
            <strong>Course Instructor</strong><br />
            Dr. John Smith
          </div>
        </div>
      </div>
    </div>

    <div class="card-grid">
      <div>
        <div class="cards">
          
          <div class="card">
             <h2>Course Overview</h2>
             <p>Create immersive 3D games with Unity. Learn C# programming, game physics, and professional game development workflows.</p>
          </div>
          <br>
          <div class="card">
            <h2>Prerequisites</h2>
            <p>Basic programming knowledge in any language</p>
            <p style="margin-top: 1rem; border-top: 1px solid #e5e7eb; padding-top: 1rem;">
              Understanding of 3D geometry is helpful but not required.
            </p>
          </div>
          <br>
          <div class="card">
            <h2>What You'll Learn</h2>
            <p>Basic programming knowledge in any language</p>
            <p style="margin-top: 1rem; border-top: 1px solid #e5e7eb; padding-top: 1rem;">
              Understanding of 3D geometry is helpful but not required.
            </p>
             <p style="margin-top: 1rem; border-top: 1px solid #e5e7eb; padding-top: 1rem;">
              Understanding of 3D geometry is helpful but not required.
            </p>
             <p style="margin-top: 1rem; border-top: 1px solid #e5e7eb; padding-top: 1rem;">
              Understanding of 3D geometry is helpful but not required.
            </p>
             <p style="margin-top: 1rem; border-top: 1px solid #e5e7eb; padding-top: 1rem;">
              Understanding of 3D geometry is helpful but not required.
            </p>
          </div>
          <br>
          <div class="card">
            <div class="conatiner2">
                  <h2>Course Structure</h2>

                  <div class="module">
                    <div class="module-header">
                      <div class="title"><span>Module 1</span> Introduction to the Course</div>
                      <div class="toggle-icon">+</div>
                    </div>
                    <div class="module-content">
                      <p>Course overview and objectives</p>
                      <p>Setting up your development environment</p>
                      <p>Understanding the course structure</p>
                    </div>
                  </div>

                  <div class="module">
                    <div class="module-header">
                      <div class="title"><span>Module 2</span> Fundamentals and Core Concepts</div>
                      <div class="toggle-icon">+</div>
                    </div>
                    <div class="module-content">
                      <p>Variables and Data Types</p>
                      <p>Control Structures</p>
                      <p>Object-Oriented Programming</p>
                    </div>
                  </div>

                  <div class="module">
                    <div class="module-header">
                      <div class="title"><span>Module 3</span> Advanced Topics</div>
                      <div class="toggle-icon">+</div>
                    </div>
                    <div class="module-content">
                      <p>Multithreading</p>
                      <p>Game Physics</p>
                      <p>AI Basics</p>
                    </div>
                  </div>

                  <div class="module">
                    <div class="module-header">
                      <div class="title"><span>Module 4</span> Project Work</div>
                      <div class="toggle-icon">+</div>
                    </div>
                    <div class="module-content">
                      <p>Project Planning</p>
                      <p>Development and Testing</p>
                      <p>Final Presentation</p>
                    </div>
                  </div>

                </div>
              </div>
            
          
          
        </div>
        
       
      </div>
      

      <div class="side-card">
        <div class="price">$99.99</div>
        <p>One-time payment</p>
        <ul class="features">
          <li>Lifetime access</li>
          <li>Certificate of completion</li>
          <li>30-day money-back guarantee</li>
          <li>Direct instructor support</li>
        </ul>
        <button class="button" onclick="video('video')">Start Learning</button>
      </div>

      
    </div>
    
  </div>


    
    `
  }
  connectedCallback(){
    this.shadowRoot.querySelectorAll('.module').forEach(module => {
    module.addEventListener('click', () => {
      module.classList.toggle('active');
      const icon = module.querySelector('.toggle-icon');
      icon.textContent = module.classList.contains('active') ? '-' : '+';
    });
  });

  }
}
customElements.define('money-course', MoneyCourses)

class VideoPage extends HTMLElement{
  constructor(){
    super()
    this.attachShadow({mode:'open'})

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
}

.topic.completed {
    background: #28a745;
    color: white;
}

.topic-item {
    padding: 10px;
    cursor: pointer;
    border-left: 5px solid transparent;
    background-color: #fff;
    transition: background-color 0.3s;
}

.topic:hover {
    background-color: #ccc;
}

.video-container {
    width: 100%;
    max-width: 650px;
    min-width: 450px;
    display: none;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
}

iframe {
    width: 100%;
    height: 400px;
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

.resource-links a {
    text-decoration: none;
    margin: 10px 0;
    color: #3b82f6;
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

    iframe {
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
         <a href="#" class="back-link">← Back to Courses</a>
    </div>
<div class="video">

    
    <div class="sidebar">
        <h1>Course Topic</h1>
        <p id="progress">0/4 completed</p>
        <ul class="topics" id="topicList"></ul>
        <p class="duration"></p>
    </div>
    <div class="main">
        <div id="defaultView">
            <h2>📺 Select a Topic to Start Learning</h2>
            <p>Choose a topic from the sidebar to begin watching the course content.</p>
        </div>
        <div class="video-container" id="videoView">
            <iframe id="videoFrame" frameborder="0" allowfullscreen></iframe>
            <div class="description">
                <h3 id="topicTitle"></h3>
                <p id="topicDescription"></p>
            </div>
                
            <div class="description-container">
                 <h2>Additional Resources</h2>
                <div class="resource-links">
                   
                    <a href="#">📄Course Syllabus</a>
                    <a href="#">📝Setup Instructions</a>
                </div>
            </div>
            
            
            <div class="navigation">
                <div class="barra"></div>
               <div class="buttons">
                <button id="prevBtn">&larr; Previous Topic</button>
                <button id="completeBtn" class="complete-btn">Mark as complate</button>
                <button id="nextBtn">Next Topic &rarr;</button>
               </div>
            </div>
        </div>
    </div>
    </div>
    

</div>
</div>
   
    
    `}
  connectedCallback(){
   
     const topics = [
      { title: "Introduction to the Course", duration: "10 min", video: "/assets/video/Rick Astley - Never Gonna Give You Up (Official Music Video).mp4", description: "Overview of what you will learn in this course and how to get the most out of it.",image: "279c7b0a-3b5e-43c5-80ea-a1fa39ad5f07.png", completed: false },
      { title: "Getting Started with Tools", duration: "15 min", video: "/assets/video/Rick Astley - Never Gonna Give You Up (Official Music Video).mp4", description: "Learn how to set up and use the tools required.",image: "279c7b0a-3b5e-43c5-80ea-a1fa39ad5f07.png", completed: false },
      { title: "Core Concepts", duration: "20 min", video: "/assets/video/Rick Astley - Never Gonna Give You Up (Official Music Video).mp4", description: "Understand the essential concepts you'll need.",image: "279c7b0a-3b5e-43c5-80ea-a1fa39ad5f07.png", completed: false },
      { title: "Advanced Techniques", duration: "25 min", video: "/assets/video/Rick Astley - Never Gonna Give You Up (Official Music Video).mp4", description: "Dive into advanced applications and techniques.",image: "279c7b0a-3b5e-43c5-80ea-a1fa39ad5f07.png", completed: false },
    ];
    
  const topicList = this.shadowRoot.getElementById("topicList");
  const progress = this.shadowRoot.getElementById("progress");
  const defaultView = this.shadowRoot.getElementById("defaultView");
  const videoView = this.shadowRoot.getElementById("videoView");
  const videoFrame = this.shadowRoot.getElementById("videoFrame");
  const topicTitle = this.shadowRoot.getElementById("topicTitle");
  const topicDescription = this.shadowRoot.getElementById("topicDescription");
  const completeBtn = this.shadowRoot.getElementById("completeBtn");
  const prevBtn = this.shadowRoot.getElementById("prevBtn");
  const nextBtn = this.shadowRoot.getElementById("nextBtn");

  let currentTopicIndex = null;

  function renderTopics() {
    topicList.innerHTML = "";
    topics.forEach((topic, index) => {
      const li = document.createElement("li");
      li.className = "topic";
      if (index === currentTopicIndex) li.classList.add("active");
      if (topic.completed) li.classList.add("completed");

      li.innerHTML = `${index + 1}.
      <div class="duration"> 
      <div>${topic.title}</div> 
      <div class="d-t">${topic.duration}</div>
      </div>`;

      li.onclick = () => selectTopic(index);
      topicList.appendChild(li);
    });

    const completedCount = topics.filter(t => t.completed).length;
    progress.textContent = `${completedCount}/${topics.length} completed`;
  }

  function selectTopic(index) {
    currentTopicIndex = index;
    const topic = topics[index];
    defaultView.style.display = "none";
    videoView.style.display = "flex";
    videoFrame.src = topic.video;
    topicTitle.textContent = topic.title;
    topicDescription.textContent = topic.description;
    completeBtn.textContent = topic.completed ? "Completed" : "Mark as Complete";
    completeBtn.classList.toggle("completed", topic);

    // Limpiar y marcar como activo
    this.shadowRoot.querySelectorAll('.topic').forEach(item => item.classList.remove('active'));
    this.shadowRoot.querySelectorAll('.topic')[index].classList.add('active');

    renderTopics();
  }

  completeBtn.onclick = () => {
    if (currentTopicIndex !== null) {
      const topic = topics[currentTopicIndex];
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
    if (currentTopicIndex < topics.length - 1) selectTopic(currentTopicIndex + 1);
  };

  renderTopics();
}
}
customElements.define('video-page', VideoPage)

const pages5 ={
  video:`
  <video-page></video-page>
  `
}
function video(page5){
  const content = document.getElementById('main')
  content.appendChild
  content.innerHTML= pages5[page5] || `pagina no encontrada`
}

const pages4 ={
  money:`
  <money-course></money-course>
  `
}
function money(page4){
  const content = document.getElementById('main')
  content.appendChild
  content.innerHTML = pages4[page4] || 'pagina no encontrada'
}
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