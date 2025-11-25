import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: 'Shield',
      title: 'Керамическое покрытие',
      description: 'Долговременная защита кузова от царапин, химии и УФ-лучей. Глянцевый блеск на годы.',
      features: ['Защита до 5 лет', 'Гидрофобный эффект', 'Легкая мойка']
    },
    {
      icon: 'Car',
      title: 'Защита кузова',
      description: 'Полиуретановая пленка премиум-класса. Невидимая броня для вашего автомобиля.',
      features: ['Антигравийная защита', 'Самовосстановление', 'Сохранение ЛКП']
    }
  ];

  const gallery = [
    {
      image: 'https://cdn.poehali.dev/projects/cfb7aabf-6062-4f76-9025-739af95fe9a6/files/fbb59179-1791-4103-bcb3-5d14a0b79548.jpg',
      title: 'Керамическое покрытие',
      category: 'Экстерьер'
    },
    {
      image: 'https://cdn.poehali.dev/projects/cfb7aabf-6062-4f76-9025-739af95fe9a6/files/0145719d-31c4-4811-ad19-9d17b137bdd3.jpg',
      title: 'Защитная пленка',
      category: 'Защита кузова'
    },
    {
      image: 'https://cdn.poehali.dev/projects/cfb7aabf-6062-4f76-9025-739af95fe9a6/files/8602baa0-87fa-42bf-b313-648fb228ebd4.jpg',
      title: 'Детейлинг салона',
      category: 'Интерьер'
    },
    {
      image: 'https://cdn.poehali.dev/projects/cfb7aabf-6062-4f76-9025-739af95fe9a6/files/d0648aef-321d-4975-8cbc-3833958abd1f.jpg',
      title: 'Полный детейлинг',
      category: 'Комплекс'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" size={28} className="text-primary" />
            <span className="text-2xl font-bold">PREMIUM DETAILING</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Записаться
            </Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/cfb7aabf-6062-4f76-9025-739af95fe9a6/files/d0648aef-321d-4975-8cbc-3833958abd1f.jpg')`,
            transform: `translateY(${scrollY * 0.5}px) scale(${1 + scrollY * 0.0003})`,
            filter: 'brightness(0.4)'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
        
        <div className="relative z-10 text-center px-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
            BMW M5
            <span className="block text-primary mt-2">В ДЕТАЛЯХ</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Премиальный детейлинг для тех, кто ценит совершенство
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={20} className="mr-2" />
              Записаться на детейлинг
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть видео
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <Icon name="ChevronDown" size={32} className="text-primary" />
        </div>
      </section>

      <section id="services" className="py-24 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              НАШИ <span className="text-primary">УСЛУГИ</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональная защита и уход за вашим автомобилем
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 group animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary transition-colors">
                    <Icon name={service.icon} size={32} className="text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-6 w-full bg-primary hover:bg-primary/90">
                      Узнать подробнее
                      <Icon name="ArrowRight" size={18} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      </section>

      <section id="gallery" className="py-24 px-6 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              НАШИ <span className="text-primary">РАБОТЫ</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждый автомобиль — это произведение искусства
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-xs text-primary font-bold uppercase tracking-wider">{item.category}</span>
                    <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-primary rounded-full p-2">
                    <Icon name="ZoomIn" size={20} className="text-primary-foreground" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Смотреть все работы
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: 'Award', title: '10+ лет', description: 'Опыт работы с премиум авто' },
              { icon: 'Users', title: '2000+', description: 'Довольных клиентов' },
              { icon: 'Star', title: '100%', description: 'Гарантия качества' }
            ].map((stat, index) => (
              <Card key={index} className="p-8 text-center bg-card border-border hover:border-primary transition-all group">
                <div className="inline-flex p-4 rounded-full bg-primary/10 group-hover:bg-primary transition-colors mb-4">
                  <Icon name={stat.icon} size={32} className="text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-4xl font-black mb-2 text-primary">{stat.title}</h3>
                <p className="text-muted-foreground">{stat.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Icon name="Sparkles" size={24} className="text-primary" />
              <span className="text-xl font-bold">PREMIUM DETAILING</span>
            </div>
            <div className="flex gap-6">
              {['Instagram', 'Facebook', 'Youtube'].map((social) => (
                <Button key={social} variant="ghost" size="icon" className="hover:text-primary">
                  <Icon name={social} size={20} />
                </Button>
              ))}
            </div>
            <p className="text-muted-foreground">© 2024 Premium Detailing. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;