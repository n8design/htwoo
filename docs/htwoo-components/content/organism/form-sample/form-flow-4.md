---
title: "Form Flow Step 4 - Final Solution"
description: "This component demonstrates the final step of a multi-step form flow, where users confirm all information and complete the submission process."
type: "components"
layout: "single"
patternId: "organism-form-sample-form-flow-4"
category: "organism"
subcategory: "form-sample"
seoTitle: "Organism - Form Sample Form Flow 4"
seoDescription: "Form Sample Form Flow 4 Organism"
weight: 40
markup: |
  &lt;section class=&quot;facility-form&quot;&gt;
      &lt;section class=&quot;hoo-accordion-group&quot; role=&quot;accordion&quot;&gt;
          &lt;details class=&quot;hoo-accordion&quot; open name=&quot;issue-tracking&quot;&gt;
              &lt;summary class=&quot;hoo-accordion-header&quot;&gt;
                  &lt;div class=&quot;hoo-accordion-summary&quot;&gt;
                      &lt;span class=&quot;hoo-icon&quot;&gt;
                          &lt;svg class=&quot;hoo-icon-svg icon-arrow-right&quot; aria-hidden=&quot;true&quot;&gt;
                              &lt;title&gt;Fluent UI / Fluent Design by hTWOo UI Framework&lt;/title&gt;
                              &lt;use xlink:href=&quot;../../images/icons.svg#icon-arrow-right&quot;&gt;&lt;/use&gt;
                          &lt;/svg&gt;
                      &lt;/span&gt;        &lt;h3&gt;Reported issue&lt;/h3&gt;
                  &lt;/div&gt;
              &lt;/summary&gt;            &lt;div&gt;
                  &lt;fieldset id=&quot;new-item-form&quot; class=&quot;hoo-fieldset no-outline&quot;&gt;
                      &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
                          &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-95&quot;&gt;Issue Type&lt;/label&gt;
                          Electrical
                      &lt;/div&gt;
                      &lt;div class=&quot;hoo-field stretched&quot; role=&quot;group&quot;&gt;
                          &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-95&quot;&gt;Location&lt;/label&gt;
                          A104 - Breakout Space - Casual
                      &lt;/div&gt;
                      &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
                          &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-95&quot;&gt;Equipment/Asset ID&lt;/label&gt;
                          ACME-2049-0819
                      &lt;/div&gt;
                      &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
                          &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-95&quot;&gt;Priority Level&lt;/label&gt;
                          Low
                      &lt;/div&gt;
                      &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
                          &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-95&quot;&gt;Issue Description&lt;/label&gt;
                          Late last night, the coffee machine decided to take a vacation. It now only dispenses lukewarm water and
                          stares blankly at anyone who dares approach.
                          &lt;br&gt;
                          &lt;br&gt;
                          The ‘Brew’ button is still intact, but no amount of button-mashing seems to convince it to do its job.
                          Please send help before we resort to using the office kettle and turning into tea drinkers.
                      &lt;/div&gt;
                      &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
                          &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-95&quot;&gt;Reported By&lt;/label&gt;
                          Dwight Schrute
                      &lt;/div&gt;
                      &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
                          &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-95&quot;&gt;Date/Time Reported&lt;/label&gt;
                          &lt;time id=&quot;current-time&quot; datetime=&quot;&quot;&gt;&lt;/time&gt;
                      &lt;/div&gt;
                  &lt;/fieldset&gt;
              &lt;/div&gt;
          &lt;/details&gt;
          &lt;details class=&quot;hoo-accordion&quot; name=&quot;issue-tracking&quot;&gt;
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
                          &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-95&quot;&gt;Assign To&lt;/label&gt;
                          Jim Halpert
                      &lt;/div&gt;
                      &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
                          &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-95&quot;&gt;Verification Date&lt;/label&gt;
                          &lt;time id=&quot;next-time&quot; datetime=&quot;&quot;&gt;&lt;/time&gt;
                      &lt;/div&gt;
                      &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
                          &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-95&quot;&gt;Comments&lt;/label&gt;
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
                          &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-95&quot;&gt;Estimated Time to Resolve&lt;/label&gt;
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
                  &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-95&quot;&gt;Resolution Description&lt;/label&gt;
                  When the coffee machine refused to cooperate, the team implemented an interim solution by transitioning to
                  tea-making using the office kettle. This alternative required no technical intervention, leveraging existing
                  resources and allowing employees to maintain their caffeine intake with tea bags and hot water. While
                  unconventional for coffee enthusiasts, this workaround provided a temporary fix, sustaining morale until the
                  coffee machine could be repaired or replaced.
                  &lt;br&gt;&lt;br&gt;
                  Feedback from the team suggests a newfound appreciation for Earl Grey, though calls for espresso have
                  increased in urgency.
              &lt;/div&gt;
              &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
                  &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-95&quot;&gt;Parts/Materials used:&lt;/label&gt;
                  Office Kettle - Existing equipment repurposed for boiling water.&lt;br&gt;
                  Tea Bags - A variety of flavors (e.g., Earl Grey, Green Tea, Peppermint) sourced from the breakroom or nearby
                  supply
                  closet.&lt;br&gt;
                  Mugs or Cups - Reused from the office coffee station for serving tea.&lt;br&gt;
                  Hot Water - Generated using the kettle as a substitute for the coffee machine’s water dispenser.&lt;br&gt;
                  Spoons/Stirrers - For mixing sugar, honey, or other additives into the tea.&lt;br&gt;
                  Optional Additives - Milk, sugar, honey, or lemon, depending on individual preferences.&lt;br&gt;
              &lt;/div&gt;
              &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
                  &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-95&quot;&gt;Actual time to resolve&lt;/label&gt;
                  1 hour
              &lt;/div&gt;
              &lt;div class=&quot;hoo-field&quot; role=&quot;group&quot;&gt;
                  &lt;label class=&quot;hoo-label &quot; for=&quot;toggle-95&quot;&gt;Follow up Required?&lt;/label&gt;
                  Yes
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

# Form Flow: Step 4 - Final Solution

This component demonstrates the final step of a multi-step form flow, where users confirm all information and complete the submission process.

## Overview

The fourth and final step serves as a confirmation and summary page, allowing users to review all previously entered information before submission. It provides a comprehensive view of the entire form and gives users confidence in their submission.

## Features

- Complete summary of all entered information
- Final review before submission
- Back navigation to edit any section
- Clear submission button
- Confirmation messaging upon successful submission
- Option to print or save a record of the submission

## Usage

This pattern is beneficial when:
- Users need to verify all information before final submission
- Legal or compliance requirements necessitate explicit confirmation
- Process creates official records or initiates important workflows
- Users may need a record of their submission

## Navigation

The step 4 form includes navigation controls:
- Back button to return to previous steps if edits are needed
- Submit button to finalize the entire form process

## Form Completion

Upon successful submission, users typically receive:
- Confirmation message
- Reference number or identifier
- Next steps or expectations
- Contact information for follow-up