---
title: "Sidebar Left"
description: "Dialogs Dialog Sidebar Left Organism"
type: "components"
layout: "single"
patternId: "organism-dialogs-dialog-sidebar-left"
category: "organism"
subcategory: "dialogs"
seoTitle: "Organism - Dialogs Dialog Sidebar Left"
seoDescription: "Dialogs Dialog Sidebar Left Organism"
weight: 3
markup: |
  &lt;dialog id=&quot;dlgsbleft&quot; class=&quot;hoo-dlg sidebar left&quot;&gt;
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
      
          &lt;p&gt;This dialog is a sidebar on the left. That automatically scales with the content.&lt;/p&gt;
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
  
      let dlg = document.querySelector(&#39;#dlgsbleft&#39;);
  
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

