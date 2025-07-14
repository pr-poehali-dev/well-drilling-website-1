import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Drill" size={28} className="text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">БурТех</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Услуги</a>
            <a href="#works" className="text-gray-700 hover:text-blue-600 transition-colors">Примеры работ</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">Вопросы</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Контакты</a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Icon name="Phone" size={16} className="mr-2" />
            Связаться
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Профессиональное бурение скважин
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Комплексные услуги по бурению, обустройству и обслуживанию скважин. 
            Современное оборудование и опытные специалисты.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть видео
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр работ от проектирования до технического обслуживания
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader className="text-center">
                <Icon name="Droplets" size={48} className="mx-auto text-blue-600 mb-4" />
                <CardTitle>Бурение скважин</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Бурение водяных скважин для частных домов и коттеджей. Глубина до 200 метров.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader className="text-center">
                <Icon name="Settings" size={48} className="mx-auto text-blue-600 mb-4" />
                <CardTitle>Обустройство</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Установка насосного оборудования, систем водоподготовки и автоматики.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader className="text-center">
                <Icon name="Wrench" size={48} className="mx-auto text-blue-600 mb-4" />
                <CardTitle>Обслуживание</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Регулярное техническое обслуживание и ремонт скважинного оборудования.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader className="text-center">
                <Icon name="Factory" size={48} className="mx-auto text-blue-600 mb-4" />
                <CardTitle>Промышленное бурение</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Бурение скважин для промышленных предприятий и коммерческих объектов.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Примеры работ</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Более 500 успешно завершенных проектов по всей России
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: 'url(/img/cbf47156-f66a-4fe1-bfc9-78e7c2df2ee8.jpg)'}}></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Скважина для коттеджа</h3>
                <p className="text-gray-600 mb-4">Глубина 85м, производительность 3 м³/ч</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Icon name="MapPin" size={16} className="mr-1" />
                  Московская область
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: 'url(/img/2d77978b-771b-4643-96d8-fb3f5c98445f.jpg)'}}></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Промышленная скважина</h3>
                <p className="text-gray-600 mb-4">Глубина 120м, производительность 15 м³/ч</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Icon name="MapPin" size={16} className="mr-1" />
                  Тульская область
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: 'url(/img/a8b372c9-cbd8-4e14-bb74-b93f86a5770b.jpg)'}}></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Система водоснабжения</h3>
                <p className="text-gray-600 mb-4">Комплексное обустройство с автоматикой</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Icon name="MapPin" size={16} className="mr-1" />
                  Калужская область
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Вопросы и ответы</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ответы на самые частые вопросы о бурении скважин
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Сколько времени занимает бурение скважины?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  В среднем бурение скважины глубиной до 100 метров занимает 1-2 дня. 
                  Время зависит от глубины, типа грунта и сложности работ.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Какие документы нужны для бурения?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Для бурения скважины необходимы: договор на бурение, согласование с СЭС, 
                  разрешение на водопользование (для промышленных скважин).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Какая гарантия на работы?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Мы даем гарантию 3 года на буровые работы и 2 года на установленное оборудование. 
                  Также предоставляем гарантию на дебет скважины.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Можно ли бурить зимой?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Да, мы работаем круглый год. Зимнее бурение имеет свои особенности, 
                  но современное оборудование позволяет выполнять работы при любой погоде.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Получите консультацию и расчет стоимости бурения скважины
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Icon name="Phone" size={24} className="text-blue-600" />
                  <div>
                    <p className="font-medium">+7 (495) 123-45-67</p>
                    <p className="text-gray-600">Звоните с 8:00 до 20:00</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Mail" size={24} className="text-blue-600" />
                  <div>
                    <p className="font-medium">info@burtech.ru</p>
                    <p className="text-gray-600">Отвечаем в течение часа</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="MapPin" size={24} className="text-blue-600" />
                  <div>
                    <p className="font-medium">Москва, ул. Промышленная, 15</p>
                    <p className="text-gray-600">Работаем по всей России</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Заказать консультацию</CardTitle>
                <CardDescription>
                  Оставьте заявку и мы свяжемся с вами в течение 15 минут
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Введите ваше имя" />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (999) 123-45-67" />
                </div>
                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea id="message" placeholder="Расскажите о ваших потребностях..." />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Drill" size={28} className="text-blue-400" />
                <h3 className="text-2xl font-bold">БурТех</h3>
              </div>
              <p className="text-gray-400">
                Профессиональное бурение скважин с 2010 года. 
                Качество, надежность, современные технологии.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Бурение скважин</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Обустройство</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Обслуживание</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Промышленное бурение</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@burtech.ru</p>
                <p>Москва, ул. Промышленная, 15</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 БурТех. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;