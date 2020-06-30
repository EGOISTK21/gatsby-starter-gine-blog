# gatsby-starter-gine-blog


## Quik Start ([中文文档](https://gine.me/posts/a788c3e6713e4166a4a8c72a7977b457))

[![Netlify Status](https://api.netlify.com/api/v1/badges/79eb8e77-05ad-494e-b772-23fe5a438b4f/deploy-status)](https://app.netlify.com/sites/egoistk21-notion-blog/deploys)

You will get a free site, a repository called [`gatsby-starter-gine-blog`](https://github.com/mayneyao/gatsby-starter-gine-blog) will be created (by netlify) under your github account. Just modify two lines in gatsby-config.js to complete the configuration.

Clone [this page](https://www.notion.so/share-blog-table-60e00520137944a4a45a437c7d089488) into your own notion. There are some tables in the page, there are 2 configuration tables. One is the site configuration and the other is the data source configuration. Replace the url of the configuration table in gatsby-config.js with your own.


+ SiteConfig - UI -  `gatsby-theme-gine-blog`     
+ SourceConfig - Data -  `gatsby-source-notion-database` 
    

## Develop & Run


1. install gatsby-cli

```
yarn global add gatsby-cli
```

2. get starter code 

```
gatsby new my-gine-blog https://github.com/mayneyao/gatsby-starter-gine-blog.git

```
3. run 

```
yarn develop
```

## Config

```
module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/b4af861710064848aaf9f859c79bb127?v=0de244d6f8414ade9b7b147adcb2f78e", // Url of SiteConfig table
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/65b35da1762e4f259904bb4cc38e54fd?v=89e80623e52e4419a35f20e54056cfb8", // Url of SourceConfig table
            }
        }
    ],
}
```
