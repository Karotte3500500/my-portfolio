type CalloutProps = {
  type?: "info" | "warning";
  children: React.ReactNode;
};

export default function Callout({
  type = "info",
  children,
}: CalloutProps): React.JSX.Element {
  return (
    <div className={`callout callout-${type}`}>
      {children}
    </div>
  );
}