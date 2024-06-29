import React from "react";

const Marquee = () => {
  const servicesData = [
    { id: 1, title: "Web Developer" },
    { id: 2, title: "Front-end Developer" },
    { id: 3, title: "React.js Developer" },
    { id: 4, title: "Next.js Developer" },
    { id: 5, title: "Node.js Developer" },
    { id: 6, title: "Single Page Application Developer" },
    { id: 7, title: "TypeScript Expert" },
  ];
  return (
    <section className="marquee-section w-full bg-[#FB6514] h-[147px] rounded-tl-[24px] rounded-br-[24px] flex flex-col justify-center">
      <div className="marquee-container">
        <ul className=" list-image-star bg-white">
          {servicesData?.map((item) => (
            <li
              key={item?.id}
              className="font-lufgalight text-[48px] leading-[63px] text-black uppercase"
            >
              {item?.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Marquee;
