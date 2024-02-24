import Swiper from 'swiper';

// swiper-onboarding
var swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '#nextButton',
  },
  on: {
    reachEnd: function () {
      document.getElementById('nextButton').textContent = 'Mulai';
      document.getElementById('skipButton').style.color = '#ffffff';
    },
    slideChange: function () {
      if (swiper.isEnd) {
        document.getElementById('nextButton').textContent = 'Mulai';
        document.getElementById('nextButton').addEventListener('click', () => {
          window.location.href = '../../views/errors/404.html';
        });
      } else {
        document.getElementById('nextButton').textContent = 'Next';
        document.getElementById('nextButton').addEventListener('click', () => {
          swiper.slideNext();
        });
        document.getElementById('skipButton').style.color = '#8594a7';
      }
    },
  },
  keyboard: {
    enabled: true,
  },
});

// search accordion
function searchAccordion() {
  var input, filter, accordion, items, buttons, i, txtValue;

  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  accordion = document.getElementById('accordion');
  items = accordion.getElementsByClassName('accordion-item');

  for (i = 0; i < items.length; i++) {
    buttons = items[i].getElementsByClassName('accordion-button');
    txtValue = buttons[0].textContent || buttons[0].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      items[i].style.display = '';
    } else {
      items[i].style.display = 'none';
    }
  }
}
