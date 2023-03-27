import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'tynq4rd6',
  dataset: 'production',
  useCdn: true, // set to `true` to fetch from edge cache
  apiVersion: '2023-03-23', // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN // Only if you want to update content with the client
})


const builder = imageUrlBuilder(client)

function urlFor(source) {
    return builder.image(source)
  }