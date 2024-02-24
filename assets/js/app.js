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
