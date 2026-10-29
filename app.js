// ============================================================================
// APPLICATION V2 — FERME MALEK / MARQUE DOULA (CHEMLAL - ALGERIA)
// Intégration de la vraie bouteille, de la vraie étiquette Lot A26-1,
// des 2 vidéos et du Certificat d'Analyse COI Laboratorio Tello (Acidité 0,28%)
// ============================================================================

(function () {
  const STORAGE_PRICES_KEY = "doula_custom_prices_v2";
  const STORAGE_LANG_KEY = "doula_site_lang_v2";

  let currentLang = localStorage.getItem(STORAGE_LANG_KEY) || "fr";
  let currentFilter = "all";
  let cart = {};

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

  const I18N = {
    fr: {
      topLocation: "📍 Ferme Malek — Aïn Oussara (Région de Benhar), Algérie 🇩🇿",
      topQuality: "🔬 Certifiée Laboratoire Tello (COI) : Acidité 0,28% • Polyphénols 452 mg/kg",
      topOrder: "WhatsApp Direct :",
      brandSub: "Ferme Malek • Variété Chemlal • Aïn Oussara",
      navHome: "Accueil",
      navCatalogue: "Catalogue & Prix",
      navLab: "Analyse Labo (0,28%)",
      navVideos: "Vidéos & Étiquette",
      navContact: "Commander",
      langToggle: "عربي",
      cartBtn: "Panier",
      heroPill: "🇩🇿 VARIÉTÉ CHEMLAL – ALGÉRIE • FERME MALEK (BENHAR, AÏN OUSSARA)",
      heroTitle1: "Huile d'Olive Vierge Extra",
      heroTitleGold: "Doula • زيت زيتون بكر ممتاز",
      heroSubtitle:
        "Huile d'olive de catégorie supérieure obtenue directement des olives et uniquement par des procédés mécaniques à la Ferme Malek (Benhar, Aïn Oussara). Analysée et certifiée Vierge Extra par le laboratoire international Tello (Espagne / COI).",
      chip1Label: "Taux d'Acidité :",
      chip2Label: "Polyphénols :",
      chip3Label: "Variété :",
      chip3Val: "Chemlal 100% Naturel",
      heroBtnCatalogue: "Commander nos Formats (Verre & Plastique)",
      heroBtnWhatsapp: "Commander sur WhatsApp",
      frameLeftCaption: "Bouteille Officielle Doula",
      frameRightCaption: "Étiquette Officielle Lot A26-1",
      catEyebrow: "Gamme Complète — Ferme Malek (Aïn Oussara)",
      catTitle: "Nos Conditionnements en Verre & en Plastique",
      catDesc:
        "Bouteilles en Verre (1L, 0,750L, 0,370L) et Bouteilles/Bidons en Plastique alimentaire (1L, 3L, 5L) avec notre étiquette authentique Doula.",
      filterAll: "Tous les formats (9)",
      filterGlass: "🍾 Bouteilles en Verre (1L, 0.75L, 0.37L)",
      filterPlastic: "🏺 Bouteilles Plastique (1L, 3L, 5L)",
      filterDerives: "🌿 Produits Dérivés de la Ferme",
      catLabelVerre: "Bouteille en Verre • Chemlal Algérie",
      catLabelPlastique: "Format Familial Plastique • Chemlal Algérie",
      catLabelDerives: "Produit du Terroir • Ferme Malek",
      originTag: "Lot A26-1 • Acidité 0,28%",
      btnOrderDirect: "Commander WhatsApp",
      btnAddCart: "+ Panier",
      labEyebrow: "Preuve Scientifique & Qualité Internationale",
      labTitle: "Certificat d'Analyse Laboratoire Tello (Espagne / COI)",
      labDesc:
        "Notre huile d'olive a été analysée par le Laboratoire Juan Antonio Tello S.L.U. (Tentamus Group, Jaén — reconnu par le Conseil Oléicole International COI, Rapport N° 60123123848 / M1/E du 23/01/2026).",
      labCardHeading: "Résultats Physico-Chimiques Certifiés",
      stat1Title: "Taux d'Acidité (Ac. Oléique)",
      stat1Norm: "Limite Vierge Extra COI : ≤ 0,80 % (presque 3× plus pure !)",
      stat2Title: "Polyphénols Totaux (Antioxydants)",
      stat2Norm: "Méthode Folin-Ciocalteu : très haute richesse santé",
      stat3Title: "Indice de Peroxydes",
      stat3Norm: "Limite Vierge Extra COI : ≤ 20 meq O₂/kg (fraîcheur optimale)",
      stat4Title: "Pureté Spectrophotométrique",
      stat4Norm: "K270 = 0,16 (≤0,22) • K232 = 2,24 (≤2,50) • ΔK < 0,01",
      btnViewPdf: "📄 Voir / Télécharger le Certificat Officiel (PDF)",
      nutriTitle: "Tableau Nutritionnel & Traçabilité (p. 100g)",
      nutriSub: "Données officielles inscrites sur l'étiquette Doula (Lot A26-1)",
      nutriRow1: "Lipides / Matières grasses",
      nutriRow2: "dont Acides gras insaturés",
      nutriRow3: "dont Acides gras saturés",
      nutriRow4: "Protéines",
      nutriRow5: "Sodium / Sel",
      nutriRow6: "Variété d'olive",
      nutriRow6Val: "Chemlal – Algérie 🇩🇿",
      nutriRow7: "Lot & DLUO",
      nutriLegal:
        "« Huile d'olive de catégorie supérieure obtenue directement des olives et uniquement par des procédés mécaniques. Ferme Malek / Aïn Oussara (Benhar), Algérie — 100% Naturel. »",
      vidEyebrow: "En Images & En Vidéos",
      vidTitle: "Découvrez la Marque DOULA en Vidéo",
      vidDesc: "Présentation vidéo de nos bouteilles, de notre étiquette officielle et du terroir de la Ferme Malek.",
      vid1Caption: "🎥 Vidéo 1 — Présentation de l'Huile d'Olive Vierge Extra DOULA",
      vid2Caption: "🎥 Vidéo 2 — L'Or Vert de la Ferme Malek (Chemlal - Algérie)",
      contactEyebrow: "Commande Directe Producteur",
      contactTitle: "Commandez sur WhatsApp au 0554 51 06 78",
      contactDesc: "Choisissez vos bouteilles en verre (1L, 0,750L, 0,370L) ou en plastique (1L, 3L, 5L) et recevez votre commande rapidement.",
      contactCardTitle: "Ferme Malek — Marque DOULA",
      lblClientName: "Votre Nom & Prénom",
      phClientName: "Ex: Mohamed Benali",
      lblClientCity: "Votre Ville / Commune / Wilaya",
      phClientCity: "Ex: Aïn Oussara / Djelfa / Alger / Blida...",
      lblQuickProduct: "Produit & Format souhaité",
      lblQuickQty: "Quantité",
      lblDeliveryMode: "Mode de réception",
      optDelivery1: "Livraison à domicile / Bureau de livraison",
      optDelivery2: "Retrait direct (Ferme Malek — Benhar / Aïn Oussara)",
      lblNotes: "Message ou précision (optionnel)",
      phNotes: "Ex: Je souhaite aussi 2 bouteilles en verre de 0,750L...",
      btnSendQuickOrder: "Envoyer la commande sur WhatsApp (0554 51 06 78)",
      cartModalTitle: "Votre Panier de Commande DOULA",
      cartEmpty: "Votre panier est vide. Ajoutez des bouteilles depuis le catalogue !",
      cartTotalLabel: "Total estimé :",
      cartSendBtn: "Envoyer ce panier sur WhatsApp",
      floatingWa: "Commander • 0554 51 06 78",
      footerRights: "© 2026 Ferme Malek — Marque DOULA (Benhar, Aïn Oussara - Algérie). Tous droits réservés.",
      adminBtn: "⚙️ Modifier les prix (Propriétaire)"
    },
    ar: {
      topLocation: "📍 مزرعة مالك — عين وسارة (منطقة بنهار)، الجزائر 🇩🇿",
      topQuality: "🔬 معتمد من مخبر Tello الدولي: حموضة 0.28% • بوليفينول 452 ملغ/كلغ",
      topOrder: "للطلب عبر واتساب :",
      brandSub: "مزرعة مالك • صنف شملال • عين وسارة",
      navHome: "الرئيسية",
      navCatalogue: "الأحجام والأسعار",
      navLab: "تحليل المخبر (0.28%)",
      navVideos: "الفيديو والبطاقة",
      navContact: "اطلب الآن",
      langToggle: "Français",
      cartBtn: "السلة",
      heroPill: "🇩🇿 صنف شملال – الجزائر • مزرعة مالك (بنهار، عين وسارة)",
      heroTitle1: "زيت زيتون بكر ممتاز",
      heroTitleGold: "دولة • Doula Extra Virgin",
      heroSubtitle:
        "زيت زيتون من فئة ممتازة مستخرج مباشرة من الزيتون وبوسائل ميكانيكية فقط في مزرعة مالك (بنهار، عين وسارة). محلل ومعتمد بكر ممتاز من المخبر الدولي Tello بإسبانيا.",
      chip1Label: "نسبة الحموضة :",
      chip2Label: "مضادات الأكسدة (بوليفينول) :",
      chip3Label: "الصنف :",
      chip3Val: "شملال طبيعي 100%",
      heroBtnCatalogue: "تصفح الأحجام (زجاج وبلاستيك)",
      heroBtnWhatsapp: "اطلب مباشرة عبر واتساب",
      frameLeftCaption: "قارورة دولة الرسمية",
      frameRightCaption: "البطاقة الرسمية الدفعة A26-1",
      catEyebrow: "التشكيلة الكاملة — مزرعة مالك (عين وسارة)",
      catTitle: "الأحجام المتوفرة في الزجاج والبلاستيك",
      catDesc:
        "قارورات زجاجية (1 لتر، 0.750 لتر، 0.370 لتر) وقارورات/دلاء بلاستيكية غذائية (1 لتر، 3 لتر، 5 لتر) بالملصق الأصلي لعلامة دولة.",
      filterAll: "جميع المنتجات (9)",
      filterGlass: "🍾 قارورات زجاجية (1 لتر، 0.75 لتر، 0.37 لتر)",
      filterPlastic: "🏺 قارورات بلاستيكية (1 لتر، 3 لتر، 5 لتر)",
      filterDerives: "🌿 منتجات أخرى من المزرعة",
      catLabelVerre: "تعبئة زجاجية • شملال الجزائر",
      catLabelPlastique: "تعبئة بلاستيكية • شملال الجزائر",
      catLabelDerives: "منتجات طبيعية • مزرعة مالك",
      originTag: "الدفعة A26-1 • حموضة 0.28%",
      btnOrderDirect: "اطلب عبر واتساب",
      btnAddCart: "+ للسلة",
      labEyebrow: "شهادة مخبرية دولية (COI)",
      labTitle: "تقرير التحليل المخبري — مخبر Tello (إسبانيا)",
      labDesc:
        "تم تحليل زيت الزيتون في مخبر Juan Antonio Tello S.L.U (مجموعة Tentamus، إسبانيا — المعتمد من المجلس الدولي للزيتون COI، التقرير رقم 60123123848 / M1/E بتاريخ 23/01/2026).",
      labCardHeading: "نتائج التحليل الفيزيائي والكيميائي",
      stat1Title: "درجة الحموضة (Acidez)",
      stat1Norm: "الحد الأقصى للبكر الممتاز: ≤ 0.80% (أجود بـ 3 مرات!)",
      stat2Title: "البوليفينول الكلي (مضادات الأكسدة)",
      stat2Norm: "غني جداً بالفوائد الصحية والطبيعية",
      stat3Title: "مؤشر البيروكسيد",
      stat3Norm: "الحد الأقصى العالمي: ≤ 20 meq O₂/kg (طراوة عالية)",
      stat4Title: "النقاء الطيفي (الأشعة فوق البنفسجية)",
      stat4Norm: "K270 = 0,16 (≤0,22) • K232 = 2,24 (≤2,50) • ΔK < 0,01",
      btnViewPdf: "📄 عرض / تحميل شهادة التحليل الأصلية (PDF)",
      nutriTitle: "جدول القيمة الغذائية والتتبع (لكل 100 غ)",
      nutriSub: "البيانات الرسمية المدونة على بطاقة دولة (الدفعة A26-1)",
      nutriRow1: "الدهون / Lipides",
      nutriRow2: "منها أحماض دهنية غير مشبعة",
      nutriRow3: "منها أحماض دهنية مشبعة",
      nutriRow4: "البروتينات / Protéines",
      nutriRow5: "صوديوم / Sodium",
      nutriRow6: "صنف الزيتون",
      nutriRow6Val: "شملال – الجزائر 🇩🇿",
      nutriRow7: "رقم الدفعة وتاريخ الصلاحية",
      nutriLegal:
        "« زيت زيتون من فئة ممتازة مستخرج مباشرة من الزيتون وبوسائل ميكانيكية فقط. مزرعة مالك / عين وسارة (بنهار)، الجزائر — طبيعي 100%. »",
      vidEyebrow: "بالصورة والفيديو",
      vidTitle: "اكتشف علامة دولة DOULA بالفيديو",
      vidDesc: "عرض مصور لقارورات زيت زيتون دولة والملصق الرسمي لمزرعة مالك.",
      vid1Caption: "🎥 الفيديو 1 — عرض زيت زيتون دولة البكر الممتاز",
      vid2Caption: "🎥 الفيديو 2 — الذهب الأخضر من مزرعة مالك (شملال - الجزائر)",
      contactEyebrow: "الطلب المباشر من المزرعة",
      contactTitle: "اطلب الآن عبر واتساب 0554 51 06 78",
      contactDesc: "اختر القارورات الزجاجية (1 لتر، 0.750 لتر، 0.370 لتر) أو البلاستيكية (1 لتر، 3 لتر، 5 لتر) وتوصل بطلبك بسرعة.",
      contactCardTitle: "مزرعة مالك — علامة دولة (DOULA)",
      lblClientName: "الاسم واللقب",
      phClientName: "مثال: محمد بن علي",
      lblClientCity: "المدينة / البلدية / الولاية",
      phClientCity: "مثال: عين وسارة / الجلفة / الجزائر / البليدة...",
      lblQuickProduct: "المنتج والحجم المطلوب",
      lblQuickQty: "الكمية",
      lblDeliveryMode: "طريقة الاستلام",
      optDelivery1: "توصيل إلى المنزل / مكتب التوصيل",
      optDelivery2: "استلام مباشر (مزرعة مالك — بنهار / عين وسارة)",
      lblNotes: "ملاحظة إضافية (اختياري)",
      phNotes: "مثال: أريد أيضاً قارورتين زجاج 0.750 لتر...",
      btnSendQuickOrder: "إرسال الطلب عبر واتساب (0554 51 06 78)",
      cartModalTitle: "سلة طلباتك من علامة دولة",
      cartEmpty: "سلتك فارغة حالياً. أضف القارورات المطلوبة من الكتالوج!",
      cartTotalLabel: "المجموع التقديري :",
      cartSendBtn: "إرسال السلة عبر واتساب",
      floatingWa: "اطلب الآن • 0554 51 06 78",
      footerRights: "© 2026 مزرعة مالك — علامة دولة (بنهار، عين وسارة - الجزائر). جميع الحقوق محفوظة.",
      adminBtn: "⚙️ تعديل الأسعار (لصاحب المزرعة)"
    }
  };

  // ==========================================================================
  // RENDU VISUEL V2 : VRAIE PHOTO + VRAIE ÉTIQUETTE DOULA SUR TOUS LES FORMATS
  // ==========================================================================
  function renderProductVisual(product) {
    const scale = product.bottleScale || 1;
    const vol = product.volume;

    // 1. La bouteille plastique 1L utilise directement la vraie photo fournie !
    if (product.packaging === "real-photo-1l") {
      return `<img src="./assets/bouteille-doula.jpg" alt="${product.nameFr}" class="real-bottle-photo" />`;
    }

    // 2. Bouteilles en Verre (1L, 0,750L, 0,370L) avec la VRAIE étiquette Doula intégrée
    if (product.packaging === "glass") {
      return `
        <svg viewBox="0 0 200 250" style="height: ${Math.round(230 * scale)}px; width: auto; filter: drop-shadow(0 12px 20px rgba(12,28,16,0.22));" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="glassBodyV2-${product.id}" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#193017"/>
              <stop offset="30%" stop-color="#3a6321"/>
              <stop offset="68%" stop-color="#254416"/>
              <stop offset="100%" stop-color="#10200d"/>
            </linearGradient>
            <linearGradient id="goldCapV2-${product.id}" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#9e7222"/>
              <stop offset="50%" stop-color="#f0d792"/>
              <stop offset="100%" stop-color="#9e7222"/>
            </linearGradient>
          </defs>
          <!-- Capsule dorée -->
          <rect x="86" y="10" width="28" height="32" rx="4" fill="url(#goldCapV2-${product.id})" />
          <!-- Corps en verre -->
          <path d="M88 42 L112 42 L115 70 L136 90 L136 220 C136 228 130 234 122 234 L78 234 C70 234 64 228 64 220 L64 90 L85 70 Z" fill="url(#glassBodyV2-${product.id})" stroke="#d4a644" stroke-width="1.2"/>
          <path d="M72 95 L72 215" stroke="rgba(255,255,255,0.25)" stroke-width="3.5" stroke-linecap="round"/>
          <!-- Vraie étiquette officielle DOULA -->
          <image href="./assets/etiquette-doula.jpg" x="72" y="96" width="56" height="104" preserveAspectRatio="none" />
          <rect x="72" y="96" width="56" height="104" fill="none" stroke="#d4a644" stroke-width="1.5" rx="2"/>
          <!-- Badge format au bas de la bouteille -->
          <rect x="80" y="206" width="40" height="16" rx="4" fill="#152d1b" stroke="#d4a644" stroke-width="1"/>
          <text x="100" y="217" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="8" fill="#f3dc9e">${vol}</text>
        </svg>
      `;
    }

    // 3. Bidons Plastique 3L & 5L avec la VRAIE étiquette Doula intégrée
    if (product.packaging === "plastic-3l" || product.packaging === "plastic-5l") {
      const is5L = product.packaging === "plastic-5l";
      const w = is5L ? 118 : 100;
      const x = 100 - w / 2;
      const labelW = is5L ? 68 : 58;
      const labelX = 100 - labelW / 2;
      return `
        <svg viewBox="0 0 220 250" style="height: ${is5L ? 232 : 212}px; width: auto; filter: drop-shadow(0 12px 20px rgba(12,28,16,0.2));" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bidonOilV2-${product.id}" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#c49b1d"/>
              <stop offset="45%" stop-color="#f2cd3a"/>
              <stop offset="100%" stop-color="#9e7a10"/>
            </linearGradient>
          </defs>
          <!-- Bouchon scellé vert identique à la photo -->
          <rect x="86" y="14" width="28" height="18" rx="3" fill="#198744" stroke="#0f5c2d" stroke-width="1.2"/>
          <!-- Poignée -->
          <path d="M122 50 C142 50 150 64 150 82 C150 94 140 98 128 96" fill="none" stroke="#d9b42c" stroke-width="9" stroke-linecap="round"/>
          <!-- Corps du bidon doré (huile Chemlal) -->
          <path d="M89 32 L111 32 L118 50 L${x + w} 74 L${x + w} 220 C${x + w} 228 ${x + w - 8} 234 ${x + w - 16} 234 L${x + 16} 234 C${x + 8} 234 ${x} 228 ${x} 220 L${x} 74 L82 50 Z" fill="url(#bidonOilV2-${product.id})" stroke="#8c6b0c" stroke-width="1.5"/>
          <path d="M${x + 10} 82 L${x + 10} 215" stroke="rgba(255,255,255,0.4)" stroke-width="4.5" stroke-linecap="round"/>
          <!-- Vraie étiquette officielle DOULA -->
          <image href="./assets/etiquette-doula.jpg" x="${labelX}" y="80" width="${labelW}" height="118" preserveAspectRatio="none" />
          <rect x="${labelX}" y="80" width="${labelW}" height="118" fill="none" stroke="#d4a644" stroke-width="1.8" rx="3"/>
          <!-- Volume 3L / 5L -->
          <rect x="76" y="204" width="48" height="19" rx="5" fill="#152d1b" stroke="#d4a644" stroke-width="1.2"/>
          <text x="100" y="217" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="10" fill="#f3dc9e">${vol}</text>
        </svg>
      `;
    }

    // 4. Produits dérivés avec médaillon Doula
    return `
      <svg viewBox="0 0 200 230" style="height: 195px; width: auto; filter: drop-shadow(0 10px 16px rgba(12,28,16,0.18));" xmlns="http://www.w3.org/2000/svg">
        <rect x="64" y="22" width="72" height="18" rx="4" fill="#d4a644" stroke="#152d1b" stroke-width="1.2"/>
        <rect x="52" y="40" width="96" height="165" rx="18" fill="#244726" stroke="#d4a644" stroke-width="2"/>
        <image href="./assets/etiquette-doula.jpg" x="68" y="54" width="64" height="118" preserveAspectRatio="none" />
        <rect x="68" y="54" width="64" height="118" fill="none" stroke="#d4a644" stroke-width="1.5"/>
        <rect x="74" y="178" width="52" height="18" rx="4" fill="#152d1b" stroke="#d4a644"/>
        <text x="100" y="190" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="8.5" fill="#f3dc9e">${vol}</text>
      </svg>
    `;
  }

  function formatPrice(amount) {
    const currency =
      currentLang === "ar"
        ? window.DOULA_CONFIG.currencyAr
        : window.DOULA_CONFIG.currencyFr;
    return `${Number(amount).toLocaleString("fr-DZ")} ${currency}`;
  }

  function getSingleProductWhatsAppUrl(product) {
    const pName = currentLang === "ar" ? product.nameAr : product.nameFr;
    const msg =
      currentLang === "ar"
        ? `السلام عليكم مزرعة مالك (علامة دولة DOULA - شملال)،\nأود طلب المنتج التالي:\n- ${pName}\n- الحجم: ${product.volume}\n- السعر: ${formatPrice(product.price)}\nشكراً لكم!`
        : `Bonjour Ferme Malek (Marque DOULA - Variété Chemlal),\nJe souhaite commander :\n- ${pName}\n- Format : ${product.volume}\n- Prix affiché : ${formatPrice(product.price)}\nMerci de me confirmer la disponibilité !`;
    return `https://wa.me/${window.DOULA_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  }

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
              ${renderProductVisual(product)}
            </div>
            <div class="product-body">
              <div class="product-category-label">${catLabel}</div>
              <h3 class="product-title">${name}</h3>
              <p class="product-desc">${desc}</p>
              <div class="product-price-row">
                <div class="product-price">
                  ${formatPrice(product.price)}
                  <small style="font-size:0.8rem; color:var(--text-muted);">/ ${product.volume}</small>
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

    grid.querySelectorAll("[data-add-cart]").forEach((btn) => {
      btn.addEventListener("click", () => {
        addToCart(btn.getAttribute("data-add-cart"));
      });
    });
  }

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

  function addToCart(productId) {
    cart[productId] = (cart[productId] || 0) + 1;
    updateCartUI();
    document.getElementById("cart-modal")?.classList.add("open");
  }

  function changeCartQty(productId, delta) {
    if (!cart[productId]) return;
    cart[productId] += delta;
    if (cart[productId] <= 0) delete cart[productId];
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
        changeCartQty(
          b.getAttribute("data-qty-id"),
          parseInt(b.getAttribute("data-qty-delta"), 10)
        );
      });
    });
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

    const message =
      currentLang === "ar"
        ? `السلام عليكم مزرعة مالك (علامة دولة DOULA)،\nأود تأكيد الطلبية التالية:\n\n` +
          lines.join("\n") +
          `\n\n💰 المجموع: ${formatPrice(total)}` +
          (clientName ? `\n👤 الاسم: ${clientName}` : "") +
          (clientCity ? `\n📍 المدينة/الولاية: ${clientCity}` : "")
        : `Bonjour Ferme Malek (Marque DOULA),\nJe souhaite passer la commande suivante :\n\n` +
          lines.join("\n") +
          `\n\n💰 Total estimé : ${formatPrice(total)}` +
          (clientName ? `\n👤 Client : ${clientName}` : "") +
          (clientCity ? `\n📍 Ville / Wilaya : ${clientCity}` : "");

    window.open(
      `https://wa.me/${window.DOULA_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_LANG_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    const dict = I18N[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) el.setAttribute("placeholder", dict[key]);
    });

    renderCatalogue();
    populateQuickOrderSelect();
    updateCartUI();
  }

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
            <input type="number" class="form-control" style="width:120px; text-align:right; font-weight:800;" data-admin-price="${p.id}" value="${p.price}" />
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

  document.addEventListener("DOMContentLoaded", () => {
    loadCustomPrices();
    applyLanguage(currentLang);

    document.getElementById("lang-toggle-btn")?.addEventListener("click", () => {
      applyLanguage(currentLang === "fr" ? "ar" : "fr");
    });

    const mobileBtn = document.getElementById("mobile-menu-btn");
    const navLinks = document.getElementById("nav-links");
    mobileBtn?.addEventListener("click", () => navLinks?.classList.toggle("mobile-open"));
    navLinks?.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => navLinks.classList.remove("mobile-open"));
    });

    document.querySelectorAll("[data-filter]").forEach((tab) => {
      tab.addEventListener("click", () => {
        document.querySelectorAll("[data-filter]").forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        currentFilter = tab.getAttribute("data-filter") || "all";
        renderCatalogue();
      });
    });

    document.getElementById("open-cart-btn")?.addEventListener("click", () => {
      document.getElementById("cart-modal")?.classList.add("open");
    });
    document.getElementById("close-cart-btn")?.addEventListener("click", () => {
      document.getElementById("cart-modal")?.classList.remove("open");
    });
    document.getElementById("cart-send-wa-btn")?.addEventListener("click", sendCartToWhatsApp);

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

    document.getElementById("open-admin-btn")?.addEventListener("click", openAdminModal);
    document.getElementById("close-admin-btn")?.addEventListener("click", () => {
      document.getElementById("admin-modal")?.classList.remove("open");
    });
    document.getElementById("save-admin-prices-btn")?.addEventListener("click", saveAdminPrices);
  });
})();
