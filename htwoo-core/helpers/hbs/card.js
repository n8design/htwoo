"use strict";

/**
 * Card helpers for optimizing card patterns
 */

module.exports = function (Handlebars) {
  
  // Helper to access global data safely
  function getGlobalCardData(options) {
    // Try different possible locations for the data
    let globalData = null;
    let possibleLocations = [
      options.data?.root?.["htwoo-card"],
      options.data?.root?.data?.["htwoo-card"],
      options.data?.global?.["htwoo-card"],
      options._parent?.data?.root?.["htwoo-card"]
    ];
    
    for (let location of possibleLocations) {
      if (location) {
        globalData = location;
        break;
      }
    }
    
    return globalData || getDefaultCardData();
  }
  
  // Default card data to use when global data is not available
  function getDefaultCardData() {
    return {
      "card-templates": {
        "default": {
          "title": "Default Card Title",
          "description": "Default card description.",
          "location": "Default Location"
        }
      },
      "card-images": {
        "default": "../../images/card-images/coffee-image.jpg",
        "splash": [
          "../../images/card-images/htwoo-gm-001.svg",
          "../../images/card-images/htwoo-gm-002.svg",
          "../../images/card-images/htwoo-gm-003.svg"
        ]
      }
    };
  }
  
  // Helper to create a card from templates
  Handlebars.registerHelper('cardFromTemplate', function(templateName, overrides, options) {
    const cardData = getGlobalCardData(options);
    
    // Get the requested template or default to the default template
    const template = cardData["card-templates"]?.[templateName] || 
                    cardData["card-templates"]?.default || 
                    { "title": "Card Title", "description": "Card description" };
    
    // Apply any overrides passed in
    const mergedCard = Object.assign({}, template, overrides || {});
    
    return options.fn(mergedCard);
  });
  
  // Helper to get a card image
  Handlebars.registerHelper('cardImage', function(type, index, options) {
    const cardData = getGlobalCardData(options);
    const images = cardData["card-images"] || { "default": "../../images/card-images/coffee-image.jpg" };
    
    let image;
    
    if (images[type]) {
      if (Array.isArray(images[type])) {
        // Calculate index with modulo to prevent out-of-range errors
        const actualIndex = index % images[type].length;
        image = images[type][actualIndex];
      } else {
        // Single image for this type
        image = images[type];
      }
    } else {
      // Default to the default image
      image = images.default;
    }
    
    return image;
  });
  
  // Helper to create splash card with different image and optional overrides
  Handlebars.registerHelper('splashCardWithImage', function(imageIndex, options) {
    const cardData = getGlobalCardData(options);
    
    // Get the base splash card or create a default one
    const baseSplashCard = cardData["splash-card"] || {
      "title": "Default Splash Card Title",
      "headerImage": "../../images/card-images/htwoo-gm-001.svg",
      "description": "Default splash card description.",
      "primary-button": {
        "button": {
          "label": "Primary Action"
        }
      },
      "secondary-button": {
        "button": {
          "label": "Secondary Action"
        }
      }
    };
    
    // Get the image mapping
    const imageMap = (cardData["card-images"] && cardData["card-images"].splash) ? 
                     cardData["card-images"].splash : 
                     ["../../images/card-images/htwoo-gm-001.svg"];
    
    // Get the variant data if it exists
    const variants = cardData["splash-card-variants"] || [];
    const variant = variants[imageIndex] || {};
    
    // Create the merged card object
    const result = {
      ...baseSplashCard,
      ...variant,
      headerImage: (imageMap[imageIndex] || baseSplashCard.headerImage)
    };
    
    return options.fn(result);
  });
  
  // Helper to generate a grid of cards
  Handlebars.registerHelper('generateCardGrid', function(count, templateName, options) {
    const cardData = getGlobalCardData(options);
    
    // Get the template to use
    const templates = cardData["card-templates"] || {};
    const template = templates[templateName] || templates.default || {
      title: "Card",
      description: "Card description"
    };
    
    // Generate the cards
    const cards = [];
    for (let i = 0; i < count; i++) {
      // Create a slight variation for each card
      cards.push({
        title: `${template.title || 'Card'} ${i+1}`,
        description: template.description,
        index: i
      });
    }
    
    return options.fn({ cards, "grid-layout": "CanvasSection-xl12", "card-count": count });
  });
};
