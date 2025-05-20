const pagess = {
    progreso: `
      <section class="web component">
        <header>
          <slot name="titulo">web component</slot>
        </header>
        <main>
          <slot name="contenido">[Sin contenido]</slot>
          <button>Clic to view topics</button>
        </main>
      </section>
      <section class="data science">
        <header>
          <h1>cloud computing</h1>
        </header>
        <main>
          <slot name="contenido">[Sin contenido]</slot>
          <button>Clic to view topics</button>
        </main>
      </section>
      <section class="mobile development">
        <header>
          <slot name="titulo">mobile development</slot>
        </header>
        <main>
          <slot name="contenido">[Sin contenido]</slot>
          <button>Clic to view topics</button>
        </main>
      </section>
      <section class="cloud computing">
        <header>
          <slot name="titulo">cloud computing</slot>
        </header>
        <main>
          <slot name="contenido">[Sin contenido]</slot>
          <button>Clic to view topics</button>
        </main>
      </section>
    `
  };
  
  function mover(page) {
    const content = document.getElementById('main');
    content.innerHTML = pagess[page] || '<h1>Página no encontrada</h1>';
  }
  