import React from 'react';

interface InfoTableProps {
  leftHeader: string;
  rightHeader: string;
  rows: [string, string][];
}

/**
 * Two-column reference table (e.g. "sphere" / "example").
 * Renders as a table on desktop and stacked cards on mobile.
 */
export function InfoTable({ leftHeader, rightHeader, rows }: InfoTableProps) {
  return (
    <>
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-1.5 pr-3 text-xs uppercase tracking-widest text-muted-foreground font-medium w-1/3">{leftHeader}</th>
              <th className="text-left py-1.5 text-xs uppercase tracking-widest text-muted-foreground font-medium">{rightHeader}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([left, right]) => (
              <tr key={left} className="border-b border-border/50 last:border-0">
                <td className="py-1.5 pr-3 text-foreground font-medium align-top leading-snug">{left}</td>
                <td className="py-1.5 text-muted-foreground font-light leading-snug">{right}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="sm:hidden flex flex-col gap-2">
        {rows.map(([left, right]) => (
          <div key={left} className="bg-accent/30 rounded-lg p-2">
            <p className="text-xs uppercase tracking-widest text-foreground font-medium mb-0.5 leading-snug">{left}</p>
            <p className="text-xs text-muted-foreground font-light leading-snug">{right}</p>
          </div>
        ))}
      </div>
    </>
  );
}

interface ComparisonTableProps {
  badHeader: string;
  goodHeader: string;
  rows: [bad: string, good: string][];
}

/**
 * "Bad vs. good" comparison table, color-coded (red-ish / green-ish).
 * Renders as a table on desktop and stacked cards on mobile.
 */
export function ComparisonTable({ badHeader, goodHeader, rows }: ComparisonTableProps) {
  return (
    <>
      <div className="hidden sm:block overflow-x-auto mb-8 rounded-2xl border border-border shadow-sm">
        <table className="w-full text-sm border-collapse bg-white">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left px-4 py-2 text-xs uppercase tracking-widest text-[hsl(10,40%,45%)] font-medium w-1/2 bg-[hsl(10,45%,96%)]">{badHeader}</th>
              <th className="text-left px-4 py-2 text-xs uppercase tracking-widest text-[hsl(104,28%,32%)] font-medium w-1/2 bg-[hsl(104,30%,96%)]">{goodHeader}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([bad, good], i) => (
              <tr key={i} className="border-b border-border/50 last:border-0 hover:bg-accent/20 transition-colors duration-200">
                <td className="px-4 py-2 text-[hsl(10,25%,42%)] font-light align-top italic leading-snug bg-[hsl(10,45%,98%)]">{bad}</td>
                <td className="px-4 py-2 text-[hsl(104,20%,28%)] font-light align-top leading-snug bg-[hsl(104,30%,98%)]">{good}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="sm:hidden flex flex-col gap-3 mb-8">
        {rows.map(([bad, good], i) => (
          <div key={i} className="rounded-xl border border-border shadow-sm overflow-hidden">
            <div className="px-3 py-2 bg-[hsl(10,45%,96%)] text-[hsl(10,25%,42%)] text-sm font-light italic leading-snug">
              <span className="text-xs uppercase tracking-widest text-[hsl(10,40%,45%)] font-medium block mb-0.5">{badHeader}</span>
              {bad}
            </div>
            <div className="px-3 py-2 bg-[hsl(104,30%,96%)] text-[hsl(104,20%,28%)] text-sm font-light leading-snug">
              <span className="text-xs uppercase tracking-widest text-[hsl(104,28%,32%)] font-medium block mb-0.5">{goodHeader}</span>
              {good}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
