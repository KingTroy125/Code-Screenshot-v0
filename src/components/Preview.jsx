import { useState } from 'react';
import CodeEditor from './CodeEditor';
import { themes } from '../options';

const previewCode = `function HelloWorld() {
  const [greeting, setGreeting] = useState('Hello World!');

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">{greeting}</h1>
      <button onClick={() => setGreeting('Welcome!')}>
        Change Greeting
      </button>
    </div>
  );
}`;

export default function Preview() {
  return (
    <div className="bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800">
      <div className="p-4 border-b border-neutral-800">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
      </div>
      <div className="p-6">
        <CodeEditor code={previewCode} readOnly />
      </div>
    </div>
  );
} 