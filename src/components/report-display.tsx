
'use client';

import React from 'react';

type ReportDisplayProps = {
  content: string;
};

function parseContentToJSX(text: string): React.ReactNode[] {
  if (!text) return [];

  const nodes: React.ReactNode[] = [];
  let listItems: React.ReactNode[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      nodes.push(
        <ol
          key={`list-${nodes.length}`}
          className="list-decimal list-inside space-y-2 my-4 pl-2"
        >
          {listItems}
        </ol>
      );
      listItems = [];
    }
  };

  const parseLine = (line: string, key: string | number) => {
    const parts = line.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) =>
      part.startsWith('**') && part.endsWith('**') ? (
        <strong key={`${key}-strong-${i}`}>{part.slice(2, -2)}</strong>
      ) : (
        part
      )
    );
  };

  const lines = text.split('\n').filter(line => line.trim() !== '');

  lines.forEach((line, index) => {
    // Regular expression to match both numbered lists and section titles.
    const titleMatch = line.match(/^(\d+\.\s+)?(.*?):(.*)/);
    const genericListMatch = line.match(/^\s*\d+\.\s+(.*)/);

    if (titleMatch) {
        flushList();
        const [, , titleText, restOfLine] = titleMatch;

        nodes.push(
            <h4
                key={`h4-${index}`}
                className="font-headline font-semibold text-base mt-4 mb-2"
            >
                {titleText.trim()}
            </h4>
        );
        if (restOfLine && restOfLine.trim()) {
            nodes.push(
                <p key={`p-${index}-cont`} className="leading-relaxed">
                    {parseLine(restOfLine.trim(), `p-text-${index}`)}
                </p>
            );
        }
    } else if (genericListMatch) {
      listItems.push(
        <li key={`li-${nodes.length}-${listItems.length}`}>
          {parseLine(genericListMatch[1], `li-text-${listItems.length}`)}
        </li>
      );
    } else {
      flushList();
      nodes.push(
        <p key={`p-${index}`} className="leading-relaxed">
          {parseLine(line, `p-text-${index}`)}
        </p>
      );
    }
  });

  flushList(); // Make sure to flush any remaining list items
  return nodes;
}


export function ReportDisplay({ content }: ReportDisplayProps) {
  return (
    <div className="text-sm space-y-2 text-card-foreground/90">
      {parseContentToJSX(content)}
    </div>
  );
}
