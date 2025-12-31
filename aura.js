// Aura demo chat logic (no real integrations yet — just the interactive feel)

const chat = document.getElementById("chat");
const input = document.getElementById("msg");
const sendBtn = document.getElementById("send");

function addBubble(text, who = "aura") {
  const div = document.createElement("div");
  div.className = who === "user" ? "user" : "aura";
  div.textContent = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function normalize(t) {
  return (t || "").toLowerCase().trim();
}

function auraReply(raw) {
  const t = normalize(raw);

  // fast intent patterns (simple demo)
  if (t.includes("flat tire") || t.includes("tire")) {
    return "Got you. Are you safe right now? If yes, I can pull the closest tire shop and call them.";
  }
  if (t.includes("nearest") && (t.includes("shop") || t.includes("mechan
