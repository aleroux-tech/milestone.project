## Accessibility Improvements

- Added descriptive alt text to all images so screen readers can understand visual content.
- Added `lang="en"` to each page so assistive technology can identify the document language.
- Added labels, a fieldset, and a legend to the contact form so its controls have clear accessible names and grouping.
- Added required-field instructions, an ARIA live error region, and invalid-field styling to make form errors visible and announced.
- Added visible keyboard focus styles to links, form controls, and the submit button.
- The selected text and background combinations pass WCAG AA, including `#23374d` on `#f7f3ea` at 10.99:1, `#2f6f4f` on `#dfe9f5` at 4.88:1, and `#9c2f50` on `#f7f3ea` at more than 4.5:1.
- WAVE should be run on `index.html`, `projects.html`, and `about.html` before submission to confirm zero errors in the deployed site.

## Visual Design & Gestalt Principles

- Applied proximity by grouping related content together (navigation links, card sections, and form fields), making the layout easier to scan.
- Used similarity through consistent colors, borders, and typography across all pages to create a unified visual theme.
- Maintained alignment with centered headers, evenly spaced sections, and structured card layouts for a clean, intentional design.
- Ensured visual hierarchy by using large headings, bold section titles, and clear spacing to guide the user's eye through the content.

## Accessible Contact Form

- Added a contact form with four required fields: Name, Email, Subject, and Message.
- Included descriptive `<label>` elements for every input so screen readers can identify each field.
- Added a role="alert" and aria-live="polite" region for accessible error messages without using alert boxes.
- Ensured the form is keyboard-navigable and follows a logical reading order.

## Live Site

https://aleroux-tech.github.io/milestone3-visual.design/
