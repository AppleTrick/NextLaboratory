import type { MDXComponents } from "mdx/types";
import { CodeBlock } from "@/components/code-block/code-block";

export const HighlightedText = ({ children }: { children: React.ReactNode }) => {
  return <span style={{ backgroundColor: "yellow" }}>{children}</span>;
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => <h1 style={{ color: "blue" }} {...props} />,
    HighlightedText,
    code: (props) => {
      const { className, children } = props as any;
      const match = /language-(\w+)/.exec(className || "");
      return match ? <CodeBlock language={match[1]} value={String(children).trim()} /> : <code {...props} />;
    },
  };
}
