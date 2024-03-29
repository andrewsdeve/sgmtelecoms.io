(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });
})();


/* CAMBIO DE IDIOMA */

function changeLanguage(language) {
    const titles = {
        'en': 'Ignite the future of connectivity, today.',
        'es': 'Prende el futuro de la conectividad, hoy.',
        'fr': 'Allumez l’avenir de la connexion, aujourd’hui.',
        'de': 'Fahre das Zukunft der Verbindung in Gang.',
        'pt': 'Ligue a evolução da conexão agora.'

    };

    const descriptions = {
        'en': 'As one of the satellite internet operators, sgmtelecoms works in collaboration with its suppliers to offer critical connectivity solutions, which address the world most complex communications challenges.',

        'es': 'Como uno de los operadores de internet satelital, sgmtelecoms trabaja en colaboración con sus proveedores para ofrecer soluciones de conectividad critica, que abordan los desafíos de comunicaciones mas complejos del mundo.',

        'fr': `En tant qu'opérateur Internet par satellite, sgmtelecoms travaille en collaboration avec ses fournisseurs pour proposer des solutions de connectivité critiques, qui répondent aux défis de communication les plus complexes au monde.`,

        'de': `Als einer der Satelliten-Internetbetreiber arbeitet sgmtelecoms mit seinen Lieferanten zusammen, um wichtige Konnektivitätslösungen anzubieten, die den komplexesten Kommunikationsherausforderungen der Welt gerecht werden.`,

        'pt': `Como uma das operadoras de Internet via satélite, a sgmtelecoms trabalha em colaboração com os seus fornecedores para oferecer soluções críticas de conectividade, que abordam os desafios de comunicação mais complexos do mundo.`
    };

    const botones = {
        'en': 'Starts now',
        'es': 'Comienza ahora',
        'fr': 'Démarrez maintenant',
        'de': 'Jetzt anfangen',
        'pt': 'Comece já'
    }

    const subSectors = {
        'en': 'Are you ready for superfast internet service?',
        'es': '¿Estás listo para un servicio de internet superrápido?',
        'fr': 'Êtes-vous prêt pour un service Internet ultra-rapide ?',
        'de': 'Sind Sie bereit für einen superschnellen Internetdienst?',
        'pt': 'Você está pronto para um serviço de Internet super rápido?'
    }

    const paragraph = {
        'en': `It's fast, reliable and consistent, you'll never have to worry about data limits ever again. SgmTelecoms offers the speed you need, and the features you love.`,
        'es': 'Es rápido, fiable y consistente,nunca tendrás que preocuparte por los límites de datos nunca más. SgmTelecoms ofrece la velocidad que necesitas, y las características que amas.',
        'fr': `C'est rapide, fiable et cohérent, vous n'aurez plus jamais à vous soucier des limites de données. SgmTelecoms offre la vitesse dont vous avez besoin et les fonctionnalités que vous aimez.`,
        'de': `Es ist schnell, zuverlässig und konsistent, Sie müssen sich nie wieder Gedanken über Datenbeschränkungen machen. SgmTelecoms bietet die Geschwindigkeit, die Sie brauchen, und die Funktionen, die Sie lieben.`,
        'pt': `É rápido, confiável e consistente, você nunca mais terá que se preocupar com limites de dados. A SgmTelecoms oferece a velocidade que você precisa e os recursos que você adora.`
    }

    const calidadLang = {
        'en': `Quality Oriented`,
        'es': `Orientados a la Calidad`,
        'fr': `Orienté qualité`,
        'de': `Qualitätsorientiert`,
        'pt': `Orientado para a Qualidade`
    }

    const restosLang = {
        'en': `We know the challenges of companies in terms of
        telecommunications, and we know what they expect from a committed supplier. The satisfaction of our clients is our goal.`,
        'es': `Conocemos los retos de las empresas en materia de
        telecomunicación, y sabemos lo que esperan de un proveedor comprometido. La satisfacción de nuestros clientes es nuestra meta.`,
        'fr': `Nous connaissons les enjeux des entreprises en matière de
        télécommunications, et nous savons ce qu'ils attendent d'un fournisseur engagé. La satisfaction de nos clients est notre objectif.`,
        'de': `Wir kennen die Herausforderungen von Unternehmen im Hinblick auf
        Telekommunikation und wir wissen, was sie von einem engagierten Lieferanten erwarten. Die Zufriedenheit unserer Kunden ist unser Ziel.`,
        'pt': `Conhecemos os desafios das empresas em termos de
        telecomunicações, e sabemos o que esperam de um fornecedor comprometido. A satisfação dos nossos clientes é o nosso objetivo.`
    }

    const centradosLang = {
        'en': `Customer Focused`,
        'es': `Centrados en el Cliente`,
        'fr': `Axée sur le client`,
        'de': `Kundenorientiert`,
        'pt': `Focado no cliente`
    }

    const entendemosLang = {
        'en': `We understand that each company or person is different. Us
        We adapt to each client by forming an efficient, effective and productive work team, focused on achieving the proposed objectives.`,
        'es': `Entendemos que cada empresa o persona es diferente. Nos
        adaptamos a cada cliente conformando un equipo de trabajo eficiente, eficaz y productivo, enfocado en alcanzar los objetivos propuestos.`,
        'fr': `Nous comprenons que chaque entreprise ou personne est différente. Nous
        Nous nous adaptons à chaque client en formant une équipe de travail efficiente, efficace et productive, concentrée sur l'atteinte des objectifs proposés.`,
        'de': `Wir verstehen, dass jedes Unternehmen und jede Person anders ist. Uns
        Wir passen uns jedem Kunden an, indem wir ein effizientes, effektives und produktives Arbeitsteam bilden, das sich auf die Erreichung der vorgeschlagenen Ziele konzentriert.`,
        'pt': `Entendemos que cada empresa ou pessoa é diferente. Nós
        Adaptamo-nos a cada cliente formando uma equipa de trabalho eficiente, eficaz e produtiva, focada na concretização dos objetivos propostos.`
    }
    const apasionadoslang = {
        'en': `Passionate`,
        'es': `Apasionados`,
        'fr': `Passionné`,
        'de': `Leidenschaftlich`,
        'pt': `Apaixonado`
    }
    const profesionalesLang = {
        'en': `We are experienced professionals in the industry.
        satellite telecommunications. We are passionate about what we do, helping people connect with the world, it is our passion to work by the client and for the client.`,
        'es': `Somos profesionales con experiencia, en la industria de las
        telecomunicaciones vía satélite. Nos apasiona lo que hacemos, ayudando a las personas a conectarse con el mundo, es nuestra pasion trabajar por el cliente y para el cliente`,
        'fr': `Nous sommes des professionnels expérimentés du secteur.
        télécommunications par satellite. Nous sommes passionnés par ce que nous faisons, aider les gens à se connecter avec le monde, c'est notre passion de travailler par le client et pour le client.`,
        'de': `Wir sind erfahrene Profis der Branche.
        Satellitentelekommunikation. Wir sind mit Leidenschaft bei dem, was wir tun, und helfen Menschen, sich mit der Welt zu verbinden. Es ist unsere Leidenschaft, für den Kunden und für ihn zu arbeiten.`,
        'pt': `Somos profissionais experientes no setor.
        telecomunicações por satélite. Somos apaixonados pelo que fazemos, ajudando as pessoas a se conectarem com o mundo, é nossa paixão trabalhar pelo cliente e para o cliente.`
    }

    const menuInicioLang={
        'en': `Start`,
        'es': `Inicio`,
        'fr': `Début`,
        'de': `Start`,
        'pt': `Começar`
    }
    const menuNosotrosLang={
        'en': `Us`,
        'es': `Nosotros`,
        'fr': `Nous`,
        'de': `Uns`,
        'pt': `Nós`
    }

    const menuSectoresLang={
        'en': `Sectors`,
        'es': `Sectores`,
        'fr': `Secteurs`,
        'de': `Sektoren`,
        'pt': `Setores`
    }
    const menuSolucionesLang={
        'en': `Solutions`,
        'es': `Soluciones`,
        'fr': `Solutions`,
        'de': `Lösungen`,
        'pt': `Soluções`
    }

    const menuContactenosLang={
        'en': `Contact Us`,
        'es': `Contactenos`,
        'fr': `Contactez-nous`,
        'de': `Kontaktiere uns`,
        'pt': `Contate-nos`
    }
    const menuPqrLang={
        'en': `PQR`,
        'es': `PQR`,
        'fr': `PQR`,
        'de': `PQR`,
        'pt': `PQR`
    }
    const menuSectoresDosLang={
        'en': `SECTORS`,
        'es': `SECTORES`,
        'fr': `SECTEURS`,
        'de': `SEKTOREN`,
        'pt': `SETORES`
    }
    const agroLang={
        'en': `Agroindustry`,
        'es': `AgroIndustria`,
        'fr': `Agroindústria`,
        'de': `Agro-Industrie`,
        'pt': `Agroindústria`
    }

    const eduLang={
        'en': `Education`,
        'es': `Educacion`,
        'fr': `Éducation`,
        'de': `Ausbildung`,
        'pt': `Educação`
    }
    const banLang={
        'en': `Banking`,
        'es': `Banca`,
        'fr': `Bancaire`,
        'de': `Bankwesen`,
        'pt': `Bancário`
    }
    const comerSecLang={
        'en': `Trade`,
        'es': `Comercio`,
        'fr': `Commerce`,
        'de': `Handel`,
        'pt': `Troca`
    }
    const enerLang={
        'en': `Energy`,
        'es': `Energia`,
        'fr': `Énergie`,
        'de': `Energie`,
        'pt': `Energia`
    }
    const petroLang={
        'en': `Petroleum`,
        'es': `Petroleo`,
        'fr': `Pétrole`,
        'de': `Petroleum`,
        'pt': `Petróleo`
    }
    const pezcaLang={
        'en': `fish`,
        'es': `Pezca`,
        'fr': `poisson`,
        'de': `Fisch`,
        'pt': `peixe`
    }
    const nuesSoluLang={
        'en': `Our Solutions`,
        'es': `Nuestras Soluciones`,
        'fr': `Nos solutions`,
        'de': `Unsere Lösungen`,
        'pt': `Nossas soluções`
    }
    const intSatLang={
        'en': `Satellite Internet`,
        'es': `Internet Satelital`,
        'fr': `Internet par satellite`,
        'de': `Satelliten-Internet`,
        'pt': `Internet via satélite`
    }
    const accIntLang={
        'en': `Satellite Internet Access`,
        'es': `Accceso Internet Satelital`,
        'fr': `Accès Internet par satellite`,
        'de': `Satelliten-Internetzugang`,
        'pt': `Acesso à Internet via satélite`
    }
    const conecLang={
        'en': `We connect your home, your company or organization to the internet via satellite, no matter how remote your location may be.`,
        'es': `Conectamos tu hogar, tu empresa u organización a internet via satélite, por muy remota que se encuentre su ubicación`,
        'fr': `Nous connectons votre domicile, votre entreprise ou votre organisation à Internet par satellite, quelle que soit l'éloignement de votre emplacement.`,
        'de': `Wir verbinden Ihr Zuhause, Ihr Unternehmen oder Ihre Organisation über Satellit mit dem Internet, egal wie abgelegen Ihr Standort sein mag.`,
        'pt': `Conectamos sua casa, sua empresa ou organização à internet via satélite, não importa quão remota seja sua localização.`
    }

    const featuresLang={
        'en': `Very quick installation.
        - Quality in the care system of our
        services.
        -All types of IP connections and telephony included.`,
        'es': `Instalación muy rápida.
        - Calidad en el sistema de atención de nuestros
        servicios
        -Todo tipo de conexiones IP y telefonía incluida.`,
        'fr': `Installation très rapide.
        - Qualité dans le système de soins de notre
        prestations de service.
        -Tous types de connexions IP et téléphonie inclus.`,
        'de': `Sehr schnelle Installation.
        - Qualität im Pflegesystem unserer
        Dienstleistungen.
        -Alle Arten von IP-Verbindungen und Telefonie inklusive.`,
        'pt': `Instalação muito rápida.
        - Qualidade no sistema de atendimento de nossos
        Serviços.
        -Todos os tipos de conexões IP e telefonia incluídas.`
    }

    const ahoraLang={
        'en': `Start now`,
        'es': `Empieza ahora`,
        'fr': `Commencez maintenant`,
        'de': `Jetzt anfangen`,
        'pt': `Comece agora`
    }
    const ruraLang={
        'en': `Rural Satellite`,
        'es': `Rural Satelital`,
        'fr': `Satellite rural`,
        'de': `Ländlicher Satellit`,
        'pt': `Satélite Rural`
    }
    const feaRuLang={
        'en': `Rural broadband available with unlimited satellite internet for you no matter where you live, even when DSL cable doesn't reach you. Satellite internet is faster than ever, you will be able to watch video clips, download any type of file, learn faster than ever, and you can use it with the operating system of your choice.`,
        'es': `La banda ancha rural disponible con internet satelital ilimitado para usted no importa donde viva, aun cuando el cable DSL no llegan. El internet via satélite es superior de rápido, será capaz de ver los clips de video, descargar cualquier tipo de archivo, aprender mas rápido que nunca, y lo puede usar con el sistema operativo de su preferencia.`,
        'fr': `Haut débit rural disponible avec Internet par satellite illimité pour vous, peu importe où vous habitez, même lorsque le câble DSL ne vous atteint pas. L'Internet par satellite est plus rapide que jamais, vous pourrez regarder des clips vidéo, télécharger tout type de fichier, apprendre plus rapidement que jamais et vous pourrez l'utiliser avec le système d'exploitation de votre choix.`,
        'de': `Ländlicher Breitbandzugang mit unbegrenztem Satelliteninternet steht Ihnen unabhängig von Ihrem Wohnort zur Verfügung, auch wenn das DSL-Kabel Sie nicht erreicht. Das Satelliteninternet ist schneller als je zuvor. Sie können Videoclips ansehen, jede Art von Datei herunterladen, schneller als je zuvor lernen und es mit dem Betriebssystem Ihrer Wahl verwenden.`,
        'pt': `Banda larga rural disponível com internet via satélite ilimitada para você, não importa onde você more, mesmo quando o cabo DSL não chega até você. A internet via satélite está mais rápida do que nunca, você poderá assistir videoclipes, baixar qualquer tipo de arquivo, aprender mais rápido do que nunca e poderá utilizá-la com o sistema operacional de sua preferência.`
    }
    const dirigidoLang={
        'en': `Aimed at hard-to-reach places`,
        'es': `Dirigido a lugares de dificil acceso`,
        'fr': `Destiné aux endroits difficiles d'accès`,
        'de': `Auf schwer zugängliche Stellen ausgerichtet`,
        'pt': `Destinado a locais de difícil acesso`
    }

    const empRuLang={
        'en': `Start now`,
        'es': `Empieza ahora`,
        'fr': `Commencez maintenant`,
        'de': `Jetzt anfangen`,
        'pt': `Comece agora`
    }
    const intEmpresLang={
        'en': `Business Satellite Internet`,
        'es': `Internet Satelital Empresarial`,
        'fr': `Internet par satellite professionnel`,
        'de': `Business-Satelliten-Internet`,
        'pt': `Internet via satélite empresarial`
    }
    const textEmpreLang ={
        'en': `Wanting to maintain the quality of our solutions, the type of business solution is designed for large connectivity projects, which demand greater connection width and, best of all, its price is affordable.`,
        'es': `Queriendo mantener la calidad de nuestras soluciones, el tipo de solución empresarial, esta diseñada para proyectos de conectividad grandes, los cuales demandan mayor ancho de conexión y lo mejor que su precio sea asequible.`,
        'fr': `Soucieux de maintenir la qualité de nos solutions, ce type de solution d'entreprise est conçu pour les grands projets de connectivité, qui exigent une plus grande largeur de connexion et, mieux encore, son prix est abordable.`,
        'de': `Um die Qualität unserer Lösungen aufrechtzuerhalten, ist diese Art von Geschäftslösung für große Konnektivitätsprojekte konzipiert, die eine größere Verbindungsbreite erfordern und, was das Beste ist, einen erschwinglichen Preis haben.`,
        'pt': `Querendo manter a qualidade de nossas soluções, o tipo de solução empresarial é pensada para grandes projetos de conectividade, que demandam maior largura de conexão e, o melhor de tudo, seu preço é acessível.`
    }
    const btnEmpreLang={
        'en': `Start now`,
        'es': `Empieza ahora`,
        'fr': `Commencez maintenant`,
        'de': `Jetzt anfangen`,
        'pt': `Comece agora`
    }

    const intEventLang={
        'en': `Satellite Internet Events`,
        'es': `Internet Satelital Eventos`,
        'fr': `Événements Internet par satellite`,
        'de': `Satelliten-Internet-Events`,
        'pt': `Eventos de Internet via satélite`
    }
    const textIntEventsLang={
        'en': `In this segment of our services, we offer our options (4.5/LTE or Satellite), we carry out the installation and commissioning with a 90 meter Ethernet cable, if use is necessary, we provide a wireless access point up to 60 meters, providing reliable bandwidth.`,
        'es': `En este segmento de nuestros servicios, ofrecemos nuestras opciones (4.5/LTE o Satelital), realizamos la instalación y la puesta en marcha con un cable ethernet de 90 metros, si se hace necesario la utilización, prestamos un punto de acceso inalámbrico hasta 60mts, proporcionando un ancho de banda confiable.`,
        'fr': `Neste segmento de nossos serviços oferecemos nossas opções (4.5/LTE ou Satélite), realizamos a instalação e comissionamento com cabo Ethernet de 90 metros, caso seja necessário uso, disponibilizamos um ponto de acesso wireless de até 60 metros, proporcionando largura de banda confiável.`,
        'de': `In diesem Segment unserer Dienstleistungen bieten wir unsere Optionen (4,5/LTE oder Satellit) an, wir führen die Installation und Inbetriebnahme mit einem 90 Meter langen Ethernet-Kabel durch, bei Bedarf stellen wir einen drahtlosen Zugangspunkt bis zu 60 Metern zur Verfügung zuverlässige Bandbreite.`,
        'pt': `Neste segmento de nossos serviços oferecemos nossas opções (4.5/LTE ou Satélite), realizamos a instalação e comissionamento com cabo Ethernet de 90 metros, caso seja necessário uso, disponibilizamos um ponto de acesso wireless de até 60 metros, proporcionando largura de banda confiável.`
    }

    const text2EventsLang={
        'en': `Users have the assurance that their private network is managed and monitored 7/24/365.`,
        'es': `Los usuarios tienen la seguridad de que su red privda esta administrada y monitoreada 7/24/365.`,
        'fr': `Les utilisateurs ont l'assurance que leur réseau privé est géré et surveillé 7/24/365.`,
        'de': `Benutzer haben die Gewissheit, dass ihr privates Netzwerk rund um die Uhr verwaltet und überwacht wird.`,
        'pt': `Os usuários têm a garantia de que sua rede privada é gerenciada e monitorada 24/7/365 dias por ano.`
    }

    const pymeLang={
        'en': `Satellite Internet SMEs`,
        'es': `Internet Satelital Pymes`,
        'fr': `PME Internet par satellite`,
        'de': `Satelliten-Internet-KMU`,
        'pt': `PMEs de Internet via satélite`
    }
    const textPymeLang={
        'en': `This type of solutions is aimed at projects that need connectivity for Micro and Small organizations that demand greater bandwidth. We maintain the excellence of our connectivity solutions. These solutions are aimed at the Energy, Oil, Fishing, Mining and Financial sectors.`,
        'es': `Este tipo de soluciones esta dirigido a proyectos que necesiten una conectividad Micro y Pequeñas organizaciones que demandan mayores anchos de banda. Mantenemos la excelencia de nuestras soluciones de conectividad,Estas soluciones van dirigidas al sector Energía, Petrolero, Pesquero, Minero y Financiero.`,
        'fr': `Ce type de solutions est destiné aux projets nécessitant une connectivité pour les micro et petites organisations qui exigent une plus grande bande passante. Nous maintenons l’excellence de nos solutions de connectivité, destinées aux secteurs de l’énergie, du pétrole, de la pêche, des mines et de la finance.`,
        'de': `Diese Art von Lösungen richtet sich an Projekte, die Konnektivität für Kleinst- und Kleinunternehmen benötigen, die eine größere Bandbreite benötigen. Wir bewahren die Exzellenz unserer Konnektivitätslösungen. Diese Lösungen richten sich an die Sektoren Energie, Öl, Fischerei, Bergbau und Finanzen.`,
        'pt': `Este tipo de soluções destina-se a projetos que necessitam de conectividade para Micro e Pequenas organizações que exigem maior largura de banda. Mantemos a excelência das nossas soluções de conectividade, direcionadas aos setores de Energia, Petróleo, Pesca, Mineração e Financeiro.`
    }
    const vpnLang={
        'en': `VPN via Satellite`,
        'es': `Vpn via Satélite`,
        'fr': `VPN par satellite`,
        'de': `VPN über Satellit`,
        'pt': `VPN via satélite`
    }
    const textVpnLang={
        'en': `Connect your company, event or delegation remotely but in a secure way via satellite to the company's resources (private MPLS, ERP, CRM), no matter how remote the location, thanks to our professional Satellite Vpn solutions you will never have to worry. You will see yourself disconnected from what really affects your business. 100% compatibility with third-party applications and systems.`,
        'es': `Conecta tu empresa, evento o delegación de forma remota pero de una manera segura mediante satélite a los recursos de la empresa (MPLS privada, ERP, CRM), por muy alejada que sea la ubicación, gracias a nuestras soluciones profesionales de Vpn Satelital nuca te vas a ver desconectado de lo que realmente afecta tu negocio,Compatibilidad del 100%, con aplicaciones y sistemas de terceros.`,
        'fr': `Connectez votre entreprise, événement ou délégation à distance mais de manière sécurisée par satellite aux ressources de l'entreprise (MPLS privés, ERP, CRM), quel que soit l'éloignement du lieu, grâce à nos solutions professionnelles Satellite Vpn vous n'aurez jamais à vous inquiéter. vous vous verrez déconnecté de ce qui affecte réellement votre entreprise. Compatibilité à 100% avec les applications et systèmes tiers.`,
        'de': `Verbinden Sie Ihr Unternehmen, Ihre Veranstaltung oder Ihre Delegation aus der Ferne, aber auf sichere Weise über Satellit mit den Ressourcen des Unternehmens (privates MPLS, ERP, CRM), egal wie abgelegen der Standort ist, dank unserer professionellen Satelliten-VPN-Lösungen müssen Sie sich keine Sorgen machen. Sie Sie werden von dem, was Ihr Unternehmen wirklich betrifft, abgekoppelt sein. 100 % Kompatibilität mit Anwendungen und Systemen von Drittanbietern.`,
        'pt': `Conecte sua empresa, evento ou delegação remotamente, mas de forma segura via satélite, aos recursos da empresa (MPLS, ERP, CRM privados), não importa quão remota seja a localização, graças às nossas soluções profissionais de Satellite Vpn você nunca terá que se preocupar. você se verá desconectado do que realmente afeta o seu negócio. 100% de compatibilidade com aplicativos e sistemas de terceiros.`
    }

    const filoLang={
        'en': `Our philosophy`,
        'es': `Nuestra Filosofia`,
        'fr': `Notre Philosophie`,
        'de': `Unsere Philosophie`,
        'pt': `Nossa filosofia`
    }
    const textFiloLang={
        'en': `Business competition drives us to create new strategies that allow us to excel and achieve our commercial objectives, making the best decisions always focused on our clients.`,
        'es': `La competencia empresarial nos impulsa a crear nuevas estrategias, que permitan sobresalir y alcanzar nuestros objetivos comerciales, tomando las mejores decisiones siempre enfocadas en nuestros clientes.`,
        'fr': `La concurrence commerciale nous pousse à créer de nouvelles stratégies qui nous permettent d'exceller et d'atteindre nos objectifs commerciaux, en prenant les meilleures décisions toujours axées sur nos clients.`,
        'de': `Der geschäftliche Wettbewerb treibt uns dazu, neue Strategien zu entwickeln, die es uns ermöglichen, herausragende Leistungen zu erbringen und unsere kommerziellen Ziele zu erreichen, wobei wir stets die besten Entscheidungen treffen und dabei stets auf unsere Kunden ausgerichtet sind.`,
        'pt': `A concorrência empresarial leva-nos a criar novas estratégias que nos permitam superar-nos e atingir os nossos objetivos comerciais, tomando as melhores decisões sempre focadas nos nossos clientes.`
    }
    const tiMisionLang={
        'en': `MISSION`,
        'es': `MISÍON`,
        'fr': `MISSION`,
        'de': `MISSION`,
        'pt': `MISSÃO`
    }
    const texMisionLang={
        'en': `To be a company that provides satellite internet services in an agile, dynamic and comprehensive manner, contributing its compliance, responsibility, integrity, rectitude, its high human potential and long experience in the sector, thus contributing to the growth, prestige and competitiveness of organizations that have as company name to provide solutions in telecommunications, by providing a service that meets the highest quality standards.!`,
        'es': `Ser una empresa que presta servicios de internet satelital de forma agil, dinámica e integral aportando su cumplimiento, responsabilidad, integridad, rectitud, su alto potencial humano y larga experiencia en el sector, contribuyendo asi al crecimiento, prestigio y competitividad de organizaciones que tengan como razón social el brindar soluciones en telecomunicaciones, mediante la prestación de un servicio que cumpla con los mas altos estándares de calidad.!`,
        'fr': `Être une entreprise qui fournit des services Internet par satellite de manière agile, dynamique et complète, en apportant sa conformité, sa responsabilité, son intégrité, sa rectitude, son haut potentiel humain et sa longue expérience dans le secteur, contribuant ainsi à la croissance, au prestige et à la compétitivité des organisations. qui ont pour nom d'entreprise de fournir des solutions en matière de télécommunications, en fournissant un service répondant aux normes de qualité les plus élevées.!`,
        'de': `MEin Unternehmen zu sein, das Satelliten-Internetdienste auf agile, dynamische und umfassende Weise bereitstellt und dabei seine Compliance, Verantwortung, Integrität, Rechtschaffenheit, sein hohes menschliches Potenzial und seine langjährige Erfahrung in der Branche einbringt und so zum Wachstum, Ansehen und Wettbewerbsfähigkeit von Organisationen beiträgt Unser Firmenname ist es, Lösungen in der Telekommunikation anzubieten, indem wir einen Service bieten, der den höchsten Qualitätsstandards entspricht.!`,
        'pt': `Ser uma empresa que presta serviços de Internet via satélite de forma ágil, dinâmica e abrangente, contribuindo com a sua conformidade, responsabilidade, integridade, retidão, o seu elevado potencial humano e a longa experiência no setor, contribuindo assim para o crescimento, prestígio e competitividade das organizações que têm como denominação social fornecer soluções em telecomunicações, prestando um serviço que cumpra os mais elevados padrões de qualidade.!`
    }
    const tiVisionLang={
        'en': `MISSION`,
        'es': `MISÍON`,
        'fr': `MISSION`,
        'de': `MISSION`,
        'pt': `MISSÃO`
    }
    const textVisionLang={
        'en': `In 2024, be the best company that provides telecommunications services through satellites, complying with current regulations and promoting productive economic growth, ensuring that all communities have access to satellite internet in an affordable way and with high quality standards.`,
        'es': `En el 2024 ser la mejor empresa que proporcione servicios de telecomunicaciones a través de satélites, cumpliendo la normativa vigente e impulsando el crecimiento económico productivo, logrando que todas aquellas comunidades accedan a internet satelital de una forma asequible y con altos entandares de calidad.`,
        'fr': `En 2024, soyez la meilleure entreprise qui fournit des services de télécommunications par satellite, en respectant la réglementation en vigueur et en promouvant une croissance économique productive, en garantissant que toutes les communautés aient accès à l'Internet par satellite de manière abordable et avec des normes de qualité élevées.`,
        'de': `Seien Sie im Jahr 2024 das beste Unternehmen, das Telekommunikationsdienste über Satelliten bereitstellt, die geltenden Vorschriften einhält und ein produktives Wirtschaftswachstum fördert, indem Sie sicherstellen, dass alle Gemeinden auf erschwingliche Weise und mit hohen Qualitätsstandards Zugang zum Satelliteninternet haben.`,
        'pt': `Em 2024, ser a melhor empresa prestadora de serviços de telecomunicações através de satélites, cumprindo a regulamentação vigente e promovendo o crescimento económico produtivo, garantindo que todas as comunidades tenham acesso à Internet via satélite de forma acessível e com elevados padrões de qualidade.`
    }

    const tiTrabajoLang={
        'en': `JOB BOARD`,
        'es': `BOLSA DE TRABAJO`,
        'fr': `SAC DE TRAVAIL`,
        'de': `JOBBÖRSE`,
        'pt': `BOLSA DE EMPREGO`
    }

    const textTrabajoLang={
        'en': `At Sgmtelecoms, we understand that technological innovation and competitiveness require new dynamics, therefore, we are permanently willing to incorporate new talent into the team.
        If you are interested in what we do, consider that you have things to offer the growth of our company and want to exploit all your talents, do not hesitate to send us your resume right now to jobs@sgmtelecoms.com`,
        'es': `En Sgmtelecoms, entendemos que la innovación tecnológica y competitividad exigen nuevos dinamismos, por tanto, estamos permanentemente dispuestos a incorporar talento nuevo al equipo.
        Si te interesa lo que hacemos, considera que tienes cosas que ofrecer al crecimiento de nuestra compañía y quieres explotar todos tus talentos, no dudes enviarnos ahora mismo tu currículum a jobs@sgmtelecoms.com`,
        'fr': `Chez Sgmtelecoms, nous comprenons que l'innovation technologique et la compétitivité nécessitent une nouvelle dynamique, c'est pourquoi nous sommes en permanence disposés à intégrer de nouveaux talents dans l'équipe.
        Si ce que nous faisons vous intéresse, considérez que vous avez des choses à offrir à la croissance de notre entreprise et souhaitez exploiter tous vos talents, n'hésitez pas à nous envoyer votre CV dès maintenant à jobs@sgmtelecoms.com`,
        'de': `Bei Sgmtelecoms verstehen wir, dass technologische Innovation und Wettbewerbsfähigkeit eine neue Dynamik erfordern. Daher sind wir jederzeit bereit, neue Talente in das Team aufzunehmen.
        Wenn Sie sich für unsere Arbeit interessieren, der Meinung sind, dass Sie etwas zum Wachstum unseres Unternehmens beitragen können und alle Ihre Talente nutzen möchten, zögern Sie nicht, uns jetzt Ihren Lebenslauf an jobs@sgmtelecoms.com zu senden`,
        'pt': `Na Sgmtelecoms entendemos que a inovação tecnológica e a competitividade exigem novas dinâmicas, por isso, estamos permanentemente dispostos a incorporar novos talentos na equipa.
        Se você se interessa pelo que fazemos, considera que tem coisas a oferecer ao crescimento da nossa empresa e deseja explorar todos os seus talentos, não hesite em nos enviar seu currículo agora mesmo para jobs@sgmtelecoms.com`
    }

    const pregFreLang={
        'en': `Frequent questions`,
        'es': `Preguntas frecuentes`,
        'fr': `Questions fréquentes`,
        'de': `Häufige Fragen`,
        'pt': `Perguntas frequentes`
    }

    const dudasLang={
        'en': `We clarify your doubts.`,
        'es': `Aclaramos tus dudas.`,
        'fr': `Nous clarifions vos doutes.`,
        'de': `Wir klären Ihre Zweifel.`,
        'pt': `Esclarecemos as suas dúvidas.`
    }

    const primeraPregunta={
        'en': `What are the telecommunications solutions available for your company?`,
        'es': `¿Cuáles son las soluciones disponibles en telecomunicaciones para tu empresa?`,
        'fr': `Quelles sont les solutions de télécommunications disponibles pour votre entreprise ?`,
        'de': `Welche Telekommunikationslösungen gibt es für Ihr Unternehmen?`,
        'pt': `Quais são as soluções de telecomunicações disponíveis para a sua empresa?`
    }

    const segundaPreguntaLang={
        'en': `How many and what products or services do you require for your specific needs?`,
        'es': `¿Cuántos y cuáles son los productos o servicios que requieres para tus necesidades específicas?`,
        'fr': `De combien et de quels produits ou services avez-vous besoin pour vos besoins spécifiques ?`,
        'de': `Wie viele und welche Produkte oder Dienstleistungen benötigen Sie für Ihren spezifischen Bedarf?`,
        'pt': `Quantos e quais produtos ou serviços você precisa para suas necessidades específicas?`
    }

    const terceraPreguntaLang={
        'en': `Do you need to invest in complementary products or services to make them work?`,
        'es': `¿Necesitas invertir en productos o servicios complementarios para que funcionen?`,
        'fr': `Avez-vous besoin d’investir dans des produits ou services complémentaires pour les faire fonctionner ?`,
        'de': `Müssen Sie in ergänzende Produkte oder Dienstleistungen investieren, damit diese funktionieren?`,
        'pt': `Müssen Sie in ergänzende Produkte oder Dienstleistungen investieren, damit diese funktionieren?`
    }

    const formularioLang={
        'en': `Contact Form`,
        'es': `Formulario de contacto`,
        'fr': `Formulaire de contact`,
        'de': `Kontakt Formular`,
        'pt': `Kontakt Formular`
    }
    const detalleFormLang={
        'en': `Write to us and we will contact you shortly`,
        'es': `Escríbenos y en breve los pondremos en contacto contigo`,
        'fr': `Écrivez-nous et nous vous contacterons sous peu`,
        'de': `Schreiben Sie uns und wir werden uns in Kürze bei Ihnen melden`,
        'pt': `Escreva-nos e entraremos em contato em breve`
    }


    
    document.getElementById('detalleForm').textContent = detalleFormLang[language]; 
    document.getElementById('formulario').textContent = formularioLang[language]; 
    document.getElementById('terceraPregunta').textContent = terceraPreguntaLang[language]; 
    document.getElementById('segundaPregunta').textContent = segundaPreguntaLang[language];
    document.getElementById('primeraPregunta').textContent = primeraPregunta[language];
    document.getElementById('dudas').textContent = dudasLang[language];
    document.getElementById('preguntas').textContent = pregFreLang[language];
    document.getElementById('textTrabajo').textContent = textTrabajoLang[language];
    document.getElementById('trabajo').textContent = tiTrabajoLang[language];
    document.getElementById('textVision').textContent = textVisionLang[language];
    document.getElementById('tiVision').textContent = tiVisionLang[language];
    document.getElementById('texMision').textContent = texMisionLang[language];
    document.getElementById('tMision').textContent = tiMisionLang[language];
    document.getElementById('textFilosofia').textContent = textFiloLang[language];
    document.getElementById('filo').textContent = filoLang[language];
    document.getElementById('btnVpn').textContent = btnEmpreLang[language];
    document.getElementById('text2Vpn').textContent = text2EventsLang[language];
    document.getElementById('textVpn').textContent = textVpnLang[language];
    document.getElementById('vpnInter').textContent = vpnLang[language];
    document.getElementById('title').textContent = titles[language];
    document.getElementById('description').textContent = descriptions[language];
    document.getElementById('botonLang').textContent = botones[language];
    document.getElementById('subSectorsLang').textContent = subSectors[language];
    document.getElementById('paragrafo').textContent = paragraph[language];
    document.getElementById('calidad').textContent = calidadLang[language];
    document.getElementById('retos').textContent = restosLang[language];
    document.getElementById('centrados').textContent = centradosLang[language];
    document.getElementById('entendemos').textContent = entendemosLang[language];
    document.getElementById('apasionado').textContent = apasionadoslang[language];
    document.getElementById('profesionales').textContent = profesionalesLang[language];
    document.getElementById('inicioLang').textContent = menuInicioLang[language];
    document.getElementById('nosotrosLang').textContent = menuNosotrosLang[language];
    document.getElementById('sectoreslang').textContent = menuSectoresLang[language];
    document.getElementById('solucionesLang').textContent = menuSolucionesLang[language];
    document.getElementById('contactenosLang').textContent = menuContactenosLang[language];
    document.getElementById('pqrLang').textContent = menuPqrLang[language];
    document.getElementById('sectoresDos').textContent = menuSectoresDosLang[language];
    document.getElementById('agroindustria').textContent = agroLang[language];
    document.getElementById('edu').textContent = eduLang[language];
    document.getElementById('ban').textContent = banLang[language];
    document.getElementById('com').textContent = comerSecLang[language];
    document.getElementById('ene').textContent = enerLang[language];
    document.getElementById('pet').textContent = petroLang[language];
    document.getElementById('pez').textContent = pezcaLang[language];
    document.getElementById('nuSoluciones').textContent = nuesSoluLang[language];
    document.getElementById('intsate').textContent = intSatLang[language];
    document.getElementById('accIntSat').textContent = accIntLang[language];
    document.getElementById('conecIntSat').textContent = conecLang[language];
    document.getElementById('features').textContent = featuresLang[language];
    document.getElementById('empiezaAhora').textContent = ahoraLang[language];
    document.getElementById('rsatelital').textContent = ruraLang[language];
    document.getElementById('featureRural').textContent = feaRuLang[language];
    document.getElementById('dirigidorural').textContent = dirigidoLang[language];
    document.getElementById('empRura').textContent = empRuLang[language];
    document.getElementById('textEmpres').textContent = textEmpreLang[language];
    document.getElementById('btnEmpres').textContent = btnEmpreLang[language];
    document.getElementById('interEvent').textContent = intEventLang[language];
    document.getElementById('intEventText').textContent = textIntEventsLang[language];
    document.getElementById('text2Events').textContent = text2EventsLang[language];
    document.getElementById('btnIntEvent').textContent = btnEmpreLang[language];
    document.getElementById('userTextEmpr').textContent = text2EventsLang[language];
    document.getElementById('pyme').textContent = pymeLang[language];
    document.getElementById('textPyme').textContent = textPymeLang[language];
    document.getElementById('text2Pyme').textContent = text2EventsLang[language];
    document.getElementById('btnPyme').textContent = btnEmpreLang[language];
    

    /* footer traduccion */

    const footerInicioLang={
        'en': `Start`,
        'es': `Inicio`,
        'fr': `Début`,
        'de': `Start`,
        'pt': `Começar`
    }
    const footerNosotrosLang={
        'en': `Us`,
        'es': `Nosotros`,
        'fr': `Nous`,
        'de': `Uns`,
        'pt': `Nós`
    }
    const footerSectoresLang={
        'en': `Sectors`,
        'es': `Sectores`,
        'fr': `Secteurs`,
        'de': `Sektoren`,
        'pt': `Setores`
    }
    const footerSolucionesLang={
        'en': `Solutions`,
        'es': `Soluciones`,
        'fr': `Solutions`,
        'de': `Lösungen`,
        'pt': `Soluções`
    }
    const footerContactenosLang={
        'en': `Contact Us`,
        'es': `Contactenos`,
        'fr': `Contactez-nous`,
        'de': `Kontaktiere uns`,
        'pt': `Contate-nos`
    }

    const footerSusNewlatterLang={
        'en': `Subscribe to the newsletter`,
        'es': `Suscribete a la newsletter`,
        'fr': `Abonnez-vous à la newsletter`,
        'de': `Abonnieren Sie den Newsletter`,
        'pt': `Assine o boletim informativo`
    }

    document.getElementById('fooInicio').textContent = footerInicioLang[language];
    document.getElementById('fooNosotros').textContent = footerNosotrosLang[language];
    document.getElementById('fooSectores').textContent = footerSectoresLang[language];
    document.getElementById('fooSoluciones').textContent = footerSolucionesLang[language];
    document.getElementById('fooContactenos').textContent = footerContactenosLang[language];
    document.getElementById('newsletter').textContent = footerSusNewlatterLang[language];

    
}

