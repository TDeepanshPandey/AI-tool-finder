const tools = [
  { name: "ChatGPT", category: "Writing", description: "Draft posts, emails, and ideas quickly." },
  { name: "Claude", category: "Writing", description: "Long-form writing and thoughtful edits." },
  { name: "GitHub Copilot", category: "Coding", description: "Code suggestions directly in your editor." },
  { name: "Cursor", category: "Coding", description: "AI-first coding workflow and refactoring help." },
  { name: "Midjourney", category: "Image Generation", description: "Generate artistic images from prompts." },
  { name: "DALL·E", category: "Image Generation", description: "Create custom visuals and concept art." },
  { name: "Notion AI", category: "Productivity", description: "Summaries, notes, and planning support." },
  { name: "Grammarly", category: "Productivity", description: "Grammar checks and writing clarity improvements." },
  { name: "Perplexity", category: "Research", description: "AI search with sourced answers for faster research." },
  { name: "Elicit", category: "Research", description: "Research assistant for papers and findings." },
  { name: "Runway", category: "Video", description: "Generate and edit videos with AI tools." },
  { name: "Synthesia", category: "Video", description: "Create AI avatar videos for training and marketing." }
];

const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const toolList = document.getElementById("toolList");
const resultCount = document.getElementById("resultCount");

function renderTools() {
  const query = searchInput.value.trim().toLowerCase();
  const selectedCategory = categorySelect.value;

  const filtered = tools.filter((tool) => {
    const categoryMatch = selectedCategory === "All" || tool.category === selectedCategory;
    const text = `${tool.name} ${tool.category} ${tool.description}`.toLowerCase();
    const searchMatch = text.includes(query);
    return categoryMatch && searchMatch;
  });

  resultCount.textContent = `${filtered.length} tool${filtered.length === 1 ? "" : "s"} found`;

  toolList.textContent = "";

  filtered.forEach((tool) => {
    const card = document.createElement("article");
    card.className = "tool-card";

    const title = document.createElement("h3");
    title.textContent = tool.name;

    const description = document.createElement("p");
    description.textContent = tool.description;

    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = tool.category;

    card.append(title, description, tag);
    toolList.appendChild(card);
  });
}

searchInput.addEventListener("input", renderTools);
categorySelect.addEventListener("change", renderTools);

renderTools();
