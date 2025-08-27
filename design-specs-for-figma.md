# Design Specifications para Figma - D'MENS BARBEARIA

## 🎨 Paleta de Cores

### Cores Principais
- **Laranja Principal**: `#FE4C02` (dmens-orange)
- **Preto**: `#000000` (dmens-black)  
- **Branco**: `#FFFFFF` (dmens-white)

### Cores Gradientes Utilizadas
- **Gradiente Hero**: `from-black via-gray-900 to-black`
- **Gradiente Overlay**: `from-black/50 to-transparent`
- **Glow Effect**: `rgba(254, 76, 2, 0.7)` para efeitos de brilho

---

## 📝 Tipografia

### Fontes
- **Display/Títulos**: `Playfair Display` (serif)
- **Corpo/Texto**: `Inter` (sans-serif)

### Hierarquia Tipográfica
- **H1 Hero**: `text-6xl md:text-8xl` (96px-128px)
- **H2 Seções**: `text-4xl md:text-5xl` (48px-60px)
- **H3 Subtítulos**: `text-2xl md:text-3xl` (24px-36px)
- **Corpo**: `text-lg` (18px)
- **Pequeno**: `text-sm` (14px)

---

## 🎬 Animações e Efeitos

### Efeitos de Texto
- **Glow Animation**: Brilho pulsante nos títulos principais
- **Typing Effect**: Efeito de digitação nos subtítulos
- **Glitch Effect**: Efeito de falha/glitch em hover

### Efeitos de Botão
- **Pulse Orange**: Animação de pulso com sombra laranja
- **Hover Scale**: Transformação scale(1.05) em hover
- **Backdrop Blur**: Efeito de vidro fosco

### Transições
- **Padrão**: `transition-all duration-300`
- **Lenta**: `transition-all duration-500`
- **Bounce**: `animate-bounce-slow` (2s interval)

---

## 📐 Layout e Espaçamento

### Container Principal
- **Max Width**: `max-w-7xl`
- **Padding**: `px-4 sm:px-6 lg:px-8`
- **Margin**: `mx-auto`

### Seções
- **Padding Vertical**: `py-16 md:py-24`
- **Gap entre elementos**: `space-y-8 md:space-y-12`

### Grid Layouts
- **Services**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **FAQ**: `grid-cols-1 lg:grid-cols-2`
- **Social Proof**: `grid-cols-2 md:grid-cols-4`

---

## 🖼️ Componentes e Elementos

### Botões
1. **Primário**: Fundo laranja, texto branco, efeito pulse
2. **Secundário**: Borda laranja, texto laranja, fundo transparente
3. **WhatsApp**: Verde WhatsApp (#25D366), ícone + texto

### Cards
- **Fundo**: `bg-gray-900/50` com backdrop-blur
- **Borda**: `border border-gray-800`
- **Radius**: `rounded-xl`
- **Hover**: Elevação com sombra laranja

### Elementos Decorativos
- **Corner Decorations**: Elementos SVG nos cantos
- **Floating Elements**: Ícones flutuantes com animação
- **Section Dividers**: Separadores com gradiente

---

## 📱 Responsividade

### Breakpoints (Tailwind)
- **SM**: `640px+`
- **MD**: `768px+`
- **LG**: `1024px+`
- **XL**: `1280px+`

### Mobile First
- Layout em coluna única no mobile
- Expansão para múltiplas colunas em telas maiores
- Ajuste de tamanhos de fonte conforme tela

---

## 🏗️ Estrutura das Seções

1. **Header**: Logo + Menu (hamburger no mobile)
2. **Hero**: Título principal + subtitle + CTA
3. **Services**: Grid de cards com ícones
4. **Courses**: Carrossel/grid de cursos
5. **Social Proof**: Logos/depoimentos
6. **FAQ**: Accordion com perguntas
7. **Final CTA**: Chamada para ação principal
8. **FloatingWhatsApp**: Botão flutuante fixo

---

## 🔧 Como usar no Figma

1. **Importe as cores** para sua paleta do Figma
2. **Configure as fontes** (Playfair Display + Inter)
3. **Crie os componentes** baseados nas especificações
4. **Use plugins** como "Screenshot to Code" para importar layouts
5. **Aplique os efeitos** usando as especificações de sombra e blur

---

## 📸 Para Captura de Tela

**URL do projeto**: http://localhost:5173/

**Recomendações**:
- Use extensão GoFullPage para captura completa
- Capture cada seção individualmente para melhor qualidade
- Teste em diferentes tamanhos de tela
- Documente as interações e hover states
