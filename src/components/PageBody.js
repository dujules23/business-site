import NavBar from "./NavBar";
import Content from "./Content";

export const PageBody = ({ children }) => {
  return <main>{children}</main>;
};

export const PageContent = ({ title, back, extras, message, children }) => {
  return (
    <div>
      {/* Nav Bar */}
      <NavBar />
      {/* Body Content */}
      <Content>{children}</Content>
    </div>
  );
};

export const PageFooter = ({ children }) => {
  return <div>Footer</div>;
};
