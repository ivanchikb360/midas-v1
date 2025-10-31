# Auto Coverage Assistant

A modern, responsive landing page for auto insurance quotes with real-time quote updates and customer testimonials.

## Features

- 🎨 Modern, gradient-based design
- 📱 Fully responsive layout
- ✨ Animated typing indicator
- 🔄 Real-time quote table updates
- ⭐ Customer reviews section
- 🚀 Ready for GitHub Pages deployment

## GitHub Pages Deployment

### Option 1: Automatic Deployment via GitHub Actions

1. Push this repository to GitHub
2. Go to your repository settings
3. Navigate to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose the `main` branch (or `master`) and `/ (root)` folder
6. Click "Save"
7. Your site will be live at: `https://[your-username].github.io/[repository-name]`

### Option 2: Manual Deployment

1. Create a new repository on GitHub
2. Push all files to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/[your-username]/[repository-name].git
   git push -u origin main
   ```
3. Follow steps 3-7 from Option 1

## Local Development

Simply open `index.html` in a web browser, or use a local server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## Customization

- **Colors**: Edit the gradient colors in `styles.css` (search for `#667eea` and `#764ba2`)
- **Quotes**: Add or modify quotes in the `quotes` and `additionalQuotes` arrays in `script.js`
- **Reviews**: Edit the review cards in `index.html`
- **Content**: Modify any text content directly in `index.html`

## File Structure

```
.
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # JavaScript for animations and dynamic content
└── README.md       # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Feel free to use this project for your own purposes.

