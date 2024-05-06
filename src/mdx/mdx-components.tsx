import type { MDXComponents } from "mdx/types";

export const HighlightedText = ({ children }: { children: React.ReactNode }) => {
  return <span style={{ backgroundColor: "yellow" }}>{children}</span>;
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => <h1 style={{ color: "blue" }} {...props} />,
    HighlightedText,
  };
}
