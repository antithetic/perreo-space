// Organize blocks by realistic usage order for building typical pages:
// 1. Hero/intro -> 2. Rich text -> 3. Features -> 4. Split image -> 5. FAQs

import { heroBlock } from './hero'
import { richTextBlock } from './rich-text'
import { featuresBlock } from './features'
import { splitImageBlock } from './split-image'
import { faqsBlock } from './faqs'

export const blockSchemaTypes = [
  heroBlock, // Usually the first block, for page lead/intro
  richTextBlock, // Core content, used for body copy/sections
  featuresBlock, // Showcases benefits or features
  splitImageBlock, // Visual section, image+content
  faqsBlock, // Often at the end, addresses questions
]

// Future useful blocks to implement might include:
// - testimonialBlock      // For user reviews or quotes
// - ctaBlock              // Prominent call-to-action section
// - galleryBlock          // Image galleries or media strips
// - pricingTableBlock     // Comparative pricing information
// - contactFormBlock      // For lead capture or inquiries
