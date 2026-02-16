# الحسام للمنتجات الزراعية | ALHOSAM Landing Page

Premium, modern Arabic landing page for الحسام ALHOSAM - a Syrian agricultural products export company.

## Features

- ✨ Premium, modern design with Arabic RTL support
- 🎨 Brand colors: Deep red, white, gold, and cream
- 📱 Fully responsive (desktop, tablet, mobile)
- 🚀 Smooth animations and transitions
- 🌾 Agricultural product showcase
- 📞 Contact section with WhatsApp integration
- ♿ Accessible and SEO-friendly

## File Structure

```
alhossam-co/
├── index.html      # Main HTML structure
├── styles.css      # Premium styling and animations
├── script.js       # Interactive features and animations
├── logo.png        # Company logo (you need to add this)
└── README.md       # This file
```

## Setup Instructions

1. **Add the Logo**
   - Place your logo file as `logo.png` in the root directory
   - The logo should be in PNG format with transparent background
   - Recommended size: 300x120px or similar aspect ratio

2. **Open the Website**
   - Simply open `index.html` in a modern web browser
   - Or use a local server for best results:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

3. **Customize Content**
   - Edit `index.html` to update text content
   - Modify `styles.css` to adjust colors and styling
   - Update `script.js` for additional interactivity

## Brand Colors

- **Deep Red**: `#8B1A1A` - Primary brand color
- **Gold**: `#D4AF37` - Accent and luxury elements
- **White**: `#FFFFFF` - Text and backgrounds
- **Cream**: `#F5F1E8` - Background support color

## Sections

1. **Hero Section** - Full-width banner with logo and main headline
2. **About Section** - Company introduction with image gallery
3. **Products Section** - Grid showcase of agricultural products
4. **Quality Section** - Four key quality points
5. **Packaging Section** - Professional packaging mockups
6. **Contact Section** - Contact information and WhatsApp button

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --deep-red: #8B1A1A;
    --gold: #D4AF37;
    /* ... */
}
```

### Adding Products
Add new product cards in the `.products-grid` section:
```html
<div class="product-card">
    <div class="product-image" data-product="product-name">
        <div class="product-overlay">
            <span class="product-icon">🌾</span>
        </div>
    </div>
    <h3 class="product-name">اسم المنتج</h3>
</div>
```

### Updating Contact Information
Edit the contact section in `index.html`:
- Phone number
- Email address
- WhatsApp number
- Location

## Notes

- The design uses Google Fonts (Cairo) for elegant Arabic typography
- All images are placeholder divs - replace with actual product photos
- The logo path is set to `logo.png` - ensure this file exists
- WhatsApp button links to the number specified in the contact section

## License

This is a custom design for الحسام ALHOSAM company.

---

**Designed with ❤️ for الحسام للمنتجات الزراعية**

