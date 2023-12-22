const menu = () => {
  const body = document.querySelector('body');
  const menu = document.querySelector('menu');

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };

  body.addEventListener('click', (e) => {
    if (e.target.matches('img') && e.target.closest('.menu')) {
      handleMenu();
    } else if (e.target.matches('a.close-btn')) {
      handleMenu();
    } else if (e.target.closest('ul>li>a')) {
      e.preventDefault();
      handleMenu();

      const menuItem = e.target.closest('ul>li>a');
      const idMenuItem = menuItem.getAttribute('href');

      document.querySelector(idMenuItem).scrollIntoView({ behavior: 'smooth' });
    } else if (e.target.matches('main>a>img')) {
      e.preventDefault();

      const aLink = e.target.closest('main>a');
      const idALink = aLink.getAttribute('href');

      document.querySelector(idALink).scrollIntoView({ behavior: 'smooth' });
    } else if (
      e.target.matches('body') &&
      e.target.matches('menu.active-menu')
    ) {
      console.log(e.target.closest('menu.active-menu'));
      handleMenu();
    }
  });
};

export default menu;
