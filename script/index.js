
const flexStart = document.querySelector('[data-flex-start ]');
const flexStartDiv = document.querySelector('[data-flex-start-div ]');

flexStart.addEventListener('click', () => {
    flexStartDiv.classList.toggle('hidden');
});

/*flex-end*/

const flexEnd = document.querySelector('[data-flex-end ]');
const flexEndDiv = document.querySelector('[data-flex-end-div ]');

flexEnd.addEventListener('click', () => {
    flexEndDiv.classList.toggle('hidden');
});

/*center*/

const flexCenter = document.querySelector('[data-flex-center ]');
const flexCenterDiv = document.querySelector('[data-flex-center-div ]');

flexCenter.addEventListener('click', () => {
    flexCenterDiv.classList.toggle('hidden');
});

/* sp btwn */
const flexBtwn = document.querySelector('[data-flex-btwn ]');
const flexBtwnDiv = document.querySelector('[data-flex-btwn-div ]');

flexBtwn.addEventListener('click', () => {
    flexBtwnDiv.classList.toggle('hidden');
});

/* sp arnd */
const flexArnd = document.querySelector('[data-flex-arnd ]');
const flexArndDiv = document.querySelector('[data-flex-arnd-div ]');

flexArnd.addEventListener('click', () => {
    flexArndDiv.classList.toggle('hidden');
});

/* sp evenly */
const flexEven = document.querySelector('[data-flex-even ]');
const flexEvenDiv = document.querySelector('[data-flex-even-div ]');

flexEven.addEventListener('click', () => {
    flexEvenDiv.classList.toggle('hidden');
});
