export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '602304119bfc1b2a8a52432b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-64nxx6mo',
                  apiId: '91a625eb-3683-45b3-a1d4-7c045af366d5'
                },
                {
                  buildHookId: '60230411b05e502bdb0e6992',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9za6rf7w',
                  apiId: '97264e09-b6ee-405c-89dc-188c71a32fe3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/msmenzyk/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9za6rf7w.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
