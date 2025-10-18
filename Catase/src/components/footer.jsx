import appStore from "../assets/app.png"
import googlePlay from "../assets/google.png"
export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6 md:px-12">
      <div className="container mx-auto flex  justify-between md:grid-cols-4 gap-8">

         <div>
          <h1 className="text-2xl font-bold text-white mb-4">Catase</h1>
          <p className="text-gray-400 text-sm">
Связь с базовыми <br /> проектами и задачами          </p>
        </div>

         <div>
          <h3 className="font-semibold mb-4 text-white">Продукт</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white">Почему Catase?
</a></li>
            <li><a href="#" className="hover:text-white">Планирование 
</a></li>
            <li><a href="#" className="hover:text-white">Подключить Catase
</a></li>
            <li><a href="#" className="hover:text-white">Цены</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-white">Бизнес</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white">Команды</a></li>
            <li><a href="#" className="hover:text-white">Организация</a></li>
           </ul>
        </div>








        <div>
          <h3 className="font-semibold mb-4 text-white">Предприятие
</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white">О нас
</a></li>
            <li><a href="#" className="hover:text-white">блог</a></li>
            <li><a href="#" className="hover:text-white">Справочники</a></li>
            <li><a href="#" className="hover:text-white">Нажмите</a></li>
           </ul>
        </div>






 

<div>
          <h3 className="font-semibold mb-4 text-white">Поддержка </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white">Поддержка</a></li>
            <li><a href="#" className="hover:text-white">Контакты</a></li>
           </ul>
        </div>

 
 <div>
            <h3 className="font-semibold mb-10 text-white">Скачать программу </h3>
            <img className="mb-4" src={appStore} alt="" />

            <img src={googlePlay} alt="" />
 </div>

      </div>

       <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Catase. Все права защищены.
      </div>
    </footer>
  );
}
