import Link from "next/link";
import Arrow from "../main/Arrow";

function ShotsItem({ name, url, shoturl, orig }) {
  return (
    <div className="justify-between flex rounded-xl bg-neutral-800 hover:bg-neutral-900 duration-300">
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
          <Arrow />
        </a>
      </Link>
    </div>
  );
}

export default ShotsItem;
