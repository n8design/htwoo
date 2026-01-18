---
title: "Sidebar Dialog"
description: "The Sidebar Dialog component provides a panel that slides in from either the left or right side of the screen. It's ideal for displaying supplementary content, forms, or navigation options without nav"
type: "components"
layout: "single"
patternId: "organism-dialogs-dialog-sidebar"
category: "organism"
subcategory: "dialogs"
seoTitle: "Organism - Dialogs Dialog Sidebar"
seoDescription: "Dialogs Dialog Sidebar Organism"
weight: 3
markup: |
  &lt;dialog id=&quot;dlgsb&quot; class=&quot;hoo-dlg sidebar &quot;&gt;
      &lt;div class=&quot;hoo-dlgheader&quot;&gt;
          &lt;div class=&quot;hoo-dlgheader-title&quot;&gt;&lt;h2&gt;Dialog Header&lt;/h2&gt;&lt;/div&gt;
          &lt;div class=&quot;hoo-dlgheader-closer&quot;&gt;&lt;button class=&quot;hoo-buttonicon&quot; 
          
          
          &gt;
          &lt;span class=&quot;hoo-icon&quot;&gt;
              &lt;svg class=&quot;hoo-icon-svg icon-close&quot; aria-hidden=&quot;true&quot;&gt;
                  
                  &lt;use xlink:href=&quot;../../images/icons.svg#icon-close&quot;&gt;&lt;/use&gt;
              &lt;/svg&gt;
          &lt;/span&gt;&lt;/button&gt;
      &lt;/div&gt;
      &lt;/div&gt;
  &lt;div class=&quot;hoo-dlgcontent&quot;&gt;
      
          &lt;p&gt;This dialog is a sidebar on the . That automatically scales with the content.&lt;/p&gt;
          &lt;p&gt;To make the width fixed add the CSS variable &lt;code&gt;--hoo-dlg-width&lt;/code&gt;&lt;/p&gt;
          &lt;h2&gt;Try to resize the sidebar&lt;/h2&gt;
          &lt;button class=&quot;hoo-button-primary&quot; id=&#39;width-unset&#39;&gt;
              &lt;span class=&quot;hoo-button-label&quot;&gt;Unset / reset&lt;/span&gt;
          &lt;/button&gt;
          &lt;button class=&quot;hoo-button-primary&quot; id=&#39;width-20vw&#39;&gt;
              &lt;span class=&quot;hoo-button-label&quot;&gt;20% width&lt;/span&gt;
          &lt;/button&gt;
          &lt;button class=&quot;hoo-button-primary&quot; id=&#39;width-50vw&#39;&gt;
              &lt;span class=&quot;hoo-button-label&quot;&gt;50% width&lt;/span&gt;
          &lt;/button&gt;
          &lt;button class=&quot;hoo-button-primary&quot; id=&#39;width-75vw&#39;&gt;
              &lt;span class=&quot;hoo-button-label&quot;&gt;75% width&lt;/span&gt;
          &lt;/button&gt;
  &lt;/div&gt;&lt;/dialog&gt;
  &lt;!--- ⬇️ Script below is just for demo purposes ⬇️ --&gt;
  &lt;script&gt;
  
      let dlg = document.querySelector(&#39;#dlgsb&#39;);
  
      if (dlg !== undefined &amp;&amp; dlg.parentElement.className === &#39;dlg-background&#39;) {
  
          dlg ? dlg.showModal() : dlg;
  
          const resize = (event) =&gt; {
  
              console.debug(event.currentTarget.id);
  
              let newSize = null;
  
              switch (event.currentTarget.id) {
                  case &#39;width-unset&#39;:
                      break;
                  case &#39;width-20vw&#39;:
                      newSize = &#39;20vw&#39;;
                      break;
                  case &#39;width-50vw&#39;:
                      newSize = &#39;50vw&#39;;
                      break;
                  case &#39;width-75vw&#39;:
                      newSize = &#39;75vw&#39;;
                      break;
                  default:
                      break;
              }
  
              console.debug(dlg, newSize);
  
              if (dlg &amp;&amp; newSize) {
  
                  console.debug(&#39; --- Update ....&#39;)
                  dlg.style.setProperty(&#39;--hoo-dlg-width&#39;, newSize);
  
              } else {
                  if (newSize === null) {
                      dlg.style.setProperty(&#39;--hoo-dlg-width&#39;, null);
                  }
              }
          }
  
          let resizers = document.querySelectorAll(&quot;button[id^=&#39;width&#39;]&quot;);
  
          console.debug(resizers);
  
          resizers.forEach(resizer =&gt; resizer.addEventListener(&#39;click&#39;, resize));
      }
  
  &lt;/script&gt;
---

# Sidebar Dialog

The Sidebar Dialog component provides a panel that slides in from either the left or right side of the screen. It's ideal for displaying supplementary content, forms, or navigation options without navigating away from the current view.

## Overview

Sidebar dialogs in HTWOO UI leverage the HTML5 `<dialog>` element with special positioning to create panels that appear from the side of the screen. They can be positioned on either the left or right side and can take up the full height of the viewport.

## Features

- Left or right side positioning
- Full-height viewport display
- Customizable width via CSS variables
- Support for resizing through user interaction
- Smooth animation transitions
- Optional dialog header with title and close button
- Dialog content area for main information
- Optional backdrop when opened modally

## Usage

The Sidebar Dialog can be implemented with the following structure:

```html
<!-- Right Sidebar -->
<dialog id="mySidebarRight" class="hoo-dlg sidebar right">
  <!-- Dialog header -->
  <div class="hoo-dlgheader">
    <h2>Sidebar Title</h2>
    <button class="hoo-button-icon" aria-label="Close">×</button>
  </div>
  
  <!-- Dialog content -->
  <div class="hoo-dlgcontent">
    <p>Sidebar content goes here</p>
  </div>
</dialog>

<!-- Left Sidebar -->
<dialog id="mySidebarLeft" class="hoo-dlg sidebar left">
  <!-- Dialog header -->
  <div class="hoo-dlgheader">
    <h2>Sidebar Title</h2>
    <button class="hoo-button-icon" aria-label="Close">×</button>
  </div>
  
  <!-- Dialog content -->
  <div class="hoo-dlgcontent">
    <p>Sidebar content goes here</p>
  </div>
</dialog>
```

### Opening the Dialog

### Customizing Width

Sidebar dialog width can be customized using CSS variables:

```html
<dialog class="hoo-dlg sidebar right" style="--hoo-dlg-width: 25vw">
  <!-- Dialog content -->
</dialog>
```

## SCSS Files

**Dialog Styles:**
- `src/styles/03-organism/dialog/_dialog.scss`

## Accessibility

- Uses the native HTML5 `<dialog>` element
- Ensures focus is trapped within the dialog when open
- ESC key closes the dialog by default
- Proper focus management with autofocus attribute
- ARIA attributes for screen reader compatibility