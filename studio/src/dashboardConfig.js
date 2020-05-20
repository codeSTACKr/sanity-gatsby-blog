export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ec5b0f3c2858a421f22c651',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-fnpmmx6i',
                  apiId: 'f8eeecc0-9bf9-4d61-99b0-63424860113c'
                },
                {
                  buildHookId: '5ec5b0f370c564672722bd94',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ggmsnvhk',
                  apiId: 'd4cae6fe-2f7a-4b59-a88a-abf4dc228d1b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/codeSTACKr/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ggmsnvhk.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
