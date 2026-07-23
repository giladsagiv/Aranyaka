// One-off: seed the new studioName / studioTagline fields on the `homePage`
// singleton with the text that was previously hardcoded in i18n, so the Studio
// shows the current copy in the new fields (ready to edit) instead of blanks.
//
//   ./node_modules/.bin/sanity exec scripts/seed-home-studio-fields.mjs --with-user-token

import { getCliClient } from 'sanity/cli'

const client = getCliClient({ apiVersion: '2021-10-21' })

// Only sets fields that aren't already present, so re-running won't clobber edits.
const res = await client
  .patch('homePage')
  .setIfMissing({
    studioName: 'Aranyaka Studio',
    studioTagline:
      'The path of the brush: navigating mind through form, color, and the empty spaces in between',
  })
  .commit()

console.log('homePage seeded:', JSON.stringify(res, null, 2))
