#target "indesign"
#include "whydive-document-system.jsxinc"

WhyDive.buildDocument({
  title: "WhyDive Public Positioning Architecture",
  fileStem: "WhyDive_Public_Positioning_Architecture",
  cover: {
    label: "PUBLIC POSITIONING ARCHITECTURE",
    title: "WhyDive Public Positioning Architecture",
    subtitle: "A message system for explaining WhyDive publicly as a framework for strengthening judgment and reducing overclaiming.",
    claimLabel: "Public thesis",
    claim: "Strengthening judgment. Reducing overclaiming.",
    system: "Message architecture",
    brandLevel: "Parent framework"
  },
  pages: [
    {
      runningLabel: "PUBLIC POSITIONING",
      eyebrow: "Primary public idea",
      title: "WhyDive helps people reason more carefully from evidence.",
      paragraphs: [
        "The public positioning should be clear enough for non-specialists and precise enough to protect the seriousness of the work.",
        "The message should avoid sounding like a generic education technology company, a chart product, or an assessment vendor. Those may be expressions, but they are not the central claim."
      ],
      rail: {
        label: "Primary line",
        text: "Strengthening judgment. Reducing overclaiming."
      },
      callout: {
        label: "Positioning guardrail",
        text: "Lead with judgment and evidence. Explain domains only when the audience needs them.",
        top: 536
      },
      footerText: "WhyDive public positioning"
    },
    {
      runningLabel: "PUBLIC POSITIONING",
      eyebrow: "Message ladder",
      title: "The public story should move from human problem to framework to expression.",
      paragraphs: [
        "WhyDive should first name the broad problem: people often outrun the evidence available to them.",
        "Then it should name the framework: disciplined reasoning under evidence constraints. Only after that should it explain domain-specific applications."
      ],
      rail: {
        label: "Story order",
        text: "Problem. Framework. Domain. Product. Proof."
      },
      rowsTop: 466,
      rowsTitle: "Public message ladder",
      rowsIntro: "Use this sequence for web pages, decks, one-pagers, and introductory conversations.",
      rows: [
        {
          label: "Problem",
          text: "People overclaim, misread evidence, or draw conclusions that the evidence does not support."
        },
        {
          label: "Framework",
          text: "WhyDive strengthens reasoning under evidence constraints."
        },
        {
          label: "Domain",
          text: "The same framework can be applied to data, reading, writing, science, business, and decision-making."
        },
        {
          label: "Proof",
          text: "Mature applications such as Chart-Ed show how the framework becomes practical and measurable."
        }
      ],
      footerText: "WhyDive public positioning"
    },
    {
      runningLabel: "PUBLIC POSITIONING",
      eyebrow: "Audience language",
      title: "Different audiences need different doors into the same framework.",
      paragraphs: [
        "For district and education audiences, the door may be reasoning diagnostics and instructional clarity. For organizational audiences, it may be decision-making under uncertainty. For public audiences, it may be judgment, evidence, and overclaiming.",
        "The language can adapt without changing the parent identity."
      ],
      rail: {
        label: "Consistency test",
        text: "Can the audience hear the domain while still understanding WhyDive as the parent idea?"
      },
      rowsTop: 482,
      rowsTitle: "Audience entries",
      rowsIntro: "Each entry should point back to the parent framework.",
      rows: [
        {
          label: "Education",
          text: "Students and systems need clearer evidence of how reasoning develops."
        },
        {
          label: "Leaders",
          text: "Organizations need better judgment when evidence is incomplete or contested."
        },
        {
          label: "Public",
          text: "People need shared habits for making claims the evidence can actually support."
        }
      ],
      footerText: "WhyDive public positioning"
    }
  ]
});
