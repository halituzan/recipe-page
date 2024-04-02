import Image from "next/image";
import { Young_Serif, Outfit } from "next/font/google";

const youngSerif = Young_Serif({ subsets: ["latin"], weight: "400" });
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600", "700"] });
export default function Home() {
  return (
    <main
      className={`${youngSerif.className} ${outfit.className} bg-eggshell w-screen min-h-screen flex justify-start md:justify-center items-start md:items-start`}
    >
      <div className=' my-0 md:my-[130px] bg-white max-w-[46rem] w-full p-0 md:p-8 rounded-[16px]'>
        <section className=''>
          <Image
            className='md:rounded-[16px]'
            src={"/images/image-omelette.jpeg"}
            width={1300}
            height={600}
            alt='omlette'
          />
        </section>
        <section className="mx-[46px] md:mx-0">
          <h1 className='mt-8 text-4xl font-young font-[400]'>
            Simple Omelette Recipe
          </h1>
          <p className='mt-6 text-brown '>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats
          </p>
          <div className='rounded-[16px] p-6 bg-rose-white mt-6 flex flex-col justify-start '>
            <h3 className='text-secondary font-bold text-xl font-outfil mb-2'>
              Preparation time
            </h3>
            <ul className='list-disc pl-2 list-inside list-disc-secondary text-brown'>
              <li className='mb-2 flex justify-start items-center'>
                <span className='min-w-[4px] min-h-[4px] w-1 h-1 bg-primary rounded-full'></span>
                <span className='font-bold ml-6'>Total:</span> Approximately 10
                minutes
              </li>
              <li className='mb-2 flex justify-start items-center'>
                <span className='min-w-[4px] min-h-[4px] w-1 h-1 bg-primary rounded-full'></span>
                <span className='font-bold ml-6'>Preparation:</span> 5 minutes
              </li>
              <li className='flex justify-start items-center'>
                <span className='min-w-[4px] min-h-[4px] w-1 h-1 bg-primary rounded-full'></span>
                <span className='font-bold ml-6'>Cooking:</span> 5 minutes
              </li>
            </ul>
          </div>
        </section>
        <section className='mt-8 mx-[46px] md:mx-0'>
          <h2 className='text-3xl font-young text-primary font-bold mb-4'>
            Ingredients
          </h2>
          <ul className='pl-2 text-brown'>
            {ingredients.map((item) => {
              return (
                <li
                  key={item.id}
                  className='mb-2 flex justify-start items-baseline'
                >
                  <span className='min-w-[4px] min-h-[4px] w-1 h-1 bg-primary rounded-full'></span>
                  <p className='ml-6'>{item.text}</p>
                </li>
              );
            })}
          </ul>
        </section>
        <hr className='my-8 mx-[46px] md:mx-0' />
        <section className='mx-[46px] md:mx-0'>
          <h2 className='text-3xl font-young text-primary font-bold mb-4'>
            Instructions
          </h2>
          <ul className='pl-2 text-brown '>
            {instructions.map((item) => {
              return (
                <li
                  key={item.id}
                  className='mb-2 flex justify-start items-start '
                >
                  <span className='text-primary font-bold '>{item.id}.</span>
                  <p className='ml-4'>
                    <span className='font-bold'>{item.title}</span> {item.text}
                  </p>
                </li>
              );
            })}
          </ul>
        </section>
        <hr className='my-8 mx-[46px] md:mx-0' />
        <section className='mt-8 mx-[46px] md:mx-0'>
          <h2 className='text-3xl font-young text-primary font-bold mb-4'>
            Nutrition
          </h2>
          <p className='mt-8 text-brown'>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <div className=''>
            {nutrition.map((item, index, arr) => {
              return (
                <div
                  className={`grid grid-cols-2 py-3 px-4  ${
                    index !== arr.length - 1 && "border-b"
                  }`}
                >
                  <div className='flex items-center text-brown'>
                    {item.label}
                  </div>
                  <div className='font-bold flex items-center text-primary'>
                    {item.value} {item.prefix}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
const ingredients = [
  {
    id: 1,
    text: "2-3 large eggs",
  },
  {
    id: 2,
    text: "Salt, to taste",
  },
  {
    id: 3,
    text: "Pepper, to taste",
  },
  {
    id: 4,
    text: "1 tablespoon of butter or oil",
  },
  {
    id: 5,
    text: "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
  },
];
const instructions = [
  {
    id: 1,
    title: "Beat the eggs:",
    text: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
  },
  {
    id: 2,
    title: "Heat the pan:",
    text: "Place a non-stick frying pan over medium heat and add butter or oil.",
  },
  {
    id: 3,
    title: "Cook the omelette:",
    text: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
  },
  {
    id: 4,
    title: "Add fillings (optional):",
    text: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
  },
  {
    id: 5,
    title: "Fold and serve:",
    text: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
  },
  {
    id: 6,
    title: "Enjoy:",
    text: "Serve hot, with additional salt and pepper if needed.",
  },
];

const nutrition = [
  {
    id: 1,
    label: "Calories",
    value: "277",
    prefix: "kcal",
  },
  {
    id: 2,
    label: "Carbs",
    value: "0",
    prefix: "g",
  },
  {
    id: 3,
    label: "Protein",
    value: "0",
    prefix: "g",
  },
  {
    id: 4,
    label: "Fat",
    value: "22",
    prefix: "g",
  },
];
