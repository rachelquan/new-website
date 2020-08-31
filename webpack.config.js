module.exports = {
    plugins: [
      // your custom plugins
    ],
    module: {
      rules: [
        {
            test: /\.(sa|sc|c)ss$/,
            use: ["style-loader", "css-loader", "sass-loader"]
        },
      ],
    },
  };