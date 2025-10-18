
import { Component } from 'react';
import catase1 from '../assets/catase1.png'
import catase2 from '../assets/catase2.png'
import catase3 from '../assets/catase3.png'
import ComponentImage from '../assets/Component.png'
import foto1 from '../assets/foto1.png'
import foto2 from '../assets/foto2.png'
import ComponentImage2 from '../assets/Component2.png'
import sayt1 from '../assets/sayt1.png'
import sayt2 from '../assets/sayt2.png'
import sayt3 from '../assets/sayt3.png'

export default function Mains() {
  return (
    <div>

    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="container mx-auto text-center">
         <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Почему Catase?
        </h2>

         <p className="text-gray-600 text-lg mb-12">
          72% людей из 500 организаций по всему миру доверяют Catase
        </p>

   <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
  <img src={catase1} alt="Catase 1" className="w-[150px] h-[150px]" />  
  <img src={catase2} alt="Catase 2" className="w-[150px] h-[150px]" />  
  <img src={catase3} alt="Catase 3" className="w-[150px] h-[150px]" />  
</div>

        </div>
 
        
    </section>



<section className="py-16 px-6 md:px-12 bg-white">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        
         <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Мы упрощаем процесс планировки до минимума
          </h2>

          <p className="text-gray-600 text-lg mb-8">
            Развивайте свой бизнес с помощью автоматической системы планирования. 
            Просто отправьте сообщение по электронной почте, смс или добавьте информацию о наличии свободного времени в Calendery на свой веб-сайт и наблюдайте, как возможные клиенты и специалисты назначают вам важные встречи.
          </p>

          <button className="bg-black hover:bg-gray-700  text-white px-6 py-3 rounded-[100px] font-medium transition">
            Подробнее
          </button>
        </div>

         <div className="md:w-1/2 flex justify-center">
           <img src={ComponentImage} alt="" />
        </div>

      </div>
    </section>

 
     <section className="py-16 px-6 md:px-12 bg-white">
      <div className="container mx-auto text-center md:text-left">
        
         <h2 className="text-3xl  md:text-4xl items-center text-center font-bold text-gray-900 mb-6">
          Эффективные способы повышения <br /> производительности труда
        </h2>

         <p className="text-gray-600 text-center text-lg mb-12">
          Контролируя всю свою работу в единой системе,<br /> вы никогда не упустите из виду 
          то, что имеет наибольшее <br /> значение для бизнеса —  для вашей <br /> ежедневной активности.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
  <img
    src={foto1}
    alt="Productivity 1"
    className="w-full sm:w-[35%] h-auto rounded-xl shadow-md"
  />
  <img
    src={foto2}
    alt="Productivity 2"
    className="w-full sm:w-[35%] h-auto rounded-xl shadow-md"
  />
</div>


      </div>
    </section>

  
<section className="py-16 px-6 md:px-12 bg-white">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        
         <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
Catase поможет вам быстрее оптимизировать рабочий процесс          </h2>

          <p className="text-gray-600 text-lg mb-8">
           Найдите систему, подходящую для вашей организации, - выберите статусы, которые вы будете использовать 
           на каждом этапе процесса, в зависимости от особенностей команды или проекта. С помощью простых и удобных
            схем работы можно четко и ясно отслеживать результаты работы на всех этапах.   </p>

          <button className="bg-black hover:bg-gray-700  text-white px-6 py-3 rounded-[100px] font-medium transition">
            Подробнее
          </button>
        </div>

         <div className="md:w-1/2 flex justify-center">
           <img src={ComponentImage2} alt="" />
        </div>

      </div>
    </section>

 
     <section className="py-16 px-6 md:px-12 bg-white">
      <div className="container mx-auto text-center md:text-left">
        
        
        <h2 className="text-3xl  md:text-4xl items-center text-center font-bold text-gray-900 mb-6">
Возможность подключения к работе <br /> различных инструментов - без ущерба для <br />   безопасности        </h2>

         <p className="text-gray-600 text-center text-lg mb-12">
Интеграция приложений в единую систему учета для обеспечения бесперебойной <br /> работы команд.
 С помощью 200+ интеграций подключите критически важные <br /> приложения к Loremipsum,
  чтобы получить больше пользы от всего <br />технологического блока.  </p>
<p className='text-blue-500 text-center pt-5 pb-10'>Просмотреть все приложения</p>
        
        
         <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
  <img
    src={sayt1}
    alt="Sayt 1"
    className="w-full sm:w-[30%] h-auto rounded-xl shadow-md"
  />
  <img
    src={sayt2}
    alt="Sayt 2"
    className="w-full sm:w-[30%] h-auto rounded-xl shadow-md"
  />
  <img
    src={sayt3}
    alt="Sayt 3"
    className="w-full sm:w-[30%] h-auto rounded-xl shadow-md"
  />
</div>


      </div>
    </section>

 
      <section className="py-16 px-6 md:px-12 bg-[#F1F1F1]">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Часто задаваемые вопросы
        </h2>

        <div className="space-y-6 text-2xl ]">
          <h4 className="font-semibold">Могу ли я начать работу с Catase бесплатно?</h4>
          <p className="text-gray-600 text-lg">
            Попробуйте Loremipsum бесплатно в течение 30 дней, без необходимости использования кредитной карты. 
            Начните с бесплатной пробной версии Business, затем следуйте инструкциям на экране для входа в систему.
          </p>

          <h3>Как создать проект для интерфейса пользователя в Catase?</h3>
          <h3>Является ли Catase решением для разработки понятного интерфейса?</h3>
          <h3>Могу ли я использовать Catase для составления отчетов о проделанной работе с лидами UI?</h3>
          <h3>Какие имеются интеграции для поддержки разработки пользовательского интерфейса Catase?</h3>
          <h3>Могу ли я использовать ваше бесплатное приложение Catase для своих предприятий?</h3>
        </div>
      </div>
    </section>



    <section>
        <div className="bg-[#292C2D] text-white py-12 px-6 md:px-12 text-center">
          <h3 className="text-5xl font-semibold mb-[100px] mt-[100px]">Попробуйте наше программное обеспечение <br /> для контроля работой бесплатно</h3>
            <button className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-full font-medium transition  "> Запросить демо-версию </button> 
            <button className="border-white border-2 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-medium transition ml-10">Попробовать бесплатно
 </button>
        </div>
    </section>

            </div> 
  );
}
