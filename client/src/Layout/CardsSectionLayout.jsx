import Card from "../Component/Card";

export default function CardsSectionLayout({ head, properties }) {
  // console.log(properties);
  return (
    <section className="py-5 px-4 bg-gray-100 cardSecton">
      <h2 className="text-2xl font-bold mb-6">{head}</h2>

      <div className=" cardSecton flex gap-16 overflow-x-auto  overflow-y-hidden scrollbar-hiddden">
        {properties.map((property) => (
          <div
            key={property.id}
            className="min-w-[250px] max-w-[250px] bg-white rounded-lg shadow hover:shadow-lg transition duration-300"
          >
            <Card property={property} />
          </div>
        ))}
      </div>
    </section>
  );
}
