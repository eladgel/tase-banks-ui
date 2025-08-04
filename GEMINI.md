Challenge the user if you disagree with them.
Always finish your changes with npm run lint && npm run build

## Development Rules

### Code Quality
- Use TypeScript strict mode - no `any` types without explicit justification
- Follow React functional component patterns with hooks
- Use proper error boundaries and loading states
- Implement proper accessibility (ARIA labels, keyboard navigation)
- Write self-documenting code with clear variable/function names

### Browser Extension Specific
- Test changes across all supported AI platforms (Claude, ChatGPT, Gemini, Perplexity, Base44)
- Verify manifest.json permissions are minimal and necessary
- Ensure content scripts don't interfere with page functionality
- Test notification permissions and sound playback
- Validate web_accessible_resources are properly configured

### Testing & Validation
- Run `npm run test:e2e` before major changes
- Test popup UI rendering and responsiveness
- Verify background service worker functionality
- Test content script injection and DOM manipulation
- Validate storage operations and state persistence

### Security & Privacy
- Never log or store sensitive user data
- Use Chrome extension APIs securely
- Validate all user inputs and external data
- Follow principle of least privilege for permissions
- Sanitize any dynamic content injection

### Performance
- Minimize content script execution time
- Use efficient DOM selectors and event listeners
- Implement proper cleanup for event listeners
- Optimize bundle size and loading times
- Use webpack tree shaking effectively

### Git & Deployment
- Follow conventional commit format (feat:, fix:, docs:, etc.)
- Update version in both package.json and manifest.json
- Test extension in Chrome DevTools before release
- Validate all assets (icons, sounds) are properly bundled
- Run `npm run zip` to create deployment package

### Design System Adherence
- All new UI components and modifications must strictly adhere to the established design system (colors, typography, spacing, component patterns).
- Prioritize consistency over individual preference. Refer to `src/consts/theme.ts` and existing component styles.
- Any deviations from the design system must be explicitly justified and approved.

### Documentation
- Update README.md for new features
- Document any new AI service integrations
- Keep CHANGELOG.md current with changes
- Comment complex business logic
- Document any workarounds for platform limitations

> **Note:** All new UI elements must follow the app's theme and design system for consistency.