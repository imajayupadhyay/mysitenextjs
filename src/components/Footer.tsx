export default function Footer() {
  return (
    <footer className="border-t border-dark-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-center">
        <p className="text-xs font-mono text-zinc-600">
          &copy; {new Date().getFullYear()} Ajay Upadhyay. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
