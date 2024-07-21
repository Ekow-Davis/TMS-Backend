import React from 'react';
import { ChatEngine, ChatFeed } from 'react-chat-engine';
import Sidebar from '../../Components/Layout/Sidebar';

const MessagePage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow p-4 bg-white">
        <ChatEngine
          projectID="0a554068-f7b0-45be-b3fd-15e2719e2218"
          userName="DBerks"
          userSecret="JDanso2024"
          height="calc(100vh - 64px)"
          style={{ width: '100%', height: '100%' }}
          renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
      </div>
    </div>
  );
};

export default MessagePage;
