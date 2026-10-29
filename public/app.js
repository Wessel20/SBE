const zones = {
  room: ['01', 'Situation Room', 'Werk met je team en een professional aan een fictieve sportevent-uitdaging. Vragen stellen en ideeën delen staan centraal.'],
  lounge: ['02', 'De lounge', 'Kom even tot rust, praat na over de uitdaging en ontmoet andere bezoekers. In het concept is hier ruimte voor koffie, thee en kleine snacks.'],
  welcome: ['03', 'Welkom & check-in', 'Begin je bezoek bij het ontvangstpunt. Hier krijg je straks uitleg over de activiteiten en je route. De exacte check-inprocedure volgt.']
};
document.querySelectorAll('[data-zone]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-zone]').forEach(item => { item.classList.remove('selected'); item.setAttribute('aria-pressed', 'false'); });
  button.classList.add('selected'); button.setAttribute('aria-pressed', 'true');
  const [number, title, description] = zones[button.dataset.zone];
  document.getElementById('zone-number').textContent = 'ZONE ' + number;
  document.getElementById('zone-title').textContent = title;
  document.getElementById('zone-description').textContent = description;
}));
const questions = ['Welke vaardigheid gebruik je vaker dan je tijdens je studie had verwacht?', 'Wat zou je je eigen studentversie willen meegeven?', 'Hoe ziet jouw werkdag rondom een sportevent eruit?', 'Wat is een goede eerste stap als ik een stage in deze sector zoek?', 'Op welk project ben je het meest trots, en waarom?'];
let questionIndex = 0;
document.getElementById('question-button').addEventListener('click', () => { document.getElementById('question').textContent = '“' + questions[questionIndex++ % questions.length] + '”'; });
document.getElementById('signup-form').addEventListener('submit', event => {
  event.preventDefault();
  const firstName = new FormData(event.currentTarget).get('firstName').trim();
  document.getElementById('form-result').textContent = `Bedankt${firstName ? ', ' + firstName : ''}! De demo is gelukt. Je bent nog niet ingeschreven; er zijn geen gegevens verstuurd of opgeslagen.`;
  event.currentTarget.reset();
});
