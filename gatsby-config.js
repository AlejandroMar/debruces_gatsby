module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.yourdomain.tld',
        title: 'bruces_site',
    },
    plugins: [
        'gatsby-plugin-netlify-cms',
        'gatsby-plugin-sass',
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },
        'gatsby-plugin-mdx',
        'gatsby-transformer-remark',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        },
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve('./src/components/layout/layout.js'),
            },
        },
        {
            resolve: `gatsby-plugin-page-creator`,
            options: {
                path: `${__dirname}/src/templates`,
            },
        },
    ],
};
