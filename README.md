# Sistema de Pessoas Desaparecidas - PJCMT

Sistema desenvolvido para a Polícia Judiciária Civil de Mato Grosso para consulta e colaboração em casos de pessoas desaparecidas.

## 📋 Funcionalidades

- **Consulta de Registros**: Visualize pessoas desaparecidas e localizadas
- **Busca Avançada**: Filtre por nome, sexo, status, local, etc.
- **Detalhes Completos**: Informações detalhadas de cada registro
- **Envio de Informações**: Colabore com observações, fotos e localizações
- **Design Responsivo**: Funciona em todos os dispositivos
- **Performance Otimizada**: Lazy loading e componentização modular

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca principal
- **React Router DOM** - Roteamento com lazy loading
- **Tailwind CSS** - Framework CSS para styling
- **Lucide React** - Ícones modernos
- **Vite** - Build tool e dev server
- **Docker** - Containerização

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- Docker (opcional)


### 1. Instalar dependências
```bash
npm install
```

### 2. Executar em desenvolvimento
```bash
npm run dev
```

### 4. Build para produção
```bash
npm run build
npm run preview
```

## 🐳 Docker

### Construir a imagem
```bash
docker build -t pjcmt-sistema .
```

### Executar o container
```bash
docker run -p 3000:3000 pjcmt-sistema
```

A aplicação estará disponível em `http://localhost:3000`

## 🧪 Testes


## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Constrói a aplicação para produção

## 🌐 API

O sistema integra com a API da PJCMT:
- **Base URL**: https://abitus-api.geia.vip/v1
- **Documentação**: https://abitus-api.geia.vip/swagger-ui/index.html#/

## 📱 Responsividade

O sistema foi desenvolvido com breakpoints responsivos:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🎨 Design

- Design limpo e profissional
- Animações sutis e micro-interações
- Interface intuitiva e acessível

## 👨‍💻 Dados do Desenvolvedor

**Nome**: Willian Gomes de Melo Gattass
**Email**: [willian_gattass@outlook.com]

## 📄 Licença

Este projeto foi desenvolvido como teste prático para a PJCMT.
