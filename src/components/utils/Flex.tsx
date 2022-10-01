import React from "react";

interface Props {
  css?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
}

const Flex = ({ css, children, className }: Props): JSX.Element => {
  return (
    <div
      className={className}
      style={{ display: "flex", flexDirection: "row", ...css }}
    >
      {children}
    </div>
  );
};

export default Flex;
