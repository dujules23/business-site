const Content = ({ children, styleClass, style }) => {
  return (
    <section
      style={style}
      className={`area-page-content v-scroll main-pad ${
        styleClass ? styleClass : ""
      }`}
    >
      {children}
    </section>
  );
};

export default Content;
