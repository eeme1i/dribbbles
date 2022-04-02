import Link from "next/link";
import Arrow from "../main/arrow";

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
        <a className="rounded-2xl text-white w-20 bg-blue-500 hover:bg-blue-600 duration-300 flex justify-center items-center">
          <Arrow />
        </a>
      </Link>
    </div>
  );
}

export default ShotsItem;
