"use client";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Manage BOL",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse potenti..",
      image: "/LetterOfCompletion.png",
    link: "/broker/documents/manage-bol",
  },
  {
    title: "Manage Invoices",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse potenti. ",
      image: "/DriverDocument.png",
    link: "/broker/documents/manage-invoice",
  },
  {
    title: "Contract Management",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse potenti. ",
      image: "/DriverDocument.png",
    link: "/broker/documents/contract-management",
  },
  {
    title: "Review POD",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse potenti. ",
      image: "/DriverDocument.png",
    link: "/broker/documents/review-pod",
  },
];

const page = () => {
  return (
    <div className="min-h-screen flex flex-col p-6 space-y-8">

      {/* cards  */}
      <div className="grid grid-cols-2  gap-6">
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
