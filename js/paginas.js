//diferentes paginas a usar (spa)//
const pages = {
    profile: `
        <div class="profilecontainer">
            <div class="profinfocont">
                <div class="infocont">
                    <div class="headerprofile">
                    <div
                </div>
            </div>
        </div>
    `,
}

function navigate(page) {
    const content = document.getElementById('main');
    content.innerHTML = pages[page] || '<h1>Página no encontrada</h1>';
}