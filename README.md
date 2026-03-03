# 🎨 Custom CSS Framework - BrandName UI

A modern, accessible, and fully customizable CSS framework built with TailwindCSS and custom components. Perfect for rapid development of beautiful, responsive web applications.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Accessibility](https://img.shields.io/badge/accessibility-WCAG%202.1%20AA-brightgreen)

## ✨ Features

- 🎨 **Customizable Theme** - Easy-to-customize color palette, typography, and spacing
- ♿ **Accessible** - WCAG 2.1 Level AA compliant
- 📱 **Fully Responsive** - Mobile-first design approach
- ⚡ **Fast Development** - Pre-built components for rapid prototyping
- 🎯 **Modern Design** - Beautiful gradients and smooth animations
- 🧩 **Component Library** - Buttons, cards, forms, alerts, and more
- 📦 **Lightweight** - Minimal custom CSS, optimized for performance
- 🔧 **Developer Friendly** - Clean code and excellent documentation
- 🎮 **Fully Interactive** - Every element has engaging interactions and feedback
- ✨ **Advanced Animations** - Ripple effects, 3D parallax, smooth transitions
- 🔔 **Smart Notifications** - Stacking notification system with auto-dismiss
- 🎪 **Easter Eggs** - Hidden features for user delight (try Konami code!)
- 📊 **Progress Tracking** - Visual scroll progress indicator
- ⬆️ **Floating Actions** - Smart scroll-to-top button
- 🎬 **Modal Dialogs** - Interactive demo modal with smooth animations

## 🚀 Quick Start

### Option 1: Direct Download
1. Download or clone this repository
2. Open `index.html` in your web browser
3. Start customizing!

### Option 2: GitHub Clone
```bash
git clone <repository-url>
cd "CSS FRAM EWORK"
```

Then open `index.html` in your browser or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Visit `http://localhost:8000` in your browser.

## 📁 Project Structure

```
CSS FRAM EWORK/
│
├── index.html          # Main HTML file with all components
├── styles.css          # Custom CSS with theme variables
├── script.js           # JavaScript for interactivity
├── STYLE_GUIDE.md      # Comprehensive style guide
└── README.md           # This file
```

## 🎨 What's Included

### Components
- ✅ **Navigation Bar** - Responsive navbar with mobile menu
- ✅ **Hero Section** - Eye-catching gradient hero with stats
- ✅ **Feature Cards** - Animated cards with icons
- ✅ **Pricing Tables** - Three-tier pricing layout
- ✅ **Contact Form** - Fully validated form with accessibility
- ✅ **Alerts/Notifications** - Success, error, warning, info alerts
- ✅ **Buttons** - Primary, secondary, outline variants
- ✅ **Badges** - Color-coded badge components
- ✅ **Footer** - Multi-column footer with social links

### Features
- ✅ Smooth scrolling
- ✅ Mobile menu toggle
- ✅ Form validation
- ✅ Alert dismissal
- ✅ Scroll animations
- ✅ Active navigation highlighting
- ✅ Button ripple effects
- ✅ Keyboard navigation support
- ✅ 3D parallax hover on cards
- ✅ Double-click to favorite
- ✅ Interactive pricing selection
- ✅ Animated stats counter
- ✅ Progress bar indicator
- ✅ Scroll-to-top floating button
- ✅ Demo modal with video placeholder
- ✅ Smart notification stacking
- ✅ Form loading states
- ✅ Easter egg (Konami code confetti!)

## 🎮 Interactive Features

**Everything is interactive!** This UI includes advanced interactions:

### 🖱️ Click Interactions
- **All Buttons**: Ripple effect + functional actions
- **Feature Cards**: Single click for info, double-click to favorite ❤️
- **Pricing Cards**: Click to select plan
- **Badges**: Bounce animation on click
- **Badges**: Bounce animation on click

### 🎨 Hover Effects
- **3D Parallax**: Cards tilt based on mouse position
- **Glow Effects**: Cards emit colored glow on hover
- **Icon Animations**: Icons bounce and scale
- **Button Shines**: Primary buttons have moving light effect
- **Link Underlines**: Animated underline on hover

### 📝 Form Features
- **Focus Animations**: Inputs lift and glow when focused
- **Character Counter**: Real-time count on textarea
- **Validation**: Instant feedback with notifications
- **Loading States**: Button shows spinner during submission

### 🔔 Notifications
- **Smart Stacking**: Up to 3 notifications at once
- **Auto Dismiss**: Automatic cleanup after 5 seconds
- **Click to Close**: Dismiss by clicking anywhere
- **Color Coded**: Success, error, warning, info states

### 🎪 Special Features
- **Reading Progress Bar**: Visual progress at top of page
- **Scroll-to-Top Button**: Appears after scrolling down
- **Animated Counters**: Stats count up when visible
- **Demo Modal**: Opens with ESC to close
- **Konami Code**: Try ↑↑↓↓←→←→BA for confetti! 🎊

For detailed information about all interactive features, see [INTERACTIVE_FEATURES.md](INTERACTIVE_FEATURES.md)

## 🎨 Customization

### Changing Colors

#### Method 1: CSS Variables
Edit `styles.css`:

```css
:root {
    --color-primary: #6366f1;      /* Your primary color */
    --color-secondary: #8b5cf6;    /* Your secondary color */
    --color-accent: #ec4899;       /* Your accent color */
}
```

#### Method 2: TailwindCSS Config
Edit the configuration in `index.html`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: '#your-color',
                    secondary: '#your-color',
                    accent: '#your-color',
                }
            }
        }
    }
}
```

### Changing Fonts

1. Update the Google Fonts import in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap" rel="stylesheet">
```

2. Update font variables in `styles.css`:
```css
:root {
    --font-sans: 'YourFont', sans-serif;
    --font-heading: 'YourHeadingFont', sans-serif;
}
```

3. Update TailwindCSS config in `index.html`:
```javascript
fontFamily: {
    sans: ['YourFont', 'system-ui', 'sans-serif'],
    heading: ['YourHeadingFont', 'sans-serif'],
}
```

### Adjusting Spacing

Edit spacing values in `styles.css`:

```css
:root {
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
}
```

## 📖 Documentation

See [STYLE_GUIDE.md](STYLE_GUIDE.md) for comprehensive documentation including:

- Complete color palette
- Typography scale
- Spacing system
- Component usage examples
- Accessibility guidelines
- Responsive design patterns
- Best practices

## ♿ Accessibility

This framework is built with accessibility in mind:

- ✅ **Semantic HTML** - Proper use of HTML5 semantic elements
- ✅ **ARIA Labels** - Screen reader support
- ✅ **Keyboard Navigation** - Full keyboard accessibility
- ✅ **Color Contrast** - WCAG 2.1 AA compliant contrast ratios
- ✅ **Focus Indicators** - Visible focus states
- ✅ **Screen Reader Tested** - Compatible with popular screen readers
- ✅ **Reduced Motion** - Respects prefers-reduced-motion setting

## 📱 Responsive Design

Built with a mobile-first approach:

| Breakpoint | Width | Target Devices |
|------------|-------|----------------|
| Base | 0px | Mobile phones |
| sm | 640px | Large phones |
| md | 768px | Tablets |
| lg | 1024px | Laptops |
| xl | 1280px | Desktops |
| 2xl | 1536px | Large screens |

## 🌐 Browser Support

- ✅ Chrome (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ Edge (latest 2 versions)
- ✅ iOS Safari
- ✅ Chrome for Android

## 🎯 Use Cases

Perfect for:
- 🚀 Startup landing pages
- 📱 SaaS application interfaces
- 💼 Business websites
- 🏪 E-commerce storefronts
- 📊 Dashboard interfaces
- 📝 Portfolio websites
- 🎓 Educational platforms

## 🛠️ Technologies Used

- **TailwindCSS** - Utility-first CSS framework
- **Vanilla JavaScript** - No dependencies
- **Google Fonts** - Inter & Poppins
- **Font Awesome** - Icon library
- **HTML5** - Semantic markup
- **CSS3** - Modern styling features

## 📝 Code Examples

### Creating a Button

```html
<!-- Primary button -->
<button class="btn-primary">Click Me</button>

<!-- Secondary button -->
<button class="btn-secondary">Learn More</button>
```

### Creating a Feature Card

```html
<div class="feature-card">
    <div class="feature-icon bg-brand-primary/10 text-brand-primary">
        <i class="fas fa-rocket"></i>
    </div>
    <h3 class="feature-title">Fast Development</h3>
    <p class="feature-description">Build faster with pre-built components.</p>
    <a href="#" class="feature-link">Learn more →</a>
</div>
```

### Creating an Alert

```html
<div class="alert alert-success" role="alert">
    <i class="fas fa-check-circle text-xl"></i>
    <div class="flex-1">
        <h4 class="font-semibold mb-1">Success!</h4>
        <p class="text-sm">Your changes have been saved.</p>
    </div>
    <button class="alert-close"><i class="fas fa-times"></i></button>
</div>
```

## 🎨 Design Philosophy

### Color Strategy
- **Primary (Indigo)** - Trust, stability, professionalism
- **Secondary (Purple)** - Creativity, innovation, luxury
- **Accent (Pink)** - Energy, passion, call-to-action

### Typography Strategy
- **Inter** - Highly readable, modern sans-serif for body text
- **Poppins** - Geometric, bold for headlines
- **Clean hierarchy** - Clear visual distinction between heading levels

### Spacing Strategy
- **8-point grid** - Consistent spacing throughout
- **Generous whitespace** - Improved readability and focus
- **Responsive scaling** - Adapts to screen size

## 🔧 Customization Tips

### 1. Brand Colors
Replace the gradient colors to match your brand:
- Update `bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent`
- Modify the CSS variables
- Update button styles

### 2. Border Radius
For a more squared look:
```css
:root {
    --radius-lg: 0.25rem;
    --radius-xl: 0.5rem;
}
```

For a more rounded look:
```css
:root {
    --radius-lg: 1rem;
    --radius-xl: 1.5rem;
}
```

### 3. Shadows
For softer shadows:
```css
:root {
    --shadow-md: 0 2px 8px rgba(0, 0, 0, 0.05);
    --shadow-lg: 0 4px 12px rgba(0, 0, 0, 0.08);
}
```

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this framework:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - feel free to use it for personal or commercial projects.

## 🙏 Credits

- **TailwindCSS** - For the amazing utility-first framework
- **Font Awesome** - For the comprehensive icon library
- **Google Fonts** - For beautiful typography
- **The web community** - For inspiration and best practices

## 📞 Support

Need help or have questions?

- 📧 Email: support@brandname.com
- 📚 Documentation: [STYLE_GUIDE.md](STYLE_GUIDE.md)
- 🐛 Issues: Open an issue on GitHub

## 🎯 Roadmap

Future enhancements planned:

- [ ] Dark mode support
- [ ] More component variations
- [ ] Animation library
- [ ] Icon system
- [ ] Build process (Webpack/Vite)
- [ ] React/Vue component versions
- [ ] npm package


