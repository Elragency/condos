import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'À Propos',
      links: [
        {
          text: 'PasUnCondo',
          href: getPermalink('/pasuncondo'),
        },
        {
          text: 'Notre Équipe ',
          href: getPermalink('/pasuncondo#notre-equipe'),
        },
        {
          text: 'Notre Mission',
          href: getPermalink('/pasuncondo#mission'),
        },

      ],
    },
    {
      text: 'Nos Services',
      links: [
        {
          text: 'Nos Forfaits',
          href: '/test',
        },
        {
          text: 'Demander une soumission',
          href: '/test#formulaire',
        },
        // {
        //   text: 'About us',
        //   href: '/landing/testlauc',
        // },
        // {
        //   text: 'Contact',
        //   href: '#',
        // },
        // {
        //   text: 'Terms',
        //   href: getPermalink('/terms'),
        // },
        // {
        //   text: 'Privacy policy',
        //   href: getPermalink('/privacy'),
        // },
      ],
    },
    {
      text: 'Nous Joindre',
      href: '/landing/nous-joindre',
    },
    {
      text: 'Ressources',
      href: getPermalink('/blog'),
    },


// Ajouter la section blogue quand necessaire (ajouter Blog dans text)
    {
      // text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [
    { type: 'button', text: 'Urgences', href: getPermalink('/landing/nous-joindre') }
  ],
};

// fin de la section blog
  
export const footerData = {
  links: [
    {
      title: 'Nos Forfaits',
      links: [
        { text: 'Forfaits', href: '/test' },
        { text: 'Soumission', href: '/test#formulaire' },
      ],
    },
    {
      title: 'À Propos',
      links: [
        { text: 'PasUnCondo.ca', href: '/pasuncondo' },
        { text: 'Vision', href: '/pasuncondo#mission' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Contact', href: '/nous-joindre' },
        // { text: 'Nos', href: '#' },
        { text: 'Nos Partnenaires', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'À Propos', href: '/pasuncondo' },
        { text: 'Blog', href: '/blog' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: "#" },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
