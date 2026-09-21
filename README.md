# Microsoft 365 Learning Hub

An interactive web-based learning platform designed to support the teaching and learning of **Microsoft Word and Microsoft 365**.

The platform provides structured learning modules, step-by-step tutorials, visual demonstrations, practical exercises, and guided activities. It is designed for students who want to progressively develop practical Microsoft Word skills through a clear and accessible learning environment.

## Overview

Microsoft 365 Learning Hub transforms traditional course material into an interactive learning experience focused on practical skills and independent learning.

The platform combines:

- Structured learning modules
- Step-by-step tutorials
- Visual demonstrations
- Guided practical activities
- Downloadable exercise materials
- Expected-result examples
- Local progress tracking
- Official Microsoft learning resources
- Responsive design for desktop, tablet, and mobile devices

## Learning Modules

| Module | Topic |
| --- | --- |
| **Course 00** | Getting Started with Microsoft Word |
| **Course 01** | Home — Text and Paragraph Formatting |
| **Course 02** | Insert — Tables, Images, SmartArt, Charts and Objects |
| **Course 03** | Layout |
| **Course 04** | References |
| **Course 05** | Review |
| **Course 06** | Mail Merge |

Each module combines theoretical concepts with practical demonstrations and exercises.

## Learning Approach

The platform follows a progressive learning model:

**Learn → Observe → Practice → Apply**

Students are introduced to a feature, guided through its use, provided with visual references, and then asked to apply the acquired skills through practical exercises.

## Key Features

### Interactive Course Content

Lessons are organized into clearly defined sections with explanations, procedures, tips, and visual references.

### Step-by-Step Tutorials

Microsoft Word operations are presented as structured procedures that students can reproduce directly in the application.

### Visual Learning

Screenshots and instructional illustrations help students identify commands, ribbon tabs, tools, and expected results.

### Practical Exercises

Exercises reinforce the concepts introduced throughout the modules and may include:

- source documents;
- images and supporting files;
- detailed instructions;
- expected results;
- practical challenges.

### Progress Tracking

Learning progress can be stored locally in the browser using `localStorage`.

No account, database, or server-side infrastructure is required.

### Microsoft Resources

The Resources section provides access to selected **official Microsoft documentation and learning resources** for further study.

## Technology

The platform is intentionally lightweight and built with standard web technologies:

- HTML5
- CSS3
- JavaScript
- Browser `localStorage`
- GitHub Pages

No framework, package manager, database, or build process is required.

## Project Structure

```text
microsoft365-learning-hub/
│
├── index.html
├── cours-00-demarrage.html
├── cours-accueil.html
├── cours-insertion.html
├── cours-mise-en-page.html
├── cours-references.html
├── cours-revision.html
├── cours-publipostage.html
├── exercices.html
├── ressources.html
│
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── source/
│
├── README.md
└── .nojekyll
