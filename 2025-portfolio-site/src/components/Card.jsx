import "../index.css";

export default function Card({ cardTitle, children }) {
  return (
    <div className="green-card">
      <h1 className="green-card-title">{cardTitle}</h1>
      <div className="rounded-md bg-green/63">
        <div className="green-card-text-content">{children}</div>
      </div>
    </div>
  );
}

// max-width: 40rem;
// margin: 2rem auto;
// padding: 2rem;
