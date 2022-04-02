import FooterLink from "./FooterLink";

function Footer() {
  return (
    <div className="fixed z-20 bottom-4 w-full flex justify-center tracking-normal">
      <div className="hover:bg-black/[0.4] duration-300  flex space-x-8 bg-black/[0.5] rounded-full px-16 py-4 backdrop-blur-lg">
        <FooterLink url="/" value="Home" />
        <FooterLink url="/shots" value="Shots" />
        <FooterLink url="/" value="Contact" />
      </div>
    </div>
  );
}

export default Footer;
