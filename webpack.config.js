const fs = require("fs");
const path = require("path");
const webpack = require("atool-build/lib/webpack");
const pxtorem = require("postcss-pxtorem");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;

module.exports = function (webpackConfig, env) {
    webpackConfig.resolve.extensions.push("jsx");

    // svg
    const svgDirs = [
        require.resolve("antd-mobile").replace(/warn\.js$/, ""), // 1. 属于 antd-mobile 内置 svg 文件
        path.resolve(__dirname, "./assets/svg") // 2. 自己私人的 svg 存放目录
    ];

    // 因为一个 SVG 文件不能被处理两遍. 在 atool-build 默认为 svg配置的svg-url-loade 里 exclude 掉需要 svg-sprite-loader处理的目录
    // https://github.com/ant-tool/atool-build/blob/master/src/getWebpackCommonConfig.js#L162
    // https://github.com/kisenka/svg-sprite-loader/issues/4
    webpackConfig.module.loaders.forEach(loader => {
        if (
            loader.test &&
            typeof loader.test.test === "function" &&
            loader.test.test(".svg")
        ) {
            loader.exclude = svgDirs;
        }

        if (
            loader.test &&
            typeof loader.test.test === "function" &&
            (loader.test.test(".js") || loader.test.test(".jsx"))
        ) {
            loader.loaders = ["react-router?name=[name]", loader.loaders];
        }
    });

    // 4. 配置 webpack loader
    webpackConfig.module.loaders.unshift({
        test: /\.(svg)$/i,
        loader: "svg-sprite",
        include: svgDirs // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
    });

    webpackConfig.babel.plugins.push("transform-runtime");
    // Support hmr
    //去掉commonjs
    webpackConfig.plugins.shift();
    webpackConfig.babel.plugins.push([
        "import",
        [
            {
                libraryName: "antd-mobile",
                style: true,
                libraryDirectory: "components"
            }
        ]
    ]);
    if (env === "development") {
        webpackConfig.output.path = path.join(__dirname, "./build");
        webpackConfig.devtool = "source-map";
        webpackConfig.plugins.push(
            new webpack.DefinePlugin({
                __LOCAL__: true,
                "process.env": {
                    NODE_ENV: JSON.stringify(env),
                    mock: JSON.stringify(process.env.mock)
                }
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: "common",
                chunks: ["index", "vendor", "pages"],
                minChunks: 2
            })

            // new BundleAnalyzerPlugin()
            // new webpack.optimize.DedupePlugin(), //dedupe similar code
            // new webpack.optimize.UglifyJsPlugin(), //minify everything
            // new webpack.optimize.AggressiveMergingPlugin()
            // new webpack.optimize.CommonsChunkPlugin("common.js",['index','vendor'])
            // new webpack.optimize.CommonsChunkPlugin({
            //     name:['index','vendor'],
            //     minChunks:2
            // })
        );

        webpackConfig.externals = {
            react: "window.React",
            "react-dom": "window.ReactDOM",
            redux: "window.Redux",
            "react-redux": "window.ReactRedux",
            "react-router": "window.ReactRouter",
            "react-router-redux": "window.ReactRouterRedux"
        };
    } else {
        //云构建逻辑
        webpackConfig.output.path = path.join(
            process.cwd(),
            process.env.BUILD_DEST || "build"
        );
        webpackConfig.externals = {
            react: "window.React",
            "react-dom": "window.ReactDOM",
            redux: "window.Redux",
            "react-redux": "window.ReactRedux",
            "react-router": "window.ReactRouter",
            "react-router-redux": "window.ReactRouterRedux"
        };
        webpackConfig.devtool = "source-map";
        webpackConfig.plugins.push(
            // new webpack.optimize.CommonsChunkPlugin("common.js",['index','vendor'])
            new webpack.optimize.CommonsChunkPlugin({
                name: "common",
                chunks: ["index", "vendor", "pages"],
                minChunks: 2
            })
        );
    }

    //高清方案
    //转为rem的策略
    //!!!注意 postcss-pxtorem 需要升级为 4.0.0 版本或更高，4.0.0与之前版本配置参数不一致
    webpackConfig.postcss.push(
        pxtorem({
            rootValue: 100,
            propList: ["*", "!*border*"], //默认所有属性都会转为rem。  配置排除属性示例：propList : ['*', '!*border*']  //排除border、border-top ...
            selectorBlackList: [/-usepx$/], //如果className以-usepx结尾，就不会转rem
            minPixelValue: 2 // >= 2px，才转为rem
        })
    );

    return webpackConfig;
};
