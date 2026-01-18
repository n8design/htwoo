---
title: Avatar with Presence
order: 99
---

# Avatar with Presence

The Avatar with Presence component combines a user avatar (profile image) with a status indicator that shows the user's availability or presence status. This component is commonly used in communication and collaboration interfaces to display both the user's identity and their current online status.

## Components

The Avatar with Presence combines two core components:

* **Avatar** - Displays the user's profile image in a circular container
* **Presence** - Shows the user's status with a colored indicator

## Available Presence States

The component supports multiple presence states, each indicated by a different color:

- **Online** (`is-online`) - Green status indicator (hex: #6bb700)
- **Away** (`is-away`) - Orange status indicator (hex: #fa4)
- **Do Not Disturb** (`is-dnd`) - Red status indicator (hex: #c50f1f)
- **Out of Office** (`is-oof`) - Purple status indicator (hex: #b4009e)
- **Invisible/Offline** (`is-invisible`) - Gray status indicator (hex: #8a8886)

## Sizes

The Avatar with Presence component is available in various sizes to accommodate different UI requirements:

- 16px (extra small)
- 24px (small)
- 32px (medium-small)
- 40px (medium)
- 48px (medium-large)
- 64px (large)
- 72px (extra large)
- 96px (jumbo)
- 128px (default/maximum)

## Features

- Status indicator is positioned at the bottom-right corner of the avatar
- Avatar image is displayed in a circular container
- Component uses transform rotations to achieve the diagonal status positioning
- Status indicators have consistent sizing across avatar sizes
- Border around status indicator helps separate it from avatar and background

## Accessibility

- Status indicators include title attributes for screen reader access
- Color is not used as the only means of conveying status (title attributes provide textual information)
- Avatar images should include appropriate alt text when used in implementation

## SCSS Imports

**Main Components**\
@n8d/htwoo-core/components/avatar
