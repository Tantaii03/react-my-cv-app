export default function NavBar({ pname, colorLinkNavbar }) {
  return (
    <>
      {/* ส่วนของ NavBar  */}
      <div className="w-full flex items-center justify-between px-20 pt-5">
        {/* โลโก้และชื่อเว็บด้านซ้าย */}
        <div className="">
          <span className="text-[#00FF90] text-3xl font-bold">{'>_'}</span>
          <span className="text-white text-3xl font-bold">MISTER Double T</span>
        </div>

        {/* เมนูด้านขวา */}
        <div className="flex gap-5 items-center">
          <a
            href="/"
            className="text-white"
            style={{ color: pname == 'h' ? colorLinkNavbar : '#FFFFFF' }}
          >
            Home
          </a>
          <a
            href="/about"
            className="text-white"
            style={{ color: pname == 'a' ? colorLinkNavbar : '#FFFFFF' }}
          >
            About
          </a>
          <a
            href="/contact"
            className="text-white"
            style={{ color: pname == 'c' ? colorLinkNavbar : '#FFFFFF' }}
          >
            Contact
          </a>
          <a
            href="/portfolio"
            className="text-white border-2 border-white px-4 py-1 rounded-2xl"
            style={{ color: pname == 'p' ? colorLinkNavbar : '#FFFFFF' }}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </>
  );
}