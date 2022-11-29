import TextSlider from "../components/TextSlider";

export default function Home() {
  const textList = [
    {
      label: "facebook",
      classList:
        "text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-blue-400",
    },
    {
      label: "instagram",
      classList:
        "text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-violet-600 pb-4",
    },
    {
      label: "shop",
      classList:
        "text-transparent bg-clip-text bg-gradient-to-r from-lime-500 via-lime-600 to-lime-900 pb-3",
    },
  ];
  return (
    <>
      <TextSlider textList={textList} />
    </>
  );
}
