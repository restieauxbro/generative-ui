"use client";

import { useState } from "react";
import { useUIState, useActions } from "ai/rsc";
import type { AI } from "./action";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {  Sparkles, User } from "lucide-react";
import ResizingContainer from "@/components/animations/resizing-container";

export default function Page() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useUIState<typeof AI>();
  const { submitUserMessage } = useActions<typeof AI>();

  return (
    <div className="grid w-screen max-w-screen-md my-12">
      <LayoutGroup>
        <AnimatePresence mode="popLayout">
          {
            // View messages in UI state
            messages.map((message, i) => {
              const isUser = i % 2 === 0 ? true : false;
              return (
                <motion.div
                  key={message.id}
                  exit={{ opacity: 0, y: 20 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="min-h-[5.5rem] border-t py-8 relative"
                  layout
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <ResizingContainer className="overflow-hidden">
                    <div
                      className={cn(
                        "absolute top-7 -left-16 size-8 bg-gray-600 border border-gray-600 rounded grid place-items-center text-white/80",
                        isUser && "bg-white text-gray-700"
                      )}
                    >
                      {i % 2 === 0 ? (
                        <User strokeWidth={1.5} size={20} />
                      ) : (
                        <Sparkles strokeWidth={1.5} size={20} />
                      )}
                    </div>
                    {message.display}
                  </ResizingContainer>
                </motion.div>
              );
            })
          }
        </AnimatePresence>

        <motion.form
          key={"chat-input"}
          className="mt-12"
          layout
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          onSubmit={async (e) => {
            e.preventDefault();

            // Add user message to UI state
            setMessages((currentMessages) => [
              ...currentMessages,
              {
                id: Date.now(),
                display: <div>{inputValue}</div>,
              },
            ]);

            // Submit and get response message
            const responseMessage = await submitUserMessage(inputValue);
            setMessages((currentMessages) => [
              ...currentMessages,
              responseMessage,
            ]);

            setInputValue("");
          }}
        >
          <input
            placeholder="Send a message..."
            className="w-full rounded border border-slate-300 bg-white/60 px-6 p-4 pr-12 shadow-lg backdrop-blur-md focus:bg-white focus:shadow-xl focus:ring-2 focus:ring-offset-4 transition-all duration-200"
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
        </motion.form>
      </LayoutGroup>
    </div>
  );
}
