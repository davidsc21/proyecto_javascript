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
                            <h2>texto</h2>
                            <h3>hola mundo</h3>
                        </div>   
                    </div>
                </div>
                <div class="infoprofile">
                    <div class="infocontainers" id="personal">
                        <h3>Personal Information</h3>
                        <hr>
                        <p>Hola mundo</p>
                    </div>
                    <div class="infocontainers" id="academic">
                        <h3>Academic Information</h3>
                        <hr>
                        <p>Hola mundo</p>
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
                        <p>Hola mundo</p>
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