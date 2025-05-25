//diferentes paginas a usar (spa)//
const pages = {
    profile: `
        <div class="globalprofile">
            <div class="profilecontainer">
                <div class="profheader">
                    <div class="cover">
                    </div>
                    <div class="avatarcontainer">
                        <div class="avatarimg">
                            <img src="../assets/profile-picture.png" width=100rem>
                        </div>
                        <div class="avatartext">
                            <h2>John Doe</h2>
                            <h4 class="career">Computer Science Student</h4>
                        </div>   
                    </div>
                </div>
                <div class="infoprofile">
                    <div class="infocontainers" id="personal">
                        <h3>Personal Information</h3>
                        <hr>
                        <div class="user-container">
                            <div class="user-info">
                                <label>Full Name</label>
                                <input id="name" placeholder="Your name" class="user-input" value="John Doe">
                            </div>
                            <div class="user-info">
                                <label>Email</label>
                                <input id="email" placeholder="Your email" class="user-input" value="john.doe@example.com">
                            </div>
                            <div class="user-info">
                                <label>Phone</label>
                                <input id="phone" placeholder="Your phone number" class="user-input" value="+1 234 567 890">
                            </div>
                            <div class="user-info">
                                <label>Location</label>
                                <input id="location"  placeholder="Your location" class="user-input" value="New York, USA">
                            </div>
                        </div>  
                    </div>
                    <div class="infocontainers" id="academic">
                        <h3>Academic Information</h3>
                        <hr>
                        <div class="user-container">
                            <div class="user-info">
                                <label>Student ID</label>
                                <input id="stid" class="user-input" value="CS2023001" disabled>
                            </div>
                            <div class="user-info">
                                <label>Program</label>
                                <input id="program" placeholder="Your program" class="user-input" value="Bachelor of Computer Science">
                            </div>
                            <div class="user-info">
                                <label>Start Date</label>
                                <input  id="start" class="user-input" type="date" value="2023-08-29">
                            </div>
                            <div class="user-info">
                                <label>Expected Date</label>
                                <input id="end" class="user-input" type="date" value="2027-06-30">
                            </div>
                        </div>  
                    </div>
                    <div class="infocontainers" id="progress">
                        <h3>Personal Information</h3>
                        <hr>
                        <div class="card-container">
                            <div class="profile-card">
                                <h3 id="infocardprof"><strong>12</strong></h3>
                                <p>Courses Completed</p>
                            </div>
                            <div class="profile-card">
                                <h3 id="infocardprof"><strong>3</strong></h3>
                                <p>Certificates Earned</p>
                            </div>
                            <div class="profile-card">
                                <h3 id="infocardprof"><strong>92%</strong></h3>
                                <p>Average Grade</p>
                            </div>
                        </div>  
                    </div>
                    <div class="infocontainers" id="preferences">
                        <h3>Preferences</h3>
                        <hr>
                        <div class="preferences-container">
                            <div class="preference-item">
                                <label class="checkbox-container">
                                    <input type="checkbox" class"checkbox">
                                    Email Notifications 
                                </label>
                                <span>Receive updates about your courses and assignments</span>
                            </div>
                            <div class="preference-item">
                                <label class="checkbox-container">
                                    <input type="checkbox">
                                    Public Profile
                                </label>
                                <span>Make your profile visible to other students</span>
                            </div>
                            <div class="preference-item">
                                <label class="checkbox-container">
                                    <input type="checkbox">
                                    Show Progress 
                                </label>
                                <span>Display your progress on your public profile</span>
                            </div>
                        </div>
                    </div>
                    <div class="buttons">
                    <button class="buttonprof" id="save"  onclick="alert('Profile updated successfully!')"><h4>Save Changes</h4></button>
                    <button class="buttonprof" id="cancel"><h4>Cancel</h4></button>
                    </div>
                </div>
            </div>
        </div>
    `,
    assignments: `
        <div class="globaltareas">
            <div class="tareas-container">
                <div class="header-tareas">
                    <h2 id="assingments-tittle">Your Assingments</h2>
                </div>
                <div id="headerinfo">
                    <div class="headerinfo-tareas">
                        <p>⚠ Some assignments require course completion before submission.</p>
                    </div>
                </div>
                <div class="buttons-assingmentscontainer">
                    <button class"assignments-button">🗒 All</button>
                    <button class"assignments-button">⏳Peding</button>
                    <button class"assignments-button">✅Completed</button>
                    <button class"assignments-button">⚠ Overdue</button>
                    <button class"assignments-button">🔒Locked</button>
                </div>
                <div class="assingments-category">
                    <span>💻</span>
                    <h3>Web Development</h3>
                </div>
                <div class="tareas-pendientescolor" id="bad">
                    <div class="tareas-pendientes">
                        <div class="general-assingments">
                        <p>⚠ Some assignments require course completion before submission.</p>
                        </div>
                        <hr>
                        <div class="description-assingments">
                        <p>Hola</p>
                        </div>
                        <div class="load-assingments">
                        <p>2</p>
                        </div>
                    </div>
                </div>
                 <div class="assingments-category">
                    <span>📊</span>
                    <h3>Data Science</h3>
                </div>
                <div class="tareas-pendientescolor" id="bad">
                    <div class="tareas-pendientes">
                        <div class="general-assingments">
                        <p>⚠ Some assignments require course completion before submission.</p>
                        </div>
                        <hr>
                        <div class="description-assingments">
                        <p>Hola</p>
                        </div>
                        <div class="load-assingments">
                        <p>2</p>
                        </div>
                    </div>
                </div>
                 <div class="assingments-category">
                    <span>🎨</span>
                    <h3>Desing</h3>
                </div>
                <div class="tareas-pendientescolor" id="good">
                    <div class="tareas-pendientes">
                        <div class="general-assingments">
                        <p>⚠ Some assignments require course completion before submission.</p>
                        </div>
                        <hr>
                        <div class="description-assingments">
                        <p>Hola</p>
                        </div>
                        <div class="load-assingments">
                        <p>2</p>
                        </div>
                    </div>
                </div>
                 <div class="assingments-category">
                    <span>⚡</span>
                    <h3>Computer Science</h3>
                </div>
                <div class="tareas-pendientescolor" id="bad">
                    <div class="tareas-pendientes">
                        <div class="general-assingments">
                        <p>⚠ Some assignments require course completion before submission.</p>
                        </div>
                        <hr>
                        <div class="description-assingments">
                        <p>Hola</p>
                        </div>
                        <div class="load-assingments">
                        <p>2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
}

function navigate(page) {
    const content = document.getElementById('main');
    content.innerHTML = pages[page] || '<h1>Página no encontrada</h1>';
}
