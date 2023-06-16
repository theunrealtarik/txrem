import { Suspense, useCallback, type FC } from "react";
import { Commands, Input, Welcome } from "./components";
import { useArray } from "./hooks";

const App: FC = ({}) => {
  const HandledInput: FC = () => <Input onCommand={handleCommand} />;

  const outputs = useArray<FC>([Welcome, HandledInput]);
  const clear = useCallback(() => {
    outputs.wipe();
    outputs.push(() => <HandledInput />);
  }, []);

  const handleCommand = useCallback((command: string) => {
    if (!command) return;
    switch (command) {
      case "clear":
        clear();
        break;
      default:
        const result = Commands.get(command);
        if (result) {
          outputs.push(() => (
            <Suspense>
              <result.output />
            </Suspense>
          ));
        } else {
          outputs.push(() => <>txreq: command not found: {command}</>);
        }
        outputs.push(HandledInput);
        break;
    }
  }, []);

  return (
    <main className="p-4 md:px-24 md:py-12 text-base md:text-lg h-screen w-full">
      <div
        role="list"
        className="h-full p-4 overflow-auto bg-zinc-800 rounded-lg shadow-lg"
      >
        {outputs.values.map((StandardOutput, i) => (
          <div key={i}>{StandardOutput && <StandardOutput />}</div>
        ))}
      </div>
    </main>
  );
};

export default App;
