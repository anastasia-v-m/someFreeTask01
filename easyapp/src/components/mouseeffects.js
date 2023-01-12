const fn = () => {
  let pcts = document.querySelectorAll('.pct');
  for (let elem of pcts) {
    elem.addEventListener('click', (e) => alert('picture'));
  }
}

export default fn;
