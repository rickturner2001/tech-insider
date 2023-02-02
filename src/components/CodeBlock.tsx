import Highlight, {
  defaultProps,
  Language,
  PrismTheme,
} from "prism-react-renderer";
interface Props {
  code: string;
  language: Language;
  theme: PrismTheme;
}

const CodeBlock: React.FC<Props> = ({ code, language, theme }) => (
  <Highlight {...defaultProps} code={code} language={language} theme={theme}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className + " border border-gray-300 "} style={style}>
        {tokens.map((line, i) => (
          <div key={i} {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span key={i} {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
);

export default CodeBlock;
