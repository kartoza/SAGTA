# Running Playwright Tests

## 1. Setup

```bash
# Install Node dependencies
npm install

# Install Playwright browsers
npx playwright install
```

## 2. Configure Environment

```bash
cp .env.example .env
```

Edit `.env` and set your credentials:

```
SAGTA_BASE_URL=https://sagtamapdownloader.kartoza.com/
SAGTA_USERNAME=admin
SAGTA_PASSWORD=your-password-here
```

## 3. Run Tests

### All tests (headless)
```bash
npx playwright test
```

### All tests (headed — browser visible)
```bash
npx playwright test --headed
```

### Single test file

```bash
# Headless (default)
npx playwright test tests/authentication.spec.ts

# Headed (browser visible)
npx playwright test tests/authentication.spec.ts --headed

# UI mode (interactive — shows browser + test tree + timeline)
npx playwright test tests/authentication.spec.ts --ui
```

### Run a specific test by name
```bash
npx playwright test --grep "Login with Valid Credentials"
```

## 4. View Results

```bash
# Open HTML report after a run
npx playwright show-report
```

Raw results are saved in `test-results/`.

## Available Test Files

| File | What it covers |
|------|----------------|
| `authentication.spec.ts` | Login / logout |
| `project-selection.spec.ts` | All 5 projects listed after login |
| `layers-sagta-hybrid.spec.ts` | Layer toggle — SAGTA Hybrid |
| `layers-sagta-ortho.spec.ts` | Layer toggle — SAGTA Ortho |
| `layers-sagta-topo.spec.ts` | Layer toggle — SAGTA Topo |
| `layers-z-global-thematic.spec.ts` | Layer toggle — Z Global Thematic |
| `layers-z-sa.spec.ts` | Layer toggle — Z SA |
| `download-sagta-hybrid.spec.ts` | PDF download — SAGTA Hybrid |
| `download-sagta-ortho.spec.ts` | PDF download — SAGTA Ortho |
| `download-sagta-topo.spec.ts` | PDF download — SAGTA Topo |
| `download-z-global-thematic.spec.ts` | PDF download — Z Global Thematic |
| `download-z-sa.spec.ts` | PDF download — Z SA |
