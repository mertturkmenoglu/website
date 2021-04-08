window.onload = () => {
  const mobileNavOpenBtn = document.getElementById('mobileNavOpenBtn');
  const mobileNavCloseBtn = document.getElementById('mobileNavCloseBtn');
  const mobileNavMenu = document.getElementById('mobileNav');

  mobileNavOpenBtn.addEventListener('click', () => {
    mobileNavMenu.classList.remove('hidden');
    mobileNavMenu.classList.add('block')
  });

  mobileNavCloseBtn.addEventListener('click', () => {
    mobileNavMenu.classList.remove('block');
    mobileNavMenu.classList.add('hidden')
  });
}