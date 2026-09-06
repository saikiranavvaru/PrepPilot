function Footer() {
  const year = 2026;

  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="mx-auto flex min-h-16 w-full max-w-[1600px] items-center justify-center px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-slate-500">
          © {year} PrepPilot. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;