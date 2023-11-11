/* eslint-disable  react/no-unstable-nested-components */

'use client';

import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface MarkdownResponseProps {
    content: string;
}

const MarkdownResponse: React.FC<MarkdownResponseProps> = ({ content }) => {
    return (
        <ReactMarkdown
            className="text-sm overflow-hidden leading-7"
            components={{
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                        <SyntaxHighlighter
                            {...props}
                            language={match[1]}
                            PreTag="div"
                            style={atomDark}
                            wrapLongLines
                        >
                            {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                    ) : (
                        <code {...props} className={className}>
                            {children}
                        </code>
                    );
                },
            }}
        >
            {content || ''}
        </ReactMarkdown>
    );
};

export default MarkdownResponse;
