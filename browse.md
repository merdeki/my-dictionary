---
layout: default
title: Browse All Words
---

<!DOCTYPE html>
<html>
<head>
    <title>Browse All Words - {{ site.title }}</title>
    <style>
        body { font-family: 'Times New Roman', serif; max-width: 900px; margin: 0 auto; padding: 20px; background: #f9f9f9; }
        .browse-page { background: white; padding: 30px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        .alphabet-nav { text-align: center; margin: 20px 0; }
        .alphabet-nav a { display: inline-block; margin: 5px; padding: 8px 12px; background: #f0f8ff; color: #0645ad; text-decoration: none; border-radius: 3px; }
        .alphabet-nav a:hover { background: #0645ad; color: white; }
        .word-list { columns: 3; column-gap: 30px; }
        .word-list li { margin-bottom: 8px; break-inside: avoid; }
        .word-list li a { color: #0645ad; text-decoration: none; }
        .word-list li a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <div class="browse-page">
        <h1>Browse All Words</h1>
        <p><a href="{{ site.baseurl }}/">← Back to Main Page</a></p>
        
        <div class="alphabet-nav">
            <a href="#A">A</a> <a href="#B">B</a> <a href="#C">C</a> <a href="#D">D</a> <a href="#E">E</a> 
            <a href="#F">F</a> <a href="#G">G</a> <a href="#H">H</a> <a href="#I">I</a> <a href="#J">J</a> 
            <a href="#K">K</a> <a href="#L">L</a> <a href="#M">M</a> <a href="#N">N</a> <a href="#O">O</a> 
            <a href="#P">P</a> <a href="#Q">Q</a> <a href="#R">R</a> <a href="#S">S</a> <a href="#T">T</a> 
            <a href="#U">U</a> <a href="#V">V</a> <a href="#W">W</a> <a href="#X">X</a> <a href="#Y">Y</a> <a href="#Z">Z</a>
        </div>
        
        <div class="word-list">
            <ul>
            {% assign sorted_words = site.words | sort: 'word' %}
            {% for word in sorted_words %}
                <li><a href="{{ word.url }}">{{ word.word }}</a></li>
            {% endfor %}
            </ul>
        </div>
    </div>
</body>
</html>
