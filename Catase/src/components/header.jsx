
import foto from '../assets/Header.png'
import fotom from '../assets/Header2.png'
export default function Header() {
  return (
    <header className="bg-white py-16 px-6 md:px-12">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
         <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl  text-gray-00 mb-6 leading-snug">
            Простой способ планирования и достижения цели с нашим календарем.
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            Календари Catase связаны с основными проектами и задачами. 
            Это означает, что в календарях Catase всегда есть самые свежие схемы и графики.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-black hover:bg-gray-700 text-white px-6 py-3 rounded-full font-medium transition">
              Попробовать бесплатно
            </button>
            <button className="border border-black text-black hover:bg-blue-50 px-6 py-3 rounded-full font-medium transition">
              Запросить демо-версию
            </button>
          </div>
        </div>

         <div className="md:w-1/2 flex justify-center">
          <img src={foto} alt="eror" />
        </div>
        
      </div>
      <div className='pt-[100px] justify-center'>

    <img src={fotom} alt="eror" />
      </div>
    </header>
  );
}
