export const initialNodes = [
  {
    id: "1",
    position: { x: 100, y: 150 },
    data: { label: "📝 Enter Prompt Above" },
    type: "input",
  },
  {
    id: "2",
    position: { x: 500, y: 150 },
    data: { label: "🤖 Result will appear here" },
  },
];

export const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
  },
];