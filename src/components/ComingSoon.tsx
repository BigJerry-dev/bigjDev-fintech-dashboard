export default function ComingSoon({ name }: { name: string }) {
  return (
    <section className="bg-white border border-line rounded-[28px] p-10 text-center">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-sm text-muted mt-2 max-w-md mx-auto">
        This section is not part of the demo yet. Overview, Transactions and Settlements are live.
      </p>
    </section>
  );
}