---
layout: default
title: Main Page
---

<!DOCTYPE html>
<html>
<head>
    <title>{{ site.title }}</title>
    <style>
        body { font-family: 'Times New Roman', serif; max-width: 900px; margin: 0 auto; padding: 20px; background: #f9f9f9; }
        .main-page { background: white; padding: 30px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        .welcome { text-align: center; margin-bottom: 30px; }
        .search-box { text-align: center; margin: 30px 0; }
        .search-box input { padding: 10px; font-size: 16px; width: 300px; border: 2px solid #0645ad; border-radius: 5px; }
        .featured-words { margin-top: 30px; }
        .word-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 20px; }
        .word-card { background: #f0f8ff; padding: 15px; border-radius: 5px; border-left: 4px solid #0645ad; }
        .word-card h3 { margin-top: 0; color: #0645ad; }
        .stats { background: #e6f3ff; padding: 20px; border-radius: 5px; margin: 20px 0; text-align: center; }
    </style>
</head>
<body>
    <div class="main-page">
        <div class="welcome">
            <h1>Welcome to {{ site.title }}</h1>
            <p>A comprehensive dictionary and language reference</p>
        </div>
        
        <div class="search-box">
            <input type="text" placeholder="Search for a word..." id="searchBox">
        </div>
        
        <div class="stats">
            <strong>Dictionary Statistics:</strong> 
            {{ site.words.size }} words and growing!
        </div>
        
        <div class="featured-words">
            <h2>Recently Added Words</h2>
            <div class="word-grid">
                {% for word in site.words limit:6 %}
                <div class="word-card">
                    <h3><a href="{{ word.url }}">{{ word.word }}</a></h3>
                    <p>{{ word.excerpt | strip_html | truncate: 100 }}</p>
                </div>
                {% endfor %}
            </div>
        </div>
        
        <div style="margin-top: 30px;">
            <h2>Quick Navigation</h2>
            <ul>
                <li><a href="{{ site.baseurl }}/browse/">Browse All Words</a></li>
                <li><a href="{{ site.baseurl }}/categories/">Browse by Category</a></li>
                <li><a href="#" onclick="showRandomWord()">Random Word</a></li>
            </ul>
        </div>
    </div>
    
    <script>
        // Simple search functionality
        document.getElementById('searchBox').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value.toLowerCase().replace(/\s+/g, '-');
                window.location.href = '{{ site.baseurl }}/word/' + searchTerm + '/';
            }
        });
        
        function showRandomWord() {
            const words = [{% for word in site.words %}'{{ word.word | downcase | replace: " ", "-" }}'{% unless forloop.last %},{% endunless %}{% endfor %}];
            const randomWord = words[Math.floor(Math.random() * words.length)];
            window.location.href = '{{ site.baseurl }}/word/' + randomWord + '/';
        }
    </script>
</body>
</html>
