"use strict";

/**
 * Avatar helpers for optimizing avatar and persona patterns
 */

module.exports = function (Handlebars) {
  
  // Helper to access global data safely
  function getGlobalData(options) {
    // PatternLab might have global data in different places
    let globalData = {};
    
    // Try different possible locations for the data
    if (options.data && options.data.root) {
      globalData = options.data.root;
    } else if (options.data && options.data.global) {
      globalData = options.data.global;
    } else if (options._parent && options._parent.data && options._parent.data.root) {
      globalData = options._parent.data.root;
    }
    
    return globalData;
  }
  
  // Get avatar-specific global data
  function getGlobalAvatarData(options) {
    // Try different possible locations for the data
    let avatarData = null;
    let possibleLocations = [
      options.data?.root?.["htwoo-avatar"],
      options.data?.root?.data?.["htwoo-avatar"],
      options.data?.global?.["htwoo-avatar"],
      options._parent?.data?.root?.["htwoo-avatar"],
      // Also try direct access to the root for the avatars
      options.data?.root,
      options.data?.global
    ];
    
    for (let location of possibleLocations) {
      if (location && (location.avatars || location["htwoo-avatar"])) {
        avatarData = location["htwoo-avatar"] || location;
        break;
      }
    }
    
    return avatarData || getDefaultAvatarData();
  }
  
  // Default avatar data to use when global data is not available
  function getDefaultAvatarData() {
    return {
      "avatar": {
        "mugshot": "../../images/mug-shots/astronaut-mugshot-001.jpg",
        "size": 32,
        "status": "online",
        "title": "Online"
      },
      "avatar-sizes": [16, 24, 32, 40, 48, 64, 72, 96],
      "mugshot-patterns": {
        "astronaut": "../../images/mug-shots/astronaut-mugshot-001.jpg",
        "dog": "../../images/mug-shots/dog-mugshot-001.jpg",
        "female": [
          "../../images/mug-shots/female-mugshot-001.jpg",
          "../../images/mug-shots/female-mugshot-002.jpg",
          "../../images/mug-shots/female-mugshot-003.jpg",
          "../../images/mug-shots/female-mugshot-004.jpg"
        ],
        "male": [
          "../../images/mug-shots/male-mugshot-001.jpg",
          "../../images/mug-shots/male-mugshot-002.jpg",
          "../../images/mug-shots/male-mugshot-003.jpg"
        ]
      }
    };
  }
  
  // Get a specific size avatar from global data
  Handlebars.registerHelper('avatarWithSize', function(size, options) {
    // If this is already an avatar object from iteration, use it
    const baseAvatar = this.mugshot ? this : (this.avatar || {});
    const sizedAvatar = Object.assign({}, baseAvatar, { size: size });
    return options.fn({ avatar: sizedAvatar });
  });
  
  // Generate avatar with specific image type and index
  Handlebars.registerHelper('avatarWithImage', function(type, index, options) {
    // Try to get avatar data from global context
    const avatarData = getGlobalAvatarData(options);
    const mugshotPatterns = avatarData["mugshot-patterns"] || {};
    
    // Default astronaut image as fallback
    let mugshot = "../../images/mug-shots/astronaut-mugshot-001.jpg";
    
    // Try to get the specific image if possible
    try {
      if (mugshotPatterns[type]) {
        if (Array.isArray(mugshotPatterns[type])) {
          const images = mugshotPatterns[type];
          const actualIndex = index % images.length;
          mugshot = images[actualIndex];
        } else {
          mugshot = mugshotPatterns[type];
        }
      } else if (type === 'astronaut') {
        mugshot = "../../images/mug-shots/astronaut-mugshot-001.jpg";
      } else if (type === 'dog') {
        mugshot = "../../images/mug-shots/dog-mugshot-001.jpg";
      } else if (type === 'female') {
        const femaleImages = [
          "../../images/mug-shots/female-mugshot-001.jpg",
          "../../images/mug-shots/female-mugshot-002.jpg",
          "../../images/mug-shots/female-mugshot-003.jpg",
          "../../images/mug-shots/female-mugshot-004.jpg"
        ];
        const actualIndex = index % femaleImages.length;
        mugshot = femaleImages[actualIndex];
      } else if (type === 'male') {
        const maleImages = [
          "../../images/mug-shots/male-mugshot-001.jpg",
          "../../images/mug-shots/male-mugshot-002.jpg",
          "../../images/mug-shots/male-mugshot-003.jpg"
        ];
        const actualIndex = index % maleImages.length;
        mugshot = maleImages[actualIndex];
      }
    } catch (e) {
      console.warn('Error accessing avatar image', e);
    }
    
    // Create result with the mugshot
    const result = Object.assign({}, this, { mugshot });
    return options.fn(result);
  });
  
  // Generate a facepile from global data
  Handlebars.registerHelper('generateFacepile', function(count, size, options) {
    if (!count) count = 5;
    if (!size) size = 32;
    
    // Try to get avatar data from global context
    const avatarData = getGlobalAvatarData(options);
    
    // Use avatars from global data or default to a basic set
    let baseAvatars = avatarData && avatarData.avatars ? avatarData.avatars : [
      { mugshot: "../../images/mug-shots/astronaut-mugshot-001.jpg" },
      { mugshot: "../../images/mug-shots/female-mugshot-001.jpg" },
      { mugshot: "../../images/mug-shots/male-mugshot-001.jpg" },
      { mugshot: "../../images/mug-shots/female-mugshot-002.jpg" },
      { mugshot: "../../images/mug-shots/male-mugshot-002.jpg" },
      { mugshot: "../../images/mug-shots/female-mugshot-003.jpg" },
      { mugshot: "../../images/mug-shots/male-mugshot-003.jpg" },
      { mugshot: "../../images/mug-shots/female-mugshot-004.jpg" }
    ];
    
    // Create a new array of avatar entries with the specified size
    const facepileAvatars = [];
    
    for (let i = 0; i < count; i++) {
      // Get avatar with proper modulo to avoid out-of-range errors
      const avatarIndex = i % baseAvatars.length;
      const baseAvatar = baseAvatars[avatarIndex];
      
      // Create a new avatar entry with the requested size
      facepileAvatars.push({
        mugshot: baseAvatar.mugshot,
        size: size,
        status: "online",
        title: "Online"
      });
    }
    
    return options.fn({ 
      avatars: facepileAvatars,
      "facepile-size": size,
      "facepile-count": count
    });
  });
  
  // Generate an avatar showcase with all sizes
  Handlebars.registerHelper('generateAvatarShowcase', function(options) {
    // Get avatar data from global context or use defaults
    const avatarData = getGlobalAvatarData(options);
    const sizes = avatarData["avatar-sizes"] || [16, 24, 32, 40, 48, 64, 72, 96];
    
    // Get the type and index from the provided context or use defaults
    let type = this.type || "astronaut";
    let index = this.index || 0;
    
    // Get the appropriate mugshot for this type/index
    let mugshot = "../../images/mug-shots/astronaut-mugshot-001.jpg"; // Default fallback
    
    if (avatarData["mugshot-patterns"] && avatarData["mugshot-patterns"][type]) {
      const patterns = avatarData["mugshot-patterns"][type];
      if (Array.isArray(patterns)) {
        mugshot = patterns[index % patterns.length];
      } else {
        mugshot = patterns;
      }
    }
    
    // Create showcase avatars with all sizes
    const showcaseAvatars = sizes.map(size => {
      return {
        avatar: {
          mugshot: mugshot,
          size: size,
          status: this.status || "online",
          title: this.title || "Online"
        }
      };
    });
    
    return options.fn({ 
      "avatar-showcase": showcaseAvatars,
      "showcaseAvatars": showcaseAvatars
    });
  });
  
  // Add presence to avatar
  Handlebars.registerHelper('avatarWithPresence', function(statusKey, options) {
    // Default status to online if not specified
    statusKey = statusKey || "online";
    
    // Try to get avatar data from global context
    const avatarData = getGlobalAvatarData(options);
    
    // Try to get the status mapping from global data
    let presenceMap = {
      "online": "Online",
      "away": "Away",
      "dnd": "Do not disturb",
      "invisible": "Invisible",
      "oof": "Out of Office"
    };
    
    // If there's presence-state data available, use it to build the mapping
    if (avatarData["presence-state"]) {
      avatarData["presence-state"].forEach(state => {
        if (state.status && state.title) {
          presenceMap[state.status] = state.title;
        }
      });
    }
    
    // Add presence info to avatar
    const result = Object.assign({}, this, { 
      status: statusKey,
      title: presenceMap[statusKey] || "Online"
    });
    
    return options.fn(result);
  });
};
