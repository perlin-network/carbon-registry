export default function ErrorDisplay({ error }: { error: any }) {
  const errorNodes = error.errors.reduce((flattened: any, errorObj: any) => {
    for (const property in errorObj) {
      flattened.push(...errorObj[property]);
    }
    return flattened;
  }, []);

  return errorNodes.length ? (
    <ul className="error-container">
      {errorNodes.map((err: string) => (
        <li>{err}</li>
      ))}
    </ul>
  ) : (
    error.message
  );
}
