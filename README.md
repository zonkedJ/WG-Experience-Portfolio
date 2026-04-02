# WG | Desarrollo Web & Testing

Portafolio profesional de Wendy Gutierrez - Especialista en Desarrollo Frontend y QA Testing

## 🚀 **Stack Tecnológico**

- **Frontend**: HTML5 Semántico
- **Estilos**: Tailwind CSS + CSS Custom Properties
- **JavaScript**: Vanilla JS (ES6+)
- **Animaciones**: CSS @keyframes + GSAP
- **Formularios**: Formspree Integration
- **Deploy**: Vercel Ready

---

## 🎨 **UI/UX Godly - Efectos Visuales Premium**

### **Glitch de Colores (Cian/Rojo)**
Implementado con CSS puro mediante pseudo-elementos y animaciones complejas:

```css
.glitch-logo:hover::before {
    animation: glitch-1 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
    color: #ff0000; /* Red */
    text-shadow: -2px 0 #ff0000;
    clip: rect(0, 900px, 100px, 0);
}

.glitch-title:hover::after {
    animation: glitch-2 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
    color: #00ffff; /* Cyan */
    text-shadow: 2px 0 #00ffff;
    clip: rect(0, 900px, 100px, 0);
}
```

**Características:**
- **20 keyframes** por animación para efecto realista
- **Text-shadow desplazado** para efecto de capas RGB
- **Clip-path dinámico** para fragmentación visual
- **Hover exclusivo** - Solo activo al interactuar

### **Orbe de Energía CSS Puro**
Sistema de animación sin dependencias externas:

```css
.energy-circles {
    position: relative;
    width: 350px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.energy-core {
    width: 60px;
    height: 60px;
    background: radial-gradient(circle, var(--emerald-primary) 0%, transparent 70%);
    box-shadow: 0 0 40px var(--emerald-primary);
    animation: pulse-core 2s ease-in-out infinite;
}
```

**Características:**
- **3 círculos concéntricos** con animación escalonada
- **Núcleo pulsante** con gradiente radial
- **Sin JavaScript** para la animación base
- **Performance optimizada** con GPU acceleration

---

## 🛡️ **QA & Seguridad**

### **Honeypot Anti-Spam (_gotcha)**
Campo invisible para protección automatizada:

```html
<!-- Anti-spam field - invisible to humans -->
<input type="text" name="_gotcha" style="display:none">
```

**Funcionamiento:**
- **Invisible para usuarios** humanos
- **Detectable por bots** automatizados
- **Filtrado automático** por Formspree
- **Zero UX impact** - Sin afectar experiencia real

### **Formspree Integration**
Conexión segura con el endpoint real:

```javascript
fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
        'Accept': 'application/json'
    }
})
.then(response => {
    if (response.ok) {
        showNotification('Briefing enviado con éxito.', 'success');
        form.reset();
    }
})
```

**Características:**
- **Endpoint real**: `https://formspree.io/f/mjgpeoel`
- **Validación cliente** con HTML5
- **Manejo de errores** con feedback visual
- **Reset automático** post-envío

---

## ⚡ **Optimización y Performance**

### **Limpieza de Errores Críticos**
- **Error 403 Resuelto**: Eliminación de Lottie Player externo
- **Error 404 Eliminado**: Remoción de Service Worker
- **GSAP Targets Fixed**: Selectores con IDs específicos
- **Consola Limpia**: Zero errores en producción

### **Optimizaciones Implementadas**
- **CSS-only animations** para reducir dependencies
- **Lazy loading** para imágenes de proyectos
- **GPU acceleration** con `transform3d()`
- **Reduced motion support** para accesibilidad
- **Mobile-first responsive design**

---

## 📁 **Estructura del Proyecto**

```
WG Experience/
├── index.html          # HTML Semántico
├── style.css           # Estilos + Animaciones
├── app.js              # JavaScript Vanilla
├── README.md           # Documentación
├── vercel.json         # Config Deploy
└── assets/            # Imágenes de proyectos
    ├── farmacia.png
    ├── farmacia1.png
    ├── farmacia2.png
    ├── veterinaria1.png
    ├── veterinaria2.png
    ├── veterinaria3.png
    ├── veterinaria4.png
    └── mi-foto.jpg
```

---

## 🚀 **Despliegue en Vercel**

### **Configuración Automática**
El proyecto está **Vercel-ready** con configuración optimizada:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### **Pasos para Deploy**

#### **Opción 1: Windsurf IDE**
1. **Right-click** en carpeta del proyecto
2. **Seleccionar** "Deploy to Vercel"
3. **Confirmar** configuración automática
4. **Wait** para URL de producción

#### **Opción 2: Vercel CLI**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy desde carpeta del proyecto
cd "WG Experience"
vercel --prod
```

#### **Opción 3: Vercel Dashboard**
1. **Login** en vercel.com
2. **New Project** → Import Git Repository
3. **Connect** repo o upload ZIP
4. **Deploy Settings**: Framework preset "Other"
5. **Deploy** → Obtener URL producción

---

## 🎯 **Características Técnicas**

### **Animaciones GSAP**
- **Timeline secuencial** para hero section
- **ScrollTrigger** para animaciones on-scroll
- **Stagger effects** para cards y elementos
- **Performance optimized** con `will-change`

### **Interactive Elements**
- **Custom cursor** con magnetic buttons
- **Canvas particles** con conexión dinámica
- **Image sliders** con auto-play
- **FAQ accordion** con smooth toggle
- **Lightbox gallery** para proyectos

### **SEO & Accesibilidad**
- **Meta tags optimizados**
- **Semantic HTML5 structure**
- **Alt text en imágenes**
- **Keyboard navigation**
- **Screen reader friendly**

---

## 🔧 **Personalización**

### **Colores Branding**
```css
:root {
    --emerald-primary: #10b981;
    --emerald-bright: #34d399;
    --emerald-glow: #6ee7b7;
}
```

### **Fuentes**
- **Syne**: Títulos y branding
- **Inter**: Body text y contenido

### **Breakpoints**
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

---

## 📞 **Contacto y Soporte**

- **Portfolio**: Wendy Gutierrez
- **Email**: Via formulario web
- **Especialidad**: Frontend + QA Testing
- **Stack**: React.js, Node.js, SQL

---

## 📄 **Licencia**

Proyecto desarrollado para Wendy Gutierrez - Todos los derechos reservados.

---

**Status**: ✅ **PRODUCTION READY**  
**Last Updated**: 2026  
**Version**: 1.0.0  
**Deploy**: Vercel Optimized
