import { useState, type FC, type FormEvent, useRef } from "react";

interface InputProps {
  onCommand: (command: string) => void;
}

const Input: FC<InputProps> = ({ onCommand }) => {
  const [isDisabled, setDisabled] = useState<boolean>(false);
  const [timestamp, setTimestamp] = useState<Date | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const command = inputRef.current?.value;
    if (command && command?.length != 0) {
      setDisabled(true);
      setTimestamp(new Date());
      onCommand(command);
    }
  };

  return (
    <form className="inline-flex gap-x-2 w-full" onSubmit={onSubmit}>
      <div className="inline-flex gap-x-2">
        <span className="text-green-300 glow-green">{"⌥"}</span>
        <span className="text-sky-300 glow-sky">{">"}</span>
      </div>
      <input
        ref={inputRef}
        disabled={isDisabled}
        readOnly={isDisabled}
        autoFocus={true}
        autoComplete="none"
        autoCapitalize="none"
        autoCorrect="none"
        className="flex-1 outline-none bg-transparent text-gray-200"
        aria-label="command input"
        title="type something, try `help`!"
      />
      <div className="text-sky-300 glow-sky">
        {timestamp?.toLocaleTimeString()}
      </div>
    </form>
  );
};

export default Input;
