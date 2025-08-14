### Chatbot (Next.js + OpenAI)

This is a simple chatbot web app built with Next.js that integrates with the OpenAI API.
It was created as a test project to explore Next.js app structure, API integration, and UI features like notifications.

### Features

- Next.js 15 (Turbopack) project structure
- OpenAI API integration for chatbot responses
- React Toastify for beautiful, non-intrusive notifications
- Basic login placeholder (default: test@example.com)
- TypeScript support

### Project Structure
```bash
~/chatbot
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── public
├── src
├── tsconfig.json
└── README.md


src/ → App source code (pages, components, API routes)

public/ → Static assets

next.config.ts → Next.js config

eslint.config.mjs → Linting rules
```
### Getting Started

Clone the repository:
```bash
git clone https://github.com/your-username/chatbot.git
cd chatbot

Install dependencies:

npm install

Add your OpenAI API key in an .env.local file:

OPENAI_API_KEY=your_api_key_here

Run the development server:

npm run dev

The app will be available at http://localhost:3000
```

### Notes

This project was built for testing purposes.

OpenAI API usage depends on your account credits/quota — responses may fail if the quota is exhausted.

The login is a placeholder only (test@example.com) and does not include authentication logic.

### Built With

Next.js
React Toastify
OpenAI API