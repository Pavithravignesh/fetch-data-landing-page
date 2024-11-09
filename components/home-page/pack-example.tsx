'use client'

import React, { useState } from "react";

const PackageExample: React.FC = () => {
    const codeString = `npm i @pvs-package/fetch-data`;

    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(codeString);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        } catch (err) {
            console.error("Failed to copy text:", err);
        }
    };

    return (
        <div className="relative bg-gray-900 text-white p-4 rounded-lg shadow-lg font-mono">
            {/* Editor-like header with colored dots */}
            <div className="flex items-center mb-2 space-x-1">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>

            {/* Code display */}
            <pre className="overflow-auto">
                <code>{codeString}</code>
            </pre>

            {/* Copy button */}
            <button
                onClick={handleCopy}
                className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white text-sm py-1 px-3 rounded-lg"
            >
                {copied ? "Copied!" : "Copy"}
            </button>
        </div>
    );
};

export default PackageExample;