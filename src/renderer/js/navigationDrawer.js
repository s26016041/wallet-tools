window.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('#drawer > a');
    items.forEach(item => {
      item.addEventListener('click', () => {
        const sublist = item.nextElementSibling;
        if (sublist && sublist.tagName === 'UL') {
          sublist.classList.toggle('show');
          item.classList.toggle('expanded');
        }
      });
    });
  });

  