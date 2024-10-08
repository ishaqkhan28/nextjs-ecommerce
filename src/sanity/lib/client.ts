import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: `${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`,
  dataset: `${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  apiVersion:"2024-08-18"
})

