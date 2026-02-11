# Testing - Pattern Craft

## Quick Commands

```bash
npm test              # Run all tests (CI: smoke only, Local: full)
npm run test:ui       # Interactive UI mode
npm run test:headed   # Run with browser visible
```

## CI vs Local Testing

| Environment | Browsers | Tests Run |
|-------------|----------|-----------|
| CI (GitHub Actions) | chromium (1) | smoke.spec.ts (~1 min) |
| Local Development | 5 browsers | All tests (~7+ min) |

## Test Files

- `smoke.spec.ts` - CI smoke test (HTTP 200 check)
- `project-health.spec.ts` - Full tests for local development

## Configuration

See `playwright.config.ts` for details.
