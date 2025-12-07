# BonnieByte PC Website — Admin Guide

This guide explains how administrators can safely update, maintain, and extend the BonnieByte PC website.

## 🔐 1. Accessing the Website Code

The site is hosted on **GitHub Pages**.  
Admins must have access to the GitHub repository.

To edit the website:

1. Go to the GitHub repo.
2. Edit files directly in the browser **or** clone the repo locally.
3. Commit changes to the `main` branch.
4. GitHub Pages automatically rebuilds the website.

---

## 📦 2. Managing Products

All products are stored in:
- _data/products.yml

Each entry controls:
- Product page name
- Specs
- Variants
- Warranty availability
- Manual links
- Warranty directory listing

### Adding a new product:
1. Open `products.yml`
2. Copy the `template_product` block
3. Paste and fill in details:
   - `sku`
   - `short_name`
   - `full_name`
   - `html_name`
   - `release_date`
   - specs
4. Create a new product page:
   - /products/<product_id>.md
5. Create a warranty page:
   - /warranty/<product_id>.md

---

## 🛡️ 3. Managing Warranty Pages

Warranty pages are fully modular.

A product warranty page only contains:
  - layout: warranty
  - product_id: "<id>"
  - effective_date: "YYYY-MM-DD"
All content comes from:
  - /_includes/warranty_sections/

### Editing warranty content:
Modify any section inside `/includes/warranty_sections/`.

Every product is updated automatically.

---

## 📄 4. Editing Legal Documents

Legal pages live in:
  - /legal/

You may edit:
- Privacy Policy  
- Cookie Policy  
- Terms of Service  
- Shipping Policy  
- Returns & Refunds  

These pages use the shared `legal.css` + layout, so formatting is consistent.

---

## 🧰 5. Editing Tools (Airflow Calculator)

Tool-related code is in:
  - /tools/
  - static/scripts/airflow.js
  - static/airflow.css

Edit carefully — this is JavaScript-driven.

---

## 🎨 6. Editing Styles

Global styles live in:
  - static/base.css

Page-specific styles:
  - static/home.css
  - static/products.css
  - static/legal.css
  - static/embeds.css

If unsure:  
**Edit text and layout files — do not edit CSS unless necessary.**

---

## 🌐 7. Translations (GTranslate)

Language buttons in the header call:
  - doGTranslate()

If translation breaks:
- Clear cookies
- Check browser script blocking
- Confirm Google's script is loaded

Admins do NOT need to modify this unless troubleshooting.

---

## 🛠️ 8. Backups and Restoration

To restore the website:
1. Download the repo as a ZIP  
2. Keep a local copy  
3. If something breaks:
   - Delete repo files  
   - Re-upload your saved ZIP  
   - GitHub Pages will rebuild automatically

---

## 💡 9. Safe Editing Principles

- Do not delete `_config.yml`
- Do not rename `_layouts`, `_includes`, or `_data`
- Edit one section at a time
- Test changes on a branch if unsure
- Keep folder structure exactly as is
- Avoid touching JS unless necessary
- Make backups before large edits

---

## 🆘 10. Support

For internal help contact:  
**michael@bonniebytepc.com**

For website technical support, note changes and notify the dev team.






