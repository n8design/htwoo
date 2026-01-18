---
title: "Bottombar Dialog"
description: "The Bottombar Dialog component provides a horizontal panel that appears from the bottom of the screen. It's useful for action bars, command panels, or notifications that need to be accessible but not "
type: "components"
layout: "single"
patternId: "organism-dialogs-dialog-bottombar"
category: "organism"
subcategory: "dialogs"
seoTitle: "Organism - Dialogs Dialog Bottombar"
seoDescription: "Dialogs Dialog Bottombar Organism"
weight: 5
markup: |
  &lt;dialog id=&quot;dlgbottombar&quot; class=&quot;hoo-dlg bottombar&quot;&gt;
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
      
          &lt;p&gt;This dialog is a topbar . That automatically scales with the content.&lt;/p&gt;
          &lt;p&gt;To make the height fixed add the CSS variable &lt;code&gt;--hoo-dlg-height&lt;/code&gt;&lt;/p&gt;
          &lt;h2&gt;Try to resize the sidebar&lt;/h2&gt;
          &lt;button class=&quot;hoo-button-primary&quot; id=&#39;height-unset&#39;&gt;
              &lt;span class=&quot;hoo-button-label&quot;&gt;Unset / reset&lt;/span&gt;
          &lt;/button&gt;
          &lt;button class=&quot;hoo-button-primary&quot; id=&#39;height-20vw&#39;&gt;
              &lt;span class=&quot;hoo-button-label&quot;&gt;20% height&lt;/span&gt;
          &lt;/button&gt;
          &lt;button class=&quot;hoo-button-primary&quot; id=&#39;height-50vw&#39;&gt;
              &lt;span class=&quot;hoo-button-label&quot;&gt;50% height&lt;/span&gt;
          &lt;/button&gt;
          &lt;button class=&quot;hoo-button-primary&quot; id=&#39;height-75vw&#39;&gt;
              &lt;span class=&quot;hoo-button-label&quot;&gt;75% height&lt;/span&gt;
          &lt;/button&gt;
  &lt;/div&gt;&lt;/dialog&gt;
  &lt;!--- ⬇️ Script below is just for demo purposes ⬇️ --&gt;
  &lt;script&gt;
  
      let dlg = document.querySelector(&#39;#dlgbottombar&#39;);
  
      if (dlg !== undefined &amp;&amp; dlg.parentElement.className === &#39;dlg-background&#39;) {
          
          dlg.showModal()
  
          const resize = (event) =&gt; {
  
              console.debug(event.currentTarget.id);
  
              let newSize = null;
  
              switch (event.currentTarget.id) {
                  case &#39;height-unset&#39;:
                      break;
                  case &#39;height-20vw&#39;:
                      newSize = &#39;20vh&#39;;
                      break;
                  case &#39;height-50vw&#39;:
                      newSize = &#39;50vh&#39;;
                      break;
                  case &#39;height-75vw&#39;:
                      newSize = &#39;75vh&#39;;
                      break;
                  default:
                      break;
              }
  
              console.debug(dlg, newSize);
  
              if (dlg &amp;&amp; newSize) {
  
                  console.debug(&#39; --- Update ....&#39;)
                  dlg.style.setProperty(&#39;--hoo-dlg-height&#39;, newSize);
  
              } else {
                  if (newSize === null) {
                      dlg.style.setProperty(&#39;--hoo-dlg-height&#39;, null);
                  }
              }
          }
  
          let resizers = document.querySelectorAll(&quot;button[id^=&#39;height&#39;]&quot;);
  
          console.debug(resizers);
  
          resizers.forEach(resizer =&gt; resizer.addEventListener(&#39;click&#39;, resize));
      }
  &lt;/script&gt;
---

# Bottombar Dialog

The Bottombar Dialog component provides a horizontal panel that appears from the bottom of the screen. It's useful for action bars, command panels, or notifications that need to be accessible but not interfere with the main content view.

## Overview

Bottombar dialogs in HTWOO UI extend the HTML5 `<dialog>` element with special positioning to create a horizontal panel at the bottom of the viewport. They span the full width of the screen and can have a customizable height.

## Features

- Fixed positioning at the bottom of the viewport
- Full-width display
- Customizable height via CSS variables
- Support for resizing through user interaction
- Smooth animation transitions
- Optional dialog header with title and close button
- Dialog content area for main information
- Optional backdrop when opened modally

## Usage

The Bottombar Dialog can be implemented with the following structure:

```html
<dialog id="myBottombar" class="hoo-dlg bottombar">
  <!-- Dialog header -->
  <div class="hoo-dlgheader">
    <h2>Bottombar Title</h2>
    <button class="hoo-button-icon" aria-label="Close">×</button>
  </div>
  
  <!-- Dialog content -->
  <div class="hoo-dlgcontent">
    <p>Bottombar content goes here</p>
  </div>
</dialog>
```

### Opening the Dialog

### Customizing Height

Bottombar dialog height can be customized using CSS variables:

```html
<dialog class="hoo-dlg bottombar" style="--hoo-dlg-height: 20vh">
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