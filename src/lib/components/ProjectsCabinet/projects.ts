export interface IProjects {
    id: number;
    title: string;
    link?: string;
    data?: {
        mainLanguage: string;
        stack: string;
        problem: { en: string; ptBr: string };
        solution: { en: string; ptBr: string };
    };
    x: number;
    y: number;
    image?: {
        icon: string;
        full: string;
    };
}
export const ITEM_SIZE = 140;
const HALF = 110;
const STEP_Y = 110;
export const gridW = HALF * 2 + ITEM_SIZE;

export const projectDefs = [
    {
        id: 1,
        title: 'SPOTIFY SVM',
        link: 'https://github.com/FlamingoLindo/spotify-svm',
        x: HALF,
        y: 0,
        data: {
            mainLanguage: 'Python',
            stack: 'Python, Scikit-learn, Pandas, Seaborn, Matplotlib',
            problem: {
                en: 'Brazilian music genres and track popularity lacked a data-driven classification model, making it hard to identify patterns across styles like Samba, MPB, Pagode, Forró and Sertanejo.',
                ptBr: 'Gêneros musicais brasileiros e a popularidade das faixas não contavam com um modelo de classificação baseado em dados, dificultando a identificação de padrões em estilos como Samba, MPB, Pagode, Forró e Sertanejo.'
            },
            solution: {
                en: 'Built an SVM classifier using Spotify track data, applying GridSearchCV to tune hyperparameters (C=10, gamma=0.1, kernel=rbf) and permutation importance to reveal which audio features most influence genre and popularity prediction.',
                ptBr: 'Construído um classificador SVM com dados de faixas do Spotify, aplicando GridSearchCV para ajustar hiperparâmetros (C=10, gamma=0.1, kernel=rbf) e importância por permutação para identificar quais atributos de áudio mais influenciam a predição de gênero e popularidade.'
            }
        }
    },
    {
        id: 2,
        title: 'PRIVATRON3000',
        link: 'https://github.com/FlamingoLindo/PRIVATRON3000',
        x: 0,
        y: STEP_Y,
        data: {
            mainLanguage: 'Python',
            stack: 'Python, MicroPython, ESP32, MQTT, Node-RED',
            problem: {
                en: 'Personal spaces lacked automation and comfort control, requiring manual intervention for lighting, temperature, and security monitoring.',
                ptBr: 'Ambientes pessoais não tinham automação e controle de conforto, exigindo intervenção manual para iluminação, temperatura e monitoramento de segurança.'
            },
            solution: {
                en: 'Built an IoT system on an ESP32 integrating PIR, DHT22, ultrasonic and photoresistor sensors with relay-controlled actuators, a servo-driven water sprayer, and remote MQTT control for full environment automation.',
                ptBr: 'Construído um sistema IoT no ESP32 integrando sensores PIR, DHT22, ultrassônico e fotoresistor com atuadores controlados por relé, um aspersor d\'água movido por servo e controle remoto via MQTT para automação completa do ambiente.'
            }
        }
    },
    {
        id: 3,
        title: 'NATOUR',
        link: 'https://github.com/Natour-EcoTour/app',
        x: HALF * 2,
        y: STEP_Y,
        data: {
            mainLanguage: 'TypeScript',
            stack: 'TypeScript, React Native, Expo, Python',
            problem: {
                en: 'Eco-tourism spots and natural points of interest lacked a dedicated mobile platform for discovery, review, and community-driven mapping.',
                ptBr: 'Pontos de ecoturismo e locais de interesse natural não tinham uma plataforma móvel dedicada para descoberta, avaliação e mapeamento colaborativo.'
            },
            solution: {
                en: 'Developed a full-featured mobile app with map-based point discovery, photo uploads, user reviews, authentication, and geolocation — built with Expo Router and a service-layered architecture for clean API communication.',
                ptBr: 'Desenvolvido um aplicativo móvel completo com descoberta de pontos no mapa, upload de fotos, avaliações de usuários, autenticação e geolocalização — construído com Expo Router e arquitetura em camadas de serviço para comunicação limpa com a API.'
            }
        }
    },
    {
        id: 4,
        title: 'JB API',
        link: 'https://github.com/FlamingoLindo/jb_api',
        x: HALF,
        y: STEP_Y * 2,
        data: {
            mainLanguage: 'Rust',
            stack: 'Rust, Actix Web, SeaORM, PostgreSQL, Docker',
            problem: {
                en: 'A business needed a reliable backend to manage users, products, budgets and clients, with secure access control, automated maintenance and proper API documentation.',
                ptBr: 'Uma empresa precisava de um backend confiável para gerenciar usuários, produtos, orçamentos e clientes, com controle de acesso seguro, manutenção automatizada e documentação adequada da API.'
            },
            solution: {
                en: 'Built a versioned REST API in Rust with JWT auth, role-based guards, automatic DB migrations, OpenAPI/Scalar docs, templated email delivery, and background jobs for token cleanup and database dump management.',
                ptBr: 'Construída uma API REST versionada em Rust com autenticação JWT, guardas baseadas em função, migrações automáticas de banco de dados, documentação OpenAPI/Scalar, entrega de e-mails por templates e jobs em segundo plano para limpeza de tokens e gerenciamento de dumps.'
            }
        }
    },
    {
        id: 5,
        title: 'TWITCH OVERLAY',
        link: 'https://github.com/FlamingoLindo/Twitch-Overlay',
        x: 0,
        y: STEP_Y * 3,
        data: {
            mainLanguage: 'TypeScript',
            stack: 'TypeScript, Next.js, React, Socket.IO, Prisma, PostgreSQL, Docker',
            problem: {
                en: 'Streamers lacked a simple self-hosted tool to manage draggable text and image elements on their OBS overlay in real time without reloading the browser source.',
                ptBr: 'Streamers não tinham uma ferramenta auto-hospedada simples para gerenciar elementos de texto e imagem arrastáveis no overlay do OBS em tempo real sem recarregar a fonte do navegador.'
            },
            solution: {
                en: 'Built a Next.js app with a custom Node server sharing a port with Socket.IO, persisting overlay items in Postgres via Prisma and broadcasting create, update, visibility and delete events to all connected clients instantly.',
                ptBr: 'Construído um app Next.js com um servidor Node customizado compartilhando porta com Socket.IO, persistindo itens do overlay no Postgres via Prisma e transmitindo eventos de criação, atualização, visibilidade e exclusão para todos os clientes conectados instantaneamente.'
            }
        }
    },
    {
        id: 6,
        title: 'YT LIVE CHAT',
        link: 'https://github.com/FlamingoLindo/YT-Live-Chat',
        x: HALF * 2,
        y: STEP_Y * 3,
        data: {
            mainLanguage: 'TypeScript',
            stack: 'TypeScript, React Native, Expo, i18next, YouTube Data API v3',
            problem: {
                en: 'YouTube creators and moderators had no dedicated mobile interface to monitor live chat, viewer counts and user roles without relying on the cluttered default YouTube UI.',
                ptBr: 'Criadores e moderadores do YouTube não tinham uma interface móvel dedicada para monitorar o chat ao vivo, contagem de espectadores e funções de usuário sem depender da interface padrão confusa do YouTube.'
            },
            solution: {
                en: 'Built a mobile app with a polished live chat timeline, stream preview via WebView, role badges for owners, moderators and sponsors, context menu moderation actions, and full en/pt-BR localization.',
                ptBr: 'Construído um aplicativo móvel com uma timeline de chat ao vivo refinada, prévia da stream via WebView, emblemas de função para donos, moderadores e patrocinadores, ações de moderação por menu de contexto e localização completa em en/pt-BR.'
            }
        }
    },
    {
        id: 7,
        title: 'SPOTIFY REQUEST ALONG',
        link: 'https://github.com/FlamingoLindo/Spotify-Request-Along',
        x: HALF,
        y: STEP_Y * 4,
        data: {
            mainLanguage: 'Python',
            stack: 'Python, Flask, PostgreSQL, Tailwind CSS, Nginx, Docker',
            problem: {
                en: 'Streamers and hosts had no simple way to let their audience collectively request and queue songs directly to a Spotify session during a live event.',
                ptBr: 'Streamers e apresentadores não tinham uma forma simples de permitir que o público solicitasse e enfileirasse músicas diretamente em uma sessão do Spotify durante um evento ao vivo.'
            },
            solution: {
                en: 'Built a web app with a Flask backend and Tailwind CSS frontend, backed by PostgreSQL for track management and rate limiting, served through Nginx and fully containerized with Docker Compose.',
                ptBr: 'Construído um aplicativo web com backend em Flask e frontend em Tailwind CSS, apoiado por PostgreSQL para gerenciamento de faixas e limitação de requisições, servido pelo Nginx e totalmente containerizado com Docker Compose.'
            }
        }
    },
    {
        id: 8,
        title: 'CHATINGO',
        link: 'https://github.com/FlamingoLindo/Chatingo',
        x: 0,
        y: STEP_Y * 5,
        data: {
            mainLanguage: 'Svelte',
            stack: 'Svelte, TypeScript, Tauri, Rust, Twitch API, 7TV GraphQL',
            problem: {
                en: 'Twitch viewers lacked a lightweight desktop chat client with rich emote support from multiple providers and a customizable multi-channel experience beyond what the default interface offers.',
                ptBr: 'Espectadores da Twitch não tinham um cliente de chat desktop leve com suporte rico a emotes de múltiplos provedores e uma experiência multicanal personalizável além do que a interface padrão oferece.'
            },
            solution: {
                en: 'Building a desktop app with Tauri and SvelteKit featuring multi-channel management, native Twitch and 7TV emote rendering via GraphQL, type-safe DTOs, a service abstraction layer, and Svelte 5 runes for reactive state.',
                ptBr: 'Construindo um app desktop com Tauri e SvelteKit com gerenciamento multicanal, renderização nativa de emotes da Twitch e 7TV via GraphQL, DTOs com tipagem segura, camada de abstração de serviços e runes do Svelte 5 para estado reativo.'
            }
        }
    },
    {
        id: 9,
        title: 'SELENIUM APPIUM ROBOT',
        link: 'https://github.com/FlamingoLindo/Introducao-Selenium-Appium-RobotFramework',
        x: HALF * 2,
        y: STEP_Y * 5,
        data: {
            mainLanguage: 'Python',
            stack: 'Python, Selenium, Appium, Robot Framework',
            problem: {
                en: 'Beginners in test automation had no structured, hands-on learning resource covering web, mobile and keyword-driven testing in a single place.',
                ptBr: 'Iniciantes em automação de testes não tinham um recurso de aprendizado estruturado e prático cobrindo testes web, mobile e orientados a palavras-chave em um único lugar.'
            },
            solution: {
                en: 'Created a multi-module learning repository with progressive lessons covering Selenium for web automation, Appium for mobile device interaction, and Robot Framework for keyword-driven test execution.',
                ptBr: 'Criado um repositório de aprendizado multi-módulo com lições progressivas cobrindo Selenium para automação web, Appium para interação com dispositivos móveis e Robot Framework para execução de testes orientados a palavras-chave.'
            }
        }
    }
];
