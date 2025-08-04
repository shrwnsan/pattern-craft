# Contributing to Pattern Craft

Welcome and thank you for considering contributing to Pattern Craft! Your support enhances our project by enriching the pattern library and improving the overall user experience.

## How to Contribute

You can contribute in multiple ways:

- Add new background patterns
- Enhance existing patterns
- Report issues or bugs
- Submit improvements to documentation

## Adding New Patterns

To expand the pattern collection:

1. **Fork** the repository on GitHub.
2. **Clone** your forked repository locally:
   ```bash
   git clone https://github.com/your-username/pattern-craft.git
   cd pattern-craft
   ```
3. **Create a new feature branch** for your pattern:
   ```bash
   git checkout -b feature/pattern-name
   ```
4. **Navigate** to the patterns directory:
   ```bash
   cd src/app/utils/patterns/
   ```
5. **Create your pattern** following the established format:
   ```typescript
   {
     id: "new-pattern-id",
     name: "Pattern Display Name",
     badge: "New",
     style: {
       background: "#fff",
       backgroundImage: `linear-gradient(to right, #f0f0f0 1px, transparent 1px)`
       backgroundSize: "96px 64px",
     },
     code: `<div className="min-h-screen w-full bg-white relative"><div className="absolute inset-0 z-0" /></div>`,
   }
   ```
6. **Test your pattern** in the development environment to ensure it renders correctly.
7. **Commit and push your changes**:
   ```bash
   git add .
   git commit -m "feat: add new pattern-name pattern"
   git push origin feature/pattern-name
   ```
8. **Create a Pull Request** against the main repository:
   - Provide a clear description of your pattern
   - Add screenshots for visual reference
   - Mention any specifics or considerations

## Contribution Guidelines

- **Consistency**: Follow the existing code style and pattern structure
- **Naming**: Use descriptive IDs and meaningful display names
- **Quality**: Ensure patterns are professional and visually appealing
- **Performance**: Optimize patterns for fast rendering
- **Responsiveness**: Test patterns on multiple screen sizes
- **Uniqueness**: Avoid duplicating existing patterns

## Development Setup

Ensure you have the following tools before starting development:

- **Node.js** (Latest LTS version recommended)
- **Yarn/NPM** for package management

## Testing Your Changes

1. Run the development server:
   ```bash
   npm run dev
   ```
2. Verify changes across different browsers
3. Ensure no console errors or warnings are introduced

## Need Help?

If you encounter any problems or have questions during the process, feel free to open an issue or reach out for assistance.

Happy coding and thank you for contributing! 🎨
