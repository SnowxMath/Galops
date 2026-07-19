import React from "react";

/**
 * Rendu Markdown léger (sans dépendance) : suffisant pour nos cours.
 * Gère : titres `### `, listes `- `, paragraphes, et gras `**...**`.
 */
function renderInline(text: string, keyBase: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**")) {
      return <strong key={`${keyBase}-${i}`}>{p.slice(2, -2)}</strong>;
    }
    return <React.Fragment key={`${keyBase}-${i}`}>{p}</React.Fragment>;
  });
}

export default function Markdown({ content }: { content: string }) {
  const lines = content.split("\n");
  const blocks: React.ReactNode[] = [];
  let list: string[] = [];
  let key = 0;

  const flushList = () => {
    if (list.length === 0) return;
    const items = [...list];
    blocks.push(
      <ul key={`ul-${key++}`}>
        {items.map((it, i) => (
          <li key={i}>
            <span>{renderInline(it, `li-${key}-${i}`)}</span>
          </li>
        ))}
      </ul>,
    );
    list = [];
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (line.startsWith("### ")) {
      flushList();
      blocks.push(<h3 key={`h-${key++}`}>{renderInline(line.slice(4), `h-${key}`)}</h3>);
    } else if (line.startsWith("- ")) {
      list.push(line.slice(2));
    } else if (line.trim() === "") {
      flushList();
    } else {
      flushList();
      blocks.push(<p key={`p-${key++}`}>{renderInline(line, `p-${key}`)}</p>);
    }
  }
  flushList();

  return <div className="prose-galop">{blocks}</div>;
}
