# UI Garden — React Component Library

**Course:** WEBD-3012 — Business Systems Build and Testing
**Assignment:** 13 — UI Component Library Code Quality Checks
**Student:** Mariam Okuniyi
**Institution:** Red River College Polytechnic

## Project Overview

UI Garden is a reusable React component library developed using TypeScript, Styled Components, and Storybook.

Assignment 13 extends the component library developed in Assignment 12 by integrating automated code quality checks into the development and deployment process.

The project uses Prettier for code formatting, ESLint for static code analysis, Jest for automated testing, Husky for Git pre-commit validation, GitHub Actions for continuous integration, and Docker with Nginx for production deployment.

**GitHub Repository:**
https://github.com/MariamOkuniyi/okuniyi-ui-garden-assignment13

**Application URL:**
http://localhost:8018

## Technologies Used

| Technology            | Purpose                                 |
| --------------------- | --------------------------------------- |
| React                 | User interface development              |
| TypeScript            | Type-safe application development       |
| Styled Components     | Reusable component styling              |
| Storybook             | Component documentation and development |
| Jest                  | Automated testing                       |
| React Testing Library | Testing React components                |
| Prettier              | Automated code formatting               |
| ESLint                | Static code quality analysis            |
| Husky                 | Git pre-commit hooks                    |
| GitHub Actions        | Continuous integration                  |
| Docker                | Containerization                        |
| Nginx                 | Production web server                   |
| Git and GitHub        | Version control and source code hosting |

## Project Features

UI Garden includes reusable React components with customizable properties and styling.

The production application provides a component showcase demonstrating different button appearances and states, including primary, success, danger, and disabled buttons.

The project also includes automated quality validation, Git commit protection, a GitHub Actions CI workflow, and a Dockerized production build.

## Prerequisites

To run this project locally, install:

- Node.js and npm
- Git
- Docker Desktop
- Visual Studio Code or another code editor

For Windows users running Ubuntu through WSL 2, enable Docker Desktop integration with the Ubuntu distribution.

## Installation and Setup

Clone the repository:

```bash
git clone https://github.com/MariamOkuniyi/okuniyi-ui-garden-assignment13.git
```

Navigate into the project:

```bash
cd okuniyi-ui-garden-assignment13
```

Install dependencies:

```bash
npm ci
```

The installation also initializes Husky through the project's `prepare` script.

Start the React development server:

```bash
npm start
```

The development application is normally available at:

http://localhost:3000

## Docker Production Deployment

The Dockerfile uses a multi-stage build process.

**Stage 1 — Node.js**

The Node.js environment installs project dependencies and compiles the React application into optimized production files.

**Stage 2 — Nginx**

Nginx serves the compiled React application as static production files.

The required Docker working directory is:

```text
/okuniyi_mariam_ui_garden_build_checks
```

### Build the Docker image

From the project root, run:

```bash
docker build -t okuniyi-ui-garden-assignment13 .
```

### Create and run the container

```bash
docker run -d \
  --name okuniyi_mariam_coding_assignment13 \
  -p 8018:80 \
  okuniyi-ui-garden-assignment13
```

The container uses the required name:

```text
okuniyi_mariam_coding_assignment13
```

Docker maps port `8018` on the host computer to port `80` inside the Nginx container.

### Access the application

Open:

http://localhost:8018

Or:

http://127.0.0.1:8018

The UI Garden production application should load in the browser.

### Verify the running container

```bash
docker ps
```

### Stop the container

```bash
docker stop okuniyi_mariam_coding_assignment13
```

### Restart the container

```bash
docker start okuniyi_mariam_coding_assignment13
```

### Rebuild and replace the container

After modifying the application, rebuild the Docker image:

```bash
docker build -t okuniyi-ui-garden-assignment13 .
```

Stop and remove the existing container:

```bash
docker stop okuniyi_mariam_coding_assignment13
docker rm okuniyi_mariam_coding_assignment13
```

Start the updated container:

```bash
docker run -d \
  --name okuniyi_mariam_coding_assignment13 \
  -p 8018:80 \
  okuniyi-ui-garden-assignment13
```

## Code Quality Checks

The project uses three automated code quality checks.

### Prettier

Prettier ensures consistent formatting across the project.

Install Prettier:

```bash
npm install --save-dev prettier
```

Format the project:

```bash
npm run format
```

Check formatting without modifying files:

```bash
npm run format:check
```

Prettier configuration is stored in `.prettierrc.json`, while `.prettierignore` identifies excluded files.

### ESLint

ESLint analyzes JavaScript and TypeScript code for potential problems and coding standard violations.

Run ESLint:

```bash
npm run lint
```

The lint script uses:

```bash
eslint "src/**/*.{js,jsx,ts,tsx}" --max-warnings=0
```

The `--max-warnings=0` option causes the check to fail when ESLint reports warnings.

### Jest Automated Testing

Jest and React Testing Library are used to test the application.

Run the automated tests once without entering watch mode:

```bash
CI=true npm test -- --watch=false --passWithNoTests=false
```

The test suite verifies that the UI Garden application renders its heading and reusable button examples, including the disabled button state.

The `CI=true` setting ensures tests execute in continuous integration mode.

### Production Build

Create the optimized production build:

```bash
npm run build
```

The generated production files are stored in the `build` directory.

## Husky Pre-commit Hooks

Husky integrates automated checks into the Git commit process.

Install Husky:

```bash
npm install --save-dev husky
```

Initialize Husky:

```bash
npx husky init
```

The pre-commit configuration is stored in:

```text
.husky/pre-commit
```

The hook executes:

```sh
npm run format:check || exit 1
npm run lint || exit 1
CI=true npm test -- --watch=false --passWithNoTests=false || exit 1
```

Before every normal Git commit, Husky performs the following sequence:

1. Run Prettier formatting validation.
2. Run ESLint code quality validation.
3. Execute the automated test suite.
4. Allow the commit only when every check succeeds.

If any check fails, Husky terminates the process and prevents the commit.

### Demonstrating a Failed Commit

Create a temporary file containing incorrectly formatted JavaScript:

```bash
printf 'const message="Testing Husky"\n' > husky-test.js
```

Stage the file:

```bash
git add husky-test.js
```

Attempt to commit:

```bash
git commit -m "test: verify husky blocks invalid formatting"
```

Prettier should detect the formatting problem, causing Husky to reject the commit.

Remove the temporary file afterward:

```bash
git restore --staged husky-test.js
rm husky-test.js
```

This demonstrates that invalid code cannot pass the normal pre-commit workflow.

### Demonstrating a Successful Commit

When all formatting checks, lint checks, and automated tests pass, Husky allows Git to create the commit.

This provides a consistent quality gate before code is submitted to the repository.

## GitHub Actions — Continuous Integration

GitHub Actions provides an additional layer of automated quality validation.

The workflow configuration is located at:

```text
.github/workflows/ci.yml
```

**Workflow name:** UI Garden Code Quality Checks

The workflow is triggered when code is pushed to GitHub or a pull request is created.

It executes the following steps:

1. Check out the repository.
2. Configure Node.js 24.
3. Install dependencies using `npm ci`.
4. Run Prettier formatting validation.
5. Run ESLint code quality checks.
6. Execute Jest automated tests.
7. Build the React production application.

The workflow reports a successful result only when every required step completes successfully.

If a step fails, GitHub Actions marks the workflow as failed and provides diagnostic logs.

This ensures that automated checks are executed on GitHub even if local Git hooks are bypassed.

A failed workflow is visible in the repository's Actions tab. Branch protection rules can additionally be configured to require successful checks before pull requests are merged.

**GitHub Actions:**
https://github.com/MariamOkuniyi/okuniyi-ui-garden-assignment13/actions

## Git and GitHub Version Control

Git was used throughout development to track changes to the application, code quality configuration, Docker setup, and CI/CD workflow.

### Initialize the Git repository

```bash
git init
```

### Check repository status

```bash
git status
git status --short
```

### Stage changes

Stage all relevant project changes:

```bash
git add .
```

Or stage specific files:

```bash
git add package.json
git add Dockerfile
git add .github/workflows/ci.yml
```

### Commit changes

```bash
git commit -m "commit message"
```

### View commit history

```bash
git log --oneline
git log --oneline -5
```

### Rename the branch

```bash
git branch -M main
```

### Connect the GitHub repository

```bash
git remote add origin https://github.com/MariamOkuniyi/okuniyi-ui-garden-assignment13.git
```

### Verify the remote

```bash
git remote -v
```

### Push the initial branch

```bash
git push -u origin main
```

### Push subsequent commits

```bash
git push origin main
```

### Verify the repository root

```bash
git rev-parse --show-toplevel
```

### View tracked workflow files

```bash
git ls-files .github/workflows/ci.yml
```

### Verify committed workflow files

```bash
git ls-tree -r --name-only HEAD .github/workflows
```

## Development Commit History

The project was developed through incremental Git commits.

| Commit Message                                  | Purpose                                  |
| ----------------------------------------------- | ---------------------------------------- |
| `chore: initialize assignment 13 project`       | Initialize the Assignment 13 project     |
| `chore: configure prettier formatting checks`   | Add Prettier configuration               |
| `chore: configure eslint quality checks`        | Configure ESLint validation              |
| `chore: add husky pre-commit quality checks`    | Add automated Git commit checks          |
| `build: configure production docker deployment` | Configure the Docker production build    |
| `ci: add github actions quality checks`         | Implement the GitHub Actions workflow    |
| `feat: add UI Garden component showcase`        | Create the production component showcase |

Each successful commit provides a record of the project's development and implementation milestones.

## Testing and Verification

The completed project can be verified using the following commands.

**Prettier:**

```bash
npm run format:check
```

**ESLint:**

```bash
npm run lint
```

**Jest:**

```bash
CI=true npm test -- --watch=false --passWithNoTests=false
```

**Production build:**

```bash
npm run build
```

**Docker container:**

```bash
docker ps
```

**Git commit history:**

```bash
git log --oneline
```

**GitHub Actions:**

Open the Actions tab in the GitHub repository and review the latest workflow run.

Successful verification demonstrates that code
