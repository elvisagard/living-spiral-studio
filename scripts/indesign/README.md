# WhyDive InDesign Scripts

These ExtendScript files build branded WhyDive document drafts in Adobe InDesign.

## Scripts

- `create-whydive-positioning-paper.jsx`
- `create-whydive-identity-architecture.jsx`
- `create-whydive-public-positioning-architecture.jsx`
- `whydive-document-system.jsxinc` shared document system include

## Run

Open Adobe InDesign, then run one of the `.jsx` files from:

`File > Scripts > Other Script...`

Each script creates a new InDesign document, saves an `.indd`, and attempts a PDF export to:

`~/Documents/WhyDive InDesign/`

## Design System

The shared include defines the WhyDive document language:

- Parent-brand treatment, without tying WhyDive to Education
- Bookish/editorial cover pages
- Running headers and footers
- Central-question side rails
- Foundational claim callouts
- Domain/application rows for framework mapping

The scripts use WhyDive as the parent epistemic framework. Domain expressions such as Education, Reading, Chart-Ed, and decision-making appear only where the document content needs them.
