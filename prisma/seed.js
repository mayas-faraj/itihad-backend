import userSeed from './seeders/user.js'
import localeSeed from './seeders/locale.js'
import countrySeed from './seeders/country.js'
import contactSeed from './seeders/contact.js'
import settingSeed from './seeders/setting.js'
import companySeed from './seeders/company.js'
import memberSeed from './seeders/member.js'
import categorySeed from './seeders/category.js'
import typeSeed from './seeders/type.js'
import menuSeed from './seeders/menu.js'
import pageSeed from './seeders/page.js'
import committeeSeed from './seeders/committee.js'
import classificationSeed from './seeders/classification.js'
import levelSeed from './seeders/level.js'
import activitySeed from './seeders/activity.js'
import newsSeed from './seeders/news.js'
import eventSeed from './seeders/event.js'

await userSeed();
await localeSeed();
await countrySeed();
await contactSeed();
await settingSeed();
await companySeed();
await memberSeed();
await categorySeed();
await typeSeed();
await menuSeed();
await pageSeed();
await committeeSeed();
await classificationSeed();
await levelSeed();
await activitySeed();
await newsSeed();
await eventSeed();
