// ============================================================================
// APPLICATION PRINCIPALE — FERME MALEK / MARQUE DOULA (Aïn Oussara - Benhar)
// Bilingue Français / Arabe + Illustrations Bouteilles DOULA + Commande WhatsApp
// ============================================================================

(function () {
  const STORAGE_PRICES_KEY = "doula_custom_prices_v1";
  const STORAGE_LANG_KEY = "doula_site_lang_v1";

  let currentLang = localStorage.getItem(STORAGE_LANG_KEY) || "fr";
  let currentFilter = "all";
  let cart = {}; // { productId: quantity }

  // Charger les prix personnalisés éventuels sauvegardés dans le navigateur
  function loadCustomPrices() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_PRICES_KEY) || "{}");
      if (saved && typeof saved === "object") {
        window.DOULA_CONFIG.products.forEach((p) => {
          if (typeof saved[p.id] === "number" && !isNaN(saved[p.id])) {
            p.price = saved[p.id];
          }
        });
      }
    } catch (e) {
      console.warn(e);
    }
  }

  // Dictionnaire Bilingue Français / Arabe
  const I18N = {
    fr: {
      topLocation: "📍 Ferme Malek — Région de Benhar, Aïn Oussara",
      topQuality: "🌿 Huile d'Olive 100% Pure & Première Pression à Froid",
      topOrder: "Commander :",
      brandSub: "Ferme Malek • Benhar, Aïn Oussara",
      navHome: "Accueil",
      navCatalogue: "Nos Formats & Prix",
      navTerroir: "Notre Ferme",
      navGallery: "Galerie",
      navContact: "Commander",
      langToggle: "عربي",
      cartBtn: "Panier",
      heroPill: "🫒 RÉCOLTE DE LA FERME MALEK — BENHAR (AÏN OUSSARA)",
      heroTitle1: "L'Or Vert Authentique",
      heroTitleGold: "Marque DOULA",
      heroSubtitle:
        "Huile d'olive vierge extra 100% naturelle, issue des oliviers de la Ferme Malek dans la région de Benhar à Aïn Oussara. Disponible en bouteilles en verre (0,37L, 0,75L, 1L) et formats familiaux en plastique (1L, 3L, 5L).",
      heroBtnCatalogue: "Découvrir les Formats & Prix",
      heroBtnWhatsapp: "Commander sur WhatsApp",
      metric1Val: "100% Pure",
      metric1Label: "Première pression à froid",
      metric2Val: "6 Formats",
      metric2Label: "Verre (0.37L à 1L) & Plastique (1L à 5L)",
      metric3Val: "Benhar",
      metric3Label: "Terroir d'Aïn Oussara",
      showcaseBadge: "Gamme Complète DOULA",
      showcaseTitle: "Du Flacon de Table 0,370L au Bidon Familial 5L",
      showcaseSub: "Ferme Malek — Qualité supérieure garantie directement du producteur",
      stripGlassTitle: "Gamme Bouteilles en Verre",
      stripGlassSub: "Idéal pour la table, la conservation longue durée et les cadeaux",
      stripPlasticTitle: "Gamme Bouteilles & Bidons Plastique",
      stripPlasticSub: "Pratique, incassable et économique pour toute la famille",
      catEyebrow: "Catalogue Officiel — Marque DOULA",
      catTitle: "Nos Huiles d'Olive & Produits de la Ferme",
      catDesc:
        "Choisissez votre conditionnement préféré (bouteille en verre ou en plastique) et commandez directement sur WhatsApp au 0554 51 06 78.",
      filterAll: "Tous les produits (9)",
      filterGlass: "🍾 Bouteilles en Verre (1L, 0.75L, 0.37L)",
      filterPlastic: "🏺 Bouteilles Plastique (1L, 3L, 5L)",
      filterDerives: "🌿 Autres Produits Dérivés",
      catLabelVerre: "Gamme Verre • Marque Doula",
      catLabelPlastique: "Gamme Plastique • Marque Doula",
      catLabelDerives: "Produit Dérivé • Ferme Malek",
      originTag: "Benhar • Aïn Oussara",
      btnOrderDirect: "Commander WhatsApp",
      btnAddCart: "+ Panier",
      terroirEyebrow: "Pourquoi Choisir la Marque DOULA ?",
      terroirTitle: "L'Excellence du Terroir de Benhar (Aïn Oussara)",
      terroirDesc:
        "À la Ferme Malek, chaque goutte d'huile d'olive Doula est le fruit d'un savoir-faire rigoureux et d'un respect absolu de la nature.",
      feat1Title: "Récolte Soignée à la Main",
      feat1Desc:
        "Nos olives sont cueillies au moment optimal de maturité dans nos vergers de la région de Benhar pour garantir un goût fruité équilibré.",
      feat2Title: "Extraction à Froid",
      feat2Desc:
        "Trituration rapide sans chauffage pour préserver l'intégralité des vitamines, polyphénols et antioxydants naturels.",
      feat3Title: "Conditionnement Sur-Mesure",
      feat3Desc:
        "Disponible en verre élégant (0,370L, 0,750L, 1L) ou en plastique alimentaire pratique et économique (1L, 3L, 5L).",
      feat4Title: "Direct Producteur",
      feat4Desc:
        "Aucun intermédiaire : vous commandez directement auprès de la Ferme Malek à Aïn Oussara au meilleur rapport qualité/prix.",
      storyTitle: "Ferme Malek — L'Histoire d'une Passion Oléicole à Benhar",
      storyP1:
        "Située dans la région ensoleillée de Benhar à Aïn Oussara, la Ferme Malek cultive ses oliviers avec passion, alliant méthodes agricoles modernes et respect de la tradition.",
      storyP2:
        "Sous notre marque DOULA, nous proposons une huile d'olive vierge extra limpide, parfumée et 100% naturelle, ainsi que les produits dérivés de notre exploitation.",
      storyB1: "✓ Sans conservateurs ni mélanges",
      storyB2: "✓ Taux d'acidité très bas",
      storyB3: "✓ Vente au détail & en gros",
      sealTitle: "GARANTIE FERME MALEK",
      sealSub: "Huile d'Olive 100% Pure du Terroir de Benhar — Aïn Oussara",
      galleryEyebrow: "Visite Visuelle",
      galleryTitle: "Galerie de la Ferme Malek & Gamme DOULA",
      galleryDesc: "Découvrez l'univers de notre exploitation oléicole à Benhar et nos différents conditionnements.",
      gal1: "Oliveraie de la Ferme Malek — Région de Benhar (Aïn Oussara)",
      gal2: "Gamme Bouteilles en Verre DOULA (1L, 0,750L, 0,370L)",
      gal3: "Gamme Familiale en Plastique Alimentaire (1L, 3L, 5L)",
      gal4: "Première Pression à Froid — Or Vert 100% Pur",
      contactEyebrow: "Commande Rapide & Contact",
      contactTitle: "Passez Votre Commande Directement",
      contactDesc:
        "Contactez la Ferme Malek sur WhatsApp ou par téléphone au 0554 51 06 78. Nous préparons votre commande immédiatement.",
      contactCardTitle: "Coordonnées de la Ferme Malek",
      contactFarmLabel: "Exploitation & Marque",
      contactFarmVal: "Ferme Malek — Marque DOULA",
      contactLocLabel: "Adresse / Région",
      contactLocVal: "Région de Benhar, Aïn Oussara, Algérie",
      contactPhoneLabel: "Téléphone & WhatsApp Direct",
      contactHoursLabel: "Disponibilité",
      contactHoursVal: "7j/7 — Commandes au détail, familiales et professionnelles",
      quickOrderTitle: "Bon de Commande Rapide sur WhatsApp",
      lblClientName: "Votre Nom & Prénom",
      phClientName: "Ex: Mohamed Benali",
      lblClientCity: "Votre Ville / Commune / Wilaya",
      phClientCity: "Ex: Aïn Oussara / Alger / Blida / Djelfa...",
      lblQuickProduct: "Produit & Format souhaité",
      lblQuickQty: "Quantité",
      lblDeliveryMode: "Mode de réception",
      optDelivery1: "Livraison à domicile / Point relais",
      optDelivery2: "Retrait direct (Aïn Oussara / Ferme Benhar)",
      lblNotes: "Message ou précision (optionnel)",
      phNotes: "Ex: Je souhaite aussi 2 bouteilles en verre de 0,75L...",
      btnSendQuickOrder: "Envoyer la commande sur WhatsApp (0554 51 06 78)",
      cartModalTitle: "Votre Panier de Commande DOULA",
      cartEmpty: "Votre panier est vide. Ajoutez des bouteilles (Verre ou Plastique) depuis le catalogue !",
      cartTotalLabel: "Total estimé :",
      cartSendBtn: "Commander ce panier sur WhatsApp",
      floatingWa: "Commander • 0554 51 06 78",
      footerRights: "© 2026 Ferme Malek — Marque DOULA (Benhar, Aïn Oussara). Tous droits réservés.",
      adminBtn: "⚙️ Modifier les prix (Propriétaire)"
    },
    ar: {
      topLocation: "📍 مزرعة مالك — منطقة بنهار، عين وسارة",
      topQuality: "🌿 زيت زيتون طبيعي 100% عصرة أولى على البارد",
      topOrder: "للطلب :",
      brandSub: "مزرعة مالك • بنهار، عين وسارة",
      navHome: "الرئيسية",
      navCatalogue: "الأحجام والأسعار",
      navTerroir: "مزرعتنا",
      navGallery: "معرض الصور",
      navContact: "اطلب الآن",
      langToggle: "Français",
      cartBtn: "السلة",
      heroPill: "🫒 محصول مزرعة مالك — منطقة بنهار (عين وسارة)",
      heroTitle1: "الذهب الأخضر الأصيل",
      heroTitleGold: "علامة دولة — DOULA",
      heroSubtitle:
        "زيت زيتون بكر ممتاز طبيعي 100% من أشجار مزرعة مالك بمنطقة بنهار في عين وسارة. متوفر في قارورات زجاجية فاخرة (0.37 لتر، 0.75 لتر، 1 لتر) وأحجام عائلية بلاستيكية (1 لتر، 3 لتر، 5 لتر).",
      heroBtnCatalogue: "تصفح الأحجام والأسعار",
      heroBtnWhatsapp: "اطلب مباشرة عبر واتساب",
      metric1Val: "طبيعي 100%",
      metric1Label: "عصرة أولى على البارد",
      metric2Val: "6 أحجام",
      metric2Label: "زجاج (0.37 إلى 1 لتر) وبلاستيك (1 إلى 5 لتر)",
      metric3Val: "بنهار",
      metric3Label: "أجود أراضي عين وسارة",
      showcaseBadge: "تشكيلة دولة الكاملة",
      showcaseTitle: "من قارورة المائدة 0.370 لتر إلى الحجم العائلي 5 لتر",
      showcaseSub: "مزرعة مالك — جودة عالية مضمونة مباشرة من المنتج إلى المستهلك",
      stripGlassTitle: "تشكيلة القارورات الزجاجية",
      stripGlassSub: "مثالية للمائدة، الحفظ طويل الأمد والهدايا الراقية",
      stripPlasticTitle: "تشكيلة القارورات والدلاء البلاستيكية",
      stripPlasticSub: "عملية، غير قابلة للكسر واقتصادية لجميع أفراد العائلة",
      catEyebrow: "الكتالوج الرسمي — علامة دولة",
      catTitle: "زيت الزيتون ومنتجات مزرعة مالك",
      catDesc:
        "اختر الحجم والتعبئة المناسبة لك (زجاج أو بلاستيك) واطلب مباشرة عبر واتساب على الرقم 0554 51 06 78.",
      filterAll: "جميع المنتجات (9)",
      filterGlass: "🍾 قارورات زجاجية (1 لتر، 0.75 لتر، 0.37 لتر)",
      filterPlastic: "🏺 قارورات بلاستيكية (1 لتر، 3 لتر، 5 لتر)",
      filterDerives: "🌿 منتجات أخرى من المزرعة",
      catLabelVerre: "تعبئة زجاجية • علامة دولة",
      catLabelPlastique: "تعبئة بلاستيكية • علامة دولة",
      catLabelDerives: "منتجات المزرعة • مزرعة مالك",
      originTag: "بنهار • عين وسارة",
      btnOrderDirect: "اطلب عبر واتساب",
      btnAddCart: "+ للسلة",
      terroirEyebrow: "لماذا تختار علامة دولة DOULA؟",
      terroirTitle: "جودة وأصالة من أراضي بنهار (عين وسارة)",
      terroirDesc:
        "في مزرعة مالك، كل قطرة من زيت زيتون دولة هي ثمرة عناية فائقة وخبرة فلاحية تحترم الطبيعة.",
      feat1Title: "قطف يدوي بعناية",
      feat1Desc:
        "يتم جني الزيتون في الوقت المثالي للنضج في بساتيننا بمنطقة بنهار لضمان مذاق متوازن ونكهة غنية.",
      feat2Title: "عصر على البارد",
      feat2Desc:
        "عصر سريع بدون حرارة للحفاظ على كامل الفيتامينات ومضادات الأكسدة والفوائد الصحية.",
      feat3Title: "تعبئة تناسب احتياجاتكم",
      feat3Desc:
        "متوفر في قارورات زجاجية أنيقة (0.370 لتر، 0.750 لتر، 1 لتر) أو بلاستيكية غذائية عملية (1 لتر، 3 لتر، 5 لتر).",
      feat4Title: "مباشرة من المزرعة",
      feat4Desc:
        "بدون وسطاء: اطلب مباشرة من مزرعة مالك بعين وسارة بأفضل سعر وجودة مضمونة.",
      storyTitle: "مزرعة مالك — شغف بإنتاج أجود زيت زيتون في بنهار",
      storyP1:
        "تقع مزرعة مالك في منطقة بنهار المشمسة بعين وسارة، حيث نعتني بأشجار الزيتون بشغف يجمع بين الطرق الفلاحية الحديثة واحترام التقاليد الأصيلة.",
      storyP2:
        "تحت علامتنا التجارية «دولة DOULA»، نقدم لكم زيت زيتون بكر ممتاز صافي، عطري وطبيعي 100%، بالإضافة إلى مشتقات المزرعة الطبيعية.",
      storyB1: "✓ بدون مواد حافظة أو خلط",
      storyB2: "✓ نسبة حموضة منخفضة جداً",
      storyB3: "✓ البيع بالتجزئة وبالجملة",
      sealTitle: "ضمان مزرعة مالك",
      sealSub: "زيت زيتون صافي 100% من منطقة بنهار — عين وسارة",
      galleryEyebrow: "جولة مصورة",
      galleryTitle: "صور مزرعة مالك وتشكيلة علامة دولة",
      galleryDesc: "اكتشف مزرعتنا في بنهار ومختلف أحجام التعبئة المتوفرة لدينا.",
      gal1: "أشجار الزيتون بمزرعة مالك — منطقة بنهار (عين وسارة)",
      gal2: "تشكيلة القارورات الزجاجية دولة (1 لتر، 0.750 لتر، 0.370 لتر)",
      gal3: "التشكيلة العائلية البلاستيكية (1 لتر، 3 لتر، 5 لتر)",
      gal4: "عصرة أولى على البارد — ذهب أخضر صافي 100%",
      contactEyebrow: "طلب سريع وتواصل",
      contactTitle: "اطلب منتجك مباشرة الآن",
      contactDesc:
        "تواصل مع مزرعة مالك عبر واتساب أو الهاتف على الرقم 0554 51 06 78 وسنقوم بتجهيز طلبك فوراً.",
      contactCardTitle: "معلومات الاتصال — مزرعة مالك",
      contactFarmLabel: "المزرعة والعلامة",
      contactFarmVal: "مزرعة مالك — علامة دولة (DOULA)",
      contactLocLabel: "العنوان / المنطقة",
      contactLocVal: "منطقة بنهار، عين وسارة، الجزائر",
      contactPhoneLabel: "الهاتف وواتساب المباشر",
      contactHoursLabel: "أوقات العمل",
      contactHoursVal: "طيلة أيام الأسبوع — طلبات فردية، عائلية وبالجملة",
      quickOrderTitle: "استمارة طلب سريع عبر واتساب",
      lblClientName: "الاسم واللقب",
      phClientName: "مثال: محمد بن علي",
      lblClientCity: "المدينة / البلدية / الولاية",
      phClientCity: "مثال: عين وسارة / الجلفة / الجزائر / البليدة...",
      lblQuickProduct: "المنتج والحجم المطلوب",
      lblQuickQty: "الكمية",
      lblDeliveryMode: "طريقة الاستلام",
      optDelivery1: "توصيل إلى المنزل / مكتب التوصيل",
      optDelivery2: "استلام مباشر (عين وسارة / مزرعة بنهار)",
      lblNotes: "ملاحظة إضافية (اختياري)",
      phNotes: "مثال: أريد أيضاً قارورتين زجاج 0.75 لتر...",
      btnSendQuickOrder: "إرسال الطلب عبر واتساب (0554 51 06 78)",
      cartModalTitle: "سلة طلباتك من علامة دولة",
      cartEmpty: "سلتك فارغة حالياً. أضف القارورات المطلوبة من الكتالوج!",
      cartTotalLabel: "المجموع التقديري :",
      cartSendBtn: "إرسال السلة عبر واتساب",
      floatingWa: "اطلب الآن • 0554 51 06 78",
      footerRights: "© 2026 مزرعة مالك — علامة دولة (بنهار، عين وسارة). جميع الحقوق محفوظة.",
      adminBtn: "⚙️ تعديل الأسعار (لصاحب المزرعة)"
    }
  };

  // ==========================================================================
  // GENERATEUR D'ILLUSTRATIONS SVG SUR-MESURE POUR CHAQUE PRODUIT "DOULA"
  // ==========================================================================
  function renderProductSVG(product) {
    const scale = product.bottleScale || 1;
    const vol = product.volume;

    // 1. BOUTEILLES EN VERRE (1L, 0.750L, 0.370L)
    if (product.packaging === "glass") {
      return `
        <svg viewBox="0 0 200 240" style="height: ${Math.round(215 * scale)}px; width: auto; filter: drop-shadow(0 12px 18px rgba(13,27,14,0.22));" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="glassBody-${product.id}" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#1c3318"/>
              <stop offset="28%" stop-color="#3f6a24"/>
              <stop offset="65%" stop-color="#284819"/>
              <stop offset="100%" stop-color="#12220f"/>
            </linearGradient>
            <linearGradient id="goldCap-${product.id}" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#9e7222"/>
              <stop offset="50%" stop-color="#ebd18d"/>
              <stop offset="100%" stop-color="#9e7222"/>
            </linearGradient>
          </defs>
          <!-- Capsule dorée -->
          <rect x="86" y="12" width="28" height="32" rx="4" fill="url(#goldCap-${product.id})" />
          <rect x="84" y="18" width="32" height="5" rx="2" fill="#785312" opacity="0.5"/>
          <!-- Col de la bouteille -->
          <path d="M88 44 L112 44 L115 72 L134 92 L134 214 C134 222 128 228 120 228 L80 228 C72 228 66 222 66 214 L66 92 L85 72 Z" fill="url(#glassBody-${product.id})" stroke="#cda047" stroke-width="1"/>
          <!-- Reflet verre -->
          <path d="M74 96 L74 210" stroke="rgba(255,255,255,0.28)" stroke-width="4" stroke-linecap="round"/>
          <!-- Étiquette Prestige DOULA -->
          <rect x="71" y="106" width="58" height="88" rx="4" fill="#fcfaf5" stroke="#cda047" stroke-width="2"/>
          <rect x="75" y="110" width="50" height="80" rx="2" fill="none" stroke="#162a17" stroke-width="0.6"/>
          <circle cx="100" cy="125" r="7" fill="#162a17"/>
          <path d="M97 125 Q100 119 103 125 Q100 130 97 125" fill="#cda047"/>
          <text x="100" y="145" text-anchor="middle" font-family="Georgia, serif" font-weight="bold" font-size="11" fill="#162a17" letter-spacing="1">DOULA</text>
          <text x="100" y="155" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="5.5" fill="#b3832d">FERME MALEK</text>
          <text x="100" y="164" text-anchor="middle" font-family="sans-serif" font-size="4.8" fill="#424f42">HUILE D'OLIVE VIERGE EXTRA</text>
          <text x="100" y="172" text-anchor="middle" font-family="sans-serif" font-size="4.5" fill="#6c7a6c">Benhar • Aïn Oussara</text>
          <rect x="82" y="176" width="36" height="11" rx="3" fill="#162a17"/>
          <text x="100" y="184" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="6.8" fill="#ebd18d">${vol}</text>
        </svg>
      `;
    }

    // 2. BOUTEILLE PLASTIQUE 1L
    if (product.packaging === "plastic-1l") {
      return `
        <svg viewBox="0 0 200 240" style="height: 205px; width: auto; filter: drop-shadow(0 10px 16px rgba(13,27,14,0.18));" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="oilPlastic1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#8b9c1d"/>
              <stop offset="45%" stop-color="#c2cf32"/>
              <stop offset="100%" stop-color="#6e7d12"/>
            </linearGradient>
          </defs>
          <!-- Bouchon vert -->
          <rect x="87" y="16" width="26" height="16" rx="3" fill="#1f3c21" stroke="#cda047" stroke-width="1"/>
          <!-- Corps bouteille PET 1L avec rainures -->
          <path d="M90 32 L110 32 L114 55 L134 78 L134 215 C134 222 128 226 120 226 L80 226 C72 226 66 222 66 215 L66 78 L86 55 Z" fill="url(#oilPlastic1)" stroke="#5b6910" stroke-width="1.2"/>
          <line x1="67" y1="92" x2="133" y2="92" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
          <line x1="67" y1="195" x2="133" y2="195" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
          <path d="M75 82 L75 212" stroke="rgba(255,255,255,0.38)" stroke-width="4" stroke-linecap="round"/>
          <!-- Étiquette -->
          <rect x="69" y="106" width="62" height="76" rx="4" fill="#fcfaf5" stroke="#162a17" stroke-width="1.5"/>
          <text x="100" y="126" text-anchor="middle" font-family="Georgia, serif" font-weight="bold" font-size="11.5" fill="#162a17">DOULA</text>
          <text x="100" y="136" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="5.5" fill="#b3832d">FERME MALEK • BENHAR</text>
          <text x="100" y="147" text-anchor="middle" font-family="sans-serif" font-size="5" fill="#162a17">Huile d'Olive Vierge Extra</text>
          <rect x="80" y="156" width="40" height="16" rx="4" fill="#cda047"/>
          <text x="100" y="167" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="8.5" fill="#162a17">1 L</text>
        </svg>
      `;
    }

    // 3. BIDONS PLASTIQUE 3L & 5L AVEC POIGNÉE
    if (product.packaging === "plastic-3l" || product.packaging === "plastic-5l") {
      const is5L = product.packaging === "plastic-5l";
      const w = is5L ? 116 : 98;
      const x = 100 - w / 2;
      return `
        <svg viewBox="0 0 220 240" style="height: ${is5L ? 222 : 204}px; width: auto; filter: drop-shadow(0 12px 18px rgba(13,27,14,0.2));" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bidonOil-${product.id}" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#7c8f18"/>
              <stop offset="40%" stop-color="#b9c82e"/>
              <stop offset="100%" stop-color="#5d6d0e"/>
            </linearGradient>
          </defs>
          <!-- Bouchon large doré/vert -->
          <rect x="92" y="16" width="32" height="16" rx="4" fill="#162a17" stroke="#cda047" stroke-width="1.5"/>
          <!-- Corps du bidon -->
          <path d="M95 32 L121 32 L126 50 L${x + w} 74 L${x + w} 214 C${x + w} 222 ${x + w - 8} 228 ${x + w - 16} 228 L${x + 16} 228 C${x + 8} 228 ${x} 222 ${x} 214 L${x} 74 L90 50 Z" fill="url(#bidonOil-${product.id})" stroke="#4c590b" stroke-width="1.5"/>
          <!-- Poignée intégrée -->
          <path d="M128 54 C146 54 152 68 152 84 C152 96 142 100 132 98" fill="none" stroke="#99aa22" stroke-width="9" stroke-linecap="round"/>
          <path d="M128 54 C146 54 152 68 152 84 C152 96 142 100 132 98" fill="none" stroke="#fcfaf5" stroke-width="4" stroke-linecap="round" opacity="0.7"/>
          <!-- Reflet -->
          <path d="M${x + 12} 82 L${x + 12} 212" stroke="rgba(255,255,255,0.32)" stroke-width="5" stroke-linecap="round"/>
          <!-- Étiquette Familiale DOULA -->
          <rect x="${x + 14}" y="96" width="${w - 28}" height="96" rx="6" fill="#fcfaf5" stroke="#cda047" stroke-width="2.2"/>
          <text x="108" y="119" text-anchor="middle" font-family="Georgia, serif" font-weight="bold" font-size="${is5L ? 15 : 13}" fill="#162a17" letter-spacing="1">DOULA</text>
          <text x="108" y="131" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="6.5" fill="#b3832d">FERME MALEK</text>
          <text x="108" y="142" text-anchor="middle" font-family="sans-serif" font-size="5.8" fill="#162a17">Huile d'Olive Vierge Extra</text>
          <text x="108" y="151" text-anchor="middle" font-family="sans-serif" font-size="5.2" fill="#6c7a6c">Benhar • Aïn Oussara</text>
          <rect x="82" y="159" width="52" height="22" rx="5" fill="#162a17"/>
          <text x="108" y="174" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="11" fill="#ebd18d">${vol}</text>
        </svg>
      `;
    }

    // 4. PRODUITS DÉRIVÉS (BOCAUX OLIVES & SAVON)
    return `
      <svg viewBox="0 0 200 220" style="height: 185px; width: auto; filter: drop-shadow(0 10px 16px rgba(13,27,14,0.18));" xmlns="http://www.w3.org/2000/svg">
        <rect x="64" y="28" width="72" height="18" rx="4" fill="#cda047" stroke="#162a17" stroke-width="1.2"/>
        <rect x="54" y="46" width="92" height="150" rx="18" fill="#2b4c24" stroke="#cda047" stroke-width="2"/>
        <circle cx="76" cy="75" r="9" fill="#5e7d29" opacity="0.7"/>
        <circle cx="118" cy="82" r="10" fill="#46631d" opacity="0.7"/>
        <circle cx="95" cy="68" r="8" fill="#779636" opacity="0.7"/>
        <rect x="64" y="88" width="72" height="78" rx="5" fill="#fcfaf5" stroke="#cda047" stroke-width="1.8"/>
        <text x="100" y="110" text-anchor="middle" font-family="Georgia, serif" font-weight="bold" font-size="12" fill="#162a17">DOULA</text>
        <text x="100" y="122" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="6" fill="#b3832d">FERME MALEK</text>
        <text x="100" y="134" text-anchor="middle" font-family="sans-serif" font-size="5.5" fill="#424f42">TERROIR DE BENHAR</text>
        <rect x="76" y="142" width="48" height="16" rx="4" fill="#162a17"/>
        <text x="100" y="153" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="8" fill="#ebd18d">${vol}</text>
      </svg>
    `;
  }

  // Formatage du prix
  function formatPrice(amount) {
    const currency =
      currentLang === "ar"
        ? window.DOULA_CONFIG.currencyAr
        : window.DOULA_CONFIG.currencyFr;
    return `${Number(amount).toLocaleString("fr-DZ")} ${currency}`;
  }

  // Construction du lien WhatsApp direct pour un produit
  function getSingleProductWhatsAppUrl(product) {
    const pName = currentLang === "ar" ? product.nameAr : product.nameFr;
    const msg =
      currentLang === "ar"
        ? `السلام عليكم مزرعة مالك (علامة دولة)،\nأود طلب المنتج التالي:\n- ${pName}\n- الحجم: ${product.volume}\n- السعر: ${formatPrice(product.price)}\nشكراً لكم!`
        : `Bonjour Ferme Malek (Marque DOULA),\nJe souhaite commander :\n- ${pName}\n- Format : ${product.volume}\n- Prix affiché : ${formatPrice(product.price)}\nMerci de me confirmer la disponibilité !`;
    return `https://wa.me/${window.DOULA_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  }

  // Rendu de la vitrine Hero (3 bouteilles emblématiques côte à côte)
  function renderHeroStage() {
    const stage = document.getElementById("hero-bottles-stage");
    if (!stage) return;
    const p5l = window.DOULA_CONFIG.products.find((p) => p.id === "plastique-5l");
    const p1lVerre = window.DOULA_CONFIG.products.find((p) => p.id === "verre-1l");
    const p750Verre = window.DOULA_CONFIG.products.find((p) => p.id === "verre-750ml");

    stage.innerHTML = `
      <div style="display:flex; align-items:flex-end; justify-content:center; gap:0.5rem; flex-wrap:nowrap;">
        <div title="Verre 0,750L">${p750Verre ? renderProductSVG(p750Verre) : ""}</div>
        <div title="Bidon Familial 5L">${p5l ? renderProductSVG(p5l) : ""}</div>
        <div title="Verre 1L">${p1lVerre ? renderProductSVG(p1lVerre) : ""}</div>
      </div>
    `;
  }

  // Rendu de la grille des produits
  function renderCatalogue() {
    const grid = document.getElementById("products-grid");
    if (!grid) return;

    const dict = I18N[currentLang];
    const filtered = window.DOULA_CONFIG.products.filter((p) => {
      if (currentFilter === "all") return true;
      return p.category === currentFilter;
    });

    grid.innerHTML = filtered
      .map((product) => {
        const badge = currentLang === "ar" ? product.badgeAr : product.badgeFr;
        const name = currentLang === "ar" ? product.nameAr : product.nameFr;
        const desc = currentLang === "ar" ? product.descAr : product.descFr;
        const catLabel =
          product.category === "verre"
            ? dict.catLabelVerre
            : product.category === "plastique"
            ? dict.catLabelPlastique
            : dict.catLabelDerives;

        return `
          <article class="product-card" data-category="${product.category}">
            <div class="product-visual">
              <span class="product-badge">${badge}</span>
              <span class="product-volume-pill">${product.volume}</span>
              ${renderProductSVG(product)}
            </div>
            <div class="product-body">
              <div class="product-category-label">${catLabel}</div>
              <h3 class="product-title">${name}</h3>
              <p class="product-desc">${desc}</p>
              <div class="product-price-row">
                <div class="product-price">
                  ${formatPrice(product.price)}
                  <small>/ ${product.volume}</small>
                </div>
                <span class="product-origin-tag">${dict.originTag}</span>
              </div>
              <div class="product-actions">
                <a
                  href="${getSingleProductWhatsAppUrl(product)}"
                  target="_blank"
                  rel="noopener"
                  class="btn-order-whatsapp"
                >
                  <span>💬</span>
                  <span>${dict.btnOrderDirect}</span>
                </a>
                <button
                  type="button"
                  class="btn-add-cart"
                  data-add-cart="${product.id}"
                >
                  ${dict.btnAddCart}
                </button>
              </div>
            </div>
          </article>
        `;
      })
      .join("");

    // Attacher les événements "Ajouter au panier"
    grid.querySelectorAll("[data-add-cart]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-add-cart");
        addToCart(id);
      });
    });
  }

  // Remplir le menu déroulant du formulaire de commande rapide
  function populateQuickOrderSelect() {
    const select = document.getElementById("quick-product-select");
    if (!select) return;
    select.innerHTML = window.DOULA_CONFIG.products
      .map((p) => {
        const title = currentLang === "ar" ? p.nameAr : p.nameFr;
        return `<option value="${p.id}">${title} (${formatPrice(p.price)})</option>`;
      })
      .join("");
  }

  // ==========================================================================
  // GESTION DU PANIER MULTI-PRODUITS
  // ==========================================================================
  function addToCart(productId) {
    cart[productId] = (cart[productId] || 0) + 1;
    updateCartUI();
    openCartModal();
  }

  function changeCartQty(productId, delta) {
    if (!cart[productId]) return;
    cart[productId] += delta;
    if (cart[productId] <= 0) {
      delete cart[productId];
    }
    updateCartUI();
  }

  function updateCartUI() {
    const countEl = document.getElementById("cart-count");
    const totalCount = Object.values(cart).reduce((acc, n) => acc + n, 0);
    if (countEl) countEl.textContent = String(totalCount);

    const listEl = document.getElementById("cart-items-container");
    const totalEl = document.getElementById("cart-total-amount");
    if (!listEl || !totalEl) return;

    const dict = I18N[currentLang];
    const entries = Object.entries(cart);

    if (entries.length === 0) {
      listEl.innerHTML = `<p style="text-align:center; color:var(--text-muted); padding:1.5rem 0;">${dict.cartEmpty}</p>`;
      totalEl.textContent = formatPrice(0);
      return;
    }

    let grandTotal = 0;
    listEl.innerHTML = entries
      .map(([id, qty]) => {
        const prod = window.DOULA_CONFIG.products.find((p) => p.id === id);
        if (!prod) return "";
        const sub = prod.price * qty;
        grandTotal += sub;
        const title = currentLang === "ar" ? prod.nameAr : prod.nameFr;
        return `
          <div class="cart-item-row">
            <div>
              <strong style="display:block; font-size:0.95rem;">${title}</strong>
              <span style="font-size:0.82rem; color:var(--text-muted);">${formatPrice(prod.price)} × ${qty} = <strong>${formatPrice(sub)}</strong></span>
            </div>
            <div class="qty-controls">
              <button type="button" class="qty-btn" data-qty-id="${id}" data-qty-delta="-1">−</button>
              <span style="font-weight:800; min-width:20px; text-align:center;">${qty}</span>
              <button type="button" class="qty-btn" data-qty-id="${id}" data-qty-delta="1">+</button>
            </div>
          </div>
        `;
      })
      .join("");

    totalEl.textContent = formatPrice(grandTotal);

    listEl.querySelectorAll("[data-qty-id]").forEach((b) => {
      b.addEventListener("click", () => {
        const id = b.getAttribute("data-qty-id");
        const delta = parseInt(b.getAttribute("data-qty-delta"), 10);
        changeCartQty(id, delta);
      });
    });
  }

  function openCartModal() {
    const modal = document.getElementById("cart-modal");
    if (modal) modal.classList.add("open");
  }

  function closeCartModal() {
    const modal = document.getElementById("cart-modal");
    if (modal) modal.classList.remove("open");
  }

  function sendCartToWhatsApp() {
    const entries = Object.entries(cart);
    if (entries.length === 0) return;

    let total = 0;
    const lines = entries.map(([id, qty]) => {
      const prod = window.DOULA_CONFIG.products.find((p) => p.id === id);
      const sub = prod.price * qty;
      total += sub;
      const name = currentLang === "ar" ? prod.nameAr : prod.nameFr;
      return `• ${qty}x ${name} (${prod.volume}) : ${formatPrice(sub)}`;
    });

    const clientName = (document.getElementById("cart-client-name")?.value || "").trim();
    const clientCity = (document.getElementById("cart-client-city")?.value || "").trim();

    let message = "";
    if (currentLang === "ar") {
      message =
        `السلام عليكم مزرعة مالك (علامة دولة DOULA)،\nأود تأكيد الطلبية التالية:\n\n` +
        lines.join("\n") +
        `\n\n💰 المجموع: ${formatPrice(total)}` +
        (clientName ? `\n👤 الاسم: ${clientName}` : "") +
        (clientCity ? `\n📍 المدينة/الولاية: ${clientCity}` : "");
    } else {
      message =
        `Bonjour Ferme Malek (Marque DOULA),\nJe souhaite passer la commande suivante :\n\n` +
        lines.join("\n") +
        `\n\n💰 Total estimé : ${formatPrice(total)}` +
        (clientName ? `\n👤 Client : ${clientName}` : "") +
        (clientCity ? `\n📍 Ville / Wilaya : ${clientCity}` : "");
    }

    const url = `https://wa.me/${window.DOULA_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  // ==========================================================================
  // TRADUCTION DYNAMIQUE (FRANÇAIS <-> ARABE)
  // ==========================================================================
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_LANG_KEY, lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    const dict = I18N[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) {
        el.setAttribute("placeholder", dict[key]);
      }
    });

    renderHeroStage();
    renderCatalogue();
    populateQuickOrderSelect();
    updateCartUI();
  }

  // ==========================================================================
  // GESTIONNAIRE DE PRIX POUR LE PROPRIÉTAIRE (M. MALEK)
  // ==========================================================================
  function openAdminModal() {
    const container = document.getElementById("admin-prices-list");
    const modal = document.getElementById("admin-modal");
    if (!container || !modal) return;

    container.innerHTML = window.DOULA_CONFIG.products
      .map(
        (p) => `
        <div class="form-group" style="display:flex; align-items:center; justify-content:space-between; gap:1rem; border-bottom:1px solid var(--border-light); padding-bottom:0.6rem;">
          <label style="margin:0; flex:1;">
            <strong>${p.nameFr}</strong>
            <span style="display:block; font-size:0.78rem; color:var(--text-muted);">Format : ${p.volume}</span>
          </label>
          <div style="display:flex; align-items:center; gap:0.4rem;">
            <input
              type="number"
              class="form-control"
              style="width:120px; text-align:right; font-weight:800;"
              data-admin-price="${p.id}"
              value="${p.price}"
            />
            <span style="font-weight:700;">DA</span>
          </div>
        </div>
      `
      )
      .join("");

    modal.classList.add("open");
  }

  function saveAdminPrices() {
    const customMap = {};
    document.querySelectorAll("[data-admin-price]").forEach((input) => {
      const id = input.getAttribute("data-admin-price");
      const val = parseInt(input.value, 10);
      if (!isNaN(val) && val >= 0) {
        customMap[id] = val;
        const prod = window.DOULA_CONFIG.products.find((p) => p.id === id);
        if (prod) prod.price = val;
      }
    });

    localStorage.setItem(STORAGE_PRICES_KEY, JSON.stringify(customMap));
    renderCatalogue();
    populateQuickOrderSelect();
    updateCartUI();
    document.getElementById("admin-modal")?.classList.remove("open");
  }

  // ==========================================================================
  // INITIALISATION AU CHARGEMENT
  // ==========================================================================
  document.addEventListener("DOMContentLoaded", () => {
    loadCustomPrices();
    applyLanguage(currentLang);

    // Bouton changement de langue FR / AR
    document.getElementById("lang-toggle-btn")?.addEventListener("click", () => {
      applyLanguage(currentLang === "fr" ? "ar" : "fr");
    });

    // Menu mobile
    const mobileBtn = document.getElementById("mobile-menu-btn");
    const navLinks = document.getElementById("nav-links");
    mobileBtn?.addEventListener("click", () => {
      navLinks?.classList.toggle("mobile-open");
    });
    navLinks?.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => navLinks.classList.remove("mobile-open"));
    });

    // Filtres du catalogue
    document.querySelectorAll("[data-filter]").forEach((tab) => {
      tab.addEventListener("click", () => {
        document.querySelectorAll("[data-filter]").forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        currentFilter = tab.getAttribute("data-filter") || "all";
        renderCatalogue();
      });
    });

    // Modal Panier
    document.getElementById("open-cart-btn")?.addEventListener("click", openCartModal);
    document.getElementById("close-cart-btn")?.addEventListener("click", closeCartModal);
    document.getElementById("cart-send-wa-btn")?.addEventListener("click", sendCartToWhatsApp);

    // Formulaire de commande rapide sur WhatsApp
    document.getElementById("quick-order-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = (document.getElementById("qo-name")?.value || "").trim();
      const city = (document.getElementById("qo-city")?.value || "").trim();
      const prodId = document.getElementById("quick-product-select")?.value;
      const qty = parseInt(document.getElementById("qo-qty")?.value || "1", 10) || 1;
      const delivery = document.getElementById("qo-delivery")?.value || "";
      const notes = (document.getElementById("qo-notes")?.value || "").trim();

      const prod =
        window.DOULA_CONFIG.products.find((p) => p.id === prodId) ||
        window.DOULA_CONFIG.products[0];
      const prodTitle = currentLang === "ar" ? prod.nameAr : prod.nameFr;
      const total = prod.price * qty;

      const text =
        currentLang === "ar"
          ? `السلام عليكم مزرعة مالك (علامة دولة DOULA)،\nطلب جديد من الموقع:\n` +
            `• المنتج: ${prodTitle} (${prod.volume})\n` +
            `• الكمية: ${qty}\n` +
            `• المجموع التقديري: ${formatPrice(total)}\n` +
            `• الاسم: ${name || "غير محدد"}\n` +
            `• المدينة / الولاية: ${city || "غير محدد"}\n` +
            `• الاستلام: ${delivery}\n` +
            (notes ? `• ملاحظة: ${notes}` : "")
          : `Bonjour Ferme Malek (Marque DOULA),\nNouvelle commande depuis le site web :\n` +
            `• Produit : ${prodTitle} (${prod.volume})\n` +
            `• Quantité : ${qty}\n` +
            `• Total estimé : ${formatPrice(total)}\n` +
            `• Nom : ${name || "Non précisé"}\n` +
            `• Ville / Wilaya : ${city || "Non précisée"}\n` +
            `• Mode de réception : ${delivery}\n` +
            (notes ? `• Note : ${notes}` : "");

      window.open(
        `https://wa.me/${window.DOULA_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`,
        "_blank"
      );
    });

    // Modal Admin Prix
    document.getElementById("open-admin-btn")?.addEventListener("click", openAdminModal);
    document.getElementById("close-admin-btn")?.addEventListener("click", () => {
      document.getElementById("admin-modal")?.classList.remove("open");
    });
    document.getElementById("save-admin-prices-btn")?.addEventListener("click", saveAdminPrices);
  });
})();
