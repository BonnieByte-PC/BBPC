---
layout: default
title: "Warranty Debug"
---

<h1>Warranty Debug</h1>

<h2>1. Check if Liquid is running:</h2>
<p>Should show: HELLO</p>
<p>Output: {{ "HELLO" }}</p>

<h2>2. Check if site.data loads:</h2>
<p>Output: {{ site.data | inspect }}</p>

<h2>3. Check if products.yml exists:</h2>
<p>Output: {{ site.data.products | inspect }}</p>

<h2>4. Check keys in products:</h2>
<p>Output: {{ site.data.products | keys }}</p>

<h2>5. Check specific product object:</h2>
<p>Output: {{ site.data.products.northern_wind_120 | inspect }}</p>

<h2>6. Check warranty_enabled field:</h2>
<p>Output: {{ site.data.products.northern_wind_120.warranty_enabled | inspect }}</p>

<h2>7. Loop test WITHOUT if-condition:</h2>
<ul>
{% for product_id in site.data.products %}
  <li>ID: {{ product_id }} — Object: {{ site.data.products[product_id] | inspect }}</li>
{% endfor %}
</ul>
