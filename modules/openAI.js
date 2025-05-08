const OpenAI = require("openai");

// 初始化 OpenAI（v4.x 语法）
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateBookMark(name, bookList) {
  try {
    const promptText = `Create a bookmark in the user's own style based on his name and booklist. 
    name: ${name}, 
    booklist: "${bookList.join(', ')}"`;
    
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: promptText,
      n: 1,
      size: "1024x1024",
    });
    
    const image_url = response.data[0].url;
    console.log("Generated image URL:", image_url);
    return image_url;
  } catch (error) {
    console.error("Error generating image:", error.message);
    throw error; 
  }
}

module.exports = {
  generateBookMark
};