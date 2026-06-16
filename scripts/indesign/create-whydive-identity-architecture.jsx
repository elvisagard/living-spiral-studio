#target "indesign"
#include "whydive-document-system.jsxinc"

WhyDive.buildDocument({
  title: "WhyDive Identity Architecture",
  fileStem: "WhyDive_Identity_Architecture",
  cover: {
    label: "IDENTITY ARCHITECTURE",
    title: "WhyDive Identity Architecture",
    subtitle: "A brand-level map for distinguishing the parent framework, domain expressions, standards, assessments, products, and resources.",
    claimLabel: "Architecture principle",
    claim: "WhyDive is the parent identity. Domain names should clarify expression, not replace the framework.",
    system: "Identity system",
    brandLevel: "Parent framework"
  },
  pages: [
    {
      runningLabel: "IDENTITY ARCHITECTURE",
      eyebrow: "Core identity",
      title: "WhyDive names the framework, not a single product category.",
      paragraphs: [
        "The public identity should protect WhyDive as the larger reasoning framework. It should not collapse WhyDive into Education, Chart-Ed, Reading, or any other single expression.",
        "The strongest architecture makes the parent idea visible first, then lets domain expressions inherit credibility from that parent."
      ],
      rail: {
        label: "Identity rule",
        text: "Parent first. Domain second. Product third."
      },
      callout: {
        label: "Avoid",
        text: "Do not use one domain expression as the umbrella for the whole ecosystem.",
        top: 536
      },
      footerText: "WhyDive identity architecture"
    },
    {
      runningLabel: "IDENTITY ARCHITECTURE",
      eyebrow: "Brand layers",
      title: "Each layer has a distinct job.",
      paragraphs: [
        "A clear identity architecture prevents the ecosystem from sounding like a collection of unrelated projects.",
        "The hierarchy should help audiences understand what is foundational, what is domain-specific, and what is a practical implementation."
      ],
      rail: {
        label: "Naming logic",
        text: "The framework remains stable while applications adapt to their domains."
      },
      rowsTop: 468,
      rowsTitle: "Recommended hierarchy",
      rowsIntro: "Use the lightest name that makes the relationship clear.",
      rows: [
        {
          label: "Framework",
          text: "WhyDive: the parent epistemic framework for reasoning under evidence constraints."
        },
        {
          label: "Domain",
          text: "Data, reading, writing, science, business, theology, leadership, or organizational learning."
        },
        {
          label: "Standard",
          text: "Domain-specific expectations for what responsible reasoning should demonstrate."
        },
        {
          label: "Product",
          text: "Practical implementations such as Chart-Ed, diagnostics, reports, resources, or professional learning."
        }
      ],
      footerText: "WhyDive identity architecture"
    },
    {
      runningLabel: "IDENTITY ARCHITECTURE",
      eyebrow: "Usage guidance",
      title: "Names should reveal relationship, not compete for ownership.",
      paragraphs: [
        "Use WhyDive when describing the underlying framework, mission, research logic, or cross-domain reasoning thesis.",
        "Use domain labels when a reader needs to know where the framework is being applied. Use product names when the conversation is about implementation, adoption, or workflow.",
        "This keeps WhyDive spacious enough to grow while allowing mature applications like Chart-Ed to remain specific and credible."
      ],
      rail: {
        label: "Decision test",
        text: "Would this name still make sense if the same framework were applied in another domain?"
      },
      callout: {
        label: "Public shorthand",
        text: "WhyDive strengthens judgment by helping people reason responsibly from evidence.",
        top: 560
      },
      footerText: "WhyDive identity architecture"
    }
  ]
});
