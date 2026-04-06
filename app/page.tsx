export default function Home() {
  return (
    <main className="bg-background flex flex-col items-center w-full min-h-screen">
        <div className="flex flex-col items-center justify-center w-100 h-100 bg-surface border-1 border-border">
          <h1 className="text-foreground">Header</h1>
          <p className="text-foreground">text</p>
          <p className="text-foreground-muted">subtext</p>
        </div>
    </main>
  );
}
