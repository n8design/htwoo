---
title: "Input Readonly Showcase"
description: "Input Input Readonly Showcase Atoms"
type: "components"
layout: "single"
patternId: "atoms-input-input-readonly-showcase"
category: "atoms"
subcategory: "input"
seoTitle: "Atoms - Input Input Readonly Showcase"
seoDescription: "Input Input Readonly Showcase Atoms"
weight: 61
hasVariants: false
markup: |
  &lt;h2&gt;Text Input Types&lt;/h2&gt;
  &lt;div&gt;
      &lt;input class=&quot;hoo-input-text&quot; id=&quot;file-upload-82&quot;  type=&quot;text&quot;  
          placeholder=&quot;A placeholder text&quot;  &gt;
  &lt;/div&gt;
  &lt;div&gt;
      &lt;input class=&quot;hoo-input-text&quot; id=&quot;file-upload-82&quot;  type=&quot;email&quot;  placeholder=&quot;John.Doe@example.com&quot;    &gt;
  &lt;/div&gt;
  &lt;div&gt;
      &lt;input class=&quot;hoo-input-text&quot; type=&quot;password&quot; id=&quot;file-upload-82&quot;   placeholder=&quot;https://example.com&quot;  &gt;
  &lt;/div&gt;
  &lt;div&gt;
      &lt;input class=&quot;hoo-input-text&quot; type=&quot;phone&quot; id=&quot;file-upload-82&quot;   placeholder=&quot;555-8039&quot;  &gt;
  &lt;/div&gt;
  &lt;div&gt;
      &lt;input class=&quot;hoo-input-text&quot; type=&quot;url&quot; id=&quot;file-upload-82&quot;   placeholder=&quot;https://example.com&quot;  &gt;
  &lt;/div&gt;
  &lt;div&gt;
      &lt;label for=&quot;zipca&quot;&gt;Canadian Zip Code&lt;/label&gt;
      &lt;input placeholder=&quot;XXX XXX&quot; pattern=&quot;\w\d\w \d\w\d&quot; class=&quot;masked&quot; data-charset=&quot;_X_ X_X&quot; id=&quot;zipca&quot; type=&quot;text&quot;
          name=&quot;zipcodeca&quot; title=&quot;6-character alphanumeric zip code in the format of A1A 1A1&quot;&gt;&lt;br&gt;
      &lt;label for=&quot;phone1&quot;&gt;Phone Number&lt;/label&gt;
      &lt;input id=&quot;phone1&quot; type=&quot;tel&quot; placeholder=&quot;+1 (555) 555-5555&quot; class=&quot;masked&quot;
          pattern=&quot;(\+\d{1,3})?[-.\s]?(\d{1,3})?[-.\s]?(\(?\d{3}\)?)[-.\s]?\d{3}[-.\s]?\d{4}&quot;
          data-valid-example=&quot;+1 (555) 555-5555&quot;
          title=&quot;Phone number in formats like +1 (555) 555-5555, +1-555-555-5555, or +15555555555&quot;&gt;&lt;br&gt;
      &lt;label for=&quot;tel&quot;&gt;Telephone&lt;/label&gt;
      &lt;input aria-describedby=&quot;mask-hidden-helper-msg helper1&quot; id=&quot;tel&quot; type=&quot;text&quot; inputmode=&quot;numeric&quot; data-charset=&quot;+__-___-___-____&quot; name=&quot;phone&quot; placeholder=&quot;+_--___-____&quot; 
             pattern=&quot;(\+\d{1,3}[-.\s]?)?(\(?\d{1,3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}&quot; 
             class=&quot;masked&quot; title=&quot;Phone number in formats like +1-234-567-8901 or 234-567-8901&quot;&gt;
  &lt;/div&gt;
  &lt;div&gt;
      &lt;div class=&quot;hoo-input-group&quot;&gt;
          &lt;div id=&quot;suffix-label-file-upload-82&quot; class=&quot;hoo-input-prefix&quot;&gt;https://&lt;/div&gt;
          &lt;input class=&quot;hoo-input-text&quot;  id=&quot;file-upload-82&quot; 
              placeholder=&quot;A placeholder text&quot;  &gt;
      &lt;/div&gt;
  &lt;/div&gt;
  &lt;div&gt;
      &lt;div class=&quot;hoo-input-group&quot;&gt;
          &lt;input class=&quot;hoo-input-text&quot;  id=&quot;file-upload-82&quot; 
              placeholder=&quot;A placeholder text&quot; data-suffix=&quot;.com&quot;  aria-labelledby=&quot;suffix-label-file-upload-82&quot; &gt;
          &lt;div id=&quot;suffix-label-file-upload-82&quot; class=&quot;hoo-input-suffix&quot;&gt;.com&lt;/div&gt;
      &lt;/div&gt;
  &lt;/div&gt;
  &lt;div&gt;
      &lt;p&gt;Invalid style can be assigned using a CSS class:&lt;/p&gt;
      &lt;input class=&quot;hoo-input-text &quot; type=&quot;text&quot; placeholder=&quot;This is just a placehoder&quot;&gt;
      &lt;p&gt;Or just with default pseudo selector `:invalid`&lt;/p&gt;
      &lt;input class=&quot;hoo-input-text&quot; type=&quot;text&quot; placeholder=&quot;This is just a placehoder&quot; value=&quot;&quot; required&gt;
      &lt;p&gt;The empty field is required there for at its current state invalid&lt;br&gt;To avoid showing up as invalid add the &#39;.is-empty&#39; class to the styles&lt;/p&gt;
      &lt;input class=&quot;hoo-input-text is-empty&quot; type=&quot;text&quot; placeholder=&quot;This is just a placehoder&quot; value=&quot;&quot; required&gt;
      &lt;p&gt;Invalid fields can be also defined by using patter&lt;/p&gt;
      &lt;input class=&quot;hoo-input-text&quot; type=&quot;text&quot; placeholder=&quot;This is just a placehoder&quot; value=&quot;ABC&quot; pattern=&quot;[a-z]{4,8}&quot;&gt;
      &lt;p&gt;The previous input only allows lowercase characters and a length of 4-8 characters&lt;/p&gt;
  &lt;/div&gt;
  &lt;div&gt;
      &lt;div class=&quot;hoo-input-group&quot;&gt;
          &lt;div class=&quot;hoo-input-prefix&quot;&gt;https://&lt;/div&gt;
          &lt;input class=&quot;hoo-input-text&quot; id=&quot;file-upload-82&quot;  type=&quot;text&quot; placeholder=&quot;A placeholder text&quot; data-suffix=&quot;.com&quot; data-prefix=&quot;https://&quot;   &gt;
          &lt;div class=&quot;hoo-input-suffix&quot;&gt;.com&lt;/div&gt;
      &lt;/div&gt;
  &lt;/div&gt;
  &lt;div&gt;
      &lt;div class=&quot;hoo-input-search&quot;&gt;
          &lt;svg class=&quot;hoo-icon icon-search&quot;&gt;
              &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-search&quot;&gt;
              &lt;/use&gt;
          &lt;/svg&gt;
          &lt;input class=&quot;hoo-input-text&quot; type=&quot;search&quot; placeholder=&quot;Search&quot; &gt;
      &lt;/div&gt;
  &lt;/div&gt;
  &lt;h2&gt;Number Input Types&lt;/h2&gt;
  &lt;div&gt;
      &lt;input class=&quot;hoo-input-text&quot; type=&quot;number&quot; min=&quot;0&quot; max=&quot;100&quot;    &gt;
  &lt;/div&gt;
  &lt;h2&gt;Date and Time Input Types&lt;/h2&gt;
  &lt;div&gt;
      &lt;input type=&quot;date&quot; class=&quot;hoo-input-date&quot; id=&quot;file-upload-82&quot;  name=&quot;my-date-picker-name&quot; value=&quot;2021-10-26&quot; min=&quot;2018-01-01&quot; max=&quot;2030-12-31&quot;    &gt;
  &lt;/div&gt;
  &lt;div&gt;
      &lt;input type=&quot;month&quot; class=&quot;hoo-input-date&quot; id=&quot;file-upload-82&quot;  name=&quot;my-date-picker-name&quot; value=&quot;2021-10-26&quot; min=&quot;2018-01-01&quot; max=&quot;2030-12-31&quot;    &gt;
  &lt;/div&gt;
  &lt;div&gt;
      &lt;input type=&quot;week&quot; class=&quot;hoo-input-date&quot; id=&quot;file-upload-82&quot;  name=&quot;my-date-picker-name&quot; value=&quot;2021-10-26&quot; min=&quot;2018-01-01&quot; max=&quot;2030-12-31&quot;    &gt;
  &lt;/div&gt;
  &lt;div&gt;
      &lt;input type=&quot;datetime-local&quot; class=&quot;hoo-input-date&quot; name=&quot;my-date-picker-name&quot; value=&quot;2021-10-26&quot; min=&quot;2018-01-01&quot; max=&quot;2030-12-31&quot;    &gt;
  &lt;/div&gt;
  &lt;div&gt;
      &lt;input type=&quot;time&quot; class=&quot;hoo-input-time&quot; id=&quot;file-upload-82&quot;  name=&quot;&quot; value=&quot;&quot; min=&quot;&quot; max=&quot;&quot;  &gt;
  &lt;/div&gt;
  &lt;h2&gt;Special Input Types&lt;/h2&gt;
  &lt;div&gt;
      &lt;input class=&quot;hoo-input-color&quot; type=&quot;color&quot; value=&quot;#000&quot; hsla &gt;
  &lt;/div&gt;
  &lt;div&gt;
      &lt;section class=&quot;hoo-input-file&quot;&gt;
          &lt;label class=&quot;hoo-infile-label&quot; name=&quot;file-upload&quot; tabIndex=&quot;-1&quot; for=&quot;file-upload-37&quot; draggable=&quot;true&quot;&gt;
              &lt;div class=&quot;hoo-infile-icon&quot;&gt;&lt;span class=&quot;hoo-icon&quot;&gt;
                  &lt;svg class=&quot;hoo-icon-svg icon-arrow-upload-filled&quot; aria-hidden=&quot;true&quot;&gt;
                      &lt;title&gt;Upload&lt;/title&gt;
                      &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-arrow-upload-filled&quot;&gt;
                      &lt;/use&gt;
                  &lt;/svg&gt;&lt;/span&gt;
          &lt;/div&gt;
          &lt;div&gt;Click or drag and drop files here to upload filed
              &lt;p class=&quot;hoo-infile-description&quot;&gt;Max file size: 10MB, Types: jpg, png, pdf&lt;/p&gt;
          &lt;/div&gt;
      &lt;/label&gt;
      &lt;input type=&quot;file&quot; id=&quot;file-upload-37&quot; name=&quot;&quot; class=&quot;hoo-infile-context&quot; multiple aria-describedby=&quot;file-upload-37-content&quot; /&gt;
      &lt;output class=&quot;hoo-infile-output&quot; id=&quot;NaN-content&quot; aria-live=&quot;polite&quot; title=&quot;Current selection&quot;&gt;
      &lt;/output&gt;
  &lt;/section&gt;
  &lt;/div&gt;
  &lt;h2&gt;Form Controls&lt;/h2&gt;
  &lt;div&gt;
      &lt;textarea class=&quot;hoo-input-text&quot; id=&quot;file-upload-37&quot;   &gt;
      &lt;/textarea&gt;
  &lt;/div&gt;
  &lt;div&gt;
      &lt;input type=&quot;checkbox&quot; name=&quot;checkbox-1234&quot; id=&quot;checkbox-1234&quot; value=&quot;&quot; class=&quot;hoo-checkbox&quot; &gt;
      &lt;label for=&quot;checkbox-1234&quot;&gt;Checkbox Label&lt;/label&gt;
  &lt;/div&gt;
  &lt;div&gt;
      &lt;input type=&quot;radio&quot; name=&quot;&quot; id=&quot;checkbox-1234&quot; value=&quot;&quot; class=&quot;hoo-radio&quot;&gt;
      &lt;label for=&quot;checkbox-1234&quot; &gt;Radio Button Label&lt;/label&gt;
  &lt;/div&gt;
  &lt;div&gt;
      &lt;input type=&quot;radio&quot; name=&quot;checkbox-1234&quot; id=&quot;checkbox-1234&quot; value=&quot;&quot; class=&quot;hoo-radio&quot; disabled=&quot;&quot;  aria-disabled=&quot;&quot; &gt;
      &lt;label for=&quot;checkbox-1234&quot; &gt;Radio Button Label&lt;/label&gt;
  &lt;/div&gt;
  &lt;div&gt;
      &lt;div class=&quot;hoo-toggle&quot;&gt;
          &lt;input type=&quot;checkbox&quot; class=&quot;hoo-toggle-cb&quot; name=&quot;toggleName&quot; id=&quot;toggle-33&quot; &gt;
          &lt;label for=&quot;toggle-33&quot; class=&quot;hoo-toggle-label&quot;&gt;&lt;span class=&quot;hoo-toggle-slider&quot;&gt;&lt;/span&gt;&lt;span class=&quot;hoo-toggle-checked&quot;&gt;On&lt;/span&gt;&lt;span class=&quot;hoo-toggle-unchecked&quot;&gt;Off&lt;/span&gt;
  &lt;/label&gt;
  &lt;/div&gt;
  &lt;/div&gt;
---

