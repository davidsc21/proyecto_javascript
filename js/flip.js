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
