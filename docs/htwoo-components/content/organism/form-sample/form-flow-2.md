---
title: "Form Flow Step 2 - Reviewing Issue"
description: "This component demonstrates the second step of a multi-step form flow, where users review and expand upon the information entered in the first step."
type: "components"
layout: "single"
patternId: "organism-form-sample-form-flow-2"
category: "organism"
subcategory: "form-sample"
seoTitle: "Organism - Form Sample Form Flow 2"
seoDescription: "Form Sample Form Flow 2 Organism"
weight: 20
markup: |
  &lt;section class=&quot;facility-form&quot;&gt;
      &lt;details class=&quot;hoo-accordion&quot; open&gt;
          &lt;summary class=&quot;hoo-accordion-header&quot;&gt;
              &lt;div class=&quot;hoo-accordion-summary&quot;&gt;
                  &lt;span class=&quot;hoo-icon&quot;&gt;
                      &lt;svg class=&quot;hoo-icon-svg icon-arrow-right&quot; aria-hidden=&quot;true&quot;&gt;
                          &lt;title&gt;Fluent UI / Fluent Design by hTWOo UI Framework&lt;/title&gt;
                          &lt;use xlink:href=&quot;../../images/icons.svg#icon-arrow-right&quot;&gt;&lt;/use&gt;
                      &lt;/svg&gt;
                  &lt;/span&gt;                &lt;h3&gt;Reported issue&lt;/h3&gt;
              &lt;/div&gt;
          &lt;/summary&gt;
          &lt;div&gt;
              &lt;fieldset id=&quot;new-item-form&quot; class=&quot;hoo-fieldset no-outline&quot;&gt;
                  &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
                      &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-47&quot;&gt;Issue Type&lt;/label&gt;
                      Electrical
                  &lt;/div&gt;
                  &lt;div class=&quot;hoo-field stretched&quot; role=&quot;group&quot;&gt;
                      &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-47&quot;&gt;Location&lt;/label&gt;
                      A104 - Breakout Space - Casual
                  &lt;/div&gt;
                  &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
                      &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-47&quot;&gt;Equipment/Asset ID&lt;/label&gt;
                      ACME-2049-0819
                  &lt;/div&gt;
                  &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
                      &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-47&quot;&gt;Priority Level&lt;/label&gt;
                      Low
                  &lt;/div&gt;
                  &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
                      &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-47&quot;&gt;Issue Description&lt;/label&gt;
                      Late last night, the coffee machine decided to take a vacation. It now only dispenses lukewarm water and
                      stares blankly at anyone who dares approach.
                      &lt;br&gt;
                      &lt;br&gt;
                      The ‘Brew’ button is still intact, but no amount of button-mashing seems to convince it to do its job.
                      Please send help before we resort to using the office kettle and turning into tea drinkers.
                  &lt;/div&gt;
                  &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
                      &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-47&quot;&gt;Reported By&lt;/label&gt;
                      Dwight Schrute
                  &lt;/div&gt;
                  &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
                      &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-47&quot;&gt;Date/Time Reported&lt;/label&gt;
                      &lt;time id=&quot;current-time&quot; datetime=&quot;&quot;&gt;&lt;/time&gt;
                  &lt;/div&gt;
              &lt;/fieldset&gt;
  
          &lt;/div&gt;
      &lt;/details&gt;
      &lt;section class=&quot;review&quot;&gt;
          &lt;h2&gt;Review and verify&lt;/h2&gt;
              &lt;fieldset id=&quot;issue-verification&quot; class=&quot;hoo-fieldset no-outline&quot;&gt;
                  &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
                      &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-47&quot;&gt;Assign To&lt;/label&gt;
                      &lt;input class=&quot;hoo-input-text&quot; id=&quot;toggle-47&quot;  type=&quot;text&quot;  
                          placeholder=&quot;&quot;  size=&#39;30&#39;&gt;
                      &lt;p class=&quot;hoo-input-description&quot; id=&quot;assigned-to-input-47&quot;&gt;
                          Enter the name of the person responsible for resolving the issue.
                      &lt;/p&gt;
                  &lt;/div&gt;
                  &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
                      &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-47&quot;&gt;Verification Date&lt;/label&gt;
                      &lt;input type=&quot;datetime-local&quot; class=&quot;hoo-input-date&quot; name=&quot;verification-date-input-name&quot; value=&quot;2024-11-21T15:56&quot; min=&quot;2018-01-01&quot; max=&quot;2030-12-31&quot;    &gt;
                  &lt;/div&gt;
                  &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
                      &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-47&quot;&gt;Comments&lt;/label&gt;
                      &lt;p class=&quot;hoo-input-description&quot; &gt;
                          Additional information or notes about the issue. Include any relevant details or observations that may help in resolving the issue. If there are any special instructions or considerations, please include them here.
                      &lt;/p&gt;
                      &lt;textarea class=&quot;hoo-input-text&quot; id=&quot;toggle-47&quot;   maxlength=&#39;500&#39; minlength=&#39;500&#39; style=&#39;max-width: 65ch; width: 100%; height: 5lh;&#39;&gt;&lt;/textarea&gt;        &lt;/div&gt;
                  &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
                      &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-47&quot;&gt;Estimated Time to Resolve&lt;/label&gt;
                      &lt;div class=&quot;hoo-input-group&quot;&gt;
                          &lt;input class=&quot;hoo-input-text&quot; type=&quot;number&quot;  id=&quot;toggle-47&quot; 
                              placeholder=&quot;&quot; data-suffix=&quot;hours&quot;  aria-labelledby=&quot;suffix-label-toggle-47&quot; size=&#39;10&#39; min=&#39;0&#39; max=&#39;100&#39;&gt;
                          &lt;div id=&quot;suffix-label-toggle-47&quot; class=&quot;hoo-input-suffix&quot;&gt;hours&lt;/div&gt;
                      &lt;/div&gt;
                      &lt;p class=&quot;hoo-input-description&quot; id=&quot;estimate-time-to-resolve-input-47&quot;&gt;
                          Estimated time in hours it would take for the issue to be resolved. This should be based on the current state of the asset and the estimated effort required to fix the issue.
                      &lt;/p&gt;
                  &lt;/div&gt;
                  &lt;div class=&quot;actions&quot;&gt;
                      &lt;button class=&quot;hoo-button&quot;&gt;
                          &lt;span class=&quot;hoo-button-label&quot;&gt;Invalid report&lt;/span&gt;
                      &lt;/button&gt;
                      &lt;button class=&quot;hoo-button-primary&quot;&gt;
                          &lt;span class=&quot;hoo-button-label&quot;&gt;Report verified&lt;/span&gt;
                      &lt;/button&gt;
                  &lt;/div&gt;
              &lt;/fieldset&gt;
      &lt;/section&gt;
  &lt;/section&gt;
  &lt;script&gt;
      // Get the current date and time
      const now = new Date();
  
      // Format the date and time based on the user&#39;s locale
      const formattedDateTime = now.toLocaleString();  // Automatically uses the system&#39;s locale
  
      // Insert the current date and time into the first &lt;time&gt; field
      document.getElementById(&#39;current-time&#39;).setAttribute(&#39;datetime&#39;, now.toISOString());
      document.getElementById(&#39;current-time&#39;).textContent = formattedDateTime;
  
      // Calculate the next time (one hour later)
      const nextTime = new Date(now.getTime() + 60 * 60 * 1000);  // Adds one hour (60 minutes * 60 seconds * 1000 ms)
  
      // Format the next time based on the user&#39;s locale
      const formattedNextTime = nextTime.toLocaleString();
  
      // Insert the next time into the second &lt;time&gt; field
      document.getElementById(&#39;next-time&#39;).setAttribute(&#39;datetime&#39;, nextTime.toISOString());
      document.getElementById(&#39;next-time&#39;).textContent = formattedNextTime;
  &lt;/script&gt;
---

# Form Flow: Step 2 - Reviewing Issue

This component demonstrates the second step of a multi-step form flow, where users review and expand upon the information entered in the first step.

## Overview

The second step builds on the information collected in the first step, allowing users to review the issue details and provide additional context or information. It maintains continuity from the previous step while guiding the user through the form process.

## Features

- Review of information entered in the previous step
- Fields for additional context and details
- Back/forward navigation controls
- Preservation of data from previous steps
- Visual indication of current progress
- Contextual help for complex fields

## Usage

This pattern is beneficial when:
- Information needs to be confirmed before proceeding
- Additional details are required based on initial selections
- Form completion happens in a structured workflow
- User may need to revisit previous entries

## Navigation

The step 2 form includes navigation controls:
- Back button to return to step 1 and edit previous entries
- Next button to proceed to step 3 after completing this section