---
sidebar_position: 5
---

# Keyboard Shortcuts

Aerion is designed for efficient keyboard navigation. Use these shortcuts to manage your email without touching the mouse.

## Global Shortcuts

These work anywhere in the application (unless you're typing in a text field).

### Application

| Shortcut | Action |
|----------|--------|
| `Ctrl+Q` | Quit application |
| `Ctrl+N` | Compose new message |
| `Ctrl+S` | Focus search bar |
| `Ctrl+Shift+A` | Sync all accounts |
| `Ctrl+Shift+S` | Sync selected folder |

### Pane Navigation

| Shortcut | Action |
|----------|--------|
| `Alt+Left` / `Alt+H` | Focus previous pane (viewer → list → sidebar) |
| `Alt+Right` / `Alt+L` | Focus next pane (sidebar → list → viewer) |

### Folder Navigation

| Shortcut | Action |
|----------|--------|
| `Alt+Up` / `Alt+K` | Navigate to previous folder |
| `Alt+Down` / `Alt+J` | Navigate to next folder |
| `Alt+Enter` | Expand/collapse focused account folder tree |

### Message Actions

When a message is selected or viewed:

| Shortcut | Action |
|----------|--------|
| `Ctrl+R` | Reply to message |
| `Ctrl+Shift+R` | Reply All |
| `Ctrl+F` | Forward message |
| `Ctrl+U` | Mark as read |
| `Ctrl+Shift+U` | Mark as unread |
| `Ctrl+K` | Archive |
| `Ctrl+J` | Mark as spam |
| `Ctrl+L` | Load remote images |
| `Ctrl+Shift+L` | Open "Always Load Images" options |

## Pane-Specific Shortcuts

These shortcuts work within the currently focused pane.

### Sidebar (Folder List)

| Shortcut | Action |
|----------|--------|
| `Up` / `K` | Navigate to previous folder |
| `Down` / `J` | Navigate to next folder |
| `Enter` / `Space` | Expand/collapse account |

### Message List

| Shortcut | Action |
|----------|--------|
| `Up` / `K` | Select previous conversation |
| `Down` / `J` | Select next conversation |
| `Shift+Up` / `Shift+K` | Select previous + toggle checkbox |
| `Shift+Down` / `Shift+J` | Select next + toggle checkbox |
| `Space` | Toggle checkbox on current conversation |
| `Enter` | Open selected conversation in viewer |

### Conversation Viewer

| Shortcut | Action |
|----------|--------|
| `Up` / `K` | Scroll up |
| `Down` / `J` | Scroll down |
| `Tab` | Cycle through messages when focused on conversation viewer |
| `Delete` / `Backspace` | Delete focused message when focused on conversation viewer |

## Single-Key Shortcuts

These quick actions work when you're not in a text field. They apply to checked messages (bulk) or the keyboard-focused message.

| Shortcut | Action |
|----------|--------|
| `S` | Toggle star |
| `Backspace` / `Delete` | Move to trash |
| `Shift+Backspace` / `Shift+Delete` | Permanently delete |
| `Escape` | Clear checkboxes (first press), close conversation (second press) |

## Composer Shortcuts

When the composer is open:

| Shortcut | Action |
|----------|--------|
| `Ctrl+Enter` | Send message |
| `Alt+T` | Activate/Deactivate toolbar mode |
| `Alt+A` | Attach a file |
| `Ctrl+D` | Pop out/detach composer to separate window |
| `Escape` | Close composer (prompts to save draft if unsaved) |

### Text Formatting

| Shortcut | Action |
|----------|--------|
| `Ctrl+B` | Bold |
| `Ctrl+I` | Italic |
| `Ctrl+U` | Underline |

## Quick Reference Card

```
NAVIGATION
  Alt + Arrow Keys    Pane focus (Left/Right) or Folder nav (Up/Down)
  Alt + H/J/K/L       Vim-style: pane (H/L) or folder (J/K)
  Alt + Enter         Expand/collapse account
  Arrow Keys / HJKL   Navigate within focused pane
  Enter               Open conversation / Expand account
  Space               Toggle checkbox / Expand account

COMPOSE & REPLY
  Ctrl + N            New message
  Ctrl + R            Reply
  Ctrl + Shift + R    Reply All
  Ctrl + F            Forward
  Ctrl + Enter        Send (in composer)
  Ctrl + D            Detach composer

MESSAGE ACTIONS
  S                   Star/Unstar
  Ctrl + U            Mark read
  Ctrl + Shift + U    Mark unread
  Ctrl + K            Archive
  Ctrl + J            Spam
  Delete              Trash
  Shift + Delete      Permanent delete

OTHER
  Ctrl + Shift + A    Sync all accounts
  Ctrl + Shift + S    Sync selected folder
  Ctrl + S            Search
  Ctrl + L            Load images
  Ctrl + Q            Quit
  Escape              Clear/Close
```

## How Focus Works

Aerion has three main panes:

1. **Sidebar** - Account and folder list
2. **Message List** - Conversations in the current folder
3. **Conversation Viewer** - The selected conversation

A visual indicator shows which pane is focused. Use `Alt+Left/Right` or `Alt+H/L` to move focus between panes.

## Bulk Selection

To apply actions to multiple messages:

1. Navigate to a message with `J/K`
2. Press `Space` to check it
3. Navigate to more messages and check them
4. Apply an action (e.g., `Delete`, `Ctrl+K` for archive)

Or use `Shift+J/K` to select while navigating.

Press `Escape` to clear all selections.

## Action Priority

When you use an action shortcut:

1. If any messages are **checked**, the action applies to all checked messages
2. Otherwise, the action applies to the **keyboard-focused** message in the list

This lets you quickly act on single messages or perform bulk operations.
