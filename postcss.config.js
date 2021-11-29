module.exports = {
    plugins: [
        require("postcss-autoreset")({
            reset: {
                margin: 0,
                padding: 0,
                borderRadius: 0,
                background: "transparent",
                border: "none",
                fontFamily: "Inter, sans-serif",
                boxSizing: "border-box",
            },
        }),
        require("autoprefixer"),
    ],
};
