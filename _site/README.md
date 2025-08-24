# Reverie Studios Website

A Jekyll-based website for Reverie Studios, a participatory experience design agency specializing in Nordic larp and immersive roleplay experiences.

## About Reverie Studios

Reverie Studios is a participatory experience design agency based in Boston, MA that produces educational and fun co-creative immersive events, generally known as 'larping' or 'live action roleplaying events'. Founded in 2016, the studio has grown from small, bespoke larp events to large-scale blockbuster experiences.

### What We Do

- **Nordic Larp Design**: Specializing in immersive, collaborative, and artistic storytelling
- **Event Production**: From intimate affairs to large-scale blockbuster events
- **Character Development**: Bespoke character creation systems
- **International Collaboration**: Partnering with global creators like Chaos League
- **Tabletop RPG Development**: Expanding into tabletop roleplaying games

## Project Structure

```
website/
├── _config.yml              # Jekyll configuration
├── _events/                 # Event pages and content
├── _includes/               # Reusable components and text
├── _layouts/                # Page templates
├── _sass/                   # SCSS stylesheets
├── _staff/                  # Team member profiles
├── _site/                   # Generated site (do not edit)
├── about/                   # About pages (team, conduct, art)
├── contact/                 # Contact information
├── css/                     # Compiled CSS
├── i/                       # Images and assets
├── js/                      # JavaScript files
└── index.html              # Homepage
```

## Technology Stack

- **Jekyll 3.6.3**: Static site generator
- **Ruby**: Programming language
- **SCSS**: CSS preprocessor
- **Markdown**: Content authoring
- **Liquid**: Templating language

## Prerequisites

- Ruby 2.4 or higher
- Bundler gem
- Git

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd website
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Start the development server**
   ```bash
   bundle exec jekyll serve
   ```

4. **View the site**
   Open your browser and navigate to `http://localhost:4000`

## Development

### Running Locally

```bash
# Start development server with live reload
bundle exec jekyll serve --livereload

# Build the site without serving
bundle exec jekyll build

# Build and serve with drafts
bundle exec jekyll serve --drafts
```

### File Structure Guidelines

- **Events**: Add new events in `_events/` directory with `.html` extension
- **Staff**: Add team members in `_staff/` directory with `.md` extension
- **Images**: Store in `i/` directory, organized by event/context
- **Styles**: Edit `css/style.scss` and `_sass/` files
- **Content**: Use Markdown for text content, HTML for complex layouts

### Adding New Events

1. Create a new file in `_events/` directory (e.g., `new-event.html`)
2. Use the existing event template structure:
   ```html
   ---
   title: Event Name
   short-name: event-name
   layout: page
   thumbnail: /i/events/event-name/thumbnail.jpg
   blurb: "Brief description of the event"
   order: 10
   runs:
    - event: event-name
      image: /i/events/event-name/homepage.jpg
      date: '2025-01-01'
      display-date: 'January 1, 2025'
      title: Event Name
      blurb: "Detailed description"
   ---
   ```

3. Add corresponding images to `i/events/event-name/`
4. Update the event will appear automatically on the homepage

### Adding Team Members

1. Create a new file in `_staff/` directory (e.g., `new-member.md`)
2. Use the existing staff template:
   ```markdown
   ---
   first-name: First
   last-name: Last
   title: Position
   type: principal
   email: email@reverie.studio
   pronouns: they/them
   order: 5
   ---
   
   Bio content here...
   ```

## Content Management

### Key Content Files

- `_includes/text-intro.md`: Homepage introduction text
- `_includes/text-about.md`: About section content
- `about/conduct/index.md`: Code of conduct
- `about/team/index.md`: Team page template
- `about/art/index.md`: Art and larp information

### Image Management

- Store all images in the `i/` directory
- Organize by context: `i/events/`, `i/staff/`, etc.
- Use descriptive filenames
- Optimize images for web (compress, appropriate dimensions)

## Styling

The site uses a custom SCSS-based styling system:

- **Main styles**: `css/style.scss`
- **Breakpoints**: `_sass/breakpoints.scss`
- **Navigation**: `_sass/nav.scss`

### Color Scheme

- Background: `#38383c` (dark gray)
- Text: `#e7e7f4` (light gray)
- Links: `#fbce6b` (gold)
- Headings: `#1b1b1f` (dark)

### Typography

- Headings: Oswald (sans-serif)
- Body: Lora (serif)
- Auxiliary: Arial (sans-serif)

## Deployment

### GitHub Pages

1. Push changes to the main branch
2. GitHub Pages will automatically build and deploy the site
3. Site will be available at `https://[username].github.io/[repository-name]`

### Manual Deployment

1. Build the site: `bundle exec jekyll build`
2. Upload the contents of `_site/` to your web server

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test locally: `bundle exec jekyll serve`
5. Commit your changes: `git commit -am 'Add feature'`
6. Push to the branch: `git push origin feature-name`
7. Submit a pull request

## Code of Conduct

Reverie Studios is committed to providing a safe and inclusive environment. Please review our [Code of Conduct](about/conduct/) before contributing.

## Contact

- **Email**: contact@reverie.studio
- **Website**: [reverie.studio](https://reverie.studio)
- **Team**: See [About Team](about/team/) for individual contact information

## License

This project is proprietary to Reverie Studios, LLC. All rights reserved.

## Acknowledgments

- Built with [Jekyll](https://jekyllrb.com/)
- Styled with custom SCSS
- Images and content © Reverie Studios
- Special thanks to [LARPing in Color](https://larpingincolor.com/) for DEI consultation 