## Results and Recommended Actions

Edit `report/review_process.md` to make changes to this section.


### High-level summary of findings

Include a summary of the review results. Whether the website does or does not meet the WCAG 2.1 conformance level.

Highlight, in summary, the accessibility areas the site is strong in, as well as recommended priority areas for improvement.

### Detailed results

Within a11y-reporter, you should categorise your issues based on WCAG 2.1 taxonomy:

1. Perceivable
2. Operable
3. Understandable
4. Robust

The folder structure in the a11y-reporter codebase is structured accordingly within the `report/` directory, as well.

Each issue should be a Markdown file, and should follow the same format, as below:

```markdown
---
title: "Insufficient contrast between text and background"
wcag_criteria: "1.4.3"
url: "example_url.here"
---

[screenshot_if_present]("/path/to/screenshot")

### Issue experienced

The contrast between the header's text and background colour is insufficient. Specifically, the contrast ratio is only 2.2:1. A contrast ratio of 4.5:1 is required to conform to WCAG 2.1 Level AA standards.

### Recommended Solution

The text is quite light, given the background colour, and also appears lighter than content elsewhere on the page. I feel the text colour should be darker.
```

As this is a "Perceivable" issue, this Markdown file would be saved in `reports/issues/1-perceivable`. a11y-reporter will then do the rest and format this into a "ticket" or "card", like so:

