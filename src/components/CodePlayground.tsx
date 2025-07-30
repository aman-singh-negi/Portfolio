import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface CodePlaygroundProps {
  className?: string;
  fileName?: string;
}

const CodePlayground: React.FC<CodePlaygroundProps> = ({
  className = '',
  fileName = 'portfolio.js',
}) => {
  const [text, setText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isTyping, setIsTyping] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);
  const codeContainerRef = useRef<HTMLDivElement>(null);

  const fullCode = `Aman Singh Negi's Portfolio
const portfolio = {
  name: 'Aman Singh Negi',
  role: 'Full Stack Developer',
  stack: ['React', 'Node.js', 'C++', 'Python'],
  intro() {
    return \`Hi, I'm \${this.name}, a \${this.role}.\`;
  }
};
console.log(portfolio.intro());
console.log('Tech Stack:', portfolio.stack.join(', '));`;

  // Typing effect (speed increased to 80ms)
  useEffect(() => {
    if (!isTyping) return;
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < fullCode.length) {
        setText(fullCode.substring(0, currentIndex + 1));
        const lines = fullCode.substring(0, currentIndex + 1).split('\n');
        setCurrentLine(lines.length - 1);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 80); // <-- Updated typing speed

    return () => clearInterval(typingInterval);
  }, [isTyping]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 600);
    return () => clearInterval(cursorInterval);
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (codeContainerRef.current) {
      codeContainerRef.current.scrollTop = codeContainerRef.current.scrollHeight;
    }
  }, [text]);

  const highlightSyntax = (code: string) => {
    if (!code) return [];

    const lines = code.split('\n');

    return lines.map((line, i) => {
      let processedLine = line
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

      if (i === currentLine && isTyping && cursorVisible) {
        processedLine += `<span style="background-color: white; width: 2px; height: 16px; display: inline-block; margin-left: 4px; animation: pulse 1.5s infinite"></span>`;
      }

      return `<div><span style="color: #4B5563; user-select: none; margin-right: 16px">${i + 1}</span>${processedLine}</div>`;
    });
  };

  const highlightedLines = useMemo(
    () => highlightSyntax(text),
    [text, currentLine, cursorVisible, isTyping]
  );

  return (
    <motion.div
      className={`relative z-10 bg-gray-900 rounded-xl shadow-2xl mt-20 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ maxHeight: 'calc(100vh - 120px)', overflowY: 'auto' }}
    >
      {/* Top bar */}
      <div className="bg-gray-800 p-3 flex items-center justify-between">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="text-white text-sm font-mono font-medium bg-gray-700 px-3 py-1 rounded">
          {fileName}
        </div>
        <div className="text-gray-400 text-sm bg-gray-700 px-2 py-1 rounded">
          JavaScript
        </div>
      </div>

      {/* Code block */}
      <div
        ref={codeContainerRef}
        className="p-4 font-mono text-sm"
        style={{
          backgroundColor: '#111827',
          lineHeight: '1.2',
          maxHeight: 'calc(100vh - 180px)',
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
        <pre style={{ margin: 0, padding: 0, color: 'white' }}>
          <code
            aria-label="Simulated code block"
            style={{ display: 'block' }}
            dangerouslySetInnerHTML={{ __html: highlightedLines.join('') }}
          />
        </pre>
      </div>
    </motion.div>
  );
};

export default CodePlayground;
