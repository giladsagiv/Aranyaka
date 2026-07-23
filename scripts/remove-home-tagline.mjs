// One-off: remove the retired `tagline` field from the `homePage` singleton so
// it doesn't show as an "unknown field" in the Studio after being dropped from
// the schema. Safe to run now — no deployed code reads homePage.tagline.
//
//   ./node_modules/.bin/sanity exec scripts/remove-home-tagline.mjs --with-user-token

import { getCliClient } from 'sanity/cli'

const client = getCliClient({ apiVersion: '2021-10-21' })

for (const id of ['homePage', 'drafts.homePage']) {
  const doc = await client.getDocument(id)
  if (!doc) continue
  const res = await client.patch(id).unset(['tagline']).commit()
  console.log('unset tagline on', res._id)
}
