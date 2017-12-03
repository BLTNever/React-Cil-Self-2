import React from "react";

// TODO: 将颜色抽离到全局，方便UI随意变主意
const colorMapper = {
    blue: "#3296FA",
    green: "#15BC83",
    gray: "#A3A4A6",
    darkGray: "#7D8082"
};

const Tag = ({
    onClick,
    text,
    color = "#fff",
    backgroundColor,
    fontSize = "24px",
    lineHeight = "32px",
    ...rest
}) => {
    return (
        <span
            style={{
                color,
                backgroundColor: colorMapper[backgroundColor],
                display: "inline-block",
                fontSize,
                borderRadius: "5px",
                lineHeight: lineHeight,
                padding: "0 10px",
                ...rest
            }}
            onClick={onClick}
        >
            {text}
        </span>
    );
};

export default Tag;
Tag.defaultProps = {
    onClick: () => null
};
