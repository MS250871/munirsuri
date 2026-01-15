const DownloadCVBtn = () => {
  return (
    <a
      href="/Munir Suri CV.pdf"
      download={true}
      className="px-5 py-4 rounded-full button-bg text-white text-sm xl:text-[18px] font-semibold"
    >
      Download CV
    </a>
  );
};

export default DownloadCVBtn;
