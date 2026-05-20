---
sidebar_position: 6
---

# Settings

Configure Aerion to work the way you prefer.

Access settings by clicking the **gear icon** in the sidebar or navigating to the Settings view.

## General Tab
---

### Title Bar

- **Aerion** (Default) - Built-in title bar matching Aerion's themes
- **Native** (Requires Restart) - Use the OS native title bar and window decorations
- **Disable** - Some users that are running tiling window managers or simply prefer a more minimalistic look and feel, the title bar can be completely disabled.

### Language

Choose the language you want the UI to use. Currently, Aerion supports:

- **English**
- **Čeština**      |  Thanks to [lorduskordus](https://github.com/lorduskordus)
- **Français**     |  Thanks to [freemans32](https://github.com/freemans32)
- **Norsk Bokmål** | Thanks to [dexblasnoot](https://github.com/dexblasnoot)
- **中文（香港)**
- **中文 (台湾)**
- **中文 (中国)**

Other languages will be added in future releases.

### Theme

Choose your visual theme:

- **System** - Follows your operating system's light/dark preference
- **Light** - Always use default light theme (Purple accent)
- **Light (Blue)** - Always use light theme with blue accent
- **Light (Orange)** - Always use light theme with orange accent
- **Light (Balanced)** - A less bright light mode with gray accent
- **Adwaita (Light)** - Adwaita light theme colors
- **Breeze (Light)** - Breeze light theme colors
- **Catppuccin (Latte)** - Catppuccin Latte theme colors
- **Github (Light)** - Github light theme colors
- **Nord (Light)** - Nord light theme colors
- **Pop! (Light)** - Pop!/Cosmic light theme colors
- **VS Code (Light)** - VS Code light theme colors
- **Yaru (Light)** - Yaru light theme colors
- **Dark** - Always use default dark theme (Purple accent)
- **Dark (Gray)** - Always use Gray on gray dark theme
- **Dark (Balanced)** - A slightly lighter dark mode with gray accent
- **Adwaita (Dark)** - Adwaita dark theme colors
- **Breeze (Dark)** - Breeze dark theme colors
- **Catppuccin (Frappe)** - Catppuccin Frappe theme colors
- **Catppuccin (Macchiato)** - Catppuccin Macchiato theme colors
- **Catppuccin (Mocha)** - Catppuccin Mocha theme colors
- **Github (Dark)** - Github dark theme colors
- **Nord (Dark)** - Nord dark theme colors
- **Pop! (Dark)** - Pop!/Cosmic dark theme colors
- **VS Code (Dark)** - VS Code dark theme colors
- **Yaru (Dark)** - Yaru dark theme colors

### Dark mail content

Apply a dark filter to email message content when Aerion is in dark mode.

There are two schools of preferences for dark mode. One is to have dark UI but light e-mail content and the other is to have everything in dark mode. This setting provides a way for the user to choose which school they belong to.

When this toggle is turned on, each message will render in dark mode and have a ☀️ icon on the right side of the header which you can click on to temporarily render the email in light mode in case the dark mode filter breaks the e-mail rendering.

### Show colored circles in message list

Show colored circles with sender initials in the message list.

Enabled by default.

This is where you can disable the colored contact circles on the message list of Aerion to get a more minimalistic look especially if you don't feel like you get value from the color contact circles.

### Show colored circles in conversation viewer

Show colored circles with sender initials in the conversation viewer.

Enabled by default.

This is where you can disable the colored contact circles in the conversation viewer if you think the contact circles are unneccesary noise.

### Accent bar for unread messages

This puts a left side bar marker based on your themes secondary color to each unread message for better visual grepping of what's read and unread if enabled. This feature is disabled by default. The only difference between read and unread is bold versus normal text by default (when disabled).

### Message Density

Control how compact the message list appears:

- **Micro** - Minimal spacing, maximum messages visible
- **Compact** - Reduced spacing
- **Standard** - Default balanced spacing
- **Large** - More spacing for easier reading

### Auto-Mark as Read

Set how long a message must be viewed before marking it as read:

- **Immediately** - Mark read as soon as opened
- **After 1 second**
- **After 2 seconds**
- **After 5 seconds**
- **Never** - Only mark read manually

### Background

**Run in background** - Enable this if you want Aerion to not exit but run in the background when you close the Aerion window. This setting is also a pre-requisite for the next toggle to be enabled.
**Starts hidden on launch** - Enable this if you want Aerion to launch in the background on first launch without showing the window.

### Startup

**Autostart on login** - Enable this if you want Aerion to automatically launch when you login to your system.

### Tray Icon

Tray icon has not been implemented yet but is in the roadmap down the road.

## Composer Tab
---

### Default Compose Mode

Choose whether composing opens in the main window or a separate window when you press the **Compose** button or **Ctrl+N**.

Options:

- **In window** (Default)
- **Detached window**

### External mailto Links

Choose how `mailto` links from other apps are handled.

Options:

- **In window** (Default)
- **Detached window**

### Default Message Format

New messages will use this format by default in the composer. You can still switch per message.

Options:

- **Rich text** (Default)
- **Plain text**

### Read Receipts

Configure how Aerion handles read receipt requests:

- **Never send** - Ignore all read receipt requests
- **Ask** - Prompt when a sender requests a read receipt
- **Always send** - Automatically send read receipts

## Images Tab
---

### Always Load Remote Images

If toggled on, image blocking for all emails will be disabled. Remote images will load automatically instead of requiring the users to manually load images or setting always load rules based on domain or address.

### Addresses

This is a list of e-mail addresses that have been marked as **Always Load** images from. You can remove any address that you no longer want to auto-load images on emails for.

### Domains

This is a list of domains that have been marked as **Always Load** images from. You can remove any domain that you no longer want to auto-load images on emails for.


## Accounts Tab
---

Manage your email accounts.

### Add Account

Click **Add Account** to add a new email account. See [First Account Setup](/docs/getting-started/first-account) for details.

### Edit Account

Click **Edit** on any account to modify:

#### General Tab

- **Account Color** - Color used in unified inbox
- **Account Name** - Display name for this account
- **Default Display Name** - The name people see the e-mail is from when you send e-mails
- **Email Address** - Your email address (read-only for OAuth accounts)
- **Username** - Username of your account
- **Password** - Password of your account
- **Sync Period** - How far back to sync (30, 90, 180 days, or all)

#### Identity Tab

Manage sending identities for this account:

- **Name** - Display name for outgoing mail
- **Email** - Sending address
- **Signature** - Rich text signature appended to messages

You can have multiple identities per account (e.g., for aliases).

If you are using an Microsoft 365 account, there will be an additional section in this tab for you to add **shared mailboxes** here. After completely the flow, you will see the shared mailbox as a separate account on the side bar.

#### Server Tab

For non-OAuth accounts:

- **Incoming Mail** - IMAP server, port, and security
- **Outgoing Mail** - SMTP server, port, and security
- **Check for New Mail** - How often to check for new messages outside of IDLE
- **Request Read Receipts** - When to request read receipts for outgoing messages
- **Server Mapping** - Map special folders if not auto-detected:
    - Sent folder
    - Drafts folder
    - Trash folder
    - Archive folder
    - Spam folder
- **Folder sync subscriptions** - Configure additional folders to be synced automatically
    - Manage folder sync - This is disabled by default. Enable it to see the UI to configure which folders to auto-sync
        - Sync all folders - Disabled by default. Enable it to sync all imap folders
        - Or just check only the folders you want to auto-sync
- **Trusted Certificates** - Manually trusted TLS certificates for this account's servers.

#### Security Tab

- **PGP** - PGP/GPG signing and encryption settings of your account
    - **Import Secret Keys** - Import your PGP secret key
    - **Key Servers** - A list of key servers to use. There are 3 defaults already. You can also add your own here
    - **Recipient Keys**
        - **Import** - Import public keys of your contacts 
        - **Search** - Search for public keys. Starts with WKD and then searches key servers 
        - **List** - There's a list below the above 2 buttons that shows the current stored public keys
- **S/MIME** - S/MIME cert based signing and encryption settings for your account
    - **Import .p12** - Import your .p12 certificate. Imported certificate will appear below
    - **Import** - Import recipient certificates here. Imported or auto-collected public certs will appear below

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
---

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
---

View information about Aerion:

- **Version** - Current Aerion version
- **GitHub** - Link to source code and issues
- **Privacy Policy** - How Aerion handles your data
- **Terms of Use** - Usage terms

## Applying Changes
---

Most settings take effect immediately. Some changes (like adding accounts or contact sources) may require a sync before you see results.

## Configuration Location
---

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
---

By default on Linux, Aerion uses `org.freedesktop.portal.Desktop` but if you launch Aerion from the terminal, notifications will not work. In those cases, you will want to use the `--dbus-notify` flag to launch Aerion.
