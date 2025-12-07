---
layout: default
title: "Warranty Information | BonnieByte PC"
---
<div class="container warranty-directory">
  <div class="policy-container">
    <h1>Warranty Information</h1>
    <p>Find warranty coverage information for all eligible BonnieByte PC products.</p>
    <h2>Products With Warranty</h2>
    {% assign product_ids = site.data.products | keys | sort_natural %}
    <div class="warranty-grid">
    {% for product in site.data.products %}
      {% assign id = product[0] %}
      {% assign p = product[1] %}
      {% if p.warranty_enabled %}
        <li>
          <a href="/warranty/{{ id }}/">
            <span class="orbitron notranslate">{{ p.short_name | upcase }}</span>
          </a>
          – {{ p.full_name }}
        </li>
      {% endif %}
    {% endfor %}
    </div>
  </div>
</div>
