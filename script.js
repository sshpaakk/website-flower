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

    // ===== Таблица цен: выбор композиции =====
    const priceRows = document.querySelectorAll('.price-table tbody tr');

    priceRows.forEach(row => {
      const button = row.querySelector('.select-btn');

      button.addEventListener('click', () => {
        // Снять выделение со всех строк
        priceRows.forEach(r => r.classList.remove('selected'));

        // Выделить текущую
        row.classList.add('selected');

        // Получаем название букета
        const bouquetName = row.cells[0].textContent;

        alert(`Вы выбрали композицию: «${bouquetName}»`);
      });
    });
