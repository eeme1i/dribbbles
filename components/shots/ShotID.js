import Link from "next/link";

function ShotID({ name, url, orig }) {
  return (
    <div className="z-30 bottom-4 left-4 fixed tracking-normal ">
      <div className="duration-300 bg-black/[0.5] rounded-xl p-4 backdrop-blur-lg">
        <div className="">
          <p>{name}</p>
          <div className="text-neutral-400">
            by:{" "}
            <Link href={url}>
              <a className="hover:underline">{orig}</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShotID;
