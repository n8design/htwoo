---
title: "Form Flow Step 3 - Solution"
description: "This component demonstrates the third step of a multi-step form flow, where users define solutions or resolutions to the issue identified in previous steps."
type: "components"
layout: "single"
patternId: "organism-form-sample-form-flow-3"
category: "organism"
subcategory: "form-sample"
seoTitle: "Organism - Form Sample Form Flow 3"
seoDescription: "Form Sample Form Flow 3 Organism"
weight: 30
markup: |
  &lt;section class=&quot;facility-form&quot;&gt;
      &lt;section&gt;
          &lt;details class=&quot;hoo-accordion&quot;  name=&quot;issue-tracking&quot;&gt;
              &lt;summary class=&quot;hoo-accordion-header&quot;&gt;
                  &lt;div class=&quot;hoo-accordion-summary&quot;&gt;
                      &lt;span class=&quot;hoo-icon&quot;&gt;
                          &lt;svg class=&quot;hoo-icon-svg icon-arrow-right&quot; aria-hidden=&quot;true&quot;&gt;
                              &lt;title&gt;Fluent UI / Fluent Design by hTWOo UI Framework&lt;/title&gt;
                              &lt;use xlink:href=&quot;../../images/icons.svg#icon-arrow-right&quot;&gt;&lt;/use&gt;
                          &lt;/svg&gt;
                      &lt;/span&gt;                    &lt;h3&gt;Reported issue&lt;/h3&gt;
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
          &lt;details class=&quot;hoo-accordion&quot; open name=&quot;issue-tracking&quot;&gt;
              &lt;summary class=&quot;hoo-accordion-header&quot;&gt;
                  &lt;div class=&quot;hoo-accordion-summary&quot;&gt;
                      &lt;span class=&quot;hoo-icon&quot;&gt;
                          &lt;svg class=&quot;hoo-icon-svg icon-arrow-right&quot; aria-hidden=&quot;true&quot;&gt;
                              &lt;title&gt;Fluent UI / Fluent Design by hTWOo UI Framework&lt;/title&gt;
                              &lt;use xlink:href=&quot;../../images/icons.svg#icon-arrow-right&quot;&gt;&lt;/use&gt;
                          &lt;/svg&gt;
                      &lt;/span&gt;                    &lt;h3&gt;Review Result&lt;/h3&gt;
                  &lt;/div&gt;
              &lt;/summary&gt;
              &lt;div&gt;
                  &lt;fieldset id=&quot;issue-verification&quot; class=&quot;hoo-fieldset no-outline&quot;&gt;
                      &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
                          &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-47&quot;&gt;Assign To&lt;/label&gt;
                          Jim Halpert
                      &lt;/div&gt;
                      &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
                          &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-47&quot;&gt;Verification Date&lt;/label&gt;
                          &lt;time id=&quot;next-time&quot; datetime=&quot;&quot;&gt;&lt;/time&gt;
                      &lt;/div&gt;
                      &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
                          &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-47&quot;&gt;Comments&lt;/label&gt;
                          Upon investigation, the issue is likely related to a failure in the heating element or a malfunction in the
                          machine’s brewing cycle, both common problems for this type of coffee machine. To resolve the issue, a
                          technician will need to inspect the internal components, particularly the heating element, water pump, and
                          circuit board responsible for activating the brewing process.
                          &lt;br&gt;&lt;br&gt;
                          In cases where this fault has occurred
                          previously, a reset procedure or replacement of the faulty components has successfully restored normal
                          operation. If the issue is more severe, a full machine replacement may be necessary. Regular maintenance and
                          occasional cleaning of the internal mechanisms are recommended to prevent similar occurrences in the future.
                      &lt;/div&gt;
                      &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
                          &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-47&quot;&gt;Estimated Time to Resolve&lt;/label&gt;
                          5 hours
                      &lt;/div&gt;
                  &lt;/fieldset&gt;
  
              &lt;/div&gt;
          &lt;/details&gt;
      &lt;/section&gt;
      &lt;section class=&quot;review&quot;&gt;
          &lt;h2&gt;Issue Resolution&lt;/h2&gt;
          &lt;fieldset id=&quot;resolution&quot; class=&quot;hoo-fieldset no-outline&quot;&gt;
              &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
                  &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-47&quot;&gt;Resolution Description&lt;/label&gt;
                  &lt;p class=&quot;hoo-input-description&quot; &gt;
                      Please provide a detailed explanation of the resolution to the issue. Include any relevant actions taken to address the problem. Remember to include any necessary documentation or updates to the asset&#39;s inventory. Also, be sure to include any follow-up steps or recommendations for future maintenance.
                  &lt;/p&gt;
                  &lt;textarea class=&quot;hoo-input-text&quot; id=&quot;toggle-47&quot;   maxlength=&#39;500&#39; minlength=&#39;500&#39; style=&#39;max-width: 65ch; width: 100%; height: 5lh;&#39;&gt;&lt;/textarea&gt;    &lt;/div&gt;
              &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
                  &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-47&quot;&gt;Parts/Materials used:&lt;/label&gt;
                  &lt;p class=&quot;hoo-input-description&quot; &gt;
                      Please list any parts or materials used to resolve the issue. Include the quantity, part number, and any other relevant information. If no parts or materials were used, please indicate &#39;None&#39;.
                  &lt;/p&gt;
                  &lt;textarea class=&quot;hoo-input-text&quot; id=&quot;toggle-47&quot;   maxlength=&#39;500&#39; minlength=&#39;500&#39; style=&#39;max-width: 65ch; width: 100%; height: 5lh;&#39;&gt;&lt;/textarea&gt;    &lt;/div&gt;
              &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
                  &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-47&quot;&gt;Actual time to resolve&lt;/label&gt;
                  &lt;div class=&quot;hoo-input-group&quot;&gt;
                      &lt;input class=&quot;hoo-input-text&quot; type=&quot;number&quot;  id=&quot;toggle-47&quot; 
                          placeholder=&quot;&quot; data-suffix=&quot;hours&quot;  aria-labelledby=&quot;suffix-label-toggle-47&quot; size=&#39;10&#39;&gt;
                      &lt;div id=&quot;suffix-label-toggle-47&quot; class=&quot;hoo-input-suffix&quot;&gt;hours&lt;/div&gt;
                  &lt;/div&gt;
                  &lt;p class=&quot;hoo-input-description&quot; id=&quot;actual-time-to-resolve-input-47&quot;&gt;
                      The actual time spent on this issue
                  &lt;/p&gt;
              &lt;/div&gt;
              &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
                  &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-47&quot;&gt;Follow up Required?&lt;/label&gt;
                  &lt;div class=&quot;hoo-toggle&quot;&gt;
                      &lt;input type=&quot;checkbox&quot; class=&quot;hoo-toggle-cb&quot; name=&quot;toggleName&quot; id=&quot;toggle-95&quot; &gt;&lt;label for=&quot;toggle-95&quot; class=&quot;hoo-toggle-label&quot;&gt;&lt;span class=&quot;hoo-toggle-slider&quot;&gt;&lt;/span&gt;&lt;span class=&quot;hoo-toggle-checked&quot;&gt;Yes&lt;/span&gt;&lt;span class=&quot;hoo-toggle-unchecked&quot;&gt;No&lt;/span&gt;&lt;/label&gt;
                  &lt;/div&gt;
              &lt;/div&gt;
              &lt;div class=&quot;actions&quot;&gt;
                  &lt;button class=&quot;hoo-button&quot;&gt;
                      &lt;span class=&quot;hoo-button-label&quot;&gt;Unable to resolve&lt;/span&gt;
                  &lt;/button&gt;
                  &lt;button class=&quot;hoo-button-primary&quot;&gt;
                      &lt;span class=&quot;hoo-button-label&quot;&gt;Completed&lt;/span&gt;
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

# Form Flow: Step 3 - Solution

This component demonstrates the third step of a multi-step form flow, where users define solutions or resolutions to the issue identified in previous steps.

## Overview

The third step builds on the information collected in the previous steps, focusing on action planning and resolution. It guides users toward completing the process by defining specific outcomes or solutions.

## Features

- Solution definition and planning fields
- Integration with previously entered information
- Back/forward navigation controls
- Progress indication showing near-completion
- Structured input for resolution details
- Option to assign responsibilities or next actions

## Usage

This pattern is beneficial when:
- Process requires defining specific outcomes or solutions
- Different stakeholders need to be assigned actions
- Documentation of resolution plans is required
- Form follows a problem-analysis-solution structure

## Navigation

The step 3 form includes navigation controls:
- Back button to return to step 2 and edit previous entries
- Next button to proceed to the final confirmation step