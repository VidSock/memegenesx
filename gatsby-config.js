require("dotenv").config()
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const netlifyCmsPaths = {
  resolve: `gatsby-plugin-netlify-cms-paths`,
  options: {
    cmsConfig: `/static/admin/config.yml`,
  },
}

const settings = require("./static/data/site.json")



module.exports = {
  flags: {},
  siteMetadata: settings.meta,
  headers: [
    {
      source: `/todd`,
      headers: [
        {
          key: `Access-Control-Allow-Origin`,
          value: `*`,
        }
      ]
    }
  ],
  plugins: [
    // {
    //   resolve: "gatsby-source-shopify",
    //   options: {
    //     // apiKey: process.env.SHOPIFY_API_KEY,
    //     password: process.env.SHOPIFY_SHOP_PASSWORD,
    //     storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
    //     shopifyConnections: ["collections"],
    //     salesChannel:"Secure3",
    //   },
    // },

    

{
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: "gatsby-remark-copy-linked-files",
          options: {
            destinationDir: "assets",
          },
        },
      ],
    },
  },

  


  // {
  //   resolve: "gatsby-plugin-web-font-loader",
  //   options: {
  //     custom: {
  //       families: ['compacta'],
  //       urls: ['/assets/fonts/fonts.css'],
  //     },
  //   },
  // },

  {
    resolve: "gatsby-plugin-anchor-links",
    options: {
      offset: -70,
      duration: 1000,
    }
  },

  

  {
    resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
    options: {
      // Fields to index
      // fields: [`title`, `template`, `slug`, `featuredImage`, `gatsbyImageData`, `tags`, `rawBody` ],
      // How to resolve each field's value for a supported node type
      resolvers: {
        // For any node of type MarkdownRemark, list how to resolve the fields' values
        MarkdownRemark: {
          template: node => node.frontmatter.template,
          title: node => node.frontmatter.title,
          slug: node => node.frontmatter.slug,
          body: node => node.frontmatter.rawBody,
          tags: node => node.frontmatter.tags,
          featuredImage: node => node.frontmatter.featuredImage,
          gatsbyImageData: node =>
            node.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData,
        },
      },
      fields: [
        {
          name: 'template',
          indexed: true,
          resolver: 'frontmatter.template',
        },
        {
          name: 'title',
          indexed: true,
          resolver: 'frontmatter.title',
        },
        {
          name: 'slug',
          indexed: true,
          resolver: 'frontmatter.slug',
        },
        {
          name: 'tags',
          indexed: true,
          resolver: 'frontmatter.tags',
        },
        {
          name: 'featuredImage',
          indexed: true,
          resolver: 'frontmatter.featuredImage.publicURL',
        },
        {
          name: 'gatsbyImageData',
          indexed: true,
          resolver: 'frontmatter.featuredImage.childImageSharp.gatsbyImageData',
        },
        {
          name: 'rawBody',
          indexed: true,
          resolver: 'rawMarkdownBody',
        },
      ],
      // Optional filter to limit indexed nodes
      // filter: (node, getNode) => node.frontmatter.tags !== "exempt",
    },
  },
  
  






  
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          // include: /assets/ 
          include: /\.svg$/
        }
      }
    },

    {
      resolve: `gatsby-plugin-modal-routing-4`,
      options: {
        // A selector to set react-modal's app root to, default is `#___gatsby`
        // See http://reactcommunity.org/react-modal/accessibility/#app-element
        appElement: '#___gatsby',

        // Object of props that will be passed to the react-modal container
        // See http://reactcommunity.org/react-modal/#usage
        modalProps: { },
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets/`,
        name: `assets`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `team`,
        path: `${__dirname}/static/content/team/`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/content/`,
        name: `content`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gfm: true,
        plugins: [
          netlifyCmsPaths,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
              showCaptions: true,
              linkImagesToOriginal: false,
              // tracedSVG: true,
              loading: "lazy",
            },
          },

          {
            resolve: "gatsby-transformer-remark",
            options: {
              plugins: [
              {
                resolve: "gatsby-remark-better-embed-video",
                options: {
                  width: 800,
                  ratio: 1.77, // Optional: Defaults to 16/9 = 1.77.
                  height: 400, // Optional: Overrides optional.ratio.
                  related: false, // Optional: Will remove related videos from the end of an embedded YouTube video.
                  noIframeBorder: true, // Optional: Disable insertion of <style> border: 0.
                  showInfo: false // Optional: Hides video title and player actions.
                }
              }
              ]
            }
          },


          {
            resolve: 'gatsby-plugin-feed',
            options: {
              query: `
                {
                  site {
                    siteMetadata {
                      title
                      description
                      siteUrl
                      site_url: siteUrl
                    }
                  }
                }
              `,
              feeds: [
                {
                  serialize: ({ query: { site, allMarkdownRemark } }) => {
                    return allMarkdownRemark.nodes.map(node => {
                      const imageUrl = node.frontmatter.featuredImage
                        ? site.siteMetadata.siteUrl + node.frontmatter.featuredImage.childImageSharp.fixed.src
                        : null;
          
                      const mediaContent = imageUrl
                        ? {
                            "media:content": {
                              _attr: {
                                url: imageUrl,
                                medium: "image",
                              },
                            },
                          }
                        : null;
          
                      return Object.assign({}, node.frontmatter, {
                        description: node.excerpt,
                        date: node.frontmatter.date,
                        url: site.siteMetadata.siteUrl + node.fields.slug,
                        guid: site.siteMetadata.siteUrl + node.fields.slug,
                        custom_elements: [
                          { "content:encoded": node.html },
                          mediaContent,
                          {
                            _attr: {
                              "xmlns:media": "http://search.yahoo.com/mrss/",
                            },
                          },
                        ].filter(Boolean),
                      });
                    });
                  },
                  query: `
                  {
                    allMarkdownRemark(
                      sort: { fields: [frontmatter___date], order: DESC }
                      filter: { frontmatter: { excludeFromRSS: { ne: true } } }
                    ) {
                      nodes {
                        excerpt
                        html
                        fields {
                          slug
                        }
                        frontmatter {
                          title
                          date
                          featuredImage {
                            childImageSharp {
                              fixed(width: 800) {
                                src
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  `,
                  output: '/rss.xml',
                  title: 'Feed Title',
                },
              ],
            },
          },
          
          
          
          

          `gatsby-remark-responsive-iframe`,
          // {
          //   resolve: `gatsby-remark-prismjs`,
          //   options: {
          //     classPrefix: "language-",
          //     inlineCodeMarker: null,
          //     aliases: {},
          //     showLineNumbers: false,
          //     noInlineHighlight: false,
          //     // By default the HTML entities <>&'" are escaped.
          //     // Add additional HTML escapes by providing a mapping
          //     // of HTML entities and their escape value IE: { '}': '&#123;' }
          //     escapeEntities: {},
          //   },
          // },
        ],
      },
    },
    // 'gatsby-plugin-sharp-exif',
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    // `gatsby-plugin-static-cms`,

    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        enableIdentityWidget: true,
        publicPath: `admin`,
        htmlTitle: `Pirate Social CMS`,
        htmlFavicon: `static/assets/logo.svg`,
        includeRobots: false,
        logo_url: 'https://piratesocial.org/assets/logo.svg'
      },
    },

    

    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `backgrounds`,
    //     path: `${__dirname}/src/img/front/`, 
    //   },
    // },


    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['headroom', 'headroom--unfixed'], // Don't remove this selector
         ignore: ['/user.scss', '/global.scss', '/styles.css'], // Ignore files/folders
         purgeOnly : ['/animate.css'] // Purge only these files/folders
      }
    },

 
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     trackingIds: [
    //       settings.ga, // Google Analytics / GA
    //     ],
    //   },
    // },

    
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: settings.ga,
    //   },
    // },

    
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: settings.meta.siteUrl,
        sitemap: `${settings.meta.siteUrl}/sitemap.xml`,
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{ userAgent: '*', allow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }]
          }
        }
      }
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: settings.meta.companyname,
        short_name: settings.meta.companyname,
        start_url: `/install?user_mode=app`,
        description: settings.meta.companyname,
        background_color: `#111`,
        lang: `en`,
        theme_color: `#111`,
        display: `standalone`,
 icon: `static/assets/logo.svg`, // This path is relative to the root of the site.
 icon_options: {
  purpose: `any maskable`,
},
      icons: [
        {
          src: `/static/siteimages/manifest-icon-192.png`,
          sizes: `192x192`,
          type: `image/png`,
        },
        {
          src: `/static/siteimages/manifest-icon-512.png`,
          sizes: `512x512`,
          type: `image/png`,
        },
      ], // Add or remove icon sizes as desired
      },
    },
    "gatsby-plugin-offline",
  ],
}
