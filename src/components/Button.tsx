type CustomButtonProps = {
  children: React.ReactNode; // ReactNode allows various types of children (string, JSX, etc.)
  onClick: () => void; // onClick function prop that doesn't return anything
};
const CustomButton = ({ children, onClick }: CustomButtonProps) => {
  return (
    <button
      className="w-[460px] text-[16px] font-semibold bg-[--primary-color] text-white 
      hover:bg-[--ph-color] hover:ease-in-out 
          hover:transition hover:duration-500 hover:text-white 
          rounded-sm my-3 p-2 border border-slate-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default CustomButton;
