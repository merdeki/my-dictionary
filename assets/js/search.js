document.addEventListener("DOMContentLoaded", function() {
  fetch('{{ "/entries.json" | relative_url }}')
    .then(res => res.json())
    .then(data => {
      const options = { keys: ['word', 'definition', 'tags'], threshold: 0.3 };
      const fuse = new Fuse(data, options);

      const searchInput = document.getElementById('search');
      const entryList = document.getElementById('entry-list');

      searchInput.addEventListener('input', () => {
        const results = fuse.search(searchInput.value);
        entryList.innerHTML = results.length
          ? results.map(r => `<li><a href="${r.item.url}">${r.item.word}</a></li>`).join('')
          : '<li>Bulunamadı</li>';
      });
    });
});
