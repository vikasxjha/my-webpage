# Mobbin-Inspired Portfolio Website

A modern, clean portfolio website inspired by [Mobbin](https://mobbin.com/)'s design pattern library approach. This portfolio showcases projects in a filterable, card-based layout with interactive modals and smooth animations.

## Features

### 🎨 Design
- **Clean, minimal aesthetic** inspired by Mobbin
- **Responsive design** that works on all devices
- **Smooth animations** and micro-interactions
- **Professional typography** using Inter font family

### 🚀 Functionality
- **Filterable project showcase** with categories
- **Interactive project modals** with detailed case studies
- **Smooth scrolling navigation**
- **Progressive disclosure** of project information
- **Accessibility-focused** keyboard navigation

### 📱 Sections
1. **Hero Introduction** - Name, title, and value proposition
2. **Project Showcase** - Filterable grid of work samples
3. **About Section** - Design philosophy and process
4. **Contact Section** - Professional contact information

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles and responsive design
├── js/
│   └── script.js       # Interactive functionality
└── README.md          # Project documentation
```

## Getting Started

1. **Clone or download** this repository
2. **Customize the content**:
   - Update personal information in `index.html`
   - Add your project data in `js/script.js`
   - Replace placeholder images with your work
3. **Open `index.html`** in a web browser to view your portfolio

## Customization Guide

### Personal Information
Update the following sections in `index.html`:
- Hero section (name, title, description)
- About section (philosophy, process, skills)
- Contact section (email, social links)

### Projects
Edit the `projects` array in `js/script.js`:
```javascript
const projects = [
    {
        id: 1,
        title: "Your Project Title",
        description: "Brief project description",
        image: "path/to/your/image.jpg",
        tags: ["UI Design", "UX Research"],
        category: "ui-design", // ui-design, ux-flow, prototype, web-dev
        details: {
            overview: "Detailed project overview",
            challenge: "What problems you solved",
            solution: "How you solved them",
            tools: ["Figma", "Adobe XD"],
            duration: "Project timeline",
            role: "Your role in the project",
            features: ["Feature 1", "Feature 2"]
        }
    }
];
```

### Styling
Customize colors and design in `css/style.css`:
```css
:root {
  --primary-color: #000000;
  --accent-color: #0066FF;
  --background-color: #FFFFFF;
  /* Add your brand colors here */
}
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Features

- **Lazy loading** for images
- **CSS animations** for smooth interactions
- **Optimized fonts** with preconnect
- **Efficient JavaScript** with event delegation

## Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Focus management for modal interactions
- Screen reader friendly content

## Inspiration Credits

This design is inspired by [Mobbin](https://mobbin.com/), which showcases real-world app designs and UI patterns. The clean, organized approach to displaying design work has been adapted for a personal portfolio context.

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Ready to customize?** Start by updating your personal information and adding your projects. Make it yours! 🚀
