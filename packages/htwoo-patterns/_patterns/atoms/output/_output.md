---
title: Output Components
order: 10
---

# Output Components

Output components are used to display feedback, progress, or status information to users.

## Output Types

* **Progress Bar** - Standard linear progress indicator
* **Progress Bar with Steps** - Linear progress indicator with labeled steps

## SCSS Imports

**Main Component**

**SCSS Partial Location**

## Usage

Output components should be used when:
* Displaying progress of an ongoing process
* Showing completion percentage of a task
* Indicating progress through a multi-step process
* Providing visual feedback on task completion status

## Best Practices

* Use progress indicators for operations that take more than a second to complete
* Provide appropriate labels or context for progress indicators
* For step-based processes, clearly identify the current step
* Consider accessibility needs when implementing output components
* Use determinate progress bars when the completion percentage is known
* Use indeterminate progress bars or spinners when the completion time is unknown

## Accessibility

When implementing output components, follow these accessibility guidelines:

* Use semantic elements like the HTML5 `<progress>` element
* Include text alternatives for users with screen readers
* Ensure sufficient color contrast for all visual indicators
* Use appropriate ARIA attributes where needed (`aria-valuenow`, `aria-valuemin`, `aria-valuemax`)
* For multi-step processes, clearly communicate the current step and total steps
* Announce important status changes using ARIA live regions
