---
sidebar_position: 6
---

# Settings

Configure Aerion to work the way you prefer.

Access settings by clicking the **gear icon** in the sidebar or navigating to the Settings view.

## General Tab

### Show Title Bar

Some users that are running tiling window managers or simply prefer a more minimalistic look and feel, the title bar can be disabled here by toggling it off.

### Theme

Choose your visual theme:

- **System** - Follows your operating system's light/dark preference
- **Light** - Always use default light theme (Purple accent)
- **Light (Blue)** - Always use light theme with blue accent
- **Light (Orange)** - Always use light theme with orange accent
- **Dark** - Always use default dark theme (Purple accent)
- **Dark (Gray)** - Always use Gray on gray dark theme

### Message Density

Control how compact the message list appears:

- **Micro** - Minimal spacing, maximum messages visible
- **Compact** - Reduced spacing
- **Standard** - Default balanced spacing
- **Large** - More spacing for easier reading

### Read Receipts

Configure how Aerion handles read receipt requests:

- **Never send** - Ignore all read receipt requests
- **Ask** - Prompt when a sender requests a read receipt
- **Always send** - Automatically send read receipts

### Auto-Mark as Read

Set how long a message must be viewed before marking it as read:

- **Immediately** - Mark read as soon as opened
- **After 1 second**
- **After 2 seconds**
- **After 5 seconds**
- **Never** - Only mark read manually

## Accounts Tab

Manage your email accounts.

### Add Account

Click **Add Account** to add a new email account. See [First Account Setup](/docs/getting-started/first-account) for details.

### Edit Account

Click **Edit** on any account to modify:

#### Basic Settings

- **Account Name** - Display name for this account
- **Account Color** - Color used in unified inbox
- **Email Address** - Your email address (read-only for OAuth accounts)

#### Server Settings

For non-OAuth accounts:

- IMAP server, port, and security
- SMTP server, port, and security
- Username and password

#### Sync Settings

- **Sync Period** - How far back to sync (30, 90, 180 days, or all)

#### Folder Mapping

Map special folders if not auto-detected:

- Sent folder
- Drafts folder
- Trash folder
- Archive folder
- Spam folder

#### Identities

Manage sending identities for this account:

- **Name** - Display name for outgoing mail
- **Email** - Sending address
- **Signature** - Rich text signature appended to messages

You can have multiple identities per account (e.g., for aliases).

### Remove Account

Click **Remove** to delete an account. This removes:

- The account configuration
- Locally cached emails from this account

Your emails on the server are not affected.

### Re-authorize OAuth

For Gmail and Outlook accounts, click **Re-authorize** if:

- Your token has expired
- You've changed your password
- You've revoked permissions and want to re-grant them

## Contacts Tab

Manage contact sources for autocomplete.

### Add Contact Source

Add a new source for contact sync:

- **CardDAV** - Connect to a CardDAV server
- **Google Contacts** - Sync from Google
- **Microsoft Contacts** - Sync from Microsoft

See [Contacts](/docs/features/contacts) for detailed setup.

### Edit Contact Source

Click on a contact source to:

- Change sync interval
- Update credentials
- View sync status

### Sync Now

Click **Sync Now** to immediately fetch contacts from a source.

### Remove Contact Source

Click **Remove** to stop syncing from a contact source. Previously synced contacts remain available until the next restart.

## About Tab

View information about Aerion:

- **Version** - Current Aerion version
- **GitHub** - Link to source code and issues
- **Privacy Policy** - How Aerion handles your data
- **Terms of Use** - Usage terms

## Applying Changes

Most settings take effect immediately. Some changes (like adding accounts or contact sources) may require a sync before you see results.

## Configuration Location

Aerion stores configuration in your system's standard application data location:

| Platform | Location |
|----------|----------|
| Linux | `~/.config/aerion/` or `$XDG_CONFIG_HOME/aerion/` |
| macOS | `~/Library/Application Support/aerion/` |
| Windows | `%APPDATA%\aerion\` |

:::warning
Modifying configuration files directly is not recommended. Use the Settings UI instead.
:::

## Notifications

Currently, clickable notifications is only available on Linux. By default, Aerion uses `org.freedesktop.portal.Desktop` but if you launch Aerion from the terminal, notifications will not work. In those cases, you will want to use the `--dbus-notify` flag to launch Aerion.
