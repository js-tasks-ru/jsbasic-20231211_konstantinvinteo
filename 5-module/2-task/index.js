function toggleText() {
  const button = document.querySelector('.toggle-text-button');
  const text = document.getElementById('text');
  
  button.addEventListener('click', () => {
    if (text.hasAttribute('hidden')) {
      text.removeAttribute('hidden');
    } else {
      text.setAttribute('hidden', true);
    }
  });
}
