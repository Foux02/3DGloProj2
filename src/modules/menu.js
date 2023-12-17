const menu = () => {
  const menuBtn = document.querySelector('.menu');
  const menu = document.querySelector('menu');
  const closeBtn = menu.querySelector('.close-btn');
  const menuItems = menu.querySelectorAll('ul>li>a');
  const aLink = document.querySelector('a');

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };

  menuBtn.addEventListener('click', handleMenu);
  closeBtn.addEventListener('click', handleMenu);

  menuItems.forEach((menuItem) =>
    menuItem.addEventListener('click', (e) => {
      e.preventDefault();
      handleMenu();

      const idMenuItem = menuItem.getAttribute('href');
      document.querySelector(idMenuItem).scrollIntoView({ behavior: 'smooth' });
    })
  );

  aLink.addEventListener('click', (e) => {
    e.preventDefault();

    const idALink = aLink.getAttribute('href');
    document.querySelector(idALink).scrollIntoView({ behavior: 'smooth' });
  });
};

export default menu;
