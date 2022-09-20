const Layout = ({ children }) => {
  return (
    <div>
      <div className="wrapper-layout rel w-100">
        <div className="area-accent-color bg-lush w-100" />
        <div className="area-neutral-color bg-dark-gradient w-100" />
        <div className="area-content flex-wrap bg-background abs flex jc-between v-scroll">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
