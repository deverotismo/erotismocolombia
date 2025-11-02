const defaultConfig = {
  agency_name: "Elite Models Agency",
  hero_title: "Descubre el Talento Extraordinario",
  hero_subtitle: "Conectamos marcas con las mejores modelos profesionales para campañas que inspiran y cautivan",
  about_title: "Nuestra Historia",
  about_description: "Con más de 10 años de experiencia en la industria del modelaje, hemos construido una reputación sólida conectando marcas prestigiosas con talento excepcional. Nuestro enfoque personalizado garantiza que cada campaña sea única y memorable.",
  models_title: "Nuestras Modelos",
  contact_title: "Trabajemos Juntos",
  contact_description: "¿Listo para llevar tu marca al siguiente nivel? Contacta con nosotros y descubre cómo nuestras modelos pueden hacer brillar tu próxima campaña.",
  background_color: "#dc2626",
  surface_color: "#ffffff",
  text_color: "#111827",
  primary_action_color: "#fbbf24",
  secondary_action_color: "#ef4444",
  font_family: "Inter",
  font_size: 16
};

async function onConfigChange(config) {
  // Update text content
  document.getElementById('agency-name').textContent = config.agency_name || defaultConfig.agency_name;
  document.getElementById('footer-agency-name').textContent = config.agency_name || defaultConfig.agency_name;
  document.getElementById('hero-title').innerHTML =
    (config.hero_title || defaultConfig.hero_title).replace('Extraordinario', '<span class="gold-accent">Extraordinario</span>');
  document.getElementById('hero-subtitle').textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
  document.getElementById('about-title').textContent = config.about_title || defaultConfig.about_title;
  document.getElementById('about-description').textContent = config.about_description || defaultConfig.about_description;
  document.getElementById('models-title').textContent = config.models_title || defaultConfig.models_title;
  document.getElementById('contact-title').textContent = config.contact_title || defaultConfig.contact_title;
  document.getElementById('contact-description').textContent = config.contact_description || defaultConfig.contact_description;

  // Apply colors
  const backgroundColor = config.background_color || defaultConfig.background_color;
  const surfaceColor = config.surface_color || defaultConfig.surface_color;
  const textColor = config.text_color || defaultConfig.text_color;
  const primaryActionColor = config.primary_action_color || defaultConfig.primary_action_color;
  const secondaryActionColor = config.secondary_action_color || defaultConfig.secondary_action_color;

  document.querySelectorAll('.gradient-bg').forEach(el => {
    el.style.background = `linear-gradient(135deg, ${backgroundColor} 0%, ${backgroundColor}dd 50%, ${backgroundColor}bb 100%)`;
  });

  document.body.style.backgroundColor = surfaceColor;
  document.querySelectorAll('.bg-white, .model-card').forEach(el => el.style.backgroundColor = surfaceColor);
  document.querySelectorAll('.text-gray-900, h1, h2, h3').forEach(el => el.style.color = textColor);

  const buttons = document.querySelectorAll('button');
  buttons.forEach((btn, i) => {
    if (i % 2 === 0) btn.style.background = `linear-gradient(45deg, ${primaryActionColor}, ${primaryActionColor}dd)`;
    else btn.style.backgroundColor = secondaryActionColor;
  });

  document.body.style.fontFamily = `${config.font_family || defaultConfig.font_family}, system-ui, -apple-system, sans-serif`;
  const baseSize = config.font_size || defaultConfig.font_size;
  document.documentElement.style.fontSize = `${baseSize}px`;
}

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange
  });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
