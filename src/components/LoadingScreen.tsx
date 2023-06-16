import { classNames } from "@/lib/utils";
import { Fragment, useEffect, useState, type FC, type ReactNode } from "react";

interface LoadingScreenProps {
  children?: ReactNode;
}

const MAX = 20;

const LoadingScreen: FC<LoadingScreenProps> = ({ children }) => {
  const [chunk, setChunk] = useState<number>(0);

  useEffect(() => {
    let timeout: number;
    if (chunk < MAX) {
      setTimeout(() => {
        setChunk(() => chunk + 1);
      }, 150);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [chunk]);

  return (
    <Fragment>
      {chunk < MAX ? (
        <div className="min-h-screen w-full grid place-content-center text-center">
          <div className="text-xl">
            {new Array(MAX).fill(true).map((_, i) => (
              <span
                className={classNames(
                  i >= chunk ? "text-zinc-600" : "glow-white text-white"
                )}
                key={i}
              >
                {i >= chunk ? "░" : "▓"}
              </span>
            ))}
          </div>
          <span>loading system ...</span>
        </div>
      ) : (
        children
      )}
    </Fragment>
  );
};

export default LoadingScreen;
