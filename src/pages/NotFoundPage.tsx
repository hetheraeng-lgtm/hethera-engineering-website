export function NotFoundPage() {
  return (
    <div className="container legal-hero" style={{ paddingBottom: 160 }}>
      <p className="eyebrow">404</p>
      <h1>This page doesn't exist.</h1>
      <p>The link may be broken or the page may have moved.</p>
      <a className="btn btn-dark" href="/" style={{ alignSelf: 'flex-start' }}>
        Back to home
      </a>
    </div>
  );
}
