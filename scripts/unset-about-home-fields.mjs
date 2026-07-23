// Cleanup step for the home/about split. Removes the migrated home fields from
// the `aboutPage` document so they stop showing as "unknown fields" in the
// Studio's About Page record.
//
// RUN THIS ONLY AFTER the code that reads `homePage` is deployed to `main`.
// Running it earlier would drop the home image from the live site, which still
// reads artistName / homeImage off aboutPage until then.
//
//   ./node_modules/.bin/sanity exec scripts/unset-about-home-fields.mjs --with-user-token

import { getCliClient } from 'sanity/cli'

const client = getCliClient({ apiVersion: '2021-10-21' })

const fields = ['artistName', 'tagline', 'homeImage']
// Unset on both the published doc and a draft, if one exists.
const ids = ['aboutPage', 'drafts.aboutPage']

for (const id of ids) {
  const doc = await client.getDocument(id)
  if (!doc) continue
  const res = await client
    .patch(id)
    .unset(fields)
    .commit({ autoGenerateArrayKeys: false })
  console.log('unset home fields on', res._id)
}
