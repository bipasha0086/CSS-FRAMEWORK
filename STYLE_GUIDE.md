# Brand Style Guide - BrandName
## Custom CSS Framework Documentation

---

## 📋 Table of Contents
1. [Brand Overview](#brand-overview)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Spacing System](#spacing-system)
5. [Component Library](#component-library)
6. [Accessibility Guidelines](#accessibility-guidelines)
7. [Responsive Design](#responsive-design)
8. [Usage Examples](#usage-examples)

---

## 🎨 Brand Overview

**BrandName** is a modern, accessible design system built with TailwindCSS and custom components. The design language emphasizes:

- **Modern Aesthetics**: Gradient-based color schemes and smooth transitions
- **Accessibility First**: WCAG 2.1 Level AA compliance
- **Responsive Design**: Mobile-first approach for all screen sizes
- **Developer Experience**: Easy-to-use components and utilities
- **Performance**: Optimized for fast load times and smooth interactions

### Design Philosophy
- Clean and minimal interface
- Vibrant gradient accents
- Consistent spacing and typography
- Smooth micro-interactions
- High contrast for readability

---

## 🎨 Color Palette

### Primary Colors

| Color | Hex Code | RGB | Usage |
|-------|----------|-----|-------|
| **Primary** | `#6366f1` | `rgb(99, 102, 241)` | Main brand color, primary buttons, links |
| **Primary Dark** | `#4f46e5` | `rgb(79, 70, 229)` | Hover states, emphasis |
| **Primary Light** | `#818cf8` | `rgb(129, 140, 248)` | Backgrounds, subtle accents |

### Secondary Colors

| Color | Hex Code | RGB | Usage |
|-------|----------|-----|-------|
| **Secondary** | `#8b5cf6` | `rgb(139, 92, 246)` | Gradient partner, secondary actions |
| **Secondary Dark** | `#7c3aed` | `rgb(124, 58, 237)` | Hover states |
| **Secondary Light** | `#a78bfa` | `rgb(167, 139, 250)` | Light backgrounds |

### Accent Colors

| Color | Hex Code | RGB | Usage |
|-------|----------|-----|-------|
| **Accent** | `#ec4899` | `rgb(236, 72, 153)` | Call-to-action, highlights |
| **Accent Dark** | `#db2777` | `rgb(219, 39, 119)` | Hover states |
| **Accent Light** | `#f472b6` | `rgb(244, 114, 182)` | Soft highlights |

### Neutral Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Dark** | `#1e293b` | Text, dark backgrounds |
| **Light** | `#f8fafc` | Light backgrounds, cards |
| **White** | `#ffffff` | Backgrounds, contrast |

### Status Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Success** | `#10b981` | Success messages, confirmations |
| **Warning** | `#f59e0b` | Warnings, cautions |
| **Danger** | `#ef4444` | Errors, destructive actions |
| **Info** | `#3b82f6` | Information, tips |

### Color Usage Guidelines

✅ **DO:**
- Use primary colors for main actions
- Use gradients for hero sections and featured elements
- Maintain sufficient contrast ratios (minimum 4.5:1 for text)
- Use neutral colors for body text and secondary elements

❌ **DON'T:**
- Mix too many colors in one component
- Use pure black (#000000) - use brand dark instead
- Rely solely on color to convey information

---

## ✍️ Typography

### Font Families

```css
--font-sans: 'Inter', system-ui, -apple-system, sans-serif;
--font-heading: 'Poppins', sans-serif;
--font-mono: 'Fira Code', monospace;
```

| Font | Usage |
|------|-------|
| **Inter** | Body text, UI elements, forms |
| **Poppins** | Headings, titles, emphasis |
| **Fira Code** | Code snippets, technical content |

### Font Sizes

| Size Name | Value | Pixels | Usage |
|-----------|-------|--------|-------|
| **xs** | 0.75rem | 12px | Small labels, captions |
| **sm** | 0.875rem | 14px | Secondary text |
| **base** | 1rem | 16px | Body text (default) |
| **lg** | 1.125rem | 18px | Emphasized text |
| **xl** | 1.25rem | 20px | Small headings |
| **2xl** | 1.5rem | 24px | Subheadings |
| **3xl** | 1.875rem | 30px | H3 headings |
| **4xl** | 2.25rem | 36px | H2 headings |
| **5xl** | 3rem | 48px | H1 headings, hero text |

### Typography Scale

```
Heading 1: 3rem (48px) - Bold - Poppins
Heading 2: 2.25rem (36px) - Bold - Poppins
Heading 3: 1.875rem (30px) - Bold - Poppins
Body Large: 1.125rem (18px) - Regular - Inter
Body: 1rem (16px) - Regular - Inter
Body Small: 0.875rem (14px) - Regular - Inter
Caption: 0.75rem (12px) - Medium - Inter
```

### Line Heights

- **Headings**: 1.2
- **Body Text**: 1.6
- **Small Text**: 1.4

### Font Weights

- **Light**: 300
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700
- **Extrabold**: 800

---

## 📏 Spacing System

Our spacing system follows an 8-point grid for consistency.

| Name | Value | Pixels | Usage |
|------|-------|--------|-------|
| **xs** | 0.25rem | 4px | Tight spacing |
| **sm** | 0.5rem | 8px | Small gaps |
| **md** | 1rem | 16px | Standard spacing |
| **lg** | 1.5rem | 24px | Section padding |
| **xl** | 2rem | 32px | Large spacing |
| **2xl** | 3rem | 48px | Section margins |
| **3xl** | 4rem | 64px | Hero sections |

### Border Radius

| Name | Value | Pixels | Usage |
|------|-------|--------|-------|
| **sm** | 0.375rem | 6px | Small elements |
| **md** | 0.5rem | 8px | Buttons, inputs |
| **lg** | 0.75rem | 12px | Cards |
| **xl** | 1rem | 16px | Large cards |
| **2xl** | 1.5rem | 24px | Feature cards |
| **full** | 9999px | - | Pills, badges |

### Shadows

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
```

---

## 🧩 Component Library

### Buttons

#### Primary Button
```html
<button class="btn-primary">Click Me</button>
```
**Use for:** Main calls-to-action, primary actions

#### Secondary Button
```html
<button class="btn-secondary">Learn More</button>
```
**Use for:** Secondary actions, alternative choices

#### White Button (for dark backgrounds)
```html
<button class="btn-white">Get Started</button>
```

#### Outline Button
```html
<button class="btn-outline-white">Watch Demo</button>
```

### Cards

#### Feature Card
```html
<div class="feature-card">
    <div class="feature-icon bg-brand-primary/10 text-brand-primary">
        <i class="fas fa-rocket"></i>
    </div>
    <h3 class="feature-title">Title</h3>
    <p class="feature-description">Description text...</p>
    <a href="#" class="feature-link">Learn more →</a>
</div>
```

#### Pricing Card
```html
<div class="pricing-card">
    <!-- Pricing content -->
</div>
```

Add `.featured` class for highlighted pricing card.

### Alerts

```html
<!-- Success Alert -->
<div class="alert alert-success" role="alert">
    <i class="fas fa-check-circle text-xl"></i>
    <div class="flex-1">
        <h4 class="font-semibold mb-1">Success!</h4>
        <p class="text-sm">Your message</p>
    </div>
    <button class="alert-close"><i class="fas fa-times"></i></button>
</div>
```

**Types:** `alert-success`, `alert-info`, `alert-warning`, `alert-error`

### Forms

```html
<div class="form-group">
    <label for="input-id" class="form-label">Label</label>
    <input type="text" id="input-id" class="form-input" placeholder="Placeholder">
</div>
```

### Badges

```html
<span class="badge-primary">Primary</span>
<span class="badge-secondary">Secondary</span>
<span class="badge-accent">Accent</span>
```

---

## ♿ Accessibility Guidelines

### WCAG 2.1 Level AA Compliance

Our design system adheres to WCAG 2.1 Level AA standards:

#### Color Contrast
- **Large Text (18px+)**: Minimum 3:1 contrast ratio
- **Normal Text**: Minimum 4.5:1 contrast ratio
- **UI Components**: Minimum 3:1 contrast ratio

#### Keyboard Navigation
- All interactive elements are keyboard accessible
- Visible focus indicators on all focusable elements
- Logical tab order throughout the page
- Escape key closes modals and mobile menu

#### Screen Reader Support
- Semantic HTML elements (`nav`, `main`, `section`, `footer`)
- ARIA labels on icon-only buttons
- ARIA roles on custom components
- Alt text on images
- Form labels properly associated with inputs

#### Motion & Animation
- Respects `prefers-reduced-motion` setting
- Smooth transitions (200-300ms)
- No auto-playing content
- No flashing content above 3Hz

### Best Practices

✅ **DO:**
- Use semantic HTML
- Provide alt text for images
- Include ARIA labels where needed
- Test with keyboard navigation
- Test with screen readers
- Provide skip links
- Use sufficient color contrast

❌ **DON'T:**
- Rely solely on color to convey information
- Use placeholder text as labels
- Create keyboard traps
- Auto-play videos or animations
- Use tiny touch targets (minimum 44x44px)

---

## 📱 Responsive Design

### Breakpoints

Our mobile-first approach uses these breakpoints:

| Breakpoint | Min Width | Target Devices |
|------------|-----------|----------------|
| **sm** | 640px | Large phones |
| **md** | 768px | Tablets |
| **lg** | 1024px | Laptops |
| **xl** | 1280px | Desktops |
| **2xl** | 1536px | Large screens |

### Mobile-First Approach

Design for mobile first, then enhance for larger screens:

```css
/* Mobile (default) */
.element { font-size: 1rem; }

/* Tablet and up */
@media (min-width: 768px) {
    .element { font-size: 1.125rem; }
}

/* Desktop and up */
@media (min-width: 1024px) {
    .element { font-size: 1.25rem; }
}
```

### Responsive Guidelines

✅ **DO:**
- Test on multiple device sizes
- Use relative units (rem, em, %)
- Stack columns on mobile
- Increase touch target sizes on mobile (min 44x44px)
- Optimize images for different screen sizes
- Prioritize content for mobile users

❌ **DON'T:**
- Use fixed pixel widths for containers
- Assume mouse/hover interactions
- Hide content on mobile without reason
- Use horizontal scrolling

---

## 💡 Usage Examples

### Creating a Hero Section

```html
<section class="bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent py-20">
    <div class="container mx-auto px-4">
        <h1 class="font-heading font-bold text-5xl text-white mb-6">
            Your Hero Title
        </h1>
        <p class="text-xl text-white/90 mb-8">
            Your description text
        </p>
        <button class="btn-white">Get Started</button>
    </div>
</section>
```

### Creating a Feature Grid

```html
<section class="py-20 bg-white">
    <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8">
            <div class="feature-card">
                <!-- Feature content -->
            </div>
            <!-- More cards -->
        </div>
    </div>
</section>
```

### Creating a Form

```html
<form class="space-y-6">
    <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input type="email" id="email" class="form-input" required>
    </div>
    <button type="submit" class="btn-primary">Submit</button>
</form>
```

---

## 🚀 Getting Started

### Installation

1. **Clone or Download** the project files
2. **Open** `index.html` in your browser
3. **Customize** colors, fonts, and spacing in `styles.css`
4. **Modify** TailwindCSS config in the `<script>` tag in `index.html`

### File Structure

```
CSS FRAMEWORK/
├── index.html          # Main HTML file with components
├── styles.css          # Custom CSS and theme variables
├── script.js           # JavaScript for interactions
└── STYLE_GUIDE.md      # This style guide (documentation)
```

### Customization

#### Changing Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --color-primary: #your-color;
    --color-secondary: #your-color;
    /* ... */
}
```

Also update the TailwindCSS config in `index.html`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: '#your-color',
                    // ...
                }
            }
        }
    }
}
```

#### Changing Fonts

1. Update Google Fonts link in `index.html`
2. Update font variables in `styles.css`

#### Adding New Components

Follow the existing component patterns and maintain consistency with:
- Spacing system (8-point grid)
- Color palette
- Typography scale
- Accessibility requirements

---

## 📊 Performance Optimization

### Best Practices Implemented

✅ **Fast Loading**
- TailwindCSS via CDN (can be replaced with custom build)
- Optimized CSS with minimal custom styles
- Lazy loading for images (can be implemented)
- Minimal JavaScript

✅ **Responsive Images**
- Use responsive image techniques
- Optimize image sizes for web
- Consider using WebP format

✅ **CSS Performance**
- Use CSS custom properties for theming
- Minimize repaints and reflows
- Use GPU-accelerated properties (transform, opacity)

✅ **JavaScript Performance**
- Debounced scroll events
- Intersection Observer for animations
- Event delegation where appropriate

---

## 🛠️ Browser Support

This design system supports:

- ✅ Chrome (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ Edge (latest 2 versions)
- ✅ iOS Safari (latest 2 versions)
- ✅ Chrome for Android (latest version)

---

## 📝 Change Log

### Version 1.0.0 (March 2026)
- Initial release
- Complete component library
- TailwindCSS integration
- Accessibility features (WCAG 2.1 AA)
- Responsive design
- Interactive JavaScript components

---

## 🤝 Contributing

To maintain design consistency:

1. Follow the established patterns
2. Maintain accessibility standards
3. Test on multiple devices
4. Document new components
5. Keep the style guide updated

---

## 📄 License

This design system is created for educational and commercial use.

---

## 📞 Support

For questions or support:
- Email: support@brandname.com
- Documentation: Check this style guide
- Issues: Report any bugs or suggestions

---

**Built with ❤️ using TailwindCSS and modern web standards**