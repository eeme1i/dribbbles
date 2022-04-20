import Link from "next/link";
import Arrow from "../main/Arrow";

function ShotsItem({ itemname, durl, userurl, shoturl, orig }) {
  return (
    <div className="justify-between flex rounded-xl bg-neutral-800 hover:bg-neutral-900 duration-150">
      <div className="pl-8 py-4">
        <Link href={durl}>
          <a className="hover:underline"> {itemname}</a>
        </Link>
        <div className="text-neutral-400">
          by:{" "}
          <Link href={userurl}>
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
