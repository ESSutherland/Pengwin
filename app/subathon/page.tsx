import Image from "next/image";

const Page = () => {
  return (
    <div className="flex justify-center items-center">
      <Image
        src="/UNCATHON2.png"
        alt="Subathon Image"
        width={1920}
        height={1080}
        className="object-fill w-full h-full rounded-lg"
      />
    </div>
  );
};

export default Page;
