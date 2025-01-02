const Footer = () => {
  return (
    <footer className="footer d-flex flex-row align-items-center justify-content-between px-4 py-3 border-top small">
      <p className="text-secondary mb-1 mb-md-0">
        Copyright © 2024{" "}
        <a href="https://www.nobleui.com/" target="_blank">
          MYSTIC HIVE
        </a>
        .
      </p>
      <p className="text-secondary">
        mystichive@gmail.com
        <i className="mb-1 text-primary ms-1 icon-sm" data-feather="heart"></i>
      </p>
    </footer>
  );
};

export default Footer;
