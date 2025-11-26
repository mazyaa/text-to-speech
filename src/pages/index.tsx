import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <h1 className="text-3xl font-bold underline">
        Hello <span className="text-blue-700">World</span>
      </h1>
    </DefaultLayout>
  );
}
