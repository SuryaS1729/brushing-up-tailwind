import React from "react";

interface KeyProps {
  children: React.ReactNode;
  className?: string;
  width?: "normal" | "wide" | "wider" | "widest";
  isActive?: boolean;
}

const Key: React.FC<KeyProps> = ({
  children,
  className = "",
  width = "normal",
  isActive = false,
}) => {
  const widthClasses = {
    normal: "w-12",
    wide: "w-16",
    wider: "w-20",
    widest: "w-32",
  };

  return (
    <button
      className={` ${widthClasses[width]} h-12 bg-gray-800 hover:bg-gray-700 active:bg-gray-600 ${isActive ? "bg-blue-600 hover:bg-blue-500" : ""} transform rounded-lg border border-gray-700 text-sm font-medium text-white shadow-lg transition-all duration-150 ease-in-out hover:scale-105 hover:border-gray-600 hover:shadow-xl active:scale-95 ${className} `}
    >
      {children}
    </button>
  );
};

const Keyboard: React.FC = () => {
  return (
    <div className="z-20 inline-block rounded-2xl bg-gray-900 p-6 shadow-2xl">
      {/* Function Row */}
      <div className="mb-2 flex gap-1">
        <Key width="normal">esc</Key>
        <div className="w-4" /> {/* Spacer */}
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">☀︎</span>
            <span className="text-xs">F1</span>
          </div>
        </Key>
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">☀︎</span>
            <span className="text-xs">F2</span>
          </div>
        </Key>
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">⌃</span>
            <span className="text-xs">F3</span>
          </div>
        </Key>
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">🔍</span>
            <span className="text-xs">F4</span>
          </div>
        </Key>
        <div className="w-2" />
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">🎤</span>
            <span className="text-xs">F5</span>
          </div>
        </Key>
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">🌙</span>
            <span className="text-xs">F6</span>
          </div>
        </Key>
        <div className="w-2" />
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">⏮</span>
            <span className="text-xs">F7</span>
          </div>
        </Key>
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">⏯</span>
            <span className="text-xs">F8</span>
          </div>
        </Key>
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">⏭</span>
            <span className="text-xs">F8</span>
          </div>
        </Key>
        <div className="w-2" />
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">🔇</span>
            <span className="text-xs">F10</span>
          </div>
        </Key>
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">🔉</span>
            <span className="text-xs">F11</span>
          </div>
        </Key>
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">🔊</span>
            <span className="text-xs">F12</span>
          </div>
        </Key>
        <div className="w-4" />
        <Key width="normal">⏏︎</Key>
      </div>

      {/* Number Row */}
      <div className="mb-2 flex gap-1">
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">~</span>
            <span>`</span>
          </div>
        </Key>
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">!</span>
            <span>1</span>
          </div>
        </Key>
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">@</span>
            <span>2</span>
          </div>
        </Key>
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">#</span>
            <span>3</span>
          </div>
        </Key>
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">$</span>
            <span>4</span>
          </div>
        </Key>
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">%</span>
            <span>5</span>
          </div>
        </Key>
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">^</span>
            <span>6</span>
          </div>
        </Key>
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">&</span>
            <span>7</span>
          </div>
        </Key>
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">*</span>
            <span>8</span>
          </div>
        </Key>
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">(</span>
            <span>9</span>
          </div>
        </Key>
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">)</span>
            <span>0</span>
          </div>
        </Key>
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">_</span>
            <span>-</span>
          </div>
        </Key>
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">+</span>
            <span>=</span>
          </div>
        </Key>
        <Key width="wider">delete</Key>
      </div>

      {/* QWERTY Row */}
      <div className="mb-2 flex gap-1">
        <Key width="wide">tab</Key>
        <Key>Q</Key>
        <Key>W</Key>
        <Key>E</Key>
        <Key>R</Key>
        <Key>T</Key>
        <Key>Y</Key>
        <Key>U</Key>
        <Key>I</Key>
        <Key>O</Key>
        <Key>P</Key>
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">{"{"}</span>
            <span>[</span>
          </div>
        </Key>
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">{"}"}</span>
            <span>]</span>
          </div>
        </Key>
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">|</span>
            <span>\</span>
          </div>
        </Key>
      </div>

      {/* ASDF Row */}
      <div className="mb-2 flex gap-1">
        <Key width="wider">caps lock</Key>
        <Key>A</Key>
        <Key>S</Key>
        <Key>D</Key>
        <Key>F</Key>
        <Key>G</Key>
        <Key>H</Key>
        <Key>J</Key>
        <Key>K</Key>
        <Key>L</Key>
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">:</span>
            <span>;</span>
          </div>
        </Key>
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">"</span>
            <span>'</span>
          </div>
        </Key>
        <Key width="wider">return</Key>
      </div>

      {/* ZXCV Row */}
      <div className="mb-2 flex gap-1">
        <Key width="wider">shift</Key>
        <Key>Z</Key>
        <Key>X</Key>
        <Key isActive>C</Key>{" "}
        {/* C key is highlighted blue like in the image */}
        <Key>V</Key>
        <Key>B</Key>
        <Key>N</Key>
        <Key>M</Key>
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">{"<"}</span>
            <span>,</span>
          </div>
        </Key>
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">{">"}</span>
            <span>.</span>
          </div>
        </Key>
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">?</span>
            <span>/</span>
          </div>
        </Key>
        <Key width="wider">shift</Key>
      </div>

      {/* Bottom Row */}
      <div className="flex gap-1">
        <Key>fn</Key>
        <Key>control</Key>
        <Key>option</Key>
        <Key>command</Key>
        <Key width="widest"> </Key> {/* Spacebar */}
        <Key>command</Key>
        <Key>option</Key>
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">◀</span>
          </div>
        </Key>
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">▲</span>
            <span className="text-xs">▼</span>
          </div>
        </Key>
        <Key>
          <div className="flex flex-col items-center">
            <span className="text-xs">▶</span>
          </div>
        </Key>
      </div>
    </div>
  );
};

export default Keyboard;
