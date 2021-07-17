export default function SearchBar({className}){
  return (
    <div className={`flex justify-items-center ${className}`}>
      <input className="text-black menu-text dark:text-white placeholder-black dark:placeholder-white p-2 outline-none bg-transparent" placeholder="Search..." />
    </div>
  );
}