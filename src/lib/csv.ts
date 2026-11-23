// Turns rows of values into CSV text, and downloads it as a file in the browser.

type Cell = string | number;

// Spreadsheets treat text that starts with = + - or @ as a formula.
// Putting a ' in front keeps free text (names, emails, reasons) from running as one.
export const guard = (text: string): string => (/^[=+\-@]/.test(text) ? `'${text}` : text);

// Wraps a value in quotes when it holds a comma, a quote or a line break.
function escapeCell(value: Cell): string {
  const text = String(value);
  return /[",\r\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

export const toCsv = (rows: Cell[][]): string => rows.map((row) => row.map(escapeCell).join(",")).join("\r\n");

export function downloadCsv(filename: string, csv: string) {
  // The \uFEFF at the start makes Excel read the file as UTF-8, so symbols like •••• show correctly.
  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}