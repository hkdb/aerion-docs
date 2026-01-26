---
sidebar_position: 2
---

# Email Management

Aerion provides essential tools to manage your email efficiently.

## Unified Inbox

The Unified Inbox shows all incoming mail from all your accounts in one view.

- Each account is assigned a color for easy identification
- Messages are sorted by date across all accounts
- Click on an individual account's inbox to view only that account

### Account Colors

Set account colors in **Settings > Accounts > Edit Account**. The color appears as a subtle indicator on each message in the unified inbox.

## Folder Navigation

The sidebar shows all folders for each account:

- **Unified Inbox** - All inboxes combined
- **Individual Account Inboxes** - Nested under Unified Inbox
- **Account Folders** - Each account's folder tree

### Navigating Folders

- Click a folder to view its contents
- Click an account header to expand/collapse its folders
- Use `Alt+Up/Down` or `Alt+J/K` to navigate folders with keyboard

## Conversation View

Related messages are grouped into conversations (threads):

- Open a conversation to see all messages in the thread
- Messages are displayed chronologically
- Reply context is preserved for easier reading

## Message Actions

### Single Message Actions

When viewing a message or with a message selected:

| Action | Method |
|--------|--------|
| Reply | Click Reply button or `Ctrl+R` |
| Reply All | Click Reply All button or `Ctrl+Shift+R` |
| Forward | Click Forward button or `Ctrl+F` |
| Star/Unstar | Click star icon or `S` |
| Mark Read | Right-click menu or `Ctrl+U` |
| Mark Unread | Right-click menu or `Ctrl+Shift+U` |
| Archive | Click Archive button or `Ctrl+K` |
| Move to Trash | Click Trash button or `Delete` |
| Mark as Spam | Click Spam button or `Ctrl+J` |
| Move to Folder | Right-click > Move to |

### Bulk Actions

Select multiple messages to apply actions in bulk:

1. Check the checkbox on each message, or
2. Use `Space` to toggle the checkbox on the focused message, or
3. Use `Shift+Up/Down` or `Shift+J/K` to select while navigating

Then apply any action - it will apply to all selected messages.

**Tip:** Press `Escape` once to clear all checkboxes.

## Search

Find emails quickly with the search bar:

1. Click the search bar or press `Ctrl+S`
2. Type your search query
3. Press `Enter` to switch focus to results

Search looks through:
- Subject lines
- Sender and recipient addresses
- Message body content

Search results are highlighted to show matching terms.

### Search Scope

- Search in the currently selected folder, or
- Search across all folders (depending on your email server's capabilities)

## Sync Options

### Automatic Sync

Aerion periodically checks for new mail. The sync interval can be adjusted in settings.

Aerion also holds IDLE connections for push e-mail. When new e-mail arrive, it triggers a sync of that account's core folders.

### Manual Sync

Select the folder you want to sync, click the sync icon, select **Sync Folder** or press `Ctrl + Shift + S`. Clicking the sync button again or pressing `Ctrl + Shift + S` again will stop the sync.

### Sync All Accounts

Use the sync button in the bottom left corner of the app or press `Ctrl + Shift + A` to sync all accounts at once. Clicking it or press `Ctrl + Shift + A` again while a sync is in progress will stop the sync.

### Force Re-sync

If messages appear to be missing or out of date:

1. Select the folder that seems to be out of sync
2. Click the Sync icon
3. Click **Force Re-sync**

This will re-download messages from the server.

## Message Density

Adjust how much space each message takes in the list:

1. Go to **Settings > General**
2. Choose from:
   - **Micro** - Minimal spacing, more messages visible
   - **Compact** - Reduced spacing
   - **Standard** - Default spacing
   - **Large** - More spacing, easier to read

## Remote Images

For privacy, Aerion blocks remote images in emails by default. These images can be used to track when you open an email.

To load images in a specific message:
- Click **Load Images** or press `Ctrl+L`

To always load images from a sender:
- Click the dropdown arrow next to Load Images or pres `Ctrl-Shift-L`
- Select:
    - **For this domain** - Trusting all e-mails from this domain from now on
    - **For this e-mail address**) - Trusting all e-mails from this e-mail address from now on

## Tracking Element Removal

Aerion automatically removes common tracking elements from emails:
- Tracking pixels (1x1 invisible images)
- Known tracking parameters in links

This helps protect your privacy without requiring any configuration.
