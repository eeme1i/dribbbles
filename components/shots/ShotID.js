import Link from "next/link";

function ShotID({ name, url, userurl, orig }) {
  return (
    <div className="z-30 bottom-4 left-4 fixed tracking-normal hidden sm:block text-sm">
      <div className="duration-300 bg-black/[0.5] rounded-xl p-4 backdrop-blur-lg hover:bg-black/[0.4]">
        <div className="">
          <Link href={url}>
            <a className="hover:underline">{name}</a>
          </Link>
          <div className="text-neutral-400">
            by:{" "}
            <Link href={userurl}>
              <a className="hover:underline">{orig}</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShotID;
