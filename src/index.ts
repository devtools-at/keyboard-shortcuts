/**
 * Keyboard Shortcuts
 * Common keyboard shortcuts reference
 *
 * Online tool: https://devtools.at/tools/keyboard-shortcuts
 *
 * @packageDocumentation
 */

function useDebouncedValue<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

const KeyComponent = ({ shortcut }: { shortcut: string }) => {
  if (shortcut === "N/A") {
    return <span className="text-sm text-gray-400 dark:text-gray-500">Not applicable</span>;
  }

  // Split by spaces to handle multi-key shortcuts
  const keys = shortcut.split(" ");

  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      {keys.map((key, index) => (
        <kbd
          key={index}
          className="inline-flex items-center justify-center min-w-[2rem] px-2 py-1 text-xs font-semibold text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded shadow-sm"
        >
          {key}
        </kbd>
      ))}
    </div>
  );
};

// Export for convenience
export default { encode, decode };
