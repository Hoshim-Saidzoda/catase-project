export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
       <div className="text-2xl font-bold ">Catase  </div>

       <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        <li><a href="#" className="hover:text-gray-200">Функции</a></li>
        <li><a href="#" className="hover:text-gray-200">Ресурсы</a></li>
        <li><a href="#" className="hover:text-gray-200">Компания</a></li>
        <li><a href="#" className="hover:text-gray-200">Цены</a></li>
      </ul>

       <div className="hidden md:flex items-center gap-4">
        <li><a href="#" className="hover:text-gray-200">Отдел продаж</a></li>
        <button className="text-gray-700 hover:text-gray-200 font-medium">Войти</button>
        <button className="bg-black hover:bg-gray-200 text-white px-5 py-2 rounded-full font-medium">
          Продолжить
        </button>
      </div>

       <div className="md:hidden">
        <button className="text-gray-700 focus:outline-none text-2xl">☰</button>
      </div>
    </nav>
  );
}
