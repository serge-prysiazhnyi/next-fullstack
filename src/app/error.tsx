"use client";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  return (
    <div>
      <p>Something went wrong</p>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
