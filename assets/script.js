const $ = (selector) => document.querySelector(selector);
const searchPanel = $('#search-panel');
const searchInput = $('#game-search');
const accountDialog = $('#account-dialog');

$('#year').textContent = new Date().getFullYear();

$('#search-toggle').addEventListener('click', () => {
  searchPanel.hidden = !searchPanel.hidden;
  if (!searchPanel.hidden) searchInput.focus();
});
$('#close-search').addEventListener('click', () => {
  searchPanel.hidden = true;
  searchInput.value = '';
  searchInput.dispatchEvent(new Event('input'));
});
$('#view-all').addEventListener('click', () => {
  document.querySelector('[data-category="all"]').click();
  $('#games').scrollIntoView({ behavior: 'smooth' });
});
$('#account-btn').addEventListener('click', () => accountDialog.showModal());
$('#dialog-close').addEventListener('click', () => accountDialog.close());
$('#dialog-ok').addEventListener('click', () => accountDialog.close());
accountDialog.addEventListener('click', (event) => {
  if (event.target === accountDialog) accountDialog.close();
});

document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    // Game catalog will be connected to the database in the next build stage.
  });
});

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim();
  const emptyState = $('.empty-state');
  if (emptyState) {
    emptyState.querySelector('h3').textContent = query ? 'No games found' : 'Games are on the way';
    emptyState.querySelector('p').textContent = query
      ? 'Try another title or category.'
      : 'The arcade is being prepared. Check back soon.';
  }
});

const recentGames = [];
$('#recent-message').textContent = recentGames.length
  ? recentGames.join(' · ')
  : 'Your recently played games will appear here.';
