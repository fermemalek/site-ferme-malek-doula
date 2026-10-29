// ============================================================================
// CONFIGURATION DU SITE V2 — FERME MALEK (MARQUE DOULA - CHEMLAL ALGERIA)
// Inspiré de l'étiquette officielle DOULA (Lot A26-1) & du Certificat COI Tello
// ============================================================================

window.DOULA_CONFIG = {
  brandName: "Doula",
  brandNameAr: "دولة",
  farmName: "Ferme Malek",
  farmNameAr: "مزرعة مالك",
  varietyFr: "Variété Chemlal — Algérie 🇩🇿",
  varietyAr: "صنف شملال — الجزائر 🇩🇿",
  lotNumber: "A26-1",
  expiryDate: "01/01/2028",
  barcode: "6 101253 455109",
  phoneDisplay: "0554 51 06 78",
  whatsappNumber: "213554510678",
  cityFr: "Aïn Oussara — Région de Benhar",
  cityAr: "عين وسارة — منطقة بنهار",
  currencyFr: "DA",
  currencyAr: "د.ج",

  // Données officielles du Rapport d'Analyse Laboratorio Tello (Tentamus / COI)
  labReport: {
    labName: "Laboratorio Tello S.L.U. (Tentamus Group — Jaén, Espagne)",
    reportNumber: "60123123848 / M1/E",
    date: "23/01/2026",
    acidity: "0,28 %",
    acidityLimit: "≤ 0,80 %",
    polyphenols: "452 mg/kg",
    peroxides: "9,4 meq O₂/kg",
    peroxidesLimit: "≤ 20",
    k270: "0,16",
    k232: "2,24",
    deltaK: "< 0,01",
    ethylEsters: "35 mg/kg"
  },

  products: [
    // ========================================================================
    // GAMME BOUTEILLES EN VERRE (1L, 0,750L, 0,370L)
    // ========================================================================
    {
      id: "verre-1l",
      category: "verre",
      packaging: "glass",
      volume: "1 L",
      volumeAr: "1 لتر",
      badgeFr: "Édition Prestige • Verre",
      badgeAr: "إصدار فاخر • زجاج",
      nameFr: "Huile d'Olive Vierge Extra Doula — Bouteille en Verre 1L",
      nameAr: "زيت زيتون بكر ممتاز دولة — قارورة زجاجية 1 لتر",
      descFr: "Huile d'olive de catégorie supérieure (Variété Chemlal, Acidité 0,28 %, Polyphénols 452 mg/kg) en bouteille en verre de 1 Litre.",
      descAr: "زيت زيتون بكر ممتاز عالي الجودة (صنف شملال، حموضة 0.28%، غني بالبوليفينول 452 ملغ/كلغ) في قارورة زجاجية سعة 1 لتر.",
      price: 1400,
      bottleScale: 1.0
    },
    {
      id: "verre-750ml",
      category: "verre",
      packaging: "glass",
      volume: "0,750 L",
      volumeAr: "0.750 لتر",
      badgeFr: "Format Table • Verre",
      badgeAr: "حجم المائدة • زجاج",
      nameFr: "Huile d'Olive Vierge Extra Doula — Bouteille en Verre 0,750L",
      nameAr: "زيت زيتون بكر ممتاز دولة — قارورة زجاجية 0.750 لتر",
      descFr: "Format élégant 750 ml en verre pour le service à table et la préservation optimale des arômes fruités de la Ferme Malek.",
      descAr: "قارورة زجاجية أنيقة بحجم 750 مل مثالية للمائدة وللحفاظ على النكهة الطبيعية الأصيلة لمزرعة مالك.",
      price: 1100,
      bottleScale: 0.9
    },
    {
      id: "verre-370ml",
      category: "verre",
      packaging: "glass",
      volume: "0,370 L",
      volumeAr: "0.370 لتر",
      badgeFr: "Format Découverte • Verre",
      badgeAr: "حجم صغير • زجاج",
      nameFr: "Huile d'Olive Vierge Extra Doula — Bouteille en Verre 0,370L",
      nameAr: "زيت زيتون بكر ممتاز دولة — قارورة زجاجية 0.370 لتر",
      descFr: "Flacon en verre de 370 ml, idéal pour la dégustation à froid, les salades ou pour offrir un coffret du terroir de Benhar.",
      descAr: "قارورة زجاجية بحجم 370 مل مثالية للتذوق، السلطات أو كهدية فاخرة من منطقة بنهار (عين وسارة).",
      price: 600,
      bottleScale: 0.78
    },

    // ========================================================================
    // GAMME BOUTEILLES & BIDONS EN PLASTIQUE (1L, 3L, 5L)
    // ========================================================================
    {
      id: "plastique-1l",
      category: "plastique",
      packaging: "real-photo-1l",
      volume: "1 L",
      volumeAr: "1 لتر",
      badgeFr: "Bouteille Officielle 1L",
      badgeAr: "القارورة الرسمية 1 لتر",
      nameFr: "Huile d'Olive Vierge Extra Doula — Bouteille Plastique 1L",
      nameAr: "زيت زيتون بكر ممتاز دولة — قارورة بلاستيكية 1 لتر",
      descFr: "Notre bouteille officielle Doula 1L (Lot A26-1, Variété Chemlal) en PET alimentaire haute résistance avec bouchon scellé vert.",
      descAr: "قارورة دولة الرسمية بسعة 1 لتر (الدفعة A26-1، صنف شملال) بتعبئة غذائية عملية ومختومة.",
      price: 1200,
      bottleScale: 1.0
    },
    {
      id: "plastique-3l",
      category: "plastique",
      packaging: "plastic-3l",
      volume: "3 L",
      volumeAr: "3 لتر",
      badgeFr: "Format Milieu • 3L",
      badgeAr: "حجم متوسط • 3 لتر",
      nameFr: "Huile d'Olive Vierge Extra Doula — Bidon Plastique 3L",
      nameAr: "زيت زيتون بكر ممتاز دولة — قارورة بلاستيكية 3 لتر",
      descFr: "Format familial intermédiaire de 3 Litres avec poignée ergonomique. Même huile certifiée Vierge Extra (0,28 % d'acidité).",
      descAr: "حجم عائلي متوسط بسعة 3 لتر مع مقبض مريح. نفس الزيت المعتمد بكر ممتاز (حموضة 0.28%).",
      price: 3500,
      bottleScale: 0.96
    },
    {
      id: "plastique-5l",
      category: "plastique",
      packaging: "plastic-5l",
      volume: "5 L",
      volumeAr: "5 لتر",
      badgeFr: "Meilleure Vente ★ 5L",
      badgeAr: "الأكثر طلباً ★ 5 لتر",
      nameFr: "Huile d'Olive Vierge Extra Doula — Bidon Familial 5L",
      nameAr: "زيت زيتون بكر ممتاز دولة — الحجم العائلي 5 لتر",
      descFr: "Le grand bidon économique de 5 Litres pour la consommation familiale annuelle. Directement de la Ferme Malek (Benhar, Aïn Oussara).",
      descAr: "الحجم العائلي الكبير والاقتصادي بسعة 5 لتر للاستهلاك المنزلي، مباشرة من مزرعة مالك ببنهار (عين وسارة).",
      price: 5800,
      bottleScale: 1.05
    },

    // ========================================================================
    // AUTRES PRODUITS DÉRIVÉS DE LA FERME MALEK
    // ========================================================================
    {
      id: "olives-table",
      category: "derives",
      packaging: "jar-olives",
      volume: "1 Kg",
      volumeAr: "1 كلغ",
      badgeFr: "Récolte Ferme Malek",
      badgeAr: "منتوج مزرعة مالك",
      nameFr: "Olives de Table Naturelles Chemlal — Ferme Malek",
      nameAr: "زيتون المائدة الطبيعي شملال — مزرعة مالك",
      descFr: "Olives de table cueillies à la main à Benhar et préparées naturellement sans additifs chimiques.",
      descAr: "زيتون مائدة طبيعي مقطوف يدوياً من مزرعتنا في بنهار ومحضر بطريقة تقليدية صحية 100%.",
      price: 650,
      bottleScale: 0.88
    },
    {
      id: "olives-marinees",
      category: "derives",
      packaging: "jar-marinated",
      volume: "500 g",
      volumeAr: "500 غ",
      badgeFr: "Recette Terroir",
      badgeAr: "وصفة تقليدية",
      nameFr: "Olives Marinées à l'Huile d'Olive Doula & Herbes",
      nameAr: "زيتون متبل بزيت زيتون دولة والأعشاب",
      descFr: "Olives marinées dans notre huile d'olive vierge extra Doula (0,28 % d'acidité) avec thym sauvage et ail.",
      descAr: "زيتون متبل في زيت زيتون دولة البكر الممتاز مع الزعتر البري والثوم.",
      price: 550,
      bottleScale: 0.84
    },
    {
      id: "savon-olive",
      category: "derives",
      packaging: "soap",
      volume: "150 g",
      volumeAr: "150 غ",
      badgeFr: "100% Naturel",
      badgeAr: "طبيعي 100%",
      nameFr: "Savon Artisanal Pur à l'Huile d'Olive Doula",
      nameAr: "صابون تقليدي طبيعي بزيت زيتون دولة",
      descFr: "Savon doux surgras riche en polyphénols naturels, fabriqué à partir de notre huile d'olive pure.",
      descAr: "صابون طبيعي غني بمضادات الأكسدة، مصنوع من زيت زيتون مزرعة مالك الصافي.",
      price: 350,
      bottleScale: 0.82
    }
  ]
};
