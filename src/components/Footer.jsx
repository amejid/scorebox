const Footer = () => {
  return (
    <div className="p-7 absolute bottom-0 flex justify-between text-xs text-white/[0.4] w-full">
      <p>
        © <span>{new Date().getFullYear()}</span> ScoreBox
      </p>
      <ul className="flex gap-5">
        <li>About</li>
        <li>Support</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Footer;
