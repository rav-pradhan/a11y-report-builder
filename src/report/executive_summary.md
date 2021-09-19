---
title: Executive Summary
order: 1
---

a11y-reporter is a tool that helps you build web accessibility evaluation reports.

It is designed with simplicity in mind. Each section of the report corresponds to a Markdown file, which you can edit with relevant information (suggestions of what to include can be found in this default template). These Markdown files can be found in `src/report` within the codebase.

Accessibility issues you wish to highlight need to be added to the `issues` folder within the `report` directory. They also take the shape of Markdown files with some [useful frontmatter](#detailed-results) attached. Here, issues are to be subcategorised based on [Web Content Accessibility Guidelines (WCAG) 2.1 categories](https://www.w3.org/TR/WCAG/):  Perceivable, Operable, Understandable, Robust.
