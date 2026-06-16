#target "indesign"
#include "whydive-document-system.jsxinc"

WhyDive.buildDocument({
  title: "WhyDive Positioning Paper",
  fileStem: "WhyDive_Positioning_Paper",
  cover: {
    label: "POSITIONING PAPER",
    title: "WhyDive, Chart-Ed, and the Larger Mission",
    subtitle: "A clarification of what we are actually building: an ecosystem for strengthening epistemic reasoning under evidence constraints.",
    claimLabel: "Foundational claim",
    claim: "WhyDive is the framework. Domains are expressions.",
    system: "Framework positioning",
    brandLevel: "Parent framework"
  },
  pages: [
    {
      runningLabel: "POSITIONING PAPER",
      eyebrow: "The real problem",
      title: "The world does not merely suffer from a lack of information.",
      paragraphs: [
        "The world suffers from poor reasoning. The challenge is not simply information literacy. The challenge is epistemic literacy.",
        "How do human beings determine what they can responsibly conclude from the evidence available to them? This is the central question."
      ],
      rail: {
        label: "Central question",
        text: "What can we responsibly conclude from the evidence available?"
      },
      callout: {
        label: "Clarification",
        text: "Chart-Ed is important. It is not the foundational idea.",
        top: 528
      },
      footerText: "WhyDive positioning system"
    },
    {
      runningLabel: "POSITIONING PAPER",
      eyebrow: "WhyDive",
      title: "WhyDive is an epistemic framework.",
      paragraphs: [
        "WhyDive is the framework created to explore and strengthen reasoning under evidence constraints.",
        "At its core, WhyDive is not a curriculum, assessment, standards project, or software platform. Those are applications.",
        "The foundational idea is the belief that people can learn to reason more carefully under evidence constraints."
      ],
      rail: {
        label: "Parent idea",
        text: "The framework remains the same. The domain changes."
      },
      rowsTop: 492,
      rowsTitle: "Applications of the framework",
      rowsIntro: "WhyDive becomes specific when it is expressed through a domain.",
      rows: [
        {
          label: "Data",
          text: "Data Literacy Standards, WhyDive Charts, Chart-Ed, assessments, resources, and professional development."
        },
        {
          label: "Reading",
          text: "Reading reasoning diagnostics and literacy frameworks for evidence, inference, boundary, and development."
        },
        {
          label: "Decision",
          text: "Better judgment under uncertainty across business, leadership, artificial intelligence, theology, and organizational learning."
        }
      ],
      footerText: "WhyDive positioning system"
    },
    {
      runningLabel: "POSITIONING PAPER",
      eyebrow: "What we are building",
      title: "We are building an ecosystem for strengthening epistemic reasoning.",
      paragraphs: [
        "We are not building a chart company. We are not building a testing company. We are not building a curriculum company.",
        "WhyDive is the framework. Standards define expectations within domains. Assessments reveal how people reason. Products provide practical implementation. Resources help practitioners apply the ideas.",
        "Together, these form a world dedicated to helping people reason more carefully, communicate more honestly, and make better judgments from evidence."
      ],
      rail: {
        label: "Common thread",
        text: "How do people reason responsibly when evidence is incomplete, uncertain, conflicting, or misunderstood?"
      },
      callout: {
        label: "Flagship role",
        text: "Chart-Ed demonstrates what happens when WhyDive is applied deeply to graph literacy and data reasoning.",
        top: 560
      },
      footerText: "WhyDive positioning system"
    }
  ]
});
