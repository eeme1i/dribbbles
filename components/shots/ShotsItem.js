import Link from "next/link";

function ShotsItem({ name, url, shoturl, orig }) {
  return (
    <div className="justify-between flex rounded-xl bg-neutral-800">
      <div className="pl-8 py-4">
        <p>{name}</p>
        <div className="text-neutral-400">
          by:{" "}
          <Link href={url}>
            <a className=" hover:underline">{orig}</a>
          </Link>
        </div>
      </div>
      <Link href={shoturl}>
        <a className="rounded-2xl w-20 bg-blue-500 hover:bg-blue-600 duration-300 flex justify-center items-center">
          <svg width="64" height="64" fill="none" viewBox="0 0 24 24">
            <path
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M13.75 6.75L19.25 12L13.75 17.25"
            />
            <path
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M19 12H4.75"
            />
          </svg>
        </a>
      </Link>
    </div>
  );
}

export default ShotsItem;
