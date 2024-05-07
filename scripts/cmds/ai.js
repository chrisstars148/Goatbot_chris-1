const axios = require('axios');

const Prefixes = [
  'AI',
  'ai',
  'megan',
  'Ai',
];

module.exports = {
  config: {
    name: "ai",
    version: 1.0,
    author: "fatkey",
    longDescription: "chatGptAI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply("CHRIS STARS\n━━━━━━━━━━━━━━\n\nHello! How can I assist you today.⚪");
        return;
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=hello${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

 
    await message.reply(`CHRIS STARS 🧑🏻‍💻\n━━━━━━━━━━━━━━\n${answer}\n━━━━━━━━━━━━━━\nCHRIS STARS`);

    } catch (error) {
      console.error("Error:", error.message);
    }
  }
};
