const swich = document.querySelector('.theme-swich-toggle');

swich.addEventListener('click', () => {
  document.querySelector('.body').classList.toggle('dark');
  document.querySelector('.theme-swich_maker')
          .classList.toggle('translate__swich');
  document.getElementById('swich__sun').classList.toggle('filter');
  document.getElementById('swich__moon').classList.toggle('filter');
});
