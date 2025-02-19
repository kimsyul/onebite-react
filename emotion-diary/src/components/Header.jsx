import './Header.css';

const Header = ({ title, leftChild, rightChild }) => {
  return (
    <div className="Header">
      <section className="header_left">{leftChild}</section>
      <section className="header_center">{title}</section>
      <section className="header_right">{rightChild}</section>
    </div>
  );
};

export default Header;
