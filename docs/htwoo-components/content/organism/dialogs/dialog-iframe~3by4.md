---
title: "with IFrame - 3:4"
description: "Dialogs Dialog Iframe 3by4 Organism"
type: "components"
layout: "single"
patternId: "organism-dialogs-dialog-iframe-3by4"
category: "organism"
subcategory: "dialogs"
seoTitle: "Organism - Dialogs Dialog Iframe 3by4"
seoDescription: "Dialogs Dialog Iframe 3by4 Organism"
weight: 10
markup: |
  &lt;dialog id=&quot;dlgiframe&quot; class=&quot;hoo-dlg&quot; style=&quot;--hoo-dlg-width: 50vw;&quot;&gt;
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
          &lt;iframe class=&quot;hoo-dlg-iframe ratio-3by4&quot; src=&quot;../pages-teams-teams-splash-screen/pages-teams-teams-splash-screen.rendered.html&quot; name=&quot;testIframe&quot; title=&quot;testIframe&quot; loading=&quot;lazy&quot;&gt;
          &lt;/iframe&gt;
      &lt;/div&gt;&lt;/dialog&gt;
  &lt;!--- ⬇️ Script below is just for demo purposes ⬇️ --&gt;
  &lt;script&gt;
      console.debug(location.href);
      let dlgiframe = document.querySelector(&#39;#dlgiframe&#39;);
  
      if (dlgiframe !== undefined &amp;&amp; dlgiframe.parentElement.className === &#39;dlg-background&#39;) {
          
          dlgiframe.showModal();
      }
  &lt;/script&gt;
---

