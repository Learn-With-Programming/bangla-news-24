// import Image from "next/image";
// import Link from "next/link";

// interface News {
//   id: string;
//   title: string;
//   description: string;
//   category: string;
//   imageUrl: string;
//   imageAlt: string;
//   isLive: boolean;
//   link: string;
//   type: string;
// }

// const MainNews = ({ news }: { news: News[] }) => {
//   const [firstNews, ...otherNews] = news;
//   console.log(news);
//   return (
//     <div className="flex gap-2 p-3">
//       <Link href={`/news/${firstNews.id}`}>
//         <div className="card bg-base-100 w-96 shadow-sm">
//           <figure>
//             <Image
//               height={600}
//               width={600}
//               src={firstNews.imageUrl}
//               alt={firstNews.imageAlt}
//             />
//           </figure>
//           <div className="card-body">
//             <p className="text-red-600 font-semibold">{firstNews.category}</p>
//             <h2 className="card-title">{firstNews.title}</h2>
//             <p>{firstNews.description}</p>
//           </div>
//         </div>
//       </Link>
//       <div className="grid gap-2">
//         {otherNews.slice(0, 4).map((on) => (
//           <div
//             className="card bg-base-100 border border-gray-300 p-5"
//             key={on.id}
//           >
//             <p className="text-red-600 font-semibold">{firstNews.category}</p>
//             <div>{on.title}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MainNews;

import Image from "next/image";
import Link from "next/link";

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
  isLive: boolean;
  link: string;
  type: string;
}

const MainNews = ({ news }: { news: News[] }) => {
  const normalNews = news.filter(
    (item) => !item.isLive && item.type !== "commentary",
  );

  const [firstNews, ...otherNews] = normalNews;

  if (!firstNews) {
    return null;
  }

  return (
    <div className="w-full p-3 sm:p-4 md:p-5">
      <div className="flex flex-col gap-4 md:flex-row md:gap-5">
        {/* Main News */}
        <Link href={`/news/${firstNews.id}`} className="w-full md:flex-1">
          <div className="card bg-base-100 w-full shadow-sm">
            <figure>
              <Image
                height={600}
                width={600}
                src={firstNews.imageUrl}
                alt={firstNews.imageAlt}
                className="h-auto w-full object-cover"
              />
            </figure>

            <div className="card-body p-4 sm:p-5">
              <p className="text-sm font-semibold text-red-600 sm:text-base">
                {firstNews.category}
              </p>

              <h2 className="card-title text-lg sm:text-xl lg:text-2xl">
                {firstNews.title}
              </h2>

              <p className="text-sm sm:text-base">{firstNews.description}</p>
            </div>
          </div>
        </Link>

        {/* Other News */}
        <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 md:w-[40%] md:grid-cols-1">
          {otherNews.slice(0, 4).map((on) => (
            <Link href={`/news/${on.id}`} key={on.id} className="w-full">
              <div className="card bg-base-100 h-full border border-gray-300 p-4 sm:p-5">
                <p className="mb-1 text-sm font-semibold text-red-600">
                  {on.category}
                </p>

                <div className="text-base font-medium sm:text-lg">
                  {on.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainNews;
