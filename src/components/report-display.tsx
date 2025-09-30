
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
        <ul
          key={`list-${nodes.length}`}
          className="list-disc list-outside space-y-2 my-4 pl-6"
        >
          {listItems}
        </ul>
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
  
  const lines = text.split('\n');

  lines.forEach((line, index) => {
    const key = `line-${index}`;

    if (line.trim() === '---') {
      flushList();
      nodes.push(<hr key={key} className="my-6 border-border" />);
      return;
    }

    const headingMatch = line.match(/^(#+)\s+(.*)/);
    if (headingMatch) {
      flushList();
      const level = headingMatch[1].length;
      const content = parseLine(headingMatch[2], key);
      const className = {
        1: 'text-2xl font-headline font-bold mt-6 mb-4',
        2: 'text-xl font-headline font-semibold mt-6 mb-4',
        3: 'text-lg font-headline font-semibold mt-4 mb-2',
        4: 'text-base font-headline font-semibold mt-4 mb-2',
      }[level] || 'text-base font-headline font-semibold';
      
      const Tag = `h${Math.min(level, 6)}` as keyof JSX.IntrinsicElements;

      nodes.push(<Tag key={key} className={className}>{content}</Tag>);
      return;
    }
    
    const listItemMatch = line.match(/^\s*[\-*]\s+(.*)/);
    if (listItemMatch) {
      listItems.push(
        <li key={`li-${nodes.length}-${listItems.length}`}>
          {parseLine(listItemMatch[1], `li-text-${listItems.length}`)}
        </li>
      );
      return;
    }

    if(line.trim() !== '') {
        flushList();
        nodes.push(
            <p key={`p-${index}`} className="leading-relaxed my-4">
                {parseLine(line, `p-text-${index}`)}
            </p>
        );
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
