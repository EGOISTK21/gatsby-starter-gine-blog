module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/egoistk21/1afe266867734867a7c475f9cf279388?v=eb04567d51734b3aa8fd3ae5985a4eea"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/egoistk21/79c19587841d481db11dad9ffd9283c8?v=6508eaddcb0b41909c1ddc56c8aa9a38"
            }
        }
    ],
}
