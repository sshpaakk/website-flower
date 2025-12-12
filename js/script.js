// Галерея → модальное окно
    const images = document.querySelectorAll('.gallery-img');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');

    

// Крестик закрытия
    const modalClose = document.getElementById('modal-close');
    if (modalClose) {
      modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }

images.forEach(img => {
      img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = img.src;
        modalImg.alt = img.alt || '';
      });
    });

    // Закрытие по клику на фон
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
    });
