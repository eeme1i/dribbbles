import Link from "next/link";

function FooterLink({ url, value }) {
  return (
    <div className="tracking-tighter font-semibold text-neutral-500 hover:text-neutral-300 transition-all duration-150 mix-blend-difference">
      <Link href={url}>
        <a>{value}</a>
      </Link>
    </div>
  );
}

export default FooterLink;
