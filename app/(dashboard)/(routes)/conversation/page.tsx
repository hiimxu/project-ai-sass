'use client';

import React, { useEffect, useRef } from 'react';
import { useChat } from 'ai/react';

import ToolNavigation from '@/components/dashboard/tool-navigation';
import UserMessage from '@/components/dashboard/user-message';
import AiResponse from '@/components/dashboard/ai-response';
import MarkdownResponse from '@/components/dashboard/markdown-response';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import { useProStore } from '@/store/pro-store';

const ConversationPage = () => {
    const containerRef = useRef(null);
    const { handleOpenOrCloseProModel } = useProStore();
    const {
        messages,
        input,
        handleInputChange,
        handleSubmit,
        isLoading,
        stop,
        error,
        setMessages,
    } = useChat({
        api: '/api/conversation',
    });

    useEffect(() => {
        if (error) {
            const errorParsed = JSON.parse(error.message);
            if (errorParsed?.status === 403) {
                handleOpenOrCloseProModel();
            }
        }
    }, [error, handleOpenOrCloseProModel]);

    const handleClearChat = () => {
        setMessages([]);
    };

    return (
        <div className="h-full relative flex flex-col justify-between">
            <div
                className="overflow-y-auto space-y-10 scroll-smooth h-[calc(100vh_-_180px)]"
                ref={containerRef}
            >
                {messages.length > 0 ? (
                    <>
                        {messages.map((mess) => (
                            <div className="whitespace-pre-wrap" key={mess.id}>
                                {mess.role === 'user' ? (
                                    <UserMessage>
                                        <MarkdownResponse
                                            content={mess.content}
                                        />
                                    </UserMessage>
                                ) : (
                                    <AiResponse>
                                        <MarkdownResponse
                                            content={mess.content}
                                        />
                                    </AiResponse>
                                )}
                            </div>
                        ))}
                        <div className="absolute left-0 bottom-20 text-right w-full pr-3">
                            <Button
                                onClick={handleClearChat}
                                size="sm"
                                variant="outline"
                            >
                                Clear chat
                            </Button>
                        </div>
                    </>
                ) : (
                    <ToolNavigation title="Conversations" />
                )}
            </div>
            <div className="mb-[13px]">
                <form
                    className="flex items-center w-full relative"
                    onSubmit={isLoading ? stop : handleSubmit}
                >
                    <Textarea
                        className="min-h-1 resize-none"
                        onChange={handleInputChange}
                        placeholder="Do you have any question today?"
                        value={input}
                    />
                    <Button
                        className="absolute right-2 gradient-btn"
                        disabled={!input}
                        type="submit"
                    >
                        {isLoading ? 'Stop' : <Send />}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default ConversationPage;
