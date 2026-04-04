export interface Poll {
  id: number;
  optionA: string;
  optionB: string;
  emojiA: string;
  emojiB: string;
  tags: string[];
}

export const POLLS: Poll[] = [
  { id: 1, optionA: "BMW", optionB: "Mercedes", emojiA: "🚗", emojiB: "🚙", tags: ["cars"] },
  { id: 2, optionA: "iPhone", optionB: "Android", emojiA: "🍎", emojiB: "🤖", tags: ["tech"] },
  { id: 3, optionA: "Cats", optionB: "Dogs", emojiA: "🐱", emojiB: "🐶", tags: ["animals"] },
  { id: 4, optionA: "Pizza", optionB: "Sushi", emojiA: "🍕", emojiB: "🍣", tags: ["food"] },
  { id: 5, optionA: "Summer", optionB: "Winter", emojiA: "☀️", emojiB: "❄️", tags: ["seasons"] },
  { id: 6, optionA: "Coffee", optionB: "Tea", emojiA: "☕", emojiB: "🍵", tags: ["drinks"] },
  { id: 7, optionA: "Netflix", optionB: "YouTube", emojiA: "🎬", emojiB: "▶️", tags: ["media"] },
  { id: 8, optionA: "PlayStation", optionB: "Xbox", emojiA: "🎮", emojiB: "🕹️", tags: ["gaming"] },
  { id: 9, optionA: "Rock", optionB: "Hip-Hop", emojiA: "🎸", emojiB: "🎤", tags: ["music"] },
  { id: 10, optionA: "Batman", optionB: "Superman", emojiA: "🦇", emojiB: "🦸", tags: ["heroes"] },
  { id: 11, optionA: "Nike", optionB: "Adidas", emojiA: "👟", emojiB: "👞", tags: ["brands"] },
  { id: 12, optionA: "Marvel", optionB: "DC", emojiA: "🕷️", emojiB: "🦸", tags: ["comics"] },
  { id: 13, optionA: "Windows", optionB: "macOS", emojiA: "🪟", emojiB: "🍎", tags: ["tech"] },
  { id: 14, optionA: "Coca-Cola", optionB: "Pepsi", emojiA: "🥤", emojiB: "🥤", tags: ["drinks"] },
  { id: 15, optionA: "Football", optionB: "Basketball", emojiA: "⚽", emojiB: "🏀", tags: ["sports"] },
  { id: 16, optionA: "Morning", optionB: "Night", emojiA: "🌅", emojiB: "🌙", tags: ["lifestyle"] },
  { id: 17, optionA: "Beach", optionB: "Mountains", emojiA: "🏖️", emojiB: "🏔️", tags: ["travel"] },
  { id: 18, optionA: "Books", optionB: "Movies", emojiA: "📚", emojiB: "🎥", tags: ["media"] },
  { id: 19, optionA: "Twitter", optionB: "Instagram", emojiA: "🐦", emojiB: "📷", tags: ["social"] },
  { id: 20, optionA: "Bitcoin", optionB: "Ethereum", emojiA: "₿", emojiB: "⟠", tags: ["crypto"] },
];

// polls-meta: 1775237382935

// polls-meta: 1775270746177

// polls-meta: 1775283144016
