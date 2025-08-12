"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function ChatPage() {
  const [messages, setMessages] = useState<{ role: "user" | "bot"; content: string }[]>([]);
  const [input, setInput] = useState("");
  const router = useRouter();
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Redirect if not logged in
    if (localStorage.getItem("loggedIn") !== "true") {
      router.push("/");
    }
  }, [router]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user" as const, content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (!res.ok) throw new Error("Failed to get reply");

      const data = await res.json();
      setMessages((prev) => [...prev, { role: "bot", content: data.reply }]);
    } catch {
      toast.error("Error contacting AI");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 shadow-md border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Image src="/logo.ico" alt="Logo" width={40} height={40} />
          <h1 className="text-lg font-bold text-gray-800">ChatBot</h1>
        </div>
        <button
          onClick={() => {
            localStorage.removeItem("loggedIn");
            router.push("/");
          }}
          className="bg-blue-800 hover:bg-blue-600 text-white px-4 py-1 rounded"
        >
          Logout
        </button>
      </header>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-3 flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs px-3 py-2 rounded-lg text-sm shadow ${
                msg.role === "user"
                  ? "bg-green-500 text-white rounded-br-none"
                  : "bg-gray-200 text-gray-800 rounded-bl-none"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </main>

      {/* Input */}
      <footer className="p-4 border-t border-gray-200 flex gap-2 text-gray-800">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-800 hover:bg-blue-600 text-white px-4 rounded"
        >
          Send
        </button>
      </footer>
    </div>
  );
}
