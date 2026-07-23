// One-off migration: split the home-page fields out of the `aboutPage`
// singleton into their own `homePage` document.
//
// Additive & safe to re-run: it copies artistName / tagline / homeImage into a
// new `homePage` doc and does NOT touch `aboutPage`, so the currently-deployed
// site (which still reads those fields off aboutPage) keeps working until the
// new code ships. Run the companion `unset-about-home-fields.mjs` only AFTER
// `main` is deployed.
//
//   ./node_modules/.bin/sanity exec scripts/split-home-from-about.mjs --with-user-token

import { getCliClient } from 'sanity/cli'

const client = getCliClient({ apiVersion: '2021-10-21' })

const about = await client.getDocument('aboutPage')
if (!about) throw new Error('aboutPage document not found — nothing to migrate.')

const homePage = { _id: 'homePage', _type: 'homePage' }
for (const field of ['artistName', 'tagline', 'homeImage']) {
  if (about[field] !== undefined) homePage[field] = about[field]
}

const res = await client.createOrReplace(homePage)
console.log('homePage created/updated:', JSON.stringify(res, null, 2))
