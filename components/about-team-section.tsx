import Image from "next/image";
export const AboutTeamSection = () => {
  return (
    <section className=" flex flex-col dark:text-emerald-50 max-w-screen overflow-clip">
      <h2 className="font-bold text-3xl mb-6 text-center">
        Get To Know Our Team
      </h2>
      <div className="flex flex-col md:flex-row md:mx-auto gap-6">
        <div className="">
          <Image
            src={"/staff/Paula-bw.png"}
            alt={"image of Paula, head designer and founder"}
            height={300}
            width={300}
            className="rounded-xl object-cover w-2/3 ml-[13%] md:m-0"
          ></Image>
        </div>
        <div>
          <Image
            src={"/staff/steve.png"}
            alt={"image of Steve, head of construction and founder"}
            height={300}
            width={300}
            className="rounded-xl w-2/3 mx-auto md:m-0"
          ></Image>
        </div>
        <div className="">
          <Image
            src={"/staff/Paula-bw.png"}
            alt={"image of Paula, head designer and founder"}
            height={300}
            width={300}
            className="rounded-xl w-2/3 ml-[26%] md:m-0"
          ></Image>
        </div>
      </div>
    </section>
  );
};
