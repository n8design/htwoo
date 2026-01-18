---
title: "Form Flow Step 1 - Raising Issue"
description: "This component demonstrates the first step of a multi-step form flow, where users initiate a process by providing initial information."
type: "components"
layout: "single"
patternId: "organism-form-sample-form-flow-1"
category: "organism"
subcategory: "form-sample"
seoTitle: "Organism - Form Sample Form Flow 1"
seoDescription: "Form Sample Form Flow 1 Organism"
weight: 10
hasVariants: false
markup: |
  &lt;section class=&quot;facility-form&quot;&gt;
      &lt;fieldset id=&quot;new-item-form&quot; class=&quot;hoo-fieldset no-outline&quot;&gt;
          &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
              &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-47&quot;&gt;Issue Type&lt;/label&gt;
              &lt;menu class=&quot;hoo-radiobutton-group&quot; role=&quot;radiogroup&quot; tabindex=&quot;0&quot;&gt;
                  &lt;li tabindex=&quot;-1&quot; role=&quot;radio&quot;&gt;
                      &lt;input type=&quot;radio&quot; name=&quot;radio-button-group&quot; id=&quot;rbg1&quot; value=&quot;Electrical&quot; class=&quot;hoo-radio&quot;&gt;
                      &lt;label for=&quot;rbg1&quot; &gt;Electrical&lt;/label&gt;
                  &lt;/li&gt;
                  &lt;li tabindex=&quot;-1&quot; role=&quot;radio&quot;&gt;
                      &lt;input type=&quot;radio&quot; name=&quot;radio-button-group&quot; id=&quot;rbg2&quot; value=&quot;Plubming&quot; class=&quot;hoo-radio&quot;&gt;
                      &lt;label for=&quot;rbg2&quot; &gt;Plumbing&lt;/label&gt;
                  &lt;/li&gt;
                  &lt;li tabindex=&quot;-1&quot; role=&quot;radio&quot;&gt;
                      &lt;input type=&quot;radio&quot; name=&quot;radio-button-group&quot; id=&quot;rbg3&quot; value=&quot;HAVC&quot; class=&quot;hoo-radio&quot;&gt;
                      &lt;label for=&quot;rbg3&quot; &gt;&lt;abbr&gt;HVAC&lt;/abbr&gt;- Heating, Ventilation, and Air Conditioning&lt;/label&gt;
              &lt;/li&gt;
              &lt;li tabindex=&quot;-1&quot; role=&quot;radio&quot;&gt;
                  &lt;input type=&quot;radio&quot; name=&quot;radio-button-group&quot; id=&quot;rbg4&quot; value=&quot;Safety Hazard&quot; class=&quot;hoo-radio&quot;&gt;
                  &lt;label for=&quot;rbg4&quot; &gt;Safety Hazard&lt;/label&gt;
              &lt;/li&gt;
          &lt;/menu&gt;
      &lt;/div&gt;
      &lt;div class=&quot;hoo-field stretched&quot; role=&quot;group&quot;&gt;
          &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-47&quot;&gt;Location&lt;/label&gt;
          &lt;div class=&quot;hoo-select&quot;&gt;
              &lt;div id=&#39;custom-select-status&#39; class=&#39;hidden-visually&#39; aria-live=&quot;polite&quot;&gt;
              &lt;/div&gt;
              &lt;input type=&quot;text&quot; id=&quot;hoo-select-input&quot; class=&quot;hoo-select-text&quot; aria-autocomplete=&quot;both&quot;
                          aria-controls=&quot;custom-select-list&quot;  autocomplete=&quot;off&quot;&gt;
              &lt;button class=&quot;hoo-buttonicon&quot; 
                          
                          
                          &gt;&lt;span class=&quot;hoo-icon&quot;&gt;
                  &lt;svg class=&quot;hoo-icon-svg icon-arrow-down&quot; aria-hidden=&quot;true&quot;&gt;
                      &lt;use xlink:href=&quot;/htwoo-core/images/icons.svg#icon-arrow-down&quot;&gt;
                      &lt;/use&gt;
                  &lt;/svg&gt;&lt;/span&gt;
          &lt;/button&gt;
          &lt;ul class=&quot;hoo-select-dropdown &quot;&gt;
              &lt;li class=&quot;hoo-optgroup&quot;&gt;
                  &lt;div class=&quot;hoo-optgroup-name&quot;&gt;Building A&lt;/div&gt;
                  &lt;ul class=&quot;hoo-optgroup-items&quot;&gt;
                      &lt;li data-value=&quot;A101 - Conference Room - Small&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;A101 - Conference Room - Small&lt;/li&gt;
                      &lt;li data-value=&quot;A102 - Meeting Room - Large&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;A102 - Meeting Room - Large&lt;/li&gt;
                      &lt;li data-value=&quot;A103 - Kitchen Area - Employee Lounge&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;A103 - Kitchen Area - Employee Lounge&lt;/li&gt;
                      &lt;li data-value=&quot;A104 - Breakout Space - Casual&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;A104 - Breakout Space - Casual&lt;/li&gt;
                      &lt;li data-value=&quot;A105 - Storage Room - Supplies&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;A105 - Storage Room - Supplies&lt;/li&gt;
                      &lt;li data-value=&quot;A106 - Restroom - Men’s&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;A106 - Restroom - Men’s&lt;/li&gt;
                      &lt;li data-value=&quot;A107 - Restroom - Women’s&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;A107 - Restroom - Women’s&lt;/li&gt;
                      &lt;li data-value=&quot;A108 - Server Room&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;A108 - Server Room&lt;/li&gt;
                  &lt;/ul&gt;
              &lt;/li&gt;
              &lt;li class=&quot;hoo-optgroup&quot;&gt;
                  &lt;div class=&quot;hoo-optgroup-name&quot;&gt;Building B&lt;/div&gt;
                  &lt;ul class=&quot;hoo-optgroup-items&quot;&gt;
                      &lt;li data-value=&quot;B201 - Manager’s Office - John Doe&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;B201 - Manager’s Office - John Doe&lt;/li&gt;
                      &lt;li data-value=&quot;B202 - Customer Service - Shared Desk&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;B202 - Customer Service - Shared Desk&lt;/li&gt;
                      &lt;li data-value=&quot;B203 - R&amp;amp;D Lab - Prototype Testing&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;B203 - R&amp;amp;D Lab - Prototype Testing&lt;/li&gt;
                      &lt;li data-value=&quot;B204 - Lounge - Break Area&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;B204 - Lounge - Break Area&lt;/li&gt;
                      &lt;li data-value=&quot;B205 - Conference Room - Middle&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;B205 - Conference Room - Middle&lt;/li&gt;
                      &lt;li data-value=&quot;B206 - Storage - Documents&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;B206 - Storage - Documents&lt;/li&gt;
                      &lt;li data-value=&quot;B207 - Restroom - Unisex&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;B207 - Restroom - Unisex&lt;/li&gt;
                      &lt;li data-value=&quot;B208 - Utility Room&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;B208 - Utility Room&lt;/li&gt;
                  &lt;/ul&gt;
              &lt;/li&gt;
              &lt;li class=&quot;hoo-optgroup&quot;&gt;
                  &lt;div class=&quot;hoo-optgroup-name&quot;&gt;Building C&lt;/div&gt;
                  &lt;ul class=&quot;hoo-optgroup-items&quot;&gt;
                      &lt;li data-value=&quot;C301 - Sales Office - Meeting Area&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;C301 - Sales Office - Meeting Area&lt;/li&gt;
                      &lt;li data-value=&quot;C302 - Marketing Department - Creative Team&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;C302 - Marketing Department - Creative Team&lt;/li&gt;
                      &lt;li data-value=&quot;C303 - IT Support - Desk Area&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;C303 - IT Support - Desk Area&lt;/li&gt;
                      &lt;li data-value=&quot;C304 - Operations Office - Supplies&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;C304 - Operations Office - Supplies&lt;/li&gt;
                      &lt;li data-value=&quot;C305 - HR Office - Employee Records&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;C305 - HR Office - Employee Records&lt;/li&gt;
                      &lt;li data-value=&quot;C306 - Kitchen Area - Coffee Station&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;C306 - Kitchen Area - Coffee Station&lt;/li&gt;
                      &lt;li data-value=&quot;C307 - Meeting Room - Virtual Teams&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;C307 - Meeting Room - Virtual Teams&lt;/li&gt;
                      &lt;li data-value=&quot;C308 - Restroom - Gender Neutral&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;C308 - Restroom - Gender Neutral&lt;/li&gt;
                  &lt;/ul&gt;
              &lt;/li&gt;
              &lt;li class=&quot;hoo-optgroup&quot;&gt;
                  &lt;div class=&quot;hoo-optgroup-name&quot;&gt;Building D&lt;/div&gt;
                  &lt;ul class=&quot;hoo-optgroup-items&quot;&gt;
                      &lt;li data-value=&quot;D401 - Executive Office - CEO&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;D401 - Executive Office - CEO&lt;/li&gt;
                      &lt;li data-value=&quot;D402 - Creative Space - Design Team&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;D402 - Creative Space - Design Team&lt;/li&gt;
                      &lt;li data-value=&quot;D403 - Meeting Room - Large&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;D403 - Meeting Room - Large&lt;/li&gt;
                      &lt;li data-value=&quot;D404 - Library - Research Area&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;D404 - Library - Research Area&lt;/li&gt;
                      &lt;li data-value=&quot;D405 - Employee Lounge - Relaxation Area&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;D405 - Employee Lounge - Relaxation Area&lt;/li&gt;
                      &lt;li data-value=&quot;D406 - Printer Room - Multi-Function&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;D406 - Printer Room - Multi-Function&lt;/li&gt;
                      &lt;li data-value=&quot;D407 - Restroom - Women’s&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;D407 - Restroom - Women’s&lt;/li&gt;
                      &lt;li data-value=&quot;D408 - Restroom - Men’s&quot; class=&quot;hoo-option &quot; aria-disabled=&quot;false&quot;&gt;D408 - Restroom - Men’s&lt;/li&gt;
                  &lt;/ul&gt;
              &lt;/li&gt;
          &lt;/ul&gt;
      &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
      &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-47&quot;&gt;Equipment/Asset ID&lt;/label&gt;
      &lt;input class=&quot;hoo-input-text&quot; id=&quot;toggle-47&quot;  type=&quot;text&quot;  
                      placeholder=&quot;ACME-1234-5678&quot;  size=&#39;16&#39;&gt;
      &lt;p class=&quot;hoo-input-description&quot; id=&quot;equipment-asset-id-input-47&quot;&gt;Unique identifier assigned to the equipment or asset. Watch out for a label with in the form ACME-1234-5678&lt;/p&gt;
  &lt;/div&gt;
  &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
      &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-47&quot;&gt;Priority Level&lt;/label&gt;
      &lt;menu class=&quot;hoo-radiobutton-group&quot; role=&quot;radiogroup&quot; tabindex=&quot;0&quot;&gt;
          &lt;li tabindex=&quot;-1&quot; role=&quot;radio&quot;&gt;
              &lt;input type=&quot;radio&quot; name=&quot;priority-level&quot; id=&quot;proiority-1&quot; value=&quot;Low&quot; class=&quot;hoo-radio&quot;&gt;
              &lt;label for=&quot;proiority-1&quot; &gt;Low&lt;/label&gt;
          &lt;/li&gt;
          &lt;li tabindex=&quot;-1&quot; role=&quot;radio&quot;&gt;
              &lt;input type=&quot;radio&quot; name=&quot;priority-level&quot; id=&quot;proiority-2&quot; value=&quot;Medium&quot; class=&quot;hoo-radio&quot;&gt;
              &lt;label for=&quot;proiority-2&quot; &gt;Medium&lt;/label&gt;
          &lt;/li&gt;
          &lt;li tabindex=&quot;-1&quot; role=&quot;radio&quot;&gt;
              &lt;input type=&quot;radio&quot; name=&quot;priority-level&quot; id=&quot;proiority&quot; value=&quot;High-3&quot; class=&quot;hoo-radio&quot;&gt;
              &lt;label for=&quot;proiority&quot; &gt;High&lt;/label&gt;
          &lt;/li&gt;
          &lt;li tabindex=&quot;-1&quot; role=&quot;radio&quot;&gt;
              &lt;input type=&quot;radio&quot; name=&quot;priority-level&quot; id=&quot;proiority-4&quot; value=&quot;Urgent&quot; class=&quot;hoo-radio&quot;&gt;
              &lt;label for=&quot;proiority-4&quot; &gt;Urgent&lt;/label&gt;
          &lt;/li&gt;
      &lt;/menu&gt;
  &lt;/div&gt;
  &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
      &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-47&quot;&gt;Issue Description&lt;/label&gt;
      &lt;p class=&quot;hoo-input-description&quot; id=&quot;issue-type-radio-47&quot;&gt;Please provide a detailed explanation of the issue that help the team understand the situation.&lt;br&gt;Minimum of 20 characters and a maximum of 500 characters.&lt;/p&gt;
      &lt;textarea class=&quot;hoo-input-text&quot; id=&quot;toggle-47&quot;   maxlength=&#39;500&#39; minlength=&#39;20&#39; style=&#39;max-width: 65ch; width: 100%; height: 5lh;&#39;&gt;
      &lt;/textarea&gt;
  &lt;/div&gt;
  &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
      &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-47&quot;&gt;Reported By&lt;/label&gt;
      &lt;input class=&quot;hoo-input-text&quot; id=&quot;toggle-47&quot;  type=&quot;text&quot;  
                      placeholder=&quot;&quot;  size=&#39;30&#39;&gt;
  &lt;/div&gt;
  &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
      &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-47&quot;&gt;Date/Time Reported&lt;/label&gt;
      &lt;input type=&quot;datetime-local&quot; class=&quot;hoo-input-date&quot; name=&quot;my-date-picker-name&quot; value=&quot;2021-10-26&quot; min=&quot;2018-01-01&quot; max=&quot;2030-12-31&quot;    &gt;
  &lt;/div&gt;
  &lt;div class=&quot;actions&quot;&gt;
      &lt;button class=&quot;hoo-button&quot;&gt;&lt;span class=&quot;hoo-button-label&quot;&gt;Cancel&lt;/span&gt;
  &lt;/button&gt;
  &lt;button class=&quot;hoo-button-primary&quot;&gt;&lt;span class=&quot;hoo-button-label&quot;&gt;Report issue&lt;/span&gt;
  &lt;/button&gt;
  &lt;/div&gt;
  &lt;/fieldset&gt;
  &lt;/section&gt;
  &lt;script&gt;// Get the current date and time
      const now = new Date();
  
      // Format the date and time based on the user&#39;s locale
      const formattedDateTime = now.toLocaleString();  // Automatically uses the system&#39;s locale
  
      // Insert the current date and time into the first&lt;time&gt;field
      document.getElementById(&#39;current-time&#39;).setAttribute(&#39;datetime&#39;, now.toISOString());
      document.getElementById(&#39;current-time&#39;).textContent = formattedDateTime;
  
      // Calculate the next time (one hour later)
      const nextTime = new Date(now.getTime() + 60 * 60 * 1000);  // Adds one hour (60 minutes * 60 seconds * 1000 ms)
  
      // Format the next time based on the user&#39;s locale
      const formattedNextTime = nextTime.toLocaleString();
  
      // Insert the next time into the second&lt;time&gt;field
      document.getElementById(&#39;next-time&#39;).setAttribute(&#39;datetime&#39;, nextTime.toISOString());
      document.getElementById(&#39;next-time&#39;).textContent = formattedNextTime;&lt;/script&gt;
---

# Form Flow: Step 1 - Raising Issue

This component demonstrates the first step of a multi-step form flow, where users initiate a process by providing initial information.

## Overview

The first step of a form flow typically introduces the process and collects essential information to begin. This pattern follows progressive disclosure principles to make complex forms more manageable by breaking them into logical steps.

## Features

- Clear introduction to the form process
- Collection of only essential information to start
- Date/time automation for relevant fields
- Navigation controls to proceed to the next step
- Visual indication of the current step in the process

## Usage

Use this pattern in forms that:

- Require multiple pieces of information
- Would be overwhelming as a single page
- Follow a logical sequence of data collection
- Need to validate information at distinct stages

## JavaScript Functionality

The step 1 form includes JavaScript for:
- Automatically populating date/time fields
- Formatting dates according to the user's locale
- Calculating and displaying time intervals