import React, { useEffect, useState } from "react";

const SSEComponent = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const eventSource = new EventSource("http://127.0.0.1:8000/api/crawler/start/?project_id=18&url=https://jayshinde.com/");

        eventSource.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data); // Parse incoming JSON
                setMessages((prevMessages) => [...prevMessages, data]); // Append new message
            } catch (error) {
                console.error("Error parsing SSE data:", error);
            }
        };

        eventSource.onerror = () => {
            console.error("SSE connection lost. Closing connection...");
            eventSource.close();
        };

        return () => {
            eventSource.close(); // Cleanup on unmount
        };
    }, []);

    return (
        <div>
            <h2>Server-Sent Events (SSE) from Django</h2>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{JSON.stringify(msg)}</li>
                ))}
            </ul>
        </div>
    );
};

export default SSEComponent;
