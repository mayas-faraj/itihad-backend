import PClient from '../prisma-client.js';

export default async function() {
  let result;
  result = await (new PClient()).getInstance().contact.createMany({
    data: [
      { name: 'linkedin', icon: 'LinkedIn', is_social: 1, link: 'https://linkedin.com' },
      { name: 'twitter', icon: 'Twitter', is_social: 1, link: 'https://twitter.com' },
      { name: 'facebook', icon: 'Facebook', is_social: 1, link: 'https://facebook.com' },
      { name: 'email', icon: 'Email', is_social: 0, link: 'mailto:info@arabengineeringindustries.org ' }
    ]
  });
  console.log(result);
};
