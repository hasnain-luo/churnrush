
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

  text.split('\n').forEach((line, index) => {
    if (line.trim() === '') return;

    const listMatch = line.match(/^\s*\d+\.\s+(.*)/);
    if (listMatch) {
      listItems.push(
        <li key={`li-${nodes.length}-${listItems.length}`}>
          {parseLine(listMatch[1], `li-text-${listItems.length}`)}
        </li>
      );
    } else {
      flushList();
      if (line.trim().endsWith(':') && line.length < 80) {
        nodes.push(
          <h4
            key={`h4-${index}`}
            className="font-headline font-semibold text-base mt-4 mb-2"
          >
            {parseLine(line.replace(':', ''), `h4-text-${index}`)}
          </h4>
        );
      } else {
        nodes.push(
          <p key={`p-${index}`} className="leading-relaxed">
            {parseLine(line, `p-text-${index}`)}
          </p>
        );
      }
    }
  });

  flushList();
  return nodes;
}

export function ReportDisplay({ content }: ReportDisplayProps) {
  return (
    <div className="text-sm space-y-2 text-card-foreground/90">
      {parseContentToJSX(content)}
    </div>
  );
}
