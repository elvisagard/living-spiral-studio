import type { AssessmentConfig } from "@/components/AssessmentWorkspace";

export const assessment1A: AssessmentConfig = {
  id: "Assessment 1A",
  product: "Decal Replication",
  canvas: "8 × 8 inches",
  fonts: [
    { name: "Lilita One", role: "Primary display words", sample: "BE KIND" },
    { name: "Montserrat ExtraBold", role: "Supporting message", sample: "IT MAKES A DIFFERENCE" },
  ],
  focus: "Bold type, outlines, layering, scale, and simple icon placement in a square decal.",
  directions:
    "Create a new Google Slides file and set the slide to 8 × 8 inches. Recreate the decal as accurately as you can. Match the large circle, outlined words, supporting message, heart, accent lines, colors, scale, and placement. Do not redesign it.",
  target: {
    src: "/assets/assessment-1a/target-reference.webp",
    download: "/assets/assessment-1a/target-reference.png",
    alt: "Blue and yellow Be Kind decal with outlined white lettering and a heart",
    aspectClass: "aspect-square",
  },
  copy: [
    { label: "Primary", text: "BE KIND" },
    { label: "Message", text: "IT MAKES A DIFFERENCE" },
  ],
  assets: [
    {
      name: "Favorite icon",
      description: "Find Favorite on Google Icons, choose the outlined style, then download and import it.",
      href: "https://fonts.google.com/icons?icon.query=favorite",
      preview: "/assets/assessment-1a/favorite-preview.svg",
      external: true,
      actionLabel: "Open Google Icons",
    },
  ],
  checklist: [
    "The gold circle nearly fills the square blue background.",
    "BE KIND is large, slightly rotated, white, and outlined in dark blue.",
    "The supporting message is centered and uses the correct two-line hierarchy.",
    "The heart and four short accent lines match the target placement.",
  ],
  accent: "#17324D",
};

export const assessment1B: AssessmentConfig = {
  id: "Assessment 1B",
  product: "ID Badge Replication",
  canvas: "4 × 6 inches, portrait",
  fonts: [
    { name: "Oswald Bold", role: "School header", sample: "RIVERDALE" },
    { name: "Montserrat", role: "Name and supporting text", sample: "Casey" },
  ],
  focus: "Curved shape construction, circular image masking, borders, alignment, and spacing.",
  directions:
    "Create a new Google Slides file and set the slide to 4 × 6 inches in portrait orientation. Recreate the ID badge as accurately as you can. Match the curved green header, circular portrait with its white border, slot, text hierarchy, icon area, spacing, and layer order.",
  target: {
    src: "/assets/assessment-1b/target-reference.webp",
    download: "/assets/assessment-1b/target-reference.png",
    alt: "Riverdale Middle School student ambassador badge for Casey",
    aspectClass: "aspect-[2/3]",
  },
  copy: [
    { label: "School", text: "RIVERDALE\nMIDDLE SCHOOL" },
    { label: "Name", text: "Casey" },
    { label: "Role", text: "STUDENT AMBASSADOR" },
    { label: "Values", text: "LEARN\nLEAD\nBELONG" },
  ],
  assets: [
    {
      name: "Golden retriever photograph",
      description: "Uncropped square photograph. Mask, crop, and border it yourself.",
      href: "/assets/assessment-1b/golden-retriever-portrait.png",
      preview: "/assets/assessment-1b/golden-retriever-portrait-preview.webp",
    },
    {
      name: "Pets icon",
      description: "Find Pets on Google Icons, set its color before download, then import it.",
      href: "https://fonts.google.com/icons?icon.query=pets",
      preview: "/assets/assessment-1b/pets-preview.svg",
      external: true,
      actionLabel: "Open Google Icons",
    },
  ],
  checklist: [
    "The green header has a curved lower edge and the badge has a subtle outer border.",
    "The portrait uses a true circular mask with a clear white border.",
    "The slot, name, role, icon, divider, and values are aligned like the target.",
    "All text is exact and the spacing remains balanced from top to bottom.",
  ],
  accent: "#123B46",
};

export const assessment1C: AssessmentConfig = {
  id: "Assessment 1C",
  product: "Event Ticket Replication",
  canvas: "8 × 3.5 inches, landscape",
  fonts: [
    { name: "Bebas Neue", role: "Event title and stub", sample: "TALENT SHOW" },
    { name: "Montserrat", role: "All supporting text", sample: "APR 25 • 6:00 PM" },
  ],
  focus: "Precision, equal sizing, duplication, distribution, alignment, and rotation.",
  directions:
    "Create a new Google Slides file and set the slide to 8 × 3.5 inches in landscape orientation. Recreate the event ticket as accurately as you can. Match the dark-blue admission strip, light-blue price stub, dashed divider, centered title, icon row, stars, spacing, and alignment.",
  target: {
    src: "/assets/assessment-1c/target-reference-contrast.webp",
    download: "/assets/assessment-1c/target-reference-contrast.png",
    alt: "Riverdale Middle School Talent Show admission ticket",
    aspectClass: "aspect-[16/7]",
  },
  copy: [
    { label: "School", text: "RIVERDALE MIDDLE SCHOOL" },
    { label: "Title", text: "TALENT SHOW" },
    { label: "Date", text: "APR 25\n2025" },
    { label: "Time", text: "6:00 PM" },
    { label: "Location", text: "RMS\nAUDITORIUM" },
    { label: "Stub", text: "ADMIT ONE" },
    { label: "Price", text: "$5\nGENERAL ADMISSION" },
  ],
  assets: [
    {
      name: "Calendar icon",
      description: "Open the exact icon, choose its color, then download and import it.",
      href: "https://fonts.google.com/icons?icon.query=calendar+month",
      preview: "/assets/assessment-1c/calendar.svg",
      external: true,
      actionLabel: "Open Google Icons",
    },
    {
      name: "Location-pin icon",
      description: "Open the exact icon, choose its color, then download and import it.",
      href: "https://fonts.google.com/icons?icon.query=location+on",
      preview: "/assets/assessment-1c/location-pin.svg",
      external: true,
      actionLabel: "Open Google Icons",
    },
    {
      name: "Schedule icon",
      description: "Find Schedule on Google Icons and download it before importing.",
      href: "https://fonts.google.com/icons?icon.query=schedule",
      preview: "/assets/assessment-1c/schedule-preview.svg",
      external: true,
      actionLabel: "Open Google Icons",
    },
  ],
  checklist: [
    "The ticket has three clear regions: admission strip, main ticket, and price stub.",
    "The center star is yellow on white; the stub star is dark blue for strong contrast on light blue.",
    "The calendar, schedule, and location icons are evenly aligned above their details.",
    "Shared edges, centers, divider lines, and spacing are consistent.",
  ],
  accent: "#E87532",
};

export const assessment1D: AssessmentConfig = {
  id: "Assessment 1D",
  product: "Promo Card Replication",
  canvas: "10 × 5.625 inches, landscape",
  fonts: [
    { name: "Anton", role: "Main sport title", sample: "BASKETBALL" },
    { name: "Permanent Marker", role: "Accent title", sample: "TRYOUTS" },
    { name: "Montserrat", role: "All supporting text", sample: "OCT 14–16 • RMS GYM" },
  ],
  focus: "Cumulative control of photo cropping, angled panels, typography, icon rows, alignment, and layers.",
  directions:
    "Create a new Google Slides file and set the slide to 10 × 5.625 inches in landscape orientation. Recreate the promotional card as accurately as you can. Match the cropped basketball photo, angled orange divider, black information panel, title hierarchy, icon row, footer band, spacing, and layer order.",
  target: {
    src: "/assets/assessment-1d/target-reference.webp",
    download: "/assets/assessment-1d/target-reference.png",
    alt: "Riverdale Middle School Basketball Tryouts promotional card",
    aspectClass: "aspect-video",
  },
  copy: [
    { label: "School", text: "RIVERDALE MIDDLE SCHOOL" },
    { label: "Title", text: "BASKETBALL\nTRYOUTS" },
    { label: "Dates", text: "OCT 14–16" },
    { label: "Location", text: "RMS GYM" },
    { label: "Time", text: "3:30 – 5:00 PM" },
    { label: "Values", text: "PLAY\nIMPROVE\nBELONG" },
    { label: "Footer", text: "BE PART OF SOMETHING BIGGER" },
  ],
  assets: [
    {
      name: "Basketball photograph",
      description: "Uncropped source photograph. Crop it intentionally into the angled left panel.",
      href: "/assets/assessment-1d/basketball-hoop-photo.png",
      preview: "/assets/assessment-1d/basketball-hoop-photo-preview.webp",
    },
    {
      name: "Calendar Month icon",
      description: "Open the exact icon, set it to white, then download and import it.",
      href: "https://fonts.google.com/icons?icon.query=calendar+month",
      preview: "/assets/assessment-1c/calendar.svg",
      external: true,
      actionLabel: "Open Google Icons",
    },
    {
      name: "Location On icon",
      description: "Open the exact icon, set it to white, then download and import it.",
      href: "https://fonts.google.com/icons?icon.query=location+on",
      preview: "/assets/assessment-1c/location-pin.svg",
      external: true,
      actionLabel: "Open Google Icons",
    },
    {
      name: "Schedule icon",
      description: "Open the exact icon, set it to white, then download and import it.",
      href: "https://fonts.google.com/icons?icon.query=schedule",
      preview: "/assets/assessment-1c/schedule-preview.svg",
      external: true,
      actionLabel: "Open Google Icons",
    },
  ],
  checklist: [
    "The photograph fills the left panel without distortion and meets the angled orange divider.",
    "The black panel, orange footer band, and title hierarchy match the target.",
    "All seven exact text groups and three white icons are present.",
    "The detail column, divider, values, and footer text are precisely aligned.",
  ],
  accent: "#2F80ED",
};
