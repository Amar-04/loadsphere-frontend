"use client";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Letter of Completion",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse potenti..",
      image: "/LetterOfCompletion.png",
    link: "/carrier/documents/letter-of-completion",
  },
  {
    title: " Driver Documents ",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse potenti. ",
      image: "/DriverDocument.png",
    link: "/carrier/documents/driver-documents",
  },
];

const page = () => {
  return (
    <div className="min-h-screen flex flex-col p-6 space-y-8">

      {/* cards  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Link key={index} href={feature.link} passHref>
            <div className="cursor-pointer rounded-2xl overflow-hidden shadow-md bg-loadLightBlue dark:bg-loadGray transition-transform transform hover:scale-[1.02]">
              <div className="relative w-full h-48">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
