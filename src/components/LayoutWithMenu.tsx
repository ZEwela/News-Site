import Menu from "./Menu";

export default function LayoutWithMenu({ children }: any) {
  return (
    <>
      <Menu />
      {children}
    </>
  );
}
