---
layout: default
---
<div class="dictionary">
  <aside class="sidebar">
    <h2>Entry List</h2>
    <input type="text" id="search" placeholder="Ara...">
    <ul id="entry-list">
      {% assign sorted_entries = site.entries | sort: 'word' %}
      {% for entry in sorted_entries %}
        <li><a href="{{ entry.url }}">{{ entry.word }}</a></li>
      {% endfor %}
    </ul>
  </aside>

  <main class="entry-content">
    <p>Bir kelime seçin veya arayın.</p>
  </main>
</div>

<script src="/assets/js/search.js"></script>
