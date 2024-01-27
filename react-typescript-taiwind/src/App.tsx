import { useState } from "react";
import { cn } from "./utils";
function App() {
  const [toggleBgColor, setToggleBgColor] = useState(false);
  return (
    <div className="container min-h-screen grid place-content-center">
      <h2 className="text-2xl font-medium leading-none">
        Please Read
        <code
          onClick={() => setToggleBgColor((t) => !t)}
          className={cn(
            "inline-block mx-3 bg-green-600 font-bold text-white px-3 py-1 rounded leading-none cursor-pointer",
            {
              "bg-[#0C2D57]": toggleBgColor,
            }
          )}
        >
          README.md
        </code>
        file first, then start !
      </h2>
    </div>
  );
}

export default App;
